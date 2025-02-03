/*
 * MIT License
 *
 * Copyright (c) 2025 Joshua Horvath
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export function getLanguage(lang) {
    console.log("getLanguage: " + lang);
    // TODO get correct array for input and return
}

const german = ["Null", "Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Elf", "Zwölf", "Dreizehn", "Vierzehn", "Fünfzehn", "Sechzehn", "Siebzehn", "Achtzehn", "Neunzehn", "Zwanzig", "Einundzwanzig", "Zweiundzwanzig", "Dreiundzwanzig", "Vierundzwanzig", "Fünfundzwanzig", "Sechsundzwanzig", "Siebenundzwanzig", "Achtundzwanzig", "Neunundzwanzig", "Dreißig", "Einunddreißig", "Zweiunddreißig", "Dreiunddreißig", "Vierunddreißig", "Fünfunddreißig", "Sechsunddreißig", "Siebenunddreißig", "Achtunddreißig", "Neununddreißig", "Vierzig", "Einundvierzig", "Zweiundvierzig", "Dreiundvierzig", "Vierundvierzig", "Fünfundvierzig", "Sechsundvierzig", "Siebenundvierzig", "Achtundvierzig", "Neunundvierzig", "Fünfzig", "Einundfünfzig", "Zweiundfünfzig", "Dreiundfünfzig", "Vierundfünfzig", "Fünfundfünfzig", "Sechsundfünfzig", "Siebenundfünfzig", "Achtundfünfzig", "Neunundfünfzig", "Sechzig"];

const french = ["Zéro", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix", "Onze", "Douze", "Treize", "Quatorze", "Quinze", "Seize", "Dix-sept", "Dix-huit", "Dix-neuf", "Vingt", "Vingt et un", "Vingt-deux", "Vingt-trois", "Vingt-quatre", "Vingt-cinq", "Vingt-six", "Vingt-sept", "Vingt-huit", "Vingt-neuf", "Trente", "Trente et un", "Trente-deux", "Trente-trois", "Trente-quatre", "Trente-cinq", "Trente-six", "Trente-sept", "Trente-huit", "Trente-neuf", "Quarante", "Quarante et un", "Quarante-deux", "Quarante-trois", "Quarante-quatre", "Quarante-cinq", "Quarante-six", "Quarante-sept", "Quarante-huit", "Quarante-neuf", "Cinquante", "Cinquante et un", "Cinquante-deux", "Cinquante-trois", "Cinquante-quatre", "Cinquante-cinq", "Cinquante-six", "Cinquante-sept", "Cinquante-huit", "Cinquante-neuf", "Soixante"];

const ukrainian = ["Нуль", "Один", "Два", "три", "чотири", "П'ять", "Шість", "Сім", "вісім", "Дев'ять", "десять", "Одинадцять", "Дванадцять", "Тринадцять", "Чотирнадцять", "П'ятнадцять", "Шістнадцять", "Сімнадцять", "Вісімнадцять", "Дев'ятнадцять", "Двадцять", "Двадцять один", "Двадцять два", "Двадцять три", "Двадцять чотири", "Двадцять п'ять", "Двадцять шість", "Двадцять сім", "Двадцять вісім", "Двадцять дев'ять", "Тридцять", "Тридцять один", "Тридцять два", "Тридцять три", "Тридцять чотири", "Тридцять п'ять", "Тридцять шість", "Тридцять сім", "Тридцять вісім", "Тридцять дев'ять", "Сорок", "Сорок один", "сорок два", "Сорок три", "Сорок чотири", "Сорок п'ять", "Сорок шість", "Сорок сім", "Сорок вісім", "Сорок дев'ять", "П'ятдесят", "П'ятдесят один", "П'ятдесят два", "П'ятдесят три", "П'ятдесят чотири", "П'ятдесят п'ять", "П'ятдесят шість", "П'ятдесят сім", "П'ятдесят вісім", "П'ятдесят дев'ять", "Шістдесят"];

const latin = ["zero", "one", "duo", "tres", "quattuor", "quinque", "sex", "septem", "octo", "novem", "decem", "undecim", "duodecim", "tredecim", "quattuordecim", "quindecim", "sedecim", "septemdecim", "decem et octo", "undeviginti", "viginti", "viginti unus", "viginti duo", "viginti tres", "xxiiii", "viginti quinque", "viginti sex", "viginti septem", "viginti octo", "viginti et novem", "triginta", "triginta et unum", "triginta duo", "triginta tres", "triginta quattuor", "triginta quinque", "triginta sex", "triginta septem", "triginta octo", "triginta novem", "quadraginta", "quadraginta unum", "duo et quadraginta", "quadraginta tres", "quadraginta quattuor", "quadraginta quinque", "quadraginta sex", "quadraginta septem", "quadraginta octo", "undequinquaginta", "quinquaginta", "quinquaginta unum", "quinquaginta duo", "quinquaginta tres", "quinquaginta quattuor", "quinquaginta quinque", "quinquaginta sex", "quinquaginta septem", "quinquaginta octo", "quinquaginta novem", "sexaginta"];

const english = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty-one", "Twenty-two", "Twenty-three", "Twenty-four", "Twenty-five", "Twenty-six", "Twenty-seven", "Twenty-eight", "Twenty-nine", "Thirty", "Thirty-one", "Thirty-two", "Thirty-three", "Thirty-four", "Thirty-five", "Thirty-six", "Thirty-seven", "Thirty-eight", "Thirty-nine", "Forty", "Forty-one", "Forty-two", "Forty-three", "Forty-four", "Forty-five", "Forty-six", "Forty-seven", "Forty-eight", "Forty-nine", "Fifty", "Fifty-one", "Fifty-two", "Fifty-three", "Fifty-four", "Fifty-five", "Fifty-six", "Fifty-seven", "Fifty-eight", "Fifty-nine", "Sixty"];

const hungarian = ["Nulla", "Egy", "Kettő", "Három", "Négy", "Öt", "Hat", "Hét", "Nyolc", "Kilenc", "Tíz", "Tizenegy", "Tizenkét", "Tizenhárom", "Tizennégy", "Tizenöt", "Tizenhat", "Tizenhét", "Tizennyolc", "Tizenkilenc", "Húsz", "Huszonegy", "Húszonkettő", "Huszonhárom", "Huszonnégy", "Huszonöt", "Huszonhat", "Huszonhét", "Huszonnyolc", "Huszonkilenc", "Harminc", "Harmincegy", "Harminckettő", "Harminchárom", "Harmincnégy", "Harmincöt", "Harminchat", "Harminchét", "Harmincnyolc", "Harminckilenc", "Negyven", "Negyvenegy", "Negyvenkét", "Negyvenhárom", "Negyvennégy", "Negyvenöt", "Negyvenhat", "Negyvenhét", "Negyvennyolc", "Negyvenkilenc", "Ötven", "Ötvenegy", "Ötvenkét", "Ötvenhárom", "Ötvennégy", "Ötvenöt", "Ötvenhat", "Ötvenhét", "Ötvennyolc", "Ötvenkilenc", "Hatvan"];

const spanish = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Once", "Doce", "Trece", "Catorce", "Quince", "Dieciséis", "Diecisiete", "Dieciocho", "Diecinueve", "Veinte", "Veintiuno", "Veintidós", "Veintitrés", "Veinticuatro", "Veinticinco", "Veintiséis", "Veintisiete", "Veintiocho", "Veintinueve", "Treinta", "Treinta y uno", "Treinta y dos", "Treinta y tres", "Treinta y cuatro", "Treinta y cinco", "Treinta y seis", "Treinta y siete", "Treinta y ocho", "Treinta y nueve", "Cuarenta", "Cuarenta y uno", "Cuarenta y dos", "Cuarenta y tres", "Cuarenta y cuatro", "Cuarenta y cinco", "Cuarenta y seis", "Cuarenta y siete", "Cuarenta y ocho", "Cuarenta y nueve", "Cincuenta", "Cincuenta y uno", "Cincuenta y dos", "Cincuenta y tres", "Cincuenta y cuatro", "Cincuenta y cinco", "Cincuenta y seis", "Cincuenta y siete", "Cincuenta y ocho", "Cincuenta y nueve", "Sesenta"];

const italian = ["Zero", "Uno", "Due", "Tre", "Quattro", "Cinque", "Sei", "Sette", "Otto", "Nove", "Dieci", "Undici", "Dodici", "Tredici", "Quattordici", "Quindici", "Sedici", "Diciassette", "Diciotto", "Diciannove", "Venti", "Ventuno", "Ventidue", "Ventitré", "Ventiquattro", "Venticinque", "Ventisei", "Ventisette", "Ventotto", "Ventinove", "Trenta", "Trentuno", "Trentadue", "Trentatré", "Trentaquattro", "Trentacinque", "Trentasei", "Trentasette", "Trentotto", "Trentanove", "Quaranta", "Quarantuno", "Quarantadue", "Quarantatré", "Quarantaquattro", "Quarantacinque", "Quarantasei", "Quarantasette", "Quarantotto", "Quarantanove", "Cinquanta", "Cinquantuno", "Cinquantadue", "Cinquantatré", "Cinquantaquattro", "Cinquantacinque", "Cinquantasei", "Cinquantasette", "Cinquantotto", "Cinquantanove", "Sessanta"];

