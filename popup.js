// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

//to show loading screen until website is updated.
//TODO
//AJAX & ASP
//TODO
//asynchronous shit
chrome.runtime.sendMessage({popupOpen: true});

window.onload=function(){

  //query for link
  function getMessage(callback) {
    chrome.storage.sync.get("key", function (result) {
    var url_link = result.key;
    callback(url_link);
    console.log(url_link + " is gotten");
    })};

  //store link
  getMessage(function(url_link) {
        document.getElementById("qrcodehere").innerHTML = url_link;
        console.log("Text is changed to " + url_link);
    
    	var url_link;
          document.getElementById("qrcodehere").innerHTML = url_link;
          console.log(url_link);
          QRCode.toCanvas(document.getElementById('canvas'), `${url_link}`, function (error) {
            if (error) console.error(error)
            console.log('success!');
            })
		}
  )   	
};
      
