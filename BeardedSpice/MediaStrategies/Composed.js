//
//  Composed.plist
//  BeardedSpice
//
//  Created by Daniel Roseman on 23/06/2015.
//  Copyright (c) 2015 BeardedSpice. All rights reserved.
//
BSStrategy = {
  version:1,
  displayName:"Composed",
  acceptMethod: "predicateOnTab",
  acceptParams: {
    format:"SELF LIKE[c] '*play.composed.com*'",
    args: "url"
  },
  isPlaying: function () {return document.querySelectorAll('.player-buttons__pause').length != 0},
  toggle: function () {document.querySelectorAll('.player-buttons button')[1].click()},
  next: function () {document.querySelectorAll('.player-buttons__next')[0].click()},
  previous: function () {document.querySelectorAll('.player-buttons__previous')[0].click()},
  pause: function () {document.querySelectorAll('.player-buttons__pause')[0].click()},
  trackInfo: function () {
    return {
      'track': document.querySelectorAll('.player-controls__track')[0].title,
      'artist': document.querySelectorAll('.player-controls__composer')[0].textContent,
      'image': document.querySelectorAll('.player-controls__packshot img')[0].src
    }
  }
}
