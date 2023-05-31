// NOTES OF REACT  therotycle part
// REACT===React is a free and open source front-end javascript library for
// building user interface based on componets./its developed and  managed by facebook.
// react make single page application no reload or refresh on jumping on other page and link.
// it has  high demand due to fast speed, large community for your support
//
// features of react jsx, compontes,  one-way data binding,  virual dom  ,simlpicity, good performance


// NPM====npm is the worlds largest softwere registry
// the restry contains over 8 lakhs code packages its open source node packege manager.
// NODE js== is runtime enviroment that runs on cromes v8 engine

// LIBRARY == IS pre-defife heap of multiple codes we have to just call it
//  to use like consol.log its not softwere we can call work flow

// FRAMEWORK == is softwere it helps in bulding a kind of application
// framework decide workflow
// JEST= its unit testing framework.

// HTTPS = send uesers request to the server and server give the respons like otput.

// index.html =entry point of react app.
//         COMPLILER== is computer program that translate computer code written in one programing
// langues to another langues like source langues to target langues and/ aslo like to traslate  source code
// from a high-level programing langues to a lower level language.

// this keyword = is used reffer current  varable or object in a program


// PACKAGE.JOSN ++ this file profile application details such as version,node package description etc

//     fullforms
// MVC   = MODAL view controler
// HTTPS = hyper text transfer protocol SECURE.
// HTTP =  hyper text transef protocol.
// FTP =   file transfer protocol.
// API = application programing interface.
// JSX = javascript extentoins
// CDN = containt delevary network.
// NPM = NODE PACKEGE MANEGERS  // neds to install
// NPX = NODE PACKAGE EXPLORER.// do not need to install
// URL = universal resource locketer.
// TLD = TOP LEVEL DOMAINS. EX= .com, .in, .org
// .in = for india, .jovt for govrnment
// org = use for non profite organization.
// .com = comrtaial website.
// SPA = single page application

// HOISTING==== to go our website live , we have to perchage domain/server to host our website globaly

// topics wise notes===================
// props vrs state
// props are immutable      state are mutable
// props can not change     state can be changed.
// props get passed to      state is managed within the componets
//  the componants
// props are like a         state is like a varaible declered in a function body
// function parameter
//


//  REAL DOM                          VERSUAL DOM
//it updates slow                     it updates fast
//can directly updates HTML.          can not  directly update HTML
//creats a newDOM if element update.  only updates the jsx if elements updates.
//dom menuplationis very expensive    DOM maniplation is very easy
//Too much of memory wastage          No memory wastage.

// STATEFUL COMPONNENTS                   STATELESS COMPONENTS
// store info abaut state                 calculates the internal state of the coponants
//  change in memory
//  stateless compo notyfy them          the receive the props  from the stafull componats and
// abaut the requirement of the state    treat them as callback functions.

// NORMAL FUNCTION                       ARROW FUNCTION
// arrguments object are awailable       arguments objects are not awailable in arrow f.
// in normal function                      arrow function have not their own this.
// it has own this keyword                also not have construtiable

// spread opreter                         rest opreter


// GIT                                       GIT HUB
// git is softwere                         github is a service
// mentained linux                        it is mentained by microsoft since(2018)
// it install locally in systeam           it is use on web clowd base
// realised 2005                            realised 2008
// dont have user managment systeam         it has user manegment syteam
// git can manage code history               it manage git repojetry
// open source and free                       pay and free

// JAVASCRIPT                                  TYPESCRIPT
// its weakly type languse                    its strong typed langaues we have to define
//  we define it as let ,var                 data type hire
// its a sepret programing langues           its bult in javascript
// runs on directly any broweser            it needs a transpiler to convert to js babel
// use for small project                    mostly use for big projects
// it gives error while running             its gives error while we coding




// var                           let                              const
// can be Redeclare         can not Redeclare                     can not Redeclare
// can be Reassign          can be Reasign/update                 can not Reasign
// hoisting is applicable    H. not applicable                     H.not aplicable
// global &functional scope   Block scope                          Block scope


// for in loop               for of loop                          for each loop





// JAVASCRIPT FEATURES=
//  is a popular web scripting language and is used to client side and server side
// development  lightweight interpreted pl.,cross-platform compatible ,open sorce ,object orianted
// intergation with other backend and frontend technologies 
// ADVANTAGES==  ENHANCED INTRACTION js add intraction to the static web pages and 
// make them react to users'input 
// rich user interface js helps in making the ui of web app look good  and feel much better 
// js has countless freamworks and libries that extencivly used for web app and gamesof all kinds

// rule of type coversion 
// str = string 
// num = number 
// str  + str    = str 
// str + num =  str 
// str (- ,*, / , % , ) num  =  num 
// str (- ,*, / , % , ) str = num

  
// WHAT IS  OBJECT ORIANTED PROGRAMING CONCEPT
// Polymorphism, Abstraction , Incapsulation, Inheritance.
// BABEL = it is compiler which convert the jsx code into javascript object

// This. keyword in js refers to the currnyly calling object
// its commanly used in constructer to assingn values to object properties 
    
// a callback is a js function that is passed to another function as argument or parameter 

// cookies are   used to rememer information for latter use and also to record the browising 
// activty on a website like act as extra file of store the more information
// Copmonates+==
// coponants are a pieace of code that can resuse like function but powerfull than function
// pure componants-- in react are the componants
//  which do not re-render when the value of stets and props
// has been updated with the same values.
// DUMB COMPONANTS can easyly be defiend as a stateless functional componants
// class componats that has ES6 classit has life  cycle methods and state no needs
//  to use hooks
// componats shuld be independant to other functions for project.
// componts communication ==== pass data between componts call cc.
// STATE =====
// states are the objects which determine componats rendering  and behavior ,
// we can use them as a variable.
//  when state is update  render function re-render automatically.
// sending data to parent componats  is called lifting up state .
// we can do it only props ,state can not access outside the componets .
// we can not use state otside of the  variable .
// HOC===high order function this type of componts take input as function
//  and aslo  give out put as function
// hoc is function that takes a componants and return a new componants

// RENDER PROPS==== a componants with a render props takes a function that returns
//  a react elements and cal it
// instead of implementing its own render logic.

// PROPS ====
// props are the parameters of the componots with help of the we can share the data
//  between componants
// and they are read-only.React Props are read-only! You will get an error if you
// try to change their value.
// Props are arguments passed into React components

// LIFECYCLE METHOS === when a copmonets  creat , update or remove that time life
// cycle methods will call
// we can update state ,update variable ,call api ,loop, etc .
// JSX === is  a shortland for javascript xml it  allows html code inside js code dirctly.

// HOOKS === functional components do not have state and life  cycle methods
//  .to use that  we can import
//  hooks in fuctional componts we can not use hooks inside  class componts.
//


// WHAT IS EVENT LOOP=
// 

// WHAT IS CALLBACK HELL

// what is memozation

// scopes in js local, global,block & functional  

// WHAT IS MAP FILER & REDUCE====these are are higher order  funcction in js which  takes anothe
// fuction as argument inside them map ittret onevry element on array and give new arry 
// FILTER do some specfic opretion on array based upon condition pass in it& retun new array
// REDUCER = take whole array & convert into a single value it takes two parameter 
// accumelater and current value





// Hoisting==== is JavaScript's default behavior of moving declarations to the top.
//CLOSURE ==== a function with a lexical scope is knowns closure,it can  return
//  function in a function and take acess of parant function
// JAVASCRIPT   event loop hoisting clourse, call back hell semantry tag diff possit
// ab rel box modal
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

// LIST AND KEYS===Generally, the key should be a unique ID assigned to each item.
// As a last resort, you can use the array index as a key.

// GIT ===Git is a version control system.Git helps you keep track of code changes.
// Git is used to collaborate on code

// axios => promise based HTTP client
//      a library that we install to make API requests
//
// npm i axios
// import axios from "axios";axios.get('URL').then(res=>console.log(res))

// REST => Representational State Transfer
// get => accessing the data => Read
//     post => create a new data => Create
//     put => update the data => Update
//     delete => delete the data => Delete[10:30] Aditya  Bhoir

// Topics

// axios => promise based HTTP client

//      a library that we install to make API requests
// npm i axios import axios from "axios";
// axios.get('URL').then(res => console.log(res))
// REST => Representational State Transfer
// get => accessing the data => Read
// post => create a new data => Create
// put => update the data => Update
// delete => delete the data => Delete
// CRUD => Create Read Update Delete
// get => params, query
// post, put => body
// delete => params, query



// Topics
// React Router => to give URLs to our components
// Installation  npm i react-router-dom
// Setup the Routes
//  import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Link import { Link } from "react-router-dom";
// Nested Routes
// children:[ {},{} ]
//  import { Outlet } from 'react-router-dom';

// Topics MEMOIZATION

// Memoization => store the result, instead of recalculating it
// useMemo(fn,[]) => it lets store the result of a calculation between renrenders

//    => memoizes the result of a function call
// useCallback(fn,[]) => it will let you cache a function between rerenders

// 1. import { useRef } from 'react'
//     2. const inpRef = useRef()
//     3. ref={inpRef}
//  inpRef.current.value
//     inpRef.current.focus()

// DSA TOPICS
// statically typed
// //dynmically
// // arrays are reference types
// let arr=[1,2,3,3];
// let g=arr;
// g.push(99);
// console.log(arr);  //output
// console.log(g); // output

// arrays are contiguous blocks of memory
// or you can say they are placed next to each other

// Time complexity is dependent on your input size or
// is in relation with your input size
//  small O ,big o ,and theta
// big o --->worst case time complexity --->
// time complexity is NOT the time taken to run the algorithm on your system

// MY INTRODUCTION
//  GOOD MORNING thank you for this apportunity my name is kiran randhawa and i  pursued
// my graduation from mj college jalgoan i am skilled in react js and have good knowledge
//  javascript, html,and css,bootsrap using these i made some projects
// like shopping app , weather app, portfolio , digital lock , tip calculator and other small projects
// so believ that i am the right fit for this role.
//



// I DONT KNOW / sorry sir but i am not studying this topic yet , can i please request you
// to tell me more abaut this topic
// to be honest i cant recall the right now i will brush up more  on it after interviw

// seo meta tags acending and decending sibilings bdo tags global font and local font
// tags and element 

// HTML  tim berners lee is the devloper of html in 1990, threre are 6 headers in most html pages
// html use fixed tags define by language html is a subset of SGML it stand for 
// standerd generlized markup language  html page read and renderd by web browser
// WHITE,GREY, BLACK color has same amaunt of all the orginal color 
// <defaultFont> tag add specific a font for your whole page,  1024 charecters written with
// 1 kilobyte.
// html page  creat in world proccesor save it with ASCII It stand for american standerd code
// for information interchange the most basic element of any html page is ASCII text

// <ISINDEX> The  tag which allows some web server search enginge to search your web server
// MIMI text file saved with HTML extension it stan for multypurpose internet mail extentions
// vlink means visited link 

// CSS universal selecter is selecter that matches any element withaut taking perticuler name 
// it apply on whole  page.


