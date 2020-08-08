// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Some code that i do not understand
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'developer.chrome.com'},
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.popupOpen) {
    // To deal with asynchronous operation, and store url.
    function getMessage(callback) {
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      var url_link = tabs[0].url;
      callback(url_link);
      console.log(url_link + " is summoned");
      })};

    getMessage(function(url_link) {
        chrome.storage.sync.set({ key: url_link }, function () {
          console.log(url_link + "is stored");     
          var QRCode = require('qrcode')
      });
    });
  }
});

//find out how to used qrcode function