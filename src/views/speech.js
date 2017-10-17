var langs =
                    [['Afrikaans', ['af-ZA']],
                    ['áŠ áˆ›áˆ­áŠ›', ['am-ET']],
                    ['AzÉ™rbaycanca', ['az-AZ']],
                    ['à¦¬à¦¾à¦‚à¦²à¦¾', ['bn-BD', 'à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶'],
                        ['bn-IN', 'à¦­à¦¾à¦°à¦¤']],
                    ['Bahasa Indonesia', ['id-ID']],
                    ['Bahasa Melayu', ['ms-MY']],
                    ['CatalÃ ', ['ca-ES']],
                    ['ÄŒeÅ¡tina', ['cs-CZ']],
                    ['Dansk', ['da-DK']],
                    ['Deutsch', ['de-DE']],
                    ['English', ['en-AU', 'Australia'],
                        ['en-CA', 'Canada'],
                        ['en-IN', 'India'],
                        ['en-KE', 'Kenya'],
                        ['en-TZ', 'Tanzania'],
                        ['en-GH', 'Ghana'],
                        ['en-NZ', 'New Zealand'],
                        ['en-NG', 'Nigeria'],
                        ['en-ZA', 'South Africa'],
                        ['en-PH', 'Philippines'],
                        ['en-GB', 'United Kingdom'],
                        ['en-US', 'United States']],
                    ['EspaÃ±ol', ['es-AR', 'Argentina'],
                        ['es-BO', 'Bolivia'],
                        ['es-CL', 'Chile'],
                        ['es-CO', 'Colombia'],
                        ['es-CR', 'Costa Rica'],
                        ['es-EC', 'Ecuador'],
                        ['es-SV', 'El Salvador'],
                        ['es-ES', 'EspaÃ±a'],
                        ['es-US', 'Estados Unidos'],
                        ['es-GT', 'Guatemala'],
                        ['es-HN', 'Honduras'],
                        ['es-MX', 'MÃ©xico'],
                        ['es-NI', 'Nicaragua'],
                        ['es-PA', 'PanamÃ¡'],
                        ['es-PY', 'Paraguay'],
                        ['es-PE', 'PerÃº'],
                        ['es-PR', 'Puerto Rico'],
                        ['es-DO', 'RepÃºblica Dominicana'],
                        ['es-UY', 'Uruguay'],
                        ['es-VE', 'Venezuela']],
                    ['Euskara', ['eu-ES']],
                    ['Filipino', ['fil-PH']],
                    ['FranÃ§ais', ['fr-FR']],
                    ['Basa Jawa', ['jv-ID']],
                    ['Galego', ['gl-ES']],
                    ['àª—à«àªœàª°àª¾àª¤à«€', ['gu-IN']],
                    ['Hrvatski', ['hr-HR']],
                    ['IsiZulu', ['zu-ZA']],
                    ['Ãslenska', ['is-IS']],
                    ['Italiano', ['it-IT', 'Italia'],
                        ['it-CH', 'Svizzera']],
                    ['à²•à²¨à³à²¨à²¡', ['kn-IN']],
                    ['áž—áž¶ážŸáž¶ážáŸ’áž˜áŸ‚ážš', ['km-KH']],
                    ['LatvieÅ¡u', ['lv-LV']],
                    ['LietuviÅ³', ['lt-LT']],
                    ['à´®à´²à´¯à´¾à´³à´‚', ['ml-IN']],
                    ['à¤®à¤°à¤¾à¤ à¥€', ['mr-IN']],
                    ['Magyar', ['hu-HU']],
                    ['àº¥àº²àº§', ['lo-LA']],
                    ['Nederlands', ['nl-NL']],
                    ['à¤¨à¥‡à¤ªà¤¾à¤²à¥€ à¤­à¤¾à¤·à¤¾', ['ne-NP']],
                    ['Norsk bokmÃ¥l', ['nb-NO']],
                    ['Polski', ['pl-PL']],
                    ['PortuguÃªs', ['pt-BR', 'Brasil'],
                        ['pt-PT', 'Portugal']],
                    ['RomÃ¢nÄƒ', ['ro-RO']],
                    ['à·ƒà·’à¶‚à·„à¶½', ['si-LK']],
                    ['SlovenÅ¡Äina', ['sl-SI']],
                    ['Basa Sunda', ['su-ID']],
                    ['SlovenÄina', ['sk-SK']],
                    ['Suomi', ['fi-FI']],
                    ['Svenska', ['sv-SE']],
                    ['Kiswahili', ['sw-TZ', 'Tanzania'],
                        ['sw-KE', 'Kenya']],
                    ['áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜', ['ka-GE']],
                    ['Õ€Õ¡ÕµÕ¥Ö€Õ¥Õ¶', ['hy-AM']],
                    ['à®¤à®®à®¿à®´à¯', ['ta-IN', 'à®‡à®¨à¯à®¤à®¿à®¯à®¾'],
                        ['ta-SG', 'à®šà®¿à®™à¯à®•à®ªà¯à®ªà¯‚à®°à¯'],
                        ['ta-LK', 'à®‡à®²à®™à¯à®•à¯ˆ'],
                        ['ta-MY', 'à®®à®²à¯‡à®šà®¿à®¯à®¾']],
                    ['à°¤à±†à°²à±à°—à±', ['te-IN']],
                    ['Tiáº¿ng Viá»‡t', ['vi-VN']],
                    ['TÃ¼rkÃ§e', ['tr-TR']],
                    ['Ø§ÙØ±Ø¯ÙÙˆ', ['ur-PK', 'Ù¾Ø§Ú©Ø³ØªØ§Ù†'],
                        ['ur-IN', 'Ø¨Ú¾Ø§Ø±Øª']],
                    ['Î•Î»Î»Î·Î½Î¹ÎºÎ¬', ['el-GR']],
                    ['Ð±ÑŠÐ»Ð³Ð°Ñ€ÑÐºÐ¸', ['bg-BG']],
                    ['PÑƒÑÑÐºÐ¸Ð¹', ['ru-RU']],
                    ['Ð¡Ñ€Ð¿ÑÐºÐ¸', ['sr-RS']],
                    ['Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°', ['uk-UA']],
                    ['í•œêµ­ì–´', ['ko-KR']],
                    ['ä¸­æ–‡', ['cmn-Hans-CN', 'æ™®é€šè¯ (ä¸­å›½å¤§é™†)'],
                        ['cmn-Hans-HK', 'æ™®é€šè¯ (é¦™æ¸¯)'],
                        ['cmn-Hant-TW', 'ä¸­æ–‡ (å°ç£)'],
                        ['yue-Hant-HK', 'ç²µèªž (é¦™æ¸¯)']],
                    ['æ—¥æœ¬èªž', ['ja-JP']],
                    ['à¤¹à¤¿à¤¨à¥à¤¦à¥€', ['hi-IN']],
                    ['à¸ à¸²à¸©à¸²à¹„à¸—à¸¢', ['th-TH']]];
        
                for (var i = 0; i < langs.length; i++) {
                    select_language.options[i] = new Option(langs[i][0], i);
                }
                select_language.selectedIndex = 41;
                updateCountry();
                select_dialect.selectedIndex = 0;
                showInfo('info_start');
        
                function updateCountry() {
                    for (var i = select_dialect.options.length - 1; i >= 0; i--) {
                        select_dialect.remove(i);
                    }
                    var list = langs[select_language.selectedIndex];
                    for (var i = 1; i < list.length; i++) {
                        select_dialect.options.add(new Option(list[i][1], list[i][0]));
                    }
                    select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
                }
        
                var create_email = false;
                var final_transcript = '';
                var recognizing = false;
                var ignore_onend;
                var start_timestamp;
                if (!('webkitSpeechRecognition' in window)) {
                    upgrade();
                } else {
                    start_button.style.display = 'inline-block';
                    var recognition = new webkitSpeechRecognition();
                    recognition.continuous = true;
                    recognition.interimResults = true;
        
                    recognition.onstart = function () {
                        recognizing = true;
                        showInfo('info_speak_now');
                        start_img.src = '/intl/en/chrome/assets/common/images/content/mic-animate.gif';
                    };
        
                    recognition.onerror = function (event) {
                        if (event.error == 'no-speech') {
                            start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
                            showInfo('info_no_speech');
                            ignore_onend = true;
                        }
                        if (event.error == 'audio-capture') {
                            start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
                            showInfo('info_no_microphone');
                            ignore_onend = true;
                        }
                        if (event.error == 'not-allowed') {
                            if (event.timeStamp - start_timestamp < 100) {
                                showInfo('info_blocked');
                            } else {
                                showInfo('info_denied');
                            }
                            ignore_onend = true;
                        }
                    };
        
                    recognition.onend = function () {
                        recognizing = false;
                        if (ignore_onend) {
                            return;
                        }
                        start_img.src = '/intl/en/chrome/assets/common/images/content/mic.gif';
                        if (!final_transcript) {
                            showInfo('info_start');
                            return;
                        }
                        showInfo('');
                        if (window.getSelection) {
                            window.getSelection().removeAllRanges();
                            var range = document.createRange();
                            range.selectNode(document.getElementById('final_span'));
                            window.getSelection().addRange(range);
                        }
                        if (create_email) {
                            create_email = false;
                            createEmail();
                        }
                    };
        
                    recognition.onresult = function (event) {
                        var interim_transcript = '';
                        if (typeof (event.results) == 'undefined') {
                            recognition.onend = null;
                            recognition.stop();
                            upgrade();
                            return;
                        }
                        for (var i = event.resultIndex; i < event.results.length; ++i) {
                            if (event.results[i].isFinal) {
                                final_transcript += event.results[i][0].transcript;
                            } else {
                                interim_transcript += event.results[i][0].transcript;
                            }
                        }
                        final_transcript = capitalize(final_transcript);
                        final_span.innerHTML = linebreak(final_transcript);
                        interim_span.innerHTML = linebreak(interim_transcript);
                        if (final_transcript || interim_transcript) {
                            showButtons('inline-block');
                        }
                    };
                }
        
                function upgrade() {
                    start_button.style.visibility = 'hidden';
                    showInfo('info_upgrade');
                }
        
                var two_line = /\n\n/g;
                var one_line = /\n/g;
                function linebreak(s) {
                    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
                }
        
                var first_char = /\S/;
                function capitalize(s) {
                    return s.replace(first_char, function (m) { return m.toUpperCase(); });
                }
        
                function startButton(event) {
                    if (recognizing) {
                        recognition.stop();
                        return;
                    }
                    final_transcript = '';
                    recognition.lang = select_dialect.value;
                    recognition.start();
                    ignore_onend = false;
                    final_span.innerHTML = '';
                    interim_span.innerHTML = '';
                    start_img.src = '/intl/en/chrome/assets/common/images/content/mic-slash.gif';
                    showInfo('info_allow');
                    showButtons('none');
                    start_timestamp = event.timeStamp;
                }
        
                function showInfo(s) {
                    if (s) {
                        for (var child = info.firstChild; child; child = child.nextSibling) {
                            if (child.style) {
                                child.style.display = child.id == s ? 'inline' : 'none';
                            }
                        }
                        info.style.visibility = 'visible';
                    } else {
                        info.style.visibility = 'hidden';
                    }
                }
        
                var current_style;
                function showButtons(style) {
                    if (style == current_style) {
                        return;
                    }
                    current_style = style;
                }