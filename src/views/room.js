export class Room{
    constructor(){
        this.code = null;
    }

    activate(args){
        this.code = args.code;
    }

    attached(){
        this.create_email = false;
        this.current_transcript = '';
        this.previous_transcript = '';
        this.recognizing = false;
        this.ignore_onend;
        this.start_timestamp;
        this.spoken_words = [];
        this.active = false;
        var controller = this;
        if (!('webkitSpeechRecognition' in window)) {
            //upgrade();
        } else {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;

            this.recognition.onstart = function () {
                controller.recognizing = true;
            };

            this.recognition.onerror = function (event) {
                if (event.error == 'no-speech') {
                    controller.ignore_onend = true;
                }
                if (event.error == 'audio-capture') {
                    controller.ignore_onend = true;
                }
                if (event.error == 'not-allowed') {
                    controller.ignore_onend = true;
                }
            };

            this.recognition.onend = function (event) {
                controller.recognizing = false;
                if (controller.ignore_onend) {
                    return;
                }
            };

            this.recognition.onresult = function (event) {
                var interim_transcript = '';

                if (typeof (event.results) == 'undefined') {
                    controller.recognition.onend = null;
                    controller.recognition.stop();
                    return;
                }
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        controller.current_transcript += event.results[i][0].transcript;
                    } else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                }
                console.log(controller.current_transcript);
                controller.speach();
            };
        }
    }
    speach(){
        if(this.current_transcript.length > this.previous_transcript.length){
        let wordsToSpeak = this.current_transcript.split(" ");
        for(let i = 0; i!= wordsToSpeak.length;i++){
            if(this.spoken_words[i] != wordsToSpeak[i]){
                var msg = new SpeechSynthesisUtterance(wordsToSpeak[i]);
                window.speechSynthesis.lang = "sv-SE";
                window.speechSynthesis.speak(msg);
                this.spoken_words.push(wordsToSpeak[i]);
            }
        }
        this.previous_transcript = this.current_transcript;
        }
    }
    getTranscript(){
    }
    capitalize(s) {
        return s.replace(first_char, function (m) { return m.toUpperCase(); });
    }
    startButton(event) {
        this.result = false;
        console.log("START");
        if (this.recognizing) {
            this.recognition.stop();
            return;
        }
        this.current_transcript = '';
        this.recognition.lang = "sv";
        this.recognition.start();
        this.ignore_onend = false;
        //this.start_timestamp = event.timeStamp;
    }
    contains(a, obj) {
        var i = a.length;
        while (i--) {
           if (a[i] === obj) {
               return true;
           }
        }
        return false;
    }
}