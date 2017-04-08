function liveonair() {
	var d = new Date();
	var offset = d.getTimezoneOffset();
	var weekday = d.getUTCDay();
	var hour =  d.getUTCHours() + 1;
	var weekNumber = 'B';
	var live = 'Off-Air';
	
	if (weekNumber == 'A') {
		if (weekday == 1) {
	    if (hour == 10) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 11) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 12) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 13) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 14) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 15) {
	      live = "Fractal";
	    }
	    else if (hour == 16) {
	      live = "New Music Mondays";
	    }
	    else if (hour == 17) {
	      live = "Kult";
	    }
	    else if (hour == 18) {
	      live = "Give Me Some Rope";
	    }
	    else if (hour == 19) {
	      live = "Give Me Some Rope";
	    }
		}
		
		if (weekday == 2) {
	    if (hour == 10) {
	      live = "Chaz and Blues";
	    }
	    else if (hour == 11) {
	      live = "Chaz and Blues";
	    }
	    else if (hour == 12) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 13) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 14) {
	      live = "The Folk Show";
	    }
	    else if (hour == 15) {
	      live = "On A Whim";
	    }
	    else if (hour == 16) {
	      live = "Fun With Fraz";
	    }
	    else if (hour == 17) {
	      live = "Suspended In Gaffa";
	    }
	    else if (hour == 18) {
	      live = "Industrial Withdrawals";
	    }
	    else if (hour == 19) {
	      live = "All Night Passion";
	    }
		}
		
		if (weekday == 3) {
	    if (hour == 10) {
	      live = "Warped";
	    }
	    else if (hour == 11) {
	      live = "Warped";
	    }
	    else if (hour == 12) {
	      live = "Tic-tacs Podcast";
	    }
	    else if (hour == 13) {
	      live = "Philisophy Talks";
	    }
	    else if (hour == 14) {
	      live = "Eclectic Mixtape";
	    }
	    else if (hour == 15) {
	      live = "Film, Chat & Chill";
	    }
	    else if (hour == 16) {
	      live = "Silver City";
	    }
	    else if (hour == 17) {
	      live = "Granite Dreaming";
	    }
	    else if (hour == 18) {
	      live = "Hip-hop Society";
	    }
	    else if (hour == 19) {
	      live = "Sine Causa";
	    }
		}
		
		if (weekday == 4) {
	    if (hour == 10) {
	      live = "Breakfast w/ Jim & Olaf";
	    }
	    else if (hour == 11) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 12) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 13) {
	      live = "Aberdeen Jazz Festival";
	    }
	    else if (hour == 14) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 15) {
	      live = "The Lawless Hour";
	    }
	    else if (hour == 16) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 17) {
	      live = "The Trees Are Calling Me Names";
	    }
	    else if (hour == 18) {
	      live = "Mr Follow Follow";
	    }
	    else if (hour == 19) {
	      live = "Mr Follow Follow";
	    }
		}
		
		if (weekday == 5) {
	    if (hour == 10) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 11) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 12) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 13) {
	      live = "Leave It For Tomorrow";
	    }
	    else if (hour == 14) {
	      live = "Tom & Callum's Power Hour";
	    }
	    else if (hour == 15) {
	      live = "Indigo";
	    }
	    else if (hour == 16) {
	      live = "Indigo";
	    }
	    else if (hour == 17) {
	      live = "Andys Funk & Soul Fridays";
	    }
	    else if (hour == 18) {
	      live = "Solar Lodge";
	    }
	    else if (hour == 19) {
	      live = "Solar Lodge";
	    }
		}
		
	}
	
	if (weekNumber == 'B') {
		if (weekday == 1) {
	    if (hour == 13) {
	      live = "Music Highlights";
	    }
	    else if (hour == 14) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 15) {
	      live = "Fractal";
	    }
	    else if (hour == 16) {
	      live = "Fractal";
	    }
	    else if (hour == 17) {
	      live = "Kult";
	    }
	    else if (hour == 18) {
	      live = "Fires of Phlegethon";
	    }
		}
		
		if (weekday == 2) {
	    if (hour == 17) {
	      live = "Suspended In Gaffa";
	    }
	    else if (hour == 18) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 19) {
	      live = "Industrial Withdrawals";
	    }
		}
		
		if (weekday == 3) {
	    if (hour == 10) {
	      live = "Warped";
	    }
	    else if (hour == 11) {
	      live = "Warped";
	    }
	    else if (hour == 16) {
	      live = "Hip-Hop & RnB Society";
	    }
	    else if (hour == 17) {
	      live = "Granite Dreaming";
	    }
	    else if (hour == 18) {
	      live = "Rai Stones Exchange";
	    }
	    else if (hour == 19) {
	      live = "Rai Stones Exchange";
	    }
		}
		
		if (weekday == 4) {
	    if (hour == 15) {
	      live = "The Lawless Hour";
	    }
	    else if (hour == 16) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 17) {
	      live = "The Trees Are Calling Me Names";
	    }
	    else if (hour == 18) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 19) {
	      live = "ASR Playlist";
	    }
	    else if (hour == 20) {
	      live = "Rhythm";
	    }
		}
		
		if (weekday == 5) {
	    if (hour == 13) {
	      live = "Leave It For Tomorrow";
	    }
	    else if (hour == 14) {
	      live = "Tom & Callum's Power Hour";
	    }
	    else if (hour == 17) {
	      live = "Ciaran Donaghy";
	    }
	    else if (hour == 18) {
	      live = "Carpet Shark";
	    }
		}
	}
	
	return live;
	
};