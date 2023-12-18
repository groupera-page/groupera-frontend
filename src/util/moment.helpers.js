import moment from "moment/moment";

moment.locale('de', {
	months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.'.split('_'),
	monthsParseExact : true,
	weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	weekdaysParseExact : true,
	longDateFormat : {
		LT : 'HH:mm',
		LTS : 'HH:mm:ss',
		L : 'DD.MM.YYYY',
		LL : 'D. MMMM YYYY',
		LLL : 'D. MMMM YYYY HH:mm',
		LLLL : 'dddd, D. MMMM YYYY HH:mm'
	},
	calendar : {
		sameDay : '[Heute um] LT',
		nextDay : '[Morgen um] LT',
		nextWeek : 'dddd [um] LT',
		lastDay : '[Gestern um] LT',
		lastWeek : '[letzten] dddd [um] LT',
		sameElse : 'L'
	},
	relativeTime : {
		future : 'in %s',
		past : 'vor %s',
		s : 'ein paar Sekunden',
		m : 'einer Minute',
		mm : '%d Minuten',
		h : 'einer Stunde',
		hh : '%d Stunden',
		d : 'einem Tag',
		dd : '%d Tagen',
		M : 'einem Monat',
		MM : '%d Monaten',
		y : 'einem Jahr',
		yy : '%d Jahren'
	},
	dayOfMonthOrdinalParse : /\d{1,2}\./,
	ordinal : function (number) {
		return number + '.';
	},
	meridiemParse : /AM|PM/,
	isPM : function (input) {
		return input === 'PM';
	},
	meridiem : function (hours) {
		return hours < 12 ? 'AM' : 'PM';
	},
	week : {
		dow : 1, // Montag ist der erste Tag der Woche.
		doy : 4  // Dient zur Bestimmung der ersten Woche des Jahres.
	}
});