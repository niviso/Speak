import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService, FetchConfig, AuthorizeStep } from 'aurelia-auth';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService,HttpClient,FetchConfig)
export class App {
  constructor(authService,httpClient, fetchConfig) {
    this.auth = authService;
    this.httpClient=httpClient;
    this.fetchConfig=fetchConfig;
  }


  configureRouter(config, router) {
    config.title = 'Beyond';
    config.map([
      {route: ['/'], name: 'home', moduleId: 'views/home', nav: true, title: 'Home'},
     /*  {route: 'blog/:id',  name: 'bloggs', moduleId: 'blog/blog', nav: true, title: 'BLOGG',href: '/blog'},
      {route: 'blog/:id/beta',  name: 'preview', moduleId: 'blog/blog-preview', nav: true, title: 'BLOGG',href: '/beta'},
      {route: 'blog/:id/post/:postid',  name: 'post', moduleId: 'blog/blog', nav: true, title: '',href: '#/post'},
      {route: 'portal/:id/',  name: 'portal', moduleId: 'portal/portal', nav: true, title: 'Learnify portal',href: '/portal'},
      {route: 'portal/:id/create/',  name: 'create', moduleId: 'portal/portal-post', nav: true, title: 'Create post',href: '#/create'},
      {route: 'portal/:id/edit/:postid',  name: 'edit', moduleId: 'portal/portal-post', nav: true, title: 'Edit post',href: '#/edit'} */
    ]);
    this.router = router;
  }



}
