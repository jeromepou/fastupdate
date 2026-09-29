/* airports.js — Airport database for FAST Update Generator
   Fields per line:  ICAO | IATA | City | Airport name | Country | Rank (1-4) | Alt search terms | Former codes | Airline airport (optional)
   Last field: an airport WITHOUT airline service (Le Bourget, Teterboro...) names the closest airport that has some, as CODE:km
   (LFPB has LFPG:9 -> the Travel email asks for Paris - Charles de Gaulle). Edit or delete that field to change a case.
   Source: OurAirports (public domain) — https://ourairports.com/data/ — built 2026-09-29.
   Closed airports, heliports and balloon ports are excluded. 19956 airports (19168 with ICAO, 8954 with IATA).
   Editing: one airport per line; keep the '|' separators. Cities of a few hubs were corrected by hand
   (e.g. EBBR = Brussels, not Zaventem). Never use a backtick or ${ inside the data. */
window.KO_AIRPORTS_COUNTRIES = {"AE":"United Arab Emirates","AF":"Afghanistan","AG":"Antigua and Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AZ":"Azerbaijan","BA":"Bosnia and Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"Saint Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Caribbean Netherlands","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos (Keeling) Islands","CD":"Democratic Republic of the Congo","CF":"Central African Republic","CG":"Republic of the Congo","CH":"Switzerland","CI":"Côte d'Ivoire","CK":"Cook Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CR":"Costa Rica","CU":"Cuba","CV":"Cape Verde","CW":"Curaçao","CX":"Christmas Island","CY":"Cyprus","CZ":"Czech Republic","DE":"Germany","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican Republic","DZ":"Algeria","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western Sahara (disputed territory)","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","FI":"Finland","FJ":"Fiji","FK":"Falkland Islands","FM":"Micronesia","FO":"Faroe Islands","FR":"France","GA":"Gabon","GB":"United Kingdom","GD":"Grenada","GE":"Georgia","GF":"French Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial Guinea","GR":"Greece","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong Kong","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of Man","IN":"India","IO":"British Indian Ocean Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"Saint Kitts and Nevis","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KY":"Cayman Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"Saint Lucia","LK":"Sri Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MD":"Moldova","ME":"Montenegro","MF":"Saint Martin","MG":"Madagascar","MH":"Marshall Islands","MK":"North Macedonia","ML":"Mali","MM":"Myanmar","MN":"Mongolia","MO":"Macau","MP":"Northern Mariana Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New Caledonia","NE":"Niger","NF":"Norfolk Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French Polynesia","PG":"Papua New Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"Saint Pierre and Miquelon","PR":"Puerto Rico","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Russia","RW":"Rwanda","SA":"Saudi Arabia","SB":"Solomon Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"Saint Helena, Ascension and Tristan da Cunha","SI":"Slovenia","SK":"Slovakia","SL":"Sierra Leone","SM":"San Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South Sudan","ST":"São Tomé and Principe","SV":"El Salvador","SX":"Sint Maarten","SY":"Syria","SZ":"Eswatini","TC":"Turks and Caicos Islands","TD":"Chad","TF":"French Southern and Antarctic Lands","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad and Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"United States Minor Outlying Islands","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VC":"Saint Vincent and the Grenadines","VE":"Venezuela","VG":"British Virgin Islands","VI":"U.S. Virgin Islands","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis and Futuna","WS":"Samoa","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"South Africa","ZM":"Zambia","ZW":"Zimbabwe"};
window.KO_AIRPORTS_DATA = `
AAXX||Rothera Point|Aeródromo de Punto Rothera|AQ|1
AGAF|AFT|Bila|Afutara|SB|1|||AGGA:62
AGAR|RNA|Arona|Ulawa|SB|1|||AGGK:66
AGAT|ATD|Atoifi|Uru Harbour|SB|1|||AGGA:41
AGBA|VEV|Barakoma||SB|1|||AGGN:27
AGBT|BPF|Batuna Mission Station|Batuna|SB|1|||AGOK:22
AGEV|GEF|Liangia|Geva|SB|1|||AGGN:65
AGGA|AKS|Auki|Gwaunaru'u|SB|2
AGGB|BNY|Anua|Bellona/Anua|SB|2
AGGC|CHY|Choiseul Bay||SB|2
AGGE|BAS|Ballalae||SB|2
AGGF|FRE|Fera Island|Fera/Maringe|SB|2
AGGH|HIR|Honiara||SB|4
AGGI|MBU|Mbambanakira|Babanakira|SB|1|||AGGH:43
AGGJ|AVU|Avu Avu||SB|1|||AGGU:45
AGGK|IRA|Kirakira|Ngorangora|SB|2
AGGL|SCZ|Santa Cruz/Graciosa Bay/Luova||SB|2
AGGM|MUA|Munda||SB|3
AGGN|GZO|Gizo|Nusatupe|SB|2
AGGO|MNY|Stirling Island|Mono|SB|2
AGGP|PRS|Parasi||SB|1|||AGGU:70
AGGR|RNL|Rennell Island|Rennell/Tingoa|SB|2
AGGS|EGM|Sege||SB|1|||AGOK:40
AGGT|NNB|Santa Ana Island|Santa Ana|SB|2
AGGU|RUS|Marau||SB|2
AGGV|VAO|Suavanao||SB|2
AGGY|XYA|Yandina||SB|2
AGKG|KGE|Kagau Island|Kaghau|SB|2
AGKU|KUE|Kolombangara Island|Kukudu|SB|1|||AGGN:12
AGKW|KWS|Kwailabesi||SB|1|||AGOB:5
AGLM|LLM|Lomlom||SB|1|||AGGL:75
AGNA|NAZ|Star Harbor|Nana|SB|1|||AGGT:33
AGOB|MHM|Manaoba||SB|2
AGOK|GTA|Gatokae||SB|2
AGRC|RIN|Ringi Cove||SB|1|||AGGM:26
AGRM|RBV|Ramata||SB|2
AGVH|VIU|Viru|Viru Harbour Airstrip|SB|1|||AGRM:38
ANYN|INU|Yaren|Nauru|NR|3
AQBC||Zucchelli Station|Boulder Clay Runway|AQ|2
ATUA||Utai|Utai Airstrip|PG|1|Duplicate||AYVN:83
AYAA|AMF||Ama|PG|1|||AYTB:140
AYAB||Ambulua|Ambaluwa Airstrip|PG|1|||AYCH:34
AYAC||Akwom|Akwom Airstrip|PG|1|||AYVN:151
AYAD||Sindeni|Ande Airstrip|PG|1|||AYKM:105
AYAE|UAE|Aue|Mount Aue|PG|1|||AYCH:41
AYAF|AFR|Afore|Afore Airstrip|PG|1|||AYGR:38
AYAG|AUP|Agaun||PG|1|||AYTU:95
AYAH||Ali|Ali Airstrip|PG|1|||AYBM:66
AYAI|ATP|Aitape||PG|1|||AYVN:126
AYAJ||Ambua Lodge - Tari|Ambua Airstrip|PG|1|||AYTA:18
AYAK|AIH|Aiambak||PG|1|||AYET:21
AYAL|||Agali Airstrip|PG|1|||AYTA:98
AYAM|AMU|Amanab||PG|1|||AYVN:100
AYAN|ADC|Andekombe|Andakombe|PG|1|||AYKM:92
AYAO|AIE|Aiome||PG|1|||AYMH:90
AYAP|||Appa Airstrip|PG|1|||AYCH:62
AYAQ|KPM||Kompiam|PG|1|||AYWD:28
AYAR|||Anangalo Airstrip|PG|1|||AYWK:115
AYAS|||Asama Airstrip|PG|1|||AYTI:48
AYAT|AUJ|Ambunti||PG|1|||AYWK:117
AYAU||Arou|Arou Airstrip|PG|1|||AYTA:62
AYAV|||Arkosame Airstrip|PG|1|||AYWK:118
AYAW|AWB|Awaba||PG|1|||AYBM:20
AYAX|AEK|Aseki||PG|1|||AYKM:83
AYAY|AYU|Aiyura Valley|Aiyura|PG|1|||AYGA:63
AYAZ||Asimba|Asimba Airstrip|PG|1|||AYTI:72
AYBA|VMU|Baimuru||PG|3
AYBB||Bak|Bak Airstrip|PG|1|||AYTB:96
AYBC|BCP|Bambu||PG|1|||AYNZ:82
AYBD|BNM|Bodinumu||PG|1|||AYPY:62
AYBE||Boure|Boure Airstrip|PG|1|||AYTU:87
AYBF|BMZ|Bamu||PG|1|||AYBM:41
AYBG|BDZ||Baindoung|PG|1|||AYNZ:34
AYBH|BSP|Bensbach||PG|1|||WAKK:100
AYBI|BWP|Bewani||PG|1|||AYVN:40
AYBJ||Bank|Bank Airstrip|PG|1|||AYMH:67
AYBK|BUA|Buka Island|Buka|PG|3
AYBL|BAA|Bialla||PG|1|Bialla, Matalilu, Ewase||AYHK:68
AYBM|OPU|Balimo||PG|3
AYBN||Baina|Baina Airstrip|PG|1|||AYMR:77
AYBO|BMH|Bomai||PG|1|||AYCH:54
AYBP|BPD|Bapi|Bapi Airstrip|PG|1|||AYTI:68
AYBQ|BPK|Biangabip||PG|1|||AYTB:63
AYBR|BRP|Biaru||PG|1|||AYTI:81
AYBS||Begesin|Begesin Airstrip|PG|1|||AYMD:43
AYBT||Batri|Batri Airstrip|PG|1|||AYMN:55
AYBU|BUL|Bulolo||PG|1|||AYNZ:73
AYBW|||Blackwara|PG|1|||AYVN:25
AYBX||Wowobo|Wowobo Airstrip|PG|1|||AYKK:34
AYBY||Wuyabo|Wuyabo Airstrip|PG|1|||AYNZ:99
AYBZ|XBN|Biniguni||PG|1|||AYTU:63
AYCB|CVB|Chungribu||PG|1|||AYMH:123
AYCG|CGC|Cape Gloucester||PG|1|||AYHK:220
AYCH|CMU|Kundiawa|Chimbu|PG|3
AYCN||Changriwa|Changriwa Airstrip|PG|1|||AYWK:83
AYCS|SQT|Samarai Island|China Strait Airstrip|PG|1|||AYGN:48
AYDA||Dahamo Village|Dahamo Airstrip|PG|1|||AYKI:89
AYDB|DBP|Debepare||PG|1|||AYKI:72
AYDD||Dobu|Dobu Airstrip|PG|1|||AYCH:77
AYDE|DER|Derim||PG|1|||AYNZ:63
AYDI|BNT|Bundi||PG|1|||AYGA:42
AYDK|MDM|Munduku||PG|1|||AYWK:118
AYDL|KPF|Kondobol||PG|1|||AYBM:71
AYDM||Duranmin|Duranmin Airstrip|PG|1|||AYTB:83
AYDN|DNU|Dinangat||PG|1|||AYNZ:46
AYDO|DOI|Castori Islets|Doini|PG|1|||AYGN:61
AYDP||Tsendiap|Tsendiap Airstrip|PG|1|||AYMH:55
AYDQ||Dimisisi|Dimisisi Airstrip|PG|1|||YBOI:67
AYDR|DOO|Dorobisoro||PG|1|||AYPY:77
AYDS||Dusin||PG|1|||AYMH:73
AYDU|DAU|Daru||PG|3
AYDW||Dewara|Dewara Airstrip|PG|1|||AYBM:65
AYDY||Sindeni|Sindeni Airstrip|PG|1|||AYKM:106
AYEA|KRU|Gunim|Kerau|PG|1|||AYTI:13
AYEB|EMS|Embessa||PG|1|||AYTU:74
AYED|XYR|Yellow River Mission|Edwaki|PG|1|||AYVN:143
AYEE|EMI|Emirau Island|Emirau|PG|1|||AYKV:138
AYEF|EFG|Efogi||PG|1|||AYPY:58
AYEG||Mengina|Mengina Airstrip|PG|1|||AYCH:51
AYEH|MHY|Morehead||PG|1|||YBOI:85
AYEI||Milei|Milei Airstrip|PG|1|||AYPY:58
AYEK||Membok|Membok Airstrip|PG|1|||AYKI:48
AYEL|EPT|Eliptamin||PG|1|||AYTB:57
AYEM||Eleme|Eleme Airstrip|PG|1|||AYWD:91
AYEN|EGA|Engati|Engati Airstrip|PG|1|||AYNZ:79
AYEO|EMO|Emo Mission|Emo River Airstrip|PG|1|||AYGR:46
AYER|ERU|Erume||PG|1|||AYTI:12
AYES|MFZ|Demgulu|Meselia|PG|1|||AYGT:135
AYET|BOT|Bosset||PG|2
AYEU||Eloaua Island|Eloaua Airstrip|PG|1|||AYKV:173
AYEV|ERE|Erave||PG|1|||AYMN:58
AYEW|SWE|Siwea||PG|1|||AYNZ:100
AYEY||Mirsey|Mirsey Airstrip|PG|1|||AYWK:124
AYEZ||Moropote|Moropote Airstrip|PG|1|||AYTB:145
AYFA|FNE|Fane Mission|Fane|PG|1|||AYTI:24
AYFE|FRQ|Feramin||PG|1|||AYTB:53
AYFF|||Faia|PG|1|||AYKK:85
AYFI|FIN|Buki|Finschhafen|PG|1|||AYNZ:125
AYFK||Foroko|Foroko Airstrip|PG|1|||AYCH:78
AYFO||Fogomaiu|Fogomaiu Airstrip|PG|1|||AYMR:24
AYFR|FAQ|Frieda River||PG|1|||AYTB:110
AYFS||Fugari|Fas Airstrip|PG|1|||AYVN:59
AYFU|FUM|Fuma||PG|1|||AYTA:83
AYFW||Kwieftim|Kwieftim Airstrip|PG|1|||AYVN:113
AYGA|GKA|Goronka|Goroka|PG|3
AYGB||Gobe||PG|1|||AYMR:78
AYGC|GEW|Gewoia||PG|1|||AYGR:51
AYGD||Amusa|Gimi Airstrip|PG|1|||AYGA:63
AYGE||Geigorobi|Geigorobi Airstrip|PG|1|||AYWK:71
AYGF|GUG|Guari||PG|1|||AYTI:28
AYGG|GRL|Au|Garasa|PG|1|||AYTI:49
AYGH||Guhu|Guhu Airstrip|PG|1|||AYMD:65
AYGI|GAR|Garaina||PG|1|||AYTI:56
AYGJ|GAZ|Woodlark Island|Guasopa|PG|1|Woodlark (Muyua) Island||AYMS:163
AYGL|GOE|Gonaili||PG|1|||AYHK:129
AYGM||Gema|Gema Airstrip|PG|1|||AYGA:91
AYGN|GUR|Gurney||PG|3
AYGO||Gokto|Gokto Airstrip|PG|1|||AYMH:104
AYGP|GAP|Gusap||PG|1|||AYGA:63
AYGQ||Gawa|Gawa Airstrip|PG|1|||AYTA:103
AYGR|PNP|Popondetta|Girua|PG|3
AYGS|GBC|Gasuke||PG|1|||AYKI:51
AYGT|GMI|Gasmata Island||PG|2
AYGU|AKG|Anguganak||PG|1|||AYVN:140
AYGV|GVI|Green River||PG|1|||WAJO:127
AYGW||Guwasa||PG|1|||AYCH:51
AYGX|GOC|Gora|Gora Airstrip|PG|1|||AYGR:23
AYGY||Guavi|Guavi Airstrip|PG|1|||AYMR:78
AYGZ||Gubam|Gubam Airstrip|PG|1|||YBOI:77
AYHA|||Haia|PG|1|||AYCH:76
AYHB|HBD|Habi||PG|1|||AYTA:73
AYHE|HNI|Heiweni||PG|1|||AYKM:94
AYHF|HYF|Bainyik|Hayfields|PG|1|||AYWK:69
AYHG|HEO|Haelogo||PG|1|||AYPY:54
AYHH|HNN|Honinabi||PG|1|||AYTA:96
AYHJ||Hewa|Hewa Airstrip|PG|1|||AYTA:73
AYHK|HKN|Kimbe|Hoskins|PG|3
AYHL||Hesalibi|Hesalibi Airstrip|PG|1|||AYMR:102
AYHN||Habina|Habina Airstrip|PG|1|||AYNZ:81
AYHO|HIT|Haivaro||PG|1|||AYMR:67
AYHQ||Hauna|Hauna Airstrip|PG|1|||AYTB:156
AYHT||Hotmin Mission|Hotmin Airstrip|PG|1|||AYTB:86
AYHU|HWA|Hawabango||PG|1|||AYKM:68
AYHW||Haewenai|Haewenai Airstrip|PG|1|||AYKI:45
AYHX||Herowana|Herowena Airstrip|PG|1|||AYGA:64
AYHY||Huya|Huya Airstrip|PG|1|||AYTA:55
AYIA|IIS|Nissan Island||PG|1|||AYBK:114
AYIB||Ibil|Ibil Airstrip|PG|1|||WAJO:51
AYID|IDN|Indagen||PG|1|||AYNZ:69
AYIF||Kilifas|Kilifas Airstrip|PG|1|||AYVN:58
AYIH|IHU|Ihu||PG|1|||AYKM:42
AYII|IMN|Imane||PG|1|||AYNZ:71
AYIK|ITK|Itokama||PG|1|||AYGR:44
AYIL||Bili|Bili Airstrip|PG|1|||AYHK:80
AYIM|KGM|Kungim||PG|1|||AYTB:49
AYIN||Busilmin|Busilmin Airstrip|PG|1|||AYTB:41
AYIO|IMD|Imonda||PG|1|||AYVN:72
AYIP||Iropena|Iropena Airstrip|PG|1|||AYWD:67
AYIQ|KIE|Kieta|Aropa|PG|2
AYIR||Inaru|Inaru Airstrip|PG|1|||AYTA:135
AYIS||Isan|Isan Airstrip|PG|1|||AYNZ:67
AYIT||Iteri|Iteri Airstrip|PG|1|||AYTB:120
AYIU||Ialibu||PG|1|||AYMN:40
AYIW|WSA|Wasua||PG|1|||AYBM:27
AYIX|WIU|Garove Island|Witu|PG|1|||AYHK:137
AYIY|MPX|Miyanmin||PG|1|||AYTB:60
AYJB|JAQ|Jacquinot Bay||PG|1|||AYHK:123
AYJE||Yomneri|Yomneri Airstrip|PG|1|||AYMH:74
AYJL||Junkaral|Junkaral Airstrip|PG|1|||AYCH:67
AYJO|KGH|Yongai||PG|1|||AYTI:55
AYJS|JOP|Josephstaal||PG|1|||AYMD:101
AYJW|||Wauru Airstrip|PG|1|||WAJO:102
AYKA|LSA|Losuia||PG|2
AYKB|KBM||Kabwum|PG|1|||AYNZ:69
AYKC|KDR|Kandrian||PG|1|||AYGT:87
AYKD|KMF|Hoieti|Kamina|PG|1|||AYKM:41
AYKF||Kafa|Kafa Airstrip|PG|1|||AYMR:39
AYKG|KPA|Kopiago||PG|1|||AYTA:71
AYKH|KAQ|Kamulai Mission|Kamulai|PG|1|||AYTI:29
AYKI|UNG|Kiunga||PG|2
AYKJ|KNE|Kanainj||PG|1|||AYMH:75
AYKK|KRI|Kikori||PG|2
AYKL||Kafle|Kafle Airstrip|PG|1|||AYWK:121
AYKM|KMA|Kerema||PG|3
AYKN||Kubuna Mission|Kubuna Airstrip|PG|1|||AYTI:45
AYKO|KKD|Kokoda||PG|1|||AYGR:64
AYKQ|KGW|Kagi||PG|1|||AYPY:60
AYKR|KRX|Kar Kar Island|Kar Kar|PG|1|||AYMD:74
AYKS|KUY|Kamusi||PG|1|||AYSS:36
AYKT|KZF|Kaintiba||PG|1|||AYKM:59
AYKU|KUQ|Kuri||PG|1|||AYSS:70
AYKV|KVG|Kavieng||PG|3
AYKW|KWO|Kawito||PG|1|||AYBM:15
AYKY|LNV|Londolovit||PG|2
AYKZ||Kairiru Island|Kairiru Airstrip|PG|1|||AYWK:27
AYLB|LAB|Lab Lab Mission|Lab Lab|PG|1|||AYNZ:175
AYLC||Lake Campbell|Lake Campbell Airstrip|PG|1|||AYMR:82
AYLE||Leli|Lele Airstrip|PG|1|||AYHK:113
AYLF||Lumusa|Lumusa Airstrip|PG|1|||AYWD:23
AYLG|KEG|Denglagu Mission|Keglsugl|PG|1|||AYCH:25
AYLH||Klauhau|Klauhau Airstrip|PG|1|||AYWK:169
AYLI|KII|Kibuli|Kibuli Airstrip|PG|1|||YSII:42
AYLJ||Maravo|Lamogai Airstrip|PG|1|||AYGT:124
AYLL|LGN|Linga Linga||PG|1|||AYHK:75
AYLM|LMY|Lake Murray||PG|2
AYLN|LNM||Langimar|PG|1|||AYNZ:91
AYLO|LWI|Lowai||PG|1|||AYNZ:27
AYLP|LPN|Leron Plains||PG|1|||AYNZ:47
AYLQ||Lagoon|Lagoon Airstrip|PG|1|||AYDU:31
AYLS|LNG|Lese||PG|1|||AYKM:66
AYLT|LNC||Lengbati|PG|1|||AYNZ:74
AYLU|LMI|Lumi||PG|1|||AYVN:120
AYLX|LSJ|Long Island||PG|1|||AYMD:137
AYLY||Myola|Myola Airstrip|PG|1|||AYPY:68
AYLZ||Slai|Slai Airstrip|PG|1|||AYWK:73
AYMA|MRM|Manari||PG|1|||AYPY:52
AYMB|OBM|Morobe||PG|1|||AYTI:95
AYMC|MYX|Menyamya||PG|1|||AYKM:88
AYMD|MAG|Madang||PG|3
AYMF||Runakuma|Maimafu Airstrip|PG|1|||AYCH:54
AYMG||Magleri|Magleri Airstrip|PG|1|||AYTB:160
AYMH|HGU|Mount Hagen|Mount Hagen Kagamuga|PG|3
AYMI|MXK|Mindik||PG|1|||AYNZ:80
AYMJ|MPG|Makini||PG|1|||AYNZ:102
AYMK||Mok||PG|1|||AYHK:152
AYML|GUV|Mougulu||PG|1|||AYTA:76
AYMM|MMV|Mal Island|Mal|PG|1|||AYWK:250
AYMN|MDU|Mendi||PG|3
AYMO|MAS|Manus Island|Momote|PG|3
AYMP|MLQ|Malalaua||PG|1|||AYKM:44
AYMQ|MQO|Malam||PG|1|||AYDU:74
AYMR|MXH|Moro||PG|2
AYMS|MIS|Misima Island||PG|2
AYMT|||Malamaunda Airstrip|PG|1|||AYTA:106
AYMU|||Muluma Airstrip|PG|1|||AYMR:52
AYMV|MKN|Babase Island|Malekolon|PG|1|||AYTK:146
AYMW|MWG|Marawaka||PG|1|||AYNZ:103
AYMX||Mamusi|Mamusi Airstrip|PG|1|||AYWD:59
AYMY||Smok|Smok Airstrip|PG|1|||AYVN:70
AYMZ|MPU|Tatau Island|Mapua|PG|1|Mabua||AYKY:75
AYNA|NKN|Gwarawon|Nankina|PG|1|||AYNZ:87
AYNB|KEX|Kanabea||PG|1|||AYKM:49
AYNC|NDN|Nadunumu||PG|1|||AYPY:61
AYND|AUI|Aua Island||PG|1|||AYVN:239
AYNE|GBF|Negarbo||PG|1|Negabo||AYCH:67
AYNF||Nagri||PG|1|||AYWK:132
AYNG|MFO|Manguna||PG|1|||AYTK:152
AYNH||Gumbarami|Nahu Airstrip|PG|1|||AYMD:79
AYNI|NUG|Nuguria Island|Nuguria Airstrip|PG|1|||AYBK:224
AYNJ|NDI|Namudi||PG|1|||AYGR:74
AYNL|NOO|Naoro Vilage|Naoro|PG|1|||AYPY:49
AYNM|KSB|Kasonombe||PG|1|||AYNZ:35
AYNN|KDP|Kandep||PG|1|||AYMN:38
AYNO|NMN|Namane|Nomane|PG|1|||AYCH:35
AYNP||Momonup|Momonup Airstrip|PG|1|||AYWK:120
AYNQ||Kibeni|Kibeni Airstrip|PG|1|||AYKK:48
AYNR|NOM|Nomad River||PG|1|||AYTA:93
AYNS|BXZ|Bunsil - Umboi Island|Bunsil|PG|1|||AYNZ:157
AYNT||Kantobo|Kantobo Airstrip|PG|1|||AYMR:54
AYNU|UKU|Nuku||PG|1|||AYWK:132
AYNW|NWT|Nowata||PG|1|||AYGN:76
AYNX|ATN|Namatanai||PG|1|||AYKY:73
AYNY|NBA|Nambaiyufa||PG|1|||AYGA:24
AYNZ|LAE|Lae|Nadzab Tomodachi|PG|4
AYOA||Kwomtari|Kwomtari Airstrip|PG|1|||AYVN:101
AYOB|OBX|Obo||PG|2
AYOD||Obura|Obura Airstrip|PG|1|||AYGA:83
AYOE|KGB|Konge||PG|1|||AYNZ:66
AYOF|OKV|Okao||PG|1|||AYTB:38
AYOG|OGE||Ogeranang|PG|1|||AYNZ:71
AYOH||Okisai|Okisai Airstrip|PG|1|||AYTB:98
AYOI||Boikoa|Boikoa Airstrip|PG|1|||AYKM:103
AYOJ|OKP|Oksapmin||PG|1|||AYTA:105
AYOK|HOC|Komako||PG|1|||AYKM:64
AYOL|KQL|Kol||PG|1|||AYCH:35
AYOM|OSE|Omora||PG|1|||AYTI:60
AYON|KMB|Konambe|Koinambe|PG|1|||AYMH:51
AYOO|KOM|Komo|Komo-Manda|PG|1|||AYTA:27
AYOP|KSP|Kosipe Mission|Kosipe|PG|1|||AYTI:26
AYOQ|KCJ|Komaio||PG|1|||AYKK:74
AYOR||Kabori|Kabori Airstrip|PG|1|||AYVN:93
AYOS||Kosimbi Mission|Kosimbi Airstrip|PG|1|||AYWK:68
AYOU||Kombaku|Kombaku Airstrip|PG|1|||AYMH:62
AYOV|OLQ|Olsobip||PG|1|||AYTB:34
AYOW|KDE|Koroba||PG|1|||AYTA:28
AYOX||Moi|Moi Airstrip|PG|1|||WAJO:108
AYOY|OPB|Maitanakunai|Open Bay|PG|1|||AYTK:91
AYOZ||Kora|Kora Airstrip|PG|1|||AYCH:47
AYPA||Somokopa|Somokopa Airstrip|PG|1|||AYSS:71
AYPB|PLE|Paiela||PG|1|||AYTA:53
AYPC|PGB|Pangoa||PG|1|||AYLM:7
AYPD|PDI|Pindiu||PG|1|||AYNZ:88
AYPE|APR|April River||PG|1|||AYTA:138
AYPG|PGN|Pangia||PG|1|||AYMN:56
AYPI||Kapi|Kapi Airstrip|PG|1|||AYCH:50
AYPJ|PMP|Pimaga||PG|1|||AYMR:34
AYPK||Pasinkap|Pasinkap Airstrip|PG|1|||AYMD:107
AYPO|MPF|Mapoda||PG|1|||AYBM:27
AYPQ|PMN|Pumani||PG|1|||AYTU:77
AYPS||Maposi|Maposi Airstrip|PG|1|||AYTB:137
AYPW|||Panakawa|PG|1|||AYSS:29
AYPX||Pukapuki Vilage|Pukapuki Airstrip|PG|1|||AYTA:153
AYPY|POM|Port Moresby|Port Moresby Jacksons|PG|4
AYQA|KRJ|Amboin|Karawari Airstrip|PG|1|||AYWK:114
AYQB||Simbari|Simbari Airstrip|PG|1|||AYGA:102
AYQL|TLP|Tumolbil||PG|1|||WAJO:45
AYQM||Simogu|Simogu Airstrip|PG|1|||AYGA:87
AYQO|SPH|Sopu||PG|1|||AYTI:20
AYQP||Menjim|Sipump|PG|1|||AYMH:40
AYQQ|ONB|Onange Mission|Ononge|PG|1|||AYTI:46
AYQR||Sorimi|Sorimi Airstrip|PG|1|||WAJO:105
AYQS|SXA|Sialum||PG|1|||AYNZ:110
AYQU||Tsumba Mission|Tsumba Airstrip|PG|1|||AYWD:135
AYQV||Sinow|Sinow Airstrip|PG|1|||WAJO:145
AYQW||Sumwari|Sumwari Airstrip|PG|1|||AYTA:138
AYRA|KIQ|Kira||PG|1|||AYTI:50
AYRD||Maingi|Rano Airstrip|PG|1|||AYGT:99
AYRE|RBP|Rabaraba|Raba Raba|PG|1|||AYGN:67
AYRF||Arufi|Arufi Airstrip|PG|1|||YBOI:63
AYRG|RMN||Rumginae|PG|1|||AYKI:25
AYRI|KMR|Karimui||PG|1|||AYCH:55
AYRJ||Mariama||PG|1|||AYWK:124
AYRK|RKU|Yule Island|Kairuku|PG|1|||AYTI:72
AYRL||Maralina|Maralina Airstrip|PG|1|||AYNZ:54
AYRM|MWI|Maramuni||PG|1|||AYWD:72
AYRN||Norambi|Norambi Airstrip|PG|1|||AYGA:97
AYRO|KOR|Kakoro|Kakoro Airstrip|PG|1|Koroko||AYTI:77
AYRR||Tiri|Tiri Airstrip|PG|1|||AYKK:83
AYRT||Kirinbit|Kirinbit Airstrip|PG|1|||AYWK:97
AYRV|MRH|May River|May River Airstrip|PG|1|||AYTB:119
AYRW||Kiriwa|Kiriwo Airstrip|PG|1|||AYOB:96
AYSA|SBE||Suabi|PG|1|||AYTA:79
AYSB||Sirebi|Sirebi Airstrip|PG|1|||AYKK:23
AYSC||Samban School|Samban Airstrip|PG|1|||AYWK:97
AYSD|SDI|Saidor||PG|1|||AYMD:88
AYSE|NIS|Simberi Island|Simberi|PG|1|||AYKY:82
AYSF|SFU|Safia||PG|1|||AYTU:94
AYSG|SIL|Sila Mission|Sila|PG|1|||AYGR:31
AYSH|SBV|Sabah||PG|1|||AYBK:45
AYSI||Seltamin|Seltamin Airstrip|PG|1|||AYTB:68
AYSJ|SIM|Simbai||PG|1|||AYMH:67
AYSK|SGK|Sengapi|Sengapi Airstrip|PG|1|||AYWD:74
AYSL|SXH|Sehulea||PG|1|||AYGN:98
AYSM||Samberigi Mission|Samberigi Airstrip|PG|1|||AYMN:71
AYSN||Assengseng|Assengseng Airstrip|PG|1|||AYGT:66
AYSO|SBC|Selbang||PG|1|||AYTB:58
AYSP|SMH|Sapmanga||PG|1|||AYNZ:56
AYSQ|SPV|Sepik Plains||PG|1|||AYWK:33
AYSR||Sangera|Sangera Airstrip|PG|1|||AYWK:61
AYSS|TDS|Sasereme||PG|2
AYST|||Sturt Island|PG|1|||AYBM:74
AYSU|SKC|Suki||PG|1|||AYOB:67
AYSV|SXW|Sauren||PG|1|||AYGT:167
AYSW|SWG|Satwag||PG|1|||AYNZ:77
AYSX|MBV|Masa||PG|1|||AYNZ:99
AYSY||Serai|Serra Airstrip|PG|1|||AYVN:76
AYSZ||Samanzing|Samanzing Airstrip|PG|1|||AYNZ:40
AYTA|TIZ|Tari||PG|2
AYTB|TBG|Tabubil||PG|2
AYTC||Mutam|Tapila Airstrip|PG|1|||AYBM:41
AYTD||Tetehui|Teredau|PG|1|||AYBA:28
AYTE|TFM|Telefomin||PG|1|||AYTB:49
AYTF|TDB|Tetebedi||PG|1|||AYGR:47
AYTG|TGL|Sudest Island|Tagula|PG|1|||AYMS:82
AYTH|TFB|Tifalmin||PG|1|||AYTB:28
AYTI|TPI|Tapini||PG|2
AYTJ|TAJ|Aitape|Tadji|PG|1|||AYVN:137
AYTK|RAB|Kokopo|Tokua|PG|3
AYTL||Talbakul|Talbakul Airstrip|PG|1|||AYCH:48
AYTM||Tamo|Tamo Airstrip|PG|1|||AYWD:105
AYTN|TKW|Tekin||PG|1|||AYTB:104
AYTO|KDQ|Kamberatoro Mission|Kamberatoro|PG|1|||AYVN:105
AYTP|TEP|Teptep|Tep Tep|PG|1|||AYNZ:71
AYTQ||Tapen|Tapen Airstrip|PG|1|||AYNZ:80
AYTR|TBQ|Tarabo||PG|1|||AYGA:46
AYTS|TSW|Tsewi||PG|1|||AYNZ:87
AYTT|TRJ|Tarakbits||PG|1|||AYTB:42
AYTU|TFI|Tufi||PG|2
AYTV|TBE|Timbunke||PG|1|||AYWK:70
AYTW|TWY|Tawa||PG|1|||AYKM:68
AYTX||Matak|Matak Airstrip|PG|1|||AYNZ:57
AYTY|TEO|Terapo Mission|Terapo|PG|1|||AYKM:52
AYTZ|TKB|Tekadu||PG|1|||AYTI:89
AYUA||Utai|Utai Airstrip|PG|1|||AYVN:83
AYUB||Bufripmin/Usareimin|Gubil Airstrip|PG|1|||AYTB:55
AYUC|UMC|Umba||PG|1|||AYNZ:98
AYUE|URU|Uroubi||PG|1|||AYGR:84
AYUG||Wa'ahun|Brugam Airstrip|PG|1|||AYWK:92
AYUI|UBI|Buin||PG|1|||AGGE:37
AYUJ||Mukvi|Mukvi Airstrip|PG|1|||AYOB:89
AYUK||Mukili|Mukili Airstrip|PG|1|||AYWK:145
AYUL||Musula|Musula Airstrip|PG|1|||AYMR:65
AYUM|AUV|Aumo||PG|1|||AYNZ:212
AYUN||Bunam|Bunam Airstrip|PG|1|||AYWD:116
AYUO||Omaura|Omaura Airstrip|PG|1|||AYGA:73
AYUP|GLP|Gulgubip||PG|1|||AYTB:35
AYUQ||Kumbwareta|Kumbwareta Airstrip|PG|1|||AYWD:29
AYUR|UPR|Upiara||PG|1|||AYBM:63
AYUS||Suame|Suame Airstrip|PG|1|||AYBM:52
AYUT||Bunguwat|Bunguwat Airstrip|PG|1|||AYNZ:63
AYUU||Bu'u|Bu'u Airstrip|PG|1|||AYKM:63
AYUV||Tuvau|Tuvau Airstrip|PG|1|||AYGA:76
AYUW||Auwi|Auwi Airstrip|PG|1|||AYTA:51
AYUX||Usarumpia|Usarumpia Airstrip|PG|1|||AYKM:109
AYUY|KUX||Kuyol|PG|1|||AYTB:45
AYUZ|UVO|Uvol||PG|1|||AYGT:75
AYVA||Hepa|Vailala Airstrip|PG|1|||AYKM:38
AYVB||Tobou|Tobou Airstrip|PG|1|||AYNZ:79
AYVK||Abrau|Wokien Airstrip|PG|1|||AYVN:142
AYVL|TLW|Talasea||PG|1|||AYHK:49
AYVM|TCJ|Torembi||PG|1|||AYWK:77
AYVN|VAI|Vanimo||PG|3
AYVO|TON|Tonu||PG|1|||AYIQ:51
AYVP||Woposali|Woposali Airstrip|PG|1|||AYKK:85
AYVW|WUV|Wuvulu Island||PG|1|||AYVN:201
AYVY||Yembiyembi|Yembi Yembi Airstrip|PG|1|||AYWK:114
AYWA||Amjenuwa|Asinuwa Airstrip|PG|1|||AYKM:104
AYWB|WAO|Wabo||PG|1|||AYBA:63
AYWC|WTT|Wantoat||PG|1|||AYNZ:56
AYWD|WBM|Wapenamanda||PG|3
AYWE||Wangeto|Wangeto Airstrip|PG|1|||AYMD:72
AYWF|WAJ|Wavoi Falls|Wawoi Falls|PG|1|||AYSS:78
AYWG|AGL|Wanigela||PG|1|||AYTU:34
AYWH|WNU|Wanuma||PG|1|||AYMD:62
AYWJ|WBC|Wapolu||PG|1|||AYGN:110
AYWK|WWK|Wewak||PG|3
AYWL|||Walagu Airstrip|PG|1|||AYMR:46
AYWM|||Wasengla Airstrip|PG|1|||AYVN:72
AYWN||Nugwaia|Nugwaia Airstrip|PG|1|||AYWK:96
AYWO|WOA|Wonenara||PG|1|||AYNZ:96
AYWP|||Wanikipa Airstrip|PG|1|||AYTA:81
AYWQ|WKN|Wakunai||PG|1|||AYIQ:75
AYWS|WSU|Wasu||PG|1|||AYNZ:85
AYWT|WTP|Fatima Mission|Woitape|PG|1|||AYTI:36
AYWU|WUG|Wau||PG|1|||AYNZ:86
AYWV||Warasai|Warasai Airstrip|PG|1|||AYWK:137
AYWW||Owenia|Owena Airstrip|PG|1|||AYGA:82
AYWX|||Wario Airstrip|PG|1|||AYTB:147
AYWY||Iorogobayu|Waro Airstrip|PG|1|||AYMR:20
AYWZ|WLU|Puri|Walluanda|PG|1||AYPU|AYMN:52
AYXA||Wiawia|Wiawia Airstrip|PG|1|||AYKM:90
AYXB||Buluwo|Buluwo Airstrip|PG|1|||AYVN:135
AYXE|YVD|Yeva||PG|1|||AYKM:65
AYXG||Sugu|Sugu Airstrip|PG|1|||AYMN:29
AYXH||Yehebi|Yehebi Airstrip|PG|1|||AYTA:97
AYXI|SMJ|Sim||PG|1|||AYTI:68
AYXM||Komo||PG|1|||AYTA:25
AYXO|TLO|Tol||PG|1|||AYTK:82
AYXP|WPM|Wipim||PG|1|||AYDU:49
AYXS||Sisamin|Sisamin Airstrip|PG|1|||AYTA:108
AYXW|WEP|Weam||PG|1|||WAKK:80
AYXY||Yebil|Yebil Airstrip|PG|1|||AYVN:112
AYYA|||Yabru Airstrip|PG|1|||WAJO:122
AYYB|||Wobagen Airstrip|PG|1|||AYTB:89
AYYC|||Yagiap Airstrip|PG|1|||AYWK:70
AYYD||Yatoam|Yatoam Airstrip|PG|1|||AYTA:104
AYYE|KYX|Yalumet||PG|1|||AYNZ:62
AYYG||Yemin|Yemin Airstrip|PG|1|||AYWK:159
AYYI||Yili|Yili Airstrip|PG|1|||AYVN:134
AYYJ||Yanungen|Yanungen Airstrip|PG|1|||AYWK:126
AYYK|YEQ||Yenkis|PG|1|Yankisa||AYWD:59
AYYL|TCK|Tinboli||PG|1|||AYWK:65
AYYM|LNF||Munbil|PG|1|||AYTB:47
AYYN||Yimnalem|Yimnalem Airstrip|PG|1|||AYMH:83
AYYO|RAX||Oram|PG|1|||AYPY:93
AYYP|KPE||Yapsiei|PG|1|||WAJO:60
AYYQ||Yagrombok|Yagrombok Airstrip|PG|1|||AYWK:115
AYYR|KSX|Yasuru||PG|1|||AYNZ:60
AYYT||Mount Tauwa|Mount Tauwa Airstrip|PG|1|||AYKK:78
AYYU||Mui|Mui Airstrip|PG|1|||AYWD:105
AYYV||Yawa|Yawa Airstrip|PG|1|||AYTB:165
AYYW||Yawan|Yawan Airstrip|PG|1|||AYNZ:50
AYYZ||Yambaitok||PG|1|||AYWD:72
AYZA|ZEN|Zenag||PG|1|||AYNZ:44
AYZB||Sibilanga Mission|Sibilanga Airstrip|PG|1|||AYWK:131
AYZI|SWR|Silur Mission|Silur|PG|1|||AYTK:78
AYZM|WUM|Wasum||PG|1|||AYGT:113
AYZN|SIZ|Sissano||PG|1|||AYVN:89
AYZQ||Sopise|Sopise Airstrip|PG|1|||AYKK:71
AYZS|OSG|Ossima||PG|1|||AYVN:25
AYZU||Oum|Oum Airstrip|PG|1|||AYTB:150
AYZW||Siawi|Siawi Airstrip|PG|1|||WAJO:129
AYZY||Yilui|Yilui Airstrip|PG|1|||AYWK:167
AYZZ||Zuebak|Zuebak Airstrip|PG|1|||AYNZ:34
BGAA|JEG|Aasiaat||GL|3
BGCO|CNP|Neerlerit Inaat||GL|3
BGDH||Danmarkshavn|Danmarkshavn Landing Strip|GL|1
BGGH|GOH|Nuuk||GL|4
BGJN|JAV|Ilulissat||GL|3
BGKK|KUS|Kulusuk||GL|3||BGKD
BGMI||Station Nord|Station Nord Landing Strip|GL|1
BGMQ|JSU|Maniitsoq||GL|2
BGMV||Mestersvig||GL|1|||BGCO:172
BGPT|JFR|Paamiut||GL|2
BGQO|JJU|Qaqortoq||GL|3
BGQQ|NAQ|Qaanaaq||GL|3
BGSF|SFJ|Kangerlussuaq||GL|3
BGSS|JHS|Sisimiut||GL|3
BGTL|THU|Pituffik|Pituffik Space Base|GL|2|||BGQQ:108
BGUK|JUV|Upernavik||GL|2
BGUQ|JQA|Uummannaq|Qaarsut|GL|2
BIAE||Arngerðareyri||IS|1|||BIIS:39
BIAL||Álftaver||IS|1|||BIHN:178
BIAR|AEY|Akureyri||IS|4
BIBA||Bakki||IS|1|||BIRK:109
BIBD|BIU|Bildudalur||IS|2|||BIIS:50
BIBF|BGJ|Borgarfjörður eystri||IS|1|||BIEG:38
BIBI||Baeir||IS|1|||BIIS:26
BIBL|BLO|Blönduós||IS|1|||BIAR:102
BIBR||Búðardalur||IS|1|||BIRK:105
BIBV|BXV|Breiðdalsvík||IS|1|||BIEG:57
BIDV|DJU|Djúpivogur||IS|1|||BIHN:60
BIEG|EGS|Egilsstaðir||IS|3
BIFL||Flúðir||IS|1|||BIRK:78
BIFM|FAG|Fagurhólsmýri||IS|1|||BIHN:83
BIFZ||Forsæti||IS|1|||BIRK:67
BIGF|GUU|Grundarfjörður||IS|1|||BIRK:114
BIGH||Gunnarsholt||IS|1|||BIRK:87
BIGJ|GJR|Gjögur||IS|1|||BIIS:82
BIGR|GRY|Grímsey/Sandvík|Grímsey|IS|3
BIGS||Grímsstaðir||IS|1|||BIVO:60
BIHE||Herðubreiðarlindir||IS|1|||BIEG:85
BIHI||Hveravellir||IS|1|||BIAR:108
BIHK|HVK|Hólmavík||IS|1|||BIIS:76
BIHL||Hella||IS|1|||BIRK:83
BIHN|HFN|Höfn|Hornafjörður|IS|3
BIHR||Hvolsvöllur||IS|1|||BIRK:92
BIHS||Hrafnseyri||IS|1|||BIIS:37
BIHU|HZK|Húsavík||IS|2|||BIAR:44
BIHV||Hvammstangi|Krókstaðarmelar|IS|1|||BIAR:135
BIHY||Hrísey||IS|1|||BIAR:40
BIHZ||Húsafell||IS|1|||BIRK:81
BIIS|IFJ|Ísafjörður||IS|3
BIKA||Kaldármelar||IS|1|||BIRK:74
BIKE||Kerlingafjöll||IS|1|||BIAR:123
BIKF|KEF|Reykjavík|Keflavik|IS|4
BIKJ||Kroksfjard-arnes||IS|1|||BIIS:85
BIKL||Kirkjubæjarklaustur||IS|1|||BIHN:146
BIKP|OPA|Kópasker||IS|1|||BITN:52
BIKR|SAK|Sauðárkrókur||IS|1|||BIAR:69
BIMK||Múlakot||IS|1|||BIRK:111
BIMM||Melgerðismelar||IS|1|||BIAR:20
BIMS||Tungubakkar||IS|1|||BIRK:13
BIND||Nýjidalur||IS|1|||BIAR:104
BINF|NOR|Norðfjörður||IS|1|||BIEG:35
BIRE|RHA|Reykhólar||IS|1|||BIIS:80
BIRF|OLI|Rif||IS|1|||BIKF:118
BIRG|RFN|Raufarhöfn||IS|1|||BITN:33
BIRK|RKV|Reykjavík|Reykjavík Domestic|IS|3
BIRL|MVA|Myvatn|Mývatn|IS|2|||BIAR:53
BIRS||Reykjanes||IS|1|||BIIS:36
BISA||Sauðár|Sauðárflugvöllur|IS|1|||BIHN:72
BISF||Selfoss||IS|1|||BIRK:49
BISG||Kalfatellsstadhur|Steinasandur|IS|1|||BIHN:36
BISH||Stora-Holt||IS|1|||BIIS:92
BISI|SIJ|Siglufjörður||IS|2|||BIGR:60
BISK||Skógar|Skógasandur|IS|1|||BIRK:138
BISL||Öræfi|Skaftafell|IS|1|||BIHN:89
BISN||Svínafell||IS|1|||BIHN:12
BISP||Sprengisandur||IS|1|||BIAR:113
BISR||Stórikroppur||IS|1|||BIRK:60
BISS||Sandskeið||IS|1|||BIRK:19
BIST|SYK|Stykkishólmur||IS|1|||BIRK:111
BISV||Skálavatn||IS|1|||BIRK:153
BITE|TEY|Þingeyri||IS|1|||BIIS:28
BITM||Þórsmörk||IS|1|||BIRK:126
BITN|THO|Þórshöfn||IS|2
BITO||Thorisos||IS|1|||BIAR:149
BIVA||Vatnsnes||IS|1|||BIRK:63
BIVH||Varmahlid||IS|1|||BIAR:63
BIVI||Vík||IS|1|||BIRK:169
BIVM|VEY|Vestmannaeyjar||IS|2|||BIRK:113
BIVO|VPN|Vopnafjörður||IS|3
BKPR|PRN|Prishtina|Priština Adem Jashari|XK|4
CBBC|ZEL|Bella Bella||CA|3|Campbell Island
CRHA||Streatham|Streatham Reef Hueston|CA|2
CRML||Stoney Point||CA|1|Le Cunff||CYQG:35
CWJC||Ennadai|Ennadai Lake|CA|1|||CZWH:282
CWOB||Brevoort Island|Brevoort Island Airstrip|CA|1|||CYFB:223
CYAB|YAB|Arctic Bay||CA|2
CYAC|YAC|Cat Lake||CA|2
CYAD|YAR|La Grande-3||CA|1|||CYGL:100
CYAG|YAG|Fort Frances|Fort Frances Municipal|CA|3
CYAH|YAH|La Grande-4||CA|2|||CYGL:266
CYAL|YAL|Alert Bay||CA|2
CYAM|YAM|Sault Ste Marie||CA|3
CYAQ|XKS|Kasabonika||CA|3
CYAS|YKG|Kangirsuk||CA|2
CYAT|YAT|Attawapiskat||CA|2
CYAU||Greenfield|Liverpool South Shore Regional|CA|1|||CYHZ:129
CYAV||Winnipeg/Saint Andrews|Winnipeg / St. Andrews|CA|3
CYAX||Lac du Bonnet||CA|1|||CYWG:98
CYAY|YAY|St. Anthony||CA|3
CYAZ|YAZ|Tofino|Tofino / Long Beach|CA|3
CYBA|YBA|Banff||CA|1|||CYYC:107
CYBB|YBB|Kugaaruk||CA|2
CYBC|YBC|Baie-Comeau||CA|3
CYBD|QBC|Bella Coola||CA|3
CYBE|YBE|Uranium City||CA|2
CYBF|YBY|Bonnyville||CA|3
CYBG|YBG|Saguenay|Saguenay-Bagotville|CA|3
CYBK|YBK|Baker Lake||CA|3
CYBL|YBL|Campbell River||CA|3
CYBP||Brooks|Brooks Regional|CA|1|||CYXH:109
CYBQ|XTL|Tadoule Lake||CA|2
CYBR|YBR|Brandon|Brandon Municipal|CA|3
CYBT|YBT|Brochet||CA|2
CYBU||Nipawin||CA|2|||CYPA:111
CYBV|YBV|Berens River||CA|2
CYBW||Calgary|Calgary / Springbank|CA|2|||CYYC:25
CYBX|YBX|Blanc-Sablon|Lourdes-de-Blanc-Sablon|CA|3
CYCA|YRF|Cartwright||CA|2
CYCB|YCB|Cambridge Bay||CA|3
CYCC|YCC|Cornwall|Cornwall Regional|CA|2|||KMSS:28
CYCD|YCD|Nanaimo||CA|3
CYCE|YCE|Huron Park|Centralia / James T. Field Memorial|CA|2|||CYXU:40
CYCG|YCG|Castlegar|Castlegar/West Kootenay Regional|CA|3
CYCH|YCH|Miramichi||CA|2|||CZBF:73
CYCK|XCM|Chatham-Kent|Chatham Kent|CA|1|||CYQG:72
CYCL|YCL|Charlo||CA|2|||CZBF:60
CYCN|YCN|Cochrane||CA|2|||CYTS:65
CYCO|YCO|Kugluktuk||CA|2
CYCP||Blue River||CA|2|||CYKA:177
CYCQ|YCQ|Chetwynd||CA|2|||CYXJ:82
CYCR|YCR|Cross Lake||CA|2|Charlie Sinclair Memorial
CYCS|YCS|Chesterfield Inlet||CA|2
CYCT|YCT|Coronation||CA|1|||CYLL:165
CYCW|YCW|Chilliwack||CA|1|||CYXX:34
CYCY|YCY|Clyde River||CA|2
CYCZ|YCZ|Fairmont Hot Springs||CA|1|||CYXC:80
CYDA|YDA|Dawson City||CA|3
CYDB|YDB|Burwash Landing|Burwash|CA|2|||KMYK:194
CYDC||Town of Princeton|Princeton|CA|1|||CYYF:66
CYDF|YDF|Deer Lake||CA|3
CYDL|YDL|Dease Lake||CA|2
CYDM|XRR|Ross River||CA|2|||CYXY:199
CYDN|YDN|Dauphin|Dauphin Barker|CA|3
CYDO|YDO|Dolbeau-Saint-Felicien||CA|2|||CYRJ:30
CYDP|YDP|Nain||CA|2
CYDQ|YDQ|Dawson Creek||CA|2|||CYXJ:65
CYEA||Empress||CA|1|||CYXH:113
CYEE||Midland|Huronia|CA|2|||CYLS:37
CYEG|YEG|Edmonton||CA|4
CYEK|YEK|Arviat||CA|2
CYEL|YEL|Elliot Lake|Elliot Lake Municipal|CA|2|||CYSB:138
CYEM|YEM|Sheguiandah|Manitoulin East Municipal|CA|2|||CYSB:119
CYEN|YEN|Estevan||CA|2|||KXWA:120
CYER|YER|Fort Severn||CA|2
CYES||Edmundston||CA|1|||KPQI:95
CYET|YET|Edson||CA|2|||CYZU:77
CYEU|YEU|Eureka||CA|1
CYEV|YEV|Inuvik|Inuvik Mike Zubko|CA|3
CYEY|YEY|Amos|Amos/Magny|CA|2|||CYUY:59
CYFA|YFA|Fort Albany||CA|2
CYFB|YFB|Iqaluit||CA|3
CYFC|YFC|Fredericton||CA|3
CYFD||Brantford|Brantford Municipal|CA|2|||CYHM:34
CYFE|YFE|Forestville||CA|2|||CYYY:67
CYFH|YFH|Fort Hope||CA|2
CYFI|YFI|Suncor Energy Site|Fort Mackay / Firebag|CA|1|||CYMM:71
CYFJ|YTM|La Macaza|Mont-Tremblant|CA|2|||CYND:116
CYFO|YFO|Flin Flon||CA|2
CYFR|YFR|Fort Resolution||CA|2|||CYHY:119
CYFS|YFS|Fort Simpson||CA|3
CYFT|YMN|Makkovik||CA|2
CYGB|YGB|Texada|Texada Gillies Bay|CA|1|||CYPW:16
CYGD||Goderich||CA|2|||CYXU:93
CYGE||Golden||CA|2|||CYXC:206
CYGH|YGH|Fort Good Hope||CA|2
CYGK|YGK|Kingston|Kingston Norman Rogers|CA|2|||KART:53
CYGL|YGL|La Grande Rivière||CA|3
CYGM|YGM|Gimli|Gimli Industrial Park|CA|2|||CYWG:81
CYGN|YGN|Broughton Island|Greenway Sound Seaplane Base|CA|2
CYGO|YGO|Gods Lake Narrows||CA|2
CYGP|YGP|Gaspé|Michel-Pouliot Gaspé|CA|3
CYGQ|YGQ|Geraldton|Geraldton Greenstone Regional|CA|2|||CYQN:48
CYGR|YGR|Les Îles-de-la-Madeleine|Îles-de-la-Madeleine|CA|3
CYGT|YGT|Igloolik||CA|2
CYGV|YGV|Havre-Saint-Pierre||CA|3
CYGW|YGW|Kuujjuarapik||CA|3
CYGX|YGX|Gillam||CA|2
CYGZ|YGZ|Grise Fiord||CA|2
CYHA|YQC|Quaqtaq||CA|2
CYHB|YHB|Hudson Bay||CA|1|||CYQD:152
CYHC|CXH|Vancouver|Vancouver Harbour Water|CA|2
CYHD|YHD|Dryden|Dryden Regional|CA|2|||CYXL:68
CYHE|YHE|Hope|Hope Airport / FVRD Regional Airpark|CA|1|||CYXX:74
CYHF|YHF|Hearst|Hearst René Fontaine Municipal|CA|2|||CYTS:211
CYHH|YNS|Nemiscau||CA|2
CYHI|YHI|Ulukhaktok|Ulukhaktok Holman|CA|2
CYHK|YHK|Gjoa Haven||CA|2
CYHM|YHM|Hamilton|John C. Munro Hamilton|CA|4
CYHN|YHN|Hornepayne|Hornepayne Municipal|CA|2|||CYQN:178
CYHO|YHO|Hopedale||CA|2
CYHP|YHP|Poplar Hill||CA|2
CYHR|YHR|Chevery||CA|2
CYHS||Hanover|Hanover / Saugeen Municipal|CA|1|||CYVV:65
CYHT|YHT|Haines Junction||CA|2|||CYXY:135
CYHU|YHU|Montréal|Montréal / Saint-Hubert Metropolitan|CA|3
CYHY|YHY|Hay River|Hay River / Merlyn Carter|CA|3
CYHZ|YHZ|Halifax|Halifax / Stanfield|CA|4
CYIB|YIB|Atikokan|Atikokan Municipal|CA|2|||KINL:132
CYID|YDG|Digby|Digby / Annapolis Regional|CA|2|||CYSJ:86
CYIF|YIF|St-Augustin|St Augustin|CA|3
CYIK|YIK|Ivujivik||CA|2
CYIN||Clinton|Clinton/Bleibler Ranch|CA|1|||CYWL:105
CYIO|YIO|Pond Inlet||CA|2
CYIV|YIV|Island Lake||CA|3
CYJA|YJA|Jasper||CA|1|||CYZU:197
CYJF|YJF|Fort Liard||CA|2|||CYYE:163
CYJM||Fort St. James|Fort St James|CA|1|||CYPZ:109
CYJN|YJN|St Jean||CA|2|||CYHU:27
CYJP||Fort Providence||CA|1|||CYHY:112
CYJQ||Denny Island||CA|1|||CBBC:9
CYKA|YKA|Kamloops|Kamloops John Moose Fulton Field Regional|CA|3
CYKC|YKC|Collins Bay||CA|1|||CYNL:24
CYKD|LAK|Aklavik|Aklavik/Freddie Carmichael|CA|2
CYKF|YKF|Breslau|Region of Waterloo|CA|3
CYKG|YWB|Kangiqsujuaq||CA|2|Wakeham Bay
CYKJ|YKJ|Key Lake||CA|2|||CYNL:146
CYKL|YKL|Schefferville||CA|3
CYKM|YKD|Kincardine|Kincardine Municipal|CA|2|||CYVV:72
CYKO|AKV|Akulivik||CA|2
CYKP|YOG|Ogoki Post||CA|2
CYKQ|YKQ|Waskaganish||CA|2
CYKS||Kamloops|Knutsford|CA|1|||CYKA:15
CYKT||Tranquille|Tranquille Valley|CA|1|||CYKA:23
CYKX|YKX|Kirkland Lake||CA|2|||CYUY:85
CYKY|YKY|Kindersley||CA|2|||CYXE:185
CYLA|YPJ|Aupaluk||CA|2
CYLB|YLB|Lac La Biche||CA|1|||CYBF:98
CYLC|YLC|Kimmirut||CA|2
CYLD|YLD|Chapleau||CA|2|||CYTS:168
CYLH|YLH|Lansdowne House||CA|2
CYLI||Lillooet||CA|1|||CYKA:102
CYLJ|YLJ|Meadow Lake||CA|2|||CYLL:137
CYLK|YSG|Lutselk'e||CA|2
CYLL|YLL|Lloydminster||CA|3
CYLQ|YLQ|La Tuque||CA|1|||CYQB:126
CYLR|YLR|Leaf Rapids||CA|2|||CZSN:73
CYLS|YLK|Barrie|Barrie-Lake Simcoe Regional|CA|3
CYLT|YLT|Alert||CA|2
CYLU|XGR|Kangiqsualujjuaq||CA|2|Georges River
CYLW|YLW|Kelowna||CA|4
CYMA|YMA|Mayo||CA|2|||CYDA:167
CYME|YME|Matane||CA|2|||CYYY:62
CYMG|YMG|Manitouwadge||CA|2|||CYQN:136
CYMH|YMH|Mary's Harbour||CA|2
CYMJ|YMJ|Moose Jaw|Moose Jaw Air Vice Marshal C. M. McEwen|CA|2|||CYQR:65
CYML|YML|Charlevoix||CA|2|||CYBG:100
CYMM|YMM|Fort McMurray||CA|3
CYMO|YMO|Moosonee||CA|3
CYMT|YMT|Chibougamau|Chapais|CA|3
CYMU|YUD|Umiujaq||CA|2
CYMW|YMW|Messines|Maniwaki|CA|1|||CYND:90
CYMX|YMX|Montréal|Montreal Mirabel|CA|3|||CYUL:33
CYNA|YNA|Natashquan||CA|3
CYNC|YNC|Wemindji||CA|2
CYND|YND|Gatineau|Ottawa / Gatineau|CA|3
CYNE|YNE|Norway House||CA|2
CYNH|YNH|Hudson's Hope||CA|1|||CYXJ:80
CYNJ|YLY|Langley||CA|2|||CYXX:21
CYNL|YNL|Points North Landing||CA|3
CYNM|YNM|Matagami||CA|2|||CYUY:189
CYNN||Nejanilini Lake||CA|2|||CYBQ:96
CYNR|HZP|Fort Mackay|Fort Mackay / Horizon|CA|1|||CYMM:86
CYOA|YOA|Ekati||CA|2|||CYWE:175
CYOC|YOC|Old Crow||CA|2
CYOD|YOD|Cold Lake|CFB Cold Lake|CA|2|||CYBF:32
CYOH|YOH|Oxford House||CA|2
CYOJ|YOJ|High Level||CA|3
CYOO|YOO|Oshawa|Oshawa Executive|CA|2|||CYTZ:52
CYOP|YOP|Rainbow Lake||CA|2|||CYOJ:131
CYOS|YOS|Owen Sound|Owen Sound / Billy Bishop Regional|CA|2|||CYVV:27
CYOW|YOW|Ottawa|Ottawa Macdonald-Cartier|CA|4||CUUP
CYPA|YPA|Prince Albert|Prince Albert Glass Field|CA|3
CYPC|YPC|Paulatuk||CA|2|Nora Aliqatchialuk Ruben
CYPD|YPS|Port Hawkesbury||CA|2|||CYQY:116
CYPE|YPE|Peace River||CA|3
CYPG|YPG|Portage la Prairie|Portage-la-Prairie / Southport|CA|2|||CYWG:74
CYPH|YPH|Inukjuak||CA|2
CYPK||Pitt Meadows|Pitt Meadows Regional|CA|3
CYPL|YPL|Pickle Lake||CA|3
CYPM|YPM|Pikangikum||CA|2
CYPN|YPN|Port-Menier||CA|3
CYPO|YPO|Peawanuck||CA|2
CYPP||Parent||CA|1|||CYRJ:185
CYPQ|YPQ|Peterborough|Peterborough Regional|CA|3
CYPR|YPR|Prince Rupert||CA|3
CYPS||Pemberton|Pemberton Regional|CA|1|||CYVR:127
CYPT||Pelee Island||CA|2
CYPU||Puntzi Mountain||CA|1|||YAA:87
CYPW|YPW|Powell River||CA|3
CYPX|YPX|Puvirnituq||CA|3
CYPY|YPY|Fort Chipewyan||CA|3
CYPZ|YPZ|Burns Lake||CA|3
CYQA|YQA|Gravenhurst|Muskoka|CA|3
CYQB|YQB|Quebec|Quebec Jean Lesage|CA|4
CYQD|YQD|The Pas||CA|3
CYQF|YQF|Springbrook|Red Deer Regional|CA|2|||CYYC:119
CYQG|YQG|Windsor||CA|4
CYQH|YQH|Watson Lake||CA|3
CYQI|YQI|Yarmouth||CA|2|||CYSJ:166
CYQK|YQK|Kenora||CA|3
CYQL|YQL|Lethbridge|Lethbridge County|CA|3
CYQM|YQM|Moncton|Greater Moncton Roméo LeBlanc|CA|3
CYQN|YQN|Nakina||CA|3
CYQQ|YQQ|Comox|Comox Valley International Airport / CFB Comox|CA|3
CYQR|YQR|Regina||CA|3
CYQS|YQS|St Thomas|St Thomas Municipal|CA|2|||CYXU:29
CYQT|YQT|Thunder Bay||CA|3
CYQU|YQU|Grande Prairie||CA|3
CYQV|YQV|Yorkton|Yorkton Municipal|CA|2|||CYDN:169
CYQW|YQW|North Battleford||CA|2|||CYXE:124
CYQX|YQX|Gander||CA|3
CYQY|YQY|Sydney|Sydney / J.A. Douglas McCurdy|CA|3
CYQZ|YQZ|Quesnel||CA|3
CYRA|YRA|Gamètì|Rae Lakes|CA|2
CYRB|YRB|Resolute Bay||CA|3
CYRC||Saint-Honoré|Chicoutimi/Saint-Honoré|CA|1|||CYBG:22
CYRI|YRI|Rivière-du-Loup||CA|2|||CYBG:122
CYRJ|YRJ|Roberval||CA|3
CYRL|YRL|Red Lake||CA|3
CYRM|YRM|Rocky Mountain House||CA|1|||CYEG:132
CYRO|YRO|Ottawa|Ottawa / Rockcliffe|CA|3|||CYND:9
CYRP||Ottawa|Ottawa / Carp|CA|2|||CYOW:28
CYRQ|YRQ|Trois-Rivières||CA|2|||CYHU:109
CYRS|YRS|Red Sucker Lake||CA|2
CYRT|YRT|Rankin Inlet||CA|3
CYRV|YRV|Revelstoke||CA|2|||CYLW:140
CYSA||Stratford|Stratford Municipal|CA|1|||CYKF:45
CYSB|YSB|Sudbury||CA|3
CYSC|YSC|Sherbrooke||CA|2|||CYHU:135
CYSE|YSE|Squamish||CA|1|||CYVR:65
CYSF|YSF|Stony Rapids||CA|3
CYSG||Saint-Georges||CA|2|||CYQB:93
CYSH|YSH|Smiths Falls|Smiths Falls-Montague|CA|2|Russ Beach||CYOW:47
CYSJ|YSJ|Saint John||CA|3
CYSK|YSK|Sanikiluaq||CA|2
CYSL|YSL|Saint-Léonard||CA|2|||KPQI:54
CYSM|YSM|Fort Smith||CA|3
CYSN|YCM|Niagara-on-the-Lake|Niagara District|CA|3
CYSP|YSP|Marathon||CA|2|||CYQN:161
CYSQ||Atlin||CA|1|||PAGY:94
CYST|YST|St. Theresa Point||CA|2
CYSU|YSU|Slemon Park|Summerside|CA|2|||CYYG:57
CYSV|YSV|Saglek||CA|1|||CYLU:195
CYSW||Sparwood|Sparwood Elk Valley|CA|1|||CYXC:70
CYSY|YSY|Sachs Harbour||CA|2|David Nasogaluak Jr. Saaryuaq
CYSZ||Sainte-Anne-des-Monts||CA|1|||CYBC:122
CYTA|YTA|Pembroke||CA|2|||CYND:137
CYTB||Tillsonburg||CA|1|||CYXU:35
CYTE|YTE|Kinngait|Cape Dorset|CA|2
CYTF|YTF|Alma||CA|2|||CYRJ:46
CYTH|YTH|Thompson||CA|3
CYTL|YTL|Big Trout Lake||CA|2
CYTN||Trenton||CA|1|||CYYG:85
CYTQ|YTQ|Tasiujaq||CA|2
CYTR|YTR|Trenton|CFB Trenton|CA|2|||CYPQ:68
CYTS|YTS|Timmins|Timmins/Victor M. Power|CA|3
CYTZ|YTZ|Toronto|Billy Bishop Toronto City|CA|3
CYUB|YUB|Tuktoyaktuk|Tuktoyaktuk / James Gruben|CA|1|||CYEV:127
CYUL|YUL|Montréal|Montreal / Pierre Elliott Trudeau|CA|4
CYUT|YUT|Repulse Bay|Naujaat|CA|2
CYUX|YUX|Sanirajak|Hall Beach|CA|3
CYUY|YUY|Rouyn-Noranda|Rouyn Noranda|CA|3
CYVB|YVB|Bonaventure||CA|3
CYVC|YVC|La Ronge||CA|3
CYVD||Virden|Virden / RJ Andrew Field Regional|CA|2|Bob||CYBR:69
CYVG|YVG|Vermilion||CA|1|||CYLL:50
CYVK|YVE|Vernon|Vernon Regional|CA|2|||CYLW:32
CYVL|YCK|Colville Lake|Tommy Kochon|CA|2
CYVM|YVM|Qikiqtarjuaq||CA|2
CYVO|YVO|Val-d'Or||CA|3
CYVP|YVP|Kuujjuaq||CA|3
CYVQ|YVQ|Norman Wells||CA|3
CYVR|YVR|Vancouver||CA|4
CYVT|YVT|Buffalo Narrows||CA|1|||CYMM:195
CYVV|YVV|Wiarton||CA|3
CYVZ|YVZ|Deer Lake||CA|2
CYWE|YFJ|Wekweètì||CA|2
CYWG|YWG|Winnipeg|Winnipeg / James Armstrong Richardson|CA|4
CYWH|YWH|Victoria|Victoria Harbour Seaplane Base|CA|2
CYWJ|YWJ|Déline||CA|2
CYWK|YWK|Wabush||CA|3
CYWL|YWL|Williams Lake||CA|3
CYWM||Athabasca||CA|1|||CYEG:161
CYWN||Wainwright|CFB Wainwright Field 21|CA|1|||CYLL:87
CYWP|YWP|Webequie||CA|2
CYWV||Wainwright||CA|1|||CYLL:78
CYWY|YWY|Wrigley||CA|2|||CYFS:197
CYXC|YXC|Cranbrook|Cranbrook/Canadian Rockies|CA|3
CYXE|YXE|Saskatoon|Saskatoon John G. Diefenbaker|CA|4
CYXH|YXH|Medicine Hat|Medicine Hat Regional|CA|3
CYXJ|YXJ|Fort Saint John|Fort St John / North Peace Regional|CA|3
CYXK|YXK|Rimouski||CA|2|||CYYY:26
CYXL|YXL|Sioux Lookout||CA|3
CYXN|YXN|Whale Cove||CA|2
CYXP|YXP|Pangnirtung||CA|2
CYXQ|YXQ|Beaver Creek||CA|2|||PAOR:82
CYXR|YXR|Earlton||CA|2|Timiskaming Regional||CYUY:94
CYXS|YXS|Prince George||CA|3|International
CYXT|YXT|Terrace|Northwest Regional Airport Terrace-Kitimat|CA|3
CYXU|YXU|London||CA|3
CYXX|YXX|Abbotsford||CA|3
CYXY|YXY|Whitehorse|Whitehorse / Erik Nielsen|CA|3
CYXZ|YXZ|Wawa||CA|2|||CYAM:166
CYYB|YYB|North Bay|North Bay Jack Garland|CA|3
CYYC|YYC|Calgary||CA|4
CYYD|YYD|Smithers||CA|3
CYYE|YYE|Fort Nelson||CA|3
CYYF|YYF|Penticton||CA|3
CYYG|YYG|Charlottetown||CA|3
CYYH|YYH|Taloyoak||CA|2
CYYJ|YYJ|Victoria||CA|4
CYYL|YYL|Lynn Lake||CA|3
CYYM|YYM|Cowley||CA|1|||CYQL:93
CYYN|YYN|Swift Current||CA|2|||CYQR:215
CYYO||Wynyard|Wynyard / W.B. Needham Field|CA|1|||CYQR:157
CYYQ|YYQ|Churchill||CA|3
CYYR|YYR|Goose Bay||CA|3
CYYT|YYT|St. John's||CA|4
CYYU|YYU|Kapuskasing||CA|2|||CYTS:123
CYYW|YYW|Armstrong||CA|2|||CYPL:158
CYYY|YYY|Mont-Joli|Mont Joli|CA|3
CYYZ|YYZ|Toronto|Toronto Pearson|CA|4
CYZE|YZE|Gore Bay|Gore Bay Manitoulin|CA|2|||KAPN:119
CYZF|YZF|Yellowknife||CA|3
CYZG|YZG|Salluit||CA|2
CYZH|YZH|Slave Lake||CA|2|||CYZU:143
CYZP|YZP|Sandspit||CA|3
CYZR|YZR|Sarnia|Chris Hadfield|CA|2|||CYXU:94
CYZS|YZS|Coral Harbour||CA|3
CYZT|YZT|Port Hardy||CA|3
CYZU|YZU|Whitecourt||CA|3
CYZV|YZV|Sept-Îles||CA|3
CYZW|YZW|Teslin||CA|2|||CYXY:141
CYZX|YZX|Greenwood|CFB Greenwood|CA|2|||CYSJ:85
CYZY||Mackenzie||CA|2|||CYXS:160
CZAC|ZAC|York Landing||CA|1|||CZBD:29
CZAM|YSN|Salmon Arm|Shuswap Regional|CA|2|||CYLW:81
CZBA||Burlington|Burlington Executive Airpark|CA|1|||CYHM:31
CZBB|YDT|Delta|Boundary Bay|CA|2|||CYVR:19
CZBD|ILF|Ilford||CA|2
CZBF|ZBF|South Tetagouche|Bathurst|CA|3
CZBM|ZBM|Bromont||CA|2|Roland Désourdy||CYHU:58
CZEE|KES|Kelsey||CA|2|||CZBD:55
CZEM|ZEM|Eastmain River||CA|2
CZFA|ZFA|Faro||CA|2|||CYXY:189
CZFD|ZFD|Fond-du-Lac||CA|2
CZFG|XPK|Pukatawagan||CA|2
CZFM|ZFM|Fort Mcpherson||CA|2
CZFN|ZFN|Tulita||CA|2
CZGF|ZGF|Grand Forks||CA|2|||YZZ:60
CZGI|ZGI|Gods River||CA|2
CZGR|ZGR|Little Grand Rapids||CA|1|||CYHP:83
CZHP|ZHP|High Prairie||CA|1|||CYPE:111
CZJG|ZJG|Jenpeg||CA|2|||CYCR:21
CZJN|ZJN|Swan River||CA|2|||CYDN:140
CZKE|ZKE|Kashechewan||CA|2
CZLQ|YTD|Thicket Portage||CA|2|||CYTH:55
CZMD|MSA|Muskrat Dam||CA|2
CZML|ZMH|108 Mile|South Cariboo Region / 108 Mile|CA|1|||CYWL:70
CZMN|PIW|Pikwitonei||CA|2|||CYTH:50
CZMT|ZMT|Masset||CA|3
CZNG|XPP|Poplar River||CA|1|||CYBV:73
CZNL||Nelson||CA|1|||CYCG:33
CZPB|ZPB|Sachigo Lake||CA|2
CZPC|WPC|Pincher Creek||CA|2|||CYQL:87
CZPO|ZPO|Pinehouse Lake||CA|1|||CYVC:93
CZRJ|ZRJ|Round Lake||CA|2|Weagamow Lake
CZSJ|ZSJ|Sandy Lake||CA|3
CZSN|XSI|South Indian Lake||CA|2
CZST|ZST|Stewart||CA|2|||PAKT:126
CZSW|ZSW|Prince Rupert|Prince Rupert/Seal Cove Seaplane Base|CA|1|||CYPR:12
CZTA|YDV|Bloodvein River||CA|2
CZTM|ZTM|Shamattawa||CA|2
CZUC|ZUC|Ignace|Ignace Municipal|CA|2|||CYXL:77
CZUM|ZUM|Churchill Falls||CA|2
CZVL||Edmonton|Edmonton / Villeneuve|CA|1|||CYEG:44
CZWH|XLB|Lac Brochet||CA|2
CZWL|ZWL|Wollaston Lake||CA|2
DAAB||Blida||DZ|2|||DAAG:42
DAAD|BUJ|Ouled Sidi Brahim|Bou Saada|DZ|2|||DAAS:138
DAAE|BJA|Béjaïa|Soummam–Abane Ramdane|DZ|4
DAAF||Aoulef||DZ|1|||DAUI:140
DAAG|ALG|Algiers|Houari Boumediene|DZ|4
DAAJ|DJG|Djanet|Tiska Djanet|DZ|4
DAAK||Boufarik|Boufarik Air Base|DZ|2|||DAAG:34
DAAM||Telerghma||DZ|1|||DABC:30
DAAN||Reggane|Reggane Air Base|DZ|1|||DAUA:134
DAAP|VVZ|Illizi|Illizi Takhamalt|DZ|3
DAAQ||Ain Oussera||DZ|1|||DAAG:133
DAAS|QSF|Sétif|Ain Arnat|DZ|3
DAAT|TMR|Tamanrasset|Aguenar – Hadj Bey Akhamok|DZ|4
DAAV|GJL|Jijel|Jijel Ferhat Abbas|DZ|4|Tahir
DAAW||Bordj Omar Driss||DZ|1|||DAAP:236
DAAX||Chéraga||DZ|1|||DAAG:27
DAAY|MZW|Mecheria||DZ|3
DAAZ||Relizane||DZ|2|||DAOI:82
DABB|AAE|Annaba|Annaba Rabah Bitat|DZ|4
DABC|CZL|Constantine|Mohamed Boudiaf|DZ|4
DABS|TEE|Tébessi|Cheikh Larbi Tébessi|DZ|3
DABT|BLJ|Batna|Batna Mostefa Ben Boulaid|DZ|4
DAEF||Bordj Omar Driss|Tin Fouye Tabankort|DZ|1|||DAUZ:209
DAEN||Rhoude Nouss|Rhoud Nouss|DZ|1|||DAUH:223
DAEO||Oum El Bouaghi|Oum El Bouaghi Air Base|DZ|1||DABO|DABC:73
DAFH|HRM|Hassi R'Mel||DZ|2|||DAUG:76
DAFI||Djelfa|Tsletsi|DZ|1|||DAUL:107
DALH|||Dalhousie|AU|1
DAOB|TID|Tiaret|Abdelhafid Boussouf Bou Chekif|DZ|2|||DAOI:98
DAOC||Béchar|Béchar Ouakda|DZ|1|||DAOR:8
DAOE||Bousfer|Bousfer Air Base|DZ|1|||DAOO:21
DAOF|TIN|Tindouf||DZ|3
DAOH||Chenachen|Chenachene|DZ|1
DAOI|CFK|Chlef|Chlef Aboubakr Belkaid|DZ|4
DAOL|TAF|Tafraoui|Oran Tafraoui|DZ|2|||DAOO:12
DAOM||Hamaguir||DZ|1|||DAOR:114
DAON|TLM|Zenata|Zenata – Messali El Hadj|DZ|4
DAOO|ORN|Es-Sénia|Oran Es-Sénia|DZ|4|Ahmed Ben Bella
DAOR|CBH|Béchar|Béchar Boudghene Ben Ali Lotfi|DZ|3
DAOS|BFW|Sidi Bel Abbès|Sidi Bel Abbes|DZ|1|||DAOO:50
DAOV|MUW|Ghriss||DZ|2|||DAOO:84
DAOY|EBH|El Bayadh||DZ|2
DATG|INF|In Guezzam||DZ|1
DATM|BMW|Bordj Badji Mokhtar||DZ|3
DAUA|AZR|Adrar|Touat-Cheikh Sidi Mohamed Belkebir|DZ|3
DAUB|BSK|Biskra|Biskra - Mohamed Khider|DZ|4
DAUE|ELG|El Menia|El Golea|DZ|3
DAUG|GHA|El Atteuf|Noumérat - Moufdi Zakaria|DZ|3
DAUH|HME|Hassi Messaoud|Hassi Messaoud-Oued Irara Krim Belkacem|DZ|3
DAUI|INZ|In Salah||DZ|3
DAUK|TGR|Touggourt|Touggourt Sidi Madhi|DZ|3
DAUL|LOO|Laghouat|Laghouat - Molay Ahmed Medeghri|DZ|3
DAUO|ELU|Guemar|Guemar Airport - مطار قمار بالوادي|DZ|3
DAUT|TMX|Timimoun||DZ|3
DAUU|OGX|Ouargla|Ain Beida|DZ|3
DAUZ|IAM|In Aménas|Zarzaitine - In Aménas|DZ|3
DBBB|COO|Cotonou|Cotonou Cadjehoun|BJ|4
DBBC||Bohicon|Bohicon/Cana|BJ|1|||DBBB:93
DBBD|DJA|Djougou||BJ|1|||DGLE:275
DBBK|KDC|Kandi||BJ|1|||DRRN:273
DBBN|NAE|Natitingou||BJ|1|||DGLE:260
DBBO||Porga||BJ|1|||DGLE:262
DBBP|PKO|Parakou||BJ|1|||DNIL:231
DBBR||Bembereke||BJ|1|||DNIL:284
DBBS|SVF|Savé||BJ|1|||DNIB:182
DFCA|XKY|Kaya||BF|1|||DFFD:92
DFCB||Barsalogho||BF|1|||DFFD:126
DFCC|OUG|Ouahigouya||BF|1|||DFFD:169
DFCD||Didyr||BF|1|||DFFD:122
DFCE||Batie||BF|1|||DFOO:210
DFCG||Kongoussi||BF|1|||DFFD:107
DFCI||Titao||BF|1|||DFFD:169
DFCJ|XDJ|Djibo||BF|1|||DFFD:197
DFCK||Koudougou||BF|1|||DFFD:97
DFCL|XLU|Leo||BF|1|||DFFD:153
DFCM||Manga||BF|1|||DFFD:92
DFCP|PUP|Po||BF|1|||DFFD:136
DFCR||Poura||BF|1|||DFFD:158
DFCS||Seguenega||BF|1|||DFFD:132
DFCT||Tenado||BF|1|||DFFD:118
DFCU||Gourcy||BF|1|||DFFD:132
DFEA|XBO|Boulsa||BF|1|||DFFD:108
DFEB|XBG|Bogande||BF|1|||DFFD:162
DFEC||Komin-Yanga||BF|1|||DFFD:195
DFED|DIP|Diapaga||BF|1|||DRRN:164
DFEE|DOR|Dori||BF|1|||DFFD:243
DFEF|FNG|Fada N'gourma||BF|1|||DFFD:207
DFEG|XGG|Gorom-Gorom||BF|1|||GAGO:201
DFEK||Koupela||BF|1|||DFFD:133
DFEL|XKA|Kantchari||BF|1|||DRRN:136
DFEM|TMQ|Tambao||BF|1|||GAGO:162
DFEN||Essakane Gold Mine|Peta Barabe|BF|1|||GAGO:210
DFEO||Zorgo||BF|1|||DFFD:98
DFEP|XPA|Pama||BF|1|||DGLE:255
DFER|ARL|Arly||BF|1|||DRRN:223
DFES|XSE|Sebba||BF|1|||DRRN:180
DFET|TEG|Tenkodogo||BF|1|||DFFD:138
DFEY||Ouargaye||BF|1|||DFFD:194
DFEZ|XZA|Zabré||BF|1|||DFFD:164
DFFD|OUA|Ouagadougou|Ouagadougou Thomas Sankara|BF|4
DFOA||Dano||BF|1|||DFOO:138
DFOB|BNR|Banfora||BF|1|||DFOO:68
DFOD|DGU|Dedougou||BF|1|||DFOO:171
DFOF||Safane||BF|1|||DFOO:167
DFOG|XGA|Gaoua||BF|1|||DFOO:154
DFOH||Houndé||BF|1|||DFOO:97
DFON|XNU|Nouna||BF|1|||DFOO:184
DFOO|BOY|Bobo Dioulasso||BF|4
DFOR||Orodara||BF|1|||DFOO:68
DFOS||Sideradougou||BF|1|||DFOO:55
DFOT|TUQ|Tougan||BF|1|||DFFD:187
DFOU|XDE|Diebougou||BF|1|||DFOO:120
DFOY|XAR|Aribinda||BF|1|||DFFD:218
DFYO||Koussaro|Yaramoko Gold Mine|BF|1|||DFOO:134
DGAA|ACC|Accra|Kotoka|GH|4
DGAH||Ho||GH|3
DGLE|TML|Tamale|Yakubu Tali|GH|4
DGLN||Navrongo||GH|1|||DGLE:156
DGLW|WZA|Wa||GH|1|||DGLE:189
DGLY||Yendi||GH|1|||DGLE:96
DGSI|KMS|Kumasi|Prempeh I|GH|4
DGSN|NYI|Sunyani||GH|3
DGTK|TKD|Sekondi-Takoradi|Takoradi|GH|3
DIAO|ABO|Aboisso||CI|1|||DIAP:80
DIAP|ABJ|Abidjan|Félix-Houphouët-Boigny|CI|4
DIAU|OGO|Abengourou||CI|1|||DGSN:145
DIBC||Bocanda||CI|1|||DIBK:99
DIBI|BXI|Boundiali||CI|1|||DIKO:102
DIBK|BYK|Bouaké||CI|3
DIBN|BQO|Bouna||CI|1|||DGSN:224
DIBU|BDK|Bondoukou|Soko|CI|1|||DGSN:87
DIDB||Dabou||CI|1|||DIAP:54
DIDK|DIM|Dimbokro||CI|1|||DIBK:130
DIDL|DJO||Daloa|CI|2|||DIBK:187
DIGA|GGN|Gagnoa||CI|1|||DISP:168
DIGL|GGO|Guiglo||CI|1|||DISP:221
DIGN|BBV|Grand-Béréby|Nero-Mer|CI|1|||DISP:31
DIKO|HGO|Korhogo||CI|3
DIMN|MJC||Man|CI|2|||DIBK:282
DIOD|KEO|Odienne||CI|1|||DIKO:221
DIOF|OFI|Ouango Fitini||CI|1|||DIKO:167
DISG|SEO|Séguéla||CI|1|||DIBK:175
DISP|SPY||San Pedro|CI|3
DISS|ZSS|Sassandra||CI|1|||DISP:62
DITB|TXU|Tabou||CI|1|||DISP:85
DITM|TOZ|Touba|Mahana|CI|1|||DIKO:263
DIYO|ASK|Yamoussoukro||CI|3|||DIBK:98
DMDM||Kanguwol|Muhammadu Buhari International Cargo|NG|1||DMTU|DNMA:139
DNAA|ABV|Abuja|Nnamdi Azikiwe|NG|4
DNAI|QUO|Uyo|Akwa Ibom|NG|3
DNAK|AKR|Akure||NG|3
DNAN||Umuleri|Chinua Achebe|NG|2
DNAS|ABB|Asaba||NG|4
DNBA||Bauchi||NG|1|||DNBC:22
DNBB||Bayaluga|Bebi|NG|1|||DNMK:143
DNBC|BCU|Bauchi|Sir Abubakar Tafawa Balewa Bauchi State|NG|4
DNBE|BNI|Benin||NG|3
DNBI||Bida||NG|1|||DNAA:138
DNBK||Birinin Kebbi|Sir Ahmadu Bello|NG|4
DNBY||Yenagoa|Bayelsa|NG|3
DNCA|CBQ|Calabar|Margaret Ekpo|NG|3
DNDS||Dutse||NG|1|||DNKN:89
DNEK||Eket||NG|1|||DNAI:30
DNEN|ENU|Enegu|Akanu Ibiam|NG|4
DNES||Escravos||NG|1|||DNSU:70
DNFB||Finima|Finima Bonny|NG|1|||DNPO:73
DNFD||Forçados|Forçados Terminal|NG|1|||DNSU:59
DNGO|GMO|Gombe|Gombe Lawanti|NG|3
DNGU||Gusau||NG|2|||DNKT:140
DNIB|IBA|Ibadan||NG|3
DNIL|ILR|Ilorin/Ogbomosho|General Tunde Idiagbon|NG|4
DNIM|QOW|Owerri|Sam Mbakwe International Cargo|NG|3
DNJA||Jalingo||NG|1|||DNYO:132
DNJO|JOS|Jos|Yakubu Gowon|NG|3
DNKA|KAD|Kaduna||NG|4
DNKN|KAN|Kano|Mallam Aminu Kano|NG|4
DNKT|DKA|Katsina|Umaru Musa Yar'adua|NG|3
DNMA|MIU|Maiduguri||NG|4
DNMK|MDI|Makurdi||NG|3
DNMM|LOS|Lagos|Murtala Muhammed|NG|4
DNMN|MXJ|Minna||NG|2|||DNAA:113
DNOS||Oshogbo||NG|1|||DNIB:73
DNPM|PHG|Port Harcourt|Port Harcourt City Airport / Port Harcourt Air Force Base|NG|3
DNPO|PHC|Port Harcourt||NG|4
DNSO|SKO|Sokoto|Sadiq Abubakar III|NG|4
DNSU|QRW|Okpe|Warri|NG|3
DNYO|YOL|Yola||NG|3
DNZA|ZAR|Zaria||NG|2|||DNKA:63
DRRA||Tessaoua||NE|1|||DNKT:92
DRRC||Dogondoutchi||NE|1|||DNSO:146
DRRD||Dosso||NE|1|||DRRN:122
DRRE||Tera||NE|1|||DRRN:164
DRRG||Gaya||NE|1|||DRRN:223
DRRI||Bilma||NE|1
DRRL||Tillabéri||NE|1|||DRRN:118
DRRM|MFQ|Maradi||NE|2|||DNKT:80
DRRN|NIM|Niamey|Diori Hamani|NE|4
DRRP||La Tapoa||NE|1|||DRRN:113
DRRT|THZ|Tahoua||NE|2|||DNSO:218
DRRU||Ouallam||NE|1|||DRRN:98
DRZA|AJY|Agadez|Mano Dayak|NE|2
DRZD||Dirkou||NE|1
DRZF||Diffa||NE|1|||DNMA:176
DRZG||Goure||NE|1|||DRZR:129
DRZI||Iferouane||NE|1
DRZL|RLT|Arlit||NE|1
DRZM||Maine-Soroa||NE|1|||DNMA:188
DRZN||N'Guigmi||NE|1|||DNMA:267
DRZR|ZND|Zinder||NE|3
DRZT||Tanout||NE|1|||DRZR:138
DTKA|TBJ|Tabarka|Tabarka-Aïn Draham|TN|3
DTMB|MIR|Monastir|Monastir Habib Bourguiba|TN|3
DTNH|NBE|Enfidha|Enfidha - Hammamet|TN|3
DTTA|TUN|Tunis|Tunis Carthage|TN|4
DTTB||Borj Challouf|Bizerte Sidi Ahmed Air Base|TN|2|||DTTA:58
DTTD||Remada|Remada Air Base|TN|2|||DTTJ:178
DTTF|GAF|Gafsa|Gafsa Ksar|TN|2|||DTTZ:85
DTTG|GAE|Gabès|Gabès Matmata|TN|2|||DTTJ:81
DTTI||Burj al Hafsiyah|Borj El Amri|TN|1|||DTTA:29
DTTJ|DJE|Djerba|Djerba Zarzis|TN|4|Mellita
DTTR|EBM|El Borma||TN|2|||HLTD:179
DTTX|SFA|Sfax|Sfax Thyna|TN|3
DTTZ|TOE|Tozeur|Tozeur Nefta|TN|3
DXAK||Atakpamé|Akpaka|TG|1|||DXXX:158
DXDP||Dapaong|Djangou|TG|1|||DGLE:184
DXKP||Anié|Kolokope|TG|1|||DXXX:182
DXMG||Mango|Sansanné-Mango|TG|1|||DGLE:172
DXNG|LRL|Niamtougou||TG|3|||DGLE:216
DXSK||Sokodé||TG|1|||DGLE:230
DXXX|LFW|Lomé|Lomé–Tokoin|TG|4
EBAM||Mont-de-l'Enclus|Amougies|BE|1|||LFQQ:33
EBAR||Arlon|Arlon-Sterpenich Ultralight|BE|1|||ELLX:24
EBAV||Hannut|Avernas-le-Bauduin Ultralight|BE|1|||EBLG:28
EBAW|ANR|Antwerp|Antwerp International Airport|BE|3|Deurne
EBBE||Beauvechain|Beauvechain Air Base|BE|2|||EBBR:25
EBBL||Kleine Brogel|Kleine Brogel Air Base|BE|2|||EHEH:32
EBBN||Büllingen||BE|1|||EBLG:64
EBBR|BRU|Brussels||BE|4|Zaventem
EBBT||Brasschaat||BE|1|||EBAW:17
EBBX||Bertrix|Jehonville Air Base|BE|1|||ELLX:77
EBBY||Genappe|Baisy-Thy Ultralight|BE|1|||EBCI:12
EBBZ||Pont-à-Celles|Buzet|BE|1|||EBCI:10
EBCF||Cerfontaine||BE|1|||EBCI:35
EBCI|CRL|Charleroi|Brussels South Charleroi|BE|4
EBCV||Chièvres|Chièvres Air Base|BE|2|||EBCI:46
EBDT||Diest|Schaffen|BE|1|||EBBR:42
EBFN||Koksijde|Koksijde Air Base|BE|2|||EBOS:20
EBFS||Florennes|Florennes Air Base|BE|2|||EBCI:28
EBGB||Grimbergen||BE|1|||EBBR:8
EBGG||Geraardsbergen|Overboelare|BE|1|||EBBR:47
EBHN||Hoevenen||BE|1|||EBAW:14
EBIS||Isieres|Ath/Isieres|BE|1|||LFQQ:51
EBKH||Balen|Balen-Keiheuvel|BE|1|||EHEH:32
EBKT|KJK|Wevelgem|Kortrijk-Wevelgem|BE|2|||LFQQ:29
EBLB||Bütgenbach|Elsenborn Air Base|BE|1|||EBLG:55
EBLE||Leopoldsburg||BE|1|||EHEH:37
EBLG|LGG|Grâce-Hollogne|Liège|BE|3
EBMB||Steenokkerzeel|Melsbroek Air Base|BE|1|||EBBR:1
EBMG||Doische|Matagne-la-Petite Ultralight|BE|1|||EBCI:42
EBML||Assesse|Maillen Ultralight|BE|1|||EBCI:34
EBMO||Wevelgem|Moorsele|BE|1|||LFQQ:32
EBNM||Namur|Namur-Suarlée|BE|1|||EBCI:22
EBOS|OST|Oostende|Ostend-Bruges|BE|4
EBSG||Saint Ghislain|Saint-Ghislain|BE|1|||EBCI:45
EBSH||Saint Hubert||BE|1|||EBLG:67
EBSL||Zutendaal|Zutendaal Air Base|BE|1|||EHBK:13
EBSP||Spa|Spa-La Sauvenière|BE|1|||EBLG:37
EBST||Sint-Truiden|Sint-Truiden / Brustem|BE|1|||EBLG:24
EBSU||Saint Hubert|Saint Hubert Air Base|BE|1|||EBLG:67
EBTN||Tienen|Goetsenhoven|BE|1|||EBBR:36
EBTX||Verviers|Theux|BE|1|||EBLG:31
EBTY||Péruwelz|Maubray|BE|1|||LFQQ:28
EBUL||Ursel|Ursel Air Base|BE|1|||EBOS:42
EBWE||Weelde|Weelde Air Base|BE|1|||EHEH:29
EBZH||Hasselt|Kiewit Airfield Hasselt|BE|1|||EHBK:28
EBZR|OBL|Zoersel|Oostmalle|BE|1|||EBAW:23
EBZU||Zuienkerke|Zuienkerke Sport Aviation|BE|1|||EBOS:19
EBZW||Genk|Genk Zwartberg|BE|1|||EHBK:21
EDAB||Kubschütz|Bautzen|DE|1|||EDDC:53
EDAC|AOC|Nobitz|Leipzig–Altenburg|DE|2|||EDDP:52
EDAD||Dessau-Roßlau|Dessau|DE|1|||EDDP:46
EDAE||Siehdichum|Eisenhüttenstadt|DE|1|||EDDB:76
EDAG||Großrückerswalde||DE|1|||LKKV:51
EDAH|HDF|Zirchow|Heringsdorf|DE|3
EDAI||Neustadt|Sonderlandeplatz Segeletz|DE|1|||EDDB:83
EDAJ||Gera|Gera-Leumnitz|DE|1|||EDDP:60
EDAK||Großenhain||DE|1|||EDDC:24
EDAM||Merseburg||DE|1|||EDDP:21
EDAN||Neustadt-Glewe||DE|1|||ETNL:76
EDAO||Nordhausen||DE|1|||EDDE:58
EDAP||Neuhausen/Spree|Cottbus-Neuhausen|DE|1|||EDDC:76
EDAQ||Landsberg|Halle-Oppin|DE|1|||EDDP:19
EDAR||Pirna|Pirna-Pratzschwitz|DE|1|||EDDC:20
EDAS||Finsterwalde|Finsterwalde-Heinrichsruh|DE|1|||EDDC:56
EDAT||Hoyerswerda|Nardt|DE|1|||EDDC:46
EDAU|IES|Riesa|Riesa-Göhlis|DE|1|||EDDC:34
EDAV||Eberswalde|Eberswalde-Finow|DE|1|||EDDB:53
EDAW||Roitzschjora||DE|1|||EDDP:25
EDAX|REB|Lärz|Müritz Airpark|DE|1|||ETNL:75
EDAY||Strausberg||DE|1|||EDDB:37
EDAZ||Trebbin|Schönhagen|DE|1|||EDDB:29
EDBA||Osthausen-Wülfershausen|Arnstadt-Alkersleben|DE|1|||EDDE:17
EDBC|CSO|Hecklingen|Cochstedt|DE|1|||EDDP:74
EDBE||Brandenburg an der Havel|Brandenburg-Mühlenfeld|DE|1|||EDDB:62
EDBF||Fehrbellin||DE|1|||EDDB:69
EDBG||Burg bei Magdeburg|Burg|DE|1|||EDDP:95
EDBH|BBH|Barth|Stralsund-Barth|DE|1||ETBH|ETNL:55
EDBI||Zwickau||DE|1|||LKKV:64
EDBJ||Schöngleina|Jena-Schöngleina|DE|1|||EDDE:53
EDBK||Kyritz||DE|1|||EDDB:95
EDBL||Laucha an der Unstrut|Laucha|DE|1|||EDDP:42
EDBM||Magdeburg|Magdeburg City|DE|1|||EDDP:84
EDBN|FNB|Trollenhagen|Neubrandenburg Trollenhagen|DE|2||ETNU|EDAH:64
EDBO||Niedergörsdorf|Oehna|DE|1|||EDDB:60
EDBP||Pinnow||DE|1|||ETNL:58
EDBQ||Luckaitztal|Bronkow|DE|1|||EDDC:61
EDBR||Rothenburg/Oberlausitz|Rothenburg/Görlitz|DE|2|||EDDC:86
EDBS||Kölleda|Sömmerda-Dermsdorf|DE|1|||EDDE:29
EDBT||Allstedt||DE|1|||EDDP:55
EDBU||Pritzwalk|Pritzwalk-Sommersberg|DE|1|||ETNL:82
EDBV||Stralsund||DE|1|||ETNL:68
EDBW||Werneuchen||DE|1|||EDDB:35
EDBX||Görlitz||DE|1|||EDDC:83
EDBY||Bandelin|Schmoldow|DE|1|||EDAH:54
EDBZ||Schwarzheide|Schwarzheide/Schipkau|DE|1|||EDDC:41
EDCA||Anklam|Anklam Otto Lilienthal|DE|1||ETAM|EDAH:32
EDCB||Ballenstedt||DE|1|||EDDP:78
EDCE||Müncheberg|Müncheberg-Eggersdorf|DE|1|||EDDB:42
EDCG|GTI|Dreschvitz|Rügen|DE|1|||EDAH:78
EDCH||Zeitz|Sprossen|DE|1|||EDDP:42
EDCI||Großdubrau|Klix|DE|1|||EDDC:54
EDCJ||Jahnsdorf|Chemnitz/Jahnsdorf|DE|1|||LKKV:61
EDCK|KOQ|Köthen||DE|1|Köthen (Anhalt)||EDDP:39
EDCL||Klietz|Klietz-Scharlibbe|DE|1|||EDDB:104
EDCM||Kamenz||DE|1|||EDDC:31
EDCO||Nottertal-Heilinger Höhen|Obermehler-Schlotheim|DE|1|||EDDE:39
EDCP|PEF|Peenemünde||DE|1|||EDAH:40
EDCQ||Aschersleben||DE|1|||EDDP:64
EDCR||Bastorf|Rerik-Zweedorf|DE|1|||ETNL:45
EDCS||Nuthetal|Saarmund|DE|1|||EDDB:28
EDCT||Taucha||DE|1|||EDDP:21
EDCU||Güstrow||DE|1|||ETNL:13
EDCV||Pasewalk||DE|1|||EDAH:44
EDCW||Wismar||DE|1|||ETNL:51
EDCX||Klein Kussewitz|Purkshof|DE|1|||ETNL:27
EDCY||Welzow|Spremberg-Welzow|DE|1|||EDDC:55
EDDB|BER|Berlin|Berlin Brandenburg|DE|4
EDDC|DRS|Dresden||DE|4||ETDN
EDDE|ERF|Erfurt|Erfurt-Weimar|DE|4
EDDF|FRA|Frankfurt am Main|Frankfurt Main|DE|4||EDAF
EDDG|FMO|Münster / Osnabrück|Münster Osnabrück|DE|4|Greven
EDDH|HAM|Hamburg|Hamburg Helmut Schmidt|DE|4
EDDK|CGN|Köln|Cologne Bonn|DE|4|Köln (Cologne)
EDDL|DUS|Düsseldorf||DE|4
EDDM|MUC|Munich||DE|4
EDDN|NUE|Nuremberg||DE|4
EDDP|LEJ|Leipzig / Halle|Leipzig/Halle|DE|4|Schkeuditz
EDDR|SCN|Saarbrücken||DE|3
EDDS|STR|Stuttgart||DE|4
EDDV|HAJ|Hannover||DE|4
EDDW|BRE|Bremen||DE|4
EDEB||Bad Langensalza||DE|1|||EDDE:29
EDEG||Gotha|Gotha-Ost|DE|1|||EDDE:16
EDEH||Hockenheim|Herrenteich|DE|1|||EDFM:14
EDEL||Langenlonsheim||DE|1|||EDFH:46
EDEM||Homburg|Mosenberg Airfeld|DE|1|Homburg (Efze)||EDVK:40
EDEN||Bad Hersfeld||DE|1|||EDVK:68
EDEP||Heppenheim|Heppenheim Glider Field|DE|1|||EDFM:18
EDEQ||Mühlhausen||DE|1|||EDDE:39
EDER||Gersfeld|Wasserkuppe|DE|1|Gersfeld (Rhön)||EDDE:89
EDES||Griesheim|August Euler|DE|1|||EDDF:19
EDEW||Walldürn||DE|1|||EDFM:65
EDFA||Wehrheim|Anspach-Taunus|DE|1|||EDDF:29
EDFB||Reichelsheim||DE|1|||EDDF:41
EDFC||Großostheim|Aschaffenburg|DE|1|||EDDF:37
EDFD||Bad Neustadt an der Saale|Bad Neustadt/Saale-Grasberg|DE|1|||EDDE:91
EDFE||Egelsbach|Frankfurt-Egelsbach|DE|2|||EDDF:10
EDFG||Gelnhausen||DE|1|||EDDF:47
EDFH|HHN|Frankfurt am Main|Frankfurt-Hahn|DE|4|Frankfurt am Main (Lautzenhausen)
EDFI||Eschenburg|Hirzenhain|DE|1|||EDDF:85
EDFJ||Hammelburg|Lager Hammelburg|DE|1|||EDDF:95
EDFK||Bad Kissingen||DE|1|||EDDE:106
EDFL||Gießen|Gießen-Lützellinden|DE|1|||EDDF:58
EDFM|MHG|Mannheim|Mannheim-City|DE|3
EDFN||Cölbe|Marburg-Schönstadt|DE|1|||EDVK:73
EDFO||Michelstadt|Michelstadt-Odenwald|DE|1|||EDFM:40
EDFP||Ober-Mörlen||DE|1|||EDDF:39
EDFQ||Allendorf|Allendorf-Eder|DE|1|Allendorf (Eder)||EDLP:64
EDFR||Rothenburg ob der Tauber||DE|1|||EDDN:63
EDFS||Gochsheim|Schweinfurt South|DE|1|||EDDN:82
EDFT||Lauterbach||DE|1|Lauterbach (Hessen)||EDVK:82
EDFU||Miltenberg|Mainbullau|DE|1|||EDFM:54
EDFV||Worms||DE|1|||EDFM:18
EDFW||Würzburg|Würzburg-Schenkenturm|DE|1|||EDDN:92
EDFX||Hockenheim||DE|1|||EDFM:16
EDFY||Limburg an der Lahn|Limburg-Elz|DE|1|||EDDF:59
EDFZ||Mainz|Mainz-Finthen|DE|2|||EDDF:30
EDGA||Ailertchen||DE|1|||EDDK:64
EDGB||Breitscheid||DE|1|||EDDK:75
EDGE|EIB|Hörselberg-Hainich|Eisenach-Kindel|DE|2|||EDDE:34
EDGF||Hosenfeld|Fulda-Jossa|DE|1|||EDDF:80
EDGH||Hettstadt||DE|1|||EDDF:95
EDGI||Ingelfingen|Ingelfingen-Bühlhof|DE|1|||EDDS:77
EDGJ||Ochsenfurt||DE|1|||EDDN:75
EDGK||Korbach||DE|1|||EDVK:40
EDGM||Mosbach|Mosbach-Lohrbach|DE|1|||EDFM:45
EDGP||Oppenheim||DE|1|||EDDF:24
EDGQ||Schameder||DE|1|||EDLP:71
EDGR||Reiskirchen|Gießen-Reiskirchen|DE|1|||EDDF:64
EDGS|SGE|Burbach|Siegerland|DE|2|||EDDK:68
EDGT||Bad Endbach|Bottenhorn|DE|1|||EDDF:86
EDGU||Boxberg|Unterschüpf|DE|1|||EDFM:84
EDGW||Wolfhagen|Flugplatz „Graner Berg“|DE|1|||EDVK:19
EDGX||Walldorf||DE|1|||EDFM:22
EDGY|KZG|Kitzingen||DE|1||ETIN EDIN|EDDN:68
EDGZ||Weinheim|Weinheim/Bergstraße|DE|1|||EDFM:13
EDHB||Grube||DE|1|||EDHL:53
EDHC||Lüchow|Lüchow-Rehbeck|DE|1|||EDHL:92
EDHD||Heilbad Heiligenstadt|Eichsfeld|DE|1|||EDVK:52
EDHE||Heist|Uetersen-Heist|DE|1|||EDDH:19
EDHF|IZE|Hohenlockstedt|Itzehoe Hungriger Wolf|DE|1|||EDXB:48
EDHG||Lüneburg||DE|1|||EDDH:53
EDHI|XFW|Hamburg|Hamburg-Finkenwerder|DE|2|||EDDH:15
EDHK|KEL|Kiel|Kiel-Holtenau|DE|2|||EKSB:69
EDHL|LBC|Lübeck|Lübeck Blankensee|DE|3
EDHM||Hasenmoor|Hartenholm|DE|1|||EDDH:32
EDHN|EUM|Neumünster||DE|1|||EDDH:50
EDHO||Tornesch|Ahrenlohe|DE|1|||EDDH:18
EDHS||Stade||DE|1|||EDDH:33
EDHU||Lauenbrück||DE|1|||EDDH:54
EDHW||Wahlstedt||DE|1|||EDHL:37
EDHY||Hoya||DE|1|||EDDW:36
EDJA|FMM|Memmingen|Memmingen Allgau|DE|4||ETSM
EDJG||Grabenstätt||DE|1|||LOWS:35
EDKA|AAH|Aachen|Aachen-Merzbrück|DE|1||ETBA|EHBK:31
EDKB||Bonn|Bonn-Hangelar|DE|1|||EDDK:11
EDKD||Iserlohn|Altena-Hegenscheid|DE|1|||EDLW:24
EDKF||Bergneustadt|Bergneustadt-Auf dem Dümpel|DE|1|||EDDK:45
EDKH||Wenden|Hünsborn|DE|1|||EDDK:54
EDKI||Kirchen|Betzdorf-Kirchen|DE|1|Kirchen (Sieg)||EDDK:49
EDKL||Leverkusen||DE|1|||EDDK:19
EDKM||Meschede|Meschede-Schüren|DE|1|||EDLP:43
EDKN||Wipperfürth|Wipperfürth-Neye|DE|1|||EDDK:33
EDKO||Brilon|Brilon-Hochsauerland|DE|1|||EDLP:23
EDKP||Herscheid|Plettenberg-Hüinghausen|DE|1|||EDLW:38
EDKR||Schmallenberg|Schmallenberg-Rennefeld|DE|1|||EDLP:56
EDKS||Iserlohn|Iserlohn-Sümmern Glider Field|DE|1|||EDLW:11
EDKU||Attendorn|Attendorn-Finnentrop|DE|1|||EDLW:47
EDKV||Dahlhem|Dahlemer Binz|DE|1|||EDDK:67
EDKW||Neuenrade|Werdohl-Küntrop|DE|1|||EDLW:28
EDKZ||Meinerzhagen||DE|1|||EDDK:41
EDLA||Arnsberg|Arnsberg-Menden|DE|1|||EDLW:20
EDLB||Lüdinghausen|Borkenberge|DE|1|||EDLW:37
EDLC||Rheinberg|Kamp-Lintfort|DE|1|||EDLV:28
EDLD||Hünxe|Dinslaken-Schwarze Heide|DE|1|||EDDL:37
EDLE|ESS|Essen|Essen-Mülheim|DE|1|||EDDL:17
EDLF||Grefrath|Grefrath-Niershorst|DE|1|||EDDL:29
EDLG||Goch|Goch-Asperden|DE|1|||EDLV:10
EDLH||Hamm|Hamm-Lippewiesen|DE|1|||EDLW:24
EDLI|BFE|Bielefeld||DE|2|||EDLP:39
EDLJ||Detmold||DE|1|||EDLP:42
EDLK||Krefeld|Krefeld-Egelsberg|DE|1|||EDDL:16
EDLM||Marl|Marl-Loemühle|DE|1|||EDLW:34
EDLN|MGL|Mönchengladbach||DE|2|||EDDL:19
EDLO||Oerlinghausen||DE|1|||EDLP:36
EDLP|PAD|Paderborn|Paderborn Lippstadt|DE|4|Büren
EDLQ||Beelen||DE|1|||EDDG:35
EDLR||Paderborn|Paderborn-Haxterberg|DE|1|||EDLP:14
EDLS||Stadtlohn|Stadtlohn-Vreden|DE|1|||EDDG:60
EDLT||Telgte|Münster-Telgte|DE|1|||EDDG:22
EDLU|||Oelde Bergeler|DE|1|||EDLP:39
EDLV|NRN|Weeze||DE|4|Niederrhein|ETUL
EDLW|DTM|Dortmund||DE|4
EDLX||Wesel|Wesel-Römerwardt|DE|1|||EDLV:32
EDLY||Borken|Borken-Hoxfeld|DE|1|||EDLV:54
EDLZ||Bad Sassendorf|Soest-Bad Sassendorf|DE|1|||EDLP:28
EDMA|AGB|Augsburg||DE|2|||EDDM:64
EDMB||Warthausen|Biberach an der Riß|DE|1|||EDJA:38
EDMC||Blaubeuren||DE|1|||EDDS:52
EDMD||Bergkirchen|Dachau-Gröbenried|DE|1|||EDDM:30
EDME||Eggenfelden||DE|1|||EDDM:69
EDMF||Fürstenzell||DE|1|||LOWL:70
EDMG||Günzburg|Günzburg-Donauried|DE|1|||EDJA:56
EDMH||Gunzenhausen|Gunzenhausen-Reutberg|DE|1|||EDDN:48
EDMI||Illertissen||DE|1|||EDJA:28
EDMJ||Jesenwang||DE|1|||EDDM:53
EDMK||Durach|Kempten-Durach|DE|1|||EDJA:34
EDML||Landshut||DE|2|||EDDM:25
EDMN||Tussenhausen|Mindelheim-Mattsies|DE|1|||EDJA:25
EDMO|OBF|Weßling|Oberpfaffenhofen|DE|2|||EDDM:48
EDMP||Vilsbiburg||DE|1|||EDDM:42
EDMQ||Genderkingen|Donauwörth-Genderkingen|DE|1|||EDDM:79
EDMS|RBM|Atting|Straubing|DE|1|||EDDM:81
EDMT||Tannheim||DE|1|||EDJA:11
EDMU||Gundelfingen an der Donau|Gundelfingen|DE|1|||EDJA:65
EDMV||Vilshofen an der Donau|Vilshofen|DE|1|||LOWL:86
EDMW||Deggendorf||DE|1|||EDDM:96
EDMY||Mühldorf am Inn|Mühldorf|DE|1|||EDDM:53
EDNA||Ampfing|Ampfing-Waldkraiburg|DE|1|||EDDM:47
EDNB||Arnbruck||DE|1|||LKCS:107
EDNC||Beilngries||DE|1|||EDDN:61
EDND||Dinkelsbühl|Dinkelsbühl-Sinbronn|DE|1|||EDDN:69
EDNE||Erbach||DE|1|||EDJA:46
EDNF||Grafenau|Elsenthal Grafe|DE|1|||LKCS:79
EDNG||Giengen an der Brenz|Giengen/Brenz|DE|1|||EDJA:72
EDNH||Bad Wörishofen||DE|1|Nord||EDJA:28
EDNI||Berching||DE|1|||EDDN:49
EDNJ||Egweil|Neuburg-Egweil|DE|1|||EDDM:63
EDNK||Kirchdorf am Inn|Kirchdorf/Inn|DE|1|||LOWS:50
EDNL||Leutkirch im Allgäu|Leutkirch-Unterzeil|DE|1|||EDJA:22
EDNM||Bruck in der Oberpfalz|Nittenau-Bruck|DE|1|||EDDN:93
EDNO||Nördlingen||DE|1|||EDDN:81
EDNP||Rahberg|Pfarrkirchen|DE|1|||LOWS:70
EDNQ||Bopfingen||DE|1|||EDDS:83
EDNR||Regenstauf|Regensburg-Oberhub|DE|1|||EDDN:83
EDNS||Schwabmünchen||DE|1|||EDJA:41
EDNT||Treuchtlingen|Treuchtlingen-Bubenheim|DE|1|||EDDN:58
EDNU||Thannhausen||DE|1|||EDJA:37
EDNV||Vogtareuth||DE|1|||EDDM:55
EDNW||Weißenhorn||DE|1|||EDJA:34
EDNX||Oberschleissheim|Schleissheim|DE|1|||EDDM:21
EDNY|FDH|Friedrichshafen|Bodensee Airport Friedrichshafen|DE|4
EDNZ||Zell im Fichtelgebirge|Zell-Haidberg|DE|1|||LKKV:80
EDOA||Auerbach/Vogtland|Auerbach|DE|1|||LKKV:50
EDOB||Bad Berka||DE|1|||EDDE:23
EDOC||Gardelegen||DE|1|||EDDV:113
EDOD||Niederer Fläming|Reinsdorf|DE|1|||EDDB:55
EDOE||Großpösna|Böhlen|DE|1|||EDDP:25
EDOF||Bad Frankenhausen||DE|1|||EDDE:46
EDOG||Beilrode|Torgau-Beilrode|DE|1|||EDDP:59
EDOH||Oberschöna|Langhennersdorf|DE|1|||EDDC:41
EDOI||Paulinenaue|Bienenfarm|DE|1|||EDDB:61
EDOJ||Bad Belzig|Lüsse|DE|1|||EDDB:62
EDOK||Rudolstadt|Rudolstadt-Groschwitz|DE|1|||EDDE:33
EDOL||Oschersleben|Oschersleben Glider Field|DE|1|||EDDP:99
EDOM||Bördeland|Klein Mühlingen|DE|1|||EDDP:67
EDON||Neuhardenberg|Neuhardenberg Marxwalde|DE|1|||EDDB:57
EDOQ||Oschatz||DE|1|||EDDC:51
EDOR||Gollenberg|Stölln-Rhinow|DE|1|||EDDB:86
EDOS||Ilmenau|Pennewitz|DE|1|||EDDE:35
EDOT||Greiz|Greiz-Obergrochlitz|DE|1|||LKKV:72
EDOU||Umpferstedt|Weimar-Umpferstedt|DE|1|||EDDE:31
EDOV||Stendal|Stendal-Borstel|DE|1|||EDDB:118
EDOW||Waren|Waren-Vielist|DE|1|||ETNL:46
EDOX||Sandersdorf|Renneritz|DE|1|||EDDP:19
EDOZ||Pömmelte|Schönebeck-Zackmünde|DE|1|||EDDP:71
EDPA||Neresheim|Aalen Heidenheim Elchingen|DE|1|||EDDS:77
EDPB||Bad Ditzenbach||DE|1|||EDDS:40
EDPC||Bad Endorf|Bad Endorf/Jolling|DE|1|||LOWS:56
EDPD||Dingolfing||DE|1|||EDDM:62
EDPE||Eichstätt||DE|1|||EDDN:70
EDPF||Schwandorf||DE|1|||EDDN:82
EDPG||Pfatter|Griesau|DE|1|||EDDM:81
EDPH||Büchenbach|Schwabach-Heidenberg|DE|1|||EDDN:26
EDPI||Moosburg an der Isar|Moosburg auf der Kippe|DE|1|||EDDM:16
EDPJ||Laichingen|Laichingen Jakob Laur|DE|1|||EDDS:38
EDPK||Kienberg|Schönberg|DE|1|||LOWS:47
EDPM||Donzdorf||DE|1|||EDDS:46
EDPO||Neumarkt in der Oberpfalz|Neumarkt-Oberpfalz|DE|1|||EDDN:35
EDPQ||Schmidgaden||DE|1|||EDDN:74
EDPS||Waldkirchen|Flugplatz Sonnen|DE|1|||LKCS:61
EDPT||Gerstetten||DE|1|||EDDS:62
EDPU||Bartholomä|Bartholomä-Amalienhof|DE|1|||EDDS:58
EDPW||Thalmässing|Thalmässing-Waizenhofen|DE|1|||EDDN:49
EDPY||Ellwangen an der Jagst|Ellwangen|DE|1|||EDDS:80
EDPZ||Wessobrunn|Paterzell|DE|1|||EDJA:63
EDQA||Bamberg|Bamberg-Breitenau|DE|2||ETEJ|EDDN:48
EDQB||Bad Windsheim||DE|1|||EDDN:51
EDQC||Coburg|Coburg-Brandensteinsebene|DE|1|||EDDE:80
EDQD|BYU|Bindlach|Bayreuth|DE|2|||EDDN:67
EDQE|URD|Ebermannstadt|Burg Feuerstein|DE|1|||EDDN:33
EDQF||Weihenzell|Ansbach-Petersdorf|DE|1|||EDDN:33
EDQG|GHF|Giebelstadt||DE|1|||EDDN:82
EDQH||Herzogenaurach||DE|1|||EDDN:17
EDQI||Schnaittach|Lauf-Lillinghof|DE|1|||EDDN:19
EDQK||Kulmbach||DE|1|||EDDN:76
EDQL||Lichtenfels||DE|1|||EDDN:72
EDQM|HOQ|Hof|Hof-Plauen|DE|2|||LKKV:76
EDQN||Neustadt an der Aisch|Neustadt/Aisch|DE|1|||EDDN:37
EDQO||Helmbrechts|Ottengrüner Heide|DE|1|||LKKV:84
EDQP||Speichersdorf|Rosenthal-Plössen|DE|1|||EDDN:65
EDQR||Ebern|Ebern-Sendelbach|DE|1|||EDDN:63
EDQS||Goldlauter-Heidersbach|Suhl-Goldlauter|DE|1|||EDDE:42
EDQT||Haßfurt|Haßfurt-Schweinfurt|DE|1|||EDDN:70
EDQW||Weiden in der Oberpfalz||DE|1|||EDDN:77
EDQX||Neunkirchen am Brand|Hetzleser Berg|DE|1|||EDDN:17
EDQY||Coburg|Coburg-Steinrücken|DE|1|||EDDN:82
EDQZ||Pegnitz|Pegnitz-Zipser Berg|DE|1|||EDDN:46
EDRA||Bad Neuenahr|Bad Neuenahr-Ahrweiler|DE|1|||EDDK:34
EDRB|BBJ|Bitburg||DE|1|||ELLX:44
EDRC||Marpingen|Marpingen Glider|DE|1|||EDDR:27
EDRD||Neumagen|Neumagen-Dhron|DE|1|||EDFH:27
EDRE||Mendig||DE|1||ETHM|EDFH:47
EDRF||Bad Dürkheim||DE|1|||EDFM:23
EDRG||Idar-Oberstein|Idar-Oberstein/Göttschied|DE|1|||EDFH:24
EDRH||Hoppstädten|Hoppstädten-Weiersbach|DE|1|||EDFH:38
EDRI||Linkenheim||DE|1|||EDFM:38
EDRJ||Saarlouis|Saarlouis-Düren|DE|1|||EDDR:33
EDRK||Koblenz|Koblenz-Winningen|DE|1|||EDFH:46
EDRL||Neustadt an der Weinstraße|Flugplatz Lachen-Speyerdorf|DE|1|||EDFM:27
EDRM||Traben-Trarbach|Traben-Trarbach/Mont Royal|DE|1|||EDFH:11
EDRN||Nannhausen||DE|1|||EDFH:16
EDRO||Schweighofen||DE|1|||EDSB:29
EDRP||Battweiler|Pirmasens-Pottschütthöhe|DE|1|||EDDR:28
EDRQ||Imsweiler|Imsweiler UL|DE|1|||EDFH:54
EDRS||Bad Sobernheim|Bad Sobernheim-Domberg|DE|1|||EDFH:34
EDRT||Föhren|Trier-Föhren|DE|1|||EDFH:35
EDRV||Wershofen|Wershofen/Eifel|DE|1|||EDDK:53
EDRW||Dierdorf|Dierdorf-Wienau|DE|1|||EDDK:49
EDRX||Bexbach|Bexbach Glider Field|DE|1|||EDDR:17
EDRY||Speyer||DE|1|||EDFM:19
EDRZ|ZQW|Zweibrücken||DE|1|||EDDR:21
EDSA||Albstadt|Albstadt-Degerfeld|DE|1|||EDDS:50
EDSB|FKB|Karlsruhe / Baden-Baden|Karlsruhe Baden-Baden|DE|4|Rheinmünster
EDSD||Sindelfingen|Deckenpfronn-Egelsee|DE|1|||EDDS:30
EDSE||Göppingen|Göppingen-Bezgenriet|DE|1|||EDDS:30
EDSF||Rickenbach|Hütten Glider Field|DE|1|||LFSB:32
EDSG||Grabenstetten||DE|1|||EDDS:23
EDSH||Backnang|Backnang-Heiningen|DE|1|||EDDS:31
EDSI||Hilzingen|Binningen Glider Field|DE|1|||LSZH:40
EDSK||Kehl|Kehl-Sundheim|DE|1|||LFST:16
EDSL||Blumberg||DE|1|||LSZH:43
EDSM||Müllheim||DE|1|||LFSB:26
EDSN||Neuhausen ob Eck||DE|1|||EDNY:57
EDSO||Salach|Gruibingen-Nortel|DE|1|||EDDS:33
EDSP||Ammerbuch|Poltringen|DE|1|||EDDS:26
EDSR||Radolfzell am Bodensee|Radolfzell-Stahlringen|DE|1|||EDNY:42
EDST||Kirchheim unter Teck|Hahnweide|DE|1|||EDDS:17
EDSV||Wildberg|Wächtersberg-Hub Glider|DE|1|||EDDS:35
EDSW||Kippenheim|Altdorf-Wallburg|DE|1|||LFST:34
EDSX||Aspach|Völkleshofen-Lichtenberg|DE|1|||EDDS:37
EDSZ||Rottweil|Rottweil-Zepfenhan|DE|1|||EDDS:67
EDTA||Wutöschingen|Bohlhof Glider Field|DE|1|||LSZH:25
EDTB||Baden-Baden|Baden-Oos|DE|1|||EDSB:8
EDTC|||Bruchsal|DE|1|||EDFM:38
EDTD||Donaueschingen|Donaueschingen-Villingen|DE|2|||LSZH:57
EDTE||Eutingen im Gäu|Eutingen|DE|1|||EDDS:40
EDTF||Freiburg im Breisgau||DE|1|||LFSB:52
EDTG||Eschbach|Bremgarten|DE|1|||LFSB:34
EDTH||Heubach||DE|1|||EDDS:53
EDTK||Sinsheim||DE|1|||EDFM:37
EDTL|LHA|Lahr/Schwarzwald|Lahr|DE|2|||LFST:24
EDTM||Mengen|Mengen-Hohentengen|DE|2|||EDNY:44
EDTN||Kirchheim unter Teck|Nabern-Teck|DE|1|||EDDS:21
EDTO||Offenburg|Offenburg-Baden|DE|1|||LFST:24
EDTP||Pfullendorf||DE|1|||EDNY:33
EDTQ||Remseck am Neckar|Pattonville|DE|1|||EDDS:19
EDTR||Rheinfelden|Herten-Rheinfelden|DE|1|Rheinfelden (Baden)||LFSB:18
EDTS||Villingen-Schwenningen|Schwenningen am Neckar|DE|1|||LSZH:68
EDTU||Bad Saulgau||DE|1|||EDNY:40
EDTW||Schramberg|Winzeln-Schramberg|DE|1|||EDSB:61
EDTX||Schwäbisch Hall|Schwäbisch Hall-Weckrieden|DE|1|||EDDS:63
EDTY||Schwäbisch Hall|Adolf Würth|DE|2|||EDDS:63
EDTZ||Konstanz||DE|1|||EDNY:28
EDUA||Stechow-Ferchesar|Flugplatz Stechow-Ferchesar|DE|1|||EDDB:76
EDUF||Mühlberg|Falkenberg-Lönnewitz|DE|1|||EDDC:59
EDUG||Gransee||DE|1|||EDDB:74
EDUO||Hedersleben|Oberrißdorf|DE|1|||EDDP:46
EDUP|||Perleberg Glider Field|DE|1|||ETNL:99
EDUW||Tutow|Tutow-Betriebs|DE|1|||EDAH:61
EDUZ||Straguth|Zerbst|DE|2|||EDDP:65
EDVA||Bad Gandersheim||DE|1|||EDVK:65
EDVC||Celle|Celle-Arloh|DE|1|||EDDV:38
EDVD||Uslar||DE|1|||EDVK:31
EDVE|BWE|Braunschweig|Braunschweig-Wolfsburg|DE|2|||EDDV:61
EDVF||Blomberg|Blomberg-Borkhausen|DE|1|||EDLP:48
EDVG||Bad Arolsen|Mengeringhausen|DE|1|||EDVK:29
EDVH||Hodenhagen||DE|1|||EDDV:34
EDVI||Höxter|Höxter-Holzminden|DE|1|||EDVK:43
EDVJ||Salzgitter|Salzgitter-Schäferstuhl|DE|1|||EDDV:66
EDVK|KSF|Kassel||DE|4|Calden
EDVL||Trendelburg|Hölleberg|DE|1|||EDVK:21
EDVM||Hildesheim||DE|1|||EDDV:36
EDVN||Northeim||DE|1|||EDVK:55
EDVP||Peine|Peine-Glindbruchkippe|DE|1|||EDDV:37
EDVQ||Gifhorn|Wilsche Glider Field|DE|1|||EDDV:53
EDVR||Rinteln||DE|1|||EDDV:53
EDVT||Ith|Ithwiesen|DE|1|||EDDV:57
EDVU||Uelzen||DE|1|||EDDV:78
EDVW||Bad Pyrmont||DE|1|||EDLP:61
EDVY||Porta Westfalica||DE|1|||EDDV:62
EDWC||Damme||DE|1|||EDDG:52
EDWE|EME|Emden||DE|2
EDWF||Leer|Flugplatz Leer-Papenburg|DE|1|||EDWE:19
EDWG|AGE|Wangerooge||DE|2
EDWH||Hatten|Oldenburg-Hatten|DE|1|||EDDW:32
EDWI|WVN|Wilhelmshaven|JadeWeser|DE|1|||EDWG:32
EDWJ|JUI|Juist||DE|2
EDWK||Gnarrenburg|Karlshöfen|DE|1|||EDDW:36
EDWL|LGO|Langeoog||DE|1|||EDWZ:8
EDWM||Hellwege|Weser-Wümme|DE|1|||EDDW:28
EDWN||Klausheide|Nordhorn-Lingen|DE|1||ETUN|EDDG:50
EDWO||Osnabrück|Atterheide|DE|1|||EDDG:26
EDWP||Wiefelstede|Wiefelstede-Conneforde|DE|1|||EDWG:52
EDWQ||Ganderkesee|Ganderkesee Atlas|DE|1|||EDDW:19
EDWR|BMK|Borkum||DE|2
EDWS|NOD|Norddeich|Norden-Norddeich|DE|2
EDWT||Blexen||DE|1|||EDWG:49
EDWU|VAC|Cloppenburg|Varrelbusch|DE|1|||EDDW:52
EDWV||Verden|Verden-Scharnhorst|DE|1|Verden (Aller)||EDDW:34
EDWX||Westerstede|Westerstede-Felde|DE|1|||EDWE:48
EDWY|NRD|Norderney||DE|2
EDWZ|BMR|Baltrum||DE|2
EDXA||Bramsche|Flugplatz Achmer|DE|1|||EDDG:31
EDXB|HEI|Oesterdeichstrich|Heide-Büsum|DE|2
EDXC||Kropp|Schleswig-Kropp|DE|1|||EDXB:51
EDXD||Bohmte|Bohmte-Bad Essen|DE|1|||EDDG:50
EDXE||Rheine|Rheine-Eschendorf|DE|1|||EDDG:21
EDXF|FLF|Flensburg|Flensburg-Schäferhaus|DE|1|||EKSB:34
EDXG||Melle|Melle-Grönegau|DE|1|||EDDG:48
EDXH|HGL|Helgoland|Helgoland-Düne|DE|2
EDXI||Balge|Nienburg-Holzbalge|DE|1|||EDDV:45
EDXJ|QHU|Husum|Husum-Schwesing|DE|1|||EDXB:43
EDXK||Leck||DE|1|||EDXW:42
EDXL||Barßel||DE|1|||EDWE:45
EDXM||Sankt Michaelisdonn||DE|1|||EDXB:25
EDXN||Wurster Nordseeküste|Nordholz-Spieka|DE|1|||EDXB:46
EDXO|PSH|Sankt Peter-Ording||DE|1|||EDXB:22
EDXP||Harlesiel|Harle|DE|2
EDXQ||Rotenburg||DE|1|Rotenburg (Wümme) Wümme||EDDW:38
EDXR||Hörsten|Rendsburg-Schachtholm|DE|1|||EDXB:46
EDXS||Zeven|Seedorf|DE|1|||EDDW:45
EDXT||Sierksdorf|Sierksdorf/Hof Altona|DE|1|||EDHL:29
EDXU||Worpswede|Hüttenbusch|DE|1|||EDDW:29
EDXW|GWT|Sylt|Westerland Sylt|DE|3
EDXY|OHR|Wyk auf Föhr||DE|1|||EDXW:28
EDXZ||Geestland|Kührstedt-Bederkesa|DE|1|||EDDW:58
EEAA||Antsla||EE|1|||EETU:55
EEAE||Aespa||EE|1|||EETN:26
EEEI||Keila|Ämari Air Base|EE|2|||EETN:39
EEHA||Humala||EE|1|||EETN:26
EEJI||Jõhvi||EE|1|||EETU:120
EEKA|KDL|Kärdla||EE|3
EEKE|URE|Kuressaare||EE|3
EEKI||Karksi||EE|1|||EETU:70
EEKO||Kose||EE|1|||EETN:30
EEKU||Saareküla|Kihnu|EE|1|||EEPU:41
EELM||Tartu|Lange Airfield|EE|1|Lennundusmuuseum||EETU:5
EELU||Saare|Lyckholm Airstrip|EE|1|||EEKA:43
EEMU||Muhu||EE|1|||EEKA:45
EENA||Narva||EE|1|||ULLI:129
EENI||Nurmsi||EE|1|||EETN:80
EEPA||Paslepa||EE|1|||EEKA:38
EEPU|EPU|Pärnu||EE|3
EERA||Rapla||EE|1|||EETN:47
EERD||Riidaja||EE|1|||EETU:52
EERE||Rakvere||EE|1|||EETN:87
EERI||Suurküla|Ridali|EE|1|||EETU:44
EERU||Ringsu|Ruhnu|EE|2
EETI||Tõutsi|Tõutsi Private|EE|1|||EETU:41
EETN|TLL|Tallinn|Lennart Meri Tallinn|EE|4
EETS||Märjamaa|Teenuse-Saare|EE|1|||EEPU:47
EETU|TAY|Tartu||EE|3
EETW||Vanamõisa|Tallinn West|EE|1|||EETN:20
EEVI||Viljandi||EE|1|||EEPU:60
EEVO||Vormsi Island|Vormsi|EE|1|||EEKA:24
EEVU||Varstu||EE|1|||EETU:75
EFAA|||Aavahelukka|FI|1|||EFKT:39
EFAH||Oulu|Ahmosuo|FI|1|||EFOU:19
EFAL||Alavus||FI|1|||EFVA:107
EFET|ENF|Enontekio||FI|3
EFEU||Eura||FI|1|||EFPO:44
EFFO||Forssa||FI|1|||EFTP:68
EFGE||Genböle|Genböle Airfield UL|FI|1|||EFTU:50
EFHA|KEV|Jämsä|Halli|FI|2|||EFJY:76
EFHK|HEL|Helsinki|Helsinki Vantaa|FI|4|Helsinki (Vantaa)
EFHL||Hailuoto||FI|1|||EFOU:31
EFHM||Hämeenkyrö||FI|1|||EFTP:42
EFHN||Hanko||FI|1|||EFTU:87
EFHP||Haapavesi||FI|1|||EFOU:91
EFHV|HYV|Hyvinkää||FI|1|||EFHK:38
EFII||Iisalmi||FI|1|||EFKU:77
EFIJ|||Ilvesjoki UL|FI|1||EFJI|EFVA:94
EFIK||Kikala|Kiikala|FI|1|||EFHK:74
EFIM||Imatra|Immola|FI|1|||EFLP:47
EFIT|KTQ|Kitee||FI|2|||EFJO:60
EFIV|IVL|Ivalo||FI|4
EFJM||Jämijärvi||FI|1|||EFPO:60
EFJO|JOE|Joensuu||FI|3
EFJP|||Jäkäläpää|FI|1|||EFIV:68
EFJY|JYV|Jyväskylän Maalaiskunta|Jyväskylä|FI|3
EFKA|KAU|Kauhava||FI|2|||EFVA:65
EFKE|KEM|Kemi / Tornio|Kemi-Tornio|FI|3
EFKG|||Kumlinge|FI|1|||EFMA:52
EFKH||Kuhmo||FI|1|||EFKI:87
EFKI|KAJ|Kajaani||FI|3
EFKJ|KHJ|Kauhajoki||FI|2|||EFVA:73
EFKK|KOK|Kokkola / Kruunupyy|Kokkola-Pietarsaari|FI|3
EFKM|||Kemijärvi|FI|1|||EFRO:61
EFKN||Kannus||FI|1|||EFKK:51
EFKO||Kalajoki||FI|1|||EFKK:66
EFKR||Kärsämäki||FI|1|||EFKI:100
EFKS|KAO|Kuusamo||FI|3
EFKT|KTT|Kittilä||FI|4
EFKU|KUO|Kuopio / Siilinjärvi|Kuopio|FI|4
EFKV|||Kivijärvi|FI|1|||EFJY:85
EFKY||Peippola|Kymi|FI|1|||EFLP:86
EFLA||Lahti|Lahti Vesivehmaa|FI|1|||EFHK:100
EFLL||Lapinlahti||FI|1|||EFKU:46
EFLN||Nurmes|Lieksa Nurmes|FI|1|||EFJO:95
EFLP|LPP|Lappeenranta||FI|4
EFMA|MHQ|Mariehamn||FI|3
EFME||Alajärvi|Menkijärvi|FI|1|||EFKK:88
EFMI|MIK|Mikkeli||FI|2|||EFLP:87
EFML||Ii||FI|1|||EFOU:41
EFMN||Mäntsälä|Mäntsälä Airfield UL|FI|1|||EFHK:41
EFNS||Nurmijärvi|Savikko|FI|1|||EFHK:24
EFNU||Vihti / Nummela|Nummela|FI|1|||EFHK:37
EFOP||Oripää||FI|1|||EFTU:48
EFOU|OUL|Oulu / Oulunsalo|Oulu|FI|4
EFPA|||Pokka|FI|1|||EFKT:65
EFPI||Kokemäki|Piikajarvi|FI|1|||EFPO:32
EFPK||Pieksämäki||FI|1|||EFJY:70
EFPN||Savonlinna|Punkaharju|FI|1|||EFSA:33
EFPO|POR|Pori||FI|3
EFPR||Helsinki|Helsinki East-Redstone|FI|2|Helsinki (Pyhtää)||EFHK:91
EFPU||Pudasjärvi||FI|1|||EFOU:91
EFPY||Pyhäjärvi|Pyhäsalmi|FI|1|||EFKI:106
EFRA||Rautavaara||FI|1|||EFKU:49
EFRH||Raahe|Raahe Pattijoki|FI|1|||EFOU:41
EFRN||Rantasalmi||FI|1|||EFSA:34
EFRO|RVN|Rovaniemi||FI|4
EFRU|||Ranua|FI|1|||EFRO:70
EFRV||Kiuruvesi||FI|1|||EFKI:83
EFRY||Loppi|Räyskälä|FI|1|||EFHK:67
EFSA|SVL|Savonlinna||FI|3
EFSE||Kouvola|Selanpaa|FI|1|||EFLP:72
EFSI|SJY|Seinäjoki / Ilmajoki|Seinäjoki|FI|2|||EFVA:67
EFSO|SOT|Sodankyla||FI|2|||EFKT:83
EFSU||Suomussalmi||FI|1|||EFKI:77
EFTO||Ingå|Torbacka|FI|1|||EFHK:51
EFTP|TMP|Tampere / Pirkkala|Tampere-Pirkkala|FI|4
EFTU|TKU|Turku||FI|4
EFUT|UTI|Utti / Valkeala|Utti Air Base|FI|2|||EFLP:67
EFVA|VAA|Vaasa||FI|4
EFVI||Viitasaari||FI|1|||EFJY:81
EFVL||Vaala||FI|1|||EFKI:51
EFVP||Huittinen|Vampula|FI|1|||EFTU:61
EFVR|VRK|Varkaus / Joroinen|Varkaus|FI|2|||EFSA:62
EFVT||Veteli|Sulkaharju|FI|1|||EFKK:57
EFVU||Vuotso||FI|1|||EFIV:59
EFWB||Anjalankoski|Wredeby|FI|1|||EFLP:87
EFYL|YLI|Ylivieska||FI|2|||EFKK:86
EGAA|BFS|Belfast||GB|4
EGAB|ENK|Enniskillen|Enniskillen/St Angelo|GB|2|Enniskillen, Fermanagh and Omagh||EGAE:78
EGAC|BHD|Belfast|George Best Belfast City|GB|3
EGAD||Newtownards||GB|1|Newtownards, Ards and North Down||EGAC:12
EGAE|LDY|Derry|City of Derry|GB|3|Derry, Derry and Strabane
EGAH||Halley Research Station||AQ|1
EGAR||Rothera Research Station||AQ|1
EGAT||Sky Blu|Sky Blu Airstrip|AQ|1
EGBB|BHX|Birmingham||GB|4|Birmingham, West Midlands
EGBD||Derby||GB|1|Derby, Derbyshire||EGNX:20
EGBF||Bedford||GB|1|Bedford, Bedford|EGVW|EGGW:40
EGBG||Leicester||GB|1|Leicester, Leicestershire||EGNX:32
EGBJ|GLO|Staverton|Gloucestershire|GB|2|Staverton, Gloucestershire||EGGD:68
EGBK|ORM|Northampton|Sywell|GB|1|Northampton, Northamptonshire||EGGW:56
EGBM||Burton upon Trent|Tatenhill|GB|1|Burton upon Trent, Staffordshire||EGNX:30
EGBN|NQT|Nottingham|Nottingham City|GB|2|Nottingham, Nottinghamshire||EGNX:19
EGBO||Wolverhampton|Wolverhampton Halfpenny Green|GB|1|Wolverhampton, Staffordshire||EGBB:35
EGBP|GBA|Cirencester|Cotswold|GB|1|Cirencester, Gloucestershire||EGGD:56
EGBS||Leominster|Shobdon|GB|1|Leominster, Herefordshire||EGBB:80
EGBT||Turweston||GB|1|||EGGW:53
EGBW||Warwick|Wellesbourne Mountford|GB|1|Warwick, Warwickshire||EGBB:31
EGCA||Dronfield|Coal Aston|GB|1|Dronfield, Derbyshire||EGNX:53
EGCB||Manchester|Manchester Barton|GB|1|Manchester, Greater Manchester||EGCC:15
EGCC|MAN|Manchester||GB|4|Manchester, Greater Manchester
EGCF||Doncaster|Sandtoft|GB|1|Doncaster, South Yorkshire||EGNJ:34
EGCG||Alford|Strubby|GB|1|Alford, Lincolnshire||EGNJ:45
EGCJ||Selby|Sherburn-in-Elmet|GB|1|Selby, North Yorkshire||EGNM:30
EGCK||Caernarfon||GB|1|||EGGP:102
EGCL||Spalding|Fenland|GB|1|Spalding, Lincolnshire||EGNX:88
EGCM||Tadcaster|Leeds East|GB|2|Tadcaster, North Yorkshire|EGXG|EGNM:31
EGCR||Winsford|Ashcroft|GB|1|Winsford, Cheshire||EGGP:26
EGCS||Gainsborough|Sturgate|GB|1|Gainsborough, Lincolnshire||EGNJ:31
EGCT||Whitchurch|Tilstock|GB|1|Whitchurch, Shropshire||EGGP:47
EGCV||Shrewsbury|Sleap|GB|1|Shrewsbury, Shropshire||EGGP:56
EGCW||Welshpool||GB|1|Welshpool, Powys||EGGP:81
EGCY||South Cerney||GB|1|South Cerney (Glos)||EGGD:65
EGDC||Chivenor|Royal Marines Base Chivenor|GB|2|||EGTE:65
EGDI||Ilminster|RNAS Merryfield|GB|1|Ilminster, Somerset|EGDW|EGTE:42
EGDJ|UPV|Pewsey|Upavon|GB|1|Pewsey, Wiltshire||EGHI:48
EGDM||Salisbury|MoD Boscombe Down|GB|2|Salisbury, Wiltshire||EGHI:35
EGDN||Salisbury|Netheravon|GB|1|Salisbury, Wiltshire||EGHI:43
EGDO||Predannack Wollas|Predannack|GB|1|Predannack Wollas, Cornwall||EGHC:33
EGDR||Helston|RNAS Culdrose|GB|2|||EGHC:30
EGDY|YEO|Yeovil|RNAS Yeovilton|GB|2|Yeovil, Somerset||EGGD:42
EGEC|CAL|Campbeltown||GB|3
EGED|EOI|Eday||GB|3
EGEF|FIE|Fair Isle||GB|2
EGEH|WHS|Whalsay|Whalsay Airstrip|GB|1|Whalsay, Shetlands||EGET:27
EGEI|SKL|Ashaig|Broadford Airstrip|GB|1|Ashaig, Highland||EGEL:87
EGEJ||Isle of Gigha|Gigha|GB|1|Isle of Gigha, Argyll and Bute||EGEC:25
EGEL|COL|Coll Island|Coll|GB|2
EGEN|NRL|North Ronaldsay||GB|2
EGEO|OBN|North Connel|Oban|GB|2
EGEP|PPW|Papa Westray||GB|2|Papa Westray, Orkney Islands
EGER|SOY|Stronsay||GB|2
EGES|NDY|Sanday||GB|2
EGET|LWK|Lerwick|Lerwick / Tingwall|GB|2|Lerwick, Shetland Islands
EGEW|WRY|Westray||GB|2|Westray, Orkney Islands
EGEY|CSA|Colonsay|Colonsay Airstrip|GB|2
EGFA||Aberporth||GB|1|||EGFF:116
EGFD||Llanbedr||GB|1|||EGGP:103
EGFE|HAW|Haverfordwest||GB|2|||EGFF:122
EGFF|CWL|Cardiff||GB|4
EGFH|SWS|Swansea||GB|2|||EGFF:55
EGFP||Pembrey|Pembrey West Wales|GB|1|Pembrey, Carmarthenshire||EGFF:76
EGGD|BRS|Bristol||GB|4
EGGP|LPL|Liverpool|Liverpool John Lennon|GB|4
EGGW|LTN|Luton|London Luton|GB|4|Luton, Luton
EGHA||Shaftesbury|Compton Abbas|GB|1|Shaftesbury, Dorset||EGHH:30
EGHC|LEQ|Land's End||GB|2|Land's End, Cornwall
EGHE|ISC|St. Mary's||GB|2|St. Mary's, Isles of Scilly
EGHF||Gosport|Solent|GB|1|Gosport, Hampshire|EGUS|EGHI:19
EGHG||Yeovil|Yeovil/Westland|GB|1|Yeovil, Somerset||EGGD:49
EGHH|BOH|Bournemouth||GB|3
EGHI|SOU|Southampton||GB|3
EGHJ|BBP|Bembridge||GB|1|Bembridge, Isle of Wight||EGHI:35
EGHL||Alton|Lasham|GB|2|Alton, Hampshire||EGHI:35
EGHN||Sandown|Isle of Wight/Sandown|GB|1|Sandown, Isle of Wight||EGHI:35
EGHO||Andover|Thruxton|GB|1|Andover, Hampshire||EGHI:34
EGHP||Winchester|Popham|GB|1|Winchester, Hampshire||EGHI:29
EGHQ|NQY|Newquay|Cornwall Airport Newquay|GB|3||EGDG
EGHR|QUG|Chichester|Goodwood|GB|1|Chichester, West Sussex||EGHI:43
EGHS||Templecombe|Henstridge|GB|1|Templecombe, Somerset||EGHH:43
EGHU||Umberleigh|Eaglescott|GB|1|Umberleigh, Devon||EGTE:46
EGHY||Truro||GB|1|||EGHQ:21
EGJA|ACI|Saint Anne|Alderney|GG|3
EGJB|GCI|Saint Peter Port|Guernsey|GG|3
EGJJ|JER|St. Peter|Jersey|JE|3
EGKA|ESH|Brighton|Brighton City|GB|2|Brighton, East Sussex||EGKK:36
EGKB|BQH|London|London Biggin Hill|GB|2|||EGLC:19
EGKC||Bognor Regis|Bognor Regis Lec|GB|1|Bognor Regis, West Sussex||EGKK:51
EGKE||Ashford|Challock|GB|1|Ashford, Kent||EGMC:41
EGKH||Ashford|Headcorn|GB|1|Ashford, Kent||EGMC:46
EGKK|LGW|London|London Gatwick|GB|4
EGKL||Lewes|Deanland Lewes|GB|1|Lewes, East Sussex||EGKK:38
EGKN||Kenley|Kenley Glider Field|GB|1|||EGKK:19
EGKR||Redhill||GB|1|Redhill, Surrey||EGKK:8
EGKT||Kirknewton|RAF Kirknewton|GB|1|Kirknewton, West Lothian||EGPH:8
EGLA||Bodmin||GB|1|||EGHQ:24
EGLB||Weybridge|Brooklands|GB|1|Weybridge, Surrey||EGLL:14
EGLC|LCY|London|London City|GB|3
EGLD||Uxbridge|Denham|GB|1|Uxbridge, Greater London||EGLL:14
EGLF|FAB|Farnborough||GB|2|Farnborough, Hampshire|EGUF|EGLL:31
EGLJ||Oxford|Chalgrove|GB|1|Oxford, Oxfordshire||EGLL:49
EGLK|BBS|Camberley|Blackbushe|GB|2|Camberley, Surrey||EGLL:31
EGLL|LHR|London|London Heathrow|GB|4
EGLM||Maidenhead|White Waltham|GB|1|Maidenhead, Berkshire||EGLL:22
EGLP||Reading|Brimpton|GB|1|Reading, Berkshire||EGHI:50
EGLS||Salisbury|Old Sarum|GB|1|Salisbury, Wiltshire||EGHI:34
EGMA||Fowlmere||GB|1|Fowlmere, Cambridgeshire||EGSS:24
EGMC|SEN|Southend-on-Sea|London Southend|GB|3|Southend-on-Sea, Essex
EGMD|LYX|Romney Marsh|Lydd London Ashford|GB|2|Romney Marsh, Kent||EGMC:70
EGMF||Sittingbourne|Farthing Corner / Stoneacre Farm|GB|1|Sittingbourne, Kent||EGMC:27
EGMJ||Gamlingay|Little Gransden|GB|1|Gamlingay, Cambridgeshire||EGGW:36
EGML||Upminster|Damyns Hall|GB|1|Upminster, Greater London||EGLC:13
EGMT||Orsett|Thurrock|GB|1|Orsett, Essex||EGLC:22
EGNC|CAX|Carlisle|Carlisle Lake District|GB|2|Carlisle, Cumbria||EGNT:72
EGNE||Retford|Retford Gamston|GB|1|Retford, Nottinghamshire||EGNJ:52
EGNF||Worksop|Netherthorpe|GB|1|Worksop, Nottinghamshire||EGNX:55
EGNG||Thirsk|Bagby Thirsk|GB|1|Thirsk, North Yorkshire||EGNV:34
EGNH|BLK|Blackpool||GB|2|||EGGP:50
EGNI||Skegness||GB|1|Skegness, Lincolnshire Ingoldmells||EGNJ:64
EGNJ|HUY|Grimsby|Humberside|GB|3|Grimsby, Lincolnshire
EGNL|BWF|Barrow-in-Furness|Barrow Walney Island|GB|2|||EGNS:89
EGNM|LBA|Leeds|Leeds Bradford|GB|4|Leeds, West Yorkshire
EGNO|WRT|Warton||GB|2|||EGGP:46
EGNR|CEG|Broughton|Hawarden|GB|2|||EGGP:19
EGNS|IOM|Isle of Man||IM|4|Castletown
EGNT|NCL|Newcastle upon Tyne|Newcastle|GB|4|Newcastle upon Tyne, Tyne and Wear
EGNU||York|Full Sutton|GB|1|York, North Yorkshire||EGNM:54
EGNV|MME|Darlington|Teesside|GB|3|Darlington, Durham
EGNW||Lincoln|Wickenby|GB|1|Lincoln, Lincolnshire||EGNJ:29
EGNX|EMA|Nottingham|East Midlands|GB|4|Nottingham, Leicestershire
EGNY||Beverley|Beverley/Linley Hill|GB|1|Beverley, East Riding of Yorkshire||EGNJ:36
EGOE||Market Drayton|Tern Hill|GB|1|Market Drayton, Shropshire||EGGP:56
EGOM||Spadeadam|RAF Spadeadam|GB|2|||EGNT:55
EGOQ||Bodffordd|RAF Mona|GB|1|Bodffordd, Anglesey||EGNS:93
EGOS||Shrewsbury|RAF Shawbury|GB|2|Shrewsbury, Shropshire||EGGP:61
EGOV|VLY|Angelsey|Anglesey|GB|2|||EGNS:93
EGOW||Southport|RAF Woodvale|GB|1|Southport, Sefton||EGGP:31
EGPA|KOI|Kirkwall||GB|3|Kirkwall, Orkney Islands
EGPB|LSI|Lerwick|Sumburgh|GB|3|Lerwick, Shetland
EGPC|WIC|Wick|Wick John O'Groats|GB|3
EGPD|ABZ|Aberdeen||GB|4
EGPE|INV|Inverness||GB|3
EGPF|GLA|Glasgow||GB|4
EGPG||Cumbernauld||GB|1|||EGPF:31
EGPH|EDI|Edinburgh||GB|4|Ingliston
EGPI|ILY|Isle of Islay|Islay|GB|3|Isle of Islay, Argyll and Bute
EGPJ||Glenrothes|Fife|GB|1|||EGPH:28
EGPK|PIK|Prestwick|Glasgow Prestwick|GB|4|Prestwick, South Ayrshire
EGPL|BEB|Balivanich|Benbecula|GB|3
EGPN|DND|Dundee||GB|3
EGPO|SYY|Stornoway||GB|3|Stornoway, Western Isles
EGPR|BRR|Eoligarry|Barra|GB|3
EGPS||Peterhead|Longside|GB|1|||EGPD:40
EGPT|PSL|Perth|Perth/Scone|GB|1|Perth, Perth and Kinross||EGPN:21
EGPU|TRE|Balemartine|Tiree|GB|3|Balemartine, Argyll and Bute
EGPW||Baltasound|Unst|GB|1|Baltasound, Shetland Islands||EGET:65
EGQL|ADX|Leuchars|Leuchars Station|GB|2|Leuchars, Fife||EGPN:13
EGQS|LMO|Lossiemouth|RAF Lossiemouth|GB|2|Lossiemouth, Moray||EGPE:46
EGSA||Thetford|Shipdham|GB|1|Thetford, Norfolk||EGSH:24
EGSC|CBG|Cambridge|Cambridge City|GB|2|Cambridge, Cambridgeshire||EGSS:36
EGSF||Peterborough|Peterborough Business|GB|1|Peterborough, Cambridgeshire||EGGW:66
EGSG||Romford|Stapleford|GB|1|Romford, Greater London||EGLC:18
EGSH|NWI|Norwich||GB|3|Norwich, Norfolk
EGSI||Wisbech|Marshland|GB|1|Wisbech, Cambridgeshire||EGSH:67
EGSJ||Mundham|Seething|GB|1|Mundham, Norfolk||EGSH:20
EGSL||Braintree|Andrewsfield|GB|1|Braintree, Essex||EGSS:15
EGSM||Beccles||GB|1|Beccles, Suffolk||EGSH:35
EGSO||Ipswich|Crowfield|GB|1|Ipswich, Suffolk||EGSH:57
EGSP||Peterborough|Peterborough/Sibson|GB|1|Peterborough, Cambridgeshire||EGNX:70
EGSQ||Clacton-on-Sea|Clacton|GB|1|Clacton-on-Sea, Essex||EGMC:38
EGSR||Colchester|Earls Colne|GB|1|Colchester, Essex||EGSS:31
EGSS|STN|London|London Stansted|GB|4|London, Essex
EGST||Ipswich|Elmsett|GB|1|Ipswich, Suffolk||EGSS:55
EGSU||Duxford||GB|1|Duxford, Cambridgeshire||EGSS:24
EGSV||Old Buckenham||GB|1|Old Buckenham, Norfolk||EGSH:25
EGSW||Newmarket|Newmarket Heath|GB|1|Newmarket, Suffolk||EGSS:40
EGSX||Epping|North Weald|GB|1|Epping, Essex||EGSS:19
EGSY||St Athan|MOD St Athan|GB|2|St Athan, Vale of Glamorgan|EGDX|EGFF:6
EGTB|HYC|Marlow|Wycombe Air Park|GB|1|Marlow, Buckinghamshire||EGLL:29
EGTC||Cranfield||GB|2|Cranfield, Central Bedfordshire||EGGW:28
EGTD||Cranleigh|Dunsfold|GB|1|Cranleigh, Surrey||EGKK:25
EGTE|EXT|Exeter||GB|3|Exeter, Devon
EGTF||Woking|Fairoaks|GB|1|Woking, Surrey||EGLL:15
EGTH||Biggleswade|Old Warden|GB|1|Biggleswade, Central Bedfordshire||EGGW:24
EGTK|OXF|Kidlington|London Oxford|GB|2|Kidlington, Oxfordshire||EGGW:65
EGTN||Chipping Norton|Enstone|GB|1|Chipping Norton, Oxfordshire||EGBB:62
EGTO|RCS|Rochester||GB|1|Rochester, Kent||EGMC:28
EGTP||Perranporth||GB|1|Perranporth, Cornwall||EGHQ:18
EGTR||Borehamwood|Elstree|GB|1|Borehamwood, Hertfordshire||EGLL:23
EGTU||Honiton|Dunkeswell|GB|1|Honiton, Devon||EGTE:19
EGTW||Malmesbury|Oaksey Park|GB|1|Malmesbury, Wiltshire||EGGD:56
EGUB|BEX|Wallingford|RAF Benson|GB|2|Wallingford, Oxfordshire||EGLL:47
EGUD||Abingdon|RAF Abingdon|GB|1|Abingdon, Oxfordshire||EGLL:64
EGUL|LKZ|Brandon|RAF Lakenheath|GB|2|Brandon, Suffolk||EGSH:57
EGUN|MHZ|Bury Saint Edmunds|RAF Mildenhall|GB|2|Bury Saint Edmunds, Suffolk||EGSS:56
EGUW||Ipswich|Wattisham|GB|2|Ipswich, Suffolk||EGSS:56
EGUY|QUY|St Ives|RAF Wyton|GB|1|St Ives, Cambridgeshire||EGGW:57
EGVA|FFD|Fairford|RAF Fairford|GB|2|Fairford, Gloucestershire||EGGD:72
EGVL||Cheltenham|RAF Little Rissington|GB|1|Cheltenham, Gloucestershire||EGBB:65
EGVN|BZZ|Carterton|RAF Brize Norton|GB|2|Carterton, Oxfordshire||EGBB:79
EGVO|ODH|Hook|RAF Odiham|GB|2|Hook, Hampshire||EGLL:43
EGVP||Middle Wallop||GB|1|Middle Wallop, Hampshire||EGHI:26
EGWC||Cosford|RAF Cosford|GB|2|Cosford, Shropshire||EGBB:43
EGWE||Henlow|RAF Henlow|GB|1|Henlow, Central Bedfordshire||EGGW:17
EGWN||Halton|RAF Halton|GB|1|Halton, Buckinghamshire||EGGW:27
EGWU|NHT|Northolt|RAF Northolt|GB|2|Northolt, Greater London||EGLL:10
EGXC|QCY|Lincoln|RAF Coningsby|GB|2|Lincoln, Lincolnshire||EGNJ:55
EGXE||Northallerton|RAF Leeming|GB|2|Northallerton, North Yorkshire||EGNV:25
EGXH|BEQ|Bury Saint Edmunds|RAF Honington|GB|2|Bury Saint Edmunds, Suffolk||EGSH:51
EGXT||Peterborough|RAF Wittering|GB|2|Peterborough, Cambridgeshire||EGNX:62
EGXW|WTN|Lincoln|RAF Waddington|GB|2|Lincoln, Lincolnshire||EGNJ:47
EGXY||Newark on Trent|RAF Syerston|GB|1|Newark on Trent, Nottinghamshire||EGNX:35
EGXZ||Thirsk|RAF Topcliffe|GB|2|Thirsk, North Yorkshire||EGNV:34
EGYD||Sleaford|RAF Cranwell|GB|2|Sleaford, Lincolnshire||EGNX:60
EGYE||Grantham|RAF Barkston Heath|GB|2|Grantham, Lincolnshire||EGNX:54
EGYI||Alford|Strubby Glider Field|GB|1|Alford, Lincolnshire||EGNJ:45
EGYJ||York|Rufforth West|GB|1|York, North Yorkshire||EGNM:32
EGYM|KNF|King's Lynn|RAF Marham|GB|2|King's Lynn, Norfolk||EGSH:49
EGYO||Grimsby|North Coates|GB|1|Grimsby, Lincolnshire||EGNJ:29
EGYP|MPN|Mount Pleasant|Mount Pleasant Airport / RAF Mount Pleasant|FK|3
EGZL|||Feshiebridge Glider Field|GB|1|||EGPE:50
EHAL||Ballum|Ameland Airport Ballum|NL|1|||EDWR:70
EHAM|AMS|Amsterdam|Amsterdam Airport Schiphol|NL|4
EHBD||Weert|Kempen Airport Budel|NL|2|||EHEH:27
EHBK|MST|Maastricht|Maastricht Aachen|NL|4
EHDL||Arnhem|Deelen Air Base|NL|2|||EDLV:54
EHDR||Drachten||NL|1|||EHGG:30
EHEH|EIN|Eindhoven||NL|4
EHGG|GRQ|Groningen|Groningen Airport Eelde|NL|4
EHGR|GLZ|Rijen|Gilze Rijen Air Base|NL|2|||EHEH:33
EHHO||Hoogeveen||NL|1|||EHGG:43
EHHV||Hilversum||NL|1|||EHAM:29
EHKD|DHR|Den Helder|De Kooy Airfield / Den Helder Naval Air Station|NL|2|||EHAM:68
EHLE|LEY|Lelystad||NL|2|||EHAM:53
EHLV||Noordwijk|Langeveld Glidersite|NL|1|||EHAM:17
EHLW|LWR|Leeuwarden|Leeuwarden Air Base|NL|2|||EHGG:56
EHMM||Middenmeer||NL|1|||EHAM:59
EHMZ||Middelburg|Midden-Zeeland|NL|1|||EBAW:62
EHOW||Oostwold||NL|1|||EDWE:24
EHRD|RTM|Rotterdam|Rotterdam The Hague|NL|4
EHSE||Hoeven|Breda|NL|1|||EBAW:41
EHST||Stadskanaal||NL|1|||EHGG:33
EHTE||Deventer|Teuge|NL|1|||EDLV:72
EHTL||Arnhem|Terlet Glidersite|NL|1|||EDLV:53
EHTW|ENS|Enschede|Twente|NL|2|||EDDG:57
EHTX||De Cocksdorp|Texel|NL|1|||EHAM:90
EHVK|UDE|Uden|Volkel Air Base|NL|2|||EDLV:31
EHWO|WOE|Hoogerheide|Woensdrecht Air Base|NL|2|||EBAW:30
EIAB||Abbeyshrule||IE|1|||EIKN:85
EIBB||Fingal|Ballyboughal|IE|1||EIBA|EIDW:9
EIBF||Benfield||IE|1|||EIDW:73
EIBN|BYT|Bantry||IE|1|||EIKY:56
EIBR||Birr||IE|1|||EINN:80
EIBT|BLY|Belmullet||IE|1|||EIKN:86
EICA|NNR|Inverin|Connemara Regional|IE|2
EICD||Craddanstown|Craddenstown|IE|1|||EIDW:54
EICK|ORK|Cork||IE|4
EICL||Clonbullogue||IE|1|||EIDW:61
EICN||Limerick|Coonagh|IE|1|||EINN:17
EIDG||Staffordstown|Dolly's Grove|IE|1|||EIDW:19
EIDL|CFN|Donegal||IE|3
EIDW|DUB|Dublin||IE|4
EIER||Nenagh|Erinagh|IE|1|||EINN:45
EIGN||Swordlestown|Gowran Grange|IE|1|||EIDW:37
EIHH||Navan||IE|1|||EIDW:39
EIHN||Hacketstown||IE|1|||EIDW:67
EIIF||Taghmon|ILAS Wexford|IE|1|||EIDW:129
EIIM|IOR|Inis Mór|Inishmore|IE|2
EIIR|INQ|Inis Oírr|Inisheer|IE|2
EIKH||Kilrush|Kildare|IE|1|||EIDW:57
EIKK|KKY|Kilkenny||IE|1||EIKL|EINN:110
EIKN|NOC|Knock|Ireland West Airport Knock|IE|4|Charlestown
EIKY|KIR|Farranfore|Kerry|IE|3
EILT||Letterkenny||IE|1|||EGAE:34
EIME||Baldonnel|Casement Air Base|IE|2|||EIDW:19
EIMH||Athboy||IE|1|||EIDW:47
EIMN|IIA|Inis Meáin|Inishmaan|IE|2
EIMP||Milltownpass|Mullingar-Milltownpass|IE|1|||EIDW:65
EINC||Newcastle||IE|1|||EIDW:42
EINN|SNN|Shannon||IE|4
EIRE||Abbeyfeale||IE|1|||EIKY:27
EIRT||Rathcoole||IE|1|||EIKY:38
EISB||Crowenstown|Snug Beag|IE|1|||EIDW:54
EISG|SXL|Sligo||IE|2|||EIKN:43
EISP||Spanish Point||IE|1|||EIIR:25
EISS|||Ballyhavil Farm|IE|1|||EIDW:19
EITB||Tibohine||IE|1|||EIKN:22
EITM||Trim||IE|1|||EIDW:35
EIWF|WAT|Waterford||IE|2|||EICK:104
EIWT||Leixlip|Weston|IE|2|||EIDW:17
EKAB||Herning|Arnborg Gliding Center|DK|1|||EKBI:31
EKAE||Marstal|Ærø|DK|2
EKAH|AAR|Aarhus||DK|4
EKAS||Tilst|True Gliderfield|DK|1|||EKAH:36
EKAT||Anholt||DK|2
EKBH||Bolhede|Bolhede Glider Field|DK|1|||EKEB:17
EKBI|BLL|Billund||DK|4
EKBR||Brædstrup||DK|1|||EKBI:38
EKCH|CPH|Copenhagen|Copenhagen Kastrup|DK|4
EKCR||Bording|Christianshede|DK|1|||EKBI:43
EKEB|EBJ|Esbjerg||DK|3
EKEL||Endelave||DK|1|||EKOD:32
EKFR|||Freerslev|DK|1|||EKCH:40
EKFS||Broby|Vøjstrup Glider Field|DK|1|||EKOD:27
EKFU||Fur|Fur Airstrip|DK|1|||EKYT:60
EKGE||Gesten|Gesten Glider Field|DK|1|||EKBI:21
EKGH||Grønholt|Grønholt Hillerød|DK|1|||EKCH:40
EKGL||Gørløse|Gørløse Glider Field|DK|1|||EKCH:40
EKGO||Gørlev||DK|1|||EKOD:55
EKGR||Grenaa||DK|1|||EKAH:25
EKHE||Annisse|Annisse flyveplads|DK|1|||EKCH:49
EKHG||Herning||DK|1|||EKBI:50
EKHK||Gislinge|Holbæk|DK|1|Ny Hagested||EKCH:67
EKHM||Tørring|Hammer Glider Field|DK|1|||EKBI:26
EKHO||Struer|Lindtorp|DK|1|||EKBI:85
EKHV||Haderslev||DK|1|||EKSB:41
EKKA|KRP|Karup|Midtjyllands Airport / Air Base Karup|DK|3
EKKL||Kalundborg||DK|1|||EKOD:63
EKKO||Vemmelev|Korsør|DK|1|||EKOD:60
EKKS||Rønnede|Kongsted Gliderfield|DK|1|||EKCH:55
EKLS|BYR|Læsø||DK|2
EKLV||Lemvig||DK|1|||EKBI:100
EKMB|MRW|Rødby|Lolland Falster Maribo|DK|2|||ETNL:103
EKMN||Stege|Kostervig Mon|DK|1|||EKCH:78
EKNB||Nordborg|Nordborg Pøl|DK|1|||EKSB:13
EKNM||Erslev|Morsø Airfield, Tødsø|DK|1|||EKYT:71
EKOD|ODE|Odense|Odense Hans Christian Andersen|DK|4
EKPB||Padborg|Kruså-Padborg|DK|1|||EKSB:34
EKRA||Rårup||DK|1|||EKOD:41
EKRD||Randers||DK|1|||EKAH:42
EKRK|RKE|Roskilde|Copenhagen Roskilde|DK|3|||EKCH:33
EKRN|RNN|Rønne|Bornholm|DK|3
EKRO||Langeskov|Rolfsted|DK|1|||EKOD:23
EKRS||Ringsted||DK|1|||EKCH:58
EKSA||Sæby||DK|1|Ottestrup||EKLS:36
EKSB|SGD|Sønderborg||DK|3
EKSD||Spjald||DK|1|||EKBI:57
EKSL||Fjenneslev|Slaglille|DK|1|||EKCH:66
EKSN|CNL|Sindal||DK|2|||EKYT:51
EKSP|SKS|Vojens|Skrydstrup Air Base|DK|2|||EKSB:44
EKSS||Samsø||DK|1|||EKAH:46
EKST||Svendborg|Sydfyn|DK|2|Tasinge
EKSV|SQW|Skive||DK|2|||EKYT:73
EKTD||Tønder||DK|1|||EDXW:32
EKTO||Tølløse|Tølløse Flying Club Glider Field|DK|1|||EKCH:56
EKTS|TED|Thisted||DK|2|||EKYT:69
EKVA||Varde||DK|1|||EKEB:12
EKVB||Viborg||DK|1|||EKAH:75
EKVD||Kolding / Vamdrup|Kolding Vamdrup|DK|2|||EKBI:36
EKVG|FAE|Vágar||FO|4
EKVH||Aars|Vesthimmerland|DK|1|||EKYT:36
EKVJ|STA|Skjern|Stauning Vestjylland|DK|2|||EKEB:53
EKVO||Lolland|Vejrø|DK|1|||EKOD:82
EKYT|AAL|Aalborg||DK|4
ELLX|LUX|Luxembourg|Luxembourg-Findel|LU|4
ELNT||Winseler|Wiltz-Noertrange|LU|1|||ELLX:45
ELUS||Useldange|Useldange Glider Field|LU|1|||ELLX:24
ENAE||Åmot|Æra|NO|1|||ESKS:63
ENAL|AES|Ålesund||NO|4
ENAN|ANX|Andenes|Andøya Airport, Andenes|NO|3
ENAS||Ny-Ålesund|Ny-Ålesund Airport, Hamnerabben|NO|1|||ENSB:109
ENAT|ALF|Alta||NO|3
ENBB|||Bøverbru|NO|1|||ENGM:54
ENBL|FDE|Førde|Førde Airport, Bringeland|NO|2
ENBM||Tjukkebygdi|Bømoen|NO|1|||ENSG:67
ENBN|BNN|Brønnøy|Brønnøysund Airport, Brønnøy|NO|3
ENBO|BOO|Bodø||NO|4
ENBR|BGO|Bergen|Bergen Airport, Flesland|NO|4
ENBS|BJF|Båtsfjord||NO|3
ENBV|BVG|Berlevåg||NO|3
ENCN|KRS|Kristiansand||NO|4|Kristiansand(Kjevik)
ENDI||Dagali|Geilo Airport Dagali|NO|1|||ENSG:111
ENDO||Dokka|Dokka Thomlevold|NO|1|||ENGM:96
ENDU|BDU|Målselv|Bardufoss|NO|3
ENEG||Hønefoss|Hønefoss Airfield, Eggemoen|NO|1|||ENGM:43
ENEN||Engeløy||NO|1|||ENSH:33
ENEV|EVE|Harstad / Narvik|Harstad/Narvik|NO|4|Evenes
ENFA||Frøya|Flatval|NO|1|||ENOL:42
ENFG||Fagernes|Fagernes Airport, Leirin|NO|1|||ENSG:117
ENFL|FRO|Florø||NO|3
ENFY||Fyresdal||NO|1|||ENCN:111
ENGK|||Arendal Airfield, Gullknapp|NO|1|||ENCN:50
ENGM|OSL|Oslo|Oslo-Gardermoen|NO|4|Oslo (Gardermoen)
ENGN||Folldal|Folldal Grimsmoe|NO|1|||ENRO:82
ENGS||Snåsa|Snåsa Airfield Grønøra|NO|1|||ENNM:43
ENHA|HMR|Hamar|Hamar Lufthavn, Stavsberg|NO|1|||ENGM:69
ENHD|HAU|Karmøy|Haugesund Airport, Karmøy|NO|3
ENHF|HFT|Hammerfest||NO|3
ENHK|HAA|Hasvik||NO|2
ENHL||Nærbø|Jæren Mikroflyklubb Field|NO|1|||ENZV:22
ENHS||Øvre Eiker|Hokksund|NO|1|||ENTO:67
ENHT||Hattfjelldal||NO|1|||ENMS:41
ENHV|HVG|Honningsvåg|Honningsvåg Airport, Valan|NO|3
ENJA|||Jan Mayensfield|NO|1
ENJB||Tønsberg|Jarlsberg|NO|1|||ENTO:14
ENKA||Kautokeino||NO|1|||EFET:77
ENKB|KSU|Kvernberget|Kristiansund Airport, Kvernberget|NO|3
ENKJ||Kjeller|Lillestrøm Airfield, Kjeller|NO|1|||ENGM:25
ENKL|GLL|Klanten flyplass|Gol|NO|1|||ENSG:111
ENKR|KKN|Kirkenes|Kirkenes Airport, Høybuktmoen|NO|3
ENLB||Lesja|Bjorli|NO|1|||ENML:76
ENLI||Farsund|Lista|NO|1|||ENCN:86
ENLK|LKN|Leknes||NO|3
ENLU||Lunde Nome||NO|1|||ENTO:65
ENLV||Salangen|Salangen Airfield Elvenes|NO|1|||ENDU:30
ENMH|MEH|Mehamn||NO|3
ENML|MOL|Årø|Molde Airport, Årø|NO|3
ENMO||Meråker|Meråker Airfield Øian|NO|1|||ENVA:45
ENMS|MJF|Mosjøen|Mosjøen Airport, Kjærstad|NO|3
ENNA|LKL|Lakselv|Lakselv Airport, Banak|NO|3
ENNM|OSY|Namsos||NO|2
ENNO|NTB|Notodden||NO|2|||ENTO:73
ENOE||Troll Station|Troll|AQ|1
ENOL|OLA|Ørland||NO|3
ENOP|||Fagerhaug|NO|1|||ENRO:77
ENOV|HOV|Ørsta|Ørsta-Volda Airport, Hovden|NO|3
ENRA|MQN|Mo i Rana|Mo i Rana Airport, Røssvoll|NO|3
ENRE||Åmot|Rena Airfield Landsørkje|NO|1|||ESKS:78
ENRG||Saltdal|Rognan|NO|1|||ENBO:49
ENRI||Frya|Ringebu Airfield Frya|NO|1|||ENRO:133
ENRK||Rakkestad|Rakkestad Astorp|NO|1|||ENTO:66
ENRM|RVK|Rørvik|Rørvik Airport, Ryum|NO|3
ENRO|RRS|Røros||NO|3
ENRS|RET|Røst||NO|2
ENRV||Reinsvoll||NO|1|||ENGM:61
ENRY||Oslo|Moss Airport, Rygge|NO|2|||ENTO:37
ENSB|LYR|Longyearbyen|Svalbard Airport, Longyear|NO|3
ENSD|SDN|Sandane|Sandane Airport, Anda|NO|2
ENSG|SOG|Sogndal|Sogndal Airport, Haukåsen|NO|2
ENSH|SVJ|Svolvær|Svolvær Airport, Helle|NO|3
ENSI||Ski||NO|1|||ENGM:55
ENSK|SKN|Hadsel|Stokmarknes Airport, Skagen|NO|3
ENSM||Elverum|Elverum Starmoen|NO|1||ENHN|ESKS:70
ENSN||Geiteryggen|Skien|NO|2|||ENTO:39
ENSO|SRP|Leirvik|Stord Airport, Sørstokken|NO|3
ENSR|SOJ|Sørkjosen||NO|3
ENSS|VAW|Vardø|Vardø Airport, Svartnes|NO|3
ENST|SSJ|Alstahaug|Sandnessjøen Airport, Stokka|NO|3
ENSU||Sunndalsøra|Vinnu|NO|1|||ENKB:67
ENTC|TOS|Tromsø||NO|4
ENTO|TRF|Sandefjord|Sandefjord Airport, Torp|NO|4|Sandefjord(Torp)
ENTS|||Trysil Sæteråsen|NO|1|||ESKS:31
ENTY||Tynset||NO|1|||ENRO:50
ENUL||Ulven|Os Vaksinen Ulven|NO|1|||ENBR:16
ENVA|TRD|Trondheim|Trondheim Airport, Værnes|NO|4
ENVD|VDS|Vadsø||NO|3
ENVE||Valle|Valle Airfield Åraksøyne|NO|1|||ENCN:97
ENZV|SVG|Stavanger|Stavanger Airport, Sola|NO|4
EPAR||Wola Korzeniecka|Arłamów|PL|1|||EPRZ:61
EPBA||Bielsko-Biała|Bielsko-Biała Aleksandrowice|PL|1|||EPKK:64
EPBB||Babięta||PL|1|||EPSY:29
EPBC||Warsaw|Warsaw Babice|PL|1|||EPWA:12
EPBD||Bydgoszcz|Bydgoszcz Aeroklub|PL|1|||EPBY:1
EPBE||Kałduny|Bełchatów Airstrip|PL|1|||EPLL:36
EPBI||Brzeska Wola||PL|1|||EPRA:28
EPBK||Białystok|Białystok-Krywlany|PL|1|||UMBB:121
EPBO||Borsk||PL|1|||EPGD:58
EPBW||Stara Wieś|Stara Wieś Field|PL|1|||EPRZ:43
EPBY|BZG|Bydgoszcz|Ignacy Jan Paderewski Bydgoszcz|PL|3
EPCD||Królewskie|Depułtycze Królewskie|PL|1|||EPLB:53
EPCE||Siemirowice|Cewice Naval Air Base|PL|2|||EPGD:46
EPCH||Czyże||PL|1|||UMBB:82
EPDA||Darłowo|Darłówo Naval Air Base|PL|1|||EKRN:126
EPDE||Dęblin|Deblin Military Air Base|PL|2|||EPRA:50
EPDK|||Debowa Klada|PL|1|||EPLB:46
EPDS||Witków||PL|1|||EPWR:64
EPEK||Makosieje||PL|1|||EPSY:112
EPEL||Elbląg||PL|1|||EPGD:68
EPFG|||Kiełpin|PL|1|||EPZG:67
EPGD|GDN|Gdańsk|Gdańsk Lech Wałęsa|PL|4
EPGE||Giże||PL|1|||EPSY:111
EPGI||Grudziądz|Grudziądz Lisie Kąty|PL|1|||EPBY:75
EPGL||Gliwice|Gliwice-Trynek|PL|1|||EPKT:37
EPGM||Giżycko|Giżycko-Mazury Residence|PL|1|||EPSY:82
EPGR||Gryźliny|Łańsk / Gryźliny|PL|1|||EPSY:41
EPGS||Grójec|Grójec-Słomczyn|PL|1|||EPWA:32
EPGU||Ulim||PL|1||EPGW|EPZG:73
EPGY||Grądy||PL|1|||EPMO:87
EPHN||Narew||PL|1|||UMBB:92
EPIN||Inowrocław||PL|1|||EPBY:38
EPIR|||Inowroclaw Military Air Base|PL|2|||EPBY:38
EPJA||Jastarnia||PL|1|||EPGD:39
EPJG||Jelenia Góra||PL|1|||EPWR:80
EPJL||Laszki|Laszki Field|PL|1|||EPRZ:65
EPJS||Jeżów Sudecki||PL|1|||EPWR:80
EPKA||Kielce|Kielce-Masłów|PL|1|||EPRA:64
EPKB||Kazimierz Biskupi||PL|1|||EPBY:87
EPKC||Kraków|Kraków Rakowice-Czyżyny Airport|PL|1|Disused||EPKK:15
EPKD|||Końskie-Komaszyce|PL|1|||EPRA:54
EPKE||Kȩtrzyn|Kȩtrzyn-Wilamowo|PL|1|||EPSY:71
EPKG||Bagicz|Kołobrzeg-Bagicz|PL|1|||EPSC:85
EPKI|||Kikity|PL|1|||EPSY:56
EPKK|KRK|Kraków|Kraków John Paul II|PL|4|Balice
EPKL||Krasocin|Krasocin Field|PL|1|||EPKT:88
EPKM||Katowice|Katowice-Muchowiec|PL|1|||EPKT:27
EPKN||Kamień Śląski|Opole-Kamień Śląski|PL|1|||EPKT:71
EPKO||Korne||PL|1|||EPGD:49
EPKP||Kraków|Pobiednik Wielki|PL|1|||EPKK:30
EPKR||Krosno||PL|1|||EPRZ:52
EPKS||Poznań|Krzesiny Military Air Base|PL|2|||EPPO:14
EPKT|KTW|Katowice|Katowice Wojciech Korfanty|PL|4
EPKU||Kukały||PL|1|||EPWA:32
EPKW||Kaniów|Bielsko-Biała Kaniów|PL|1|||EPKK:57
EPLB|LUZ|Lublin||PL|4
EPLD||Ldzań||PL|1|||EPLL:18
EPLI||Linowiec||PL|1|||EPGD:41
EPLK||Łask|Łask Air Base|PL|2|||EPLL:24
EPLL|LCJ|Łódź|Łódź Władysław Reymont|PL|4
EPLP||Lipowa||PL|1|||EPKK:65
EPLR|||Lublin Radwiec|PL|1|||EPLB:22
EPLS||Leszno|Leszno-Strzyzewice|PL|1|||EPZG:60
EPLU|||Lubin|PL|1|||EPWR:59
EPLY||Leźnica Wielka|Leźnica Wielka Air Base|PL|2|||EPLL:36
EPMB||Królewo|Malbork Królewo Air Base|PL|2|||EPGD:58
EPMG||Mrągowo|Lotnisko Mrągowo|PL|1|||EPSY:46
EPMI||Mirosławiec|Miroslawiec Military Air Base|PL|2|||EPSC:81
EPML||Mielec||PL|1|||EPRZ:46
EPMM|||Minsk Mazowiecki Military Air Base|PL|2|||EPWA:47
EPMO|WMI|Warsaw|Warsaw Modlin|PL|4|Nowy Dwór Mazowiecki
EPMR||Mirosławice|Mirosławice Private|PL|1|||EPWR:18
EPMX||Milewo||PL|1|||EPMO:28
EPMY||Nowogródek Pomorski|Myślibórz-Giżyn|PL|1|||EPSC:72
EPNA||Nadarzyce|Nadarzyce Air Base|PL|1|||EPSC:106
EPNC||Chrcynno|Nasielsk-Chrcynno|PL|1|||EPMO:20
EPNL||Łososina Dolna|Nowy Sącz-Łososina Dolna|PL|1|||EPKK:71
EPNM||Nowe Miasto nad Pilicą||PL|1|||EPRA:54
EPNT||Nowy Targ||PL|1|||LZTT:46
EPOD||Olsztyn|Olsztyn-Dajtki|PL|1|||EPSY:47
EPOK||Kosakowo|Oksywie Air Base / Gdynia-Kosakowo|PL|1|||EPGD:23
EPOM||Ostrów Wielkopolski|Ostrów Wielkopolski Michałków|PL|1|||EPWR:94
EPOP||Polska Nowa Wieś|Opole-Polska Nowa Wieś|PL|1|||EPWR:82
EPPB||Pobiedziska|Poznań-Bednary|PL|1|||EPPO:30
EPPC||Pińczów||PL|1|||EPKK:71
EPPG||Kąkolewo|Kakolewo|PL|1|former military||EPZG:32
EPPI||Piła||PL|1|||EPPO:84
EPPK||Poznań|Poznań-Kobylnica|PL|1|||EPPO:15
EPPL||Płock||PL|1|||EPMO:64
EPPO|POZ|Poznań|Poznań-Ławica|PL|4
EPPR||Pruszcz Gdański|Pruszcz Gdański Air Base|PL|1|||EPGD:20
EPPS||Jeziorki|Śmiłowo Henryk Stokłosa|PL|1|||EPBY:73
EPPT||Piotrków Trybunalski|Piotrków Trybunalski-Bujny|PL|1|||EPLL:43
EPPW||Powidz|Powidz Military Air Base|PL|2|||EPPO:70
EPPZ||Przasnysz|Przasnysz-Sierakowo|PL|1|||EPSY:53
EPRA|RDO|Radom|Warsaw Radom|PL|3
EPRD||Radzieje|Mazury Air Camp|PL|1|||EPSY:85
EPRG||Rybnik|Rybnik-Gotartowice Glider Field|PL|1|||EPKT:55
EPRJ||Nowa Wieś|Rzeszów Sports|PL|1|||EPRZ:2
EPRP||Piastów|Radom-Piastrów|PL|1|||EPRA:12
EPRS||Rybno|Sochaczew-Rybno|PL|1|||EPMO:43
EPRU||Rudniki|Częstochowa-Rudniki|PL|1|||EPKT:46
EPRZ|RZE|Jasionka|Rzeszów-Jasionka|PL|4
EPSC|SZZ|Szczecin|Solidarity Szczecin–Goleniów|PL|4|Szczecin(Glewice)
EPSD||Szczecin|Szczecin-Dąbie|PL|1|||EPSC:28
EPSI||Sieradz||PL|1|||EPLL:46
EPSJ|||Sobienie Field|PL|1|||EPWA:36
EPSK||Krępa Słupska|Słupsk-Krȩpa|PL|1|||EPGD:89
EPSL||Lublin|Świdnik|PL|1||EPSW|EPLB:2
EPSN|||Swidwin Military Air Base|PL|2|||EPSC:65
EPSO|||Sochaczew Air Base|PL|1|||EPMO:37
EPSP||Lutomek|Sieraków-Lutomek|PL|1|||EPPO:50
EPSS|||Świdnica - Krzczonów Airstrip|PL|1|||EPWR:38
EPST||Zaleszany|Stalowa Wola-Turbia|PL|1|||EPRZ:57
EPSU||Suwałki||PL|1|||EYKA:125
EPSY|SZY|Szymany|Olsztyn-Mazury|PL|3
EPTM||Nowy Glinnik|Tomaszów Mazowiecki Military Air Base|PL|2|||EPLL:51
EPTO||Toruń||PL|1|||EPBY:39
EPVA|||Roszczep Airstrip|PL|1|||EPWA:39
EPVK||Lubiechowo|Karlino|PL|1|||EPSC:80
EPWA|WAW|Warsaw|Warsaw Chopin|PL|4
EPWC||Świebodzice||PL|1|||EPWR:47
EPWK||Włocławek|Włocławek-Kruszyn|PL|1|||EPBY:90
EPWR|WRO|Wrocław|Copernicus Wrocław|PL|4
EPWS||Lubięcin|Wrocław-Szymanów|PL|1|||EPWR:14
EPWT||Watorowo||PL|1|||EPBY:37
EPZA||Zamość|Zamość-Mokre|PL|1|||EPLB:69
EPZB||Zborowo||PL|1|||EPPO:14
EPZE||Żerniki|Żerniki Gądki|PL|1|||EPPO:18
EPZG|IEG|Nowe Kramsko|Zielona Góra-Babimost|PL|3
EPZI||Zieleń||PL|1|||EPBY:66
EPZK||Konopnica||PL|1|||EPLL:57
EPZL||Zdziar Wielki|Zdziar-Lopatki|PL|1|||EPMO:44
EPZP||Zielona Góra|Zielona Góra-Przylep|PL|1|||EPZG:29
EPZR||Międzybrodzie Żywieckie|Żar|PL|1|||EPKK:53
EPZW||Zawiszyn||PL|1|||EYKA:125
ESCF||Linköping|Malmen Air Base|SE|2|||ESSL:9
ESCM||Uppsala|Ärna Air Base|SE|1|||ESSA:34
ESDF|RNB|Ronneby||SE|3
ESFA||Hässleholm|Hässleholm Bokeberg|SE|1|||ESTA:66
ESFR||Råda|Råda Air Base|SE|2|||ESGT:46
ESFS||Sandvik||SE|1|||ESMQ:55
ESGA||Uddevalla|Backamo|SE|1|||ESGT:27
ESGC||Ålleberg||SE|1|||ESGJ:50
ESGD||Tidaholm|Bämmelshed|SE|1|||ESGJ:48
ESGE||Borås||SE|1|||ESGG:34
ESGF||Falkenberg|Morup|SE|1|||ESMT:41
ESGG|GOT|Göteborg|Göteborg Landvetter|SE|4
ESGH||Herrljunga||SE|1|||ESGT:55
ESGI||Alingsås|Rödene|SE|1|||ESGG:36
ESGJ|JKG|Jönköping||SE|3
ESGK||Falköping||SE|1|||ESGJ:54
ESGL|LDK|Lidköping|Lidköping-Hovby|SE|1|||ESGT:51
ESGM||Öresten||SE|1|||ESGG:33
ESGN||Götene|Brännebrona|SE|1|||ESGT:79
ESGO||Vårgårda||SE|1|||ESGT:40
ESGP|GSE|Göteborg|Säve|SE|2|||ESGG:27
ESGR|KVB|Skövde||SE|2|||ESGJ:78
ESGS||Strömstad|Näsinge|SE|1|||ENTO:65
ESGT|THN|Trollhättan|Trollhättan-Vänersborg|SE|3
ESGU||Uddevalla|Rörkärr|SE|1|||ESGT:34
ESGV||Varberg|Varberg Getterön|SE|1|||ESGG:60
ESGY||Säffle||SE|1|||ESOK:46
ESIA||Karlsborg|Karlsborg Air Base|SE|1|||ESSL:70
ESIB||Såtenäs|Såtenäs Air Base|SE|2|||ESGT:25
ESKA||Gimo|Lunda|SE|1|||ESSA:55
ESKC|||Uppsala-Sundbro|SE|1|||ESSA:38
ESKD||Dala Järna||SE|1|||ESKM:45
ESKG||Gryttjom||SE|1|||ESSA:76
ESKH||Ekshärad||SE|1|||ESOH:15
ESKK|KSK|Karlskoga||SE|2|||ESOE:34
ESKM|MXX|Mora||SE|3
ESKN|NYO|Nyköping|Stockholm Skavsta|SE|4
ESKO||Munkfors||SE|1|||ESOH:25
ESKS|SCR|Malung-Sälen|Scandinavian Mountains|SE|4
ESKT||Tierp||SE|1|||ESSA:83
ESKU|||Sunne|SE|1|||ESOH:31
ESKV||Arvika||SE|1|||ESOK:47
ESMB||Borglanda||SE|1|||ESMQ:30
ESMC||Eksjö|Ränneslätt|SE|1|||ESGJ:53
ESME||Eslöv||SE|1|||ESMS:35
ESMF||Fagerhult||SE|1|||ESTA:40
ESMG||Ljungby|Feringe|SE|1|||ESMX:49
ESMH||Höganäs||SE|1|||ESTA:21
ESMI||Sjöbo|Sjöbo Sövde|SE|1|||ESMS:20
ESMJ||Kågeröd|Kågeröd Simmelsberga|SE|1|||ESTA:36
ESMK|KID|Kristianstad||SE|2|||ESMS:62
ESML||Härslöv|Landskrona Enoch Thulins|SE|1|||EKCH:39
ESMO|OSK|Oskarshamn||SE|1|||ESMQ:75
ESMP||Anderstorp||SE|1|||ESGJ:62
ESMQ|KLR|Kalmar||SE|3
ESMS|MMX|Malmö|Malmö Sturup|SE|4
ESMT|HAD|Halmstad||SE|3
ESMU||Älmhult|Möckeln|SE|1|||ESMX:52
ESMV|||Hagshult Air Base|SE|1|||ESGJ:52
ESMX|VXO|Växjö|Växjö Kronoberg|SE|3
ESMY||Smålandsstenar|Smålandsstenar Smålanda|SE|1|||ESMT:65
ESMZ||Ölanda||SE|1|||ESMQ:85
ESNA||Hallviken||SE|1|||ESNZ:77
ESNB||Långsele|Sollefteå/Långsele|SE|1|||ESNK:42
ESNC||Hede|Hedlanda|SE|1|||ESND:53
ESND|EVG|Sveg||SE|2
ESNE||Överkalix||SE|1|||ESUP:86
ESNF||Örnsköldsvik|Åviken Fly Camp|SE|1|||ESNO:25
ESNG|GEV|Gällivare||SE|3
ESNH|HUV|Hudiksvall||SE|1|||ESNN:87
ESNJ|||Jokkmokk|SE|1|||ESNG:77
ESNK|KRF|Nyland|Kramfors-Sollefteå Höga Kusten|SE|3
ESNL|LYC|Lycksele||SE|3
ESNM|||Optand|SE|1|||ESNZ:17
ESNN|SDL|Sundsvall/ Härnösand|Sundsvall-Härnösand|SE|3
ESNO|OER|Örnsköldsvik||SE|3
ESNP||Piteå||SE|1|||ESPA:43
ESNQ|KRN|Kiruna||SE|4
ESNR|||Orsa|SE|1|||ESKM:28
ESNS|SFT|Skellefteå||SE|3
ESNU|UME|Umeå||SE|4
ESNV|VHM|Vilhelmina|Vilhelmina South Lapland|SE|3
ESNX|AJR|Arvidsjaur||SE|3
ESNY|SOO|Söderhamn||SE|2|||ESSD:127
ESNZ|OSD|Östersund|Åre Östersund|SE|3||ESPC
ESOE|ORB|Örebro||SE|3
ESOH|HFS|Råda|Hagfors|SE|2
ESOK|KSD|Karlstad||SE|3
ESOL||Storvik|Lemstanas|SE|1|||ESSD:61
ESOW|VST|Stockholm / Västerås|Stockholm Västerås|SE|4
ESPA|LLA|Luleå||SE|4
ESPE||Vidsel|Vidsel Air Base|SE|1|||ESNX:51
ESQO|||Arboga|SE|1|||ESOW:46
ESSA|ARN|Stockholm|Stockholm-Arlanda|SE|4
ESSB|BMA|Stockholm|Stockholm-Bromma|SE|3
ESSC||Eskilstuna|Ekeby|SE|1|||ESOW:25
ESSD|BLE|Borlange|Dala|SE|3
ESSE||Stockholm|Skå-Edeby|SE|1|||ESSB:11
ESSF|HLF|Hultsfred||SE|1|||ESMX:94
ESSG||Ludvika||SE|1|||ESSD:44
ESSH||Laxå||SE|1|||ESOE:35
ESSI||Visingsö||SE|1|||ESGJ:43
ESSL|LPI|Linköping|Linköping City|SE|4
ESSM||Lindfors|Brattforshede|SE|1|||ESOK:37
ESSN||Norrtälje||SE|1|||ESSA:44
ESSP|NRK|Norrköping||SE|3
ESST|TYF|Torsby||SE|3
ESSU|EKT|Eskilstuna||SE|2|||ESOW:27
ESSV|VBY|Visby||SE|4
ESSW|VVK|Västervik||SE|1|||ESSL:85
ESSX||Västerås|Johannisberg|SE|1|||ESOW:7
ESSZ||Vängsö||SE|1|||ESKN:39
ESTA|AGH|Ängelholm|Ängelholm-Helsingborg|SE|3||ESDB
ESTF||Fjällbacka|Fjällbacka Anra|SE|1|||ESGT:69
ESTL||Ljungbyhed||SE|2|||ESTA:33
ESTT||Trelleborg|Vellinge|SE|1|||ESMS:28
ESUB||Arbrå||SE|1|||ESKM:117
ESUD|SQO|Storuman||SE|2|||ESNV:59
ESUE|IDB|Idre||SE|1|||ESKS:79
ESUG||Gargnäs||SE|1|||ESNX:68
ESUH||Härnösand|Myran|SE|1|||ESNN:30
ESUI||Mellansel||SE|1|||ESNO:33
ESUJ||Ånge|Tälje|SE|1|||ESNN:83
ESUK||Kiruna|Kalixfors|SE|1|||ESNQ:7
ESUL||Ljusdal||SE|1|||ESND:87
ESUM||Mohed||SE|1|||ESSD:121
ESUO||Graftavallen||SE|1|||ESNZ:31
ESUP|PJA|Pajala||SE|2
ESUR||Sollefteå|Ramsele|SE|1|||ESNK:81
ESUS||Åsele||SE|1|||ESNV:52
ESUT|HMV|Hemavan||SE|2
ESUV||Älvsbyn||SE|1|||ESPA:50
ESUY||Edsbyn|Edsby|SE|1|||ESKM:85
ESVA||Avesta||SE|1|||ESSD:43
ESVB||Bunge||SE|1|||ESSV:46
ESVE|||Stegeborg|SE|1|||ESSP:27
ESVG||Djurås|Gagnef|SE|1|||ESSD:28
ESVH||Hällefors||SE|1|||ESOH:50
ESVK||Katrineholm||SE|1|||ESKN:47
ESVL||Enköping|Långtora|SE|1|||ESOW:34
ESVM||Malung|Skinnlanda|SE|1|||ESKM:54
ESVQ||Köping|Köping/Gålby|SE|1|||ESOW:38
ESVS||Siljansnäs|Siljansnäs Air Park|SE|1|||ESKM:26
ETAD|SPM|Trier|Spangdahlem Air Base|DE|2|||EDFH:40
ETAR|RMS|Ramstein-Miesenbach|Ramstein Air Base|DE|2|||EDDR:43
ETHA||Altenstadt|Altenstadt Army|DE|1|||EDJA:50
ETHB||Bückeburg|Bückeburg Air Base|DE|2|||EDDV:46
ETHC||Celle|Celle Army|DE|2|||EDDV:27
ETHE|||Rheine-Bentlage|DE|1|||EDDG:27
ETHF|FRZ|Fritzlar|Fritzlar Army|DE|2|||EDVK:35
ETHL||Laupheim|Laupheim Air Base|DE|2|||EDJA:36
ETHN||Niederstetten|Niederstetten Army Air Base|DE|2|||EDDN:82
ETHS||Faßberg|Faßberg Air Base|DE|2|||EDDV:61
ETIC||Grafenwöhr|Grafenwöhr Army Air Field|DE|2|||EDDN:66
ETIH||Hohenfels|Hohenfels Army|DE|2|||EDDN:63
ETMN|FCN|Wurster Nordseeküste|Sea-Airport Cuxhaven/Nordholz / Nordholz Naval Airbase|DE|3
ETND||Diepholz|Diepholz Air Base|DE|2|||EDDW:59
ETNG|GKE|Geilenkirchen|Geilenkirchen Air Base|DE|2|||EHBK:20
ETNH||Hohn|Hohn Air Base|DE|2|||EDXB:45
ETNL|RLG|Laage|Rostock-Laage|DE|3
ETNN||Nörvenich|Nörvenich Air Base|DE|2|||EDDK:34
ETNS|WBG|Jagel|Schleswig Air Base|DE|2|||EDXB:52
ETNT||Wittmund|Wittmundhafen Air Base|DE|2|||EDWZ:28
ETNW|||Wunstorf Air Base|DE|2|||EDDV:17
ETOI||Vilseck|Vilseck Army Air Field|DE|1|||EDDN:52
ETOU|WIE|Wiesbaden|Wiesbaden Army|DE|2|||EDDF:17
ETSB||Alflen|Büchel Air Base|DE|2|||EDFH:29
ETSH||Holzdorf|Holzdorf Air Base|DE|2|||EDDB:70
ETSI|IGS|Manching|Ingolstadt Manching|DE|2|||EDDM:44
ETSL||Graben|Lechfeld Air Base|DE|2|||EDJA:51
ETSN||Neuburg an der Donau|Neuburg Air Base|DE|2|||EDDM:58
ETSR||Roth||DE|1||ETHR|EDDN:31
ETWM|||Meppen Air Base|DE|1|||EHGG:67
EVAD||Ādaži||LV|1|||EVRA:27
EVBA||Daugavpils|Griva|LV|1|||EYVI:158
EVCA||Cesis|Cēsis|LV|1|||EVRA:93
EVGA||Lielvarde|Lielvarde Air Base|LV|1|||EVRA:56
EVIA||Cīrava||LV|1|||EYPA:87
EVJA||Tukums|Jūrmala|LV|2||EVTA|EVRA:45
EVKA||Jēkabpils|Jēkabpils Air Base|LV|2|||EVRA:125
EVLA|LPX|Liepāja||LV|3|||EYPA:61
EVLI||Limbaži||LV|1||EVAH EVHA|EVRA:76
EVPA||Ikshkile||LV|1|||EVRA:36
EVRA|RIX|Riga||LV|4
EVRS||Riga|Spilve|LV|1|||EVRA:10
EVTE||Talsi||LV|1|||EVRA:93
EVVA|VNT|Ventspils||LV|1|||EEKE:113
EYAL||Alytus||LT|1|||EYKA:61
EYBI||Biržai||LT|1|||EVRA:96
EYDR||Druskininkai||LT|1|||EYKA:106
EYIG|||Ignalina|LT|1|||EYVI:88
EYJB||Jurbarkas|Jurbarkas Aerodromas|LT|1|||EYKA:86
EYKA|KUN|Kaunas||LT|4
EYKD||Kėdainiai|Kėdainiai Air Base|LT|2|||EYKA:40
EYKL||Klaipėda||LT|1|||EYPA:30
EYKS||Kaunas|S. Darius and S. Girėnas|LT|1|||EYKA:16
EYKT||Kartena||LT|1|||EYPA:30
EYMA||Tirkšliai / Mažeikiai|Mazeikiai / J.Kumpikeviciaus|LT|1|||EYPA:78
EYMM||Sasnava||LT|1|||EYKA:52
EYMO||Molėtai||LT|1|||EYVI:53
EYNA||Akmenė||LT|1|||EYPA:106
EYNI||Nida||LT|1||EYND|UMKK:56
EYPA|PLQ|Palanga||LT|4
EYPI||Panevėžys / Istra|Panevėžys Istra|LT|1|||EYKA:98
EYPN||Panevėžys||LT|1|||EYKA:85
EYPP|PNV|Panevėžys|Panevėžys Air Base|LT|2|||EYKA:88
EYPR||Pociūnai||LT|1|||EYKA:35
EYRD||Rūdiškės||LT|1|||EYVI:40
EYRK||Rokiškis|Rokiškio aerodromas|LT|1|||EVRA:146
EYRO||Rojūnai||LT|1|||EYKA:72
EYSA|SQQ|Šiauliai||LT|2|||EYKA:112
EYSB||Šiauliai|Barysiai|LT|2|||EVRA:98
EYSE||Šeduva / Šiauliai|Šeduva|LT|1|||EYKA:89
EYSI||Šilute||LT|1|||EYPA:76
EYTL||Telšiai||LT|1|||EYPA:75
EYTR||Tauragė|Tauragės Aerodromas|LT|1|||UMKK:106
EYUT||Utena||LT|1|||EYVI:99
EYVI|VNO|Vilnius||LT|4
EYVK||Kyviškes||LT|1|||EYVI:15
EYVP||Paluknys||LT|1|||EYVI:26
EYZA||Zarasai||LT|1|||EYVI:139
FAAA||City of Cape Town|Atlantic|ZA|1|||FACT:43
FAAB|ALJ|Alexander Bay||ZA|2|||FYOG:9
FAAE||Aberdeen||ZA|1|||FAPE:223
FAAF||Struisbaai|Andrew's Field|ZA|1|||FACT:158
FAAG|AGZ|Aggeneys||ZA|2|||FYOG:243
FAAK||Askham||ZA|1|||FAUP:164
FAAL|ADY|Alldays||ZA|1|||FAPP:136
FAAM||Amsterdam||ZA|1|||FDSK:115
FAAN||Aliwal North||ZA|1|||FXMM:158
FAAP||Primindia|Aviators Paradise Field|ZA|1|||FALA:31
FAAR|ASS|Arathusa|Arathusa Safari Lodge|ZA|1||FACC|FASZ:26
FAAS||Ashton||ZA|1|||FACT:134
FABA||Bapsfontein|Microland Flight Park|ZA|1|||FAOR:23
FABB||Brakpan||ZA|1|||FAOR:12
FABD||Burgersdorp|Burghersdorp|ZA|1|||FXMM:208
FABE|BIY|Bisho||ZA|2|||FAEL:53
FABF||Barkly East||ZA|1|||FAUT:120
FABG|||Buffelshoek|ZA|1|||FASZ:29
FABH||Belfast||ZA|1|||FAKN:111
FABK||Bushman's Kloof|Bushmans Kloof|ZA|1|||FACT:219
FABL|BFN|Bloemfontein|Bram Fischer|ZA|4
FABM||Bethlehem||ZA|1|||FXMM:154
FABO||Bothaville|Hendrik Potgieter|ZA|1|||FABL:195
FABP||Santoy|Black Rock|ZA|1|||FASS:60
FABR||Umjindi|Barberton|ZA|2|Umjindi (Barberton)|FABN|FAKN:39
FABS||Brits||ZA|1|||FALA:48
FABT||Bethesda|Bethesda Road|ZA|1|||FAPE:247
FABU|UTE|Bultfontein||ZA|1|||FABL:93
FABV||Brandviei||ZA|1|||FAUP:242
FABW||Beaufort West||ZA|1|||FAGG:192
FABX||Virginia|Beatrix|ZA|1|||FABL:105
FABZ||Bizana||ZA|1|||FAMG:46
FACA||Monte Carlo||ZA|1|||FXMM:74
FACB||Colesberg||ZA|1|||FAKM:216
FACD|CDO|Cradock||ZA|1|||FAPE:204
FACE||Ceres||ZA|1|||FACT:106
FACF||St Francis Bay|St Francis|ZA|1|||FAPE:75
FACG||Caledon||ZA|1|||FACT:81
FACH||Cookhouse||ZA|1|||FAPE:139
FACI||Citrusdal||ZA|1|||FACT:155
FACK||Christiana||ZA|1|||FAKM:112
FACL||Carolina||ZA|1|||FAKN:128
FACN||Carnarvon||ZA|1|||FAUP:300
FACO|||Alkantpan Test Range|ZA|1|||FAUP:196
FACR||Carltonville||ZA|1|||FALA:75
FACT|CPT|Cape Town||ZA|4
FACV||Calvinia||ZA|1|||FACT:294
FACW||Clanwilliam||ZA|1|||FACT:201
FACX||Cathcart||ZA|1|||FAEL:105
FACY||Stilbaai||ZA|1|||FAGG:96
FADA||De Aar||ZA|1|||FAKM:222
FADB||Dwaalboom||ZA|1|||FBSK:96
FADC||Douglas|Douglas Cape|ZA|1|||FAKM:98
FADD||Dundee||ZA|1|||FAPM:164
FADG||Dordrecht||ZA|1|||FAUT:157
FADH||Durnacol||ZA|1|||FAPM:182
FADK|DUK|Mubatuba||ZA|1|||FARB:44
FADL||Delareyville||ZA|1|||FAMM:98
FADM||Kokstad||ZA|1|||FAMG:95
FADO||Dendron||ZA|1|||FAPP:54
FADP||Port Elizabeth|Darlington Dam Lodge|ZA|1|||FAPE:98
FADQ|PZL|Phinda|Zulu Inyala|ZA|1|||FAMU:36
FADS||De Doorns||ZA|1|||FACT:115
FADU|||Walkersons Field|ZA|1|||FAKN:92
FADV||Devon||ZA|1|||FAOR:59
FADX||Koeberg|Delta 200 Airstrip|ZA|1|||FACT:38
FADY||De Aar|De Aar Military|ZA|1|||FAKM:219
FADZ||Drakensberg Gardens||ZA|1|||FAPM:112
FAEC||Estcourt||ZA|1|||FAPM:82
FAED||Edenburg||ZA|1|||FABL:83
FAEG||Egnep||ZA|1|||FAPH:110
FAEL|ELS|East London|King Phalo|ZA|4
FAEM|EMG|Empangeni||ZA|1|||FARB:20
FAEN||Entabeni|Entabeni Airstrip|ZA|1|||FAPP:83
FAEO||Ermelo||ZA|2|||FAKN:167
FAER|ELL|Ellisras|Ellisras Matimba|ZA|1|||FAPP:181
FAES||Eshowe||ZA|1|||FARB:64
FAET||Elliot||ZA|1|||FAUT:83
FAFB|FCB|Ficksburg|Ficksburg Sentraoes|ZA|2|||FXMM:78
FAFF||Frankfort||ZA|1|||FAOR:130
FAFG||Flamingo Vlei||ZA|1|||FAUP:233
FAFO||Fort Beaufort||ZA|1|||FAEL:120
FAFR||Fraseburg|Fraserburg|ZA|1|||FAGG:244
FAFU||Fraaiuitzicht||ZA|1|||FAOR:164
FAFW||Kromdraai|Freeway|ZA|1|||FALA:63
FAGA||Umzimkulu|The Grange|ZA|1|||FAMG:75
FAGC|GCJ|Midrand|Grand Central|ZA|2|||FAOR:20
FAGG|GRJ|George||ZA|4
FAGH||Emmaus|Glen Grey|ZA|1|||FAPM:128
FAGI|GIY|Giyani||ZA|1|||FAPH:89
FAGJ||Gifvlei||ZA|1|||FAUP:251
FAGL||Groblersdal|Groblersdal Kob|ZA|1|||FAPP:149
FAGM|QRA|Johannesburg|Rand|ZA|2|||FAOR:15
FAGO|||Gowrie|ZA|1|||FASZ:25
FAGR||Graaff-Reinet|Graaff Reinet|ZA|1|||FAPE:223
FAGT||Grahamstown||ZA|1|||FAPE:113
FAGV||Gravelotte||ZA|1|||FAPH:47
FAGW||Magwa||ZA|1|||FAMG:86
FAGY||Greytown||ZA|1|||FAPM:61
FAHA||Virginia|Harmony|ZA|1|||FABL:125
FAHB||Hartebeespoort|Hartebeespoortdam|ZA|1|||FAPP:158
FAHC||Howick||ZA|1|||FAPM:21
FAHD||Humansdorp||ZA|1|||FAPE:77
FAHE||Hendrina|Pullenshope Hendrina|ZA|1|||FAOR:138
FAHF||Henry'S Flats|Henrys Flats|ZA|1|||FAPE:105
FAHG||Heidelburg||ZA|1|||FAOR:44
FAHH||Hibberdene||ZA|1|||FAMG:37
FAHI||Halfweg||ZA|1|||FAUP:210
FAHJ||Harding||ZA|1|||FAMG:52
FAHK||Haakdoornboom||ZA|1|||FALA:43
FAHL|HLW|Hluhluwe||ZA|1|||FAMU:49
FAHO||Heilbron||ZA|1|||FAOR:129
FAHP||Hoopstad||ZA|1|||FABL:146
FAHR|HRS|Harrismith||ZA|2|||FAPM:201
FAHS|HDS|Hoedspruit|Eastgate Airport / Air Force Base Hoedspruit|ZA|3||FAHT
FAHU||H.M.S.Bastard Memorial|H M S Bastard Memorial|ZA|1|||FAMG:88
FAHV||Gariepdam|Gariep Dam|ZA|1|||FABL:180
FAIA||Itala||ZA|1|||FAMU:87
FAID||Idutywa||ZA|1|||FAUT:70
FAIS||Nyoni|Isithebe|ZA|1|||FALE:63
FAIV||Ingwavuma||ZA|1|||FAMU:57
FAIW||Indwe||ZA|1|||FAUT:126
FAJC|||Jackalberry Airstrip|ZA|1|||FAPH:64
FAJF||Jagersfontain||ZA|1|||FABL:112
FAJP||Joubertina||ZA|1|||FAGG:135
FAJV||Jansenville||ZA|1|||FAPE:146
FAKB||Kosi Bay|Kosibaai|ZA|1|||FAMU:97
FAKD|KXE|Klerksdorp|P C Pelser|ZA|2|||FALA:159
FAKE||Keimouth||ZA|1|||FAEL:62
FAKF||Koffee Bay||ZA|1|||FAUT:66
FAKG||Komati Power Station||ZA|1|||FAOR:121
FAKH||Kenhardt||ZA|1|||FAUP:104
FAKI||Kobb Inn||ZA|1|||FAUT:99
FAKK||Kakamas||ZA|1|||FAUP:76
FAKL||Kriel||ZA|1|||FAOR:95
FAKM|KIM|Kimberley||ZA|4
FAKN|MQP|Mbombela|Kruger Mpumalanga|ZA|4
FAKO||Komga||ZA|1|||FAEL:49
FAKP|KOF|Komatipoort||ZA|1|||FASZ:63
FAKR||Krugersdorp||ZA|1|||FALA:26
FAKS||Kroonstad||ZA|1|||FABL:188
FAKT||Boschkop|Kitty Hawk|ZA|1|||FAOR:37
FAKU|KMH|Kuruman|Johan Pienaar|ZA|2|||FASS:46
FAKV||Koffyfontein|Koffyfontein Min|ZA|1|||FAKM:74
FAKW||Kareedouw||ZA|1|||FAPE:121
FAKX||Boesmansriviermond|Kenton-on-Sea|ZA|1|||FAPE:100
FAKZ|KLZ|Kleinsee||ZA|2|||FYOG:138
FALA|HLA|Johannesburg|Lanseria|ZA|4
FALB||Ladybrand||ZA|1|||FXMM:32
FALC|LMR|Lime Acres|Lime Acres Finsch Mine|ZA|2|||FASS:90
FALD|LDZ|Londolozi||ZA|1|||FASZ:26
FALE|DUR|Durban|King Shaka|ZA|4
FALF||Loeriesfontein||ZA|1
FALH||Lohathla|Lohathla Military|ZA|1|||FASS:44
FALI||Lichtenburg||ZA|1|||FAMM:76
FALL||Lydenburg||ZA|1|||FAKN:76
FALM||Louis Trichardt Southwest|Makhado Air Force Base|ZA|1|||FAPP:80
FALO|LCD|Louis Trichardt||ZA|1|||FAPP:96
FALQ||Ardmore|El Mirador|ZA|1|||FAPM:116
FALR||Steytlerville||ZA|1|||FAPE:140
FALS||Somersveld||ZA|1|||FACT:82
FALW|SDB|Langebaanweg||ZA|2|||FACT:119
FALY|LAY|Ladysmith||ZA|2|||FAPM:134
FAMA||Matatiele||ZA|1|||FAUT:137
FAMB||Middelburg||ZA|1|||FAOR:130
FAMC||Cape Town|Middelburg 2|ZA|1|||FAPE:277
FAMD|AAM|Malamala||ZA|2|||FASZ:17
FAMF||Malabar||ZA|1|||FAKM:92
FAMG|MGH|Margate||ZA|3
FAMH|MEZ|Musina||ZA|1|Messina||FAPP:174
FAMI||Marble Hall||ZA|1|||FAPP:128
FAMJ||Amerspoort|Majuba Power Station|ZA|1|||FAOR:185
FAML||Mafeking|Manyani Game Lodge|ZA|1|||FAMM:17
FAMM|MBD|Mafeking|Mmabatho|ZA|3
FAMN|LLE|Malelane||ZA|1|||FAKN:47
FAMO|MZY|Mossel Bay||ZA|1|||FAGG:34
FAMP||Matshakatini|Madimbo|ZA|1|||FAPH:176
FAMQ||Nqanqarhu|Maclear|ZA|1|Nqanqarhu (Maclear)||FAUT:60
FAMS||Silveroaks|Morningside Farm|ZA|2|||FALA:105
FAMT||Molteno||ZA|1|||FAUT:221
FAMU|MZQ|Mkuze||ZA|3
FAMV||Lanseria|Mountain View Estate|ZA|1|||FALA:9
FAMX||Mbazwana||ZA|1|||FAMU:57
FAMY||Malmesbury||ZA|1|||FACT:55
FAMZ||Msauli||ZA|1|||FAKN:75
FANA||Nongoma||ZA|1|||FAMU:50
FANC|NCS|Newcastle||ZA|2|||FAMU:204
FANG|NGL|Ngala||ZA|1|||FAPH:53
FANH||New Hanover||ZA|1|||FAPM:35
FANI|||N’tsiri Airstrip|ZA|1|||FAPH:32
FANL||Witbank|New Largo|ZA|1|||FAOR:76
FANS|NLP|Nelspruit||ZA|1|||FAKN:23
FANV||Nieuwoudtville||ZA|1|||FACT:291
FANX||Malmesbury|Diepkloof|ZA|1|||FACT:70
FANY||Modimolle|Nylstroom|ZA|1|||FAPP:140
FAOB|OVG|Overberg||ZA|1|||FACT:165
FAOD||Odendaalsrus||ZA|1|||FABL:141
FAOF||Olifantshoek|Jack Duvenhage|ZA|1|||FASS:45
FAOH|OUH|Oudtshoorn||ZA|2|||FAGG:48
FAOI||Orient|Orient Glider|ZA|1|||FALA:35
FAOL||Otthawa|Othawa|ZA|1|||FASZ:32
FAON||Hluhluwe|Ornate Lake - St Lucia|ZA|1|||FAMU:60
FAOR|JNB|Johannesburg|O.R. Tambo|ZA|4||FAJS
FAOT||Ottosdal||ZA|1|||FAMM:120
FAOY||Orkney||ZA|1|||FAMM:172
FAPA|AFD|Port Alfred||ZA|1|||FAEL:105
FAPC||Prince Albert||ZA|1|||FAGG:95
FAPD||Pofadder||ZA|1|||FAUP:198
FAPE|PLZ|Gqeberha|Chief Dawid Stuurman|ZA|4|Gqeberha (Port Elizabeth)
FAPF||Piet Retief||ZA|1|||FDSK:112
FAPG|PBZ|Plettenberg Bay||ZA|2|||FAGG:88
FAPH|PHW|Phalaborwa|Hendrik Van Eck|ZA|3
FAPI||Polokwane|Pietersburg Municipal|ZA|3
FAPJ|JOH|Port St Johns||ZA|2|||FAUT:81
FAPK|PRK|Prieska||ZA|1|||FAUP:205
FAPL||Pongola||ZA|1|||FAMU:52
FAPM|PZB|Pietermaritzburg||ZA|3
FAPN|NTY|Pilanesberg||ZA|2|||FALA:101
FAPO||Mankolehlotlo|Pilgrims Rest|ZA|1|||FAKN:74
FAPP|PTG|Polokwane||ZA|4||FAPB
FAPQ||Kruger National Park|Punda Maria|ZA|1|Malia||FAPH:131
FAPS|PCF|Potchefstroom||ZA|2|||FALA:117
FAPT||Postmasburg|Posmasburg Soil|ZA|1|||FASS:77
FAPU||Paarl|Paarl East|ZA|1|||FACT:49
FAPV||Petrusville||ZA|1|||FAKM:142
FAPW||Pietersrus||ZA|1|||FAOR:120
FAPX||Jeffreys Bay|Paradise Beach|ZA|1|||FAPE:69
FAPY||Parys||ZA|1|||FAOR:111
FAPZ||Sunlands|Progress|ZA|1|||FAPE:24
FAQF||Pomfret||ZA|1|||FAMM:201
FAQT|UTW|Queenstown||ZA|2|||FAEL:152
FARA||Daveyton|Petit|ZA|1|||FAOR:16
FARB|RCB|Richards Bay||ZA|3
FARD||Riversdale||ZA|1|||FAGG:103
FARG||Rustenburg||ZA|2|||FALA:73
FARI|RVO|Reivilo||ZA|1|||FASS:116
FARM||Richmond||ZA|1
FARO||Rooiberg||ZA|1|||FALA:130
FARS|ROD|Robertson||ZA|2|||FACT:121
FARZ||Maasstroom|Reitz|ZA|1|||FAPP:158
FASB|SBU|Springbok||ZA|2|||FYOG:190
FASC|ZEC|Secunda||ZA|2|||FAOR:101
FASD||Saldanha-Vredenburg|Saldanha/Vredenburg|ZA|2|||FACT:127
FASE|GSS|Belfast|Sabi Sabi|ZA|1|||FASZ:14
FASG||Schweizer Reneke||ZA|1|||FAMM:154
FASH||Stellenbosch||ZA|1|||FACT:20
FASI||Del Fouche|Springs|ZA|1|||FAOR:19
FASJ||Saffier||ZA|1|||FAOR:84
FASK||Pretoria|Swartkop Air Force Base|ZA|2|||FALA:28
FASL||Sutherland||ZA|1|||FAGG:229
FASM||Siteka||ZA|1|||FAPM:43
FASN||Senekal||ZA|1|||FXMM:128
FASP|SSX|Singita Safari Lodge||ZA|1|||FASZ:24
FASS|SIS|Sishen||ZA|3
FAST||Somerset East||ZA|1|||FAPE:138
FASU||Sace||ZA|1|||FAOR:99
FASW||Slurry||ZA|1|||FAMM:34
FASX||Swellendam|Hendrik Swellengrebel|ZA|1|||FACT:173
FASY||Hiltonia|Baragwanath|ZA|1|||FALA:48
FASZ|SZK|Skukuza||ZA|3
FATA||Tedderfield|Tedderfield Air Park|ZA|1|||FAOR:36
FATB||Hoedspruit|Thorny Bush Game Lodge|ZA|1|||FAPH:53
FATD|TDT|Timbavati|Tanda Tula|ZA|1|||FASZ:57
FATF||Beeshoek|Tommys Field|ZA|1|||FASS:68
FATG|||Thaba Tholo|ZA|1|||FBSK:136
FATH|THY|Thohoyandou||ZA|1|||FAPH:124
FATI||Thabazimbi||ZA|1|||FBSK:152
FATM||Stutterheim||ZA|1|||FAEL:67
FATN|TCU|Homeward|Thaba Nchu Tar|ZA|1|||FABL:56
FATR||Qolora|Trennery's|ZA|1|||FAEL:71
FATT||Standerton|Tutuka Power Station|ZA|1|||FAOR:130
FATW||Tswalo Game Reserve|Witberg Tswalu|ZA|1|||FASS:71
FATZ|LTA|Tzaneen||ZA|2|||FAPH:85
FAUB||Underberg||ZA|1|||FAPM:88
FAUC||Ulco||ZA|1|||FAKM:72
FAUG||Ugie||ZA|1|||FAUT:57
FAUH||Uitenhage||ZA|1|||FAPE:31
FAUL|ULD|Ulundi|Prince Mangosuthu Buthelezi|ZA|2|||FARB:81
FAUP|UTN|Upington||ZA|3
FAUR||Utrecht||ZA|1|||FAMU:170
FAUS|ULX|Ulusaba||ZA|1|||FASZ:31
FAUT|UTT|Mthatha|K. D. Matanzima|ZA|3
FAVA||Vaalputs||ZA|1|||FYOG:265
FAVB|VRU|Vryburg||ZA|2|||FAMM:155
FAVD||Vrede||ZA|1|||FAOR:170
FAVE||Ventersdorp||ZA|1|||FALA:118
FAVF||Verborgenfontein|Verborgenfontei|ZA|1|||FAKM:278
FAVG|VIR|Durban|Virginia|ZA|2|||FALE:18
FAVI||Von Abo's Villa||ZA|1|||FABL:169
FAVM||Alldays|Venetia Mine|ZA|1|||FAPP:156
FAVP||Vanderbijlpark||ZA|1|||FAOR:77
FAVR|VRE|Vredendal||ZA|2|||FACT:259
FAVS||Upington|Vastrap|ZA|1|||FAUP:72
FAVU||Volksrust||ZA|1|||FAOR:211
FAVV||Vereeniging||ZA|2|||FAOR:55
FAVW||Victoria West||ZA|1|||FAGG:299
FAVY|VYD|Vryheid||ZA|1|||FAMU:124
FAWA||Warmbaths||ZA|1|||FALA:120
FAWB|PRY|Pretoria|Wonderboom|ZA|2|||FALA:43
FAWC||Worcester|Worcester Glider|ZA|1|||FACT:83
FAWE|||Welgevonden Reserve|ZA|1|||FAPP:163
FAWG||Kwelega|Watts Landing|ZA|1|||FAEL:26
FAWI||Witbank||ZA|1|||FAOR:100
FAWK|WKF|Pretoria|Waterkloof Air Force Base|ZA|2|||FALA:32
FAWL||Williston||ZA|1
FAWM|WEL|Welkom||ZA|1|||FABL:127
FAWN||Durbanville|Cape Winelands|ZA|1||FAFK|FACT:26
FAWO||Willowmore||ZA|1|||FAGG:132
FAWR||Wavecrest||ZA|1|||FAEL:82
FAWS||Wesselsbron|Wesselbronn|ZA|1|||FABL:139
FAWT||Doornbosch|Winterveldt Mine|ZA|1|||FAPP:116
FAWV||White River|White River Mercy Air|ZA|1|||FAKN:15
FAWW||Sodwana Bay|Sodwana Airstrip|ZA|1|||FAMU:60
FAYP||Cape Town|Ysterplaat Air Force Base|ZA|2|||FACT:13
FAZC||Zululand|Zululand Anthracite Colliery Airstrip|ZA|1|||FARB:72
FAZG||Swartberg||ZA|1|||FAMG:119
FAZP||Mazeppa Bay||ZA|1|||FAEL:99
FAZQ||Star||ZA|1|||FAOR:101
FAZR||Zeerust||ZA|1|||FAMM:54
FBAB||Abu's Camp|Abu|BW|1|||FBMN:111
FBBP||Bottle Pan||BW|1|||FVFA:97
FBBS||Bokspits||BW|1|||FAUP:177
FBCD||Chandia|Chandia Airstrip|BW|1|||FVFA:59
FBCH||Linyanti|Chobe|BW|1|||FYKM:114
FBCM||Cement||BW|1|||FBMN:100
FBCO||Camp Okavango||BW|1|||FBMN:99
FBCT|||Chitabe Airstrip|BW|1|||FBMN:56
FBDT||Delta Camp||BW|1|||FBMN:60
FBDV||Deception Valley Lodge|Deception Valley|BW|1|||FBMN:115
FBGD||Gundingwa||BW|1|||FBSW:117
FBGH||Goodhope||BW|1|||FAMM:43
FBGM||Gumare||BW|1|||FBSW:112
FBGP||Gope||BW|1|||FBSK:243
FBGS||Grassland Lodge|Grassland|BW|1|||FBMN:225
FBGU||Guma||BW|1|||FBSW:86
FBGW||Gweta||BW|1|||FBMN:188
FBGY||Grundy's Lodge|Grundy's|BW|1|||FBPM:36
FBGZ|GNZ|Ghanzi||BW|1|||FBMN:266
FBHK|HUK|Hukuntsi||BW|1
FBHU||Tubu Tree Camp|Hunda|BW|1|||FBSW:121
FBHV||Hainaveld|Haina Ventures|BW|1|||FBMN:112
FBJA||Jao Camp|Jao|BW|1|||FBMN:114
FBJC||Jack's Camp|Tsigaro|BW|1|||FBMN:187
FBJW|JWA|Jwaneng||BW|2|||FBSK:124
FBKA||Kaa||BW|1
FBKD||Lagoon Camp|Kwando Lagoon|BW|1|||FYKM:105
FBKE|BBK|Kasane||BW|4
FBKG||Kang||BW|1
FBKI||Kiri Camp|Kiri|BW|1|||FBMN:57
FBKK||Kanana Camp|Kanana|BW|1|||FBMN:73
FBKP||Kings Pool||BW|1|||FYKM:104
FBKR|KHW|Khwai River Lodge||BW|1|||FBMN:99
FBKW||Lebala Camp|Kwando Lebala|BW|1|||FYKM:106
FBKY||Kanye||BW|1|||FBSK:82
FBLL||Limpopo-Lipadi||BW|1|||FAPP:175
FBLN||Linyanti||BW|1|||FYKM:100
FBMA||Rasesa|Matsieng|BW|1|||FBSK:28
FBMB|||Mombo Camp|BW|1|||FBMN:108
FBMG||Machaneng||BW|1|||FAPP:213
FBMM||Makalamabedi||BW|1|||FBMN:62
FBMN|MUB|Maun||BW|4
FBMO||Motopi||BW|1|||FBMN:81
FBMU||Mamuno||BW|1|||FYWH:264
FBNB||Nxabega||BW|1|||FBMN:86
FBNN||Nokaneng||BW|1|||FBMN:133
FBNT||Nata||BW|1|||FBPM:172
FBNW||Moremi Crossing|Moremi Crossing Airstrip|BW|1|||FBMN:58
FBNX||Nxamaseri Lodge|Nxamaseri|BW|1|||FBSW:35
FBOD||Oakdene||BW|1|||FBMN:237
FBOK||Okwa||BW|1
FBOM||Duba Plains Camp|Omdop|BW|1|||FBSW:116
FBOR|ORP|Orapa||BW|1|||FBPM:223
FBPA||Pandamatenga||BW|1|||FVFA:52
FBPM|FRW|Francistown|Phillip Gaonwe Matante|BW|4||FBFT
FBPT|||Thebephatshwa|BW|1|||FBSK:69
FBPY||Palapye||BW|1|||FBPM:160
FBSG||Seronga||BW|1|||FBSW:80
FBSI||Saile||BW|1|||FYKM:57
FBSK|GBE|Gaborone|Sir Seretse Khama|BW|4
FBSL||Selinda||BW|1|||FYKM:128
FBSN|SXN|Sowa|Sua Pan|BW|2|||FBPM:156
FBSP|PKW|Selebi Phikwe||BW|2|||FBPM:107
FBST||Santawani Lodge|Santawani|BW|1|||FBMN:55
FBSV|SVT|Savuti||BW|1|||FYKM:99
FBSW|SWX|Shakawe||BW|2
FBTH||Tsodilo|Tsodilo Hills|BW|1|||FBSW:46
FBTL|TLD|Tuli Lodge||BW|1||FBLV|FAPP:187
FBTN||Tonunga||BW|1|||FVFA:176
FBTS|TBY|Tshabong||BW|1|||FASS:189
FBTU||Tsau||BW|1|||FBMN:105
FBVM||Vumbura||BW|1|||FBSW:122
FBXA||Xaxa|Xai Xai|BW|1|||FBSW:185
FBXB||Xaxaba||BW|1|||FBMN:61
FBXG|||Xugana|BW|1|||FBMN:108
FBXI||Xigera||BW|1|||FBMN:98
FBXR||Xorogom||BW|1|||FBSW:138
FBXX||Xudum||BW|1|||FBMN:67
FCBA||La Louila||CG|1|||FCBB:115
FCBB|BZV|Brazzaville|Maya-Maya|CG|4
FCBD|DJM|Djambala||CG|1|||FOON:175
FCBK|KNJ|Kindamba||CG|1|||FCBB:101
FCBL|LCO|Lague||CG|1|||FOON:150
FCBM|MUY|Mouyondzi||CG|1|||FCBB:145
FCBP||M'passa||CG|1|||FCBB:123
FCBS|SIB|Sibiti||CG|1|||FCPP:207
FCBT||Loutete||CG|1|||FCBB:154
FCBU||Aubeville||CG|1|||FCBB:191
FCBY|NKY|Nkayi|Yokangassi|CG|1|||FCPP:169
FCBZ|ANJ|Zanaga||CG|1|||FOON:139
FCMA||Mavinza||CG|1|||FOGX:182
FCMB||N'Ziba||CG|1|||FOON:155
FCMD||Sidetra||CG|1|||FOON:149
FCMF||Loufoula||CG|1|||FCPP:202
FCMG||Gokango||CG|1|||FCPP:200
FCMI||Irogo||CG|1|||FOGX:204
FCMK||Kele Kibangou||CG|1|||FCPP:185
FCML||Leboulou||CG|1|||FOON:182
FCMM|MSX|Mossendjo||CG|1|||FOON:166
FCMN||N'gongo||CG|1|||FOON:202
FCMO||Mandoro||CG|1|||FOON:127
FCMR||Marala||CG|1|||FOON:165
FCMS||Nyanga||CG|1|||FOGX:212
FCMY||Legala||CG|1|||FOON:92
FCMZ||N'Zabi||CG|1|||FOON:180
FCOB|BOE|Boundji||CG|1|||FOON:222
FCOD|OLL|Oyo|Oyo Ollombo|CG|2|||FZBA:276
FCOE|EWO|Ewo||CG|1|||FOON:174
FCOG|GMM|Gamboma||CG|1|||FZBO:234
FCOI|ION|Impfondo||CG|1|||FZEA:176
FCOK|KEE|Kelle||CG|1|||FOOK:194
FCOM|MKJ|Makoua||CG|1|||FOON:299
FCOO|FTX|Owando||CG|2|||FZEA:268
FCOS|SOE|Souanke||CG|1|||FOOK:213
FCOT|BTB|Betou||CG|1|||FZFK:141
FCOU|OUE||Ouesso|CG|2
FCPA|KMK|Makabana||CG|1|||FCPP:169
FCPB||Bangamba||CG|1|||FCPP:193
FCPD|DIS|Dolisie|Ngot Nzoungou|CG|2||FCPL|FCPP:109
FCPE||Leganda||CG|1|||FCPP:193
FCPG||Kibangou||CG|1|||FCPP:155
FCPI||Loubetsi||CG|1|||FCPP:127
FCPK||N'zambi|N'komo|CG|1|||FCPP:117
FCPN||Noumbi||CG|1|||FCPP:93
FCPO||Pemo||CG|1|||FOON:168
FCPP|PNR|Pointe Noire|Antonio Agostinho-Neto|CG|4
FCPY||Loukanyi||CG|1|||FCPP:94
FDBM||Big Bend|Matata|SZ|1|||FDSK:60
FDBS||Big Bend|Big Bend Sugar E|SZ|1|||FDSK:57
FDBT||Big Bend|Tambuti|SZ|1|||FDSK:42
FDKB||Kubuta B|Kubuta|SZ|1|||FDSK:62
FDMH||Mhlume||SZ|1|||FDSK:38
FDMS|MTS|Manzini|Matsapha|SZ|2|||FDSK:45
FDNG||Ngonini|Piggs Peak|SZ|1|||FAKN:55
FDNH||Nhlangano||SZ|1|||FDSK:98
FDNS||Nsoko||SZ|1|||FAMU:72
FDSK|SHO|Manzini|King Mswati III|SZ|4|Mpaka
FDSM||Simunye||SZ|1|||FDSK:28
FDST||Siteki||SZ|1|||FDSK:26
FDTM||Tambankulu||SZ|1|||FDSK:35
FDTS||Tshaneni||SZ|1|||FDSK:66
FDUB||Big Bend|Ubombo Ranches|SZ|1|||FDSK:51
FEFA||Alindao||CF|1|||FZFD:89
FEFB||Obo|Poste|CF|1
FEFC|CRF|Carnot||CF|1|||FEFF:297
FEFD||Damara||CF|1|||FEFF:65
FEFE||Mobaye Mbanga||CF|1|||FZFD:22
FEFF|BGF|Bangui|Bangui M'Poko|CF|4
FEFG|BGU|Bangassou||CF|1|||FZFD:209
FEFI|IRO|Birao||CF|1
FEFK||Kembé||CF|1|||FZFD:106
FEFM|BBY|Bambari||CF|1|||FZFD:181
FEFN|NDL|N'Délé||CF|1
FEFO|BOP|Bouar||CF|1|||FKKN:277
FEFP||Paoua||CF|1
FEFQ||Kaga-Bandoro||CF|1|||FEFF:297
FEFR|BIV|Bria||CF|1|||FZFD:277
FEFS|BSN|Bossangoa||CF|1|||FEFF:262
FEFT|BBT|Berbérati||CF|2
FEFU||Sibut||CF|1|||FEFF:161
FEFW|ODA|Ouadda||CF|1
FEFY|AIG|Yalinga||CF|1
FEFZ|IMO|Zemio||CF|1
FEGB||Bambouli||CF|1|||HSWW:268
FEGC||Bocaranga||CF|1|||FKKN:232
FEGD||Dekoa||CF|1|||FEFF:220
FEGE|MKI|Mboki|M'Boki|CF|1
FEGF|BTG|Batangafo||CF|1
FEGG||Gamboula||CF|1
FEGI||Grimari||CF|1|||FZFD:189
FEGL|GDI|Melle|Gordil|CF|1
FEGM|BMF|Bakouma||CF|1|||FZFD:258
FEGO|ODJ|Ouanda Djallé||CF|1
FEGR|RFA|Rafaï||CF|1
FEGU|BCF|Bouca||CF|1|||FEFF:237
FEGZ|BOZ|Bozoum||CF|1
FGAN|NBN|San Antonio de Palé|Annobón|GQ|2||FGAB
FGBT|BSG|Bata||GQ|4
FGCO|OCS|Corisco Island|Corisco|GQ|4
FGMM||Mongomo||GQ|1|||FGMY:31
FGMY|GEM|Mengomeyén|President Obiang Nguema|GQ|3
FGSL|SSG|Malabo||GQ|4
FHAW|ASI|Cat Hill|RAF Ascension Island|SH|3
FHSH|HLE|Jamestown|Saint Helena|SH|3
FIMA|AHG|Vingt Cinq|Agalega Island Airstrip|MU|1
FIMP|MRU|Mauritius|Sir Seewoosagur Ramgoolam|MU|4|Plaine Magnien
FIMR|RRG|Port Mathurin|Sir Charles Gaetan Duval|MU|3
FJDG|NKW|Diego Garcia|Naval Support Facility Diego Garcia|IO|2
FKAB||Banyo||CM|1|||FKKN:204
FKAF||Bafia||CM|1|||FKYS:122
FKAG||Abong M'bang||CM|1|||FKYS:185
FKAO||Bétaré Oya||CM|1|||FKKN:214
FKBJ||M'Bandjock||CM|1|||FKYS:89
FKKB|KBI|Kribi||CM|1|||FGBT:109
FKKC|TKC|Tiko||CM|2|||FKKD:41
FKKD|DLA|Douala||CM|4
FKKE||Eseka||CM|1|||FKYS:85
FKKF|MMF|Mamfe||CM|1|||DNCA:134
FKKG|BLC|Bali||CM|1|||DNCA:213
FKKH|KLE|Kaélé||CM|1|||FKKL:45
FKKI|OUR|Batouri||CM|1
FKKJ|GXX|Yagoua||CM|1|||FKKL:108
FKKL|MVR|Maroua|Salak|CM|3
FKKM|FOM|Foumban|Foumban Nkounja|CM|2|||FKKD:214
FKKN|NGE|N'Gaoundéré||CM|3
FKKO|BTA|Bertoua||CM|1|||FKYS:258
FKKR|GOU|Garoua||CM|4
FKKS|DSC|Dschang||CM|1|||FKKD:165
FKKT||Tibati||CM|1|||FKKN:141
FKKU|BFX|Bafoussam||CM|2|||FKKD:184
FKKV|BPC|Bamenda||CM|2|||DNCA:229
FKKW|EBW|Ebolowa||CM|1|||FKYS:103
FKKY|YAO|Yaoundé|Yaoundé Ville|CM|2|||FKYS:13
FKYS|NSI|Yaoundé|Yaoundé Nsimalen|CM|4
FLAA|||Kawa|ZM|1|||FLSK:135
FLAB||Kakumbi|Kakumbi Airstrip|ZM|1|||FLMF:28
FLAI||Mkushi|Amelia|ZM|1|||FLSK:125
FLAM||Chama|Chama Airstrip|ZM|1|||FLKS:250
FLAT||Katete||ZM|1|||FLMF:97
FLBA|MMQ|Mbala||ZM|1|||FLKS:152
FLBP||Livingstone|Baobab Plains|ZM|1|||FLHN:10
FLBW||Nabwalya|Nabwalya Airstrip|ZM|1|||FLMF:92
FLCC||Chocha||ZM|1|||FLKS:245
FLCF||Chifunda|Chifunda Airstrip|ZM|1|||FLMF:167
FLCG||Chilongolo||ZM|1|||FLKK:35
FLCP|CIP|Chipata||ZM|1|||FLMF:78
FLCS||Chinsali||ZM|1|||FLKS:113
FLCU|CGX|Chunga|Chunga Airstrip|ZM|1|||FLKK:267
FLEA||Bwambwa|East One|ZM|1|||FLSK:199
FLEB||Mofu|East Two|ZM|1|||FLKS:130
FLEC||Luano|East Three|ZM|1|||FLSK:216
FLED||Mululowera|East Four|ZM|1|||FLKK:184
FLEF||Chiwanangala|East Six|ZM|1|||FLKS:159
FLEG||Kanshela|East Seven|ZM|1|||FLSK:121
FLEH||Kapu|East Eight|ZM|1|||FLSK:135
FLFW||Fiwila||ZM|1|||FLSK:164
FLGE||Kasempa|Mukinge Mission Airstrip|ZM|1|||FLSW:155
FLHN|LVI|Livingstone|Harry Mwanga Nkumbula|ZM|4||FLLI
FLIK||Isoka||ZM|1|||HTGW:154
FLJK|JEK|Jeki||ZM|1|||FVKB:125
FLKB||Kawambwa||ZM|1|||FLKS:227
FLKE|CGJ|Chingola|Kasompe|ZM|2|||FLSK:80
FLKG||Kalengwa||ZM|1|||FLSW:206
FLKK|LUN|Lusaka|Kenneth Kaunda|ZM|4||FLLS
FLKL|KLB|Kalabo||ZM|1
FLKO|KMZ|Kaoma||ZM|1
FLKS|KAA|Kasama||ZM|2
FLKU||Kanyau||ZM|1|||FBSW:217
FLKW||Kabwe|Milliken|ZM|1|||FLKK:98
FLKY|ZKB|Kasaba Bay||ZM|1|||FLKS:194
FLKZ||Nansolo|Lukuzi|ZM|1|||FLMF:47
FLLA||Luanshya|Luanshya Zambia|ZM|1|||FLSK:22
FLLC||Lusaka|Lusaka City|ZM|2|||FLKK:16
FLLD||Lundazi||ZM|1|||FLMF:173
FLLG||Luwingu||ZM|1|||FLKS:132
FLLK|LXU|Lukulu||ZM|1
FLLO||Kalomo||ZM|1|||FLHN:117
FLLV||Bwanda|Lochinvar|ZM|1|||FLKK:149
FLMA|MNS|Mansa||ZM|1|||FZQA:155
FLMB||Maamba||ZM|1|||FLHN:153
FLMF|MFU|Mfuwe||ZM|4
FLMG|MNR|Mongu||ZM|2|||FYKM:286
FLMK||Mkushi||ZM|1|||FLSK:119
FLML||Mufulira||ZM|1|||FLSK:51
FLMO||Monze||ZM|1|||FLKK:147
FLMP||Mpika||ZM|1|||FLMF:161
FLMU||Mulobezi||ZM|1|||FBKE:117
FLMW||Mwinilunga||ZM|1|||FZQM:153
FLMZ||Mazabuka||ZM|1|||FLKK:89
FLNA|ZGM|Ngoma||ZM|1|||FLHN:207
FLND||Ndola|Peter Zuze Air Force Base|ZM|2|||FLSK:16
FLNL||Namwala||ZM|1|||FLKK:222
FLNY||Nyimba||ZM|1|||FLMF:188
FLOT|||Otago|ZM|1|||FLKK:56
FLPA||Kasempa||ZM|1|||FLSW:154
FLPE||Petauke||ZM|1|||FLMF:131
FLPK||Mporokoso||ZM|1|||FLKS:144
FLPO||Kabompo||ZM|1|||FLSW:279
FLRO||Rosa||ZM|1|||FLKS:77
FLRU||Rufansa||ZM|1|||FLKK:130
FLRZ|RYL|Lower Zambezi River|Royal Zambezi Lodge Airstrip|ZM|1|||FVKB:99
FLSE||Serenje||ZM|1|||FLMF:184
FLSH||Shiwa n'gandu||ZM|1|||FLKS:130
FLSJ||Sakeji||ZM|1|||FZQM:140
FLSK|NLA|Ndola|Simon Mwansa Kapwepwe|ZM|4
FLSN|SXG|Senanga||ZM|1|||FYKM:193
FLSO|KIW|Kitwe|Southdowns|ZM|2|||FLSK:40
FLSS|SJQ|Sesheke||ZM|1|||FYKM:22
FLSW|SLI|Solwesi||ZM|2
FLWA||Chinka|West One|ZM|1|||FLSW:108
FLWB||Metamba|West Two|ZM|1|||FLSK:140
FLWC||Nyoka|West Three|ZM|1|||FLSW:134
FLWD||West Four||ZM|1|||FLSW:193
FLWE||Lipanda|West Five|ZM|1|||FLSW:287
FLWF||Kauni|West Six|ZM|1|||FZQA:70
FLWG||Chanika|West Seven|ZM|1|||FLSW:80
FLWW||Waka Waka||ZM|1|||FLMF:96
FLYA||Samfya||ZM|1|||FLSK:210
FLZB|BBZ|Zambezi||ZM|1
FMCH|HAH|Moroni|Prince Said Ibrahim|KM|4
FMCI|NWA|Fomboni|Mohéli Bandar Es Eslam|KM|2|||FMCV:74
FMCV|AJN|Ouani||KM|3
FMCZ|DZA|Dzaoudzi|Dzaoudzi Pamandzi|YT|4
FMEE|RUN|Saint-Denis|Roland Garros|RE|4|Sainte-Marie Réunion
FMEP|ZSE|Saint-Pierre|Saint-Pierre Pierrefonds|RE|4
FMFE|OHB|Moramanga|Ambohibary|MG|1|||FMMI:79
FMFZ||Betainomby||MG|1||FMBI|FMMT:10
FMMA||Arivonimamo|Antananarivo Arivonimamo|MG|1|||FMMI:41
FMMB|AMY||Ambatomainty|MG|1|||FMNQ:160
FMMC|WML|Malaimbandy||MG|1|||FMMV:128
FMME|ATJ|Antsirabe||MG|1|||FMMI:124
FMMG|WAQ|Antsalova||MG|1|||FMMU:152
FMMH|VVB|Mahanoro||MG|1|||FMSM:159
FMMI|TNR|Antananarivo|Ivato|MG|4
FMMJ||Ambohijanahary||MG|1|||FMNT:109
FMMK|JVA|Ankavandra||MG|1|||FMMV:193
FMML|BMD|Belo sur Tsiribihina||MG|1|||FMMV:71
FMMN|ZVA|Miandrivazo||MG|2|||FMMV:143
FMMO|MXT|Maintirano||MG|1|||FMMU:64
FMMP||Amparafaravola||MG|1|||FMNT:119
FMMQ|ILK|Ilaka|Atsinanana|MG|1|||FMMI:164
FMMR|TVA|Morafenobe||MG|1|||FMMU:109
FMMS|SMS|Vohilava|Sainte Marie|MG|3
FMMT|TMM|Toamasina|Toamasina Ambalamanasy|MG|4
FMMU|WTA|Tambohorano||MG|2
FMMV|MOQ|Morondava||MG|3
FMMX|WTS|Tsiroanomandidy||MG|1|||FMMI:150
FMMY|VAT|Vatomandry||MG|1|||FMMT:149
FMMZ|WAM|Ambatondrazaka||MG|1|||FMMT:107
FMNA|DIE|Antisiranana|Arrachart|MG|3
FMNB|WBE|Bealanana|Ankaizina|MG|1|||FMNN:143
FMNC|WMR|Mananara Nord||MG|2|||FMNR:81
FMND|ZWA||Andapa|MG|2|||FMNS:73
FMNE|AMB||Ambilobe|MG|1|||FMNN:74
FMNF|WBD|Befandriana|Avaratra|MG|1|||FMNR:132
FMNG|WPB|Port Bergé||MG|1|||FMNT:130
FMNH|ANM|Antsirabe||MG|2|||FMNS:82
FMNK|||Antsiranana Andrakaka|MG|1|||FMNA:11
FMNL|HVA|Analalava||MG|2|||FMNN:158
FMNM|MJN|Mahajanga|Amborovy|MG|4
FMNN|NOS|Nosy Be||MG|4
FMNO|DWB|Soalala||MG|2
FMNP|WMP|Mampikony||MG|1|||FMNT:76
FMNQ|BPY|Besalampy||MG|3
FMNR|WMN|Maroantsetra||MG|3
FMNS|SVB|Sambava||MG|3
FMNT|TTS|Tsaratanana||MG|2
FMNV|VOH|Vohemar||MG|2|||FMNS:102
FMNW|WAI|Antsohihy|Ambalabe|MG|2|||FMNN:180
FMNX|WMA|Mandritsara||MG|1|||FMNR:102
FMNZ|IVA||Ampampamena|MG|1|||FMNN:39
FMSA||Ambalavao||MG|1|||FMSM:164
FMSB|WBO|Beroroha|Antsoa|MG|1|||FMMV:170
FMSC|WMD|Mandabe||MG|1|||FMMV:107
FMSD|FTU|Tôlanaro||MG|3
FMSE||Betroka||MG|1|||FMSD:213
FMSF|WFI|Fianarantsoa||MG|2|||FMSM:132
FMSG|RVA|Farafangana||MG|1|||FMSM:187
FMSI|IHO|Ihosy||MG|1|||FMSM:263
FMSJ|MJA|Manja||MG|1|||FMMV:127
FMSK|WVK|Manakara||MG|2|||FMSM:108
FMSL|OVA|Bekily||MG|1|||FMST:186
FMSM|MNJ|Mananjary||MG|3
FMSN|TDV|Tanandava|Samangoky|MG|1|||FMMV:169
FMSR|MXM|Morombe||MG|2|||FMST:185
FMST|TLE|Toliara||MG|3
FMSU|VND|Vangaindrano||MG|1|||FMSD:198
FMSV|BKU|Betioky||MG|1|||FMST:78
FMSY|AMP|Ampanihy||MG|1|||FMST:178
FMSZ|WAK|Ankazoabo||MG|1|||FMST:146
FMZJ||Juan de Nova|Juan de Nova Airstrip|TF|1|||FMMU:141
FNAM|AZZ|Ambriz||AO|1|||FNLU:111
FNBC|SSY|Mbanza Congo||AO|3
FNBG|BUG|Benguela||AO|2|||FNCT:17
FNBJ|NBJ|Luanda|Dr. Antonio Agostinho Neto|AO|4|Luanda (Ícolo e Bengo)
FNBL|GGC|Lumbala N'guimbo|Lumbala|AO|1
FNCA|CAB|Cabinda||AO|3
FNCB||Camembe||AO|1|||FNNG:96
FNCC||Cacolo||AO|1
FNCF|CFF|Cafunfo||AO|1|||FNMA:202
FNCH|PGI|Chitato||AO|1|||FNDU:5
FNCM||Camabatela||AO|1|||FNNG:48
FNCO|CTV|Saurimo|Catoca|AO|1|||FNDU:233
FNCP|KNP|Capanda|Kapanda|AO|1|||FNMA:98
FNCT|CBT|Catumbela||AO|3
FNCU||Calulo||AO|1|||FNMA:161
FNCV|CTI|Cuito Cuanavale||AO|1|||FNME:164
FNCX||Camaxilo||AO|1|||FNDU:235
FNCZ|CAV|Cazombo||AO|1
FNDB||Damba||AO|1|||FNNG:97
FNDU|DUE|Chitato|Dundo|AO|3
FNGI|VPE|Ngiva|Ngjiva Pereira|AO|3
FNHU|NOV|Huambo|Albano Machado|AO|3
FNJM|JMB|Jamba||AO|1|||FNME:178
FNKU|SVP|Kuito||AO|2|||FNHU:136
FNLB|LLT|Lobito||AO|1|||FNCT:13
FNLK|LBZ|Lucapa||AO|1|||FNDU:116
FNLM||Lumbala|Lumbala Airstrip|AO|1
FNLU|LAD|Luanda|Quatro de Fevereiro|AO|4
FNLZ|LZM|Luzamba||AO|1|||FNMA:196
FNMA|MEG|Malanje||AO|3
FNME|SPP|Menongue||AO|3
FNMO|MSZ|Moçâmedes|Welwitschia Mirabilis|AO|3
FNMQ||Maquela do Zombo|Maquela|AO|1|||FNBC:102
FNNG|GXG|Negage||AO|3
FNNL||Huambo||AO|1|||FNHU:3
FNPA|PBN|Port Amboim|Porto Amboim|AO|2|||FNBJ:188
FNPB||Sanza Pombo||AO|1|||FNNG:88
FNSA|VHC|Saurimo||AO|2|||FNDU:258
FNSO|SZA|Soyo||AO|3
FNSU|NDD|Sumbe||AO|2|||FNCT:151
FNTE||Techamutete|Tchamutete|AO|1|||FNME:189
FNTO||Toto|Xamindele|AO|1|||FNBC:97
FNUA|UAL|Luau||AO|1
FNUB|SDD|Lubango|Lubango Mukanka|AO|3
FNUE|LUO|Luena||AO|2
FNUG|UGO|Uige||AO|2|||FNNG:33
FNWK|CEO|Waco Kungo||AO|1|||FNHU:170
FNXA|XGN|Xangongo||AO|2|||FNGI:83
FNZE|ARZ|N'zeto||AO|1|||FNSO:136
FNZG|NZA|Nzagi||AO|1|||FNDU:69
FOGA|AKE|Akieni||GA|1|||FOON:77
FOGB|BGB|Booue||GA|1|||FOOK:130
FOGE|KDN|Ndende||GA|1||FOND|FOGX:153
FOGF|FOU|Fougamou||GA|1|||FOGX:179
FOGG|MBC|M'Bigou||GA|1|||FOON:172
FOGI|MGX|Moabi||GA|1|||FOGX:105
FOGJ|KDJ|N'Djolé|Ville|GA|1|||FOOL:165
FOGK|KOU|Koulamoutou|Koulamoutou Mabimbi|GA|2|||FOON:123
FOGM|MJL|Mouila|Mouilla Ville|GA|2|||FOGX:153
FOGO|OYE|Oyem||GA|3
FOGQ|OKN|Okondja||GA|2|||FOON:113
FOGR|LBQ|Lambarene||GA|2|||FOOL:159
FOGV|MVX|Minvoul||GA|1|||FOGO:90
FOGW|AWE|Wonga Wongué Presidential Reserve|Alowe|GA|1|||FOOG:79
FOGX|GAX|Gamba||GA|2
FOOB|BMM|Bitam||GA|2|||FOGO:60
FOOD|MFF|Moanda||GA|1|||FOON:25
FOOE|MKB|Mekambo||GA|1|||FOOK:128
FOOG|POG|Port Gentil||GA|4
FOOH|OMB|Omboue|Omboue Hospital|GA|2|||FOOG:111
FOOI|IGE|Iguela|Tchongorove|GA|1|||FOGX:125
FOOK|MKU|Makokou||GA|3
FOOL|LBV|Libreville|Libreville Leon M'ba|GA|4
FOOM|MZC|Mitzic||GA|1|||FOGO:85
FOON|MVB|Franceville|M'Vengue El Hadj Omar Bongo Ondimba|GA|3
FOOR|LTL|Lastourville||GA|1|||FOON:120
FOOS||Sette Cama||GA|1|||FOGX:42
FOOT|TCH|Tchibanga||GA|1|||FOGX:102
FOOY|MYB|Mayumba||GA|1|||FOGX:102
FPPR|PCP|São Tomé & Príncipe|Principe|ST|3
FPST|TMS|São Tomé||ST|4
FQAG|ANO|Angoche||MZ|1|||FQNP:139
FQBI||Bilene||MZ|1|||FQXA:66
FQBR|BEW|Beira||MZ|4
FQCB|FXO|Cuamba||MZ|1|||FWCL:193
FQCH|VPY|Chimoio||MZ|3
FQES||Chitima|Estima Airbase|MZ|1|||FQTT:103
FQFU||Furancungo||MZ|1|||FWKI:127
FQIA|IHC|Inhaca||MZ|1|||FQMA:37
FQIB|IBO|Ibo||MZ|1|||FQPB:72
FQIN|INH|Inhambane||MZ|3
FQLC|VXC|Lichinga||MZ|3
FQLU|LFB|Lumbo||MZ|1|||FQNC:61
FQMA|MPM|Maputo||MZ|4
FQMD|MUD|Mueda||MZ|2|||HTMT:163
FQMP|MZB|Mocímboa da Praia||MZ|2|||HTMT:116
FQMR||Marrupa||MZ|1|||FQLC:247
FQNC|MNC|Nacala||MZ|3
FQNP|APL|Nampula||MZ|4
FQPB|POL|Pemba||MZ|3
FQPO|PDD|Ponta do Ouro||MZ|1|||FQMA:104
FQQL|UEL|Quelimane||MZ|3
FQSG||Songo||MZ|1|||FQTT:108
FQTT|TET|Tete||MZ|4
FQUG||Ulongwe||MZ|1|||FWKI:119
FQVL|VNX|Vilanculo|Vilankulo|MZ|3
FQXA|VJB|Xai-Xai|Xai-Xai Chongoene|MZ|2
FSAL||Alphonse Island|Alphonse|SC|2
FSAS||Assomption Island|Assomption|SC|1
FSDA||D'Arros Island||SC|1|||FSIA:260
FSDR|DES|Desroches Island|Desroches|SC|1|||FSIA:236
FSFA||Farquhar Group|Farquhar|SC|1
FSIA|SEZ|Victoria|Seychelles|SC|4
FSMA||Marie-Louise Island|Marie-Louise|SC|1
FSPL||Platte Island||SC|1|||FSIA:133
FSPP|PRI|Praslin Island||SC|3
FSSA||Astove Island||SC|1
FSSB|BDI|Bird Island||SC|1|||FSPP:85
FSSC||Coëtivy Island|Coëtivy|SC|1|||FSIA:286
FSSD|DEI|Denis Island||SC|1|||FSPP:58
FSSF|FRK|Frégate Island|Frégate Island Airport|SC|1|UNUSABLE||FSPP:41
FSSR||Remire Island||SC|1|||FSIA:250
FTFY||Wadi Doum|Ouadi Doum Air Base|TD|2
FTTA|SRH|Sarh||TD|1
FTTB|OGR|Bongor||TD|1|||FKKL:124
FTTC|AEH|Abeche||TD|2
FTTD|MQQ|Moundou||TD|2|||FKKL:284
FTTE||Biltine||TD|1
FTTF||Fada||TD|1
FTTG||Goz-Beida||TD|1
FTTH|LTC|Lai||TD|1|||FKKL:254
FTTI|ATV|Ati||TD|1
FTTJ|NDJ|N'Djamena||TD|4
FTTK|BKR|Bokoro||TD|1|||FTTJ:223
FTTL|OTC|Bol|Bol-Berim|TD|1|||FTTJ:149
FTTM|MVO|Mongo||TD|1
FTTN|AMC|Am Timan||TD|1
FTTP|PLF|Pala||TD|1|||FKKL:140
FTTR||Zouar||TD|1
FTTS|OUT|Bousso||TD|1|||FTTJ:260
FTTU|AMO|Mao||TD|1|||FTTJ:226
FTTY|FYT|Faya-Largeau||TD|2
FTTZ||Bardai Zougra||TD|1
FVAB||Aberdeen||ZW|1|||FQCH:133
FVAE||Braebourne||ZW|1|||FVRG:141
FVBB||Beitbridge||ZW|1|||FAPP:192
FVBI||Binga||ZW|1|||FLHN:160
FVBL||Mabalauta||ZW|1|||FAPH:227
FVBM|BZH|Bumi|Bumi Hills|ZW|1|||FVKB:66
FVBO||Bosbury||ZW|1|||FVRG:106
FVCC||C.C. Strip||ZW|1|||FVRG:101
FVCD||Chirundu||ZW|1|||FVKB:58
FVCE||Celina||ZW|1|||FVRG:53
FVCH|CHJ|Chipinge||ZW|1|||FQCH:144
FVCM||Cam+Motor||ZW|1|||FVRG:125
FVCN|||Centenary|ZW|1|||FVRG:133
FVCP||Harare|Charles Prince|ZW|1|||FVRG:27
FVCR||Chizarira||ZW|1|||FVKB:166
FVCV||Chivu||ZW|1|||FVRG:124
FVCZ|BFO|Chiredzi|Buffalo Range|ZW|2|||FQCH:283
FVDA||Mvurwi|Dawsons|ZW|1|||FVRG:105
FVDE||Deka||ZW|1|||FVFA:93
FVDU||Dudley||ZW|1|||FVRG:57
FVED||Eduan||ZW|1|||FVRG:167
FVFA|VFA|Victoria Falls||ZW|4
FVFG||Fothergill Island|Fothergill|ZW|1|||FVKB:32
FVFI||Filabusi||ZW|1|||FVJN:88
FVGB||Gombera Ranch|Gombera|ZW|1|||FVRG:133
FVGD||Gwanda||ZW|1|||FVJN:106
FVGG||Gache Gache|Gachegache|ZW|1|||FVKB:26
FVGM|||Mhangura|ZW|1|||FVRG:145
FVGO||Gokwe||ZW|1|||FVKB:191
FVGR||Mutare|Grand Reef|ZW|1|||FQCH:105
FVGT||Gaths Mine||ZW|1|||FVJN:196
FVGW||Gweru||ZW|1|||FVJN:127
FVHP||Home Park||ZW|1|||FVRG:74
FVHY||Chiredzi|Hippo Valley|ZW|1|||FQCH:280
FVIP||Impinge Ranch|Impinge|ZW|1|||FVRG:118
FVIT||Itafa||ZW|1|||FVRG:134
FVJN|BUQ|Bulawayo|Joshua Mqabuko Nkomo|ZW|4||FVBU
FVKB|KAB|Kariba||ZW|3
FVKK||Kwekwe||ZW|1|||FVRG:173
FVKW||Mkwasine||ZW|1|||FQCH:249
FVKZ||Kezi||ZW|1|||FVJN:101
FVLA||Langford||ZW|1|||FVRG:15
FVLG||Longuiel||ZW|1|||FVKB:96
FVLK||Linkwasha|Airport of Linkwasha|ZW|1|||FVJN:179
FVLS||Chiredzi|Lonestar|ZW|1|||FQCH:266
FVLU||Lusulu||ZW|1|||FVKB:205
FVMA||Marondera||ZW|1|||FVRG:48
FVMB||Mashumbi||ZW|1|||FVKB:184
FVMC|||Hwange Main Camp|ZW|1|||FVFA:137
FVMD|||Mount Darwin|ZW|1|||FVRG:138
FVMF||Mabikwa||ZW|1|||FVJN:181
FVMH|MJW|Gonarezhou National Park|Mahenye|ZW|1|||FQCH:258
FVMI||Mubayira||ZW|1|||FVRG:69
FVMK||Mkonono||ZW|1|||FVRG:75
FVML||Mlibizi|Mlibizi Airstrip|ZW|1|||FVFA:136
FVMN||Hurungwe|Mana Pools|ZW|1|||FVKB:99
FVMS||Middle Sabi||ZW|1|||FQCH:162
FVMT||Mutoko||ZW|2|||FVRG:128
FVMU|UTA|Mutare||ZW|1|||FQCH:86
FVMV|MVZ|Masvingo||ZW|2|||FVJN:234
FVMW||Murewa||ZW|1|||FVRG:81
FVNY||Nyanyadzi||ZW|1|||FQCH:123
FVOT|||Kotwa|ZW|1|||FQTT:142
FVRA||Ratelshoek||ZW|1|||FQCH:137
FVRB||Mwenezi|Barberton Lodge|ZW|1|||FVJN:179
FVRE||Renroc||ZW|1|||FVKB:88
FVRF||Hurungwe|Rifa Airstrip|ZW|1|||FVKB:23
FVRG|HRE|Harare|Robert Gabriel Mugabe|ZW|4||FVHA
FVRI|||Kipling's Rukari Airstrip|ZW|1|||FVKB:61
FVRK|||Rukomeshe Research Station Airstrip|ZW|1|||FVKB:70
FVRT||Rutenga||ZW|1|||FVJN:258
FVSC||Sencol||ZW|1|||FVKB:137
FVSE||Sanyati Estate||ZW|1|||FVKB:166
FVSH||Zvishavane||ZW|1|||FVJN:156
FVSN||Sun Yet Sen||ZW|1|||FBPM:110
FVSX||Sengwa Gorge||ZW|1|||FVKB:183
FVSY||Siyalima||ZW|1|||FVRG:152
FVTA||Tashinga||ZW|1|||FVKB:58
FVTB||Kariba|Tiger Bay Airstrip|ZW|1|||FVKB:65
FVTD||Tinfields||ZW|1|||FVRG:226
FVTE||Tengwe||ZW|1|||FVKB:102
FVTL|GWE|Gweru|Josiah Tungamirai Air Force Base|ZW|2|||FVJN:145
FVTS||Tsholothso||ZW|1|||FVJN:94
FVTU||Tuli||ZW|1|||FBPM:198
FVWD||Wedza||ZW|1|||FVRG:92
FVWN|HWN|Gwayi River Farms|Hwange National Park|ZW|2|||FVFA:138
FVWT|WKI|Hwange||ZW|1|Town||FVFA:78
FVYB||Yomba||ZW|1|||FVRG:132
FVYT||Inyati||ZW|1|||FVJN:42
FVZC||Zisco||ZW|1|||FVJN:159
FVZK||Zaka||ZW|1|||FQCH:245
FWBG||Bangula||MW|1|||FWCL:101
FWCB||Chilumba|Chilumba Private|MW|1|||HTGW:200
FWCC||Chintheche||MW|1|||FQLC:200
FWCD|CEH||Chelinda|MW|1|||HTGW:191
FWCL|BLZ|Blantyre|Chileka|MW|4
FWCM|CMK|Club Makokola||MW|1|||FQLC:116
FWCS||Ntchisi||MW|1|||FWKI:47
FWCT||Chitipa||MW|1|||HTGW:87
FWDW|DWA|Dwangwa||MW|2|||FWKI:146
FWKA|KGJ|Karonga||MW|2|||HTGW:134
FWKG|KBQ|Kasungu||MW|1|||FWKI:93
FWKI|LLW|Lilongwe|Kamuzu|MW|4|Lumbadzi|FWLI
FWLE||Lilongwe|Old Lilongwe|MW|1|||FWKI:21
FWLK|LIX|Likoma Island||MW|1|||FQLC:145
FWLP||Lifupa||MW|1|||FWKI:107
FWMC||Mchinji||MW|1|||FWKI:96
FWMY|MYZ|Monkey Bay||MW|1|||FQLC:98
FWMZ||Mzimba||MW|1|||FWKI:213
FWNB||Ngabu||MW|1|||FWCL:92
FWSJ||Nsanje||MW|1|||FWCL:142
FWSM|LMB|Salima||MW|1|||FWKI:87
FWSU||Nchalo|Nchalo Sucoma|MW|1|||FWCL:67
FWTK||Mtakatata||MW|1|||FWKI:94
FWUU|ZZU|Mzuzu||MW|2|||FQLC:245
FWZA||Zomba||MW|1|||FWCL:55
FXBB||Bobete||LS|1|||FXMM:108
FXKA||Katse||LS|1|||FXMM:95
FXKB||Kolberg||LS|1|||FXMM:91
FXKY|||Kuebunyane Airstrip|LS|1|||FXMM:91
FXLK|LEF|Lebakeng||LS|1|||FXMM:117
FXLR|LRB|Leribe||LS|1|||FXMM:82
FXLS|LES|Lesobeng||LS|1|||FXMM:84
FXLT||Letseng||LS|1|||FXMM:136
FXMA|MSG|Matsaile||LS|1|||FXMM:126
FXMF|MFC|Mafeteng||LS|1|||FXMM:49
FXMH||Mohale's Hoek||LS|1|||FXMM:77
FXMK|MKH|Mokhotlong||LS|1|||FAPM:135
FXML||Malefiloane|Malefiloane Airstrip|LS|1|||FAPM:122
FXMM|MSU|Maseru|Moshoeshoe I|LS|4|Maseru(Mazenod)
FXMN||Mantsonyane||LS|1|||FXMM:70
FXMP||Mohlanapeng||LS|1|||FXMM:108
FXMS||Mashai Store||LS|1|||FXMM:123
FXMT||Matabeng Store||LS|1|||FXMM:123
FXMU||Foso|Mejametalana Air Base|LS|1|||FXMM:18
FXMV||Matabeng Village||LS|1|||FXMM:128
FXNH||Nohanas||LS|1|||FXMM:74
FXNK|NKU|Nkaus||LS|1|||FXMM:88
FXPG|PEL|Pelaneng||LS|1|||FXMM:100
FXQG|UTG|Quthing||LS|1|||FXMM:107
FXQN|UNE|Qacha's Nek||LS|1|||FXMM:130
FXSE||Sehlabathebe||LS|1|||FAPM:135
FXSH|SHK|Sehonghong||LS|1|||FXMM:121
FXSK|SKQ|Sekakes||LS|1|||FXMM:102
FXSM|SOK|Semonkong||LS|1|||FXMM:65
FXSS|SHZ|Seshutes||LS|1|||FXMM:99
FXST||St. Theresa||LS|1|||FXMM:120
FXTA|THB|Thaba-Tseka||LS|1|||FXMM:103
FXTB||Tebellong||LS|1|||FXMM:110
FXTK|TKO|Tlokoeng||LS|1|||FXMM:131
FYAA|AIW|Ai-Ais||NA|1|||FYOG:130
FYAB||Aroab|Aroab B|NA|1|||FAUP:242
FYAD||Aandster|Aandster Airstrip|NA|1|||FYLZ:171
FYAG|||Anib Lodge Landing Site|NA|1|||FYWH:227
FYAH||Okombahe||NA|1|||FYWB:202
FYAI|||Ameib Ranch Airstrip|NA|1|||FYWB:163
FYAK||Aussenkehr||NA|1|||FYOG:100
FYAL|||Auob Lodge|NA|1|||FYWH:292
FYAM||Aminuis|Aminuis Airstrip|NA|1|||FYWH:233
FYAN||Aranos||NA|1|||FYWH:249
FYAR|ADI|Arandis||NA|2|||FYWB:67
FYAS||Aus||NA|1|||FYLZ:104
FYAT||Autabib||NA|1|||FYWH:63
FYAV||Ariamsvlei||NA|1|||FAUP:143
FYBB|||Beenbreek Landing Site|NA|1|||FYWH:121
FYBC||Bethanien||NA|1|||FYLZ:193
FYBE|||Betesda Airstrip|NA|1|||FYWB:228
FYBG|BQI|Bagani||NA|1|||FBSW:36
FYBI|||Arabi Hunting Farm|NA|1|||FAUP:272
FYBJ||Bitterwasser|Bitterwasser Lodge & Flying Club|NA|1|||FYWH:164
FYBK||Brukkaros|Brukkaros Landing Strip|NA|1
FYBM||Otjikoto|B2Gold Otjikoto Mine|NA|1|||FYHI:128
FYBO||Blumfelde||NA|1|||FYWH:148
FYBR||Berseba||NA|1|||FYLZ:270
FYBT||Buitepos|Buitepos Airstrip|NA|1|||FYWH:261
FYBY||Byseewah|Byseewah Airstrip|NA|1|||FYHI:126
FYCC||Cape Cross|Cape Cross Airstrip|NA|1|||FYWB:151
FYCV|||Cordova Airstrip|NA|1|||FYWH:136
FYDC|||Damaraland Wilderness Camp Airstrip|NA|1|||FYWB:288
FYDN|||Doro Nawas Airstrip|NA|1|||FYHI:277
FYEA|||Etendeka Airstrip|NA|1|||FYHI:279
FYEF||Omuhandja|Epupa Falls Airstrip|NA|1|||FNMO:227
FYEG||Ombu|Erongo Mountain Ombu Airstrip|NA|1|||FYWE:179
FYEH||Ehomba||NA|1|||FNGI:202
FYEK||Epukiro||NA|1|||FYWH:185
FYEM|||Emeritus Airstrip|NA|1|Onanis||FYWB:108
FYEN||Eenhana||NA|1|||FYOA:59
FYEP|||Epacha|NA|1|||FYHI:93
FYER|||Ermo Game Farm Airstrip|NA|1|||FYHI:201
FYET|||Etusis Lodge|NA|1|||FYWE:144
FYGB|GOG|Gobabis||NA|1|||FYWH:154
FYGC||Gochas|Gochas Airstrip|NA|1|||FYWH:298
FYGF|GFY|Grootfontein||NA|2|||FYHI:186
FYGK||Desert Homestead|Farm Whitwater East Landing Strip|NA|1|||FYWB:226
FYGL||Omaruru|Omaruru Game Lodge|NA|1|||FYWE:175
FYGO||Gobabeb||NA|1|||FYWB:75
FYGT|||Gross Tsaub Airstrip|NA|1|||FYHI:183
FYGV|||Gravenstein Prv|NA|1|||FYWE:104
FYHH||Helmeringhausen||NA|1|||FYLZ:182
FYHI|HAL|Halali||NA|2
FYHM|||Hammerstein Airstrip|NA|1|||FYLZ:222
FYHN||Henties Bay||NA|1|||FYWB:104
FYHO|||Hoanib Airstrip|NA|1
FYHS||Hobas||NA|1|||FYOG:162
FYHV||Otjinhungwa|Hartmann Valley Airstrip|NA|1|||FNMO:236
FYIA|||Intu Africa Pan|NA|1|||FYWH:185
FYKA||Karibib||NA|1|||FYWE:147
FYKB|KAS|Karasburg||NA|1|||FYOG:233
FYKD||Kalkfeld||NA|1|||FYWE:210
FYKE|||Kalahari Game Lodge|NA|1
FYKJ||Kamanjab||NA|1|||FYHI:180
FYKM|MPA|Mpacha|Katima Mulilo|NA|3
FYKN|||Okonjima|NA|1|||FYWE:199
FYKR||Okorusu Mine|Okorusu Mine Airstrip|NA|1|||FYHI:118
FYKS||Koes||NA|1
FYKT|KMP|Keetmanshoop||NA|2|||FYOG:280
FYKU||Torra Conservancy|Kuidas Airstrip|NA|1|||FYWB:271
FYKW||Okaongwati|Okangwati|NA|1|||FNGI:259
FYKX||Khorixas||NA|1|||FYHI:209
FYKY||Uitkyk||NA|1|||FYLZ:202
FYKZ||Kuzikus|Kuzikus Airstrip|NA|1|||FYWH:126
FYLO||Okajo Safari Lodge|Lodge Okajo Airstrip|NA|1|||FYWE:133
FYLR||Tsumeb|La Rochelle|NA|1|||FYHI:148
FYLS|LHU|Muneambuanas|Lianshulu Lodge Airstrip|NA|1|||FYKM:99
FYLV||Leonardville||NA|1|||FYWH:177
FYLW||Langverwacht|Langverwacht Airstrip|NA|1
FYLZ|LUD|Luderitz||NA|3
FYMB||Meob Bay|Meob Bay Landing Site|NA|1|||FYWB:182
FYME|MJO|Mount Etjo Safari Lodge|Mount Etjo|NA|1|||FYWE:187
FYMG|MQG|Midgard||NA|1|||FYWH:53
FYMH||Maltahoehe|Maltahoehe Airstrip|NA|1|||FYWE:241
FYMI||Myl 72|Mile 72|NA|1|||FYWB:136
FYMK||Skeleton Coast|Kunene Mouth Airstrip|NA|1|||FNMO:227
FYML||Mariental||NA|2|||FYWE:239
FYMM||Omatako Ranch|Omatako Hunting Airstrip|NA|1|||FYWE:122
FYMO|OKU|Mokuti Lodge||NA|1|||FYHI:68
FYMP|||Okamapu Landing Site|NA|1|||FYWH:92
FYMW|||Moewe Bay|NA|1
FYNA|NNI|Namutoni||NA|1|||FYHI:55
FYNB|||Kansimba Landing Site|NA|1|||FYWE:112
FYNG||Ombika|Ongava Lodge Airstrip|NA|2
FYOA|OND|Ondangwa||NA|3
FYOE|OMG|Omega||NA|1|||FBSW:54
FYOG|OMD|Oranjemund||NA|3
FYOH||Okahao||NA|1|||FYOA:93
FYOJ||Outjo||NA|1|||FYHI:122
FYOM||Omaruru||NA|1|||FYWE:177
FYON||Okahandja|Okahandja Airstrip|NA|1|||FYWE:68
FYOO|OKF|Okaukuejo||NA|1|||FYHI:59
FYOP|OPW|Opuwa||NA|1|||FYOA:223
FYOS|OHI|Oshakati||NA|1|||FYOA:28
FYOU||Operet||NA|1|||FYHI:86
FYOW|OTJ|Otjiwarongo||NA|1|||FYHI:158
FYPO|||Pokweni Glider|NA|1|||FYWH:133
FYRC||Ruacana||NA|1|||FNGI:146
FYRF||Rietfontein||NA|1|||FAUP:222
FYRH||Rehoboth||NA|1|Oanob Resort||FYWE:79
FYRR||Twyfelfontein|Rag Rock|NA|1|||FYHI:271
FYRU|NDU|Rundu||NA|3
FYSA|RHN|Rosh Pinah|Skorpion Mine|NA|1|||FYOG:81
FYSF|||Sesfontein|NA|1|||FYOA:279
FYSI||Shitemo|Ndonga Linena Airstrip|NA|1|||FYRU:86
FYSL||Sossusvlei Desert Lodge|Sossusvlei Mountain Lodge|NA|1|||FYLZ:219
FYSM|SWP|Swakopmund|Swakopmund Municipal|NA|1|||FYWB:36
FYSN||Osona|Osona Airstrip|NA|1|||FYWE:56
FYSO||Solitaire||NA|1|||FYWB:172
FYSP||Stampriet|Stampriet Pan|NA|1|||FYWH:230
FYSS|SZM|Sesriem||NA|1|||FYWB:204
FYST|||Strate|NA|1|||FYWH:199
FYTE|TCY|Terrace Bay||NA|1
FYTF||Twyfelfontein||NA|3
FYTK||Tsumkwe||NA|1|||FYRU:197
FYTM|TSB|Tsumeb||NA|2|||FYHI:136
FYUS||Uis|Uis Mine|NA|1|||FYWB:196
FYVF||Veronica|Veronica Gliding Center|NA|1|||FYWH:134
FYWB|WVB|Walvis Bay||NA|4|Walvis Bay(Rooikop)
FYWD|||Wolwedans|NA|1|||FYLZ:190
FYWE|ERS|Windhoek|Eros|NA|3
FYWH|WDH|Windhoek|Hosea Kutako|NA|4
FYWI||Witvlei||NA|1|||FYWH:102
FYWL||Wabi Game Lodge|Wabi Lodge Airstrip|NA|1|||FYHI:183
FYWN||Waterberg Wilderness Lodge|Waterberg Wilderness Airstrip|NA|1|||FYHI:185
FYXX|||Canon Lodge|NA|1|||FYOG:171
FYZR|||Zebra River Lodge Airstrip|NA|1|||FYWE:228
FZAA|FIH|Kinshasa|Ndjili|CD|4
FZAB|NLO|N'dolo|Ndolo|CD|2|||FCBB:12
FZAD||Celo Zongo||CD|1|||FCBB:71
FZAE||Kimpoko||CD|1|||FZAA:23
FZAF||Nsangi||CD|1|||FZAA:136
FZAG|MNB|Muanda||CD|1|||FNSO:24
FZAH||Tshela||CD|1|||FNCA:107
FZAJ|BOA|Boma||CD|1|||FNSO:83
FZAL|LZI|Luozi||CD|1|||FCBB:147
FZAM|MAT|Matadi|Tshimpi|CD|1|||FNBC:103
FZAN||Inga||CD|1|||FNBC:111
FZAP||Lukala||CD|1|||FNBC:91
FZAR|NKL|N'Kolo-Fuma||CD|1|||FNBC:114
FZAS||Inkisi||CD|1|||FZAA:100
FZAU||Konde||CD|1|||FNCA:20
FZAW||Kwilu-Ngongo||CD|1|||FNBC:99
FZAX||Luheki||CD|1|||FNBC:167
FZAY||Mvula Sanda||CD|1|||FNBC:116
FZBA|INO|Inongo||CD|2
FZBB||Bongimba||CD|1|||FZVS:117
FZBD||Oshwe||CD|1|||FZVS:164
FZBE||Beno||CD|1|||FZBO:55
FZBF||Bonkita||CD|1|||FZBA:141
FZBI|NIO|Nioki||CD|1|||FZBO:74
FZBJ||Mushie||CD|1|||FZBO:61
FZBK||Boshwe||CD|1|||FZBA:131
FZBL||Djokele||CD|1|||FZBO:49
FZBN||Malebo||CD|1|||FZBO:137
FZBO|FDU|Bandundu||CD|3
FZBQ||Bindja||CD|1|||FZVS:153
FZBR||Bolongonkele||CD|1||FZBP|FZBA:200
FZBS||Semendwa||CD|1|||FZBO:84
FZBT|KRZ|Kiri||CD|1|||FZBA:87
FZBU||Ipeke||CD|1|||FZBA:66
FZBV||Kempili|Kutu-Kempili|CD|1|||FZBA:89
FZBW||Basengele||CD|1|||FZBA:37
FZCA|KKW|Kikwit||CD|3
FZCB|IDF|Idiofa||CD|1|||FZCA:88
FZCD||Vanga||CD|1|||FZCA:79
FZCF||Kahemba||CD|1|||FNDU:202
FZCG|||Tembo|CD|1|||FNNG:226
FZCI||Banga||CD|1|||FZVS:126
FZCK||Kajiji||CD|1|||FNDU:257
FZCL||Banza Lute||CD|1|||FZBO:111
FZCO||Boko||CD|1|||FZAA:179
FZCP||Popokabaka||CD|1|||FZAA:197
FZCR||Busala||CD|1|||FZCA:97
FZCT||Fatundu||CD|1|||FZBO:92
FZCU||Ito||CD|1|||FZBO:10
FZCV|MSM|Masi Manimba||CD|1|||FZCA:107
FZCW||Kikongo Sur Wamba||CD|1|||FZBO:107
FZCX||Kimafu||CD|1|||FZCA:142
FZCY||Yuki||CD|1|||FZCA:128
FZDA||Malanga||CD|1|||FNBC:106
FZDB||Kimbau||CD|1|||FZCA:146
FZDD||Wamba Luadi||CD|1|||FZCA:226
FZDE||Tono||CD|1|||FZCA:158
FZDF||Nzamba||CD|1|||FZCA:233
FZDG||Nyanga||CD|1|||FNDU:165
FZDH||Ngi||CD|1|||FZBO:125
FZDJ||Mutena||CD|1|||FNDU:80
FZDK||Kipata Katika||CD|1|||FZCA:126
FZDL||Kolokoso||CD|1|||FZBO:127
FZDM||Masamuna||CD|1|||FZCA:136
FZDN||Mongo Wa Kenda||CD|1|||FNNG:203
FZDO||Moanza||CD|1|||FZCA:141
FZDP||Mukedi||CD|1|||FZCA:131
FZDQ||Mazelele||CD|1|||FNNG:199
FZDR||Bokela||CD|1|||FZGN:164
FZDS||Yasa Bongo||CD|1|||FZCA:129
FZDT||Matari||CD|1|||FZCA:180
FZDU||Kimpangu||CD|1|||FNBC:96
FZDY||Missayi||CD|1|||FZBO:64
FZEA|MDK|Mbandaka||CD|3
FZEI||Ingende||CD|1|||FZEA:82
FZEM||Yembe Moke||CD|1|||FZCA:74
FZEN|BSU|Basankusu||CD|1|||FZGN:208
FZEO||Beongo||CD|1|||FZGN:148
FZEP||Mentole||CD|1|||FZGN:179
FZER||Kodoro||CD|1|||FZGN:185
FZFA|LIE|Libenge||CD|1|||FEFF:87
FZFC||Engengele||CD|1
FZFD|BDT|Gbadolite||CD|3
FZFE||Abumumbazi||CD|1|||FZFD:144
FZFH||Mokaria-Yamoleka||CD|1|||FZIC:292
FZFJ||Goyongo||CD|1|||FZFK:105
FZFK|GMA|Gemena||CD|3
FZFP|KLI|Kotakoli|Kotakoli Airbase|CD|1|||FZFD:77
FZFQ||Mpaka||CD|1|||FEFF:85
FZFR||Mombongo||CD|1|||FZIC:276
FZFS||Karawa||CD|1|||FZFK:60
FZFT||Tandala||CD|1|||FZFK:55
FZFU|BMB|Bumba||CD|1|||FZFD:284
FZFW||Gwaka||CD|1|||FZFK:92
FZGA|LIQ|Lisala||CD|2|||FZFK:225
FZGC||Bolila||CD|1|||FZIC:290
FZGE||Binga||CD|1|||FZFK:127
FZGF||Bokungu||CD|1|||FZGN:161
FZGI||Yalingimba||CD|1
FZGN|BNB|Boende||CD|2
FZGT||Boteka||CD|1|||FZEA:94
FZGV|IKL|Ikela||CD|1|||FZIC:277
FZGX||Monkoto||CD|1|||FZGN:161
FZIA|||Kisangani Simisini|CD|1|||FZIC:21
FZIC|FKI|Kisangani|Bangoka|CD|4
FZIK||Katende||CD|1|||FZIC:24
FZIR|YAN|Yangambi||CD|1|||FZIC:102
FZIZ||Lokutu||CD|1|||FZIC:206
FZJB||Doko||CD|1|||HUAR:151
FZJC||Dungu|Dungu-Uye|CD|1|||FZJH:139
FZJD||Doruma||CD|1|||FZJH:210
FZJF||Aba||CD|1|||HUAR:116
FZJH|IRP|Isiro|Matari|CD|3
FZJI||Watsa||CD|1|||HUAR:152
FZJK||Faradje||CD|1|||HUAR:152
FZJN||Luniemu||CD|1|||FZSB:66
FZJR||Kere Kere||CD|1|||HUAR:55
FZKA|BUX|Bunia||CD|3
FZKB||Bambili-Dingila||CD|1|||FZJH:191
FZKC||Mahagi||CD|1|||HUAR:85
FZKF||Kilomines||CD|1|||FZKA:28
FZKI||Yedi||CD|1|||FZIC:183
FZKJ|BZU|Buta|Buta Zega|CD|2|||FZIC:267
FZKN||Aketi||CD|1
FZKO||Ango||CD|1|||FZJH:234
FZMA|BKY|Kamakombe|Bukavu Kavumu|CD|2|||HRZA:20
FZMB|RUE|Butembo|Rughenda|CD|1|||KHX:102
FZMC||Mulungu||CD|1|||HRZA:129
FZMD||Nzovu||CD|1|||HRZA:103
FZMK||Bulongo Kigogo||CD|1|||HRZA:26
FZMP||Kimano Ii||CD|1|||HTKA:157
FZMW||Shabunda||CD|1|||FZOA:160
FZNA|GOM|Goma||CD|4
FZNB||Katale||CD|1|||HUKI:39
FZNC||Rutshuru||CD|1|||HUKI:36
FZNF||Lubero||CD|1|||KHX:82
FZNI||Ishasha||CD|1|||KHX:9
FZNK||Katanda Rusthuru||CD|1|||KHX:38
FZNP|BNC|Beni||CD|1|||FZKA:138
FZNQ||Obaye||CD|1|||FZNA:172
FZNR||Rwindi||CD|1|||KHX:46
FZNS||Beni|Wageni|CD|1|||KHX:139
FZOA|KND|Kindu||CD|3
FZOB||Tingi-Tingi||CD|1|||FZIC:198
FZOC||Kalima|Kamisuku|CD|1|||FZOA:88
FZOD|KLY|Kalima|Kinkungwa|CD|1|||FZOA:99
FZOE||Kampene||CD|1|||FZOA:115
FZOF||Kiapupe||CD|1|||FZOA:154
FZOG||Lulingu Tshionka||CD|1|||HRZA:154
FZOH||Moga||CD|1|||FZOA:110
FZOJ||Obokote||CD|1|||FZIC:185
FZOK||Kasongo||CD|1|||FZOA:194
FZOO||Kailo||CD|1|||FZOA:38
FZOP|PUN|Punia||CD|1|||FZOA:177
FZOQ||Punia-Basenge||CD|1|||FZOA:170
FZOR||Saulia||CD|1|||FZOA:169
FZOS||Kasese||CD|1|||FZOA:193
FZOT||Phibraki||CD|1|||HRZA:161
FZPB||Kamituga||CD|1|||HRZA:105
FZPC||Lugushwa||CD|1|||HRZA:152
FZQA|FBM|Lubumbashi||CD|4
FZQC|PWO|Pweto||CD|1|||FZRF:283
FZQD||Mulungwishi||CD|1|||FZQM:123
FZQF||Fungurume||CD|1|||FZQM:93
FZQG|KEC|Kasenga||CD|1|||FZQA:182
FZQH||Katwe||CD|1|||FZQA:121
FZQJ||Mwadingusha||CD|1|||FZQA:99
FZQM|KWZ|Kolwezi||CD|3
FZQN||Mutshatsha||CD|1|||FZQM:121
FZQP||Kisenge||CD|1|||FZQM:255
FZQU||Lubudi||CD|1|||FZQM:107
FZQV||Mitwaba||CD|1|||FZSB:259
FZRA|MNO|Manono||CD|1|||FZRF:258
FZRB|BDV|Moba||CD|1|||FZRF:145
FZRC||Mukoy||CD|1|||FZRF:197
FZRE||Bukena||CD|1|||FZSB:267
FZRF|FMI|Kalemie||CD|3
FZRJ||Pepa||CD|1|||FZRF:214
FZRK||Kansimba||CD|1|||FZRF:161
FZRL||Lusinga||CD|1|||FZSB:242
FZRM|KBO|Kabalo||CD|1|||FZRF:259
FZRN||Nyunzu||CD|1|||FZRF:135
FZRO||Katemesha|Luvua|CD|1|||FZRF:242
FZRQ|KOO|Kongolo||CD|1|||FZRF:256
FZSA||Lumwe|Kamina Air Base|CD|2|||FZSB:30
FZSB|KMN|Kamina|Kamina City|CD|2
FZSC||Songa||CD|1|||FZSB:69
FZSD||Sandoa||CD|1|||FZSB:252
FZSE||Kanene||CD|1|||FZSB:78
FZSI||Dilolo||CD|1
FZSJ||Kasaji||CD|1|||FZQM:232
FZSK|KAP|Kapanga||CD|1|||FNDU:229
FZTK|KNM|Kaniama||CD|1|||FZSB:155
FZTL||Luena||CD|1|||FZSB:118
FZTS||Kasese|Kasese Kaniama|CD|1|||FZSB:155
FZUA|KGA|Kananga||CD|3
FZUG|LZA|Luiza||CD|1|||FZUA:144
FZUH||Moma||CD|1|||FZUA:149
FZUI||Mboi||CD|1|||FZUA:116
FZUK|TSH|Tshikapa||CD|1|||FNDU:107
FZUL||Bulape||CD|1|||FZVS:116
FZUM||Mutoto||CD|1|||FZWA:50
FZUN||Luebo||CD|1|||FZUA:140
FZUO||Musese||CD|1|||FZUA:123
FZUP||Diboko||CD|1|||FNDU:64
FZUS||Tshikaji||CD|1|||FZUA:9
FZUV||Kalonda||CD|1|||FNDU:104
FZVA|LJA|Lodja||CD|1|||FZOA:262
FZVC||Kole Sur Lukenie||CD|1|||FZVS:236
FZVD||Dingele||CD|1|||FZOA:168
FZVE||Lomela||CD|1|||FZOA:293
FZVG||Katako'kombe||CD|1|||FZOA:176
FZVH||Shongamba||CD|1|||FZVS:77
FZVI|LBO|Lusambo||CD|1|||FZWA:131
FZVJ||Tshumbe||CD|2
FZVK||Lukombe-Batwa||CD|1|||FZVS:166
FZVM|MEW|Mweka||CD|1|||FZVS:121
FZVN||Wembo-Nyama||CD|1|||FZOA:205
FZVO||Bena-Dibele||CD|1|||FZUA:207
FZVP||Dikungu||CD|1|||FZOA:203
FZVR|BAN|Basongo||CD|1|||FZVS:19
FZVS|PFR|Ilebo||CD|2
FZVT||Dekese||CD|1|||FZVS:129
FZVU||Idumbe||CD|1|||FZVS:119
FZWA|MJM|Mbuji Mayi||CD|3
FZWB||Bibanga||CD|1|||FZWA:44
FZWE||Mwene-Ditu||CD|1|||FZWA:97
FZWF||Kipushi||CD|1|||FZWA:176
FZWI||Kashia||CD|1|||FZWA:124
FZWL||Munkamba||CD|1|||FZUA:67
FZWS||Lubao||CD|1|||FZWA:254
FZWT|KBN|Kabinda|Tunta|CD|1|||FZWA:108
GAAO||Ansongo||ML|1|||GAGO:81
GABD||Bandiagara||ML|1|||GAMB:54
GABF||Bafoulabé||ML|1|||GAKD:96
GABG||Bougouni||ML|1|||GABS:131
GABR||Bourem||ML|1|||GAGO:96
GABS|BKO|Bamako|Modibo Keita|ML|4
GADA||Dioila||ML|1|||GABS:125
GADZ||Douentza||ML|1|||GAMB:136
GAFD||Faladie||ML|1|||GABS:80
GAGM|GUD|Goundam||ML|1|||GATB:76
GAGO|GAQ|Gao||ML|3
GAKA|KNZ|Kenieba||ML|1|||GAKD:183
GAKD|KYS|Kayes|Kayes Dag Dag|ML|3||GAKY
GAKL||Kidal||ML|1|||GAGO:286
GAKN||Kolokani||ML|1|||GABS:111
GAMB|MZI|Sévaré|Mopti|ML|3
GAMK||Menaka||ML|1|||GAGO:254
GAMN||Manantali|Manantali Bengassi|ML|1|||GAKD:167
GANF||Niafunke||ML|1|||GATB:139
GANK|NRM|Keibane|Nara|ML|1
GANR|NIX|Nioro du Sahel||ML|1|||GAKD:213
GASD||Sadiola||ML|1|||GAKD:73
GASK||Sikasso||ML|1|||DFOO:149
GASO|KSS|Sikasso||ML|1|Dignangan||DFOO:167
GASY||Syama||ML|1|||DIKO:165
GATB|TOM|Timbuktu|Tombouktou|ML|4
GATS|||Tessalit|ML|1|||DATM:126
GAYE|EYL|Yélimané||ML|1|||GAKD:114
GBYD|BJL|Banjul||GM|4|Banjul (Yundum)
GCAT||Antigua|Jarde|ES|1|||GCFV:14
GCFV|FUE|Fuerteventura||ES|4|El Matorral
GCGM|GMZ|Alajero|La Gomera|ES|2|Alajero, La Gomera Island
GCHI|VDE|El Hierro Island|El Hierro|ES|3
GCLA|SPC|Sta Cruz de la Palma|La Palma|ES|3|Sta Cruz de la Palma, La Palma Island
GCLB||Gran Canaria Island|El Berriel Aeroc|ES|1|||GCLP:20
GCLP|LPA|Gran Canaria Island|Gran Canaria|ES|4
GCRR|ACE|Lanzarote|César Manrique-Lanzarote|ES|4|San Bartolomé
GCTS|TFS|Tenerife|Tenerife Sur|ES|4
GCXO|TFN|Tenerife|Tenerife Norte-Ciudad de La Laguna|ES|4
GEML|MLN|Melilla||ES|3
GFBO|KBS|Bo||SL|2|||GFLL:175
GFGK|GBK|Gbangbatok||SL|1|||GFLL:127
GFHA|HGS|Freetown|Hastings|SL|1|||GFLL:26
GFKB|KBA|Kabala||SL|1|||GFLL:217
GFKE|KEN|Kenema||SL|2|||GLMR:185
GFLL|FNA|Freetown|Lungi|SL|4|Freetown (Lungi-Town)
GFTO||Tongo||SL|1|||GLMR:217
GFYE|WYE|Yengema||SL|2|||GFLL:236
GGBE||Bendanda|Bendanda Airstrip|GW|1|||GGOV:85
GGBF||Bafatá||GW|1|||GGOV:113
GGBO||Bolama|Bolama Airstrip|GW|1|||GGOV:37
GGBU|BQE|Bubaque||GW|1|||GGOV:69
GGCC||Cacine|Cacine Airstrip|GW|1|||GGOV:111
GGCF||Cufar||GW|1|||GGOV:85
GGGB||Gabu||GW|1|||GGOV:160
GGOV|OXB|Bissau|Osvaldo Vieira|GW|4
GLBU|UCN|Buchanan||LR|1|||GLRB:50
GLCP|CPA|Harper|Cape Palmas|LR|1|||DISP:122
GLGE|SNI|Greenville|Greenville/Sinoe|LR|2|||GLRB:196
GLLB||Buchanan|Lamco|LR|1|||GLRB:56
GLMR|MLW|Monrovia|Spriggs Payne|LR|3
GLNA|NIA|Nimba||LR|1|||GLRB:241
GLRB|ROB|Monrovia|Roberts|LR|4
GLST|SAZ|Sasstown||LR|1|||DISP:197
GLTN|THC|Zwedru|Tchien|LR|1|||DISP:218
GLVA|VOI|Voinjama||LR|1|||GLRB:241
GMAA||Inezgane||MA|1|||GMAD:14
GMAD|AGA|Agadir|Al Massira|MA|4|Agadir (Temsia)
GMAG|GLN|Guelmim||MA|1|||GMAT:126
GMAR|||Mahbes Airbase|EH|2|||DAOF:105
GMAT|TTA|Tan Tan||MA|3
GMAZ|OZG|Zagora||MA|4
GMFA||Beni Malek|Ouezzane|MA|1|||GMTN:94
GMFB|UAR|Bouarfa||MA|3
GMFF|FEZ|Saïss|Fes Saïss|MA|4
GMFI||Ifran||MA|1|||GMFF:50
GMFK|ERH|Errachidia|Moulay Ali Cherif|MA|3
GMFM|MEK|Meknes|Bassatine|MA|2|||GMFF:50
GMFO|OUD|Oujda|Oujda Angads|MA|4|Ahl Angad
GMFZ||Taza||MA|1|||GMFF:101
GMMA|SMW|Smara||EH|3||GSMA
GMMB|GMD|Ben Slimane||MA|1|||GMMN:47
GMMD|BEM|Beni Mellal||MA|4|Oulad Yaich
GMME|RBA|Rabat|Rabat-Salé|MA|4
GMMG||Ouled Ben Anou Grichate|Ben Guerir Air Base|MA|1|||GMMX:60
GMMH|VIL|Dakhla||EH|4||GSVO
GMMI|ESU|Essaouira|Essaouira-Mogador|MA|3
GMML|EUN|El Aaiún|Laayoune Hassan I|EH|4||GSAI
GMMN|CMN|Casablanca|Mohammed V|MA|4
GMMO||Taroudant||MA|1|||GMAD:60
GMMP|NNA|Kenitra|Kenitra Air Base|MA|2||GMMY|GMME:31
GMMT||Casablanca|Casablanca Tit Mellil|MA|1|||GMMN:28
GMMW|NDR|Al Aaroui|Nador Al Aaroui|MA|4
GMMX|RAK|Marrakesh|Marrakesh Menara|MA|4
GMMZ|OZZ|Ouarzazate||MA|4
GMSL||Sidi Slimane||MA|1|||GMME:68
GMTA|AHU|Al Hoceima|Cherif Al Idrissi|MA|3
GMTN|TTU|Tétouan|Sania Ramel|MA|4
GMTT|TNG|Tangier|Tangier Ibn Battuta|MA|4
GOBD|DSS|Dakar|Blaise Diagne|SN|4
GODK|KDA|Kolda||SN|1|||GGOV:134
GOGG|ZIG|Ziguinchor||SN|3
GOGS|CSK|Cap Skirring||SN|3
GOOG||Linguère||SN|1|||GOBD:229
GOOK|KLC|Kaolack||SN|2|||GBYD:111
GOOY|DKR|Dakar|Léopold Sédar Senghor|SN|3|||GOBD:44
GOSM|MAX|Ouro Sogui||SN|2|||GAKD:241
GOSP|POD|Podor||SN|1|||GQNO:210
GOSR|RDT|Richard Toll||SN|1|||GQNO:211
GOSS|XLS|Saint Louis||SN|2|||GOBD:167
GOTB|BXE|Bakel||SN|2|||GAKD:122
GOTK|KGG|Kédougou||SN|2|||GAKD:230
GOTS|SMY|Simenti||SN|1|||GAKD:260
GOTT|TUD|Tambacounda||SN|2|||GAKD:257
GQNA|AEO|Aioun El Atrouss||MR|1
GQNB|OTL|Boutilimit||MR|1|||GQNO:159
GQNC|THI|Tichitt||MR|1
GQND|TIY|Tidjikja||MR|1
GQNE|BGH|Boghe|Abbaye|MR|1|||GQNO:265
GQNF|KFA|Kiffa||MR|1|||GAKD:234
GQNH|TMD|Timbedra||MR|1
GQNI|EMN|Néma||MR|1
GQNJ|AJJ|Akjoujt||MR|1|||GQNO:230
GQNK|KED|Kaédi||MR|1|||GAKD:293
GQNL|MOM|Moudjeria|Letfotar|MR|1
GQNM||Timbreda|Dahara|MR|1
GQNO|NKC|Nouakchott|Nouakchott–Oumtounsy|MR|4
GQNR||Rosso||MR|1|||GQNO:197
GQNS|SEY|Sélibaby||MR|1|||GAKD:116
GQNT|THT|Tamchakett||MR|1
GQPA|ATR|Atar||MR|2|||GQPZ:257
GQPF|FGD|Fderik||MR|1|||GQPZ:27
GQPP|NDB|Nouadhibou||MR|4
GQPT||Bir Moghrein||MR|1|||GMMA:172
GQPZ|OUZ|Zouérate|Tazadit|MR|3
GUBE||Beyla||GN|1
GUCY|CKY|Conakry|Ahmed Sékou Touré|GN|4
GUFA|FIG|Fria||GN|1|||GUCY:86
GUFH|FAA|Faranah||GN|1
GUGO||Banankoro|Gbenko|GN|1
GUKR||Port Kamsar|Kawass|GN|1|||GUCY:157
GUKU|KSI|Kissidougou||GN|1
GULB|LEK|Labé|Tata|GN|1|||GUCY:243
GUMA|MCA|Macenta||GN|1|||GLRB:266
GUNZ|NZE|Nzérékoré||GN|1|||GLRB:254
GUOK|BKJ|Boké|Boké Baralande|GN|1|||GUCY:171
GUSA||Sangarédi||GN|1|||GUCY:172
GUSB|SBI|Koundara|Sambailo|GN|1|||GGOV:260
GUSI|GII|Siguiri||GN|1|||GABS:184
GVAC|SID|Espargos|Amílcar Cabral|CV|4
GVBA|BVC|Rabil|Aristides Pereira|CV|4
GVMA|MMO|Vila do Maio|Maio|CV|3
GVMT|MTI|Vila do Mosteiros|Mosteiros|CV|1|||GVSF:23
GVNP|RAI|Praia|Nelson Mandela|CV|4
GVSF|SFL|São Filipe||CV|2
GVSN|SNE|Preguiça||CV|3
GVSV|VXE|São Pedro|Cesaria Evora|CV|4
GXUD|KNN|Kankan||GN|1|||GABS:270
HAAB|ADD|Addis Ababa|Addis Ababa Bole|ET|4
HAAD||Adaba||ET|1|||HALA:97
HAAL||Addis Ababa|Lideta Army|ET|1|||HAAB:9
HAAM|AMH|Arba Minch||ET|3
HAAX|AXU|Axum||ET|3
HABC|BCO|Jinka||ET|3||HAJK
HABD|BJR|Bahir Dar||ET|3
HABE|BEI|Beica||ET|1|||HASO:71
HADC|DSE|Dessie|Kombolcha|ET|2
HADD|DEM|Dembidollo||ET|2
HADM|DBM|Debre Markos||ET|2
HADO||Dodola||ET|1|||HALA:73
HADR|DIR|Dire Dawa|Aba Tenna Dejazmach Yilma|ET|4
HADT|DBT|Debre Tabor||ET|1|||HABD:81
HAFN|FNH|Fincha||ET|1|||HADM:91
HAGB|GOB|Goba|Robe|ET|1|||HALA:182
HAGH|GNN|Ghinnir||ET|1|||HALA:256
HAGL|GLC|Geladi||ET|1|||HCMR:116
HAGM|GMB|Gambela||ET|3
HAGN|GDQ|Azezo|Gondar|ET|3
HAGO|GDE|Gode||ET|3
HAGR|GOR|Gore||ET|1|||HADD:88
HAHM|QHR|Debre Zeyit|Harar Meda|ET|2|||HAAB:37
HAHU|HUE|Akwi|Humera|ET|2
HAJJ|JIJ|Jijiga|Gerad Wilwal|ET|4
HAJM|JIM|Jimma||ET|3
HAKD|ABK|Kebri Dahar||ET|3
HAKL|LFO|Kelafo|Kelafo East|ET|1|||HASL:65
HALA|AWA|Hawassa||ET|4
HALL|LLI|Girany Amba|Lalibela|ET|1|||HADC:126
HAMA|MKS|Mekane Selam||ET|1|||HADC:116
HAMJ||Maji|Tume|ET|1|||HABC:114
HAMK|MQX|Mekele|Mekele Alula Aba Nega|ET|3
HAMM|ETE|Metema||ET|1|||HAHU:126
HAMN|NDM|Mendi||ET|1|||HASO:63
HAMR|MUJ|Omo National Park|Mui River|ET|1|||HABC:91
HAMT|MTF|Mizan Teferi||ET|2
HANG|EGL|Negele Borana|Negele|ET|1|||HALA:248
HANJ|NEJ|Nejo|Nejjo|ET|1|||HASO:110
HANK|NEK|Nekemte||ET|1|||HAJM:154
HAPW|PWI|Pawe|Beles|ET|1|||HABD:104
HASD|SXU|Soddu||ET|1|||HALA:85
HASH||Sheikh Hussein||ET|1|||HADR:245
HASK|SKR|Shakiso||ET|1|||HAAM:158
HASL|HIL|Shilavo||ET|2
HASM|SZE|Semera||ET|2
HASO|ASO|Asosa||ET|3
HASR|SHC|Shire Inda Selassie||ET|2
HATP|TIE|Tippi||ET|2
HAWR|WRA|Warder||ET|1|||HASL:118
HBBA|BJM|Bujumbura|Bujumbura Melchior Ndadaye|BI|4
HBBE|GID|Gitega||BI|3
HBBK||Gihohi||BI|1|||HBBE:73
HBBO|KRE|Kirundo||BI|2
HCAD|AAD|Adado||SO|1|||HCMR:118
HCBA||Hafun|Hafun Airstrip|SO|1|||HCMF:248
HCBG||Hafun|Hafun Old Base Airstrip|SO|1|||HCMF:257
HCBU||Bu'aale||SO|1|||HKWJ:282
HCDM|||Dusomareb|SO|1|||HCMN:147
HCGR|GGR|Garowe||SO|2||HCMW
HCMA|ALU|Alula||SO|1|||HCMF:191
HCMB|BIB|Baidoa||SO|1|||HCMM:222
HCMC|CXN|Candala||SO|1|||HCMF:88
HCMD|BSY|Baardheere||SO|1|||HKWJ:255
HCME|HCM|Eyl|Eil|SO|1|||HCGR:143
HCMF|BSA|Bosaso|Bender Qassim|SO|4
HCMG|GSR|Gardo||SO|1|||HCGR:135
HCMH|HGA|Hargeisa|Egal|SO|4
HCMI|BBO|Berbera||SO|3
HCMJ|LGX|Luuq|Lugh Ganane|SO|1|||HAGO:262
HCMK|KMU|Kismayo||SO|2|||HKLU:270
HCMM|MGQ|Mogadishu|Aden Adde|SO|4||HCCM
HCMN|BLW|Beledweyne||SO|2
HCMO|CMO|Hobyo||SO|1|||HCMR:197
HCMR|GLK|Galcaio||SO|2
HCMS|CMS|Iskushuban||SO|1|||HCMF:158
HCMU|ERA|Erigavo||SO|1|||HCMF:204
HCMV|BUO|Burao||SO|1|||HCMI:117
HDAG||Assa-Gueyla||DJ|1|||HDAM:91
HDAM|JIB|Djibouti City|Djibouti-Ambouli|DJ|4
HDAS|AII|Ali-Sabieh||DJ|1|||HDAM:65
HDCH||Chabelley||DJ|1|||HDAM:11
HDDK||Dikhil||DJ|1|||HDAM:101
HDHE||Herkale||DJ|1|||HDAM:101
HDMO|MHI|Moucha Island|Moucha|DJ|1|||HDAM:21
HDOB|OBC|Obock||DJ|1|||HDAM:48
HDTJ|TDJ|Tadjoura||DJ|1|||HDAM:37
HEAL|DBB|El Alamein||EG|4
HEAR|AAC|El Arish||EG|4
HEAT|ATZ|Asyut||EG|4
HEAX|HBE|Alexandria||EG|4||HEBA
HEAZ||El Nozha|Almaza Air Force Base|EG|2|||HECA:4
HEBL|ABS|Abu Simbel||EG|3
HEBR|EES|Berenice Troglodytica|Berenice International Airport / Banas Cape Air Base|EG|3|||HEMA:196
HEBS||Bani Sweif|Bani Sweif Air Base|EG|2|||HESX:101
HECA|CAI|Cairo||EG|4
HECP|CCE|New Cairo|Capital|EG|3
HECW||Cairo|Cairo West Air Base|EG|2|||HESX:2
HEDK|DAK|Dakhla Oases|Dakhla Oasis|EG|1|||HEAT:271
HEGN|HRG|Hurghada||EG|4
HEGO||El Gouna|El Gouna Private|EG|1|||HEGN:25
HEGR|EGH|El Jora||EG|2|||HEAR:31
HEGS||Abu El Matamir|Jiyanklis Air Base|EG|2|||HEAX:49
HEIS||Al Ismailiyya|Al Ismailiyya Air Base|EG|2|||HECP:70
HEKG|UVL|Kharja Oases|El Kharja|EG|1|||HESG:151
HELX|LXR|Luxor||EG|4
HEMA|RMF|Marsa Alam||EG|4
HEMM|MUH|Marsa Matruh|Mersa Matruh|EG|4
HEMN|EMY|El Minya||EG|1|||HEAT:119
HEOC||6th of October|October|EG|1|||HESX:34
HEOW|GSQ|Sharq El Owainat|El Owainat East|EG|1|||HEBL:298
HEPS|PSD|Port Said||EG|4
HESC|SKV|Saint Catherine||EG|2|||HESH:85
HESG|HMB|Suhaj||EG|4||HEMK
HESH|SSH|Sharm El Sheikh||EG|4
HESN|ASW|Aswan||EG|4
HESX|SPX|Al Jiza|Sphinx|EG|4
HETB|TCP|Taba||EG|3
HETR|ELT|At Tur||EG|1|||HESH:78
HHAG||Agordat||ER|1|||HHAS:115
HHAK||Adi Keyh||ER|1|||HHAS:71
HHAL||Alghena||ER|1|||HHAS:231
HHAS|ASM|Asmara||ER|3
HHBA||Barentu||ER|1|||HASR:136
HHBL||Beilul||ER|1|||OYTZ:196
HHGU||Gura||ER|1|||HHAS:33
HHKN||Keren||ER|1|||HHAS:76
HHKT||Kerkebet||ER|1|||HSKA:148
HHMF||Mersa Fatuma|Fatuma|ER|1|||HHAS:157
HHMG||Mersa Gulbub|Gulbub Airstrip|ER|1|||HHAS:128
HHMS|MSW|Massawa||ER|2|||HHAS:65
HHNF||Nakfa||ER|1|||HHAS:160
HHOH||Omhajer||ER|1|||HAHU:61
HHSB|ASA|Assab||ER|2|||OYTZ:175
HHTS|TES|Tessenei||ER|1|||HSKA:49
HJAJ||Poktap|Ajuini Airstrip|SS|1|||HSSM:235
HJAK||Akobo||SS|1||HSAK|HAGM:176
HJAR|AEE|Adar|Adareil|SS|1|||HSSM:153
HJAW||Aweil||SS|1||HSAW|HSWW:136
HJAY|||Ayod Airstrip|SS|1|||HSSM:160
HJBB||Ibba|Ibba Airstrip|SS|1|||HJJJ:271
HJBR||Bor||SS|1||HSBR|HJJJ:147
HJBT||Rubkona|Bentiu|SS|1||HSBT|HSSM:206
HJDF||Duk Padiet|Duk Padiet Airstrip|SS|1|||HSSM:204
HJDK||Mareng|Duk Kwenyakwol Airstrip|SS|1|||HSSM:219
HJDP||Duk Payuel|Duk Payuel Airstrip|SS|1|||HSSM:232
HJJJ|JUB|Juba||SS|4||HSSJ
HJKJ||Kaujok|Kawjok|SS|1|||HSWW:62
HJKK||Kajo Keji||SS|1||HSKJ|HJJJ:113
HJKP||Kapoeta||SS|1||HSKP|HJJJ:220
HJKR||Kuron|Kuron Airstrip|SS|1|||HAMT:179
HJLK||Lankien|Lankien Airstrip|SS|1|||HSSM:123
HJLW||Kibbish|Lokwor|SS|1|||HABC:95
HJMD||Marida||SS|1||HSMD|HJJJ:239
HJMG||Mogok|Mogok Airstrip|SS|1|||HSSM:132
HJMI||Mundri West||SS|1|||HJJJ:149
HJMV||Mvolo||SS|1|||HJJJ:225
HJNM||Nimule||SS|1||HSNM|HUGU:90
HJNZ||Nzara||SS|1|||FZJH:215
HJPB||Pibor||SS|1||HSPI|HAGM:217
HJPG||Mabior|Panyagor|SS|1|||HJJJ:256
HJPH||Higleig|Paloich|SS|2||HSFA|HSSM:142
HJPJ||Pajut|Pajut Airstrip|SS|1|||HSSM:202
HJPO||Pochalla||SS|1||HSPA|HAGM:117
HJPR|||Pieri Airstrip|SS|1|||HSSM:174
HJPU||Pulturuk|Pulturuk Airstrip|SS|1|||HSSM:112
HJRB|RBX|Rumbek||SS|1||HSMK|HSWW:212
HJTB||Tumbura||SS|1||HSTU|HSWW:243
HJTR||Torit||SS|1||HSTR|HJJJ:119
HJWT||Waat|Waat Airstrip|SS|1|||HSSM:162
HJYB||Yambio||SS|1||HSYA|FZJH:215
HJYE||Yei||SS|1||HSYE|HUAR:122
HJYL||Yirol||SS|1||HSYL|HJJJ:223
HJYU||Yuai|Yuai Airstrip|SS|1|||HSSM:186
HKAC||Kone|Komofodo Galana Ranch|KE|1|||HKML:92
HKAD||Arabia||KE|1|||HKWJ:258
HKAL||Alale||KE|1|||HUSO:167
HKAM|ASV|Ol Tukai|Amboseli|KE|3
HKAR||Monire|Arroket|KE|1|||HKKI:71
HKAV||Voi|Sala Gate|KE|1|||HKML:100
HKBA||Busia||KE|1|||HKKI:90
HKBE||Bomet||KE|1|||HKMS:78
HKBI||Rongai|Barina|KE|1|||HKEL:105
HKBL||Balesa||KE|1|||HABC:250
HKBM|BMQ|Bamburi||KE|1|||HKMO:16
HKBN||Banisa||KE|1|||HKWJ:242
HKBR||Bura|Bura East|KE|1|||HKLU:167
HKBT||Bute|Bute Moyale|KE|1|||HKWJ:194
HKBU||Bungoma||KE|1|||HKKI:76
HKBZ||Buna||KE|1|||HKWJ:137
HKCC||Esiot|Cottars Mara|KE|1|||HKMS:48
HKCD||Makongeni|Crocodile Camp|KE|1|||HKML:97
HKCG||Chagaik|Chagaik Airstrip|KE|1|||HKKI:73
HKDA||Dadaab||KE|1|||HKWJ:188
HKED||Eldoret|Eldoret Boma|KE|1|||HKEL:15
HKEL|EDL|Eldoret||KE|4
HKEM||Embu||KE|1|||HKNL:76
HKEO||Cherubei|Mount Elgon Orchards Airstrip|KE|1|||HKEL:102
HKES|EYS|Eliye Springs||KE|1|||HABC:287
HKEU||Oloolaimutia|Oseur Airstrip|KE|1|||HKMS:53
HKEW||El Wak||KE|1|||HKWJ:147
HKFD||Ngare Ndare|Ngare Ndare Airstrip|KE|1|||HKNL:49
HKFG|KLK|Kalokol||KE|1|||HABC:264
HKFK||Pesi|Kifuku Estate Airstrip|KE|1|||HKNL:57
HKFT||Talek|Fig Tree|KE|1|||HKMS:21
HKFZ||Funzi Island||KE|1|||HKMO:62
HKGA|GAS|Garissa||KE|1|||HKMK:176
HKGE||Aitong|Ngerende|KE|1|||HKMS:41
HKGT||Garba Tula||KE|1|||HKMK:53
HKHB||Homa Bay||KE|1|||HKKI:62
HKHE||Lokichar||KE|1|||HKEL:225
HKHK|||Hall Hall|KE|1|||HKNL:111
HKHO|HOA|Hola||KE|1|||HKLU:130
HKHZ||Segera|Segera Ranch|KE|1|||HKNL:31
HKIC||Ilmeshuki|Intona Ranch|KE|1|||HKMS:37
HKIK||Olooloitikosh|Orly Airpark|KE|1|||HKNW:29
HKIS||Isiolo||KE|1|||HKMK:70
HKIU|KIU|Kiunga||KE|1|||HKLU:85
HKJK|NBO|Nairobi|Jomo Kenyatta|KE|4
HKKB||Kiambere||KE|1|||HKMK:96
HKKE|KEU|Keekorok||KE|1|||HKMS:34
HKKG|GGM|Kakamega||KE|1|||HKKI:40
HKKI|KIS|Kisumu||KE|4
HKKL|ILU|Kilaguni||KE|1|||HKAM:95
HKKM||Kakuma||KE|1|||HUSO:260
HKKR|KEY|Kericho||KE|1|||HKKI:66
HKKS||Kisii||KE|1|||HKKI:65
HKKT|KTL|Kitale||KE|2|||HKEL:70
HKKU||Kitui||KE|1|||HKJK:117
HKLA||Laisamis||KE|1|||HKMK:163
HKLG||Kachoda|Lokitaung|KE|1|||HABC:186
HKLK|LKG|Lokichogio||KE|2|||HUGU:278
HKLM||Timau|Lolomarik|KE|1|||HKNL:32
HKLO|LOK|Lodwar||KE|2|||HUSO:270
HKLR||Lokori||KE|1|||HKEL:194
HKLT||Oloitoktok||KE|1|||HKAM:42
HKLU|LAU|Lamu|Manda|KE|3
HKLX||Kisiki Cha Wangiriam|Lali Galana|KE|1|||HKML:94
HKLY|LOY|Loiyangalani||KE|1
HKMA|NDE|Mandera||KE|1|||HAGO:294
HKMB|RBT|Marsabit||KE|1|||HKWJ:242
HKMF|HKR|Mara Rianta|Mara North Conservancy Airstrip|KE|1|||HKMS:32
HKMG||Magadi||KE|1|||HKNW:92
HKMI||Kisima||KE|1|||HKNL:117
HKMJ||Migori||KE|1||HKMM|HKMS:66
HKMK|JJM|Meru-Kinna|Mulika Lodge|KE|2
HKML|MYD|Malindi||KE|3
HKMO|MBA|Mombasa|Moi|KE|4
HKMR||Mackinnon Road||KE|1|||HKMO:70
HKMS|MRE|Serena|Mara Serena Lodge Airstrip|KE|3
HKMT||Mtito Andei||KE|1|||HKAM:105
HKMU||Makindu||KE|1|||HKAM:75
HKMX||Lomolo||KE|1|||HKEL:93
HKMY|OYL|Moyale||KE|1|||HKWJ:222
HKNI|NYE|Nyeri||KE|1|||HKNL:34
HKNK|NUU|Nakuru|Nakuru Lanet|KE|2|||HKNL:102
HKNL|NYK|Gathiuru|Nanyuki Civil|KE|3
HKNO||Narok||KE|1|||HKMS:92
HKNW|WIL|Nairobi|Nairobi Wilson|KE|3
HKNY||Nanyuki|Laikipia Air Base|KE|2|||HKNL:10
HKOJ||Oljogi Ranch||KE|1|||HKNL:41
HKOK|OLX|Serena|Mara-Olkiombo|KE|1|||HKMS:11
HKOL||Oropoi||KE|1|||HUSO:246
HKOM|ANA|Lolgorien|Angama Mara|KE|1|||HKMS:16
HKON||Kone||KE|1|||HKML:155
HKOP||Loperot||KE|1|||HKEL:227
HKOR||Sigor||KE|1|||HKEL:133
HKOT||Naivasha|Longonot Fair Airstrip|KE|1|||HKNW:73
HKOY|OSJ|Mara Simba|Ol Seki Naboisho Airstrip|KE|1|||HKMS:41
HKRB||Aruba||KE|1|||HKMO:116
HKRE||Nairobi|Moi Air Base|KE|2|||HKNW:7
HKRK||Rusinga||KE|1|||HKKI:75
HKRL||Rumuruti|Rumuruti Airstrip|KE|1|||HKNL:67
HKRS||Kilgoris||KE|1|||HKMS:39
HKSB|UAS|Isiolo West|Samburu|KE|1|||HKMK:84
HKSF||Sosian|Kisima Ranch Airstrip|KE|1|||HKNL:75
HKSJ|MDR|Mara Rianta|Musiara Airstrip|KE|1|||HKMS:13
HKSL||Lamuria|Solio Ranch|KE|1|||HKNL:27
HKSO||Ol Maisor||KE|1|||HKNL:68
HKSP||Ololaimutiek|Siana Airstrip|KE|1|||HKMS:46
HKSV||Tsavo||KE|1|||HKAM:139
HKTB|KTJ|Kichwa Tembo||KE|1|||HKMS:16
HKTF||Taita Hills||KE|1|||HTKJ:131
HKTH||Kerio|Lothagah|KE|1
HKTI||Tinderet|Tinderet Teas Estate Airstrip|KE|1|||HKEL:49
HKTQ||Namelok|Tawi Lodge Airstrip|KE|1|||HKAM:22
HKTW||Nasolot|Turkwel Gorge|KE|1|||HKEL:167
HKUK|UKA|Ukunda|Ukunda Airstrip|KE|1||HKKA|HKMO:29
HKUR||Kulalu|Kulalu Ranch|KE|1|||HKML:80
HKVO||Voi||KE|1|||HKMO:139
HKWE||Webuye||KE|1|||HKEL:61
HKWJ|WJR|Wajir||KE|3
HKWY|KWY|Kiwayu||KE|2|||HKLU:54
HKZF||Mfangano Island|Mfangano|KE|1|||HKKI:85
HKZM||Moi's Bridge|Maji Mazuri|KE|1|||HKEL:54
HKZT||North Horr|Beverley|KE|1|||HABC:276
HLAM||Amal V12||LY|1
HLBD||Beda M3|Beda|LY|1|M-3
HLBK||Kambut||LY|1|||HEMM:254
HLBS|||Booster|LY|1
HLBU||Bombah||LY|2|||HLLQ:115
HLCH||Taramhe|El Sherara Field|LY|1|||HLLS:228
HLDB||Zillah|Ghani Field|LY|1
HLFD||Zillah|Fidda Oilfield|LY|1
HLFE|||El Feel|LY|1|||HLLS:263
HLFL|||Bu Attifel|LY|1
HLGD|SRX|Sirt|Sirt International Airport / Ghardabiya Airbase|LY|3|||HLMS:202
HLGL|||Warehouse 59e|LY|1
HLGT|GHT|Ghat||LY|2|||DAAJ:118
HLHB|||Hateiba|LY|1|||HLLB:269
HLHM|||Hamada-Nc5|LY|1|||HLLM:255
HLJF|||Al Jufra|LY|1|||HLLS:288
HLKF|AKF|Kufra||LY|3
HLLB|BEN|Benina||LY|4
HLLM|MJI|Tripoli|Mitiga|LY|4
HLLQ|LAQ|Al Albraq|Al Abraq|LY|4
HLLS|SEB|Sabha||LY|3
HLMB|LMQ|Marsa al Brega||LY|2|||HLLB:202
HLMJ||Al Marj|Elmarj|LY|1|||HLLB:74
HLML|||Messla-5alv|LY|1
HLMS|MRA|Misrata||LY|2
HLNF||Ras Lanuf||LY|1|||HLLB:243
HLNM|||Hamada-Nc8|LY|1
HLNR|NFR|Nafurah 1||LY|1
HLON|HUQ||Hon|LY|1|||HLLS:278
HLRA||Dahra||LY|1
HLRF|||Jaref|LY|1|||HLMS:179
HLRG||Adjabiya|Raguba|LY|1
HLSA||Sarir||LY|1|C-4
HLSB|||Sabah|LY|1
HLSH|||Sahil|LY|1|||HLLB:284
HLSM|||Samah Warehouse 59L|LY|1
HLTD|LTD|Ghadames||LY|3
HLTM||Tamanhint||LY|1|||HLLS:33
HLTQ|TOB|Adam|Tobruk|LY|1|||HLLQ:210
HLTS|||Tebesty-V9|LY|1
HLUB|QUB|Ubari||LY|1|||HLLS:170
HLWA||Warehouse 59A||LY|1
HLWD||Bani Waled||LY|1|||HLMS:123
HLWF|||Wafa|LY|1|||DAUZ:104
HLWN|||Waddan|LY|1|||HLLS:291
HLZA||Zillah|Zella 74|LY|1
HLZG||Oxy A 103||LY|1
HLZN|ZIS|Zintan|Alzintan|LY|1|||HLLM:158
HLZT||Adjabiya|Zelten C6 Airstrip|LY|1
HLZU||Ajdabiya|Zuetina|LY|1|||HLLB:138
HLZW|WAX|Zuwarah||LY|1|||HLLM:119
HRYG|GYI|Gisenyi||RW|2|||FZNA:3
HRYI|BTQ|Butare||RW|1|||HBBO:40
HRYN||Nemba||RW|1|||HBBO:26
HRYO||Gabiro||RW|1|||HRYR:54
HRYR|KGL|Kigali||RW|4
HRYU|RHG|Ruhengeri||RW|1|||HUKI:26
HRZA|KME|Kamembe||RW|3
HSAT|ATB|Atbara||SD|1|||HSSK:285
HSCG||Carthago||SD|1|||HSPN:80
HSDB|EDB|Al Dabbah||SD|1|||HSDN:138
HSDN|DOG|Dongola||SD|3
HSDZ|RSS|Ad Damazin|Damazin|SD|1|||HASO:198
HSFS|ELF|El Fasher||SD|3
HSGG|DNX|Dinder|Galegu|SD|1|||HAHU:244
HSGN|EGN|Geneina||SD|1
HSGO||Gogrial||SD|1|||HSDN:245
HSHG|HEG|Heglig||SD|1|||HSSM:252
HSKA|KSL|Kassala||SD|3
HSKG|GBU|Khashm El Girba||SD|1|||HSKA:71
HSKN||Sifeiya|Kenana|SD|1|||HSSK:285
HSLI|KDX|Kadugli||SD|1|||HSOB:231
HSMN|MWE|Merowe||SD|2|||HSDN:168
HSMR||Merowe|Merowe Town|SD|1|||HSDN:166
HSND||Shendi||SD|1|||HSSK:156
HSNH|NUD|En Nahud||SD|1|||HSOB:203
HSNN|UYL|Nyala||SD|3
HSNW|NHF|New Halfa||SD|1|||HSKA:65
HSOB|EBD|El-Obeid||SD|3
HSPN|PZU|Port Sudan|Port Sudan New|SD|4
HSRJ||Raga||SS|1|||HSWW:265
HSRN||Renk||SS|1|||HSSM:264
HSSG||Geneina|Sabera Geneina|SD|2
HSSK|KRT|Khartoum||SD|4||HSSS
HSSM|MAK|Malakal||SS|3
HSSP||Port Sudan|Port Sudan Air Base|SD|1|||HSPN:16
HSSW|WHF|Wadi Halfa||SD|1|||HEBL:64
HSTO||Tonj||SS|1|||HSWW:91
HSWW|WUU|Wau||SS|3
HSZA|ZLX|Zalingei||SD|1|||HSNN:181
HTAG||Somangira|Amani Beach|TZ|1|||HTDA:34
HTAR|ARK|Arusha||TZ|3
HTBB||Selous Game Reserve|Kibambawe Airstrip|TZ|1|||HTDA:165
HTBH||Biharamulo||TZ|1|||HBBO:142
HTBN||Bubada|Bulyanhulu|TZ|1|||HTMW:101
HTBO||Beho Beho|Beho Beho Airstrip|TZ|1|||HTDA:166
HTBS||Mbesa Mission|Mbesa|TZ|1|||FQLC:291
HTBU|BKZ|Bukoba||TZ|2
HTCH||Chunya||TZ|1|||HTGW:44
HTDA|DAR|Dar es Salaam|Julius Nyerere|TZ|4||HTJN
HTDO|DOD|Dodoma||TZ|3
HTEN||Endulen||TZ|1|||HTSN:95
HTFE||Ibolero|Fish Eagle|TZ|1|||HTTB:175
HTFI||Fort Ikoma||TZ|1|||HTSN:47
HTGE|GTC|Chato District|Chato/Geita|TZ|1|||HTMW:140
HTGP|||Golden Pride Mines|TZ|1|||HTSY:65
HTGR|GTZ|Grumeti Game Reserve|Kirawira B|TZ|1|||HTSN:74
HTGW|MBI|Mbeya|Songwe|TZ|3
HTHY||Haidom||TZ|1|||HTSY:180
HTIR|IRI|Nduli|Iringa|TZ|2|||HTDO:167
HTIY||Inyonga||TZ|1|||HTTB:202
HTKA|TKQ|Kigoma||TZ|2
HTKB||Kibondo||TZ|1|||HBBE:83
HTKC|||Klein's Camp|TZ|1|||HKMS:51
HTKD||Kondoa||TZ|1|||HTDO:142
HTKI|KIY|Kilwa Masoko|Kilwa|TZ|1|||HTMA:112
HTKJ|JRO|Arusha|Kilimanjaro|TZ|4
HTKL||Kirondatal||TZ|1|||HTSY:122
HTKN|||Kasense|TZ|1|||HTTB:182
HTKO||Kongwa||TZ|1|||HTDO:73
HTKS||Kilosa||TZ|1|||HTDO:158
HTKT||Kilimatinde||TZ|1|||HTDO:95
HTKU||Kasulu||TZ|1|||HTKA:61
HTLD||Loliondo||TZ|1|||HTSN:91
HTLI|LDI|Lindi||TZ|1|||HTMT:71
HTLL||Liuli||TZ|1|||FQLC:249
HTLM|LKY|Lake Manyara National Park|Lake Manyara|TZ|2|||HTAR:90
HTMA|MFA|Kilindoni|Mafia|TZ|2
HTMB||Mbeya||TZ|1|||HTGW:21
HTMC||Nyalikungu|Maswa Airstrip|TZ|1|||HTSY:57
HTMD|MWN|Mwadui||TZ|1|||HTSY:16
HTME||Matambwe||TZ|1|||HTDA:175
HTMF||Mufindi||TZ|1|||HTGW:224
HTMG||Morogoro||TZ|1|||HTDA:172
HTMH||Makau||TZ|1|||HTSN:101
HTMI|XMI|Masasi||TZ|1|||HTMT:161
HTMK||Mikumi||TZ|1|||HTDO:198
HTML||Mahale|Mahale Airstrip|TZ|1|||FZRF:59
HTMN||Manyoni||TZ|1|||HTDO:115
HTMO||Mombo||TZ|1|||HTTG:95
HTMP|NPY|Mpanda||TZ|1|||FZRF:210
HTMR||Msembe||TZ|1|||HTDO:192
HTMS|QSI|Moshi||TZ|1|||HTKJ:29
HTMT|MYW|Mtwara||TZ|3
HTMU|MUZ|Musoma||TZ|2
HTMV||Mvumi||TZ|1|||HTDO:28
HTMW|MWZ|Mwanza||TZ|4
HTMX||Mpwapwa||TZ|1|||HTDO:83
HTNA|NCH|Nachingwea||TZ|1|||HTMT:153
HTND||Ndutu||TZ|1|||HTSN:66
HTNG||Ngerengere|Ngerengere Air Force Base|TZ|1|||HTDA:118
HTNJ|JOM|Njombe||TZ|1|||HTGW:174
HTNR||Ngara||TZ|1|||HBBO:68
HTOL|||Oltipesi|TZ|1|||HTAR:102
HTPE|PMA|Chake Chake|Pemba|TZ|2|||HTTG:84
HTRU|GIT|Geita|Mchauru|TZ|1|||HTMW:94
HTSD||Singida||TZ|1|||HTDO:189
HTSE||Same||TZ|1|||HTKJ:106
HTSH||Mafinga||TZ|1|||HTGW:232
HTSN|SEU|Seronera||TZ|2
HTSO|SGX|Songea||TZ|1|||FQLC:290
HTSS||Songo Songo Island|Songo Songo Airstrip|TZ|1|||HTMA:70
HTSU|SUT|Sumbawanga||TZ|1|||HTGW:212
HTSY|SHY|Shinyanga||TZ|2
HTTB|TBO|Tabora||TZ|2
HTTG|TGT|Tanga||TZ|3
HTTU||Tunduru||TZ|1
HTUK||Ukerewe|Nansio|TZ|1|||HTMW:47
HTUR||Urambo||TZ|1|||HTTB:83
HTUT||Utete||TZ|1|||HTMA:100
HTUV||Uvinza||TZ|1|||HTKA:85
HTWK||West Kilimanjaro||TZ|1|||HTKJ:43
HTXX||Bagamoyo|Sanzale|TZ|1|||HTZA:47
HTZA|ZNZ|Zanzibar|Abeid Amani Karume|TZ|4||HTAK
HTZW||Siwandu||TZ|1|||HTDA:149
HUAJ||Adjumani||UG|1|||HUGU:82
HUAR|RUA|Arua||UG|3
HUBU||Bundibugyo||UG|1|||FZKA:102
HUEN|EBB|Entebbe||UG|4
HUFP||Fort Portal||UG|1|||FZKA:96
HUGG||Bujenje|Bugungu|UG|1|||HUGU:104
HUGU|ULU|Gulu||UG|3
HUJI|JIN|Jinja||UG|1|||HUEN:95
HUKB|||Kabale|UG|1|||HUKI:27
HUKD||Kidepo Valley National Park|Kidepo|UG|1|||HUGU:193
HUKI|KXO|Kisoro||UG|2
HUKJ|KJJ|Kampala|Kajjansi|UG|1|||HUEN:21
HUKK||Kakira||UG|1|||HUEN:106
HUKO||Kotido||UG|1|||HUSO:147
HUKS|KSE|Kasese||UG|1|||KHX:109
HUKT||Kitgum||UG|1|||HUGU:87
HULI||Lira||UG|1|||HUGU:95
HUMA|MBQ|Mbarara||UG|1|||KHX:102
HUMI|KCU|Masindi||UG|1|||HUGU:131
HUMO||Moroto||UG|1|||HUSO:138
HUMW||Mweya||UG|1|||KHX:62
HUMY|OYG|Moyo||UG|1|||HUGU:109
HUPA|PAF|Pakuba||UG|1|||HUGU:101
HUSO|SRT|Soroti||UG|3
HUTO|TRY|Tororo||UG|1|||HKKI:106
KAAA||Lincoln|Logan County|US|1|||KSPI:46
KAAF|AAF|Apalachicola|Apalachicola Regional|US|1||KAQQ|KTLH:99
KAAO||Wichita|Colonel James Jabara|US|1|||KICT:21
KAAS||Campbellsville|Taylor County|US|1|||KLEX:97
KAAT||Alturas|Alturas Municipal|US|1|||KRDD:181
KABE|ABE|Allentown/Bethlehem|Lehigh Valley|US|3
KABI|ABI|Abilene|Abilene Regional|US|3
KABQ|ABQ|Albuquerque|Albuquerque International Sunport|US|4
KABR|ABR|Aberdeen|Aberdeen Regional|US|3
KABY|ABY|Albany|Southwest Georgia Regional|US|3
KACB|ACB|Bellaire|Antrim County|US|1|||KTVC:41
KACJ||Americus|Jimmy Carter Regional|US|1|||KABY:64
KACK|ACK|Nantucket|Nantucket Memorial|US|3
KACP||Oakdale|Allen Parish|US|1|||KAEX:65
KACQ||Waseca|Waseca Municipal|US|1|||KRST:86
KACT|ACT|Waco|Waco Regional|US|3
KACV|ACV|Arcata/Eureka|California Redwood Coast-Humboldt County|US|3
KACY|ACY|Atlantic City||US|3
KACZ||Wallace|Henderson Field|US|1|||KOAJ:38
KADC||Wadena|Wadena Municipal|US|1|||KBRD:83
KADF||Arkadelphia|Dexter B Florence Memorial Field|US|1|||KHOT:42
KADG|ADG|Adrian|Lenawee County|US|1|||KTOL:38
KADH|ADT|Ada|Ada Regional|US|2|||KOKC:107
KADM|ADM|Ardmore|Ardmore Municipal|US|1|||KLAW:131
KADS|ADS|Dallas|Addison|US|1|||KDAL:14
KADT||Atwood|Atwood-Rawlins City-County|US|1|||KMCK:56
KADU||Audubon|Audubon County|US|1|||KOMA:92
KADW|ADW|Camp Springs|Joint Base Andrews|US|2|||KDCA:15
KAEG||Albuquerque|Double Eagle II|US|2|||KABQ:21
KAEJ||Buena Vista|Central Colorado Regional|US|1|||KGUC:77
KAEL|AEL|Albert Lea|Albert Lea Municipal|US|1|||KMCW:58
KAEX|AEX|Alexandria||US|3
KAFF|AFF|Colorado Springs|USAF Academy|US|1|||KCOS:21
KAFJ|WSG|Washington|Washington County|US|1|||KPIT:40
KAFK||Nebraska City|Nebraska City Municipal|US|1|||KOMA:77
KAFN|AFN|Jaffrey|Jaffrey Airfield Silver Ranch|US|1|||KMHT:48
KAFO|AFO|Afton|Afton Municipal|US|1|||KJAC:101
KAFP||Wadesboro|Anson County Airport - Jeff Cloud Field|US|1|||KJQF:70
KAFW|AFW|Fort Worth|Perot Field/Fort Worth Alliance|US|2|||KDFW:28
KAGC|AGC|Pittsburgh|Allegheny County|US|2|||KPIT:30
KAGO|AGO|Magnolia|Magnolia Municipal Airport / Ralph C Weiser Field|US|1|||KELD:38
KAGR||Avon Park|MacDill Air Force Base Auxiliary Field|US|1|||KLAL:76
KAGS|AGS|Augusta|Augusta Regional At Bush Field|US|3
KAGZ||Wagner|Wagner Municipal|US|1|||KFSD:138
KAHC|AHC|Herlong|Amedee Army Air Field|US|1|||KRNO:91
KAHH|AHH|Amery|Amery Municipal|US|1|||KMSP:80
KAHN|AHN|Athens|Athens Ben Epps|US|2|||KPDK:90
KAHQ||Wahoo|Wahoo Municipal|US|1|||KLNK:46
KAIA|AIA|Alliance|Alliance Municipal|US|3
KAIB||Nucla|Hopkins Field|US|1|||KTEX:66
KAID|AID|Anderson|Anderson Municipal Darlington Field|US|1|||KIND:73
KAIG||Antigo|Langlade County|US|1|||KRHI:60
KAIK|AIK|Aiken|Aiken Regional|US|1|||KAGS:40
KAIO|AIO|Atlantic|Atlantic Municipal|US|1|||KOMA:72
KAIT||Aitkin|Aitkin Municipal Airport Steve Kurtz Field|US|1|||KBRD:38
KAIV|AIV|Aliceville|George Downer|US|1|||KGTR:53
KAIZ|AIZ|Kaiser Lake Ozark|Lee C Fine Memorial|US|1|||KTBN:53
KAJG||Mount Carmel|Mount Carmel Municipal|US|1|||KEVV:66
KAJO||Corona|Corona Municipal|US|1|||KONT:18
KAJR||Cornelia|Habersham County|US|1|||KPDK:98
KAJZ||Delta|Blake Field|US|1|||KMTJ:34
KAKH||Gastonia|Gastonia Municipal|US|1|||KCLT:19
KAKO|AKO|Akron|Colorado Plains Regional|US|1|||KDEN:129
KAKQ||Wakefield|Wakefield Municipal|US|1|||KPHF:48
KAKR|AKC|Akron|Akron Fulton|US|2|||KCAK:14
KALB|ALB|Albany||US|4
KALI|ALI|Alice||US|2|||KCRP:52
KALM|ALM|Alamogordo|Alamogordo White Sands Regional|US|2|||KLRU:106
KALN|ALN|Alton/St Louis|St Louis Regional|US|2|||KSTL:32
KALO|ALO|Waterloo|Waterloo Regional|US|3
KALS|ALS|Alamosa|San Luis Valley Regional Airport/Bergman Field|US|3
KALW|ALW|Walla Walla|Walla Walla Regional|US|3
KALX|ALX|Alexander City|Thomas C Russell Field|US|1|||KMGM:79
KAMA|AMA|Amarillo|Rick Husband Amarillo|US|3
KAMG||Alma|Bacon County|US|1|||KBQK:103
KAMN|AMN|Alma|Gratiot Community|US|1|||KMBS:54
KAMT||West Union|Alexander Salamon|US|1|||KLUK:79
KAMW|AMW|Ames|Ames Municipal|US|1|||KDSM:51
KANB|ANB|Anniston|Anniston Regional|US|2|||KBHM:83
KAND|AND|Anderson|Anderson Regional|US|2|||KGSP:63
KANE||Minneapolis|Anoka County-Blaine|US|1|Janes Field||KMSP:29
KANJ||Sault Ste Marie|Sault Ste Marie Municipal Airport Sanderson Field|US|1|||CYAM:11
KANK|SLT|Salida|Salida Airport - Harriet Alexander Field|US|1|||KGUC:77
KANP|ANP|Annapolis|Lee|US|1|||KBWI:27
KANQ|ANQ|Angola|Tri State Steuben County|US|1|||KFWA:74
KANW|ANW|Ainsworth|Ainsworth Regional|US|1|||KLBF:171
KANY|ANY|Anthony|Anthony Municipal|US|1|||KICT:79
KAOC||Arco|Arco Butte County|US|1|||KSUN:78
KAOH|AOH|Lima|Lima Allen County|US|1|||KDAY:91
KAOO|AOO|Altoona|Altoona Blair County|US|3
KAOV||Ava|Ava Bill Martin Memorial|US|1|||KBBG:67
KAPA|APA|Denver|Centennial|US|2|||KDEN:36
KAPC|APC|Napa|Napa County|US|1|||KOAK:55
KAPF|APF|Naples|Naples Municipal|US|2|||KRSW:43
KAPG|APG|Aberdeen|Phillips Army Air Field|US|2|||KILG:54
KAPH|APH|Bowling Green|Mary Walker LZ|US|1|||KRIC:63
KAPN|APN|Alpena|Alpena County Regional|US|3
KAPS||Reserve|Port of South Louisiana Executive Regional|US|1|||KMSY:32
KAPT|APT|Jasper|Marion County Airport - Brown Field|US|1|||KCHA:35
KAPV|APV|Apple Valley||US|1|||KSBD:53
KAPY||Zapata|Zapata County|US|1|||MMNL:62
KAQO||Llano|Llano Municipal|US|1|||KAUS:116
KAQP||Appleton|Appleton Municipal|US|1|||KATY:97
KAQR||Atoka|Atoka Municipal|US|1|||KOKC:172
KAQW||North Adams|Harriman and West|US|1|||KALB:52
KAQX||Allendale|Allendale County|US|1|||KAGS:77
KARA|ARA|New Iberia|Acadiana Regional|US|2|||KLFT:21
KARB|ARB|Ann Arbor|Ann Arbor Municipal|US|1|||KDTW:32
KARG|ARG|Walnut Ridge|Walnut Ridge Regional|US|1|||KJBR:41
KARM|WHT|Wharton|Wharton Regional|US|1|||KVCT:87
KARR|AUZ|Chicago/Aurora|Aurora Municipal|US|1|||KORD:53
KART|ART|Watertown||US|3
KARV|ARV|Woodruff|Lakeland Airport Noble F Lee Memorial Field|US|1|||KRHI:39
KARW|BFT|Beaufort|Beaufort Executive|US|1|||KHXD:22
KASD||Slidell||US|1|||KMSY:58
KASE|ASE|Aspen|Aspen-Pitkin County Airport|US|3|Sardy Field
KASG|SPZ|Springdale|Springdale Municipal|US|1|||KXNA:21
KASH|ASH|Nashua|Nashua Airport / Boire Field|US|1|||KMHT:18
KASJ||Aulander|Tri-County Airport at Henry Joyner Field|US|1|||KPGV:76
KASL|ASL|Marshall|Harrison County|US|1|||KGGG:41
KASN|ASN|Talladega|Talladega Municipal|US|1|||KBHM:65
KAST|AST|Astoria|Astoria Regional|US|2|||KOLM:117
KASW||Warsaw|Warsaw Municipal|US|1|||KSBN:62
KASX|ASX|Ashland|John F Kennedy Memorial|US|1|||KIWD:60
KASY|ASY|Ashley|Ashley Municipal|US|1|||KABR:96
KATA||Atlanta|Hall Miller Municipal|US|1|||KTXK:43
KATL|ATL|Atlanta|Hartsfield Jackson Atlanta|US|4
KATS|ATS|Artesia|Artesia Municipal|US|1|||KROW:50
KATW|ATW|Appleton||US|3
KATY|ATY|Watertown|Watertown Regional|US|3
KAUG|AUG|Augusta|Augusta State|US|3
KAUH||Aurora|Aurora Municipal Al Potter Field|US|1|||KGRI:28
KAUM|AUM|Austin|Austin Municipal|US|1|||KRST:44
KAUN|AUN|Auburn|Auburn Municipal|US|1|||KSMF:53
KAUO|AUO|Auburn|Auburn University Regional|US|1|||KCSG:48
KAUS|AUS|Austin|Austin Bergstrom|US|4||KBSM
KAUW|AUW|Wausau|Wausau Downtown|US|2|||KCWA:17
KAVC||Brodnax|Mecklenburg Brunswick Regional|US|1|||KRDU:111
KAVK||Alva|Alva Regional|US|1|||KICT:147
KAVL|AVL|Asheville|Asheville Regional|US|3
KAVO|AVO|Avon Park|Avon Park Executive|US|1|||KLAL:66
KAVP|AVP|Wilkes-Barre/Scranton||US|3
KAVQ|AVW|Marana|Marana Regional|US|1|||KTUS:42
KAVX|AVX|Avalon|Catalina|US|1|||KLGB:52
KAWG||Washington|Washington Municipal|US|1|||KCID:68
KAWM|AWM|West Memphis|West Memphis Municipal|US|1|||KMEM:26
KAWO||Arlington|Arlington Municipal|US|3
KAXA|AXG|Algona|Algona Municipal|US|1|||KFOD:59
KAXH||Rosharon|Houston Southwest|US|1|||KHOU:25
KAXN|AXN|Alexandria|Chandler Field|US|2|||KSTC:110
KAXQ||Clarion|Clarion County|US|1|||KDUJ:46
KAXS|AXS|Altus|Altus Quartz Mountain Regional|US|1|||KLAW:86
KAXV|AXV|Wapakoneta|Neil Armstrong|US|1|||KDAY:66
KAXX|AXX|Angel Fire||US|1|||KSKX:35
KAYS|AYS|Waycross|Waycross Ware County|US|1|||KBQK:88
KAYX|TUH|Manchester|Arnold Air Force Base|US|1|||KCHA:89
KAZC||Colorado City|Colorado City Municipal|US|1|||KSGU:45
KAZE||Hazlehurst||US|1|||KMCN:130
KAZO|AZO|Kalamazoo|Kalamazoo/Battle Creek|US|3
KAZU||Fort Chaffee|Arrowhead Assault Strip|US|1|||KFSM:15
KBAB|BAB|Beale Air Force Base||US|2|||KSMF:51
KBAC||Valley City|Barnes County Municipal|US|1|||KJMS:50
KBAD|BAD|Bossier City|Barksdale Air Force Base|US|2|||KSHV:17
KBAF|BAF|Westfield|Westfield-Barnes Regional|US|2|||KBDL:24
KBAK|CLU|Columbus|Columbus Municipal|US|2|||KIND:61
KBAM|BAM|Battle Mountain||US|1|||KEKO:95
KBAX||Bad Axe|Huron County Memorial|US|1|||KMBS:92
KBAZ||New Braunfels|New Braunfels National|US|2|||KSAT:45
KBBB|BBB|Benson|Benson Municipal|US|1|||KSTC:126
KBBD|BBD|Brady|Curtis Field|US|2|||KSJT:113
KBBG|BKG|Branson||US|3
KBBP|BTN|Bennettsville|Marlboro County Jetport - H E Avent Field|US|1|||KFLO:49
KBBW|BBW|Broken Bow|Broken Bow Municipal|US|1|||KLBF:94
KBCB|BCB|Blacksburg|Virginia Tech Montgomery Executive|US|1|||KROA:40
KBCE|BCE|Bryce Canyon||US|2|||KCDC:84
KBCK||Black River Falls|Black River Falls Area|US|1|||KLSE:52
KBCR||Bonifay|Tri-County|US|1|||KDHN:55
KBCT|BCT|Boca Raton||US|2|||KDJT:34
KBDE|BDE|Baudette||US|2|||CYAG:86
KBDG|BDG|Blanding|Blanding Municipal|US|1|||KCEZ:82
KBDH|ILL|Willmar|Willmar Municipal Airport John L Rice Field|US|1|2006||KSTC:96
KBDJ||Boulder Junction|Boulder Junction Payzer|US|1|||KIWD:57
KBDL|BDL|Hartford|Bradley|US|4
KBDN||Bend|Bend Municipal|US|1||KAEB|KRDM:18
KBDQ||Morrilton|Morrilton Municipal|US|1|||KLIT:64
KBDR|BDR|Bridgeport|Igor I Sikorsky Memorial|US|2|||KHVN:23
KBDU|WBU|Boulder|Boulder Municipal|US|1|||KDEN:51
KBEA||Beeville|Beeville Municipal|US|1|||KCRP:72
KBEC|BEC|Wichita|Beech Factory|US|1|||KICT:19
KBED|BED|Bedford|Laurence G Hanscom Field|US|3|||KBOS:26
KBEH|BEH|Benton Harbor|Southwest Michigan Regional|US|1|||KSBN:48
KBFA||Boyne Falls|Boyne Mountain|US|1|||KPLN:46
KBFD|BFD|Bradford|Bradford Regional|US|3
KBFE||Brownfield|Terry County|US|1|||KLBB:64
KBFF|BFF|Scottsbluff|Western Neb. Rgnl/William B. Heilig|US|3
KBFI|BFI|Seattle|King County International Airport - Boeing Field|US|3
KBFK||Buffalo|Buffalo Municipal|US|1|||KDDC:105
KBFL|BFL|Bakersfield|Meadows Field|US|3
KBFM|BFM|Mobile|Mobile Downtown|US|2|||KMOB:18
KBFR|BFR|Bedford|Virgil I Grissom Municipal|US|1|||KSDF:97
KBFZ||Albertville|Albertville Regional Airport/Thomas J Brumlik Field|US|1|||KHSV:66
KBGD|BGD|Borger|Hutchinson County|US|1|||KAMA:61
KBGE|BGE|Bainbridge|Decatur County Industrial Air Park|US|1|||KTLH:69
KBGF||Winchester|Winchester Municipal|US|1|||KCHA:80
KBGM|BGM|Binghamton|Greater Binghamton/Edwin A Link field|US|3
KBGR|BGR|Bangor||US|3
KBHB|BHB|Bar Harbor|Hancock County-Bar Harbor|US|3
KBHC||Baxley|Baxley Municipal|US|1|||KBQK:101
KBHK||Baker|Baker Municipal|US|1|||KGDV:97
KBHM|BHM|Birmingham|Birmingham-Shuttlesworth|US|4
KBID|BID|Block Island|Block Island State|US|2
KBIE|BIE|Beatrice|Beatrice Municipal|US|1|||KLNK:60
KBIF|BIF|Fort Bliss/El Paso|Biggs Army Air Field|US|2|Fort Bliss||KELP:4
KBIH|BIH|Bishop|Eastern Sierra Regional|US|3
KBIJ||Blakely|Early County|US|1|||KDHN:53
KBIL|BIL|Billings|Billings Logan|US|3
KBIS|BIS|Bismarck|Bismarck Municipal|US|3
KBIV||Holland|West Michigan Regional|US|1|||KMKG:49
KBIX|BIX|Biloxi|Keesler Air Force Base|US|2|||KGPT:14
KBJC|BJC|Denver|Rocky Mountain Metropolitan|US|3|||KDEN:38
KBJI|BJI|Bemidji|Bemidji Regional|US|2|||KTVF:112
KBJJ|BJJ|Wooster|Wayne County|US|1|||KCAK:38
KBKD|BKD|Breckenridge|Stephens County|US|1|||KMWL:78
KBKE|BKE|Baker City|Baker City Municipal|US|2|||KPDT:125
KBKF|BFK|Aurora|Buckley Space Force Base|US|2|||KDEN:19
KBKL|BKL|Cleveland|Burke Lakefront|US|2|||KCLE:18
KBKN|BWL|Blackwell|Blackwell Tonkawa Municipal|US|1|||KSWO:69
KBKS||Falfurrias|Brooks County|US|1|||KCRP:88
KBKT|BKT|Blackstone|Allen C Perkinson Blackstone Army Air Field|US|1|||KRIC:74
KBKV||Brooksville|Brooksville–Tampa Bay Regional|US|1|||KTPA:55
KBKW|BKW|Beaver|Raleigh County Memorial|US|3
KBKX|BKX|Brookings|Brookings Regional|US|1|||KATY:73
KBLF|BLF|Bluefield|Mercer County|US|2|||KBKW:55
KBLH|BLH|Blythe||US|2|||KHII:111
KBLI|BLI|Bellingham||US|3
KBLM|BLM|Belmar/Farmingdale|Monmouth Executive|US|1|||KEWR:56
KBLU|BLU|Emigrant Gap|Blue Canyon Nyack|US|1|||KTRK:49
KBLV|BLV|Belleville|Scott AFB/Midamerica|US|3
KBMC|BMC|Brigham City|Brigham City Regional|US|1|||KOGD:40
KBMG|BMG|Bloomington|Monroe County|US|2|||KIND:69
KBMI|BMI|Bloomington/Normal|Central Illinois Regional Airport at Bloomington-Normal|US|3
KBML|BML|Berlin|Berlin Regional|US|1|||KAUG:113
KBMQ||Burnet|Burnet Municipal Airport/Kate Craddock Field|US|1|||KAUS:82
KBMT|BMT|Beaumont|Beaumont Municipal|US|1|||KBPT:23
KBNA|BNA|Nashville||US|4
KBNG|BNG|Banning|Banning Municipal|US|1|||KPSP:33
KBNL|BNL|Barnwell|Barnwell Regional|US|1|||KAGS:55
KBNO|BNO|Burns|Burns Municipal|US|2|||KRDM:191
KBNW|BNW|Boone|Boone Municipal|US|1|||KDSM:59
KBOI|BOI|Boise|Boise Air Terminal/Gowen Field|US|4
KBOK|BOK|Brookings||US|1|||KCEC:33
KBOS|BOS|Boston|Boston Logan|US|4
KBOW|BOW|Bartow|Bartow Executive|US|1|||KLAL:24
KBPD|XFT|Big Pine Key|Big Pine Sands STOLGround|US|1|Big Pine Key, Florida||KEYW:42
KBPG|HCA|Big Spring|Big Spring Mc Mahon-Wrinkle|US|1|||KMAF:71
KBPI|BPI|Big Piney|Miley Memorial Field|US|2|||KJAC:125
KBPK|WMH|Mountain Home|Ozark Regional|US|2|||KHRO:62
KBPT|BPT|Beaumont/Port Arthur|Jack Brooks Regional|US|3
KBQK|BQK|Brunswick|Brunswick Golden Isles|US|3
KBQP||Bastrop|Morehouse Memorial|US|1|||KMLU:31
KBQR||Lancaster|Buffalo Lancaster Regional|US|1|||KBUF:10
KBRD|BRD|Brainerd|Brainerd Lakes Regional|US|3
KBRG||Belen|Belen Regional|US|1|||KABQ:48
KBRL|BRL|Burlington|Southeast Iowa Regional|US|3
KBRO|BRO|Brownsville|Brownsville South Padre Island|US|3
KBRY|BRY|Bardstown|Samuels Field|US|1|||KSDF:45
KBST||Belfast|Belfast Municipal|US|1|||KRKD:39
KBTA||Blair|Blair Executive|US|1|||KOMA:22
KBTF|BTF|Bountiful|Skypark|US|1|||KSLC:10
KBTL|BTL|Battle Creek|Battle Creek Executive Airport at Kellogg Field|US|2|||KAZO:26
KBTM|BTM|Butte|Bert Mooney|US|3
KBTN|TTO|Britton|Britton Municipal|US|1|||KABR:67
KBTP|BTP|Butler|Pittsburgh/Butler Regional|US|1|||KPIT:40
KBTR|BTR|Baton Rouge|Baton Rouge Metropolitan|US|3
KBTV|BTV|Burlington|Patrick Leahy Burlington|US|3
KBTY|BTY|Beatty||US|1|||KBIH:151
KBUB|BUB|Burwell|Cram Field|US|1|||KGRI:114
KBUF|BUF|Buffalo|Buffalo Niagara|US|4
KBUM|BUM|Butler|Butler Memorial|US|1|||KMCI:117
KBUR|BUR|Burbank|Hollywood Burbank/Bob Hope|US|4
KBUU||Burlington|Burlington Municipal|US|1|||KMKE:44
KBUY||Burlington|Burlington Alamance Regional|US|1|||KGSO:42
KBVI|BFP|Beaver Falls|Beaver County|US|2|||KPIT:34
KBVN||Albion|Albion Municipal Airport/Ron Levander Field|US|1|||KGRI:87
KBVO|BVO|Bartlesville|Bartlesville Municipal|US|1|||KTUL:64
KBVS|MVW|Burlington|Skagit Regional|US|1|||OTS:18
KBVU|BLD|Boulder City|Boulder City Municipal|US|3
KBVX|BVX|Batesville|Batesville Regional|US|1|||KJBR:91
KBVY|BVY|Beverly / Danvers|Beverly Regional|US|2|||KBOS:26
KBWC|BWC|Brawley|Brawley Municipal|US|1|||KIPL:18
KBWD|BWD|Brownwood|Brownwood Regional|US|1|||KABI:97
KBWG|BWG|Bowling Green|Bowling Green Warren County Regional|US|2|||KBNA:96
KBWI|BWI|Baltimore|Baltimore/Washington International Thurgood Marshall|US|4
KBWP|WAH|Wahpeton|Harry Stern|US|1|||KFAR:77
KBWW|BWM|Bowman|Bowman Regional|US|1|||KDIK:80
KBXA|BXA|Bogalusa|George R Carr Memorial Air Field|US|1|||KPIB:88
KBXG||Waynesboro|Burke County|US|1|||KAGS:37
KBXK|BXK|Buckeye|Buckeye Municipal|US|1|||KPHX:63
KBXM|NHZ|Brunswick|Brunswick Executive|US|2|||KPWM:40
KBYG|BYG|Buffalo|Johnson County|US|1|||KSHR:48
KBYH|BYH|Blytheville|Arkansas|US|2|||KJBR:65
KBYI|BYI|Burley|Burley Municipal|US|2|||KTWF:59
KBYL||Williamsburg|Williamsburg Whitley County|US|1|||KTYS:111
KBYS|BYS|Fort Irwin/Barstow|Bicycle Lake Army Air Field|US|2|||KSBD:143
KBYY|BBC|Bay City|Bay City Regional|US|1|||KHOU:94
KBZN|BZN|Bozeman|Bozeman Yellowstone|US|3
KCAD|CAD|Cadillac|Wexford County|US|1|||KTVC:53
KCAE|CAE|Columbia|Columbia Metropolitan|US|3
KCAG|CIG|Craig|Craig Moffat|US|1|||KHDN:26
KCAK|CAK|Akron|Akron Canton Regional|US|3
KCAO|CAO|Clayton|Clayton Municipal Airpark|US|1|||KAMA:190
KCAR|CAR|Caribou|Caribou Municipal|US|2|||KPQI:20
KCAV||Clarion|Clarion Municipal|US|1|||KFOD:41
KCBE|CBE|Wiley Ford|Greater Cumberland Regional|US|1|||KJST:78
KCBF|CBF|Council Bluffs|Council Bluffs Municipal|US|1|||KOMA:12
KCBG||Cambridge|Cambridge Municipal|US|1|||KSTC:62
KCBK|CBK|Colby|Shalz Field|US|1|||KMCK:95
KCBM|CBM|Columbus|Columbus Air Force Base|US|2|||KGTR:25
KCCA||Clinton|Clinton Municipal|US|1|||KHRO:97
KCCB|CCB|Upland|Upland-Cable|US|1|||KONT:10
KCCO||Newnan|Newnan Coweta County|US|1|||KATL:48
KCCR|CCR|Concord|Buchanan Field|US|3|||KOAK:33
KCCY|CCY|Charles City|Northeast Iowa Regional|US|2|||KMCW:59
KCDA|LLX|Lyndonville|Caledonia County|US|1|||KBTV:91
KCDC|CDC|Cedar City|Cedar City Regional|US|3
KCDH|CDH|Camden|Harrell Field|US|1|||KELD:45
KCDI||Cambridge|Cambridge Municipal|US|1|||KPKB:71
KCDK|CDK|Cedar Key|George T Lewis|US|1|||KGNV:98
KCDN|CDN|Camden|Woodward Field|US|1|||KCAE:64
KCDR|CDR|Chadron|Chadron Municipal|US|3
KCDS|CDS|Childress|Childress Municipal|US|2|||KAMA:156
KCDW|CDW|Caldwell|Essex County|US|1|||KEWR:23
KCEA|CEA|Wichita|Cessna Aircraft Field|US|1|||KICT:16
KCEC|CEC|Crescent City|Jack Mc Namara Field|US|3
KCEF|CEF|Chicopee|Westover Metropolitan Airport / Westover Air Reserve Base|US|2|||KBDL:31
KCEK||Crete|Crete Municipal|US|1|||KLNK:29
KCEU|CEU|Clemson|Oconee County Regional|US|1|||KGSP:66
KCEV|CEV|Connersville|Mettel Field|US|1|||KDAY:81
KCEW|CEW|Crestview|Bob Sikes|US|2|||KVPS:33
KCEY|CEY|Murray|Murray-Calloway County Airport Kyle-Oakley Field|US|1|||KPAH:57
KCEZ|CEZ|Cortez|Cortez Municipal|US|3
KCFD|CFD|Bryan|Coulter Field|US|1|||KCLL:14
KCFE||Buffalo|Buffalo Municipal|US|1|||KSTC:46
KCFJ||Crawfordsville|Crawfordsville Regional|US|1|||KLAF:49
KCFO||Denver|Colorado Air and Space Port|US|1||KFTG|KDEN:14
KCFS|TZC|Caro|Tuscola Area|US|1|||KMBS:52
KCFT|CFT|Clifton|Greenlee County|US|1|||KSVC:105
KCFV|CFV|Coffeyville|Coffeyville Municipal|US|1|||KJLN:95
KCGC||Crystal River||US|1|||KGNV:96
KCGE|CGE|Cambridge|Cambridge Dorchester|US|1|||KSBY:50
KCGF|CGF|Cleveland|Cuyahoga County|US|2|||KCLE:35
KCGI|CGI|Cape Girardeau|Cape Girardeau Regional|US|3
KCGS|CGS|College Park||US|1|||KDCA:17
KCGZ|CGZ|Casa Grande|Casa Grande Municipal|US|1|||KIWA:41
KCHA|CHA|Chattanooga|Chattanooga Metropolitan Airport|US|3|Lovell Field
KCHD||Chandler|Chandler Municipal|US|1|||KIWA:15
KCHK|CHK|Chickasha|Chickasha Municipal|US|1|||KOKC:47
KCHN||Wauchula|Wauchula Municipal|US|1|||KLAL:55
KCHO|CHO|Charlottesville|Charlottesville Albemarle|US|3
KCHQ||Charleston|Mississippi County|US|1|||KCGI:47
KCHS|CHS|Charleston||US|4
KCHT||Chillicothe|Chillicothe Municipal|US|1|||KIRK:88
KCHU||Caledonia|Houston County|US|1|||KLSE:37
KCIC|CIC|Chico|Chico Regional|US|1|||KRDD:88
KCID|CID|Cedar Rapids|The Eastern Iowa|US|3
KCII||Choteau||US|1|||KGTF:71
KCIN|CIN|Carroll|Arthur N Neu|US|1|||KFOD:75
KCIR|CIR|Cairo|Cairo Regional|US|1|||KCGI:36
KCIU|CIU|Kincheloe|Chippewa County|US|3
KCJJ||Cresco|Ellen Church Field|US|1|||KRST:67
KCJR||Culpeper|Culpeper Regional|US|1|||KIAD:58
KCKA|CKA|Cherokee|Kegelman AF Aux Field|US|1|||KSWO:113
KCKB|CKB|Bridgeport|North Central West Virginia|US|3
KCKC|GRM|Grand Marais|Grand Marais Cook County|US|1|||CYQT:99
KCKF||Cordele|Crisp County Cordele|US|1|||KABY:65
KCKI||Kingstree|Williamsburg Regional|US|1|||KFLO:53
KCKM|CKM|Clarksdale|Fletcher Field|US|1|||KMEM:96
KCKN|CKN|Crookston|Crookston Municipal Kirkwood Field|US|1|||KTVF:41
KCKP||Cherokee|Cherokee County Regional|US|1|||KSUX:77
KCKV|CKV|Clarksville|Clarksville–Montgomery County Regional|US|1|||KBNA:86
KCKZ||Perkasie|Pennridge|US|1|||KABE:32
KCLE|CLE|Cleveland|Cleveland Hopkins|US|4
KCLI|CLI|Clintonville|Clintonville Municipal|US|1|||KATW:43
KCLK|CLK|Clinton|Clinton Regional|US|1|||KLAW:118
KCLL|CLL|College Station|Easterwood Field|US|3
KCLM|CLM|Port Angeles|William R Fairchild|US|2|||KFHR:57
KCLR|CLR|Calipatria|Cliff Hatfield Memorial|US|1|||KIPL:33
KCLS|CLS|Chehalis|Chehalis Centralia|US|1|||KOLM:33
KCLT|CLT|Charlotte|Charlotte Douglas|US|4
KCLW|CLW|Clearwater|Clearwater Air Park|US|1|||KPIE:10
KCMA||Camarillo||US|2|||KBUR:68
KCMD||Cullman|Cullman Regional Airport-Folsom Field|US|1|||KHSV:42
KCMH|CMH|Columbus|John Glenn Columbus|US|4
KCMI|CMI|Savoy|University of Illinois Willard|US|3
KCMR||Williams|H.A. Clark Memorial Field|US|1|||KFLG:51
KCMX|CMX|Hancock|Houghton County Memorial|US|3
KCMY|CMY|Sparta|Sparta Fort McCoy|US|1|||KLSE:42
KCNB||Canby|Myers Field|US|1|||KATY:73
KCNC||Chariton|Chariton Municipal|US|1|||KDSM:62
KCNH|CNH|Claremont|Claremont Municipal|US|1|||KLEB:29
KCNI||Canton|Cherokee County Regional|US|1|||KPDK:50
KCNK|CNK|Concordia|Blosser Municipal|US|1|||KSLN:84
KCNM|CNM|Carlsbad|Cavern City Air Terminal|US|3
KCNO|CNO|Chino||US|1|||KONT:10
KCNP||Chappell|Billy G Ray Field|US|1|||KAIA:112
KCNU|CNU|Chanute|Chanute Martin Johnson|US|2|||KJLN:104
KCNW|CNW|Waco|TSTC Waco|US|1|||KACT:15
KCNY|CNY|Moab|Canyonlands Regional|US|3
KCOD|COD|Cody|Yellowstone Regional|US|3
KCOE|COE|Coeur d'Alene|Coeur D'Alene Airport - Pappy Boyington Field|US|2|||KGEG:56
KCOF|COF|Cocoa Beach|Patrick Space Force Base|US|2|||KMLB:15
KCOI|COI|Merritt Island||US|1|||KMLB:27
KCOM|COM|Coleman|Coleman Municipal|US|1|||KABI:69
KCON|CON|Concord|Concord Municipal|US|2|||KMHT:31
KCOQ||Cloquet|Cloquet Carlton County|US|1|||KDLH:28
KCOS|COS|Colorado Springs|City of Colorado Springs Municipal|US|4
KCOT|COT|Cotulla|Cotulla-La Salle County|US|1|||KLRD:104
KCOU|COU|Columbia|Columbia Regional|US|3
KCPC||Whiteville|Columbus County Municipal|US|1|||KMYR:69
KCPF||Chavies|Wendell H Ford|US|1|||KHTS:125
KCPK||Chesapeake|Chesapeake Regional|US|1|||KORF:28
KCPM|CPM|Compton|Compton Woodley|US|1|||KHHR:9
KCPP||Greensboro|Greene County Regional|US|1|||KMCN:111
KCPR|CPR|Casper|Casper-Natrona County|US|3
KCPS|CPS|Cahokia/St Louis|St Louis Downtown|US|1|||KSTL:27
KCPT||Cleburne|Cleburne Regional|US|1|||KDFW:71
KCPU||San Andreas|Calaveras Co Maury Rasmussen Field|US|1|||KSCK:59
KCQA||Celina|Lakefield|US|1|||KDAY:71
KCQB||Chandler|Chandler Regional|US|1|||KSWO:54
KCQF||Fairhope|H L Sonny Callahan|US|1|||KMOB:43
KCQM||Cook|Cook Municipal|US|1|||KHIB:50
KCQW|HCW|Cheraw|Cheraw Municipal Airport/Lynch Bellinger Field|US|1|||KFLO:62
KCQX||Chatham|Chatham Municipal|US|1|||KHYA:24
KCRE|CRE|North Myrtle Beach|Grand Strand|US|2|||KMYR:24
KCRG|CRG|Jacksonville|Jacksonville Executive at Craig|US|2|||KJAX:24
KCRP|CRP|Corpus Christi||US|3
KCRQ|CLD|Carlsbad|McClellan-Palomar|US|3
KCRS|CRS|Corsicana|C David Campbell Field Corsicana Municipal|US|1|||KACT:91
KCRT|CRT|Crossett|Z M Jack Stell Field|US|1|||KMLU:76
KCRW|CRW|Charleston|Yeager|US|3
KCRX|CRX|Corinth|Roscoe Turner|US|1|||KTUP:74
KCRZ||Corning|Corning Municipal|US|1|||KOMA:101
KCSB||Cambridge|Cambridge Municipal|US|1|||KMCK:38
KCSG|CSG|Columbus||US|3
KCSM|CSM|Clinton|Clinton Sherman|US|1|||KLAW:112
KCSQ|CSQ|Creston|Creston Municipal|US|1|||KDSM:82
KCSV|CSV|Crossville|Crossville Memorial Airport Whitson Field|US|2|||KTYS:100
KCTB|CTB|Cut Bank||US|2|||CYQL:118
KCTJ||Carrollton|West Georgia Regional Airport / O V Gray Field|US|1|||KATL:67
KCTK||Canton|Ingersoll|US|1|||KPIA:34
KCTY|CTY|Cross City||US|1|||KGNV:81
KCTZ|CTZ|Clinton|Sampson County|US|1|||KFAY:47
KCUB|CUB|Columbia|Jim Hamilton L.B. Owens|US|2|||KCAE:12
KCUH|CUH|Cushing|Cushing Municipal|US|1|||KSWO:37
KCUL||Carmi|Carmi Municipal|US|1|||KEVV:52
KCUT||Custer|Custer County|US|1|||KRAP:57
KCVB||Castroville|Castroville Municipal|US|1|||KSAT:43
KCVC||Covington|Covington Municipal|US|1|||KPDK:50
KCVG|CVG|Cincinnati / Covington|Cincinnati Northern Kentucky|US|4
KCVH|HLI|Hollister|Hollister Municipal|US|1|||KMRY:52
KCVK|CKK|Ash Flat|Sharp County Regional|US|1|||KJBR:95
KCVN|CVN|Clovis|Clovis Municipal|US|3
KCVO|CVO|Corvallis|Corvallis Municipal|US|2|||KEUG:42
KCVS|CVS|Clovis|Cannon Air Force Base|US|2|||KCVN:23
KCVX||Charlevoix|Charlevoix Municipal|US|2
KCWA|CWA|Mosinee|Central Wisconsin|US|3
KCWC|KIP|Wichita Falls|Kickapoo Downtown|US|1|||KLAW:79
KCWF|CWF|Lake Charles|Chennault|US|1|||KLCH:12
KCWI|CWI|Clinton|Clinton Municipal|US|1|||KMLI:45
KCWV||Claxton|Claxton Evans County|US|1|||KSAV:63
KCXE||Chase City|Chase City Municipal|US|1|||KLYH:86
KCXL|CXL|Calexico||US|1|||KIPL:19
KCXO|CXO|Houston|Conroe-North Houston Regional|US|2|||KIAH:41
KCXP|CSN|Carson City|Carson|US|2|||KRNO:34
KCXU||Camilla|Camilla Mitchell County|US|1|||KABY:36
KCXW||Conway|Conway Regional|US|1|||KLIT:44
KCXY|HAR|Harrisburg|Capital City|US|1|||KMDT:8
KCYO||Circleville|Pickaway County Memorial|US|1|||KLCK:33
KCYS|CYS|Cheyenne|Cheyenne Regional Jerry Olson Field|US|3
KCYW||Clay Center|Clay Center Municipal|US|1|||KMHK:50
KCZD||Cozad|Cozad Municipal|US|1|||KLBF:64
KCZG||Endicott|Tri Cities|US|1|||KBGM:17
KCZK|CZK|Cascade Locks|Cascade Locks State|US|1|||KPDX:57
KCZL||Calhoun|Tom B. David Field|US|1|||KCHA:69
KCZT|CZT|Carrizo Springs|Dimmit County|US|1|||MMPG:70
KDAA|DAA|Fort Belvoir|Davison Army Air Field|US|2|||KDCA:20
KDAB|DAB|Daytona Beach||US|3
KDAF||Necedah||US|1|||KCWA:89
KDAG|DAG|Daggett|Barstow Daggett|US|2|||KSBD:94
KDAL|DAL|Dallas|Dallas Love Field|US|4
KDAN|DAN|Danville|Danville Regional|US|2|||KGSO:75
KDAW||Rochester|Skyhaven|US|1|||KPSM:24
KDAY|DAY|Dayton|James M. Cox Dayton|US|3
KDBN|DBN|Dublin|W H 'Bud' Barron|US|1|||KMCN:64
KDBQ|DBQ|Dubuque|Dubuque Regional|US|3
KDCA|DCA|Washington|Ronald Reagan Washington National|US|4
KDCM||Chester|Chester Catawba Regional|US|1|||KCLT:53
KDCU|DCU|Decatur|Pryor Field Regional|US|1|||KHSV:16
KDCY||Washington|Daviess County|US|1|||KEVV:82
KDDC|DDC|Dodge City|Dodge City Regional|US|3
KDDH||Bennington|William H Morse State|US|1|||KALB:48
KDEC|DEC|Decatur||US|3
KDED||Deland|Deland Municipal Sidney H Taylor Field|US|1|||KDAB:25
KDEH|DEH|Decorah|Decorah Municipal|US|1|||KLSE:78
KDEN|DEN|Denver||US|4||KVDX
KDEQ||DeQueen|J Lynn Helms Sevier County|US|1|||KTXK:76
KDET|DET|Detroit|Coleman A. Young Municipal|US|2|||CYQG:16
KDEW||Deer Park||US|1|||KGEG:39
KDFI|DFI|Defiance|Defiance Memorial|US|1|||KTOL:59
KDFW|DFW|Dallas-Fort Worth|Dallas Fort Worth|US|4
KDGL|DGL|Douglas|Douglas Municipal|US|1|||KTUS:160
KDGW|DGW|Douglas|Converse County|US|1|||KCPR:89
KDHN|DHN|Dothan|Dothan Regional|US|3
KDHT|DHT|Dalhart|Dalhart Municipal|US|2|||KAMA:117
KDIJ||Driggs|Driggs/Reed Memorial|US|1|||KJAC:33
KDIK|DIK|Dickinson|Dickinson Theodore Roosevelt Regional|US|3
KDJT|DJT|West Palm Beach|President Donald J. Trump|US|4||KPBI PBI
KDKB||DeKalb|DeKalb Taylor Municipal|US|1|||KRFD:43
KDKK|DKK|Dunkirk|Chautauqua County-Dunkirk|US|1|||KBUF:67
KDKR||Crockett|Houston County|US|1|||KTYR:116
KDKX||Knoxville|Knoxville Downtown Island|US|1|||KTYS:20
KDLC|DLL|Dillon|Dillon County|US|1|||KFLO:44
KDLF|DLF|Del Rio|Laughlin Air Force Base|US|2|||MMPG:85
KDLH|DLH|Duluth||US|3
KDLL||Baraboo|Baraboo Wisconsin Dells Regional|US|1|||KMSN:55
KDLN|DLN|Dillon||US|1|||KBTM:78
KDLO||Delano|Delano Municipal|US|1|||KBFL:38
KDLS|DLS|Dallesport / The Dalles|Columbia Gorge Regional|US|2|||KPDX:111
KDLZ||Delaware|Delaware Municipal|US|1|||KCMH:37
KDMA|DMA|Tucson|Davis Monthan Air Force Base|US|2|||KTUS:8
KDMN|DMN|Deming|Deming Municipal|US|2|||KSVC:58
KDMO|DMO|Sedalia|Sedalia Memorial|US|1|||KCOU:84
KDMW||Westminster|Carroll County Regional Jack B Poage Field|US|1|||KBWI:56
KDNA||Santa Teresa|Doña Ana County International Jetport|US|1|||KELP:32
KDNL|DNL|Augusta|Daniel Field|US|2|||KAGS:13
KDNN|DNN|Dalton|Dalton Municipal|US|1|||KCHA:46
KDNS|DNS|Denison|Denison Municipal|US|1|||KOMA:87
KDNV|DNV|Danville|Vermilion Regional|US|1|||KCMI:60
KDOV|DOV|Dover|Dover Civil Air Terminal/Dover Air Force Base|US|3
KDPA|DPA|Chicago/West Chicago|Dupage|US|2|||KORD:30
KDPG|DPG|Dugway Proving Ground|Michael AAF|US|1|||KPVU:103
KDPL||Kenansville|Duplin County|US|1|||KOAJ:39
KDQH||Douglas|Douglas Municipal Gene Chambers|US|1|||KVLD:87
KDRA|DRA|Mercury|Desert Rock|US|2|||KLAS:99
KDRI|DRI|DeRidder|Beauregard Regional|US|2|||KLCH:79
KDRM|DRE|Drummond Island||US|1|||KCIU:61
KDRO|DRO|Durango|Durango La Plata County|US|3
KDRP||Colt|Delta Regional|US|1|||KMEM:78
KDRT|DRT|Del Rio||US|2|||MMPG:91
KDSM|DSM|Des Moines||US|4
KDSV|DSV|Dansville|Dansville Municipal|US|1|||KROC:61
KDTA|DTA|Delta|Delta Municipal|US|1|||KPVU:115
KDTG||Dwight||US|1|||KBMI:83
KDTL|DTL|Detroit Lakes||US|1|||KFAR:72
KDTN|DTN|Shreveport|Shreveport Downtown|US|1|||KSHV:13
KDTO||Denton|Denton Enterprise|US|1|||KDFW:37
KDTS|DSI|Destin|Destin Executive|US|3|||KVPS:10
KDTW|DTW|Detroit|Detroit Metropolitan Wayne County|US|4
KDUA|DUA|Durant|Durant Regional Airport - Eaker Field|US|2|||KDAL:129
KDUB||Dubois|Dubois Municipal|US|1|||KJAC:85
KDUC|DUC|Duncan|Halliburton Field|US|1|||KLAW:43
KDUG|DUG|Douglas Bisbee|Bisbee Douglas|US|2|||KTUS:145
KDUH||Lambertville|Toledo Suburban|US|1|||KTOL:21
KDUJ|DUJ|Dubois|DuBois Regional|US|3
KDUX||Dumas|Moore County|US|1|||KAMA:76
KDVK||Danville|Stuart Powell Field|US|1|||KLEX:53
KDVL|DVL|Devils Lake|Devils Lake Regional|US|3
KDVN|DVN|Davenport|Davenport Municipal|US|1|||KMLI:19
KDVO|NOT|Novato|Marin County Airport - Gnoss Field|US|1|||KSTS:46
KDVP|NSL|Slayton|Slayton Municipal|US|1|||KFSD:89
KDVT|DVT|Phoenix|Phoenix Deer Valley|US|1|||KPHX:29
KDWA||Davis/Woodland/Winters|Yolo County Davis Woodland Winters|US|1|||KSMF:26
KDWH|DWH|Houston|David Wayne Hooks Memorial|US|1|||KIAH:22
KDWU||Worthington|Ashland Regional|US|1|||KHTS:26
KDWX||Dixon||US|1||KDIA|KHDN:66
KDXE||Dexter|Dexter Municipal|US|1|||KCGI:60
KDXR|DXR|Danbury|Danbury Municipal|US|2|||KHPN:39
KDXX||Louisburg|Lac Qui Parle County|US|1|||KATY:77
KDYA||Demopolis|Demopolis Municipal|US|1|||KMEI:76
KDYB||Summerville||US|1|||KCHS:29
KDYL|DYL|Doylestown||US|1|||KTTN:27
KDYR||Dyersburg|Dyersburg Regional|US|1|||KMKL:63
KDYS|DYS|Abilene|Dyess Air Force Base|US|2|||KABI:16
KDYT||Duluth|Sky Harbor|US|1|||KDLH:18
KDZB||Horseshoe Bay|Horseshoe Bay Resort Airpark|US|1|||KAUS:76
KDZJ||Blairsville||US|1|||KTYS:106
KEAG||Eagle Grove|Eagle Grove Municipal|US|1|||KFOD:28
KEAN|EAN|Wheatland|Phifer|US|1|||KCYS:101
KEAR|EAR|Kearney|Kearney Regional|US|3
KEAT|EAT|Wenatchee|Pangborn Memorial|US|3
KEAU|EAU|Eau Claire|Chippewa Valley Regional|US|3
KEBA||Elberton|Elbert County Airport Patz Field|US|1|||KGSP:105
KEBD||Varney|Southern West Virginia Regional|US|1|||KHTS:85
KEBG||Edinburg|South Texas International at Edinburg|US|1|||KMFE:32
KEBS|EBS|Webster City|Webster City Municipal|US|1|||KFOD:29
KECG|ECG|Elizabeth City|Elizabeth City Regional Airport & Coast Guard Air Station|US|2|||KORF:71
KECP|ECP|Panama City Beach|Northwest Florida Beaches|US|3
KECS|ECS|Newcastle|Mondell Field|US|1|||KRAP:102
KECU||Rocksprings|Edwards County|US|1|||MMPG:151
KEDC||Pflugerville|Austin Executive|US|3|||KAUS:24
KEDE|EDE|Edenton|Northeastern Regional|US|1|||KPGV:86
KEDG||Edgewood Arsenal|Weide Army Heliport|US|1|Aberdeen Proving Ground||KBWI:40
KEDJ||Bellefontaine|Bellefontaine Regional|US|1|||KDAY:62
KEDN|ETS|Enterprise|Enterprise Municipal|US|1|||KDHN:43
KEDU||Davis|University|US|1|||KSMF:25
KEDW|EDW|Edwards|Edwards Air Force Base|US|2|||KBUR:90
KEED|EED|Needles||US|2|||KHII:33
KEEN|EEN|Keene|Dillant Hopkins|US|2|||KMHT:68
KEEO||Meeker||US|1|||KHDN:74
KEET||Alabaster|Shelby County|US|2|||KBHM:43
KEFC||Belle Fourche|Belle Fourche Municipal|US|1|||KRAP:100
KEFD|EFD|Houston|Ellington|US|2|||KHOU:12
KEFK|EFK|Newport|Northeast Kingdom|US|1|||KBTV:87
KEFT||Monroe|Monroe Municipal|US|1|||KRFD:62
KEFW|EFW|Jefferson|Jefferson Municipal|US|1|||KFOD:62
KEGE|EGE|Eagle|Eagle County Regional|US|3
KEGI|EGI|Crestview|Duke Field|US|2|||KVPS:19
KEGQ||Emmetsburg|Emmetsburg Municipal|US|1|||KFOD:74
KEGT||Wellington|Wellington Municipal|US|1|||KICT:37
KEGV|EGV|Eagle River|Eagle River Union|US|1|||KRHI:37
KEHA||Elkhart|Elkhart Morton County|US|1|||KLBL:82
KEHO||Shelby|Shelby-Cleveland County Regional|US|1|||KCLT:60
KEHR||Henderson|Henderson City County|US|1|||KEVV:29
KEIK||Erie|Erie Municipal|US|1|||KDEN:36
KEIW||New Madrid|County Memorial|US|1|||KCGI:77
KEKA|EKA|Eureka|Murray Field|US|2|||KACV:19
KEKM|EKI|Elkhart|Elkhart Municipal|US|1|||KSBN:26
KEKN|EKN|Elkins|Elkins-Randolph County Regional|US|2|||KCKB:55
KEKO|EKO|Elko|Elko Regional|US|3
KEKQ||Monticello|Wayne County|US|1|||KLEX:133
KEKS||Ennis|Ennis Big Sky|US|1|||KBZN:68
KEKX|EKX|Elizabethtown|Addington Field / Elizabethtown Regional|US|1|||KSDF:56
KEKY||Bessemer||US|1|||KBHM:32
KELA|ELA|Eagle Lake||US|1|||KHOU:101
KELD|ELD|El Dorado|South Arkansas Regional Airport at Goodwin Field|US|3
KELK|ELK|Elk City|Elk City Regional Business|US|1|||KLAW:131
KELM|ELM|Elmira/Corning|Elmira Corning Regional|US|3
KELN|ELN|Ellensburg|Bowers Field|US|1|||KEAT:47
KELO|LYU|Ely|Ely Municipal|US|2|||KHIB:90
KELP|ELP|El Paso||US|4
KELY|ELY|Ely|Ely Airport Yelland Field|US|2|||KEKO:188
KELZ|ELZ|Wellsville|Wellsville Municipal Airport - Tarantine Field|US|1|||KBFD:64
KEMM|EMM|Kemmerer|Kemmerer Municipal|US|1|||KRKS:126
KEMP|EMP|Emporia|Emporia Municipal|US|1|||KMHK:99
KEMT|EMT|El Monte|San Gabriel Valley|US|1|||KLGB:32
KEMV||Emporia|Emporia Greensville Regional|US|1|||KRIC:92
KEND|END|Enid|Vance Air Force Base|US|2|||KSWO:77
KENL|ENL|Centralia|Centralia Municipal|US|1|||KMWA:85
KENV|ENV|Wendover||US|2|||KEKO:149
KENW|ENW|Kenosha|Kenosha Regional|US|2|||KMKE:39
KEOE||Newberry|Newberry County|US|1|||KCAE:63
KEOK|EOK|Keokuk|Keokuk Municipal|US|1|||KBRL:44
KEOP||Waverly|Pike County|US|1|||KLCK:72
KEOS|EOS|Neosho|Neosho Hugh Robinson|US|1|||KJLN:39
KEPH|EPH|Ephrata|Ephrata Municipal|US|1|||KEAT:53
KEPM||Eastport|Eastport Municipal|US|1|||CYSJ:99
KEQA|EDK|El Dorado|Captain Jack Thomas El Dorado|US|1|||KICT:55
KEQY||Monroe|Charlotte-Monroe Executive|US|1|||KCLT:37
KERI|ERI|Erie|Erie International Tom Ridge Field|US|3
KERR|ERR|Errol||US|1|||KAUG:120
KERV|ERV|Kerrville|Kerrville / Kerr County Airport at Louis Schreiner Field|US|1|||KSAT:77
KERY||Newberry|Luce County|US|1|||CYAM:75
KESC|ESC|Escanaba|Delta County|US|3
KESF|ESF|Alexandria|Esler Army Airfield / Esler Regional|US|2|||KAEX:25
KESN|ESN|Easton|Easton Airport / Newnam Field|US|1|||KBWI:66
KEST|EST|Estherville|Estherville Municipal|US|1|||KFOD:105
KESW|ESW|Easton|Easton State|US|1|||KEAT:76
KETB|ETB|West Bend|West Bend Municipal|US|1|||KMKE:56
KETC||Tarboro|Tarboro Edgecombe|US|1|||KPGV:37
KETH||Lake Valley Township|Wheaton Municipal|US|1|||KATY:108
KETN|ETN|Eastland|Eastland Municipal|US|1|||KMWL:81
KEUF|EUF|Eufaula|Weedon Field|US|1|||KCSG:65
KEUG|EUG|Eugene||US|3
KEUL||Caldwell|Caldwell Executive|US|1|||KBOI:34
KEVB||New Smyrna Beach|New Smyrna Beach Municipal|US|1|||KDAB:18
KEVM|EVM|Eveleth|Eveleth–Virginia Municipal|US|1|||KHIB:26
KEVU||Maryville|Northwest Missouri Regional|US|1|||KMCI:118
KEVV|EVV|Evansville|Evansville Regional|US|3
KEVW|EVW|Evanston|Evanston-Uinta County Airport-Burns Field|US|2|||KOGD:82
KEVY||Middletown|Summit|US|1|||KILG:20
KEWB|EWB|New Bedford|New Bedford Regional|US|3
KEWK|EWK|Newton|Newton City-County|US|1|||KICT:47
KEWN|EWN|New Bern|Coastal Carolina Regional|US|3
KEWR|EWR|Newark|Newark Liberty|US|4
KEXX||Lexington|Davidson County Executive|US|1|||KGSO:48
KEYE||Indianapolis|Eagle Creek Airpark|US|1|||KIND:13
KEYF||Elizabethtown|Curtis L Brown Jr Field|US|1|||KFAY:51
KEYW|EYW|Key West||US|3
KEZF||Fredericksburg|Shannon|US|1|||KDCA:74
KEZI||Kewanee|Kewanee Municipal|US|1|||KMLI:53
KEZM||Eastman|Heart of Georgia Regional|US|1|||KMCN:72
KEZS||Shawano|Shawano Municipal|US|1|||KGRB:48
KEZZ||Shoal Township|Cameron Memorial|US|1|||KMCI:60
KFAF|FAF|Newport News|Felker Army Air Field|US|2|Newport News (Fort Eustis)||KPHF:10
KFAM|FAM|Farmington|Farmington Regional|US|1|||KCGI:96
KFAR|FAR|Fargo|Hector|US|3
KFAT|FAT|Fresno|Fresno Yosemite|US|4
KFAY|FAY|Fayetteville|Fayetteville Regional Airport - Grannis Field|US|3
KFBG|FBG|Fort Bragg|Simmons Army Air Field|US|2|||KFAY:16
KFBL|FBL|Faribault|Faribault Municipal Airport-Liz Wall Strohfus Field|US|1|||KMSP:62
KFBR|FBR|Fort Bridger||US|1|||KRKS:114
KFBY|FBY|Fairbury|Fairbury Municipal|US|1|||KLNK:81
KFCH|FCH|Fresno|Fresno Chandler Executive|US|1|||KFAT:10
KFCI||North Chesterfield|Richmond Executive-Chesterfield County|US|1|||KRIC:21
KFCM|FCM|Minneapolis|Flying Cloud|US|1|||KMSP:19
KFCS|FCS|Fort Carson|Butts AAF Air Field|US|2|||KCOS:15
KFCY|FCY|Forrest City|Forrest City Municipal|US|1|||KMEM:74
KFDK|FDK|Frederick|Frederick Municipal|US|1|||KHGR:44
KFDR|FDR|Frederick|Frederick Regional|US|1|||KLAW:57
KFDW||Winnsboro|Fairfield County|US|1|||KCAE:42
KFDY|FDY|Findlay||US|2|||KTOL:65
KFEP|FEP|Freeport|Albertus|US|1|||KRFD:40
KFET|FET|Fremont|Fremont Municipal|US|1|||KOMA:55
KFFA|FFA|Kill Devil Hills|First Flight|US|1|||KORF:108
KFFC||Peachtree City|Peachtree City Falcon Field|US|1|||KATL:34
KFFL|FFL|Fairfield|Fairfield Municipal|US|1|||KBRL:78
KFFM|FFM|Fergus Falls|Fergus Falls Municipal Airport - Einar Mickelson Field|US|1|||KFAR:87
KFFO|FFO|Dayton|Wright-Patterson Air Force Base|US|2|||KDAY:17
KFFT|FFT|Frankfort|Capital City|US|1|||KLEX:31
KFFX||Fremont|Fremont Municipal|US|1|||KMKG:36
KFFZ|MSC|Mesa|Falcon Field|US|1|||KIWA:18
KFGU||Apison|Collegedale Municipal|US|1|||KCHA:17
KFGX||Flemingsburg|Fleming Mason|US|1|||KLUK:85
KFHB||Fernandina Beach|Fernandina Beach Municipal|US|1|||KJAX:25
KFHR|FRD|Friday Harbor||US|3
KFHU|FHU|Fort Huachuca / Sierra Vista|Sierra Vista Municipal Airport / Libby Army Air Field|US|2|||KTUS:81
KFIG||Clearfield|Clearfield Lawrence|US|1|||KDUJ:43
KFIN||Palm Coast|Flagler Executive|US|1||KXFL|KDAB:35
KFIT||Fitchburg|Fitchburg Municipal|US|1|||KORH:33
KFKA||Preston|Fillmore County|US|1|||KRST:36
KFKL|FKL|Franklin|Venango Regional|US|2|||KERI:83
KFKN|FKN|Franklin|Franklin Regional|US|1|||KPHF:61
KFKR||Frankfort|Frankfort Clinton County Regional|US|1|||KLAF:36
KFKS||Frankfort|Frankfort Dow Memorial Field|US|1|||KMBL:39
KFLD|FLD|Fond du Lac|Fond du Lac County|US|1|||KATW:54
KFLG|FLG|Flagstaff|Flagstaff Pulliam|US|3
KFLL|FLL|Fort Lauderdale|Fort Lauderdale Hollywood|US|4
KFLO|FLO|Florence|Florence Regional|US|3
KFLP|FLP|Flippin|Marion County Regional|US|1|||KHRO:51
KFLR||Coral Gable|[Delete] Homestead East Airstrip|US|1|||KMIA:27
KFLV|FLV|Fort Leavenworth|Sherman Army Air Field|US|1|||KMCI:19
KFLX|FLX|Fallon|Fallon Municipal|US|1|||KRNO:87
KFLY||Colorado Springs|Meadow Lake|US|1|||KCOS:19
KFME|FME|Fort Meade|Fort Meade Executive|US|2|Fort Meade(Odenton)||KBWI:13
KFMH|FMH|Falmouth|Cape Cod Coast Guard Air Station|US|1|||KHYA:20
KFMM||Fort Morgan|Fort Morgan Municipal|US|1|||KDEN:91
KFMN|FMN|Farmington|Four Corners Regional|US|2|||KDRO:62
KFMY|FMY|Fort Myers|Page Field|US|2|||KRSW:12
KFMZ||Fairmont|Fairmont State|US|1|||KLNK:74
KFNB||Falls City|Brenner Field|US|1|||KMCI:115
KFNL|FNL|Loveland|Northern Colorado Regional|US|2|||KDEN:72
KFNT|FNT|Flint|Bishop|US|3
KFOA||Flora|Flora Municipal|US|1|||KEVV:106
KFOD|FOD|Fort Dodge|Fort Dodge Regional|US|3
KFOE|FOE|Topeka|Topeka Regional|US|2|||KMHK:90
KFOK|FOK|Westhampton Beach|Francis S Gabreski|US|1|||KISP:40
KFOM|FIL|Fillmore|Fillmore Municipal|US|1|||KPVU:151
KFOT||Fortuna|Rohnerville|US|1|||KACV:47
KFOZ||Bigfork|Bigfork Municipal|US|1|||KHIB:75
KFPK||Charlotte|Fitch H Beach|US|1|||KLAN:29
KFPR|FPR|Fort Pierce|Treasure Coast|US|2|||KVRB:19
KFPY|FPY|Perry|Perry-Foley|US|1|||KTLH:83
KFQD||Rutherfordton|Rutherford County Marchman Field|US|1|||KAVL:55
KFRG|FRG|East Farmingdale|Republic|US|2|||KISP:27
KFRH|FRH|French Lick|French Lick Municipal|US|1|||KSDF:87
KFRI|FRI|Fort Riley|Marshall Army Air Field|US|2|Fort Riley (Junction City)||KMHK:13
KFRM|FRM|Fairmont|Fairmont Municipal|US|1|||KMCW:103
KFRR|FRR|Front Royal|Front Royal Warren County|US|1|||KIAD:69
KFSD|FSD|Sioux Falls|Sioux Falls Regional|US|3
KFSE||Fosston|Fosston Municipal Airport-Anderson Field|US|1|||KTVF:61
KFSI|FSI|Fort Sill|Henry Post Army Air Field|US|2|||KLAW:9
KFSK|FSK|Fort Scott|Fort Scott Municipal|US|1|||KJLN:76
KFSM|FSM|Fort Smith|Fort Smith Regional|US|3
KFSO||Swanton|Franklin County State|US|1|||KPBG:43
KFST|FST|Fort Stockton|Fort Stockton Pecos County|US|2|||KMAF:133
KFSU|FSU|Fort Sumner|Fort Sumner Municipal|US|1|||KCVN:105
KFSW|FMS|Fort Madison|Fort Madison Municipal|US|1|||KBRL:22
KFTK|FTK|Fort Knox|Godman Army Air Field|US|2|||KSDF:36
KFTT||Fulton|Elton Hensley Memorial|US|1|||KCOU:19
KFTW|FTW|Fort Worth|Fort Worth Meacham|US|3|||KDFW:31
KFTY|FTY|Atlanta|Fulton County Airport Brown Field|US|2|||KATL:18
KFUL|FUL|Fullerton|Fullerton Municipal|US|1|||KLGB:17
KFVE|WFK|Frenchville|Northern Aroostook Regional|US|1|||KPQI:69
KFVX||Farmville|Farmville Regional|US|1|||KLYH:68
KFWA|FWA|Fort Wayne||US|3
KFWB||Branson West||US|1|||KBBG:26
KFWC||Fairfield|Fairfield Municipal|US|1|||KEVV:86
KFWN||Sussex||US|1|||KSWF:55
KFWQ||Monongahela|Rostraver|US|1|||KLBE:37
KFWS||Fort Worth|Fort Worth Spinks|US|1|||KDFW:45
KFXE|FXE|Fort Lauderdale|Fort Lauderdale Executive|US|2|||KFLL:14
KFXY|FXY|Forest City|Forest City Municipal|US|1|||KMCW:25
KFYE||Somerville|Fayette County|US|1|||KMEM:56
KFYG||Washington|Washington Regional|US|1|||KSTL:57
KFYJ||Shacklefords|Middle Peninsula Regional|US|1|||KRIC:49
KFYM|FYM|Fayetteville|Fayetteville Municipal|US|1|||KHSV:51
KFYV|FYV|Fayetteville|Drake Field|US|2|||KXNA:33
KFZG||Fitzgerald|Fitzgerald Municipal|US|1|||KABY:89
KFZI||Fostoria|Fostoria Metropolitan|US|1|||KTOL:56
KFZY||Fulton|Oswego County|US|1|||KSYR:35
KGAB|GAB|Gabbs||US|1|||KMMH:164
KGAD|GAD|Gadsden|Northeast Alabama Regional|US|1|||KBHM:76
KGAF||Grafton|Hutson Field|US|1|||KGFK:53
KGAG|GAG|Gage|Gage Heibeck|US|1|||KLBL:134
KGAI|GAI|Gaithersburg|Montgomery County Airpark|US|1|||KIAD:35
KGAO||Galliano|South Lafourche Leonard Miller Jr|US|1|||KMSY:61
KGAS||Gallipolis|Gallia Meigs Regional|US|1|||KHTS:62
KGAX||Gila Bend|Williams Auxiliary Air Field 6|US|1|||KPHX:97
KGBD|GBD|Great Bend|Great Bend Municipal|US|1|||KHYS:66
KGBG|GBG|Galesburg|Galesburg Regional HW Timmons|US|1|||KMLI:57
KGBR|GBR|Great Barrington|Walter J. Koladza|US|1|||KBDL:65
KGCC|GCC|Gillette|Northeast Wyoming Regional|US|3
KGCD|JDA|John Day|Grant County Regional Airport / Ogilvie Field|US|1|||KPDT:144
KGCK|GCK|Garden City|Garden City Regional|US|3
KGCM||Claremore|Claremore Regional|US|1|||KTUL:38
KGCN|GCN|Grand Canyon - Tusayan|Grand Canyon National Park|US|3
KGCT||Guthrie Center|Guthrie County Regional|US|1|||KDSM:67
KGCY|GCY|Greeneville|Greeneville Municipal|US|1|||KTRI:48
KGDA||Marion|Marion-Crittenden County James C Johnson Regional|US|1|||KPAH:66
KGDB||Granite Falls|Granite Falls Municipal Airport / Lenzen-Roe Memorial Field|US|1|||KATY:127
KGDJ||Granbury|Granbury Regional|US|1|||KMWL:44
KGDK||Dayton|Greene County/Lewis A. Jackson Regional|US|1|||KDAY:30
KGDM|GDM|Gardner|Gardner Municipal|US|1|||KORH:33
KGDP||Dell City|Dell City Municipal|US|1|||KCNM:98
KGDV|GDV|Glendive|Dawson Community|US|3
KGDW|GDW|Gladwin|Gladwin Zettel Memorial|US|1|||KMBS:58
KGED|GED|Georgetown|Delaware Coastal|US|1|||KSBY:41
KGEG|GEG|Spokane||US|4
KGEO||Georgetown|Brown County|US|1|||KLUK:52
KGEU||Glendale|Glendale Municipal|US|1|||KPHX:29
KGEV||Jefferson|Ashe County|US|1|||KTRI:89
KGEY|GEY|Greybull|South Big Horn County|US|1|||KCOD:75
KGEZ||Shelbyville|Shelbyville Municipal|US|1|||KIND:44
KGFD|GFD|Greenfield|Pope Field|US|1|||KIND:49
KGFK|GFK|Grand Forks||US|3
KGFL|GFL|Glens Falls|Floyd Bennett Memorial|US|2|||KRUT:57
KGFZ||Greenfield|Greenfield Municipal|US|1|||KDSM:70
KGGE|GGE|Georgetown|Georgetown County|US|1|||KMYR:55
KGGF||Grant|Grant Municipal|US|1|||KLBF:93
KGGG|GGG|Longview|East Texas Regional|US|3
KGGI||Grinnell|Grinnell Regional|US|1|||KDSM:79
KGGP||Logansport|Logansport Cass County|US|1|||KLAF:58
KGGW|GGW|Glasgow|Glasgow Valley County Airport Wokal Field|US|3
KGHG||Marshfield|Marshfield Municipal George Harlow Field|US|1|||KBOS:40
KGHM|GHM|Centerville|Centerville Municipal|US|1|||KBNA:76
KGHW||Glenwood|Glenwood Municipal|US|1|||KSTC:99
KGIC|IDH|Grangeville|Idaho County|US|1|||KLWS:84
KGIF|GIF|Winter Haven|Winter Haven Regional Airport - Gilbert Field|US|1|||KLAL:27
KGJT|GJT|Grand Junction|Grand Junction Regional|US|3
KGKJ|MEJ|Meadville|Port Meadville|US|1|||KERI:51
KGKT|GKT|Sevierville|Gatlinburg-Pigeon Forge|US|1|||KTYS:42
KGKY||Arlington|Arlington Municipal|US|1|||KDFW:26
KGLD|GLD|Goodland|Goodland Municipal|US|2|||KMCK:133
KGLE|GLE|Gainesville|Gainesville Municipal|US|1|||KDFW:85
KGLH|GLH|Greenville|Mid Delta Regional|US|3
KGLR|GLR|Gaylord|Gaylord Regional|US|1|||KPLN:62
KGLS|GLS|Galveston|Scholes International At Galveston|US|2|||KHOU:58
KGLW|GLW|Glasgow|Glasgow Municipal|US|1|||KBNA:120
KGLY||Clinton|Clinton Memorial|US|1|||KSGF:126
KGMJ||Grove|Grove Regional|US|1|||KXNA:53
KGMU|GMU|Greenville|Greenville Downtown|US|2|||KGSP:13
KGNB||Granby|Granby Grand County|US|1|||KEGE:99
KGNC||Seminole|Gaines County|US|1|||KHOB:53
KGNF||Grenada|Grenada Municipal|US|1|||KTUP:106
KGNG|GNG|Gooding|Gooding Municipal|US|1|||KTWF:53
KGNT|GNT|Grants|Grants-Milan Municipal|US|1|||KGUP:89
KGNV|GNV|Gainesville|Gainesville Regional|US|3
KGOK|GOK|Guthrie|Guthrie-Edmond Regional|US|1|||KSWO:46
KGON|GON|Groton|Groton New London|US|2|||KWST:20
KGOO||Grass Valley|Nevada County|US|1|||KTRK:75
KGOP||Gatesville|Gatesville Municipal|US|1|||KACT:58
KGOV||Grayling|Grayling Army Air Field|US|1|||KTVC:68
KGPC||Greencastle|Putnam County|US|1|||KIND:45
KGPH||Excelsior Springs|Midwest National Air Center|US|1|||KMCI:35
KGPI|FCA|Kalispell|Glacier Park|US|3||KFCA
KGPM||Grand Prairie|Grand Prairie Municipal|US|1|||KDFW:22
KGPT|GPT|Gulfport|Gulfport Biloxi|US|3
KGPZ|GPZ|Grand Rapids|Grand Rapids Itasca Co-Gordon Newstrom field|US|1|||KHIB:54
KGQQ|GQQ|Galion|Galion Municipal|US|1|||KCMH:85
KGRB|GRB|Green Bay|Austin Straubel|US|3
KGRD|GRD|Greenwood|Greenwood County|US|1|||KGSP:72
KGRE|GRE|Greenville||US|1|||KSTL:87
KGRF|GRF|Joint Base Lewis McChord|Gray Army Air Field|US|2|||KTIW:21
KGRI|GRI|Grand Island|Central Nebraska Regional|US|3
KGRK|GRK|Fort Cavazos|Killeen Regional Airport / Robert Gray Army|US|3
KGRN|GRN|Gordon|Gordon Municipal|US|1|||KCDR:75
KGRR|GRR|Grand Rapids|Gerald R. Ford|US|4
KGSB|GSB|Goldsboro|Seymour Johnson Air Force Base|US|2|||KPGV:62
KGSH|GSH|Goshen|Goshen Municipal|US|1|||KSBN:48
KGSO|GSO|Greensboro|Piedmont Triad|US|4
KGSP|GSP|Greenville/Greer/Spartanburg|Greenville-Spartanburg|US|3
KGTB||Fort Drum|Wheeler Sack Army Air Field|US|2|||KART:25
KGTE||Gothenburg|Gothenburg Municipal|US|1|||KLBF:50
KGTF|GTF|Great Falls||US|3
KGTG|GTG|Grantsburg|Grantsburg Municipal|US|1|||KMSP:111
KGTR|GTR|Columbus/W Point/Starkville|Golden Triangle Regional|US|3
KGTU||Georgetown|Georgetown Executive Airport at Johnny Gantt Field|US|1|||KAUS:53
KGUC|GUC|Gunnison|Gunnison Crested Butte Regional|US|3
KGUP|GUP|Gallup|Gallup Municipal|US|3
KGUR||Guernsey|Camp Guernsey|US|1|||KBFF:103
KGUS|GUS|Peru|Grissom Air Reserve Base|US|2|||KLAF:71
KGUY|GUY|Guymon|Guymon Municipal|US|2|||KLBL:63
KGVE|GVE|Gordonsville|Gordonsville Municipal|US|1|||KCHO:25
KGVL|GVL|Gainesville|Lee Gilmer Memorial|US|1|||KPDK:62
KGVQ||Batavia|Genesee County|US|1|||KROC:41
KGVT|GVT|Greenville|Majors|US|1|||KDAL:77
KGWB||Auburn|De Kalb County|US|1|||KFWA:38
KGWO|GWO|Greenwood|Greenwood–Leflore|US|2|||KGLH:83
KGWR||Gwinner|Gwinner Roger Melroe Field|US|1|||KFAR:100
KGWS|GWS|Glenwood Springs|Sumers Airpark|US|1|||KEGE:37
KGWW||Pikeville|Wayne Executive Jetport|US|1|||KPGV:56
KGXF||Gila Bend|Gila Bend Air Force Auxiliary|US|1||KGBN|KPHX:90
KGXY|GXY|Greeley|Greeley–Weld County|US|1|||KDEN:64
KGYB||Giddings|Giddings-Lee County|US|1|||KAUS:66
KGYH|GDC|Greenville|Donaldson Field|US|1|||KGSP:21
KGYI|PNX|Denison|North Texas Regional Airport Perrin Field|US|2|||KDFW:97
KGYL||Glencoe|Glencoe Municipal|US|1|||KMSP:69
KGYR|GYR|Goodyear|Phoenix Goodyear|US|1|||KPHX:34
KGYY|GYY|Gary|Gary/Chicago|US|3
KGZH||Evergreen|Evergreen Regional Airport/Middleton Field|US|1|||KPNS:106
KGZL||Stigler|Stigler Regional|US|1|||KFSM:66
KGZN||Cisco|Gregory M. Simmons Memorial|US|1|||KABI:62
KGZS||Pulaski|Abernathy Field|US|1|||KHSV:63
KHAB|HAB|Hamilton|Marion County Rankin Fite|US|1|||KTUP:73
KHAD||Casper|Harford Field|US|1|||KCPR:12
KHAE||Hannibal|Hannibal Regional|US|1|||KUIN:32
KHAF|HAF|Half Moon Bay||US|1|||KSFO:16
KHAI|HAI|Three Rivers|Three Rivers Municipal Dr Haines|US|1|||KAZO:30
KHAO|HAO|Hamilton|Butler Co Regional Airport - Hogan Field|US|1|||KLUK:30
KHBC||Mohall|Mohall Municipal|US|1|||KMOT:60
KHBE||Nineveh|Himsel Army|US|1|||KIND:48
KHBG|HBG|Hattiesburg|Hattiesburg Bobby L Chain Municipal|US|2|||KPIB:24
KHBI||Asheboro|Asheboro Regional|US|1|||KGSO:50
KHBR|HBR|Hobart|Hobart Regional|US|2|||KLAW:75
KHBV||Hebbronville|Jim Hogg County|US|1|||KLRD:75
KHBZ||Heber Springs|Heber Springs Municipal Airport/Charlie Evans Field|US|1|||KLIT:89
KHCD||Hutchinson|Hutchinson Municipal Butler Field|US|1|||KSTC:80
KHCO||Hallock|Hallock Municipal|US|1|||KGFK:91
KHCR||Heber|Heber Valley|US|1|||KPVU:38
KHDC||Hammond|Hammond Northshore Regional|US|1|||KMSY:61
KHDE|HDE|Holdrege|Brewster Field|US|1|||KEAR:41
KHDL||Headland|Headland Municipal|US|1|||KDHN:14
KHDN|HDN|Hayden|Yampa Valley|US|3
KHDO||Hondo|South Texas Regional Airport at Hondo|US|1|||KSAT:71
KHEE|HEE|West Helena|Thompson-Robbins|US|1|||KMEM:82
KHEF|MNZ|Manassas|Washington Manassas Harry P. Davis Field|US|2|||KIAD:25
KHEG||Jacksonville|Herlong|US|1|||KJAX:26
KHEI||Hettinger|Hettinger Municipal|US|1|||KDIK:88
KHEQ||Holyoke||US|1|||KLBF:147
KHES||Healdsburg|Healdsburg Municipal|US|1|||KSTS:18
KHEZ|HEZ|Natchez|Natchez–Adams County Airport / Hardy-Anders Field|US|1|||KBTR:121
KHFD|HFD|Hartford|Hartford Brainard|US|2|||KBDL:23
KHFF|HFF|Hoffman|Mackall Army Air Field|US|1|||KFAY:57
KHFJ||Pierce City|Monett Regional|US|1|||KJLN:51
KHFY||Indianapolis|Indy South Greenwood|US|1|||KIND:20
KHGR|HGR|Hagerstown|Hagerstown Regional Richard A Henson Field|US|3
KHHF||Canadian|Hemphill County|US|1|||KLBL:137
KHHG||Huntington|Huntington Municipal|US|1|||KFWA:26
KHHR|HHR|Hawthorne|Jack Northrop Field Hawthorne Municipal|US|3
KHHW|HUJ|Hugo|Stan Stamper Municipal|US|1|||KTXK:157
KHIB|HIB|Hibbing|Range Regional|US|3
KHIE|HIE|Whitefield|Mount Washington Regional|US|1|||KLEB:102
KHIF|HIF|Ogden|Hill Air Force Base|US|2|||KOGD:9
KHIG||Higginsville|Higginsville Industrial Municipal|US|1|||KMCI:93
KHII|HII|Lake Havasu City||US|3
KHIO|HIO|Portland|Portland Hillsboro|US|2|||KPDX:28
KHJH||Hebron|Hebron Municipal|US|1|||KLNK:104
KHJO||Hanford|Hanford Municipal|US|1|||KFAT:52
KHKA|HKA|Blytheville|Blytheville Municipal|US|1|||KJBR:74
KHKS|HKS|Jackson|Hawkins Field|US|1|||KJAN:14
KHKY|HKY|Hickory|Hickory Regional|US|2|||KCLT:71
KHLB|HLB|Batesville||US|1|||KCVG:60
KHLC|HLC|Hill City|Hill City Municipal|US|1|||KHYS:76
KHLG|HLG|Wheeling|Wheeling Ohio County|US|2|||KPIT:50
KHLN|HLN|Helena|Helena Regional|US|3
KHLX||Hillsville|Twin County|US|1|||KROA:98
KHMN|HMN|Alamogordo|Holloman Air Force Base|US|2|||KLRU:99
KHMP||Hampton|Atlanta Speedway|US|1|||KATL:29
KHMT|HMT|Hemet|Hemet Ryan|US|1|||KSBD:45
KHMZ||Bedford|Bedford County|US|1|||KAOO:29
KHNB|HNB|Huntingburg||US|1|||KEVV:56
KHND|HSH|Las Vegas|Henderson Executive|US|1|||KLAS:12
KHNR||Harlan|Harlan Municipal|US|1|||KOMA:56
KHNZ||Oxford|Henderson Oxford|US|1|||KRDU:58
KHOB|HOB|Hobbs|Lea County Regional|US|3
KHOC||Hillsboro|Highland County|US|1|||KLUK:77
KHOE||Homerville||US|1|||KVLD:57
KHON|HON|Huron|Huron Regional|US|2|||KATY:103
KHOP|HOP|Fort Campbell|Campbell Army Airfield|US|2|||KBNA:95
KHOT|HOT|Hot Springs|Memorial Field|US|3
KHOU|HOU|Houston|William P. Hobby|US|4
KHPN|HPN|White Plains|Westchester County|US|3
KHPT|HPT|Hampton|Hampton Municipal|US|1|||KMCW:49
KHPY|HPY|Baytown||US|1|||KHOU:35
KHQG||Hugoton|Hugoton Municipal|US|1|||KLBL:39
KHQM|HQM|Hoquiam|Bowerman|US|2|||KOLM:78
KHQU||Thomson|Thomson-McDuffie County|US|1|||KAGS:54
KHQZ||Mesquite|Mesquite Metro|US|1|||KDAL:32
KHRF||Hamilton|Ravalli County|US|1|||KMSO:74
KHRI|HES|Hermiston|Hermiston Municipal|US|1|||KPDT:36
KHRJ||Erwin|Harnett Regional Jetport|US|1|||KFAY:45
KHRL|HRL|Harlingen|Valley|US|3
KHRO|HRO|Harrison|Boone County|US|3
KHRT||Mary Esther|Hurlburt Field|US|2|||KVPS:18
KHRU||Herington|Herington Regional|US|1|||KMHK:51
KHRX||Hereford|Hereford Municipal|US|1|||KAMA:69
KHSA||Bay St Louis|Stennis|US|1|||KGPT:37
KHSB|HSB|Harrisburg|Harrisburg-Raleigh|US|1|||KMWA:42
KHSD||Oklahoma City|Sundance Airpark|US|1|||KOKC:25
KHSE|HNC|Hatteras|Billy Mitchell|US|1|||KEWN:131
KHSG|THP|Thermopolis|Hot Springs County|US|1|||KRIW:72
KHSI|HSI|Hastings|Hastings Municipal|US|1|||KGRI:41
KHSP|HSP|Hot Springs|Ingalls Field|US|1|||KLWB:51
KHSR||Hot Springs|Hot Springs Municipal|US|1|||KCDR:64
KHST|HST|Homestead|Homestead Air Reserve Base|US|2|||KMIA:35
KHSV|HSV|Huntsville||US|3
KHTF||Hornell|Hornell Municipal|US|1|||KELM:70
KHTH|HTH|Hawthorne|Hawthorne Industrial|US|1|||KMMH:104
KHTL|HTL|Houghton Lake|Roscommon County - Blodgett Memorial|US|1|||KTVC:84
KHTS|HTS|Huntington|Tri-State Airport / Milton J. Ferguson Field|US|3
KHTW|HTW|South Point|Lawrence County Airpark|US|1|||KHTS:8
KHUA|HUA|Redstone Arsnl Huntsville|Redstone Army Air Field|US|2|||KHSV:9
KHUF|HUF|Terre Haute|Terre Haute Regional Airport, Hulman Field|US|2|||KIND:92
KHUL|HUL|Houlton||US|2|||KPQI:66
KHUM|HUM|Houma|Houma Terrebonne|US|1|||KMSY:61
KHUT|HUT|Hutchinson|Hutchinson Municipal|US|2|||KICT:60
KHVC||Hopkinsville|Hopkinsville Christian County|US|1|||KOWB:101
KHVE|HVE|Hanksville||US|1|||KCNY:91
KHVN|HVN|New Haven|Tweed New Haven|US|3
KHVR|HVR|Havre|Havre City County|US|3
KHVS|HVS|Hartsville|Hartsville Regional|US|1|||KFLO:44
KHWD|HWD|Hayward|Hayward Executive|US|1|||KOAK:11
KHWO|HWO|Hollywood|North Perry|US|2|||KFLL:12
KHWQ||Harlowton|Wheatland County Airport at Harlowton|US|1|||KBIL:124
KHWV|WSH|Shirley|Brookhaven Calabro|US|1|||KISP:20
KHWY||Midland|Warrenton Fauquier|US|1|||KIAD:46
KHXD|HHH|Hilton Head Island|Hilton Head|US|3
KHXF||Hartford|Hartford Municipal|US|1|||KMKE:60
KHYA|HYA|Hyannis|Cape Cod Gateway|US|3
KHYI||San Marcos|San Marcos Regional|US|2|||KAUS:39
KHYR|HYR|Hayward|Sawyer County|US|2|||KDLH:108
KHYS|HYS|Hays|Hays Regional|US|3
KHYW||Conway|Conway Horry County|US|1|||KMYR:24
KHYX||Saginaw|Saginaw County H.W. Browne|US|1|||KMBS:21
KHZD||Huntingdon|Carroll County|US|1|||KMKL:68
KHZE||Hazen|Mercer County Regional|US|1|||KBIS:85
KHZL|HZL|Hazleton|Hazleton Municipal|US|1|||KAVP:45
KHZR||New Roads|False River Regional|US|1|||KBTR:38
KHZX||Mc Gregor|Isedor Iverson|US|1|||KBRD:67
KHZY|JFN|Ashtabula|Northeast Ohio Regional|US|2|||KERI:55
KIAB|IAB|Wichita|McConnell Air Force Base|US|2|||KICT:14
KIAD|IAD|Dulles|Washington Dulles|US|4
KIAG|IAG|Niagara Falls||US|3
KIAH|IAH|Houston|George Bush Intercontinental|US|4
KIBM||Kimball|Kimball Municipal Robert E Arraj Field|US|1|||KBFF:77
KICL|ICL|Clarinda|Schenck Field|US|1|||KOMA:97
KICR||Winner|Winner Regional|US|1||KSFD|KPIR:116
KICT|ICT|Wichita|Wichita Dwight D. Eisenhower National|US|3
KIDA|IDA|Idaho Falls|Idaho Falls Regional|US|3
KIDG|IDG|Ida Grove|Ida Grove Municipal|US|1|||KSUX:77
KIDI|IDI|Indiana|Indiana County–Jimmy Stewart|US|1|||KJST:42
KIDL||Indianola|Indianola Municipal|US|1|||KGLH:28
KIDP|IDP|Independence|Independence Municipal|US|1|||KTUL:107
KIEN|XPR|Pine Ridge||US|1|||KCDR:52
KIER||Natchitoches|Natchitoches Regional|US|1|||KAEX:69
KIFA|IFA|Iowa Falls|Iowa Falls Municipal|US|1|||KALO:72
KIFP|IFP|Bullhead City|Laughlin Bullhead|US|2|||KHII:68
KIGM|IGM|Kingman||US|2|||KHII:86
KIGQ||Chicago|Lansing Municipal|US|1|||KGYY:13
KIIB||Independence|Independence Municipal|US|1|||KALO:39
KIIY||Washington|Washington Wilkes County|US|1|||KAGS:91
KIJD||North Windham|Windham|US|1|||KBDL:47
KIJX|IJX|Jacksonville|Jacksonville Municipal|US|1|||KSPI:48
KIKG||Kingsville|Kleberg County|US|1|||KCRP:58
KIKK|IKK|Kankakee|Greater Kankakee|US|2|||KGYY:71
KIKV||Ankeny|Ankeny Regional|US|1|||KDSM:19
KIKW||Midland|Jack Barstow|US|1|||KMBS:20
KILE|ILE|Killeen|Skylark Field|US|1|||KACT:73
KILG|ILG|Wilmington||US|3
KILM|ILM|Wilmington||US|3
KILN|ILN|Wilmington|Wilmington Airpark|US|2|||KDAY:64
KIML|IML|Imperial|Imperial Municipal|US|1|||KMCK:93
KIMM|IMM|Immokalee|Immokalee Regional|US|1|||KRSW:37
KIMS|MDN|Madison|Madison Municipal|US|1|||KSDF:69
KIMT|IMT|Kingsford|Ford|US|3
KIND|IND|Indianapolis||US|4
KINF||Inverness||US|1|||KTPA:94
KINJ||Hillsboro|Hillsboro Municipal|US|1|||KACT:54
KINK|INK|Wink|Winkler County|US|2|||KMAF:96
KINL|INL|International Falls|Falls|US|3
KINS|INS|Indian Springs|Creech Air Force Base|US|1|||KLAS:73
KINT|INT|Winston Salem|Smith Reynolds|US|2|||KGSO:26
KINW|INW|Winslow|Winslow Lindbergh Regional|US|2|||KFLG:87
KIOB||Mount Sterling|Mount Sterling Montgomery County|US|1|||KLEX:55
KIOW|IOW|Iowa City|Iowa City Municipal|US|1|||KCID:31
KIPJ||Lincolnton|Lincolnton Lincoln County Regional|US|1|||KCLT:36
KIPL|IPL|Imperial|Imperial County|US|3
KIPT|IPT|Williamsport|Williamsport Regional|US|3
KIRK|IRK|Kirksville|Kirksville Regional|US|3
KIRS|IRS|Sturgis|Kirsch Municipal|US|1|||KAZO:47
KISB||Sibley|Sibley Municipal|US|1|||KFSD:83
KISM|ISM|Orlando|Kissimmee Gateway|US|2|||KMCO:20
KISO|ISO|Kinston|Kinston Regional Jetport At Stallings Field|US|2|||KPGV:39
KISP|ISP|Islip|Long Island MacArthur|US|3
KISQ|ISQ|Manistique|Schoolcraft County|US|1|||KESC:76
KISW|ISW|Wisconsin Rapids|Alexander Field South Wood County|US|1|||KCWA:48
KITH|ITH|Ithaca|Ithaca Tompkins Regional|US|3
KITR||Burlington|Kit Carson County|US|1|||KMCK:180
KIUA|IUA|Ontario County IDA|Canandaigua|US|1|||KROC:37
KIWA|AZA|Mesa|Mesa Gateway|US|3
KIWD|IWD|Ironwood|Gogebic Iron County|US|2
KIWH||Wabash|Wabash Municipal|US|1|||KFWA:56
KIWI|ISS|Wiscasset||US|1|||KAUG:41
KIWS|IWS|Houston|West Houston|US|1|||KIAH:37
KIXA||Halifax|Halifax-Northampton Regional|US|1|||KPGV:80
KIXD|JCI|New Century|New Century AirCenter|US|1||KNUU|KMCI:55
KIYA||Abbeville|Abbeville Chris Crusta Memorial|US|1|||KLFT:27
KIYK|IYK|Inyokern||US|1|||KBFL:114
KIZA|SQA|Santa Ynez||US|1|||KSBA:30
KIZG|FRY|Fryeburg|Eastern Slopes Regional|US|1|||KPWM:64
KJAC|JAC|Jackson|Jackson Hole|US|3
KJAN|JAN|Jackson|Jackson-Medgar Wiley Evers|US|3
KJAQ||Jackson|Westover Field Amador County|US|1|||KSCK:66
KJAS|JAS|Jasper|Jasper County Airport Bell Field|US|1|||KBPT:104
KJAU||Jacksboro|Campbell County Airport - Colonel Tommy C Stiner|US|1|||KTYS:60
KJAX|JAX|Jacksonville||US|4
KJBR|JBR|Jonesboro|Jonesboro Municipal|US|3
KJCA||Jefferson|Jackson County|US|1|||KPDK:76
KJCT|JCT|Junction|Kimble County|US|2|||KSJT:117
KJDD||Mineola|Wood County Airport - Collins Field|US|1|||KTYR:44
KJDN|JDN|Jordan||US|1|||KGGW:101
KJEF|JEF|Jefferson City|Jefferson City Memorial|US|1|||KCOU:26
KJER||Jerome|Jerome County|US|1|||KTWF:27
KJES||Jesup|Jesup Wayne County|US|1|||KBQK:51
KJFK|JFK|New York|John F. Kennedy|US|4
KJFX||Jasper|Walker County Airport Bevill Field|US|1|||KBHM:64
KJFZ||Cedar Bluff|Tazewell County|US|1||KBNK|KTRI:85
KJGG||Williamsburg|Williamsburg Jamestown|US|1|||KPHF:23
KJHN||Johnson City|Stanton County Municipal|US|1|||KLBL:91
KJHW|JHW|Jamestown|Chautauqua County-Jamestown|US|2|||KBFD:64
KJKA|GUF|Gulf Shores|Jack Edwards National|US|1|||KPNS:51
KJKJ||Moorhead|Moorhead Municipal|US|1|||KFAR:15
KJKL||Jackson|Julian Carroll|US|2|||KHTS:109
KJLN|JLN|Joplin|Joplin Regional|US|3
KJMR||Mora|Mora Municipal|US|1|||KSTC:72
KJMS|JMS|Jamestown|Jamestown Regional|US|3
KJNX||Smithfield|Johnston Regional|US|2|||KRDU:52
KJOT|JOT|Joliet|Joliet Regional|US|1|||KMDW:46
KJPX|HTO|East Hampton|Town of East Hampton|US|1||KHTO|KMTP:31
KJQD||Hartford|Ohio County|US|1|||KOWB:42
KJQF|USA|Concord|Concord-Padgett Regional|US|3
KJRO||Jackson|James A Rhodes|US|1|||KHTS:68
KJSO|JKV|Jacksonville|Cherokee County|US|1|||KTYR:57
KJST|JST|Johnstown|John Murtha Johnstown Cambria County|US|3
KJSV||Sallisaw|Sallisaw Municipal|US|1|||KFSM:41
KJSY||Joseph|Joseph State|US|1|||KMYL:105
KJTC||Springerville|Springerville Municipal|US|1|||KSOW:66
KJVL|JVL|Janesville|Southern Wisconsin Regional|US|1|||KRFD:47
KJVW||Raymond|John Bell Williams|US|1|||KJAN:31
KJVY||Jeffersonville|Clark Regional|US|1|||KSDF:22
KJWG||Watonga|Watonga Regional|US|1|||KOKC:91
KJWN||Nashville|John C Tune|US|1|||KBNA:20
KJWY||Midlothian/Waxahachie|Mid-Way Regional|US|2|||KDAL:43
KJXI||Gilmer|Fox Stephens Field Gilmer Municipal|US|1|||KGGG:41
KJXN|JXN|Jackson|Jackson County Airport/Reynolds Field|US|2|||KLAN:58
KJYG||St James|St James Municipal|US|1|||KMCW:135
KJYL||Sylvania|Plantation Airpark|US|1|||KSAV:69
KJYM||Hillsdale|Hillsdale Municipal|US|1|||KTOL:74
KJYO||Leesburg|Leesburg Executive|US|1|||KIAD:17
KJYR||York|York Municipal|US|1|||KGRI:58
KJZI||Johns Island|Charleston Executive|US|1|||KCHS:22
KJZP||Jasper|Pickens County|US|1|||KPDK:66
KKIC|KIC|King City|Mesa Del Rey|US|1|||KMRY:76
KKLS|KLS|Kelso|Southwest Washington Regional|US|2|||KPDX:63
KKNB|KNB|Kanab|Kanab Municipal|US|1|||KSGU:87
KLAA|LAA|Lamar|Southeast Colorado Regional|US|2|||KPUB:160
KLAF|LAF|West Lafayette|Purdue University|US|3
KLAL|LAL|Lakeland|Lakeland Linder|US|3
KLAM|LAM|Los Alamos||US|1|||KSAF:33
KLAN|LAN|Lansing|Capital Region|US|3
KLAR|LAR|Laramie|Laramie Regional|US|3
KLAS|LAS|Las Vegas|Harry Reid|US|4
KLAW|LAW|Lawton|Lawton Fort Sill Regional|US|3
KLAX|LAX|Los Angeles||US|4
KLBB|LBB|Lubbock|Lubbock Preston Smith|US|3
KLBE|LBE|Latrobe|Arnold Palmer Regional|US|3
KLBF|LBF|North Platte|North Platte Regional Airport Lee Bird Field|US|3
KLBL|LBL|Liberal|Liberal Mid-America Regional|US|3
KLBO||Lebanon|Floyd W. Jones Lebanon|US|1|||KTBN:46
KLBR||Clarksville|Clarksville Red River City-J D Trissell Field|US|1|||KTXK:101
KLBT|LBT|Lumberton|Lumberton Regional|US|2|||KFAY:45
KLBX|LJN|Angleton|Texas Gulf Coast Regional|US|2|||KHOU:62
KLCG||Wayne|Wayne Municipal Airport / Stan Morris Field|US|1|||KSUX:52
KLCH|LCH|Lake Charles|Lake Charles Regional|US|3
KLCI|LCI|Laconia / Gilford|Laconia Municipal|US|1|||KMHT:71
KLCK|LCK|Columbus|Rickenbacker|US|3
KLCQ|LCQ|Lake City|Lake City Gateway|US|1|||KGNV:62
KLDJ|LDJ|Linden||US|1|||KEWR:10
KLDM|LDM|Ludington|Mason County|US|1|||KMBL:37
KLEB|LEB|Lebanon|Lebanon Municipal|US|3
KLEE|LEE|Leesburg||US|2|||KSFB:56
KLEM|LEM|Lemmon|Lemmon Municipal|US|1|||KDIK:111
KLEW|LEW|Auburn/Lewiston|Auburn Lewiston Municipal|US|1|||KPWM:45
KLEX|LEX|Lexington|Blue Grass|US|3
KLFI|LFI|Hampton|Langley Air Force Base|US|2|||KPHF:13
KLFK|LFK|Lufkin|Angelina County|US|2|||KGGG:128
KLFT|LFT|Lafayette|Lafayette Regional|US|3
KLGA|LGA|New York|LaGuardia|US|4
KLGB|LGB|Long Beach||US|4
KLGC|LGC|LaGrange|LaGrange Callaway|US|1|||KCSG:56
KLGD|LGD|La Grande|La Grande/Union County|US|1|||KPDT:79
KLGF|LGF|Yuma Proving Ground|Laguna Army|US|1|Yuma Proving Ground(Yuma)||MMML:83
KLGU|LGU|Logan|Logan-Cache|US|2|||KOGD:68
KLHB||Hearne|Hearne Municipal|US|1|||KCLL:40
KLHM||Lincoln|Lincoln Regional Karl Harder Field|US|1|||KSMF:32
KLHQ||Lancaster|Fairfield County|US|1|||KLCK:24
KLHV|LHV|Lock Haven|William T. Piper Memorial|US|1|||KIPT:43
KLHW|LIY|Hinesville|MidCoast Regional Airport at Wright Army|US|1|||KSAV:43
KLHX||La Junta|La Junta Municipal|US|1|||KPUB:90
KLHZ|LFN|Louisburg|Triangle North Executive|US|1|||KRDU:44
KLIC|LIC|Limon|Limon Municipal|US|1|||KCOS:103
KLIT|LIT|Little Rock|Bill & Hillary Clinton National Airport/Adams Field|US|3
KLIU||Littlefield|Littlefield Municipal|US|1|||KLBB:60
KLJF||Litchfield|Litchfield Municipal|US|1|||KSTC:61
KLKP|LKP|Lake Placid||US|1|||KSLK:24
KLKR||Lancaster|Lancaster County-Mc Whirter Field|US|1|||KCLT:55
KLKU|LOW|Louisa|Louisa County Airport / Freeman Field|US|1|||KCHO:45
KLKV|LKV|Lakeview|Lake County|US|1|||KMFR:205
KLLJ|CHL|Challis||US|1|||KSMN:72
KLLN||Levelland|Levelland Municipal|US|1|||KLBB:52
KLLQ||Monticello|Monticello Municipal Ellis Field|US|2|||KGLH:73
KLLR||Little River||US|1|||KSTS:117
KLLU||Lamar|Lamar Municipal|US|1|||KJLN:41
KLMO||Longmont|Vance Brand|US|1|||KDEN:54
KLMS|LMS|Louisville|Louisville Winston County|US|1|||KGTR:55
KLMT|LMT|Klamath Falls|Crater Lake-Klamath Regional|US|2|||KMFR:97
KLNA|LNA|West Palm Beach|Palm Beach County Park|US|1|||KDJT:10
KLNC||Lancaster||US|1|||KDAL:32
KLND|LND|Lander|Hunt Field|US|2|||KRIW:35
KLNK|LNK|Lincoln||US|3
KLNL||Land O' Lakes|Kings Land O' Lakes|US|1|||KRHI:61
KLNN|LNN|Willoughby|Lake County Executive|US|1|||KCLE:49
KLNP|LNP|Wise|Lonesome Pine|US|1|||KTRI:58
KLNR|LNR|Spring Green|Tri-County Regional|US|1|||KMSN:69
KLNS|LNS|Lancaster||US|3
KLOL|LOL|Lovelock|Derby Field|US|2|||KRNO:121
KLOM|BBX|Philadelphia|Wings Field|US|1|||KPHL:30
KLOT|LOT|Chicago/Romeoville|Lewis University|US|1|||KMDW:35
KLOU|LOU|Louisville|Bowman Field|US|2|||KSDF:9
KLOZ|LOZ|London|London-Corbin Airport/Magee Field|US|2|||KLEX:116
KLPC|LPC|Lompoc||US|1|||KSMX:26
KLPR||Lorain/Elyria|Lorain County Regional|US|1|||KCLE:28
KLQK|LQK|Pickens|Pickens County|US|1|||KGSP:45
KLQR||Larned|Larned Pawnee County|US|1|||KHYS:73
KLRD|LRD|Laredo||US|3
KLRF|LRF|Jacksonville|Little Rock Air Force Base|US|2|||KLIT:22
KLRG||Lincoln|Lincoln Regional|US|1|||KBGR:66
KLRJ|LRJ|Le Mars|Le Mars Municipal|US|1|||KSUX:45
KLRO||Mount Pleasant|Mount Pleasant Regional Airport Faison Field|US|1|||KCHS:24
KLRU|LRU|Las Cruces||US|3
KLRY||Harrisonville|Lawrence Smith Memorial|US|1|||KMCI:83
KLSB|LSB|Lordsburg|Lordsburg Municipal|US|1|||KSVC:61
KLSE|LSE|La Crosse|La Crosse Regional|US|3
KLSF|LSF|Fort Benning|Lawson Army Air Field|US|2|||KCSG:21
KLSK|LSK|Lusk|Lusk Municipal|US|1|||KCDR:107
KLSN|LSN|Los Banos|Los Banos Municipal|US|1|||KMCE:40
KLSV|LSV|Las Vegas|Nellis Air Force Base|US|2|||KLAS:20
KLTS|LTS|Altus|Altus Air Force Base|US|2|||KLAW:79
KLTY||Chester|Liberty County|US|1|||KHVR:91
KLUA||Luray|Luray Caverns|US|1|||KSHD:57
KLUD||Decatur|Decatur Municipal|US|1|||KDFW:64
KLUF|LUF|Glendale|Luke Air Force Base|US|2|||KPHX:37
KLUG||Lewisburg|Ellington|US|1|||KBNA:70
KLUK|LUK|Cincinnati|Cincinnati Municipal Airport Lunken Field|US|3
KLUL|LUL|Laurel|Hesler Noble Field|US|1|||KPIB:28
KLUM||Menomonie|Menomonie Municipal Score Field|US|1|||KEAU:30
KLUV||Lamesa|Lamesa Municipal|US|1|||KMAF:94
KLUX||Laurens|Laurens County|US|1|||KGSP:50
KLVJ||Houston|Pearland Regional|US|1|||KHOU:14
KLVK|LVK|Livermore|Livermore Municipal|US|1|||KOAK:35
KLVL|LVL|Lawrenceville|Brunswick Municipal|US|1|||KRIC:92
KLVM|LVM|Livingston|Mission Field|US|2|||KBZN:55
KLVN||Minneapolis|Airlake|US|1|||KMSP:28
KLVS|LVS|Las Vegas|Las Vegas Municipal|US|2|||KSAF:86
KLWA||South Haven|South Haven Area Regional|US|1|||KAZO:60
KLWB|LWB|Lewisburg|Greenbrier Valley|US|3
KLWC|LWC|Lawrence|Lawrence Municipal|US|1|||KMCI:54
KLWD||Lamoni|Lamoni Municipal|US|1|||KDSM:102
KLWL|LWL|Wells|Wells Municipal Airport/Harriet Field|US|1|||KEKO:80
KLWM|LWM|Lawrence|Lawrence Municipal|US|2|||KMHT:35
KLWS|LWS|Lewiston|Lewiston Nez Perce County|US|3
KLWT|LWT|Lewistown|Lewistown Municipal|US|2|||KGTF:152
KLWV|LWV|Lawrenceville|Lawrenceville Vincennes|US|1|||KEVV:81
KLXL||Little Falls|Little Falls-Morrison County-Lindbergh field|US|1|||KSTC:50
KLXN|LXN|Lexington|Jim Kelly Field|US|1|||KEAR:65
KLXT||Lee's Summit|Lee's Summit Municipal|US|1|||KMCI:48
KLXV|LXV|Leadville|Lake County|US|1|||KASE:48
KLXY||Mexia|Mexia Limestone County|US|1|||KACT:68
KLYH|LYH|Lynchburg|Lynchburg Regional Airport - Preston Glenn Field|US|3
KLYO|LYO|Lyons|Lyons-Rice County Municipal|US|1|||KSLN:71
KLYV||Luverne|Quentin Aanenson Airfield - Luverne Municipal|US|1|||KFSD:42
KLZD||Danielson||US|1|||KPVD:41
KLZU|LZU|Lawrenceville|Gwinnett County Briscoe Field|US|1|||KPDK:33
KLZZ||Lampasas||US|1|||KACT:108
KMAC|MAC|Macon|Macon Downtown|US|1|||KMCN:17
KMAE|MAE|Madera|Madera Municipal|US|1|||KFAT:42
KMAF|MAF|Midland|Midland International Air and Space Port|US|3
KMAI||Marianna|Marianna Municipal|US|1|||KDHN:60
KMAL||Malone|Malone Dufort|US|1|||KMSS:42
KMAN||Nampa|Nampa Municipal|US|1|||KBOI:24
KMAO||Mullins|Marion County|US|1|||KFLO:36
KMAW|MAW|Malden|Malden Regional|US|1|||KCGI:79
KMBG|MBG|Mobridge|Mobridge Municipal|US|2|||KPIR:130
KMBL|MBL|Manistee|Manistee County Blacker|US|2
KMBO|DXE|Madison|Bruce Campbell Field|US|1|||KJAN:14
KMBS|MBS|Freeland|MBS|US|3
KMBT||Murfreesboro|City of Murfreesboro|US|1|||KBNA:39
KMBY|MBY|Moberly|Omar N Bradley|US|1|||KIRK:71
KMCB|MCB|McComb|McComb-Pike County Airport / John E Lewis Field|US|2|||KBTR:97
KMCC|MCC|Sacramento|McClellan|US|2|||KSMF:17
KMCD|MCD|Mackinac Island||US|1|||KPLN:35
KMCE|MCE|Merced|Merced Regional Macready Field|US|3
KMCF|MCF|Tampa|MacDill Air Force Base|US|2|||KTPA:14
KMCI|MCI|Kansas City||US|4
KMCK|MCK|McCook|McCook Ben Nelson Regional|US|3
KMCN|MCN|Macon|Middle Georgia Regional|US|3
KMCO|MCO|Orlando||US|4
KMCW|MCW|Mason City|Mason City Municipal|US|3
KMCX||Monticello|White County|US|1|||KLAF:36
KMCZ||Williamston|Martin County|US|1|||KPGV:31
KMDD|MDD|Midland|Midland Airpark|US|1|||KMAF:14
KMDF||Mooreland|Mooreland Municipal|US|1|||KDDC:158
KMDH|MDH|Murphysboro|Southern Illinois|US|2|||KMWA:21
KMDQ||Huntsville|Madison County Executive Airport-Tom Sharp Jr Field|US|1|||KHSV:32
KMDS|XMD|Madison|Madison Municipal|US|1|||KFSD:55
KMDT|MDT|Harrisburg||US|3
KMDW|MDW|Chicago|Chicago Midway|US|4
KMDZ|MDF|Medford|Taylor County|US|1|||KCWA:61
KMEB|MXE|Maxton|Laurinburg Maxton|US|1|||KFAY:50
KMEI|MEI|Meridian|Key Field / Meridian Regional|US|3
KMEJ||Meade|Meade Municipal|US|1|||KLBL:59
KMEM|MEM|Memphis|Frederick W. Smith|US|4
KMER|MER|Merced|Castle|US|2|||KMCE:12
KMEV|MEV|Minden|Minden-Tahoe|US|1|||KTRK:49
KMEY||Mapleton|James G. Whiting Memorial Field|US|1|||KSUX:54
KMEZ|UMZ|Mena|Mena Intermountain Municipal|US|1|||KFSM:89
KMFD|MFD|Mansfield|Mansfield Lahm Regional|US|2|||KCLE:86
KMFE|MFE|McAllen|McAllen Miller|US|3
KMFI|MFI|Marshfield|Marshfield Municipal|US|1|||KCWA:44
KMFR|MFR|Medford|Rogue Valley International-Medford|US|3
KMFV|MFV|Melfa|Accomack County|US|1|||KSBY:80
KMGC|MGC|Michigan City|Michigan City Municipal|US|3
KMGE|MGE|Marietta|Dobbins Air Reserve Base|US|2|||KPDK:20
KMGG||Maple Lake|Maple Lake Municipal|US|1|||KSTC:35
KMGJ|MGJ|Montgomery|Orange County|US|1|||KSWF:13
KMGM|MGM|Montgomery|Montgomery Regional|US|3|Dannelly Field
KMGN||Harbor Springs||US|1|||KPLN:19
KMGR|MGR|Moultrie|Moultrie Municipal|US|1|||KVLD:60
KMGW|MGW|Morgantown|Morgantown Municipal Airport Walter L. Hart Field|US|3|Bill
KMGY|MGY|Dayton|Dayton-Wright Brothers|US|1|||KDAY:35
KMHE|MHE|Mitchell|Mitchell Municipal|US|1|||KFSD:106
KMHK|MHK|Manhattan|Manhattan Regional|US|3
KMHL|MHL|Marshall|Marshall Memorial Municipal|US|1|||KCOU:90
KMHP||Metter|Metter Municipal|US|1|||KSAV:87
KMHR|MHR|Sacramento|Sacramento Mather|US|2|||KSMF:30
KMHT|MHT|Manchester|Manchester-Boston Regional|US|3
KMHV|MHV|Mojave|Mojave Air & Space Port|US|2|||KBFL:93
KMIA|MIA|Miami||US|4
KMIB|MIB|Minot|Minot Air Force Base|US|2|||KMOT:18
KMIC|MIC|Minneapolis|Crystal|US|1|||KMSP:23
KMIE|MIE|Muncie|Delaware County Johnson Field|US|2|||KFWA:84
KMIO|MIO|Miami|Miami Municipal|US|1|||KJLN:44
KMIT|MIT|Shafter|Shafter Airport - Minter Field|US|1|||KBFL:15
KMIV|MIV|Millville|Millville Municipal|US|2|||KACY:44
KMIW|MIW|Marshalltown|Marshalltown Municipal|US|1|||KALO:65
KMJD||Picayune|Picayune Municipal|US|1|||KGPT:56
KMJQ|MJQ|Jackson|Jackson Municipal|US|1|||KFOD:138
KMJX|MJX|Toms River|Ocean County|US|1|||KACY:58
KMKA||Miller|Miller Municipal|US|1|||KPIR:107
KMKC|MKC|Kansas City|Charles B. Wheeler Downtown|US|2|||KMCI:22
KMKE|MKE|Milwaukee|General Mitchell|US|4
KMKG|MKG|Muskegon|Muskegon County|US|3
KMKJ||Rural Retreat|Mountain Empire|US|1|||KBKW:101
KMKL|MKL|Jackson|McKellar-Sipes Regional|US|3
KMKN||Comanche|Comanche County City|US|1|||KMWL:109
KMKO|MKO|Muskogee|Muskogee-Davis Regional|US|1|||KTUL:76
KMKS||Moncks Corner|Berkeley County|US|1|||KCHS:32
KMKT|MKT|Mankato|Mankato Regional|US|1|||KMSP:91
KMKV||Marksville|Marksville Municipal|US|1|||KAEX:52
KMKY|MRK|Marco Island|Marco Island Executive|US|1|||KRSW:61
KMLB|MLB|Melbourne|Melbourne Orlando|US|3
KMLC|MLC|Mc Alester|Mc Alester Regional|US|2|||KFSM:138
KMLD|MLD|Malad City||US|1|||KPIH:86
KMLE|MIQ|Omaha|Millard|US|1|||KOMA:22
KMLF|MLF|Milford|Milford Municipal-Ben and Judy Briscoe Field|US|1|||KCDC:81
KMLI|MLI|Moline|Quad City|US|3
KMLJ|MLJ|Milledgeville|Baldwin County Regional|US|1|||KMCN:64
KMLS|MLS|Miles City|Miles City Airport - Frank Wiley Field|US|2|||KGDV:114
KMLT|MLT|Millinocket|Millinocket Municipal|US|1|||KBGR:94
KMLU|MLU|Monroe|Monroe Regional|US|3
KMMH|MMH|Mammoth Lakes|Mammoth Yosemite|US|3
KMMI|MMI|Athens|McMinn County|US|1|||KTYS:69
KMMK||Meriden|Meriden Markham Municipal|US|1|||KHVN:28
KMML|MML|Marshall|Southwest Minnesota Regional Airport - Marshall/Ryan Field|US|1|||KATY:117
KMMS|MMS|Marks|Selfs|US|1|||KMEM:95
KMMT|MMT|Eastover|Mc Entire Joint National Guard Base|US|2|||KCAE:30
KMMU|MMU|Morristown|Morristown Municipal|US|2|||KEWR:24
KMMV||McMinnville|McMinnville Municipal|US|2|||KSLE:33
KMNE||Minden||US|1|||KSHV:54
KMNF||Mountain View||US|1|||KTBN:91
KMNI||Manning|Santee Cooper Regional|US|1|||KCHS:78
KMNM|MNM|Menominee|Menominee–Marinette Twin County|US|1|||KESC:79
KMNN|MNN|Marion|Marion Municipal|US|1|||KCMH:70
KMNV||Madisonville|Monroe County|US|1|||KTYS:46
KMNZ||Hamilton|Hamilton Municipal|US|1|||KACT:87
KMOB|MOB|Mobile|Mobile Regional|US|3
KMOD|MOD|Modesto|Modesto City Co-Harry Sham Field|US|2|||KSCK:39
KMOP|MOP|Mount Pleasant|Mount Pleasant Municipal|US|1|||KMBS:54
KMOR|MOR|Morristown|Morristown Regional|US|1|||KTYS:69
KMOT|MOT|Minot||US|3
KMOX|MOX|Morris|Morris Municipal Airport Charlie Schmidt Field|US|1|||KATY:118
KMPE||Philadelphia|Philadelphia Municipal|US|1|||KMEI:63
KMPG||Moundsville|Marshall County|US|1|||KMGW:75
KMPI|RMY|Mariposa|Mariposa Yosemite|US|1|||KMCE:49
KMPJ|MPJ|Morrilton|Petit Jean Park|US|1|||KHOT:75
KMPO|MPO|Mount Pocono|Pocono Mountains Municipal|US|1|||KAVP:36
KMPR|MPR|Mc Pherson||US|1|||KSLN:49
KMPV|MPV|Barre/Montpelier|Edward F Knapp State|US|2|||KBTV:56
KMPZ|MPZ|Mount Pleasant|Mount Pleasant Municipal|US|1|||KBRL:37
KMQB|MQB|Macomb|Macomb Municipal|US|1|||KBRL:49
KMQI|MEO|Manteo|Dare County Regional|US|1|||KORF:118
KMQJ||Indianapolis|Indianapolis Regional|US|1|||KIND:37
KMQS|CTH|Coatesville|Chester County G O Carlson|US|1|||KLNS:40
KMQW|MQW|Mc Rae|Telfair Wheeler|US|1|||KMCN:98
KMQY|MQY|Smyrna||US|2|||KBNA:19
KMRB|MRB|Martinsburg|Eastern WV Regional Airport/Shepherd Field|US|2|||KHGR:41
KMRC|MRC|Columbia/Mount Pleasant|Maury County|US|1|||KBNA:78
KMRF|MRF|Marfa|Marfa Municipal|US|1|||KCNM:220
KMRH||Beaufort|Michael J. Smith Field|US|1|||KEWN:51
KMRJ||Mineral Point|Iowa County|US|1|||KDBQ:66
KMRN|MRN|Morganton|Foothills Regional|US|1|||KCLT:91
KMRT||Marysville|Union County|US|1|||KCMH:47
KMRY|MRY|Monterey|Monterey Regional|US|3
KMSL|MSL|Muscle Shoals|Northwest Alabama Regional|US|3
KMSN|MSN|Madison|Dane County Regional Truax Field|US|3
KMSO|MSO|Missoula|Missoula Montana|US|3
KMSP|MSP|Minneapolis|Minneapolis–Saint Paul International Airport / Wold–Chamberlain Field|US|4
KMSS|MSS|Massena|Massena International Airport Richards Field|US|3
KMSV|MSV|Monticello|Sullivan County|US|1|||KSWF:61
KMSY|MSY|New Orleans|Louis Armstrong New Orleans|US|4
KMTC|MTC|Mount Clemens|Selfridge Air National Guard Base|US|2|||CYQG:39
KMTH|MTH|Marathon|Florida Keys Marathon|US|2|||KEYW:74
KMTJ|MTJ|Montrose|Montrose Regional|US|3
KMTN|MTN|Baltimore|Martin State|US|2|||KBWI:28
KMTO|MTO|Mattoon|Coles County Memorial|US|1|||KCMI:62
KMTP|MTP|Montauk||US|2
KMTV||Martinsville|Blue Ridge|US|1|||KGSO:60
KMTW|MTW|Manitowoc|Manitowoc County|US|1|||KGRB:53
KMUI|MUI|Fort Indiantown Gap|Muir Army Air Field|US|2|Fort Indiantown Gap(Annville) Fort Indiantown Ga||KMDT:32
KMUL|MUL|Moultrie|Spence|US|1|||KVLD:57
KMUO|MUO|Mountain Home|Mountain Home Air Force Base|US|2|||KBOI:65
KMUT|MUT|Muscatine|Muscatine Municipal|US|1|||KMLI:54
KMVC|MVC|Monroeville|Monroe County Aeroplex|US|1|||KPNS:111
KMVE|MVE|Montevideo|Montevideo Chippewa County|US|1|||KATY:114
KMVI||Monte Vista|Monte Vista Municipal|US|1|||KALS:19
KMVL|MVL|Morrisville|Morrisville-Stowe State|US|1|||KBTV:43
KMVM||Machias|Machias Valley|US|1|||KBHB:75
KMVN|MVN|Mount Vernon|Mount Vernon Outland|US|1|||KMWA:65
KMVY|MVY|Martha's Vineyard||US|2
KMWA|MWA|Marion|Veterans Airport of Southern Illinois|US|3
KMWC|MWC|Milwaukee|Lawrence J Timmerman|US|1|||KMKE:21
KMWH|MWH|Moses Lake|Grant County|US|2|||KEAT:70
KMWK||Mount Airy|Mount Airy Surry County|US|1|||KGSO:68
KMWL|MWL|Mineral Wells|Mineral Wells Regional|US|3
KMWM|MWM|Windom|Windom Municipal|US|1|||KFSD:136
KMWO|MWO|Middletown|Middletown Regional|US|1|||KDAY:44
KMXA|MXA|Manila|Manila Municipal|US|1|||KJBR:45
KMXF|MXF|Montgomery|Maxwell Air Force Base|US|2|||KMGM:10
KMXO|MXO|Monticello|Monticello Regional|US|1|||KDBQ:42
KMYF|MYF|San Diego|Montgomery-Gibbs Executive|US|1|||KSAN:10
KMYJ||Mexico|Mexico Memorial|US|1|||KCOU:51
KMYK|MYK|May Creek||US|2
KMYL|MYL|McCall|McCall Municipal|US|3
KMYR|MYR|Myrtle Beach||US|4
KMYV|MYV|Marysville|Yuba County|US|2|||KSMF:45
KMYZ||Marysville|Marysville Municipal|US|1|||KMHK:80
KMZH||Moose Lake|Moose Lake Carlton County|US|1|||KDLH:66
KMZJ|MZJ|Marana|Pinal Airpark|US|1|||KTUS:57
KMZZ|MZZ|Marion|Marion Municipal|US|1|||KFWA:68
KNBC||Beaufort|Beaufort MCAS - Merritt Field|US|2|||KHXD:28
KNBG|NBG|New Orleans|New Orleans NAS JRB/Alvin Callender Field|US|2|||KMSY:29
KNBJ|NHX|Foley|Naval Outlying Field Barin|US|1|||KPNS:44
KNCA||Jacksonville|MCAS New River / McCutcheon Field|US|2|||KOAJ:21
KNDY|DGN|Dahlgren|Dahlgren Naval Surface Warfare Center|US|1|||KDCA:58
KNDZ||Milton|Whiting Field Naval Air Station South|US|2|||KPNS:30
KNEL|NEL|Lakehurst|Lakehurst Maxfield Field|US|2|||KTTN:48
KNEN|NEN|Jacksonville|Whitehouse Naval Outlying Field|US|1|||KJAX:23
KNEW|NEW|New Orleans|Lakefront|US|2|||KMSY:23
KNFD||Summerdale|Summerdale Naval Outlying Field|US|1|||KPNS:44
KNFE||Fentress|Fentress Naval Auxiliary Landing Field|US|1|||KORF:23
KNFG||Oceanside|Camp Pendleton MCAS|US|2|Munn Field||KCRQ:20
KNFJ||Milton|Choctaw Nolf|US|1|||KPNS:22
KNFL|NFL|Fallon|Fallon Naval Air Station|US|2|||KRNO:92
KNFW|FWH|Fort Worth|NAS Fort Worth JRB / Carswell Field|US|2|||KDFW:40
KNGP|NGP|Corpus Christi|Naval Air Station Corpus Christi Truax Field|US|2|||KCRP:22
KNGS||Milton|Santa Rosa Naval Outlying Field|US|1|||KPNS:28
KNGT||Goliad|Naval Outlying Landing Field Goliad|US|1|||KVCT:73
KNGU|NGU|Norfolk|Norfolk Naval Station|US|2|Chambers Field||KORF:9
KNGW|NGW|Corpus Christi|Cabaniss Field Naval Outlying Landing Field|US|1|||KCRP:9
KNHK|NHK|Patuxent River|Patuxent River Naval Air Station|US|2|Trapnell Field||KSBY:79
KNID||China Lake|China Lake Naws|US|2|Armitage Field||KBFL:127
KNIP|NIP|Jacksonville|Jacksonville Naval Air Station|US|2|Towers Field||KJAX:29
KNJK|NJK|El Centro|El Centro NAF Airport|US|2|Vraciu Field||KIPL:9
KNJM||Bogue|Marine Corps Auxiliary Landing Field Bogue|US|1|||KEWN:43
KNJW||Preston|Joe Williams Naval Outlying Field|US|1|||KMEI:52
KNKT||Cherry Point|Cherry Point MCAS / Cunningham Field/|US|2|||KEWN:24
KNKX|NKX|San Diego|Miramar Marine Corps Air Station - Mitscher Field|US|2|||KSAN:16
KNLC|NLC|Lemoore|Lemoore Naval Air Station|US|2|Reeves Field||KFAT:53
KNMM||Lauderdale|Naval Air Station Meridian / McCain Field|US|2|||KMEI:31
KNOG||Orange Grove|Orange Grove Naval Auxiliary Landing Field|US|1|||KCRP:56
KNOW||Port Angeles|Port Angeles Cgas|US|1|||KFHR:51
KNPA|NPA|Pensacola|Naval Air Station Pensacola Forrest Sherman Field|US|2||KNAS|KPNS:18
KNQA|NQA|Millington|Millington-Memphis|US|2|||KMEM:36
KNQB||Daphne|Silverhill Naval Outlying Landing Field|US|1|||KMOB:44
KNQI|NQI|Kingsville|Kingsville Naval Air Station|US|2|||KCRP:42
KNQX|NQX|Key West|Naval Air Station Key West/Boca Chica Field|US|2|||KEYW:7
KNRA||Coupeville|Coupeville Nolf|US|1|||OTS:35
KNRB|NRB|Jacksonville|Naval Station Mayport / Admiral David L McDonald Field|US|2|||KJAX:28
KNRN||Norton|Norton Municipal|US|1|||KMCK:71
KNRQ||Pace|Spencer Nolf|US|1|||KPNS:18
KNRS|NRS|Imperial Beach|Naval Outlying Field Imperial Beach|US|1|Ream Field||MMTJ:14
KNSE|NSE|Milton|Whiting Field Naval Air Station - North|US|2|||KPNS:32
KNSI||San Nicolas Island|San Nicolas Island Nolf|US|1|||KLAX:125
KNTD|NTD|Point Mugu|Point Mugu Naval Air Station|US|2|Naval Base Ventura Co||KLAX:69
KNTU|NTU|Virginia Beach|Oceana Naval Air Station|US|2|||KORF:17
KNUC||San Clemente Island|San Clemente Island Naval Auxiliary Landing Field|US|1|||KLGB:97
KNUI||St Inigoes|Naval Outlying Landing Field Webster|US|1|||KSBY:83
KNUQ|NUQ|Mountain View|Moffett Federal|US|2|||KSJC:12
KNUW|NUW|Oak Harbor|Whidbey Island Naval Air Station|US|2|Ault Field||OTS:16
KNVD|NVD|Nevada|Nevada Municipal|US|1|||KJLN:80
KNWL||Corpus Christi|Waldron Field Naval Outlying Landing Field|US|1|||KCRP:24
KNXP||Twentynine Palms|Twentynine Palms Strategic Expeditionary Landing Field|US|2|||KPSP:61
KNYG|NYG|Quantico|Quantico Marine Corps Airfield / Turner Field|US|2|||KDCA:45
KNYL|YUM|Yuma|Yuma International Airport / Marine Corps Air Station Yuma|US|3||KYUM
KNZY|NZY|San Diego|North Island Naval Air Station-Halsey Field|US|2|||KSAN:4
KOAJ|OAJ|Richlands|Albert J Ellis|US|3
KOAK|OAK|Oakland|Oakland San Francisco Bay|US|4
KOAR|OAR|Marina|Marina Municipal|US|1|||KMRY:13
KOBE|OBE|Okeechobee|Okeechobee County|US|1|||KVRB:61
KOBI||Woodbine|Woodbine Municipal|US|1|||KACY:32
KOCF|OCF|Ocala|Ocala International Airport - Jim Taylor Field|US|1|||KGNV:58
KOCH|OCH|Nacogdoches|A L Mangham Jr. Regional|US|1|||KGGG:90
KOCQ||Oconto|J. Douglas Bake Memorial|US|1|||KGRB:47
KOCW|OCW|Washington|Warren Field|US|1|||KPGV:31
KODO|ODT|Odessa|Odessa Schlemeyer Field|US|1|||KMAF:18
KODX||Ord|Evelyn Sharp Field|US|1|||KGRI:91
KOEA|OEA|Lawrenceville|O'Neal|US|1|||KEVV:72
KOEB||Coldwater|Branch County Memorial|US|1|||KAZO:53
KOEL||Oakley|Oakley Municipal|US|1|||KMCK:124
KOEO|OEO|Osceola|L O Simenstad Municipal|US|1|||KMSP:63
KOFF|OFF|Omaha|Offutt Air Force Base|US|2|||KOMA:20
KOFK|OFK|Norfolk|Karl Stefan Memorial|US|2|||KSUX:98
KOFP||Hanover|Hanover County Municipal|US|1|||KRIC:25
KOGA|OGA|Ogallala|Ogallala Municipal Airport Searle Field|US|1|||KLBF:91
KOGB|OGB|Orangeburg|Orangeburg Municipal|US|2|||KCAE:59
KOGD|OGD|Ogden|Ogden Hinckley|US|3
KOGM||Ontonagon|Ontonagon County Schuster Field|US|1|||KIWD:68
KOGS|OGS|Ogdensburg||US|3
KOIC|OIC|Norwich|Lt Warren Eaton|US|1|||KBGM:55
KOIN||Oberlin|Oberlin Municipal|US|1|||KMCK:42
KOJA||Weatherford|Thomas P Stafford|US|1|||KOKC:98
KOJC|OJC|Olathe|Johnson County Executive|US|1|||KMCI:51
KOKB|OCN|Oceanside|Oceanside Municipal|US|2|||KCRQ:12
KOKC|OKC|Oklahoma City|OKC Will Rogers World|US|4
KOKH|ODW|Oak Harbor|AJ Eisenberg|US|1|||OTS:27
KOKK|OKK|Kokomo|Kokomo Municipal|US|1|||KLAF:76
KOKM|OKM|Okmulgee|Okmulgee Regional|US|1|||KTUL:59
KOKS|OKS|Oshkosh|Garden County Airport/King Rhiley Field|US|1|||KAIA:81
KOKV|WGO|Winchester|Winchester Regional|US|1|||KIAD:63
KOKZ||Sandersville|Kaolin Field|US|1|||KMCN:82
KOLD|OLD|Old Town|Dewitt Field - Old Town Municipal|US|1|||KBGR:20
KOLE|OLE|Olean|Cattaraugus County-Olean|US|1|||KBFD:54
KOLF|OLF|Wolf Point|L M Clayton|US|3
KOLG||Solon Springs|Solon Springs Municipal|US|1|||KDLH:65
KOLM|OLM|Olympia|Olympia Regional|US|3
KOLS|OLS|Nogales||US|2|||KTUS:78
KOLU|OLU|Columbus|Columbus Municipal|US|2|||KLNK:83
KOLV|OLV|Olive Branch||US|1|||KMEM:19
KOLY|OLY|Olney-Noble|Olney Noble|US|1|||KEVV:95
KOLZ||Oelwein|Oelwein Municipal|US|1|||KALO:38
KOMA|OMA|Omaha|Eppley|US|4
KOMH||Orange|Orange County|US|1|||KCHO:38
KOMK|OMK|Omak||US|1|||CYYF:111
KOMN||Ormond Beach|Ormond Beach Municipal|US|1|||KDAB:14
KONA|ONA|Winona|Winona Municipal Airport Max Conrad Field|US|1|||KLSE:42
KONL|ONL|O'Neill|O'Neill Municipal Airport–John L Baker Field|US|1|||KGRI:170
KONM|ONM|Socorro|Socorro Municipal|US|1|||KABQ:116
KONO|ONO|Ontario|Ontario Municipal|US|2|||KBOI:81
KONP|ONP|Newport|Newport Municipal|US|2|||KEUG:84
KONT|ONT|Ontario||US|4
KONX||Maple|Currituck County Regional|US|1|||KORF:58
KONY|ONY|Olney|Olney Municipal|US|1|||KMWL:95
KONZ||Detroit/Grosse Ile|Grosse Ile Municipal|US|1|||KDTW:20
KOOA|OOA|Cedar|Oskaloosa Municipal|US|1|||KCID:98
KOPF|OPF|Miami|Miami-Opa Locka Executive|US|3|||KMIA:12
KOPL|OPL|Opelousas|St Landry Parish Ahart Field|US|1|||KLFT:41
KOPN||Thomaston|Thomaston Upson County|US|1|||KMCN:64
KOQN||West Chester|Brandywine Regional|US|1|||KPHL:32
KOQU|NCO|North Kingstown|Quonset State|US|2|||KUUU:13
KOQW||Maquoketa|Maquoketa Municipal|US|1|||KDBQ:39
KORB||Orr|Orr Regional|US|1|||KHIB:70
KORD|ORD|Chicago|Chicago O'Hare|US|4
KORE||Orange|Orange Municipal|US|1|||KORH:48
KORF|ORF|Norfolk||US|4
KORG||Orange|Orange County|US|1|||KBPT:25
KORH|ORH|Worcester|Worcester Regional|US|3
KORK||North Little Rock|North Little Rock Municipal|US|1|||KLIT:12
KORL|ORL|Orlando|Orlando Executive|US|2|||KMCO:13
KORS|ESD|Eastsound|Orcas Island|US|3
KOSA|MPS|Mount Pleasant|Mount Pleasant Regional|US|1|||KGGG:82
KOSC|OSC|Oscoda|Oscoda Wurtsmith|US|1|||KAPN:71
KOSH|OSH|Oshkosh|Wittman Regional|US|2|||KATW:31
KOSU|OSU|Columbus|The Ohio State University Airport - Don Scott Field|US|2|||KCMH:18
KOSX|OSX|Kosciusko|Kosciusko Attala County|US|1|||KGTR:97
KOTG|OTG|Worthington|Worthington Municipal|US|1|||KFSD:94
KOTH|OTH|North Bend|Southwest Oregon Regional|US|3
KOTM|OTM|Ottumwa|Ottumwa Regional|US|2|||KCID:106
KOUN|OUN|Norman|University of Oklahoma Westheimer|US|1|||KOKC:20
KOVE|OVE|Oroville|Oroville Municipal|US|1|||KSMF:88
KOVL||Olivia|Olivia Regional|US|1|||KSTC:115
KOVO||North Vernon||US|1|||KCVG:81
KOVS||Boscobel||US|1|||KDBQ:84
KOWA|OWA|Owatonna|Owatonna Degner Regional|US|1|||KRST:65
KOWB|OWB|Owensboro|Owensboro Daviess County|US|3
KOWD|OWD|Norwood|Norwood Memorial|US|2|||KBOS:23
KOWI||Ottawa|Ottawa Municipal|US|1|||KMCI:97
KOWK|OWK|Norridgewock|Central Maine/Norridgewock|US|1|||KAUG:44
KOWP||Sand Springs|William R. Pogue Municipal|US|1|||KTUL:24
KOWX||Ottawa|Putnam County|US|1|||KTOL:63
KOXB|OCE|Ocean City|Ocean City Municipal|US|3
KOXC|OXC|Oxford|Waterbury Oxford|US|1|||KHVN:32
KOXD|OXD|Oxford|Miami University|US|1|||KCVG:51
KOXI||Knox|Starke County|US|1|||KMGC:44
KOXR|OXR|Oxnard||US|2|||KSBA:63
KOXV||Knoxville|Knoxville Municipal|US|1|||KDSM:52
KOYM|STQ|St Marys|St Marys Municipal|US|1|||KDUJ:42
KOZA|OZA|Ozona|Ozona Municipal|US|1|||KSJT:97
KOZR|OZR|Fort Rucker/Ozark|Cairns AAF Air Field|US|2|Fort Rucker||KDHN:26
KOZS||Camdenton|Camdenton Memorial|US|1|||KTBN:55
KOZW||Howell|Livingston County Spencer J. Hardy|US|1|||KFNT:43
KPAE|PAE|Everett|Seattle Paine Field|US|3
KPAH|PAH|Paducah|Barkley Regional|US|3
KPAM|PAM|Panama City|Tyndall Air Force Base|US|2|||KECP:38
KPAN|PJB|Payson||US|1|||KFLG:103
KPAO|PAO|Palo Alto||US|2|||KSQL:13
KPBF|PBF|Pine Bluff|Pine Bluff Regional Airport, Grider Field|US|2|||KLIT:67
KPBG|PBG|Plattsburgh||US|3
KPBH||Phillips|Price County|US|1|||KRHI:73
KPBX|PVL|Pikeville|Pike County Airport Hatcher Field|US|1|||KHTS:90
KPCD||Perryville|Perryville Regional|US|1|||KMWA:75
KPCM||Plant City|Plant City Municipal|US|1|||KLAL:14
KPCW||Port Clinton|Erie-Ottawa|US|3
KPCZ||Waupaca|Waupaca Municipal|US|1|||KATW:41
KPDC|PCD|Prairie Du Chien|Prairie Du Chien Municipal|US|1|||KDBQ:77
KPDK|PDK|Atlanta|DeKalb Peachtree|US|3
KPDT|PDT|Pendleton|Eastern Oregon Regional Airport at Pendleton|US|3
KPDX|PDX|Portland||US|4
KPEA||Pella|Pella Municipal|US|1|||KDSM:61
KPEO||Penn Yan||US|1|||KITH:51
KPEQ|PEQ|Pecos|Pecos Municipal|US|1|||KCNM:128
KPEX||Paynesville|Paynesville Municipal|US|1|||KSTC:57
KPEZ||Pleasanton|Pleasanton Municipal|US|1|||KSAT:65
KPFC|PFC|Pacific City|Pacific City State|US|1|||KSLE:82
KPGA|PGA|Page|Page Municipal|US|3
KPGD|PGD|Punta Gorda||US|3
KPGR|PGR|Paragould|Kirk Field|US|1|||KJBR:29
KPGV|PGV|Greenville|Pitt-Greenville|US|3
KPHD|PHD|New Philadelphia|Harry Clever Field|US|1|||KCAK:50
KPHF|PHF|Newport News|Newport News Williamsburg|US|3
KPHG||Phillipsburg|Phillipsburg Municipal|US|1|||KHYS:99
KPHH|ADR|Andrews|Robert F Swinnie|US|1|||KMYR:61
KPHK|PHK|Pahokee|Palm Beach County Glades|US|1|||KDJT:60
KPHL|PHL|Philadelphia||US|4
KPHN|PHN|Port Huron|St Clair County|US|1|||CYQG:79
KPHP|PHP|Philip||US|1|||KPIR:111
KPHT|PHT|Paris|Henry County|US|1|||KPAH:88
KPHX|PHX|Phoenix|Phoenix Sky Harbor|US|4
KPIA|PIA|Peoria|General Wayne A. Downing Peoria|US|3
KPIB|PIB|Moselle|Hattiesburg Laurel Regional|US|3
KPIE|PIE|Pinellas Park|St. Petersburg Clearwater|US|4
KPIH|PIH|Pocatello|Pocatello Regional|US|3
KPIL||Port Isabel|Port Isabel Cameron County|US|1|||KBRO:30
KPIM|PIM|Pine Mountain|Harris County|US|1|||KCSG:36
KPIR|PIR|Pierre|Pierre Regional|US|3
KPIT|PIT|Pittsburgh||US|4
KPJC||Zelienople|Zelienople Municipal|US|1|||KPIT:35
KPJY||Pinckneyville|Pinckneyville Du Quoin|US|1|||KMWA:39
KPKB|PKB|Parkersburg|Mid Ohio Valley Regional|US|3|Parkersburg (Williamstown)
KPKD|PKD|Park Rapids|Park Rapids Municipal Airport Konshok Field|US|1|||KBRD:91
KPKF|PKF|Park Falls|Park Falls Municipal|US|1|||KIWD:67
KPKV||Port Lavaca|Calhoun County|US|1|||KVCT:32
KPLD||Portland|Portland Municipal|US|1|||KFWA:61
KPLK|PLK|Branson / Hollister|M. Graham Clark Downtown|US|1|||KBBG:11
KPLN|PLN|Pellston|Pellston Regional Airport of Emmet County|US|3
KPLR|PLR|Pell City|St Clair County|US|1|||KBHM:46
KPLU||Puyallup|Pierce County-Thun Field|US|1|||KTIW:28
KPMB|PMB|Pembina|Pembina Municipal|US|1|||CYWG:108
KPMD|PMD|Palmdale|Palmdale Regional Airport / USAF Plant 42|US|2|||KBUR:54
KPMH|PMH|Portsmouth|Greater Portsmouth Regional|US|1|||KHTS:58
KPMP|PPM|Pompano Beach|Pompano Beach Airpark|US|1|||KFLL:20
KPMU||Batesville|Panola County|US|1|||KMEM:76
KPMV||Plattsmouth|Plattsmouth Municipal|US|1|||KOMA:40
KPMZ||Plymouth|Plymouth Municipal|US|1|||KPGV:60
KPNA|PWY|Pinedale|Ralph Wenz Field|US|2|||KRIW:114
KPNC|PNC|Ponca City|Ponca City Regional|US|2|||KSWO:63
KPNE|PNE|Philadelphia|Northeast Philadelphia|US|2|||KTTN:27
KPNM||Princeton|Princeton Municipal|US|1|||KSTC:35
KPNN|PNN|Princeton|Princeton Municipal|US|1|||KBHB:104
KPNS|PNS|Pensacola||US|4
KPNT||Pontiac|Pontiac Municipal|US|1|||KBMI:55
KPOB|POB|Fort Bragg|Pope Field|US|2|||KFAY:23
KPOC|POC|La Verne|Brackett Field|US|1|||KONT:17
KPOE|POE|Fort Polk|Polk Army Air Field|US|2|||KAEX:69
KPOF|POF|Poplar Bluff|Poplar Bluff Municipal|US|1|||KCGI:84
KPOH|POH|Pocahontas|Pocahontas Municipal|US|1|||KFOD:43
KPOU|POU|Poughkeepsie|Dutchess County|US|2|||KSWF:23
KPOV||Ravenna|Portage County Regional|US|1|||KCAK:36
KPOY|POY|Powell|Powell Municipal|US|1|||KCOD:43
KPPA|PPA|Pampa|Perry Lefors Field|US|1|||KAMA:78
KPPF|PPF|Parsons|Tri-City|US|1|||KJLN:91
KPPO|LPO|La Porte|La Porte Municipal|US|1|||KMGC:16
KPPQ||Pittsfield|Pittsfield Penstone Municipal|US|1|||KUIN:49
KPQI|PQI|Presque Isle||US|3
KPQL|PGL|Pascagoula|Trent Lott|US|1|||KMOB:37
KPQN||Pipestone|Pipestone Municipal|US|1|||KFSD:57
KPRB|PRB|Paso Robles|Paso Robles Municipal|US|2|||KSBP:49
KPRC|PRC|Prescott|Prescott Regional Airport - Ernest A. Love Field|US|3
KPRG||Paris|Edgar County|US|1|||KCMI:64
KPRN||Greenville|Mac Crenshaw Memorial|US|1|||KMGM:55
KPRO|PRO|Perry|Perry Municipal|US|1|||KDSM:53
KPRS||Presidio|Presidio Lely|US|1|||MMCU:187
KPRX|PRX|Paris|Cox Field|US|2|||KTXK:137
KPRZ||Portales|Portales Municipal|US|1|||KCVN:44
KPSB|PSB|Philipsburg|Mid-State Regional|US|1|||KUNV:20
KPSC|PSC|Pasco|Tri Cities|US|3
KPSF|PSF|Pittsfield|Pittsfield Municipal|US|1|||KALB:55
KPSK|PSK|Dublin|New River Valley|US|1|||KROA:66
KPSM|PSM|Portsmouth|Portsmouth International Airport at Pease|US|3
KPSN|PSN|Palestine|Palestine Municipal|US|1|||KTYR:70
KPSO|PGO|Pagosa Springs|Stevens Field|US|1|||KDRO:64
KPSP|PSP|Palm Springs||US|4
KPSX|PSX|Palacios|Palacios Municipal|US|1|||KVCT:67
KPTB|PTB|Petersburg|Dinwiddie County|US|1|||KRIC:39
KPTD||Potsdam|Potsdam Municipal Airport Damon Field|US|1|||KMSS:30
KPTK|PTK|Pontiac|Oakland County|US|2|||KFNT:43
KPTN|PTN|Patterson|Harry P Williams Memorial|US|1|||KLFT:83
KPTS|PTS|Pittsburg|Atkinson Municipal|US|1|||KJLN:39
KPTT|PTT|Pratt|Pratt Regional|US|1|||KDDC:107
KPTV|PTV|Porterville|Porterville Municipal|US|1|||KBFL:66
KPTW|PTW|Pottstown|Heritage Field|US|1|||KABE:47
KPUB|PUB|Pueblo|Pueblo Memorial|US|3
KPUC|PUC|Price|Carbon County Regional Airport / Buck Davis Field|US|1|||KPVU:107
KPUJ||Dallas|Silver Comet Field at Paulding Northwest Atlanta|US|1|||KATL:56
KPUW|PUW|Pullman|Pullman-Moscow Regional|US|3
KPVB||Platteville|Platteville Municipal|US|1|||KDBQ:39
KPVC|PVC|Provincetown|Provincetown Municipal|US|1|||KHYA:45
KPVD|PVD|Providence/Warwick|Rhode Island T. F. Green|US|4
KPVE||Darden|Beech River Regional|US|1|||KMKL:65
KPVF|PVF|Placerville||US|1|||KSMF:73
KPVG||Chesapeake|Hampton Roads Executive|US|1|||KORF:25
KPVJ||Pauls Valley|Pauls Valley Municipal|US|1|||KOKC:83
KPVU|PVU|Provo|Provo Municipal|US|3
KPVW|PVW|Plainview|Hale County|US|1|||KLBB:57
KPWA|PWA|Oklahoma City|Wiley Post|US|1|||KOKC:16
KPWC||Pine River|Pine River Regional|US|1|||KBRD:41
KPWD|PWD|Plentywood|Sher-Wood|US|1|||KXWA:82
KPWG||Waco|McGregor Executive|US|1|||KACT:16
KPWK|PWK|Chicago/Prospect Heights/Wheeling|Chicago Executive|US|2|||KORD:15
KPWM|PWM|Portland|Portland International Jetport|US|4
KPWT|PWT|Bremerton|Bremerton National|US|2|||KTIW:29
KPXE||Perry|Perry Houston County|US|1|||KMCN:23
KPYG||Pageland||US|1|||KCLT:76
KPYM|PYM|Plymouth|Plymouth Municipal|US|1|||KEWB:32
KPYN||Piedmont|Piedmont Municipal|US|1|||KCGI:102
KPYP||Centre|Centre-Piedmont-Cherokee County Regional|US|1|||KCHA:112
KPYX||Perryton|Perryton Ochiltree County|US|1|||KLBL:73
KPZQ||Rogers City|Presque Isle County|US|1|||KAPN:42
KQMG|||Mudaysis Air Base|IQ|1|||OERR:184
KRAC|RAC|Racine|John H Batten|US|1|||KMKE:22
KRAL|RAL|Riverside|Riverside Municipal|US|2|||KONT:18
KRAP|RAP|Rapid City|Rapid City Regional|US|3
KRAS||Port Aransas|Mustang Beach|US|1|||KCRP:41
KRAW||Warsaw|Warsaw Municipal|US|1|||KCOU:111
KRBD|RBD|Dallas|Dallas Executive|US|1|||KDAL:18
KRBE||Bassett|Rock County|US|1|||KLBF:185
KRBG|RBG|Roseburg|Roseburg Regional|US|1|||KOTH:75
KRBL|RBL|Red Bluff|Red Bluff Municipal|US|2|||KRDD:40
KRBM||North Little Rock|Robinson Army Air Field|US|1|||KLIT:15
KRBO||Robstown|Nueces County|US|1|||KCRP:19
KRBW|RBW|Walterboro|Lowcountry Regional|US|1|||KCHS:56
KRCA|RCA|Rapid City|Ellsworth Air Force Base|US|2|||KRAP:12
KRCE||Oklahoma City|Clarence E Page Municipal|US|1|||KOKC:23
KRCK|RCK|Rockdale|H H Coffield Regional|US|1|||KCLL:60
KRCM||Warrensburg|Skyhaven|US|1|||KMCI:97
KRCP||Stockton|Rooks County Regional|US|1|||KHYS:56
KRCR|RCR|Rochester|Fulton County|US|1|||KSBN:72
KRCV||Del Norte|Astronaut Kent Rominger|US|1|||KALS:53
KRCX||Ladysmith|Rusk County|US|1|||KEAU:80
KRCZ||Rockingham|Richmond County|US|1|||KFLO:79
KRDD|RDD|Redding|Redding Municipal|US|3
KRDG|RDG|Reading|Reading Regional Airport|US|2|Carl A Spaatz Field||KLNS:40
KRDK||Red Oak|Red Oak Municipal|US|1|||KOMA:62
KRDM|RDM|Redmond|Roberts Field|US|3
KRDR|RDR|Grand Forks|Grand Forks Air Force Base|US|2|||KGFK:17
KRDU|RDU|Raleigh/Durham|Raleigh-Durham|US|4
KRED||Red Lodge||US|1|||KCOD:76
KREG||Gonzales|Louisiana Regional|US|1|||KBTR:45
KREI||Redlands|Redlands Municipal|US|1|||KSBD:8
KREO|REO|Rome|Rome State|US|1|||KBOI:174
KRFD|RFD|Chicago/Rockford|Chicago Rockford|US|3
KRFG|RFG|Refugio|Rooke Field|US|1|||KCRP:61
KRFI||Henderson|Rusk County|US|1|||KGGG:30
KRGA||Richmond|Central Kentucky Regional|US|2|||KLEX:51
KRGK||Red Wing|Red Wing Regional|US|1|||KMSP:67
KRHI|RHI|Rhinelander|Rhinelander Oneida County|US|3
KRHP||Andrews|Western Carolina Regional|US|2|||KTYS:69
KRHV|RHV|San Jose|Reid-Hillview Airport of Santa Clara County|US|1|||KSJC:10
KRIC|RIC|Richmond||US|4
KRID|RID|Richmond|Richmond Municipal|US|1|||KDAY:56
KRIF|RIF|Richfield|Richfield Municipal|US|1|||KCDC:144
KRIL|RIL|Rifle|Garfield County Regional|US|2|||KEGE:71
KRIR|RIR|Riverside|Flabob|US|1|||KONT:19
KRIU||Rancho Murieta||US|1|||KSMF:48
KRIV|RIV|Riverside|March Air Reserve Base|US|2|||KSBD:24
KRIW|RIW|Riverton|Central Wyoming Regional|US|3
KRJD||Ridgely|Ridgely Airpark|US|1|||KBWI:73
KRKD|RKD|Rockland|Knox County Regional|US|3
KRKP|RKP|Rockport|Aransas County|US|1|||KCRP:57
KRKR|RKR|Poteau|Robert S Kerr|US|1|||KFSM:42
KRKS|RKS|Rock Springs|Southwest Wyoming Regional|US|3
KRKW|RKW|Rockwood|Rockwood Municipal|US|1|||KTYS:64
KRLD|RLD|Richland||US|1|||KPSC:15
KRME|RME|Rome|Griffiss|US|2|||KSYR:58
KRMG|RMG|Rome|Richard B Russell|US|2|||KCHA:76
KRMN||Fredericksburg|Stafford Regional|US|1|||KIAD:61
KRMY||Marshall|Brooks Field|US|1|||KAZO:49
KRNC|RNC|Mc Minnville|Warren County Memorial|US|1|||KBNA:89
KRND|RND|Universal City|Randolph Air Force Base|US|2|||KSAT:18
KRNH|RNH|New Richmond|New Richmond Regional|US|2|||KMSP:61
KRNM||Ramona||US|1|||KCRQ:35
KRNO|RNO|Reno|Reno Tahoe|US|4
KRNP||Owosso|Owosso Community|US|1|||KFNT:32
KRNT|RNT|Renton|Renton Municipal|US|1|||KBFI:7
KRNV||Cleveland|Cleveland Municipal|US|1|||KGLH:37
KROA|ROA|Roanoke|Roanoke–Blacksburg Regional|US|3
KROC|ROC|Rochester|Frederick Douglass Greater Rochester|US|4
KROG|ROG|Rogers|Rogers Municipal Airport-Carter Field|US|1|||KXNA:21
KROS||Rush City|Rush City Regional|US|1|||KSTC:88
KROW|ROW|Roswell|Roswell Air Center|US|3
KROX|ROX|Roseau|Roseau Municipal Rudy Billberg Field|US|1|||KTVF:95
KRPB||Belleville|Belleville Municipal|US|1|||KMHK:113
KRPD|RIE|Rice Lake|Rice Lake Regional Airport - Carl's Field|US|1|||KEAU:66
KRPH||Graham|Graham Municipal|US|1|||KMWL:59
KRPJ||Rochelle|Rochelle Municipal Airport - Koritz Field|US|1|||KRFD:34
KRPX|RPX|Roundup||US|1|||KBIL:74
KRQB|WBR|Big Rapids|Roben Hood|US|1|||KMBL:85
KRQE||Window Rock||US|1|||KGUP:30
KRQO|RQO|El Reno|El Reno Regional|US|1|||KOKC:38
KRRL|RRL|Merrill|Merrill Municipal|US|1|||KCWA:47
KRRQ||Rock Rapids|Rock Rapids Municipal|US|1|||KFSD:48
KRRT|RRT|Warroad|Warroad International Memorial|US|1||KRAD|KTVF:115
KRSL|RSL|Russell|Russell Municipal|US|2|||KHYS:40
KRSN|RSN|Ruston|Ruston Regional|US|1|||KMLU:52
KRST|RST|Rochester||US|3
KRSV||Robinson|Robinson Municipal|US|1|||KEVV:109
KRSW|RSW|Fort Myers|Southwest Florida|US|4
KRTN|RTN|Raton|Raton Municipal Airport / Crews Field|US|1|||KSKX:110
KRTS||Reno|Reno-Stead|US|1|||KRNO:21
KRUE||Russellville|Russellville Regional|US|1|||KHOT:87
KRUG||Rugby|Rugby Municipal|US|1|||KDVL:88
KRUQ|SRW|Salisbury|Mid-Carolina Regional|US|1|||KJQF:33
KRUT|RUT|Rutland|Rutland - Southern Vermont Regional|US|3
KRVF||Twin Bridges|Ruby Valley Field|US|1|||KBTM:49
KRVJ||Reidsville|Swinton Smith Field at Reidsville Municipal|US|1|||KSAV:90
KRVL|RED|Reedsville|Mifflin County|US|1|||KUNV:27
KRVN||Surgoinsville|Hawkins County|US|1|||KTRI:43
KRVS|RVS|Tulsa|Tulsa Riverside|US|2|||KTUL:20
KRWF|RWF|Redwood Falls|Redwood Falls Municipal|US|2|||KSTC:137
KRWI|RWI|Rocky Mount|Rocky Mount Wilson Regional|US|2|||KPGV:52
KRWL|RWL|Rawlins|Rawlins Municipal Airport/Harvey Field|US|2|||KCPR:137
KRWN||Winamac|Arens Field|US|1|||KMGC:70
KRWV||Caldwell|Caldwell Municipal|US|1|||KCLL:34
KRXE|RXE|Rexburg|Rexburg Madison County|US|1|||KIDA:41
KRYA||Wray|Wray Municipal|US|1|||KMCK:141
KRYM||Fort Ripley|Ray S Miller Army Air Field|US|1|||KBRD:39
KRYN||Tucson|Ryan Field|US|1|||KTUS:23
KRYV||Watertown|Watertown Municipal|US|1|||KMSN:50
KRYW||Lago Vista|Lago Vista Texas Rusty Allen|US|1|||KAUS:45
KRYY||Atlanta|Cobb County International Airport-McCollum Field|US|2|||KPDK:31
KRZL|RNZ|Rensselaer|Jasper County|US|1|||KLAF:63
KRZN||Siren|Burnett County|US|1|||KDLH:114
KRZR||Cleveland|Cleveland Regional Jetport|US|1|||KCHA:42
KRZT||Chillicothe|Ross County|US|1|||KLCK:42
KSAA|SAA|Saratoga|Shively Field|US|1|||KLAR:97
KSAC|SAC|Sacramento|Sacramento Executive|US|2|||KSMF:22
KSAD|SAD|Safford|Safford Regional|US|1|||KSVC:141
KSAF|SAF|Santa Fe|Santa Fe Municipal|US|3
KSAN|SAN|San Diego||US|4
KSAR|SAR|Sparta|Sparta Community Airport - Hunter Field|US|1|||KMWA:74
KSAS|SAS|Salton City|Salton Sea|US|1|||KIPL:57
KSAT|SAT|San Antonio||US|4
KSAV|SAV|Savannah|Savannah Hilton Head|US|4
KSAW|MQT|Gwinn|Marquette Sawyer Regional|US|3
KSAZ||Staples|Staples Municipal|US|1|||KBRD:52
KSBA|SBA|Santa Barbara|Santa Barbara Municipal|US|3
KSBD|SBD|San Bernardino||US|4
KSBM|SBM|Sheboygan|Sheboygan County Memorial|US|1|||KATW:76
KSBN|SBN|South Bend||US|3
KSBO||Swainsboro|Emanuel County|US|1|||KAGS:93
KSBP|SBP|San Luis Obispo|San Luis County Regional|US|3
KSBS|SBS|Steamboat Springs|Steamboat Springs Bob Adams Field|US|1|||KHDN:30
KSBU||Blue Earth|Blue Earth Municipal|US|1|||KMCW:78
KSBX|SBX|Shelby||US|1|||KGTF:123
KSBY|SBY|Salisbury|Salisbury Ocean City Wicomico Regional|US|3
KSCA||Sidney|Sidney Municipal|US|1|||KDAY:38
KSCB|SCB|Scribner|Scribner State|US|1|||KOMA:70
KSCD||Sylacauga|Merkel Field Sylacauga Municipal|US|1|||KBHM:60
KSCH|SCH|Schenectady|Schenectady County|US|2|||KALB:16
KSCK|SCK|Stockton|Stockton Metropolitan|US|3
KSCR||Siler City|Siler City Municipal|US|1|||KGSO:59
KSCX||Oneida|Scott Municipal|US|1|||KTYS:89
KSDA||Shenandoah|Shenandoah Municipal|US|1|||KOMA:73
KSDC||Williamson/Sodus|Williamson Sodus|US|1|||KROC:47
KSDF|SDF|Louisville|Louisville Muhammad Ali|US|4
KSDL|SCF|Scottsdale||US|1|||KPHX:23
KSDM|SDM|San Diego|Brown Field Municipal|US|2|||MMTJ:4
KSDY|SDY|Sidney|Sidney - Richland Regional|US|3
KSEA|SEA|Seattle|Seattle–Tacoma|US|4
KSEE|SEE|San Diego/El Cajon|Gillespie Field|US|1|||KSAN:23
KSEF|SEF|Sebring|Sebring Regional|US|1|||KPGD:88
KSEG|SEG|Selinsgrove|Penn Valley|US|1|||KIPT:47
KSEM|SEM|Selma|Craig Field|US|1|||KMGM:56
KSEP|SEP|Stephenville|Stephenville Clark Regional|US|1|||KMWL:64
KSEQ||Seguin|Randolph Air Force Base Auxiliary|US|1|||KSAT:55
KSER|SER|Seymour|Freeman Municipal|US|1|||KSDF:85
KSET||St Charles|St Charles County Regional Airport/Smartt Field|US|1|||KSTL:21
KSEZ|SDX|Sedona||US|1|||KFLG:34
KSFB|SFB|Orlando|Orlando Sanford|US|4
KSFF|SFF|Spokane|Felts Field|US|2|||KGEG:17
KSFM|SFM|Sanford|Sanford Seacoast Regional|US|1|||KPSM:36
KSFO|SFO|San Francisco||US|4
KSFQ||Suffolk|Suffolk Executive|US|1|||KORF:43
KSFY||Savanna|Tri Township|US|1|||KDBQ:63
KSFZ|SFZ|Pawtucket|North Central State|US|1|||KPVD:22
KSGF|SGF|Springfield|Springfield Branson National|US|3
KSGH|SGH|Springfield|Springfield-Beckley Municipal|US|2|||KDAY:33
KSGJ|UST|St Augustine|Northeast Florida Regional|US|3
KSGR|SGR|Houston|Sugar Land Regional|US|2|||KHOU:37
KSGS||South St Paul|South St Paul Municipal Airport/Richard E Fleming Field|US|1|||KMSP:15
KSGT|SGT|Stuttgart|Stuttgart Municipal Airport / Carl Humphrey Field|US|1|||KLIT:61
KSGU|SGU|St George|St George Regional|US|3
KSHD|SHD|Weyers Cave|Shenandoah Valley Regional|US|3
KSHL||Sheldon|Sheldon Regional|US|1|||KFSD:84
KSHN|SHN|Shelton|Sanderson Field|US|1|||KOLM:35
KSHR|SHR|Sheridan|Sheridan County|US|3
KSHV|SHV|Shreveport|Shreveport Regional|US|3
KSIF||Stoneville|Rockingham County NC Shiloh|US|1|||KGSO:38
KSIK|SIK|Sikeston|Sikeston Memorial Municipal|US|1|||KCGI:36
KSIV|SIV|Sullivan|Sullivan County|US|1|||KIND:120
KSIY|SIY|Montague|Siskiyou County|US|1|||KMFR:74
KSJC|SJC|San Jose|Mineta San Jose|US|4
KSJN|SJN|St Johns|St Johns Industrial Air Park|US|1|||KSOW:64
KSJS||Debord|Big Sandy Regional|US|1|||KHTS:69
KSJT|SJT|San Angelo|San Angelo Regional Mathis Field|US|3
KSJX||Beaver Island||US|2
KSKA|SKA|Spokane|Fairchild Air Force Base|US|2|||KGEG:9
KSKF|SKF|San Antonio|Lackland Air Force Base|US|2|||KSAT:20
KSKI||Sac City|Sac City Municipal|US|1|||KFOD:67
KSKX|TSM|Taos|Taos Regional|US|3
KSLB|SLB|Storm Lake|Storm Lake Municipal|US|1|||KFOD:86
KSLC|SLC|Salt Lake City||US|4
KSLE|SLE|Salem|Salem-Willamette Valley Airport/McNary Field|US|3
KSLG|SLG|Siloam Springs|Smith Field|US|1|||KXNA:19
KSLH||Cheboygan|Cheboygan County|US|1|||KPLN:23
KSLI||Los Alamitos|Los Alamitos Army Air Field|US|2|||KLGB:10
KSLK|SLK|Saranac Lake|Adirondack Regional|US|3
KSLN|SLN|Salina|Salina Municipal|US|3
KSLO|SLO|Salem|Salem–Leckrone|US|1|||KMWA:99
KSLR|SLR|Sulphur Springs|Sulphur Springs Municipal|US|1|||KTYR:92
KSMD|SMD|Fort Wayne|Smith Field|US|1|||KFWA:19
KSME|SME|Somerset|Lake Cumberland Regional|US|2|||KLEX:109
KSMF|SMF|Sacramento||US|4
KSMN|SMN|Salmon|Lemhi County|US|3
KSMO|SMO|Santa Monica|Santa Monica Municipal|US|2|||KLAX:9
KSMQ||Somerville|Somerset|US|1|||KTTN:41
KSMS|SUM|Sumter||US|1|||KFLO:62
KSMX|SMX|Santa Maria|Santa Maria Public Airport Captain G Allan Hancock Field|US|3
KSNA|SNA|Santa Ana|John Wayne Orange County|US|4
KSNC||Chester||US|1|||KHVN:35
KSNH||Savannah|Savannah Hardin County|US|1|||KMSL:72
KSNK|SNK|Snyder|Winston Field|US|1|||KABI:123
KSNL|SNL|Shawnee|Shawnee Regional|US|1|||KOKC:60
KSNS|SNS|Salinas|Salinas Municipal|US|2|||KMRY:23
KSNY|SNY|Sidney|Sidney Municipal Airport Lloyd W Carr Field|US|2|||KBFF:100
KSOA||Sonora|Sonora Municipal|US|2|||KSJT:87
KSOP|SOP|Carthage|Moore County|US|1|||KFAY:54
KSOW|SOW|Show Low|Show Low Regional|US|3
KSPA|SPA|Spartanburg|Spartanburg Downtown Memorial|US|1|||KGSP:24
KSPB||Scappoose|Scappoose Industrial Airpark|US|1|||KPDX:29
KSPF|SPF|Spearfish|Black Hills Airport-Clyde Ice Field|US|1|||KRAP:75
KSPG|SPG|St Petersburg|Albert Whitted|US|1|||KPIE:17
KSPH||Springhill||US|1|||KELD:61
KSPI|SPI|Springfield|Abraham Lincoln Capital|US|3
KSPK||Spanish Fork|Spanish Fork Municipal Airport/Woodhouse Field|US|1|||KPVU:9
KSPS|SPS|Wichita Falls|Wichita Falls Municipal Airport / Sheppard Air Force Base|US|3
KSPW|SPW|Spencer|Spencer Municipal|US|1|||KFOD:107
KSPZ||Silver Springs||US|1|||KRNO:46
KSQI|SQI|Rock Falls|Whiteside County Airport - Joseph H Bittorf Field|US|1|||KRFD:69
KSQL|SQL|San Carlos||US|3
KSRB||Sparta|Upper Cumberland Regional|US|1|||KBNA:103
KSRC|SRC|Searcy|Searcy Municipal|US|1|||KLIT:69
KSRE||Seminole|Seminole Municipal|US|1|||KOKC:85
KSRQ|SRQ|Sarasota/Bradenton|Sarasota Bradenton|US|4
KSRR|RUI|Alto|Sierra Blanca Regional|US|2|||KROW:95
KSSC|SSC|Sumter|Shaw Air Force Base|US|2|||KCAE:60
KSSF|SSF|San Antonio|Stinson Municipal|US|2|||KSAT:22
KSSI|SSI|St Simons Island||US|2|||KBQK:14
KSSQ||Shell Lake|Shell Lake Municipal|US|1|||KEAU:102
KSTC|STC|Saint Cloud|Saint Cloud Regional|US|3
KSTE|STE|Stevens Point|Stevens Point Municipal|US|1|||KCWA:28
KSTF||Starkville|George M Bryan|US|1|||KGTR:24
KSTJ|STJ|St Joseph|Rosecrans Memorial|US|2|||KMCI:55
KSTK|STK|Sterling|Sterling Municipal|US|1|||KBFF:143
KSTL|STL|St Louis|St. Louis Lambert|US|4
KSTP|STP|Saint Paul|Saint Paul Downtown Holman Field|US|2|||KMSP:14
KSTS|STS|Santa Rosa|Charles M. Schulz Sonoma County|US|3
KSUA|SUA|Stuart|Witham Field|US|1|||KVRB:56
KSUD|SUD|Stroud|Stroud Municipal|US|1|||KSWO:57
KSUE|SUE|Sturgeon Bay|Door County Cherryland|US|1|||KGRB:69
KSUN|SUN|Hailey|Friedman Memorial|US|3
KSUO||Rosebud|Rosebud Sioux Tribal|US|1|||KPIR:133
KSUS|SUS|St Louis|Spirit of St Louis|US|2|||KSTL:26
KSUT||Southport|Cape Fear Regional Jetport / Howie Franklin Field|US|1|||KILM:41
KSUU|SUU|Fairfield|Travis Air Force Base|US|2|||KSMF:56
KSUW|SUW|Superior|Richard I Bong Memorial|US|1|||KDLH:19
KSUX|SUX|Sioux City|Sioux Gateway Airport / Brigadier General Bud Day Field|US|3
KSUZ||Bryant|Saline County Regional|US|2|||KLIT:28
KSVC|SVC|Silver City|Grant County|US|3
KSVE|SVE|Susanville|Susanville Municipal|US|1|||KRNO:119
KSVH|SVH|Statesville|Statesville Regional|US|1|||KJQF:47
KSVN|SVN|Savannah|Hunter Army Air Field|US|2|||KSAV:14
KSVR||Salt Lake City|South Valley Regional|US|2|||KSLC:19
KSWF|SWF|Newburgh|New York Stewart|US|3
KSWI||Sherman|Sherman Municipal|US|1|||KDAL:90
KSWO|SWO|Stillwater|Stillwater Regional|US|3
KSWT||Seward|Seward Municipal|US|1|||KLNK:29
KSWW|SWW|Sweetwater|Avenger Field|US|1|||KABI:74
KSXK||Maurice|Sioux County Regional|US|1|||KSUX:68
KSXL||Mount Lookout|Summersville|US|1|||KBKW:54
KSXU||Santa Rosa|Santa Rosa Route 66|US|1|||KSAF:152
KSYF||St Francis|Cheyenne County Municipal|US|1|||KMCK:114
KSYI|SYI|Shelbyville|Bomar Field / Shelbyville Municipal|US|1|||KBNA:66
KSYM||Morehead|Morehead-Rowan County Clyde A. Thomas Regional|US|1|||KLEX:91
KSYN|SYN|Dennison|Stanton|US|1|||KMSP:48
KSYR|SYR|Syracuse|Syracuse Hancock|US|4
KSYV|SYV|Sylvester||US|1|||KABY:29
KSZL|SZL|Knob Noster|Whiteman Air Force Base|US|2|||KCOU:116
KSZN|SZN|Santa Cruz Island||US|1|||KSBA:41
KSZP|SZP|Santa Paula||US|1|||KBUR:67
KSZT||Sandpoint||US|1|||KGEG:105
KSZY||Selmer|Robert Sibley|US|1|||KMKL:58
KTAD|TAD|Trinidad|Perry Stokes|US|1|||KPUB:115
KTAN||Taunton|Taunton Municipal King Field|US|1|||KEWB:23
KTAZ||Taylorville|Taylorville Municipal|US|1|||KSPI:46
KTBN|TBN|Fort Leonard Wood|Waynesville-St. Robert Regional Airport-Forney Field|US|3
KTBR|TBR|Statesboro|Statesboro Bulloch County|US|1|||KSAV:64
KTBX||Shoshoni|Shoshoni Municipal|US|1|||KRIW:34
KTCC|TCC|Tucumcari|Tucumcari Municipal|US|2|||KCVN:97
KTCL|TCL|Tuscaloosa|Tuscaloosa National|US|2|||KBHM:89
KTCM|TCM|Tacoma|McChord Air Force Base|US|2|||KTIW:16
KTCS|TCS|Truth or Consequences|Truth or Consequences Municipal|US|2|||KSVC:106
KTCY||Tracy|Tracy Municipal|US|1|||KSCK:29
KTDF||Timberlake|Raleigh Regional Airport at Person County|US|1|||KRDU:49
KTDO|TDO|Toledo|Ed Carlson Memorial Field South Lewis County|US|1|||KOLM:55
KTDW|TDW|Amarillo|Tradewind|US|1|||KAMA:12
KTDZ|TDZ|Toledo|Toledo Executive|US|1|||KTOL:27
KTEB|TEB|Teterboro||US|3|||KLGA:18
KTEL||Tell City|Perry County Municipal|US|1|||KOWB:52
KTEW||Mason|Mason Jewett Field|US|1|||KLAN:27
KTEX|TEX|Telluride|Telluride Regional|US|3
KTFP||Aransas Pass|Ingleside Regional|US|1|||KCRP:33
KTGC||Milan|Gibson County|US|1|||KMKL:37
KTGI||Tangier|Tangier Island|US|1|||KSBY:71
KTHA|THA|Tullahoma|Tullahoma Regional Airport William Northern Field|US|1|||KBNA:91
KTHM|THM|Thompson Falls||US|1|||KGPI:112
KTHV|THV|Thomasville|York|US|1|||KMDT:32
KTIF||Thedford|Thomas County|US|1|||KLBF:93
KTIK|TIK|Oklahoma City|Tinker Air Force Base|US|2|||KOKC:19
KTIP||Rantoul|Rantoul National Aviation Center - Frank Elliot field|US|1|||KCMI:30
KTIW|TIW|Tacoma|Tacoma Narrows|US|3
KTIX|TIX|Titusville|Space Coast Regional|US|2|||KMLB:48
KTKC||Tracy|Tracy Municipal|US|1|||KFSD:117
KTKI|DTX|Dallas|McKinney National|US|1|||KDAL:44
KTKO||Mankato||US|1|||KEAR:122
KTKV||Tomahawk|Tomahawk Regional|US|1|||KRHI:32
KTKX|KNT|Kennett|Kennett Memorial|US|1|||KJBR:70
KTLH|TLH|Tallahassee||US|3
KTLR|TLR|Tulare|Mefford Field|US|1|||KFAT:77
KTMA|TMA|Tifton|Henry Tift Myers|US|1|||KABY:68
KTMB|TMB|Miami|Miami Executive|US|2|||KMIA:22
KTME||Houston|Houston Executive|US|1|||KIAH:57
KTMK|OTK|Tillamook||US|1|||KSLE:85
KTMT|ASQ|Austin||US|1|||KEKO:192
KTNP|TNP|Twentynine Palms||US|1|||KPSP:62
KTNT|TNT|Miami|Dade Collier Training and Transition|US|1|||KMIA:61
KTNU|TNU|Newton|Newton Municipal|US|1|||KDSM:55
KTNX|XSD|Tonopah|Tonopah Test Range|US|1|||KBIH:147
KTOA|TOA|Torrance|Zamperini Field|US|1|||KHHR:13
KTOB||Dodge Center||US|1|||KRST:29
KTOC|TOC|Toccoa|Toccoa Airport - R.G. Letourneau Field|US|1|||KGSP:104
KTOI|TOI|Troy|Troy Municipal Airport at N Kenneth Campbell Field|US|2|||KMGM:61
KTOL|TOL|Toledo|Eugene F. Kranz Toledo Express|US|3
KTOP|TOP|Topeka|Philip Billard Municipal|US|2|||KMCI:82
KTOR|TOR|Torrington|Torrington Municipal|US|1|||KBFF:51
KTPA|TPA|Tampa||US|4
KTPF|TPF|Tampa|Peter O Knight|US|1|||KTPA:11
KTPH|TPH|Tonopah||US|2|||KBIH:136
KTPL|TPL|Temple|Draughon Miller Central Texas Regional|US|2|||KACT:54
KTQE||Tekamah|Tekamah Municipal|US|1|||KOMA:56
KTQH||Tahlequah|Tahlequah Municipal|US|1|||KXNA:74
KTQK||Scott City|Scott City Municipal|US|1|||KGCK:62
KTRI|TRI|Blountville|Tri-Cities Regional TN/VA|US|3
KTRK|TKF|Truckee|Truckee Tahoe|US|3
KTRL|TRL|Terrell|Terrell Municipal|US|1|||KDAL:56
KTRM|TRM|Palm Springs|Jacqueline Cochran Regional|US|2|||KPSP:39
KTRX|TRX|Trenton|Trenton Municipal|US|1|||KIRK:89
KTSO||Carrollton|Carroll County-Tolson|US|1|||KCAK:50
KTSP|TSP|Tehachapi|Tehachapi Municipal|US|1|||KBFL:65
KTTA||Sanford|Raleigh Executive Jetport|US|1|||KRDU:43
KTTD|TTD|Portland|Portland Troutdale|US|2|||KPDX:16
KTTF||Monroe|Custer|US|1|||KDTW:31
KTTN|TTN|Ewing Township|Trenton Mercer|US|3
KTTS||Titusville|Space Florida Launch and Landing Facility|US|2|||KSFB:56
KTUL|TUL|Tulsa||US|4
KTUP|TUP|Tupelo|Tupelo Regional|US|3
KTUS|TUS|Tucson||US|4
KTVB||Cabool|Cabool Memorial|US|1|||KTBN:68
KTVC|TVC|Traverse City|Cherry Capital|US|3
KTVF|TVF|Thief River Falls|Thief River Falls Regional|US|3
KTVI|TVI|Thomasville|Thomasville Regional|US|1|||KVLD:59
KTVK||Centerville|Centerville Municipal|US|1|||KIRK:72
KTVL|TVL|South Lake Tahoe|Lake Tahoe|US|2|||KTRK:49
KTVR||Tallulah|Vicksburg Tallulah Regional|US|1|||KJAN:90
KTVY||Tooele|Bolinder Field Tooele Valley|US|1|||KSLC:37
KTWF|TWF|Twin Falls|Joslin Field Magic Valley Regional|US|3
KTWM||Two Harbors|Richard B Helgeson|US|1|||KDLH:41
KTWT||Sturgis|Sturgis Municipal|US|1|||KEVV:66
KTXK|TXK|Texarkana|Texarkana Regional Airport|US|3|Webb Field
KTXW||Weslaco|Mid Valley|US|1|||KMFE:26
KTYL|TYZ|Taylor||US|1|||KSOW:23
KTYQ||Indianapolis|Indianapolis Executive|US|1|||KIND:35
KTYR|TYR|Tyler|Tyler Pounds Regional|US|3
KTYS|TYS|Knoxville/Maryville|McGhee Tyson|US|4
KTZR||Columbus|Bolton Field|US|1|||KLCK:20
KTZT||Belle Plaine|Belle Plaine Municipal|US|1|||KCID:48
KTZV||Tompkinsville|Tompkinsville Monroe County|US|1|||KBNA:114
KUAO||Aurora|Aurora State|US|2|||KPDX:40
KUBE||Cumberland|Cumberland Municipal|US|1|||KEAU:81
KUBS|UBS|Columbus|Columbus Lowndes County|US|1|||KGTR:20
KUBX||Cuba|Cuba Municipal|US|1|||KTBN:72
KUCP||New Castle|New Castle Municipal|US|1|||KPIT:61
KUCY|UCY|Union City|Everett-Stewart Regional|US|1|||KPAH:78
KUDD|UDD|Bermuda Dunes||US|1|||KPSP:23
KUDG||Darlington|Darlington County|US|1|||KFLO:33
KUES|UES|Waukesha|Waukesha County|US|1|||KMKE:30
KUGN|UGN|Chicago/Waukegan|Waukegan National|US|1|||KORD:49
KUIL|UIL|Quillayute||US|1|||CYYJ:115
KUIN|UIN|Quincy|Quincy Regional Airport Baldwin Field|US|3
KUKF|IKB|North Wilkesboro|Wilkes County|US|1|||KJQF:99
KUKI|UKI|Ukiah|Ukiah Municipal|US|2|||KSTS:76
KUKL||Burlington|Coffey County|US|1|||KMHK:124
KUKT|UKT|Quakertown||US|1|||KABE:25
KULM|ULM|New Ulm|New Ulm Municipal|US|1|||KMSP:119
KULS||Ulysses||US|1|||KGCK:68
KUMP||Indianapolis|Indianapolis Metropolitan|US|1|||KIND:32
KUNI|ATO|Albany|Ohio University|US|1|||KPKB:70
KUNO||Pomona|West Plains Regional|US|1|||KTBN:98
KUNU|UNU|Juneau|Dodge County|US|1|||KMSN:60
KUNV|SCE|State College|State College Regional|US|3
KUOS|UOS|Sewanee|Franklin County|US|1|||KCHA:66
KUOX|UOX|Oxford|University Oxford|US|2|||KTUP:72
KUSE||Wauseon|Fulton County|US|1|||KTOL:27
KUSW||Spencer|Boggs Field|US|1|||KCRW:54
KUTA|UTM|Tunica|Tunica Municipal|US|1|||KMEM:52
KUTS|HTV|Huntsville|Huntsville Regional|US|2|||KCLL:76
KUUU|NPT|Newport|Newport State|US|3
KUUV||Sullivan|Sullivan Regional|US|1|||KSTL:90
KUVA|UVA|Uvalde|Garner Field|US|1|||MMPG:101
KUWL||New Castle|New Castle-Henry County Municipal|US|1|||KIND:85
KUXL||Sulphur|Southland Field|US|1|||KLCH:15
KUYF||London|Madison County|US|1|||KLCK:47
KUZA|RKH|Rock Hill|Rock Hill - York County|US|1|||KCLT:27
KVAD|VAD|Valdosta|Moody Air Force Base|US|2|||KVLD:22
KVAY|LLY|Lumberton|South Jersey Regional|US|1|||KPHL:35
KVBG|VBG|Lompoc|Vandenberg Space Force Base|US|2|||KSMX:21
KVBT||Bentonville|Bentonville Municipal-Louise M Thaden Field|US|1|||KXNA:11
KVBW||Bridgewater|Bridgewater Air Park|US|1|||KSHD:13
KVCB||Vacaville|Nut Tree|US|1|||KSMF:48
KVCT|VCT|Victoria|Victoria Regional|US|3
KVCV|VCV|Victorville|Southern California Logistics|US|1|||KSBD:57
KVDF||Tampa|Tampa Executive|US|1|||KTPA:19
KVDI|VDI|Vidalia|Vidalia Regional|US|1|||KSAV:110
KVEL|VEL|Vernal|Vernal Regional|US|3
KVER||Boonville|Jesse Viertel Memorial|US|1|||KCOU:43
KVES||Versailles|Darke County|US|1|||KDAY:43
KVGC||Hamilton|Hamilton Municipal|US|1|||KSYR:53
KVGT|VGT|Las Vegas|North Las Vegas|US|2|||KLAS:14
KVHN|VHN|Van Horn|Culberson County|US|1|||KCNM:151
KVIH|VIH|Vichy|Rolla National|US|1|||KTBN:54
KVIQ||Neillsville|Neillsville Municipal|US|1|||KCWA:71
KVIS|VIS|Visalia|Visalia Municipal|US|2|||KFAT:59
KVJI|VJI|Abingdon|Virginia Highlands|US|1|||KTRI:41
KVKS|VKS|Vicksburg|Vicksburg Municipal|US|1|||KJAN:81
KVKX||Friendly|Potomac|US|1|||KDCA:14
KVLA|VLA|Vandalia|Vandalia Municipal|US|1|||KDEC:97
KVLD|VLD|Valdosta|Valdosta Regional|US|3
KVLL||Troy|Oakland Troy|US|1|||CYQG:35
KVMR||Vermillion|Harold Davidson Field|US|1|||KSUX:61
KVNC|VNC|Venice|Venice Municipal|US|1|||KSRQ:38
KVNW||Van Wert|Van Wert County|US|1|||KFWA:51
KVNY|VNY|Van Nuys||US|2|||KBUR:12
KVOK|VOK|Camp Douglas|Volk Field|US|2|||KLSE:81
KVPC||Cartersville||US|1|||KPDK:57
KVPS|VPS|Valparaiso|Destin-Fort Walton Beach|US|3
KVPZ|VPZ|Valparaiso|Porter County Municipal|US|2|||KMGC:32
KVQQ|VQQ|Jacksonville|Cecil|US|2||KNCZ|KJAX:35
KVRB|VRB|Vero Beach|Vero Beach Regional|US|3
KVSF|VSF|North Springfield|Hartness State|US|1|||KLEB:36
KVTA||Newark|Newark Heath|US|1|||KCMH:37
KVTI||Vinton|Vinton Veterans Memorial Airpark|US|1|||KCID:45
KVTN|VTN|Valentine|Miller Field|US|2|||KPIR:171
KVUJ||Albemarle|Stanly County|US|1|||KJQF:51
KVUO||Vancouver|Pearson Field|US|1|||KPDX:6
KVVS||Connellsville|Joseph A. Hardy Connellsville|US|1|||KLBE:41
KVVV||Ortonville|Ortonville Municipal Airport/Martinson Field|US|1|||KATY:72
KVWU||Waskish|Waskish Municipal|US|1|||KINL:94
KVYS|VYS|Peru|Illinois Valley Regional Airport Walter A Duncan Field|US|1|||KPIA:89
KWAL|WAL|Wallops Island|Wallops Flight Facility|US|1|||KSBY:45
KWAY|WAY|Waynesburg|Greene County|US|1|||KMGW:34
KWBW|WBW|Wilkes-Barre|Wilkes Barre Wyoming Valley|US|1|||KAVP:11
KWDG|WDG|Enid|Enid Woodring Regional|US|1|||KSWO:68
KWDR|WDR|Winder|Barrow County|US|1|||KPDK:60
KWEA|WEA|Weatherford|Parker County|US|1|||KMWL:36
KWHP|WHP|Pacoima|Whiteman|US|1|||KBUR:8
KWJF|WJF|Lancaster|General William J Fox|US|2|||KBUR:61
KWLD|WLD|Winfield / Arkansas City|Strother Field|US|1|||KICT:64
KWLW|WLW|Willows|Willows Glenn County|US|1|||KSMF:106
KWMC|WMC|Winnemucca|Winnemucca Municipal|US|2|||KEKO:170
KWRB|WRB|Warner Robins|Robins Air Force Base|US|2|||KMCN:8
KWRI|WRI|Wrightstown|Mc Guire Air Force Base|US|2|||KTTN:35
KWRL|WRL|Worland|Worland Municipal|US|2|||KCOD:105
KWST|WST|Westerly|Westerly State|US|3
KWVI|WVI|Watsonville|Watsonville Municipal|US|1|||KMRY:39
KWVL|WVL|Waterville|Waterville Robert Lafleur|US|1|||KAUG:26
KWWD|WWD|Wildwood|Cape May County|US|2|||KACY:57
KWWR|WWR|Woodward|West Woodward|US|2|||KLBL:145
KWYS|WYS|West Yellowstone|Yellowstone|US|3
KXBP||Bridgeport|Bridgeport Municipal|US|1|||KMWL:49
KXLL||Allentown|Allentown Queen City Municipal|US|1||KJVU|KABE:10
KXMR||Cocoa Beach|Cape Canaveral SFS Skid Strip|US|2|||KMLB:41
KXNA|XNA|Fayetteville/Springdale/Rogers|Northwest Arkansas National|US|3
KXNI||Zuni|Andrew Othole Memorial|US|1|||KGUP:52
KXNO||North|North Air Force Auxillary|US|1|||KCAE:37
KXNX||Gallatin|Music City Executive|US|1|||KBNA:37
KXSA||Tappahannock|Tappahannock-Essex County|US|1|||KRIC:54
KXTA||Groom Lake|Homey|US|2|Area 51||KLAS:141
KXVG||Longville|Longville Municipal|US|1|||KBRD:66
KXWA|XWA|Williston|Williston Basin|US|3
KYIP|YIP|Detroit|Willow Run|US|2|||KDTW:15
KYKM|YKM|Yakima|Yakima Air Terminal McAllister Field|US|3
KYKN|YKN|Yankton|Chan Gurney Municipal|US|2|||KFSD:91
KYNG|YNG|Youngstown/Warren|Youngstown Warren Regional|US|2|||KCAK:75
KZEF||Elkin|Elkin Municipal|US|1|||KGSO:79
KZER||Pottsville|Schuylkill County Joe Zerbey|US|1|||KLNS:65
KZPH|ZPH|Zephyrhills|Zephyrhills Municipal|US|1|||KLAL:30
KZZV|ZZV|Zanesville|Zanesville Municipal|US|2|||KPKB:77
LAKU|KFZ|Kukës||AL|2|||BKPR:79
LAKV||Kuçovë|Kuçovë Air Base|AL|2|||LATI:73
LATI|TIA|Tirana|Tirana International Airport Mother Teresa|AL|4|Rinas
LBAM||Gabrovo|Alfa-Metal|BG|1|||LBPD:106
LBBA||Bahovitsa||BG|1|||LBSF:116
LBBB||Belchinski Bani|Belchinski Bani Airstrip|BG|1|||LBSF:36
LBBG|BOJ|Burgas||BG|4
LBBL||Blagoevo||BG|1|||LBWN:115
LBBO||Bohot||BG|1|||LBSF:124
LBBQ||Byala||BG|1|||LRBS:120
LBBR||Pernik|Breznik|BG|1|||LBSF:43
LBBZ||Bazan|Bazan Airstrip|BG|1|||LRBS:86
LBDA||Daskal-Atanasovo||BG|1|||LBPD:90
LBDB||Dolna Banya||BG|1|||LBSF:54
LBDM||Dve Mogili||BG|1|||LRBS:101
LBDR||Draganovtsi||BG|1|||LBPD:101
LBGD||Gradishte|Gradishte Airstrip|BG|1|||LBWN:79
LBGI||Gorski Izvor|Gorski Izvor Airstrip|BG|1|||LBPD:46
LBGO|GOZ|Gorna Oryahovitsa||BG|2|||LBPD:140
LBGR||Grivitsa||BG|1|||LRCV:121
LBHT||Ihtiman||BG|1|||LBSF:42
LBIA|JAM|Bezmer|Bezmer Air Base|BG|2|||LBBG:96
LBKJ||Kaynardzha||BG|1|||LBWN:87
LBKL||Kalvacha||BG|1|||LBPD:75
LBLS||Lesnovo||BG|1|||LBSF:20
LBMA||Maritsa||BG|1|||LBPD:24
LBMO||Montana||BG|1|||LBSF:77
LBMV||Malevo||BG|1|||LBPD:66
LBPD|PDV|Plovdiv||BG|4
LBPG||Graf Ignatievo|Graf Ignatievo Air Base|BG|2|||LBPD:27
LBPL||Dolna Mitropoliya|Dolna Mitropoliya Air Base|BG|2|||LRCV:108
LBPN||Panicharevo||BG|1|||LBSF:58
LBPR||Primorsko||BG|1|||LBBG:38
LBRD||Erden||BG|1|||LBSF:90
LBRS|ROU|Shtraklevo|Ruse|BG|1|||LRBS:90
LBSA||Slivnitsa||BG|1|||LBSF:37
LBSB||Nesebar|Slanchev Bryag Airstrip|BG|1|Sunny Beach||LBBG:20
LBSE||Isperih|Staro Selishte|BG|1|||LBWN:98
LBSF|SOF|Sofia||BG|4
LBSL||Sliven|Sliven Barshen|BG|1|||LBBG:95
LBSP||Sapareva Banya||BG|1|||LBSF:45
LBST||Banya|Stryama|BG|1|||LBPD:52
LBSW||Radomir|Sofia West|BG|1|||LBSF:45
LBSZ||Stara Zagora||BG|1|||LBPD:75
LBTS||Tsalapitsa||BG|1|||LBPD:29
LBVD||Vidin|Vidin Smurdan|BG|1|||LRCV:92
LBVR||Vratsa||BG|1|||LBSF:63
LBWB||Balchik||BG|2|||LBWN:36
LBWN|VAR|Varna||BG|4
LBZM||Belozem|Air Belozem Airstrip|BG|1|||LBPD:24
LCEN|ECN|Tymbou|Ercan|CY|4|Tymbou (Kirklar)
LCGK|GEC|Lefkoniko|Geçitkale Airbase|CY|2|Lefkoniko (Geçitkale)||LCEN:21
LCLK|LCA|Larnaca||CY|4
LCPH|PFO|Paphos||CY|4
LCRA|AKT|Akrotiri|RAF Akrotiri|CY|2|||LCPH:48
LCRE||Dhekelia Sovereign Base Area|Kingsfield Air Base|CY|1|||LCLK:18
LDDU|DBV|Dubrovnik|Dubrovnik Ruđer Bošković|HR|4
LDLO|LSZ|Mali Lošinj|Lošinj|HR|1|||LDPL:52
LDOB||Vukovar|Vukovar Borovo Recreational|HR|1|||LDOS:15
LDOC||Osijek|Osijek-Čepin|HR|1|||LDOS:17
LDOR||Slavonski|Slavonski Jelas|HR|1|||LQBK:59
LDOS|OSI|Osijek||HR|3|Osijek(Klisa)
LDOV||Vinkovci|Vinkovci Sopot|HR|1|||LDOS:24
LDPL|PUY|Pula||HR|4
LDPM||Medulin|Medulin Campanoz|HR|1|||LDPL:6
LDPN||Unije Island|Unije|HR|1|||LDPL:39
LDPV||Vrsar|Vrsar Crljenka|HR|1|||LDPL:36
LDRG||Soboli|Grobničko Polje|HR|1|||LDRI:19
LDRI|RJK|Rijeka||HR|4|Rijeka(Omišalj)
LDRO||Otočac||HR|1|||LDRI:70
LDSB|BWK|Gornji Humac|Brač|HR|3
LDSH||Hvar Island|Hvar|HR|1|||LDSB:12
LDSP|SPU|Split|Split Saint Jerome|HR|4
LDSS||Sinj|Sinj Piket|HR|1|||LDSP:35
LDVA||Varaždin||HR|1|||LJMB:57
LDVC||Čakovec|Čakovec Pribislavec|HR|1|||LHSM:60
LDVD||Daruvar|Daruvar Blagorod|HR|1|||LQBK:72
LDVK||Koprivnica|Koprivnica Danic|HR|1|||LHSM:58
LDVR||Daruvar||HR|1|||LQBK:72
LDZA|ZAG|Zagreb|Zagreb Franjo Tuđman|HR|4|Velika Gorica
LDZB||Busevec|Buševec Velika Glider Field|HR|1|||LDZA:11
LDZD|ZAD|Zadar||HR|4
LDZE||Zvekovac||HR|1|||LDZA:35
LDZI||Ivanić-Grad|Ivanić-Grad Airstrip|HR|1|||LDZA:21
LDZJ||Brezovac|Bjelovar Brezovac|HR|1|||LDZA:61
LDZK||Gubaševo|Zabok-Gubaševo|HR|1|||LDZA:34
LDZL||Zagreb|Lučko|HR|1|||LDZA:17
LDZP||Korenica|Zvonimir Rain Glider|HR|1|||LDZD:75
LDZR||Bratina|Pisarovina|HR|1|||LDZA:25
LDZS||Prelošćica|Sisak|HR|1|||LDZA:45
LDZU||Udbina||HR|2|||LDZD:61
LEAB|ABC|Albacete|Albacete Airport / Los Llanos Air Base|ES|2|||LEVC:133
LEAE||Alcolea|Alcolea Airstrip|ES|1|||LEBA:24
LEAH||Mairena del Alcor|Aerohíspalis|ES|1|||LEZL:18
LEAK|||Campo de Vuelo Aliaguilla|ES|1|||LEVC:79
LEAL|ALC|Alicante|Alicante-Elche Miguel Hernández|ES|4
LEAM|LEI|Almería||ES|3
LEAP||Empuriabrava|Ampuriabrava|ES|1|||LEGE:49
LEAS|OVD|Asturias||ES|4|Ranón
LEAT||Astorga|Campo de Vuelo de Astorga|ES|1|||LELN:32
LEAX||Málaga|La Axarquía-Leoni Benabu|ES|1|||LEMG:35
LEBA|ODB|Córdoba||ES|3
LEBB|BIO|Bilbao||ES|4
LEBE||Jaén|Beas de Segura|ES|1|||LEGR:141
LEBF||Binéfar||ES|1|||LEDA:27
LEBG|RGS|Burgos||ES|2|||LEVT:94
LEBI||Concello de Beariz|Beariz Airfield Forest Fire Base|ES|1|Concello de Beariz, Ourense||LEVX:35
LEBL|BCN|Barcelona|Josep Tarradellas Barcelona-El Prat|ES|4
LEBZ|BJZ|Badajoz||ES|3
LECA||Corral de Ayllón|La Nava - Corral De Ayllón|ES|1|||LEMD:103
LECD||Alp|La Cerdanya|ES|1|||LESU:38
LECF||Sant Pere Sallavinera|Calaf-Sallavinera|ES|1|||LEBL:66
LECH|CDT|Castellón de la Plana|Castellón-Costa Azahar|ES|3
LECI||Huesca|Santa Cilia de Jaca|ES|1|||LEPP:78
LECN||Castellón de la Plana|Castellon de la Plana|ES|1|||LECH:24
LECO|LCG|Culleredo|A Coruña|ES|3
LECT||Luciana|El Castaño|ES|1|||LEBA:136
LECU||Madrid|Madrid-Cuatro Vientos|ES|2||LEVS|LEMD:23
LEDA|ILD|Lleida|Lleida-Alguaire|ES|3
LEDB||La Vid de Bureba|Aeródromo de La Vid de Bureba|ES|1|||LEVT:55
LEDC||La Cuesta||ES|1|||LEMI:170
LEDE||Córdoba|Córdoba-Villarrubia|ES|1|||LEBA:4
LEEM||Badajoz|El Manantío|ES|1|||LEBZ:19
LEEN||Hiendelaencina|Aeródromo de Hiendelaencina-Alto Rey|ES|1|||LEMD:84
LEEV||Villacastin|E. Castellanos-Villacastín|ES|1|||LEMD:82
LEFM||Segovia|Fuentemilanos|ES|1|||LEMD:71
LEFU||Fuente Obejuna|Aeródromo de Fuente Obejuna|ES|1|||LEBA:69
LEGA||Armilla|Armilla Air Base|ES|2|||LEGR:14
LEGC||Sevilla|Altarejos-Guadalcanal Private|ES|1|||LEZL:85
LEGE|GRO|Girona|Girona-Costa Brava|ES|4
LEGP|||El Rinconcillo de Guadalupe|ES|1|||LEBZ:94
LEGR|GRX|Granada|F.G.L. Airport Granada-Jaén|ES|3
LEGT||Getafe|Getafe Air Base|ES|2|||LEMD:26
LEGU||Guadalupe|Aeródromo de Guadalupe|ES|1|||LEBZ:149
LEGY||Soria|Garray|ES|1|||LERJ:72
LEHC|HSK|Monflorite/Alcalá del Obispo|Huesca-Pirineos|ES|1|||LEZG:75
LEIB|IBZ|Ibiza||ES|4|Ibiza (Eivissa)
LEIG||Barcelona|Igualada/Odena|ES|1|||LEBL:48
LEIR||Marugán|Air Marugán|ES|1|||LEMD:82
LEIS||Binissalem||ES|1|||LEPA:19
LEIZ||Torre de Juan Abad|La Perdiz - Torre De Juan Abad|ES|1|||LEBA:150
LEJE||Escúzar|Aeródromo Juan Espadafor|ES|1|||LEGR:11
LEJO||Madrigalejo Del Monte||ES|1|||LEVD:104
LEJR|XRY|Jerez de la Frontera|Jerez|ES|3
LEJU||Sevilla|La Juliana|ES|1|||LEZL:27
LELA||Valdepeñas|La Calderera|ES|1|||LEBA:154
LELC||San Javier||ES|2|||LEMI:28
LELG||San Javier|Aeroclub Mar Menor|ES|1|||LEMI:22
LELH||Cánovas|Alhama De Murcia|ES|1|||LEMI:17
LELI||Almendralejo|El Molinillo|ES|1|||LEBZ:41
LELL||Sabadell||ES|1|||LEBL:25
LELN|LEN|La Virgen del Camino|León|ES|3
LELT||Lillo||ES|1|||LEMD:89
LEMD|MAD|Madrid|Adolfo Suárez Madrid–Barajas|ES|4
LEMF||Gibraleón|Mafé - Gibraleón|ES|1|||LEZL:91
LEMG|AGP|Málaga|Málaga-Costa del Sol|ES|4
LEMH|MAH|Mahón|Menorca|ES|4|Mahón (Maó)
LEMI|RMU|Murcia|Region of Murcia|ES|4|Corvera
LEML|||El Membrillar|ES|1|||LEMD:157
LEMO|OZP|Morón|Moron Air Base|ES|2|||LEZL:36
LEMP||Murcia|Los Martínez Del Puerto|ES|1|||LEMI:4
LEMR||Oviedo|La Morgal|ES|1|||LEAS:22
LEMS||Manresa||ES|1|||LEBL:55
LEMT||Toledo|Casarrubios Del Monte|ES|1|||LEMD:48
LEMU||Muchamiel||ES|1|||LEAL:19
LEMX||Toledo|La Mancha-Toledo|ES|1|||LEMD:107
LEMY|||Aeródromo de Royanejos|ES|1|||LEBZ:42
LEMZ||Fervenza|Aeródromo Mazaricos|ES|1|||LEST:49
LENA||Huesca|Benabarre|ES|1|||LEDA:33
LENE|||La Caminera|ES|1|||LEBA:163
LENF||Monforte de Lemos|Monforte|ES|1|||LEST:83
LENN||Marmolejo|La Centenera|ES|1|||LEBA:71
LEOA||Mojados|Aeródromo forestal de Mojados|ES|1|||LEVD:29
LEOC||Ocaña||ES|1|||LEMD:62
LEOS||Pajares de Los Oteros|Aeródromo de los Oteros|ES|1|||LELN:33
LEOT||Ontur||ES|1|||LEAL:92
LEPA|PMI|Palma de Mallorca||ES|4||LESJ
LEPC||Pozorrubio||ES|1|||LEMD:91
LEPI||Casas de los Pinos||ES|1|||LEVC:164
LEPN||Valverde de Leganés|Campo de Vuelo Casimiro Patiño|ES|1|||LEBZ:26
LEPP|PNA|Pamplona||ES|3
LEPR||Palma del Rio|Palma del Río|ES|1|||LEBA:35
LEPT||Petra Pep Mercader|Vilafranca de Bonany-Es cruce Airfield|ES|1|Aerodromo Mallorca||LEPA:33
LEPZ||Pozo-Cañada|Aeródromo de Pozo-Cañada|ES|1|||LEAL:119
LERE||Requena|Aeródromo Requena El Rebollar|ES|1|||LEVC:48
LERI||Alcantarilla|Alcantarilla Air Base|ES|2|||LEMI:19
LERJ|RJL|Logroño|Logroño-Agoncillo|ES|3||LELO
LERL|CQM|Ciudad Real||ES|2|||LEBA:136
LERM||Robledillo De Mohernando||ES|1|||LEMD:50
LERN||Camarenilla|Aeródromo de Camarenilla|ES|1|||LEMD:67
LERO||Lugo|Rozas|ES|1|||LECO:77
LERP||Herrera de Pisuerga|Aeródromo de Herrera de Pisuerga|ES|1|||LEXJ:100
LERS|REU|Reus||ES|4
LERT|ROZ|Rota|Rota Naval Station|ES|2|||LEJR:28
LESA|SLM|Salamanca||ES|3
LESB||Marratxí|Son Bonet|ES|1|||LEPA:6
LESE||Almodóvar del Campo|San Enrique|ES|1|||LEBA:109
LESI||Santiago de la Requejada|Rosinos de la Requejada|ES|1|||LPBG:31
LESL||Sant Lluis||ES|1|||LEMH:3
LESN||San Torcuato|Aeródromo de San Torcuato|ES|1|||LERJ:45
LESO|EAS|Hondarribia|San Sebastián|ES|3
LESS||Sotos||ES|1|||LEMD:125
LEST|SCQ|Santiago de Compostela|Santiago-Rosalía de Castro|ES|4
LESU|LEU|La Seu d'Urgell Pyrenees and Andorra|Pirineus - la Seu d'Urgel|ES|3
LESZ||Sigüenza|Aeródromo de Sigüenza|ES|1|||LEMD:100
LETC||Valladolid|Matilla De Los Caños|ES|1|||LEVD:20
LETE||Badajoz|Morante|ES|1|||LEBZ:20
LETF||Villamartin|Tomás Fernández Espada|ES|1|||LEJR:39
LETG||Algodor|Aeródromo de Algodor|ES|1|Algodor (Toledo)||LEMD:71
LETI||La Iglesuela|El Tietar|ES|1|||LESA:99
LETJ||Trebujena||ES|1|||LEJR:15
LETL|TEV|Teruel||ES|2|||LECH:112
LETO|TOJ|Madrid|Madrid–Torrejón Airport / Torrejón Air Base|ES|2|||LEMD:10
LETP||Segovia|Santo Tome Del Puerto|ES|1|||LEMD:79
LETU|||Campo de Aviación de Ablitas|ES|1|||LEZG:61
LETX||Totana|Aeroclub Totana|ES|1|||LEMI:29
LETY||Tinajeros||ES|1|||LEVC:115
LETZ||Valladolid|Torozos|ES|1|||LEVD:9
LEUC||Cillamayor|Aeródromo de Cillamayor|ES|1|||LEXJ:74
LEUM||Lumbier||ES|1|||LEPP:30
LEUN||Calzada de Valdunciel|Aeródromo Calzada de Valdunciel|ES|1|||LESA:23
LEUT||Utrera|Aeródromo de Utrera|ES|1|||LEZL:31
LEVB||Valladolid|El Carrascal|ES|1|||LEVD:14
LEVC|VLC|Valencia||ES|4
LEVD|VLL|Valladolid||ES|3
LEVE||Zafra|Aeródromo Virgen de La Estrella|ES|1|||LEBZ:66
LEVF||Ribadeo|Villaframil|ES|1|Ribadeo, Lugo||LEAS:85
LEVJ|||Villafranca de Cordoba|ES|1|||LEBA:30
LEVL|||Villamarco UL|ES|1|||LELN:34
LEVP||Valdepeñas||ES|1|||LEBA:167
LEVT|VIT|Alava|Vitoria|ES|3
LEVX|VGO|Vigo||ES|3
LEVY||Viver|Vicente Huerta|ES|1|||LEVC:53
LEWG||Villanueva de Gallego|Aerodromo de Villanueva de Gallego|ES|1|||LEZG:21
LEXJ|SDR|Santander|Seve Ballesteros-Santander|ES|3
LEZG|ZAZ|Zaragoza||ES|4
LEZL|SVQ|Seville||ES|4
LEZS|||Chozas de Abajo|ES|1|||LELN:11
LFAB|DPE|Saint-Aubin-sur-Scie|Dieppe-Saint-Aubin|FR|1|||LFRG:88
LFAC|CQF|Calais|Calais Marck|FR|2|||EBOS:69
LFAD||Margny-lès-Compiègne|Compiègne Margny|FR|1|||LFOB:50
LFAE||Eu|Eu Mers-Le Tréport|FR|1|||LFOB:84
LFAF||Laon|Laon-Chambry|FR|1|Laon, Aisne||LFOK:101
LFAG||Monchy-Lagache|Péronne Saint-Quentin|FR|2|Monchy-Lagache, Somme||LFQQ:78
LFAI||Clos-Fontaine|Nangis-Les Loges|FR|1|||LFPO:50
LFAJ||Argentan||FR|1|Argentan, Orne||LFRK:62
LFAK||Ghyvelde|Dunkerque-Les Moëres|FR|1|||EBOS:29
LFAL||La Flèche|La Flèche-Thorée-les-Pins|FR|1|La Flèche, Sarthe||LFOT:62
LFAM||Berck-sur-Mer||FR|1|||LFQQ:108
LFAO||Rives-d'Andaine|Bagnoles-Couterne|FR|1|Rives-d'Andaine, Orne||LFRK:70
LFAP||Sault-lès-Rethel|Rethel-Perthes|FR|1|Sault-lès-Rethel, Ardennes||LFOK:80
LFAQ|BYF|Albert|Albert Bray|FR|1|||LFOB:71
LFAR||Montdidier||FR|1|||LFOB:41
LFAS||Damblainville|Falaise-Mont d'Eraines|FR|1|Damblainville, Calvados||LFRK:36
LFAT|LTQ|Le Touquet-Paris-Plage|Le Touquet-Côte d'Opale|FR|2|||LFQQ:105
LFAU||La Hague|Aérodrome de Vauville|FR|1|||EGJA:29
LFAV||Prouvy|Valenciennes-Denain|FR|2|||LFQQ:37
LFAW||Errouville|Villerupt|FR|1|Errouville, Meurthe-et-Moselle||ELLX:33
LFAX||Saint-Hilaire-le-Châtel|Mortagne-au-Perche|FR|1|Saint-Hilaire-le-Châtel, Orne||LFRG:96
LFAY||Amiens|Amiens Glisy|FR|2|||LFOB:51
LFBA|AGF|Agen|Agen La Garenne|FR|2|||LFBE:73
LFBC||Cazaux|Cazaux Air Base|FR|2|Cazaux (La Teste-de-Buch) BA 120||LFBD:46
LFBD|BOD|Bordeaux|Bordeaux–Mérignac|FR|4
LFBE|EGC|Bergerac|Bergerac Dordogne-Périgord|FR|3
LFBF||Toulouse/Francazal|Toulouse-Francazal Air Base|FR|2|Toulouse/Francazal, Haute-Garonne BA 101||LFBO:9
LFBG|CNG|Cognac/Châteaubernard|Cognac-Châteaubernard Air Base|FR|2|BA 709||LFBH:89
LFBH|LRH|La Rochelle|La Rochelle Île de Ré|FR|3
LFBI|PIS|Poitiers/Biard|Poitiers-Biard|FR|3
LFBJ||Poitiers|Aérodrome de Saint-Junien|FR|1|Poitiers, Vienne||LFBL:21
LFBK|MCU|Lépaud|Montluçon-Guéret|FR|2|Lépaud, Creuse||LFLC:79
LFBL|LIG|Limoges/Bellegarde|Limoges|FR|3
LFBM||Mont-de-Marsan|Mont-de-Marsan Air Base|FR|2|BA 118||LFBP:60
LFBN|NIT|Niort/Souché|Niort - Marais Poitevin|FR|2|||LFBI:62
LFBO|TLS|Toulouse/Blagnac|Toulouse-Blagnac|FR|4
LFBP|PUF|Pau/Pyrénées|Pau Pyrénées|FR|3|Pau/Pyrénées (Uzein)
LFBR||Muret/Lherm|Aérodrome de Muret - Lherm|FR|1|Muret/Lherm, Haute-Garonne||LFBO:22
LFBS||Biscarrosse|Biscarrosse Parentis|FR|1|Biscarrosse, Landes||LFBD:61
LFBT|LDE|Tarbes/Lourdes/Pyrénées|Tarbes-Lourdes-Pyrénées|FR|3
LFBU|ANG|Angoulême|Angoulême Brie-Champniers|FR|2|||LFBL:76
LFBX|PGX|Périgueux/Bassillac|Périgueux-Bassillac|FR|2|||LFBE:48
LFBY||Perigueux|Dax Seyresse|FR|1|Perigueux, Dordogne||LFBZ:44
LFBZ|BIQ|Biarritz|Biarritz Pays Basque|FR|3
LFCA||Châtellerault|Aérodrome de Châtellerault-Targé|FR|1|Châtellerault, Vienne||LFBI:29
LFCB|||Aérodrome de Bagnères de Luchon|FR|1|||LFBT:65
LFCC|ZAO|Cahors|Cahors Lalbenque|FR|2|||LFSL:77
LFCD||Andernos-les-Bains|Aérodrome d'Andernos|FR|1|||LFBD:29
LFCE||Saint-Laurent|Guéret Saint-Laurent|FR|1|Saint-Laurent, Creuse||LFBL:69
LFCF|||Aérodrome de Figeac - Livernon|FR|1|||LFSL:47
LFCG||Saint-Girons/Antichan|Aérodrome de Saint-Girons - Antichan|FR|2|||LFBO:72
LFCH||Arcachon/La Teste-de-Buch|Aérodrome d'Arcachon-La Teste-de-Buch|FR|2|||LFBD:41
LFCI|LBI|Albi|Albi Le Sequestre|FR|2|||LFCK:42
LFCJ||Albi|Aérodrome de Jonzac Neulles|FR|1|||LFBD:76
LFCK|DCM|Castres|Castres Mazamet|FR|3
LFCL||Balma|Toulouse-Lasbordes|FR|1|Balma, Haute-Garonne||LFBO:12
LFCM||Millau/Larzac|Millau-Larzac|FR|1|||LFCR:73
LFCN|||Nogaro|FR|1|||LFBP:53
LFCO|||Oloron Herrere|FR|1|||LFBP:27
LFCP|||Pons Avy|FR|1|||LFBD:84
LFCQ||Graulhet/Montdragon|Aérodrome de Graulhet-Montdragon|FR|1|||LFCK:33
LFCR|RDZ|Rodez/Marcillac|Rodez–Aveyron|FR|3
LFCS||Bordeaux-Saucats|Aérodrome de Bordeaux-Léognan-Saucats|FR|1|||LFBD:17
LFCT||Thouars|Aérodrome de Thouars|FR|1|||LFBI:54
LFCU||Ussel|Ussel-Thalamy|FR|1|Ussel, Corrèze||LFLC:64
LFCV||Rodez|Aérodrome de Villefranche de Rouergue|FR|1|||LFCR:37
LFCW||Villeneuve-sur-Lot||FR|1|||LFBE:51
LFCX||Moissac|Aérodrome de Castelsarrasin Moissac|FR|1|||LFBO:54
LFCY|RYN|Royan/Médis|Royan-Médis|FR|2|||LFBH:64
LFCZ||Mimizan|Aérodrome de Mimizan|FR|1|||LFBZ:81
LFDA||Aire-sur-Adour|Aire-sur-l'Adour|FR|1|||LFBP:39
LFDB||Montauban|Aérodrome Morin - Védrines|FR|1|||LFBO:44
LFDC|||Aérodrome de Montendre-Marcillac|FR|1|||LFBD:54
LFDE|||Aérodrome d'Égletons|FR|1|||LFSL:62
LFDF|||Aérodrome de Sainte-Foy-la-Grande|FR|1|||LFBE:27
LFDG||Gaillac|Aérodrome de Gaillac - Lisle-sur-Tarn|FR|1|||LFCK:49
LFDH||Auch|Auch Gers|FR|2|||LFBO:62
LFDI||Libourne/Artigues-de-Lussac|Libourne-Artigues-de-Lussac|FR|1|||LFBD:49
LFDJ||Pamiers/Les Pujols|Aérodrome de Pamiers - Les Pujols|FR|1|||LFMK:51
LFDK||Pamiers|Soulac Sur Mer|FR|1|||LFBH:77
LFDL||Pamiers|Loudun|FR|1|||LFBI:52
LFDM||Marmande|Marmande – Virazeil|FR|1|||LFBE:44
LFDN|RCO|Rochefort/Saint-Agnant|Rochefort-Saint-Agnant|FR|2|BA 721||LFBH:36
LFDP|||St Pierre d'Oléron|FR|1|||LFBH:26
LFDQ|||Castelnau Magnoac|FR|1|||LFBT:44
LFDR|||La Réole Floudes|FR|1|||LFBE:54
LFDS|||Sarlat Domme|FR|1|||LFSL:33
LFDT||Tarbes|Aérodrome de Tarbes Laloubère|FR|1|||LFBT:8
LFDU|||Lesparre St Laurent Medoc|FR|1|||LFBD:43
LFDV|||Couhé Vérac|FR|1|||LFBI:36
LFDW|||Chauvigny|FR|1|||LFBI:26
LFDX||Rochefort|Fumel Montayral|FR|1|||LFBE:56
LFDY|||Bordeaux Yvrac|FR|1|||LFBD:19
LFEA|BIC|Bangor|Aérodrome de Belle Île|FR|1|||LFRS:122
LFEB||Trélivan|Dinan-Trélivan|FR|1|Trélivan, Côtes-d'Armor||LFRN:50
LFEC|OUI|Ushant|Ouessant|FR|2
LFED||Pontivy||FR|1|||LFRN:88
LFEF||Dierre|Amboise Dierre|FR|1|Dierre, Indre-et-Loire||LFOT:19
LFEG||Le Pêchereau|Argenton-sur-Creuse|FR|1|Le Pêchereau, Indre||LFBL:88
LFEH||Aubigny-sur-Nère||FR|1|Aubigny-sur-Nère, Cher||LFOT:125
LFEI||Briare|Briare Châtillon|FR|1|Briare, Loiret||LFPO:128
LFEJ||Saint-Maur|Châteauroux Villers|FR|1|Saint-Maur, Indre||LFOT:94
LFEK||Saint-Aubin|Issoudun Le Fay|FR|1|Saint-Aubin, Indre||LFOT:116
LFEL|||Le Blanc|FR|1|||LFBI:60
LFEM||Vimory|Montargis Vimory|FR|1|Vimory, Loiret||LFPO:89
LFEN||Sorigny|Tours Sorigny|FR|1|Sorigny, Indre-et-Loire||LFOT:19
LFEP||Meilly-sur-Rouvres|Pouilly-Maconge|FR|1|||LFGJ:69
LFEQ|||Quiberon|FR|1|||LFRS:118
LFER||Redon|Redon Bains-sur-Oust|FR|1|||LFRN:47
LFES||Guiscriff|Guiscriff Scaer|FR|1|||LFRB:71
LFET||Til-Châtel|Til Châtel|FR|1|||LFGJ:59
LFEU||Les Hauts-de-Chée|Bar-le-Duc|FR|1|||LFOK:72
LFEV||Gray|Gray Saint-Adrien|FR|1|||LFGJ:46
LFEW||Liernais|Saulieu-Liernais|FR|1|Liernais, Côte-d'Or||LFGJ:91
LFEX||Azelot|Nancy Azelot|FR|1|Azelot, Meurthe-et-Moselle||LFJL:43
LFEY|IDY|Île d'Yeu||FR|1|||LFRS:77
LFEZ||Saint-Max|Nancy-Malzéville|FR|1|Saint-Max, Meurthe-et-Moselle||LFJL:29
LFFB||Buno-Bonnevaux||FR|1|Buno-Bonnevaux, Essonne||LFPO:42
LFFC||Chérence|Mantes-Chérence|FR|1|Chérence, Val-d'Oise||LFOB:52
LFFD||Saint-André-de-l'Eure||FR|1|Saint-André-de-l'Eure, Eure||LFPO:83
LFFE||Attainville|Enghien-Moisselles|FR|1|Attainville, Val-d'Oise||LFPG:15
LFFG||La Ferté-Gaucher||FR|1|La Ferté-Gaucher, Seine-et-Marne||LFPG:60
LFFH||Château-Thierry|Château-Thierry-Belleau|FR|1|Château-Thierry, Aisne||LFPG:59
LFFI||Ancenis||FR|1|||LFRS:43
LFFJ||Mussey-sur-Marne|Joinville Mussey|FR|1|||LFOK:81
LFFK||Fontenay Le Comte||FR|1|||LFBH:42
LFFL|||Bailleau Armenonville|FR|1|||LFPO:58
LFFN||Saint-Christophe-Dodinicourt|Brienne-le-Château|FR|1|||LFOK:43
LFFO||Fromentine|Beauvoir Fromentine|FR|1|||LFRS:47
LFFP||Pithiviers||FR|1|Pithiviers, Loiret||LFPO:65
LFFQ||Cerny|Cerny-La Ferté Alais|FR|1|Cerny, Essonne||LFPO:26
LFFR||Celles-sur-Ource|Bar-sur-Seine|FR|1|Celles-sur-Ource, Aube||LFOK:80
LFFT||Neufchâteau||FR|1|||LFJL:80
LFFU|||Châteauneuf Sur Cher|FR|1|||LFLC:135
LFFV||Vierzon|Vierzon-Méreau|FR|1|Vierzon, Cher||LFOT:104
LFFW||Montaigu-Vendée|Montaigu St Georges|FR|1|||LFRS:33
LFFX||Cuisery|Tournus Cuisery|FR|1|Cuisery, Saône-et-Loire||LFGJ:63
LFFY||Étrépagny||FR|1|||LFOB:38
LFFZ||Saint-Remy-sous-Broyes|Sézanne-Saint-Remy|FR|1|Saint-Remy-sous-Broyes, Marne||LFOK:33
LFGA|CMR|Colmar|Colmar Houssen|FR|2|||LFST:52
LFGB||Mulhouse/Habsheim|Mulhouse-Habsheim|FR|1|||LFSB:17
LFGC||Strasbourg|Strasbourg Neuhof|FR|1|||LFST:11
LFGE||Avallon||FR|1|Avallon, Yonne||LFGJ:126
LFGF||Beaune/Challanges|Beaune-Challanges|FR|1|||LFGJ:41
LFGG||Chaux|Belfort Chaux|FR|1|||LFSB:53
LFGH||Cosne-Cours-sur-Loire|Cosne-sur-Loire|FR|1|Cosne-Cours-sur-Loire, Nièvre||LFPO:158
LFGI||Darois|Dijon Darois|FR|1|Darois, Côte-d'Or||LFGJ:53
LFGJ|DLE|Dole|Dole Tavaux|FR|3
LFGK||Joigny||FR|1|Joigny, Yonne||LFOK:105
LFGL||Courlaoux|Lons-le-Saunier Courlaoux|FR|1|||LFGJ:41
LFGM||Pouilloux|Montceau-les-Mines Pouilloux|FR|1|Pouilloux, Saône-et-Loire||LFGJ:96
LFGN||Paray-le-Monial||FR|1|Paray-le-Monial, Saône-et-Loire||LFLC:106
LFGO||Gisy-les-Nobles|Pont-sur-Yonne|FR|1|Gisy-les-Nobles, Yonne||LFPO:81
LFGP||Jaulges|Saint-Florentin - Chéu|FR|1|Jaulges, Yonne||LFOK:94
LFGQ||Semur-en-Auxois||FR|1|Semur-en-Auxois, Côte-d'Or||LFGJ:95
LFGR||Doncourt-lès-Conflans||FR|1|||LFJL:30
LFGS||Longuyon|Longuyon Villette|FR|1|Longuyon, Meurthe-et-Moselle||ELLX:49
LFGT||Buhl-Lorraine|Sarrebourg Buhl|FR|1|||LFST:45
LFGU|||Sarreguemines Neunkirch|FR|1|||EDDR:10
LFGW||Sommedieue|Verdun-Le Rozelier|FR|2|Sommedieue, Meuse||LFJL:59
LFGX||Crotenay|Champagnole-Crotenay|FR|1|Crotenay, Jura||LFGJ:43
LFGY||Remomeix|Saint-Dié-Remomeix|FR|1|Remomeix, Vosges||LFST:55
LFGZ||Nuits-Saint-Georges||FR|1|Nuits-Saint-Georges, Côte-d'Or||LFGJ:37
LFHA||Le Broc|Issoire-Le Broc|FR|1|Le Broc, Alpes-Maritimes||LFLC:31
LFHC|||Aérodrome de Pérouges - Meximieux|FR|1|||LFLL:18
LFHD||La Garde-Adhémar|Pierrelatte|FR|1|La Garde-Adhémar, Drôme||LFMV:56
LFHE|||Aérodrome de Romans - Saint-Paul|FR|1|||LFLS:37
LFHF||Ruoms||FR|1|||LFMV:75
LFHG||L'Horme|Saint-Chamond L'Horme|FR|1|L'Horme, Loire||LFLL:50
LFHH||Reventin-Vaugris|Vienne Reventin|FR|1|Reventin-Vaugris, Isère||LFLL:36
LFHI||Arandon-Passins|Morestel|FR|1|Arandon-Passins, Isère||LFLL:28
LFHJ||Corbas|Lyon Corbas|FR|1|||LFLL:16
LFHL||Lespéron|Langogne-Lespéron|FR|1|Lespéron, Ardèche||LFHP:43
LFHM|MVV|Megève|Megève Altiport|FR|1|||LFLP:44
LFHN||Valserhône|Bellegarde-Vouvray|FR|1|Valserhône, Ain||LSGG:27
LFHO|OBS|Lanas|Aubenas-South Ardèche|FR|2|Lanas, Ardèche||LFHP:77
LFHP|LPY|Chaspuzac|Le Puy-Loudes|FR|2|Chaspuzac, Haute-Loire
LFHQ||Saint-Flour/Coltines|Saint-Flour-Coltines|FR|1|||LFLW:49
LFHR||Beaumont|Brioude Beaumont|FR|1|Beaumont, Puy-de-Dôme||LFHP:41
LFHS||Bourg/Ceyzériat|Bourg-Ceyzériat|FR|1|||LFLL:55
LFHT||Ambert|Ambert - Le Poyet|FR|1|Ambert, Puy-de-Dôme||LFHP:48
LFHU|AHZ|Huez|L'Alpe d'Huez - Henri Giraud Altiport|FR|1|Huez, Isère||LFLB:63
LFHV||Frontenas|Villefranche-Tarare|FR|1|Frontenas, Rhône||LFLL:41
LFHW||Belleville-en-Beaujolais|Belleville Villié Morgon|FR|1|Belleville-en-Beaujolais, Rhône||LFLL:55
LFHX|||Lapalisse - Périgny|FR|1|||LFLC:61
LFHY||Toulon-sur-Allier|Moulins-Montbeugny|FR|1|||LFLC:85
LFIB|||Aérodrome de Belvès Saint-Pardoux|FR|1|||LFBE:35
LFID|||Aérodrome de Condom - Valence-sur-Baïse|FR|1|||LFBO:84
LFIF||Belmont-sur-Rance|Saint-Affrique-Belmont|FR|1|Belmont-sur-Rance, Aveyron||LFCK:47
LFIG||Cassagnes-Bégonhès||FR|1|||LFCR:26
LFIH|||Chalais|FR|1|||LFBE:63
LFIK||Ribérac|Aérodrome de Ribérac-Tourette|FR|1|||LFBE:50
LFIL|||Rion Des Landes|FR|1|||LFBZ:68
LFIM||Clarac|Saint Gaudens Montréjeau|FR|1|Clarac, Hautes-Pyrénées||LFBT:51
LFIP|||Altiport de Peyresourde Balestas|FR|1|||LFBT:56
LFIR|||Revel Montgey|FR|1|||LFCK:26
LFIS||Saint-Inglevert||FR|1|||EBOS:87
LFIT|||Aérodrome de Toulouse Bourg-Saint-Bernard|FR|1|||LFBO:29
LFIV|||Aérodrome de Vendays-Montalivet|FR|1|||LFBD:69
LFIX|||Itxassou|FR|1|||LFBZ:17
LFIY|||St Jean d'Angély|FR|1|||LFBH:57
LFJA||Villiers-le-Sec|Chaumont-Semoutiers|FR|1|Villiers-le-Sec, Haute-Marne||LFOK:99
LFJB||Mauléon||FR|1|||LFRS:75
LFJC||Clamecy|Clamecy-Rix|FR|1|Clamecy, Nièvre||LFGJ:152
LFJD|||Corlier Altiport|FR|1|||LFLL:47
LFJE|||Altiport de La Motte Chalancon|FR|1|||LFMV:77
LFJF|||Aérodrome d'Aubenasson|FR|1|||LFLS:76
LFJH|||Aérodrome de Cazères - Palaminy|FR|1|||LFBO:54
LFJI|||Aérodrome de Marennes - Le Bournet|FR|1|||LFBH:40
LFJL|ETZ|Goin|Metz-Nancy-Lorraine|FR|3
LFJR|ANE|Angers|Angers Marcé|FR|2|||LFOT:79
LFJS||Soissons|Soissons-Courmelles|FR|1|Soissons, Aisne||LFPG:65
LFJT||Angers|Tours Le Louroux|FR|1|||LFOT:31
LFJU||Lurcy-Lévis||FR|1|Lurcy-Lévis, Allier||LFLC:104
LFJV||Lasclaveries|Aérodrome de Lasclaveries|FR|1|||LFBP:12
LFJY||Chambley-Bussières|Chambley|FR|1|||LFJL:28
LFKA||Tournon|Albertville General Pierre Delachenal|FR|1|||LFLB:35
LFKB|BIA|Bastia|Bastia-Poretta|FR|4
LFKC|CLY|Calvi|Calvi Sainte Catherine|FR|3
LFKD||Val-Cenis|Sollières Sardières|FR|1|||LIMF:67
LFKE|||Saint-Jean-en-Royans|FR|1|||LFLS:37
LFKF|FSC|Figari|Figari Sud-Corse|FR|4
LFKG||GHISONACCIA|Aérodrome de Ghisonaccia - Alzitone|FR|1|||LFKJ:51
LFKH||Figari/Sud Corse|St Jean D'avelanne|FR|1|||LFLB:21
LFKJ|AJA|Ajaccio|Ajaccio Napoléon Bonaparte|FR|3
LFKK||Saint-Baudille-et-Pipet|Château de Montmeilleur|FR|1|Saint-Baudille-et-Pipet, Isère||LFLS:72
LFKL||Brindas|Lyon Brindas|FR|1|Brindas, Rhône||LFLL:31
LFKM|||St Galmier|FR|1|||LFLL:62
LFKO|PRP|Propriano||FR|1|||LFKF:25
LFKP||Cessieu|La Tour-de-Pin|FR|1|Cessieu, Isère||LFLS:22
LFKR||Saint-Rémy-de-Maurienne||FR|1|Saint-Rémy-de-Maurienne, Savoie||LFLB:42
LFKS|SOZ|Solenzara|Solenzara Air Base|FR|2|BA 126||LFKJ:50
LFKT||Corte|Aérodrome de Corte|FR|1|||LFKB:38
LFKX|MFX|Les Allues|Méribel Altiport|FR|1|||LFLB:60
LFKY||Peyrieu|Belley-Peyrieu|FR|1|Peyrieu, Ain||LFLB:16
LFLA|AUF|Auxerre|Auxerre Branches|FR|2|||LFOK:115
LFLB|CMF|Chambéry|Chambéry Aix les Bains|FR|3
LFLC|CFE|Clermont-Ferrand|Clermont-Ferrand Auvergne|FR|4
LFLD|BOU|Bourges||FR|2|||LFOT:131
LFLE||Barby|Chambéry Challes-les-Eaux|FR|1|||LFLB:11
LFLG||Le Versoud|Grenoble Le Versoud|FR|1|Le Versoud, Isère||LFLS:44
LFLH||Châlon sur Saône|Chalon Champforgeuil|FR|1|||LFGJ:52
LFLI||Annemasse||FR|2|||LSGG:13
LFLJ|CVF|Saint-Bon|Courchevel Altiport|FR|1|||LFLB:65
LFLL|LYS|Lyon|Lyon Saint-Exupéry|FR|4|Colombier-Saugnieu
LFLM||Charnay-lès-Mâcon|Mâcon-Charnay|FR|2|Charnay-lès-Mâcon, Saône-et-Loire||LFLL:67
LFLN|SYT|L'Hôpital-le-Mercier|Saint-Yan|FR|2|L'Hôpital-le-Mercier, Saône-et-Loire||LFLC:95
LFLO|RNE|Saint-Léger-sur-Roanne|Roanne-Renaison|FR|2|||LFLC:71
LFLP|NCY|Annecy|Annecy Meythet|FR|3
LFLQ||Montélimar|Montélimar-Ancône|FR|1|Montélimar, Drôme||LFMV:76
LFLR||Albon|Saint-Rambert-d'Albon|FR|1|Albon, Drôme||LFLS:41
LFLS|GNB|Grenoble|Grenoble Alpes Isère|FR|3
LFLT||Domérat|Montluçon-Domérat|FR|1|Domérat, Allier||LFLC:78
LFLU|VAF|Chabeuil|Valence-Chabeuil|FR|2|Chabeuil, Drôme||LFLS:57
LFLV|VHY|Charmeil|Vichy-Charmeil|FR|2|Charmeil, Allier||LFLC:46
LFLW|AUR|Aurillac||FR|3
LFLX|CHR|Châteauroux|Châteauroux Déols|FR|2|||LFOT:99
LFLY|LYN|Chassieu|Lyon Bron|FR|2|Chassieu, Lyon||LFLL:11
LFLZ|||Aérodrome de Feurs - Chambéon|FR|1|||LFLL:69
LFMA||Aix en Provence|Aix Les Milles|FR|1|||LFML:15
LFMC||Le Cannet-des-Maures|Le Luc-Le Cannet|FR|2|Le Cannet-des-Maures, Var||LFTH:37
LFMD|CEQ|Cannes|Cannes Mandelieu|FR|2|||LFMN:24
LFME||Nîmes|Nîmes Courbessac|FR|1|||LFTW:11
LFMF||Fayence|Fayence-Tourrettes|FR|1|Fayence, Var||LFMN:42
LFMG||Revel|Aérodrome de la Montagne Noire|FR|1|||LFCK:29
LFMH|EBU|Andrézieux-Bouthéon|Saint-Étienne-Bouthéon|FR|2|Andrézieux-Bouthéon, Loire||LFLL:65
LFMI||Istres|Istres-Le Tubé Air Base|FR|2|Istres, Bouches-du-Rhône||LFML:25
LFMK|CCF|Carcassonne|Carcassonne Salvaza|FR|3
LFML|MRS|Marseille|Marseille Provence|FR|4|Marignane
LFMN|NCE|Nice|Nice-Côte d'Azur|FR|4|Nice, Alpes-Maritimes
LFMO||Orange|Orange-Caritat Air Base|FR|2|Orange, Vaucluse BA 115||LFMV:26
LFMP|PGF|Perpignan/Rivesaltes|Perpignan-Rivesaltes|FR|3|Llabanère
LFMQ|CTT|Le Castellet||FR|2|Le Castellet, Var||LFTH:34
LFMR|BAE|Saint-Pons|Barcelonnette - Saint-Pons|FR|1|Saint-Pons, Alpes-de-Haute-Provence||LIMZ:82
LFMS||Alès/Deaux|Aérodrome d'Alès Cévennes|FR|2|||LFTW:41
LFMT|MPL|Montpellier/Méditerranée|Montpellier-Méditerranée|FR|4
LFMU|BZR|Béziers|Béziers Vias|FR|3
LFMV|AVN|Avignon|Avignon Caumont|FR|3
LFMW||Castelnaudary Villeneuve|Aérodrome de Castelnaudary-Villeneuve|FR|1|||LFMK:33
LFMX||Château-Arnoux-Saint-Auban||FR|1|Château-Arnoux-Saint-Auban, Alpes-de-Haute-Prove||LFMV:89
LFMY||Salon|Salon-de-Provence Air Base|FR|2|BA 701||LFML:20
LFMZ||Lézignan-Corbières||FR|1|||LFMK:35
LFNA|GAT|Tallard|Gap-Tallard|FR|1|Tallard, Hautes-Alpes||LFMV:109
LFNB|MEN|Mende/Brénoux|Mende-Brenoux|FR|2|||LFHP:67
LFNC|SCP|Saint-Crépin|Mont-Dauphin Saint-Crépin|FR|1|Saint-Crépin, Hautes-Alpes||LIMZ:83
LFNE|||Aérodrome d'Eyguières|FR|1|||LFMV:29
LFNF||Vinon-sur-Verdon|Vinon|FR|1|Vinon-sur-Verdon, Var||LFML:57
LFNG|||Aérodrome de Montpellier - Candillargues|FR|1|||LFMT:9
LFNH||Carpentras|Edgar Soumille|FR|1|Carpentras, Vaucluse||LFMV:20
LFNJ||Aspres-sur-Buëch||FR|1|Aspres-sur-Buëch, Hautes-Alpes||LFMV:95
LFNL|||Aérodrome de Saint-Martin-de-Londres|FR|1|||LFMT:29
LFNN||Narbonne||FR|1|Narbonne, Aude||LFMU:28
LFNO|||Florac Ste Enimie|FR|1|||LFCR:79
LFNQ|||Mont Louis La Quillane|FR|1|||LESU:63
LFNR||Berre-l'Étang|Berre-la-Fare|FR|1|Berre-l'Étang, Bouches-du-Rhône||LFML:11
LFNS||Vaumeilh|Sistéron-Vaumeilh|FR|1|Vaumeilh, Alpes-de-Haute-Provence||LFMV:92
LFNT||Pujaut|Avignon-Pujaut|FR|1|Pujaut, Gard||LFMV:15
LFNU||Mont-Lozère-et-Goulet|Uzès-Belvezet|FR|1|Mont-Lozère-et-Goulet, Lozère||LFTW:36
LFNV||Visan|Valréas Visan|FR|1|||LFMV:48
LFNW|||Puivert|FR|1|||LFMK:40
LFNX|||Bédarieux La Tour|FR|1|||LFMU:39
LFNZ|||Le Mazet De Romanin|FR|1|||LFMV:15
LFOA||Avord|Avord Air Base|FR|2|BA 702||LFLC:147
LFOB|BVA|Beauvais|Beauvais-Tillé|FR|4
LFOC||Châteaudun||FR|2|Châteaudun, Eure-et-Loir||LFOT:85
LFOD||Saumur/Saint-Florent|Aérodrome de Saumur - Saint-Florent|FR|1|||LFOT:66
LFOE|EVX|Fauville|Évreux-Fauville Air Base|FR|2|Fauville, Eure BA 105||LFOB:80
LFOF||Alençon|Alençon-Valframbert|FR|1|Alençon, Orne||LFRK:91
LFOG||Flers|Aérodrome de Flers Saint-Paul|FR|1|||LFRK:49
LFOH|LEH|Le Havre|Le Havre-Octeville|FR|2|||LFRG:19
LFOI||Buigny-Saint-Maclou|Abbeville-Buigny Baie de Somme|FR|2|||LFOB:79
LFOJ||Boulay-les-Barres|Orléans-Bricy Air Base|FR|2|Boulay-les-Barres, Loiret BA 123||LFPO:94
LFOK|XCR|Chalons en Champagne|Chalons Vatry|FR|3
LFOL||Saint-Sulpice-sur-Risle|L'Aigle-Saint-Michel|FR|1|Saint-Sulpice-sur-Risle, Orne||LFRG:77
LFOM||Lessay||FR|1|Lessay, Basse-Normandie||EGJJ:50
LFON||Vernouillet|Dreux Vernouillet|FR|1|Vernouillet, Yvelines||LFPO:73
LFOO|LSO|Les Sables-d'Olonne|Les Sables-d'Olonne Talmont|FR|1|||LFBH:52
LFOP|URO|Boos|Rouen Vallée de Seine|FR|2|||LFOB:68
LFOQ||Blois|Blois Le Breuil|FR|1|||LFOT:45
LFOR||Chartres|Chartres-Métropole|FR|1|Chartres, Eure-et-Loir||LFPO:69
LFOS||Saint-Sylvain|Saint-Valery-Vittefleur|FR|1|||LFRG:64
LFOT|TUF|Tours|Tours Val de Loire|FR|3|Tours, Indre-et-Loire
LFOU|CET|Cholet|Cholet Le Pontreau|FR|1|||LFRS:56
LFOV|LVA|Laval|Laval-Entrammes|FR|2|Laval, Mayenne||LFRN:74
LFOW||Fontaine-lès-Clercs|Saint-Quentin-Roupy|FR|1|Fontaine-lès-Clercs, Aisne||LFQQ:84
LFOX||Guillerval|Étampes-Mondésir|FR|1|Guillerval, Essonne||LFPO:44
LFOY||Gommerville|Havre-Saint-Romain-de-Colbosc|FR|1|||LFRG:25
LFOZ|ORE|Saint-Denis-de-l'Hôtel|Orléans–Saint-Denis-de-l'Hôtel|FR|1|Saint-Denis-de-l'Hôtel, Loiret||LFPO:94
LFPA||Bernes-sur-Oise|Persan-Beaumont|FR|1|Bernes-sur-Oise, Val-d'Oise||LFPG:25
LFPB|LBG|Paris|Paris-Le Bourget|FR|3|||LFPG:10
LFPC|CSF|Creil|Creil Air Base|FR|2|||LFPG:27
LFPD||Bernay|Bernay-Saint-Martin|FR|1|Bernay, Eure||LFRG:42
LFPE||Isles-lès-Villenoy|Meaux-Esbly|FR|1|Isles-lès-Villenoy, Seine-et-Marne||LFPG:22
LFPF||Beynes|Beynes Thiverval|FR|1|Beynes, Yvelines||LFPO:35
LFPG|CDG|Paris|Charles de Gaulle|FR|4|Paris (Roissy-en-France, Val-d'Oise)
LFPH||Chelles|Chelles-le-Pin|FR|1|Chelles, Seine-et-Marne||LFPG:13
LFPK||Pommeuse|Coulommiers-Voisins|FR|1|Pommeuse, Seine-et-Marne||LFPG:38
LFPL||Lognes|Lognes Emerainville|FR|1|Lognes, Seine-et-Marne||LFPG:22
LFPM||Moissy-Cramayel|Melun-Villaroche|FR|2|Moissy-Cramayel, Seine-et-Marne||LFPO:27
LFPN|TNF|Toussus-le-Noble||FR|2|Toussus-le-Noble, Yvelines||LFPO:19
LFPO|ORY|Paris|Paris-Orly|FR|4|Paris (Orly, Val-de-Marne)
LFPP||Le Plessis-Belleville||FR|1|||LFPG:17
LFPQ||Fontenay-Trésigny||FR|1|||LFPO:40
LFPR||Travaillan|Plan-de-Dieu-Orange|FR|1|Travaillan, Vaucluse||LFMV:30
LFPT|POX|Cormeilles-en-Vexin|Pontoise-Cormeilles|FR|2|Cormeilles-en-Vexin, Val-d'Oise||LFPG:39
LFPU||Moret-Loing-et-Orvanne|Moret-Episy|FR|1|Moret-Loing-et-Orvanne, Seine-et-Marne||LFPO:54
LFPV|VIY|Vélizy-Villacoublay|Vélizy-Villacoublay Air Base|FR|2|Vélizy-Villacoublay, Yvelines||LFPO:12
LFPX||Chavenay|Chavenay-Villepreux|FR|1|Chavenay, Yvelines||LFPO:30
LFPZ||Saint-Cyr-l'École||FR|1|Saint-Cyr-l'École, Yvelines||LFPO:23
LFQA||Prunay|Reims-Prunay|FR|1|Prunay, Marne||LFOK:49
LFQB||Barberey-Saint-Sulpice|Troyes-Barberey|FR|2|Barberey-Saint-Sulpice, Aube||LFOK:52
LFQC||Chanteheux|Lunéville-Croismare|FR|1|||LFJL:48
LFQD||Saint-Laurent-Blangy|Arras-Roclincourt|FR|1|||LFQQ:34
LFQE||Rouvres-en-Woëvre|Lieutenant Étienne Mantoux Air Base|FR|2|||LFJL:50
LFQF||Autun|Autun-Bellevue|FR|1|Autun, Saône-et-Loire||LFGJ:89
LFQG|NVS|Marzy|Nevers-Fourchambault|FR|2|Marzy, Nièvre||LFLC:135
LFQH||Châtillon-sur-Seine||FR|1|||LFOK:107
LFQJ||Vieux-Reng|Maubeuge-Élesmes|FR|1|Vieux-Reng, Nord||EBCI:35
LFQK||Écury-sur-Coole|Châlons - Écury-sur-Coole|FR|1|||LFOK:18
LFQL||Bénifontaine|Lens-Bénifontaine|FR|1|Bénifontaine, Pas-de-Calais||LFQQ:23
LFQM||Besançon|Besançon La Vèze|FR|1|||LFGJ:53
LFQN||Longuenesse|Saint-Omer Wizernes|FR|1|Longuenesse, Pas-de-Calais||LFQQ:64
LFQO||Bondues|Marcq-en-Baroeul|FR|1|||LFQQ:14
LFQP||Bourscheid|Phalsbourg-Bourscheid Air Base|FR|2|||LFST:40
LFQQ|LIL|Lille||FR|4|Lesquin
LFQS||Vitry-en-Artois||FR|1|Vitry-en-Artois, Pas-de-Calais||LFQQ:27
LFQT|HZB|Merville|Merville-Calonne|FR|2|Merville, Nord||LFQQ:33
LFQU||Sarre-Union||FR|1|||EDDR:29
LFQV||Charleville-Mézières|Charleville-Mézières Ardennes-Etienne Riché|FR|2|||EBCI:77
LFQW||Frotey-lès-Vesoul|Vesoul-Frotey|FR|2|Frotey-lès-Vesoul, Haute-Saône||LFGJ:89
LFQX||Juvancourt||FR|1|Juvancourt, Aube||LFOK:86
LFQY||Saverne|Saverne Steinbourg|FR|1|||LFST:28
LFQZ||Gelucourt|Dieuze-Guéblange|FR|1|||LFJL:41
LFRB|BES|Brest|Brest Bretagne|FR|4
LFRC|CER|Cherbourg|Cherbourg Manche|FR|2|||EGJA:54
LFRD|DNR|Dinard|Dinard Pleurtuit Saint-Malo|FR|2|||LFRN:63
LFRE|LBY|La Baule-Escoublac||FR|2|||LFRS:58
LFRF|GFR|Bréville-sur-Mer|Granville|FR|2|Bréville-sur-Mer, Manche||EGJJ:58
LFRG|DOL|Deauville|Deauville Normandie|FR|3
LFRH|LRT|Lorient/Lann/Bihoué|Lorient South Brittany|FR|2|Bretagne Sud||LFRB:105
LFRI|EDM|La Roche-sur-Yon|La Roche-sur-Yon Les Ajoncs|FR|2|||LFRS:53
LFRJ|LDV|Landivisiau|Landivisiau Air Base|FR|2|||LFRB:22
LFRK|CFR|Caen|Caen Carpiquet|FR|3
LFRL||Lanvéoc/Poulmic|Lanvéoc-Poulmic Air Base|FR|2|||LFRB:19
LFRM|LME|Le Mans|Le Mans-Arnage|FR|2|Le Mans, Sarthe||LFOT:70
LFRN|RNS|Saint-Jacques-de-la-Lande|Rennes-Saint-Jacques|FR|3|Saint-Jacques-de-la-Lande, Ille-et-Vilaine
LFRO|LAI|Lannion||FR|2|||LFRB:78
LFRP||Rennes|Ploërmel Loyat|FR|1|||LFRN:48
LFRQ|UIP|Quimper/Pluguffan|Quimper-Cornouaille|FR|2|||LFRB:56
LFRS|NTE|Nantes|Nantes Atlantique|FR|4
LFRT|SBK|Trémuson|Saint-Brieuc-Armor|FR|2|Trémuson, Côtes-d'Armor||EGJJ:89
LFRU|MXN|Morlaix/Ploujean|Morlaix-Ploujean|FR|2|||LFRB:48
LFRV|VNE|Vannes/Meucon|Vannes-Meucon|FR|2|||LFRN:83
LFRW||Le Val-Saint-Père|Avranches Le Val-Saint-Père|FR|1|Le Val-Saint-Père, Manche||LFRN:70
LFRZ|SNR|Saint-Nazaire/Montoir|Saint-Nazaire-Montoir|FR|2|||LFRS:45
LFSA||Thise|Besançon-Thise|FR|1|||LFGJ:56
LFSB|BSL|Bâle / Mulhouse|EuroAirport Basel–Mulhouse–Freiburg|FR|4
LFSD|DIJ|Dijon|Dijon Longvic|FR|2|||LFGJ:36
LFSE||Dogneville|Épinal Dogneville|FR|1|||LFJL:87
LFSG|EPL|Épinal|Épinal Mirecourt|FR|2|||LFJL:74
LFSH||Haguenau||FR|1|||EDSB:19
LFSI||Saint-Dizier|Saint-Dizier – Robinson Air Base|FR|2|||LFOK:53
LFSJ||Douzy|Sédan Douzy|FR|1|||ELLX:85
LFSK||Vauclerc|Vitry-le-François Vauclerc|FR|1|||LFOK:36
LFSL|BVE|Brive|Brive Souillac|FR|3
LFSM||Courcelles-lès-Montbéliard|Montbéliard-Courcelles|FR|2|||LFSB:56
LFSN|ENC|Tomblaine|Nancy-Essey|FR|2|Tomblaine, Meurthe-et-Moselle||LFJL:32
LFSO||Thuilley-aux-Groseilles|Nancy-Ochey Air Base|FR|2|BA 133||LFJL:49
LFSP||Pontarlier||FR|1|Pontarlier, Doubs||LFGJ:70
LFSS|||Saint Sulpice des Landes|FR|1|||LFRN:32
LFST|SXB|Strasbourg||FR|4
LFSU||Rolampont|Langres-Rolampont|FR|1|Rolampont, Haute-Marne||LFGJ:103
LFSV||Pont-Saint-Vincent||FR|1|Pont-Saint-Vincent, Meurthe-et-Moselle||LFJL:45
LFSW||Plivot|Épernay Plivot|FR|1|Plivot, Marne||LFOK:27
LFSX||Saint-Sauveur|Luxeuil-Saint-Sauveur Air Base|FR|2|BA 116||LFSB:90
LFSY||Baigneux-les-Juffs|Cessey-Baigneux-les-Juffs|FR|1|Baigneux-les-Juffs, Côte-d'Or||LFGJ:88
LFTA||La Tranche-sur-Mer|La Tranche-sur-Mer ULM|FR|1|||LFBH:27
LFTF||Pierrefeu-du-Var|Cuers-Pierrefeu|FR|1|Pierrefeu-du-Var, Var||LFTH:17
LFTH|TLN|Hyères|Toulon-Hyères|FR|3|Hyères, Var
LFTM|||Serres - La Bâtie-Montsaléon|FR|1|||LFMV:90
LFTN|||La Grand'combe|FR|1|||LFTW:63
LFTP||Puimoisson||FR|1|Puimoisson, Alpes de Haute-Provence||LFTH:86
LFTQ|||Châteaubriant Pouancé|FR|1|||LFRN:55
LFTW|FNI|Nîmes/Garons|Nîmes-Arles-Camargue|FR|3
LFTZ|LTT|Saint-Tropez|La Môle|FR|2|||LFTH:30
LFVM|MQC|Miquelon||PM|2
LFVP|FSP|Saint-Pierre|Saint-Pierre Pointe-Blanche|PM|3
LFXA||Ambérieu|Ambérieu Air Base|FR|2|BA 278||LFLL:34
LFXB|||Saintes Thénac|FR|1|||LFBH:68
LFXQ||Guer|Coëtquidan Air Base|FR|1|||LFRN:36
LFXU||Les Mureaux||FR|1|Les Mureaux, Yvelines||LFPO:43
LFYG||Niergnies|Cambrai Niergnies|FR|1|Niergnies, Nord||LFQQ:49
LFYR||Gièvres|Romorantin Pruniers Airbase|FR|1|Gièvres, Loir-et-Cher||LFOT:74
LFYS|||Ste Léocadie|FR|1|||LESU:51
LFYV||Baons-le-Comte|Yvetot Lucien Camu|FR|1|||LFRG:51
LGAD|PYR|Andravida|Andravida Air Base|GR|2|||LGRX:28
LGAG||Agrinion|Dhokimion|GR|1|||LGRX:52
LGAL|AXD|Alexandroupolis|Alexandroupoli Democritus|GR|3
LGAV|ATH|Athens|Athens Eleftherios Venizelos|GR|4|Spata-Artemida
LGAX||Lianovergi|Alexandria|GR|1|Gidas||LGTS:43
LGBL|VOL|Nea Anchialos|Nea Anchialos National|GR|3
LGEL||Elefsina|Elefsis Air Base|GR|2|||LGAV:37
LGEP||Pyrgos|Epitalion|GR|1|||LGZA:56
LGHI|JKH|Chios Island|Chios Island National|GR|3
LGIK|JIK|Ikaria Island|Ikaria|GR|2
LGIO|IOA|Ioannina|Ioannina King Pyrrhus National|GR|3
LGIR|HER|Heraklion|Heraklion International Nikos Kazantzakis|GR|4
LGKA|KSO|Argos Orestiko|Kastoria National Airport Aristotle|GR|2
LGKC|KIT|Kithira Island|Kithira|GR|2
LGKF|EFL|Kefallinia Island|Kefallinia|GR|3
LGKJ|KZS|Kastelorizo Island|Kastelorizo|GR|2
LGKL|KLX|Kalamata||GR|3
LGKM||Amygdaleonas|Kavala Amygdaleon Lydia|GR|1|||LGKV:24
LGKO|KGS|Kos Island|Kos International Airport "Ippokratis"|GR|4
LGKP|AOK|Karpathos Island|Karpathos|GR|3
LGKR|CFU|Kerkyra|Corfu Ioannis Kapodistrias|GR|4|Kerkyra (Corfu)
LGKS|KSJ|Kasos Island|Kasos|GR|2
LGKV|KVA|Kavala|Kavala Alexander the Great|GR|4
LGKY|JKL|Kalymnos Island|Kalymnos|GR|2
LGKZ|KZI|Kozani|Kozani National Airport Filippos|GR|3
LGLE|LRS|Leros Island|Leros|GR|2
LGLM|LXS|Limnos Island|Limnos|GR|2
LGLR|LRA|Larissa|Larissa Air Base|GR|1|||LGBL:56
LGMG||Megara|Megara Air Base|GR|1|||LGAV:51
LGMK|JMK|Mykonos|Mykonos Island National|GR|3
LGML|MLO|Milos Island|Milos|GR|2
LGMO||Molos||GR|1|||LGBL:45
LGMT|MJT|Mytilene||GR|3
LGNA||Nea Silata|Silata|GR|1|||LGTS:26
LGNX|JNX|Naxos|Naxos Island National|GR|2
LGPA|PAS|Paros|Paros National|GR|2
LGPL|JTY|Astypalaia Island|Astypalaia|GR|2
LGPZ|PVK|Preveza|Aktion National|GR|3
LGRD||Rhodes Island|Maritsa Air Base|GR|1|||LGRP:3
LGRP|RHO|Rhodes|Rhodes International Airport "Diagoras"|GR|4
LGRS|||Logan Reserve|AU|1|||YBBN:36
LGRX|GPA|Patras|Patras Araxos Agamemnon|GR|3
LGSA|CHQ|Chania||GR|4|Souda
LGSD||Sedes|Sedes Air Base|GR|1|||LGTS:5
LGSK|JSI|Skiathos|Skiathos Island National|GR|3
LGSM|SMI|Samos Island|Samos|GR|3
LGSO|JSY|Syros Island|Syros|GR|2
LGSP|SPJ|Sparti||GR|1|||LGKL:46
LGSR|JTR|Santorini Island|Santorini|GR|4
LGST|JSH|Crete Island|Sitia|GR|3
LGSY|SKU|Skiros Island|Skiros|GR|2
LGTG||Tanagra|Tanagra Air Base|GR|2|||LGAV:56
LGTL||Kasteli|Kasteli Hellenic Air Force Base|GR|2|*||LGIR:21
LGTP||Trípoli|Tripolis Air Base|GR|1|||LGKL:61
LGTS|SKG|Thessaloniki|Thessaloniki Macedonia|GR|4
LGTT||Tatoi||GR|1|||LGAV:24
LGTY||Crete Island|Tympaki Air Base|GR|1|||LGIR:48
LGZA|ZTH|Zakynthos|Zakynthos International Airport Dionysios Solomos|GR|3
LHAK||Atkár||HU|1|||LHBP:58
LHBC||Békéscsaba||HU|1|||LRAR:56
LHBD||Székesfehérvár|Börgönd|HU|1|||LHBP:66
LHBF||Bö|Bükfördö|HU|1|||LHSM:82
LHBI||Biharkeresztes||HU|1|||LROD:21
LHBJ||Baja||HU|1|||LHPP:64
LHBK||Balatonkeresztúr||HU|1|||LHSM:18
LHBL||Ballószög||HU|1|||LHBP:67
LHBO||Bácsbokod||HU|1|||LHPP:72
LHBP|BUD|Budapest|Budapest Liszt Ferenc|HU|4
LHBS||Budaörs||HU|1|||LHBP:21
LHBT|||Bátonyterenye-Világosipuszta sportreptér|HU|1|||LHBP:78
LHBY||Gyõrszentiván/Bõny|Gyõrszentiván-Bõny|HU|1|||LZIB:70
LHCL||Cegléd||HU|1|||LHBP:55
LHDA||Dáka|Dáka Sport|HU|1|||LHSM:68
LHDC|DEB|Debrecen||HU|4
LHDK||Dunakeszi||HU|1|||LHBP:22
LHDV||Dunaújváros||HU|1|||LHBP:65
LHEM||Esztergom|Esztergom Ernő Rubik|HU|1|||LHBP:54
LHER||Eger|Eger Apolló|HU|1|||LHBP:101
LHFC||Bodmér|Bodmér-Felcsút|HU|1|||LHBP:53
LHFH||Farkashegy||HU|1|||LHBP:27
LHFM||Fertőszentmiklós||HU|1|||LOWW:62
LHFP||Fertőrákos|Piuszpuszta|HU|1|||LOWW:41
LHGD||Gödöllő||HU|1|||LHBP:17
LHGR||Gyúró||HU|1|||LHBP:38
LHGY||Gyöngyös|Gyöngyös Pipishegy|HU|1|||LHBP:68
LHHH||Budapest|Hármashatárhegy Glider Field|HU|1|||LHBP:25
LHHK||Hajmáskér||HU|1|||LHSM:81
LHHM||Hódmezővásárhely||HU|1|||LRAR:77
LHHO||Hajdúszoboszló||HU|1|||LHDC:17
LHIN||Inárcs||HU|1|||LHBP:19
LHJK||Jakabszállás||HU|1|||LHBP:80
LHJT||Balatonfüred|Földes|HU|1|||LHSM:61
LHKA||Kalocsa|Kalocsa-Foktő|HU|2|||LHPP:83
LHKD||Kecskéd||HU|1|||LHBP:71
LHKE||Kecskemét|Kecskemét Air Base|HU|2|||LHBP:68
LHKF||Kiskunhalas|Kiskunhalas-Füzespuszta|HU|1|||LHPP:104
LHKH||Kiskunfélegyháza||HU|1|||LHBP:91
LHKI||Akasztó|Kiskőrös-Akasztó|HU|1|||LHBP:86
LHKK||Kiskunlacháza||HU|1|||LHBP:32
LHKM||Kunmadaras|Kunmadaras Air Base|HU|1|||LHDC:63
LHKT||Kadarkút||HU|1|||LHPP:57
LHKU||Kutas|Hertelendy Kastély Field|HU|1|||LHSM:40
LHKV||Kaposújlak|Kaposvar Kaposújlak|HU|1|||LHSM:55
LHLI||Lipót|Lipót Szigetköz|HU|1|||LZIB:39
LHMP||Matkópuszta||HU|1|||LHBP:77
LHMR||Maklár||HU|1|||LHDC:96
LHNK||Nagykanizsa||HU|1|||LHSM:33
LHNS||Nagyszénás||HU|1|||LRAR:74
LHNY||Nyíregyháza||HU|1|||LHDC:55
LHOY||Őcsény||HU|1|||LHPP:54
LHPA||Pápa|Pápa Air Base|HU|1|||LHSM:80
LHPC||Pusztacsalád||HU|1|||LOWW:73
LHPK||Papkutapuszta||HU|1|||LHSM:70
LHPL|||Pilis|HU|1|||LHBP:25
LHPP|PEV|Pécs|Pécs-Pogány|HU|4
LHPR||Győr|Győr-Pér|HU|3
LHPS||Pusztaszer||HU|1|||LRAR:107
LHPW||Pusztaszer|Pusztaszer West|HU|1|||LRAR:108
LHSA||Szentkirályszabadja||HU|1|||LHSM:75
LHSB||Szabadszállás|Szabadszállás-Balázspuszta|HU|1|||LHBP:59
LHSI||Sitke||HU|1|||LHSM:62
LHSK||Siófok-Kiliti||HU|1|||LHSM:74
LHSM|SOB|Sármellék|Hévíz–Balaton|HU|3
LHSN||Szolnok|Szolnok Air Base|HU|2|||LHBP:81
LHSS||Szolnok|Szolnok-Szandai|HU|1|||LHBP:77
LHST||Szatymaz||HU|1|||LRAR:95
LHSU||Törökszentmiklós|Surjány|HU|1|||LHDC:91
LHSV||Szarvas|Kákahalom|HU|1|||LRAR:90
LHSY||Szombathely||HU|1|||LHSM:77
LHSZ||Szentes||HU|1|||LRAR:90
LHTA||Taszár|Taszár Air Base|HU|2|||LHPP:51
LHTL||Tököl||HU|2|||LHBP:23
LHTM||Tápiószentmárton||HU|1|||LHBP:41
LHTP||Tapolca||HU|1|||LHSM:28
LHUD||Szeged||HU|1|||LRAR:91
LHUH||Úrhida||HU|1|||LHBP:79
LHVE||Veresegyház||HU|1|||LHBP:23
LHZA||Zalaegerszeg|Zalaegerszeg Andráshida|HU|1|||LHSM:36
LHZK||Zalakaros||HU|1|||LHSM:15
LIAA||Terni|Aviosuperficie "Alvaro Leonardi"|IT|1|||LIRZ:58
LIAF||Foligno||IT|1|Foligno (PG)||LIRZ:24
LIAL||Città di Castello|Sant'Illuminato|IT|1|Città di Castello (PG)||LIRZ:37
LIAP||L'Aquila|L'Aquila–Preturo|IT|1|||LIBP:72
LIAQ||Aquino||IT|1|||LIRN:83
LIAR||Fubara|Furbara Air Base|IT|1|||LIRF:29
LIAT||Capannoli|Valdera|IT|1|Capannoli (PI)||LIRP:26
LIAU||Capua||IT|1|||LIRN:27
LIBA||San Giovanni Rotondo|Amendola Air Base|IT|2|San Giovanni Rotondo (FG)||LIBF:19
LIBC|CRV|Isola di Capo Rizzuto|Crotone Sant'Anna Pythagoras|IT|3|Isola di Capo Rizzuto (KR)
LIBD|BRI|Bari|Bari Karol Wojtyła|IT|4
LIBF|FOG|Foggia|Foggia Gino Lisa|IT|3|Foggia (FG)
LIBG|TAR|Grottaglie|Taranto-Grottaglie Marcello Arlotta|IT|2|||LIBR:48
LIBN|LCC|Galatina|Lecce Galatina Air Base / Galatina Fortunato Cesari|IT|2|Galatina (LE)||LIBR:49
LIBP|PSR|Pescara|Abruzzo|IT|4
LIBR|BDS|Brindisi||IT|4
LIBV||Gioia del Colle|Gioia del Colle Antonio Ramirez Air Base|IT|2|Gioia del Colle (BA)||LIBD:44
LICA|SUF|Lamezia Terme|Lamezia Terme Sant'Eufemia|IT|4|Lamezia Terme (CZ)
LICB|CIY|Comiso||IT|3
LICC|CTA|Catania|Catania-Fontanarossa|IT|4
LICD|LMP|Lampedusa||IT|3
LICG|PNL|Pantelleria||IT|3|Pantelleria (TP)
LICJ|PMO|Palermo|Falcone–Borsellino|IT|4
LICK||Scalea||IT|1|Scalea (CS)||LICA:104
LICN||Calatabiano||IT|1|Calatabiano (CT) Aviosuperficie Angelo D'Arrigo||LICC:40
LICP||Palermo|Palermo-Boccadifalco|IT|2|||LICJ:21
LICR|REG|Reggio Calabria||IT|3
LICS||Sciacca|AvioSciacca|IT|1|Sciacca (AG)||LICT:62
LICT|TPS|Trapani|Vincenzo Florio Airport Trapani-Birgi|IT|3|Trapani (TP)
LICZ||Sigonella|Sigonella Navy Air Base|IT|2|Sigonella (CT)||LICC:15
LIDA||Asiago|Asiago Romeo Sartori|IT|1|Asiago (VI)||LIPH:59
LIDB|BLX|Belluno|Belluno Arturo dell'Oro|IT|1|Belluno (BL)||LIPH:58
LIDC||Loreo|Cà Negra Private Airstrip|IT|1|Loreo (RO)||LIPZ:49
LIDE||Reggio Emilia||IT|1|Reggio Emilia (RE)||LIMP:32
LIDF||Fano||IT|1|Fano (PU)||LIPY:36
LIDG||Lugo|Lugo Francesco Baracca|IT|1|||LIPK:28
LIDH||Thiene|Thiene Arturo Ferrarin|IT|1|Thiene (VI)||LIPH:54
LIDL||Vangadizza|Legnago|IT|1|Vangadizza (VR)||LIPX:43
LIDP||Pavullo||IT|1|Pavullo (MO)||LIPE:43
LIDR|RAN|Ravenna||IT|1|Ravenna (RA)||LIPK:23
LIDT||Trento|Trento-Mattarello|IT|3|Trento (TN)
LIDU||Carpi|Carpi-Budrione|IT|1|Carpi (MO)||LIMP:45
LIDV||Ferrara|Prati Vecchi d'Aguscello|IT|1|Ferrara (FE)||LIPE:42
LIDW||Campo di Pietra|Luciano Narder|IT|1|Campo di Pietra (TV)||LIPZ:26
LIEA|AHO|Alghero|Alghero-Fertilia|IT|3
LIED|DCI|Decimomannu|Decimomannu Air Base|IT|2|||LIEE:13
LIEE|CAG|Cagliari|Cagliari Elmas|IT|4
LIEO|OLB|Olbia|Olbia Costa Smeralda|IT|4|Olbia (SS)
LIEP||Perdasdefogu|Aliquirra|IT|1|Perdasdefogu (OG)||LIEE:59
LIER|FNU|Oristano|Oristano-Fenosu|IT|1|||LIEE:80
LIET||Arbatax|Tortolì|IT|2|||LIEE:92
LIGT||San Genesio||IT|1|||LIPB:13
LIKD||Torraccia||SM|1|||LIPR:11
LIKE||Caorle|Litorale di Caorle|IT|1|Caorle (VE)||LIPZ:38
LIKH||Osoppo|Rivoli Avro|IT|1|Osoppo (UD)||LIPQ:54
LIKI||San Donà di Piave|Caposile|IT|1|||LIPZ:19
LIKL||Pordenone|La Comina|IT|1|Pordenone (PN)||LIPH:52
LIKO||Ozzano dell'Emilia|Guglielmo Zamboni|IT|1|Ozzano dell'Emilia (BO)||LIPE:21
LILA||Alessandria||IT|1|Alessandria (AL)||LIMJ:60
LILB||Verzago|Alzate Brianza|IT|1|Verzago (CO)||LSZA:33
LILC||Varese|Calcinate del Pesce|IT|1|Varese (VA)||LIMC:20
LILE||Cerrione|Biella-Cerrione|IT|2|Cerrione (BI)||LIMF:48
LILF||Castelnuovo Don Bosco||IT|1|Castelnuovo Don Bosco (AT)||LIMF:32
LILG||Vergiate||IT|1|Vergiate (VA)||LIMC:9
LILH||Voghera|Voghera-Rivanazzano|IT|1|Voghera (PV)||LIML:58
LILI||Vercelli||IT|1|Vercelli (VC)||LIMC:43
LILM||Casale Monferrato||IT|1|Casale Monferrato (AL)||LIMC:62
LILN||Venegono Superiore|Varese-Venegono|IT|2|Venegono Superiore (VA)||LIMC:18
LILO||Caiolo|Caiolo Sondrio|IT|1|Caiolo (SO)||LIME:54
LILQ||Massa|Massa Cinquale Municipal|IT|1|Massa (MS)||LIRP:39
LILR||Cremona|Cremona-Migliaro|IT|1|Cremona (CR)||LIPO:39
LILV||Valbrembo||IT|1|Valbrembo (BG)||LIME:11
LILW||Venaria Reale|Venaria Reale Mario Santi|IT|1|Venaria Reale (TO)||LIMF:8
LIMA||Torino|Torino-Aeritalia|IT|2|Torino (TO)||LIMF:13
LIMB||Bresso|Milano-Bresso|IT|1|Bresso (MI)||LIML:12
LIMC|MXP|Milan|Milan Malpensa|IT|4|Ferno
LIME|BGY|Bergamo|Il Caravaggio|IT|4|Orio al Serio
LIMF|TRN|Turin||IT|4|Caselle Torinese
LIMG||Villanova d'Albenga|Riviera Villanova d'Albenga|IT|2|Villanova d'Albenga (SV)||LIMZ:68
LIMJ|GOA|Genova|Genoa Cristoforo Colombo|IT|4|Genova (GE)
LIML|LIN|Milan|Milano Linate|IT|4|Segrate
LIMN||Cameri|Cameri Air Base|IT|2|Cameri (NO)||LIMC:12
LIMP|PMF|Parma||IT|3|Parma (PR)
LIMR||Novi Ligure|Novi Ligure Eugenio Mossi|IT|2|Novi Ligure (AL)||LIMJ:41
LIMS||San Damiano|Piacenza San Damiano Air Base|IT|2|San Damiano (PC)||LIMP:46
LIMW|AOT|Saint-Christophe|Aosta Corrado Gex|IT|2|Saint-Christophe (AO)||LIMF:64
LIMZ|CUF|Levaldigi|Cuneo|IT|3|Levaldigi (CN)
LINB||Melpignano|Corte|IT|1|Melpignano (LE)||LIBR:67
LINF||Fermo|Fermano|IT|1|Fermo (FM)||LIPY:53
LINK||Lecce|Fondone|IT|1|Lecce (LE)||LIBR:41
LINL||Lecce|Lecce-San Cataldo Lepore|IT|1|Lecce (LE)||LIBR:45
LION||Bagnoli di Sopra|Dominio di Bagnoli|IT|1|Bagnoli di Sopra (PD)||LIPZ:53
LIPA|AVB|Aviano|Aviano Air Base|IT|2|Aviano (PN)|LIYW|LIPH:53
LIPB|BZO|Bolzano||IT|3|Bolzano (BZ)
LIPC||Cervia|Cervia Air Base|IT|2|Cervia (RA)||LIPK:19
LIPD||Campoformido|Udine-Campoformido|IT|1|Campoformido (UD)||LIPQ:32
LIPE|BLQ|Bologna|Bologna Guglielmo Marconi|IT|4
LIPF||Ferrara|Ferrara-San Luca|IT|1|Ferrara (FE)||LIPE:40
LIPG||Gorizia|Gorizia Duca d'Aosta|IT|1|Gorizia (GO)||LIPQ:14
LIPH|TSF|Treviso||IT|4|Treviso (TV)
LIPI||Codroipo|Udine-Rivolto Air Base|IT|2|Codroipo (UD)||LIPQ:36
LIPK|FRL|Forlì|Forlì-Luigi Ridolfi|IT|3|Forlì (FC)
LIPL||Ghedi|Ghedi Air Base|IT|2|Ghedi (BS)||LIPO:5
LIPM||Marzaglia|Modena-Marzaglia|IT|1|Marzaglia (MO)||LIPE:39
LIPN||Verona|Verona-Boscomantico|IT|1|||LIPX:9
LIPO|VBS|Montichiari|Brescia Gabriele d'Annunzio|IT|3|Montichiari (BS)
LIPQ|TRS|Trieste||IT|4|Ronchi dei Legionari/Trieste
LIPR|RMI|Rimini|Federico Fellini|IT|4|Rimini (RN)
LIPS||Istrana|Istrana Air Base|IT|2|Istrana (TV)||LIPH:9
LIPU||Padova|Padova Gino Allegri|IT|2|Padova (PD)||LIPH:39
LIPV||Venezia|Venice-Lido Giovanni Nicelli|IT|1|Venezia (VE)||LIPZ:9
LIPX|VRN|Verona|Verona Villafranca Valerio Catullo|IT|4|Caselle
LIPY|AOI|Falconara Marittima|Marche|IT|3|Falconara Marittima (AN)
LIPZ|VCE|Venezia|Venice Marco Polo|IT|4|Venezia (VE)
LIQB||Arezzo|Arezzo Molin Blanco|IT|1|Arezzo (AR)||LIRQ:65
LIQF||San Sepolcro||IT|1|San Sepolcro (AR)||LIRZ:59
LIQG||Cecina||IT|1|Cecina (LI)||LIRP:45
LIQL||Capannori|Lucca-Tassignano|IT|1|Capannori (LU)||LIRP:22
LIQN||Rieti||IT|1|Rieti (RI)||LIRA:73
LIQQ||Castiglion Fiorentino|Serristori|IT|1|Castiglion Fiorentino (AR)||LIRZ:59
LIQS||Ampugnano|Siena-Ampugnano|IT|2|Ampugnano (SI)||LIRQ:62
LIQW||Sarzana|Sarzana-Luni Bartolomeo Arrigoni|IT|2|Sarzana (SP)||LIRP:55
LIQY||Scarlino|Aliscarlino|IT|1|Scarlino (GR)||LIRJ:50
LIRA|CIA|Rome|Ciampino–G. B. Pastine|IT|4
LIRE||Pomezia|Pratica di Mare Air Base|IT|2|Pomezia (RM)||LIRA:20
LIRF|FCO|Rome|Rome–Fiumicino Leonardo da Vinci|IT|4
LIRG||Guidonia|Guidonia Air Base|IT|2|Guidonia (RM)||LIRA:24
LIRH||Frosinone|Frosinone Air Base|IT|1|||LIRA:60
LIRI|QSR|Salerno|Salerno Costa d'Amalfi|IT|3
LIRJ|EBA|Campo nell'Elba|Marina di Campo|IT|3|Campo nell'Elba (LI)
LIRL||Latina|Latina Air Base|IT|2|||LIRA:39
LIRM||Caserta|Grazzanise Air Base|IT|2|||LIRN:26
LIRN|NAP|Napoli|Naples|IT|4
LIRO||Benevento|Benevento-Olivola|IT|1|Benevento (BN)||LIRN:50
LIRP|PSA|Pisa||IT|4|Pisa (PI)
LIRQ|FLR|Firenze|Florence Airport, Peretola|IT|4|Firenze (FI)
LIRS|GRS|Grosseto|Grosseto Corrado Baccarini Air Base / Grosseto|IT|2|Grosseto (GR)||LIRJ:68
LIRU||Rome|Rome Urbe|IT|2|||LIRA:19
LIRV||Viterbo||IT|2|||LIRF:72
LIRZ|PEG|Perugia|Perugia San Francesco d'Assisi – Umbria|IT|4|Perugia (PG)
LISB||Sabaudia|Aviosuperficie Sabaudia|IT|1|Sabaudia (LT)||LIRA:63
LIVD||Toblach|Dobbiaco-Toblach Airstrip|IT|1|Toblach (Dobbiaco) (BZ)||LIPB:75
LIVS||San Stino di Livenza|Skydive Venice|IT|1|San Stino di Livenza (VE)||LIPZ:39
LIVV||Cascina Moncucco|Moncucco-Vische|IT|1|Cascina Moncucco (TO)||LIMF:26
LJAJ||Ajdovščina||SI|1|||LIPQ:33
LJBL||Lesce||SI|1|||LJLJ:26
LJBO||Bovec||SI|1|||LIPQ:56
LJCE||Cerklje ob Krki|Cerklje ob Krki Air Base|SI|2|||LDZA:45
LJCL||Celje||SI|1|||LJMB:44
LJDI||Divača||SI|1|||LIPQ:45
LJLJ|LJU|Ljubljana|Ljubljana Jože Pučnik|SI|4|Zgornji Brnik
LJMB|MBX|Maribor|Maribor Edvard Rusjan|SI|3
LJMS||Murska Sobota||SI|1|||LJMB:41
LJNM||Novo Mesto||SI|1|||LJLJ:69
LJPO||Postojna||SI|1|||LJLJ:56
LJPT||Moškanjci|Ptuj|SI|1|||LJMB:24
LJPZ|POW|Sečovlje|Portorož|SI|2|||LIPQ:41
LJSG||Šmartno pri Slovenj Gradcu|Slovenj Gradec|SI|1|||LJMB:44
LJSK||Loče|Slovenske Konjice|SI|1|||LJMB:24
LJSO||Topolšica|Šoštanj|SI|1||LJVE|LJLJ:49
LKBA||Břeclav||CZ|1|||LKTB:43
LKBE||Benešov||CZ|1|||LKPR:49
LKBO||Bohuňovice||CZ|1|||LKMT:59
LKBR||Broumov||CZ|1|||EPWR:71
LKBU||Bubovice||CZ|1|||LKPR:15
LKCB||Cheb||CZ|1|||LKKV:39
LKCE||Česká Lípa||CZ|1|||LKPR:71
LKCH||Otvice|Chomutov|CZ|1|||LKKV:49
LKCM||Medlánky||CZ|1|||LKTB:14
LKCR||Chrudim||CZ|1|||LKPD:9
LKCS|JCL|České Budějovice|České Budějovice South Bohemian|CZ|4
LKCT||Chotěboř||CZ|1|||LKPD:37
LKCV||Chotusice|Čáslav Air Base|CZ|2|||LKPD:27
LKDK||Dvůr Králové nad Labem||CZ|1|||LKPD:45
LKER||Erpužice||CZ|1|||LKKV:45
LKFR||Frýdlant||CZ|1|||LKMT:23
LKHB||Havlíčkův Brod||CZ|1|||LKPD:48
LKHC||Holovousy|Hořice|CZ|1|||LKPD:40
LKHD||Hodkovice nad Mohelkou||CZ|1|||LKPR:85
LKHK||Hradec Králové||CZ|1|||LKPD:28
LKHN||Hranice||CZ|1|||LKMT:34
LKHS||Hluboká nad Vltavou|Hosín|CZ|1|||LKCS:11
LKHV||Hořovice||CZ|1|||LKPR:38
LKJA||Jaroměř||CZ|1|||LKPD:38
LKJC||Jičín||CZ|1|||LKPD:54
LKJH||Jindřichův Hradec||CZ|1|||LKCS:46
LKJI||Jihlava||CZ|1|||LKPD:67
LKKA||Křižanov||CZ|1|||LKTB:48
LKKB||Prague|Prague–Kbely Air Base|CZ|2|||LKPR:20
LKKC||Planá|Kříženec Planá|CZ|1|||LKKV:38
LKKL||Kladno||CZ|1|||LKPR:12
LKKM||Kroměříž||CZ|1|||LKTB:55
LKKO||Kolín||CZ|1|||LKPD:41
LKKR||Krnov||CZ|1|||LKMT:52
LKKT||Klatovy|Klatovy Josef Hubáč|CZ|1|||LKKV:92
LKKU|UHE|Uherské Hradiště|Kunovice|CZ|2|||LKTB:56
LKKV|KLV|Karlovy Vary||CZ|4
LKKY||Svatobořice|Kyjov|CZ|1|||LKTB:37
LKLB||Liberec||CZ|1|||LKPR:92
LKLN||Plzen|Plzeň-Líně|CZ|2|||LKKV:64
LKLT||Letňany||CZ|1|||LKPR:19
LKLU||Luhačovice||CZ|1|||LKMT:73
LKMB||Mladá Boleslav||CZ|1|||LKPR:56
LKMH|HRA|Mnichovo Hradiště||CZ|1|||LKPR:72
LKMI||Mikulovice||CZ|1|||LKMT:89
LKMK||Moravská Třebová||CZ|1|||LKTB:72
LKMO||Most||CZ|1|||LKPR:62
LKMT|OSR|Ostrava|Leoš Janáček Airport Ostrava|CZ|4|Mošnov
LKNA||Sedlec|Náměšť Air Base|CZ|2|||LKTB:41
LKNM||Nové Město nad Metují||CZ|1|||LKPD:47
LKNY||Nymburk||CZ|1|||LKPD:52
LKOL|OLO|Olomouc||CZ|1|||LKTB:61
LKPA||Polička||CZ|1|||LKPD:48
LKPC||Panensky Tynec||CZ|1|||LKPR:33
LKPD|PED|Pardubice||CZ|4
LKPI||Přibyslav||CZ|1|||LKPD:48
LKPJ||Prostějov||CZ|1|||LKTB:46
LKPL||Letkov||CZ|1|||LKKV:66
LKPM||Drásov|Příbram|CZ|1|||LKPR:44
LKPN||Podhořany u Ronova|Podhořany|CZ|1|||LKPD:16
LKPO|PRV|Přerov|Přerov Air Base|CZ|2|||LKMT:59
LKPR|PRG|Prague|Václav Havel Airport Prague|CZ|4
LKPS||Plasy|Plasy Rybnice|CZ|1|||LKKV:46
LKRA||Raná|Rana Loumy|CZ|1|||LKPR:49
LKRK||Rakovnik||CZ|1|||LKPR:41
LKRO||Roudnice nad Labem||CZ|1|||LKPR:34
LKRY||Rokycany||CZ|1|||LKPR:62
LKSA||Staňkov||CZ|1|||LKKV:71
LKSB||Mostkovice|Stichovice Pluml|CZ|1|||LKTB:46
LKSK||Skuteč||CZ|1|||LKPD:28
LKSN||Slaný||CZ|1|||LKPR:18
LKSO||Soběslav||CZ|1|||LKCS:39
LKSR||Prachatice||CZ|1|||LKCS:30
LKST||Strakonice||CZ|1|||LKCS:52
LKSU||Nový Malín|Šumperk|CZ|1|||LKMT:84
LKSZ||Sazená||CZ|1|||LKPR:25
LKTA||Tábor||CZ|1|||LKCS:53
LKTB|BRQ|Brno|Brno-Tuřany|CZ|3
LKTC||Prague|Točná|CZ|1|||LKPR:17
LKTD||Tachov||CZ|1|||LKKV:48
LKTO||Toužim||CZ|1|||LKKV:13
LKUL||Usti Nad Labem||CZ|1|||EDDC:50
LKUO||Ústí nad Orlicí||CZ|1|||LKPD:49
LKVL||Vlašim||CZ|1|||LKPR:61
LKVM||Vysoké Mýto||CZ|1|||LKPD:33
LKVO|VOD|Vodochody||CZ|2|||LKPR:16
LKVP||Velke Porici|Velké Poříčí|CZ|1|||LKPD:60
LKVR||Lánov|Vrchlabí|CZ|1|||LKPD:68
LKVY||Vyskov|Letiště Vyškov|CZ|1|||LKTB:29
LKZA|ZBE|Dolní Benešov|Zábřeh Dolní Benešov|CZ|1|||LKMT:26
LKZB||Zbraslavice||CZ|1|||LKPD:45
LKZD||Žatec|Žatec-Macerka|CZ|1|||LKKV:44
LKZL||Otrokovice|Zlín Otrokovice|CZ|1||LKOT|LKTB:60
LKZM||Žamberk||CZ|1|||LKPD:51
LKZN||Znojmo||CZ|1|||LKTB:59
LLBG|TLV|Tel Aviv|Ben Gurion|IL|4
LLBO||Habonim||IL|1|||LLHA:21
LLBS|BEV|Beersheba||IL|1|Teyman||LLBG:82
LLEK||Rehovot|Tel Nof Air Base|IL|2|||LLBG:20
LLER|ETM|Eilat|Ramon|IL|4
LLES||Ein Shemer||IL|1|||LLHA:41
LLEY|EIY|Sapir|Ein Yahav|IL|1|||LLER:101
LLFK||Katzrin|Fiq|IL|1|||LLHA:63
LLHA|HFA|Haifa|Uri Michaeli Haifa|IL|3
LLHB||Beersheba|Hatzerim Air Base|IL|1|||HEAR:82
LLHS||Hatzor|Hatzor Air Base|IL|1|||LLBG:32
LLHZ||Herzliya||IL|1|||LLBG:19
LLIB|RPN|Rosh Pina||IL|2|||LLHA:53
LLKS|KSW|Kiryat Shmona||IL|1|||OLBA:68
LLKZ||Nitzana|Kzeiot|IL|1|||HEAR:63
LLMG||Afula|Megiddo|IL|1|||LLHA:29
LLMR|MIP|Mitzpe Ramon||IL|1|||HEAR:104
LLMZ|MTZ|Masada|Bar Yehuda|IL|2|||OJAI:72
LLNV|VTM|Beersheba|Nevatim Air Base|IL|2|||LLBG:90
LLOV|VDA|Eilat|Ovda|IL|1|||LLER:25
LLRD||Haifa|Ramat David Air Base|IL|2|||LLHA:21
LLRM||Beersheba|Ramon Air Base|IL|2|||HEAR:86
LLRS||Rishon Lezion||IL|1|||LLBG:13
LLTN||Tnuvot|Tnuvot Ultralight|IL|1|||LLBG:34
LMML|MLA|Valletta|Malta|MT|4
LOAA||Ottenschlag||AT|1|||LOWL:79
LOAB||Dobersberg||AT|1|||LKCS:64
LOAD||Ober-Grafendorf|Völtendorf|AT|1|||LOWW:73
LOAG||Krems an der Donau|Krems/Langenlois|AT|1|||LOWW:79
LOAN||Wiener Neustadt|Wiener Neustadt East|AT|2|||LOWW:38
LOAR||Altlichtenwarth|Altlichtenwarth Gliderfield|AT|1|||LKTB:55
LOAS||Hundsheim|Spitzerberg|AT|1|||LZIB:22
LOAU||Stockerau||AT|1|||LOWW:43
LOAV||Bad Vöslau|Vöslau-Kottingbrunn|AT|1|||LOWW:28
LOGF||Fürstenfeld||AT|1|||LOWG:49
LOGG||Punitz|Punitz-Güssing|AT|1|||LOWG:69
LOGI||Trieben||AT|1|||LOWL:86
LOGK||Kapfenberg||AT|1|||LOWG:53
LOGL||Göriach|Lanzen-Turnau|AT|1|||LOWG:63
LOGM||Mariazell||AT|1|||LOWG:89
LOGO||Niederöblarn||AT|1|||LOWS:83
LOGP||Pinkafeld||AT|1|||LOWG:67
LOGT||Timmersdorf|Leoben/Timmersdorf|AT|1|||LOWG:56
LOGW||Weiz|Weiz-Unterfladnitz|AT|1|||LOWG:26
LOIH|HOH|Hohenems|Hohenems-Dornbirn|AT|1|||LSZR:15
LOIJ||Sankt Johann in Tirol|Sankt Johann|AT|1|||LOWS:51
LOIK||Langkampfen|Kufstein-Langkampfen|AT|1|||LOWI:68
LOIR||Reutte|Reutte-Höfen|AT|1|||LOWI:54
LOKF||Feldkirchen in Kärnten|Feldkirchen|AT|1|||LOWK:21
LOKG||Ferlach|Ferlach-Glainach|AT|1|||LOWK:12
LOKH||Micheldorf|Friesach/Hirt|AT|1|||LOWK:32
LOKL||Lengberg|Lienz-Nikolsdorf|AT|1|||LOWS:111
LOKM||Mayerhofen||AT|1|||LOWK:37
LOKN||Nötsch im Gailtal||AT|1|||LOWK:55
LOKR||Mairist|Sankt Donat / Mairist|AT|1|||LOWK:13
LOKW||Wolfsberg||AT|1|||LOWK:42
LOLC||Scharnstein||AT|1|||LOWL:42
LOLE||Pupping|Eferding|AT|1|||LOWL:19
LOLF||Freistadt||AT|1|||LOWL:35
LOLG||Sankt Georgen am Ybbsfelde|Sankt Georgen-Ybbsfeld|AT|1|||LOWL:58
LOLH||Hofkirchen||AT|1|||LOWL:15
LOLK||Kirchheim im Innkreis|Ried-Kirchheim|AT|1|||LOWS:53
LOLM||Micheldorf||AT|1|||LOWL:41
LOLO||Linz|Linz-East Glider Field|AT|1|||LOWL:13
LOLS||Suben|Schärding-Suben|AT|1|||LOWL:58
LOLT||Seitenstetten|Flugplatz Seitenstetten|AT|1|||LOWL:41
LOLU||Laakirchen|Gmunden-Laakirchen|AT|1|||LOWL:40
LOLW||Wels||AT|1|||LOWL:12
LOSM||Mauterndorf||AT|1|||LOWK:73
LOWG|GRZ|Graz||AT|4|Feldkirchen bei Graz
LOWI|INN|Innsbruck||AT|4
LOWK|KLU|Klagenfurt am Wörthersee|Klagenfurt|AT|4
LOWL|LNZ|Linz|Linz-Hörsching|AT|4
LOWS|SZG|Salzburg||AT|4
LOWW|VIE|Vienna||AT|4
LOWZ||Zell am See||AT|1|||LOWS:58
LOXA||Aigen im Ennstal|Fiala-Fernbrugg Air Base|AT|1|||LOWL:78
LOXN||Wiener Neustadt|Wiener Neustadt West|AT|2|||LOWW:40
LOXT||Tulln an der Donau|Brumowski Air Base|AT|1|||LOWW:41
LOXZ||Zeltweg|Hinterstoisser Air Base|AT|2|||LOWG:58
LPAC||Benavente|Alcochete Military|PT|1|||LPPT:29
LPAR||Vila Franca de Xira|Alverca Air Base|PT|2|||LPPT:15
LPAV||Aveiro|São Jacinto|PT|1|||LPPR:66
LPAZ|SMA|Vila do Porto|Santa Maria|PT|3
LPBG|BGC|Bragança||PT|3
LPBJ|BYJ|Beja|Beja Airport / Airbase|PT|2|||LPPM:118
LPBR||Braga|Braga Municipal|PT|2|||LPPR:43
LPCB||Castelo Branco|Aerodromo de Castelo Branco|PT|2|||LPVZ:105
LPCH||Chaves|Aerodromo de Chaves|PT|1|||LPVR:54
LPCO||Coimbra|Aerodromo Municipal de Coimbra|PT|2|||LPVZ:80
LPCR|CVU|Corvo||PT|2
LPCS|CAT|Cascais||PT|3
LPEV||Évora||PT|2|||LEBZ:101
LPFA||Ferreira do Alentejo|Aérodromo de Ferreira do Alentejo|PT|1|||LPPM:108
LPFC||Ferreira do Alentejo|Aerodromo de Figueira dos Cavaleiros|PT|1|||LPPM:108
LPFL|FLW|Santa Cruz das Flores|Flores|PT|3
LPFR|FAO|Faro|Faro - Gago Coutinho|PT|4
LPGR|GRW|Santa Cruz da Graciosa|Graciosa|PT|3
LPHR|HOR|Horta||PT|3
LPIN|||Espinho|PT|1|||LPPR:31
LPJF||Leiria|Aerodromo de Leiria|PT|1|||LPPT:114
LPLA|TER|Praia da Vitória|Lajes|PT|3
LPLZ||Lousã|Aerodromo da Lousã|PT|1|||LPVZ:71
LPMA|FNC|Funchal|Cristiano Ronaldo|PT|4
LPMF||Idanha-a-Nova|Aerodromo de Monfortinho|PT|1|||LPVZ:118
LPMI||Mirandela||PT|1|||LPVR:47
LPMN||Montemor-o-Novo|Amendoeira|PT|1|||LPPT:75
LPMO||Mora|Morargil|PT|1|||LPPT:89
LPMR|||Monte Real Air Base|PT|2|||LPPT:118
LPMT||Montijo|Montijo Air Base|PT|2|||LPPT:12
LPMU||Mogadouro||PT|1|||LPBG:51
LPOV||Ovar|Ovar Air Base|PT|2|||LPPR:37
LPPD|PDL|Ponta Delgada|João Paulo II|PT|4
LPPI|PIX|Pico Island|Pico|PT|3
LPPM|PRM|Portimão||PT|3
LPPN||Proença-a-Nova|Aérodromo Municipal de Proença-a-Nova|PT|1|||LPVZ:111
LPPR|OPO|Porto|Francisco de Sá Carneiro|PT|4
LPPS|PXO|Vila Baleira|Porto Santo|PT|3
LPPT|LIS|Lisbon|Lisbon Humberto Delgado|PT|4
LPSC||Torres Vedras|Santa Cruz|PT|1|||LPPT:44
LPSE||Seia|Aeródromo de Seia|PT|1|||LPVZ:35
LPSJ|SJZ|Velas|São Jorge|PT|3
LPSO||Ponte de Sor|Aeródromo Municipal de Ponte de Sor|PT|2|||LPPT:105
LPSR||Santarém||PT|1|||LPPT:61
LPST||Sintra|Sintra Air Base|PT|2|||LPCS:12
LPTN||Tancos|Tancos Airbase|PT|2|||LPPT:102
LPVL||Maia|Vilar de Luz|PT|2|||LPPR:14
LPVR|VRL|Vila Real||PT|3
LPVZ|VSE|Viseu|Aerodromo Goncalves Lobato|PT|3|Viseu Airport
LQBI||Bihać|Bihać Golubić|BA|1|||LDZD:89
LQBK|BNX|Banja Luka||BA|4|Mahovljani
LQBZ||Zalužani|Banja Luka Zalužani|BA|1|||LQBK:12
LQCG||Bašigovci|Ciljuge Sport|BA|1|||LQTZ:4
LQGO||Gorice||BA|1|||LQTZ:50
LQJL||Rainci Gornji|Tuzla Jegin Lug Sport|BA|1|||LQTZ:7
LQKR||Kreševo|Kreševo Airstrip|BA|1|||LQSA:22
LQLV||Livno|Livno Brda Bosni|BA|1|||LDSP:55
LQMO|OMO|Mostar||BA|4
LQMP|||Medeno Polje Airstrip|BA|1|||LQBK:90
LQNI||Šabanci|Nisici|BA|1|||LQSA:31
LQPD||Prijedor|Prijedor Urije|BA|1|||LQBK:45
LQPP|||Sport Airfield Popovi|BA|1|||LQTZ:57
LQSA|SJJ|Sarajevo||BA|4
LQTZ|TZL|Tuzla||BA|4|Dubrave Gornje
LQVI||Visoko|Visoko Kenan Jusufbasic|BA|1|||LQSA:29
LRAR|ARW|Arad||RO|3
LRBA||Comana|Grădiștea|RO|1|||LRBS:31
LRBC|BCM|Bacău|Bacău George Enescu|RO|4
LRBM|BAY|Tăuții-Măgherăuș|Maramureș|RO|3
LRBN||Bistrița||RO|1|||LRTM:78
LRBO||Boboc|Boboc Air Base|RO|2|||LROP:99
LRBS|BBU|Bucharest|Bucharest Băneasa Aurel Vlaicu|RO|4
LRBV|GHV|Brașov|Brașov-Ghimbav|RO|4|Brașov (Ghimbav)
LRCB||Șiria|Charlie Bravo Șiria|RO|1|||LRAR:28
LRCD||Cisnădie|Măgura|RO|1|||LRSB:8
LRCJ||Dezmir||RO|1|||LRCL:2
LRCK|CND|Constanța|Mihail Kogălniceanu|RO|4
LRCL|CLJ|Cluj-Napoca|Avram Iancu Cluj|RO|4
LRCN||Clinceni||RO|1|||LRBS:21
LRCS|CSB|Caransebeş||RO|2|||LRTR:83
LRCT||Câmpia Turzii|Câmpia Turzii Air Base|RO|2|||LRCL:35
LRCV|CRA|Craiova||RO|4
LRCW||Craiova|Balta Verde|RO|1|||LRCV:9
LRDV||Deva|Săulești|RO|1|||LRSB:87
LRFL||Vatra Dornei|Floreni|RO|1|||LRSV:93
LRFT||Borcea|Feteşti Borcea Air Base|RO|2|||LRCK:61
LRHR||Remetea|Remetea Airifeld|RO|1|||LRTM:86
LRIA|IAS|Iaşi||RO|4
LRIC||Ianca||RO|1|||LRCK:122
LRIS|||Iaşi Sud|RO|1|||LRIA:3
LRMM||Baia Mare|Aerodrom Baia Mare|RO|1|||LRBM:1
LRMS||Târgu Mureș|Elie Carafoli Sport|RO|1|||LRTM:12
LROD|OMR|Oradea||RO|4
LROP|OTP|Bucharest|Bucharest Henri Coandă|RO|4|Otopeni
LRPH||Tăriceni|Şirna Tăriceni|RO|1|||LROP:25
LRPT||Pitești|Geamăna|RO|1|||LRCV:97
LRPW||Strejnicu|Ploiești-Strejnicu|RO|1||LRPV|LROP:41
LRSB|SBZ|Sibiu||RO|4
LRSM|SUJ|Satu Mare||RO|3
LRSP||Sânpetru|Sânpetru-Brașov|RO|1|||LRBV:9
LRSV|SCV|Suceava|Suceava Ștefan cel Mare|RO|4
LRTC|TCE|Mihail Kogălniceanu|Tulcea Danube Delta|RO|2|||LRCK:80
LRTM|TGM|Recea|Târgu Mureş Transilvania|RO|3
LRTR|TSR|Timişoara|Timișoara Traian Vuia|RO|4
LRTZ||Tuzla||RO|1|||LRCK:43
LRZN||Roznov|Zanesti|RO|1|||LRBC:45
LSGB||Bex||CH|1|||LSGG:68
LSGC||La Chaux-de-Fonds|Les Eplatures|CH|2|||LSZB:57
LSGE||Ecuvillens||CH|1|||LSZB:37
LSGG|GVA|Geneva||CH|4
LSGK||Saanen||CH|1|||LSZB:51
LSGL||Lausanne|Lausanne la Blécherette|CH|1|||LSGG:52
LSGN||Boudry|Neuchâtel|CH|1|||LSZB:48
LSGP||La Côte||CH|1|||LSGG:22
LSGR||Reichenbach im Kandertal|Reichenbach Air Base|CH|1|||LSZB:36
LSGS|SIR|Sion||CH|2||LSMS|LSZB:78
LSGT||Epagny|La Gruyère|CH|1|||LSZB:47
LSGY||Yverdon-les-Bains||CH|1|||LSZB:69
LSMA||Alpnach|Alpnach Air Base|CH|2|||LSZB:60
LSMD||Zurich|Dübendorf Air Base|CH|2|||LSZH:10
LSME|EML|Emmen|Emmen Air Base|CH|2|||LSZH:45
LSMM||Meiringen|Meiringen Air Base|CH|1|||LSZB:50
LSMP|VIP|Payerne|Payerne Air Base|CH|2|||LSZB:45
LSPA||Amlikon||CH|1|||EDNY:36
LSPD||Dittingen||CH|1|||LFSB:18
LSPF||Neunkirch|Schmerlat|CH|1|||LSZH:26
LSPG||Sarnen|Kägiswil|CH|1|||LSZB:57
LSPH||Winterthur||CH|1|||LSZH:18
LSPL||Bleienbach|Langenthal|CH|1|||LSZB:35
LSPM||Quinto|Ambri|CH|1|||LSZA:59
LSPN||Triengen||CH|1|||LSZH:44
LSPO||Olten||CH|1|||LFSB:40
LSPR||Lodrino|Lodrino Air Base|CH|1||LSML|LSZA:33
LSPU||Münster||CH|1|||LSZA:73
LSPV||Wangen|Wangen-Lachen|CH|1|||LSZH:37
LSTA||Raron||CH|1||LSMN|LSZB:72
LSTB||Sugiez|Bellechasse|CH|1|||LSZB:29
LSTO||Môtiers||CH|1|||LSZB:67
LSTR||Montricher||CH|1|||LSGG:45
LSTS||Sankt Stephan||CH|1|||LSZB:47
LSTZ||Zweisimmen||CH|1|||LSZB:41
LSVD||Plateau nördlich Planurahütte|Clariden-Hüfifirn Mountain Landing Site|CH|1|||LSZH:75
LSVP||Firnplateau|Petersgrat Mountain Landing Site|CH|1|||LSZB:55
LSVV||Sattel|Vorabgletscher Mountain Landing Site|CH|1|||LSZR:74
LSYI||Oberer Firnrand|Limmerenfirn Mountain Landing Site|CH|1|||LSZH:79
LSYK||West of Mutthorn hut|Kanderfirn Mountain Landing Site|CH|1|||LSZB:54
LSYQ||Riddes|Croix de Coeur Altiport|CH|1|||LSGG:88
LSYR||Grat südlich Gipfel|Rosa Blanche Mountain Landing Site|CH|1|||LSZB:95
LSYX||Firnrand|Glacier du Trient Mountain Landing Site|CH|1|||LFLP:73
LSYZ||Savièse|Altiport du Glacier de Tsanfleuron|CH|1|||LSZB:69
LSZA|LUG|Lugano||CH|3|Agno
LSZB|BRN|Bern||CH|3
LSZC|BXO|Buochs||CH|1||LSMU|LSZH:55
LSZE||Bad Ragaz||CH|1|||LSZR:53
LSZF||Lupfig|Birrfeld|CH|1|||LSZH:24
LSZG||Grenchen||CH|2|||LSZB:31
LSZH|ZRH|Zurich|Zürich|CH|4
LSZI||Schupfart|Fricktal-Schupfart|CH|1|||LFSB:34
LSZJ||Courtelary||CH|1|||LSZB:43
LSZK||Fehraltorf|Speck-Fehraltorf|CH|1|||LSZH:18
LSZL||Locarno||CH|1|||LSZA:18
LSZM||Mollis||CH|1||LSMF|LSZH:57
LSZN||Hausen am Albis||CH|1|||LSZH:25
LSZO||Neudorf|Luzern-Beromünster|CH|1|||LSZH:40
LSZP||Kappelen|Biel-Kappelen|CH|1|||LSZB:25
LSZQ||Bressaucourt||CH|1|||LFSB:44
LSZR|ACH|St. Gallen|Sankt Gallen Altenrhein|CH|3
LSZS|SMV|Samedan|Engadin|CH|2|||LSZA:95
LSZT||Lommis||CH|1|||LSZH:35
LSZU||Buttwil||CH|1|||LSZH:28
LSZV||Sitterdorf||CH|1|||LSZR:23
LSZW||Thun||CH|1|||LSZB:19
LSZX||Schänis||CH|1|||LSZH:49
LTAB||Ankara|Güvercinlik|TR|1|||LTAC:30
LTAC|ESB|Ankara|Esenboğa|TR|4
LTAD|ANK|Ankara|Etimesgut Air Base|TR|2|||LTAC:33
LTAE||Ankara|Akıncı Air Base|TR|2|||LTAC:37
LTAF|ADA|Seyhan|Adana Şakirpaşa|TR|1|||LTDB:21
LTAG|UAB|Sarıçam|İncirlik Air Base|TR|2|||LTDB:34
LTAH|AFY|Afyonkarahisar|Afyon Air Base|TR|2|||LTBZ:59
LTAI|AYT|Antalya||TR|4
LTAJ|GZT|Gaziantep|Gaziantep Oğuzeli|TR|4
LTAL|KFS|Kastamonu||TR|3
LTAN|KYA|Konya||TR|4
LTAO||Malatya|Malatya Tulga|TR|1|||LTAT:17
LTAP|MZH|Amasya|Amasya Merzifon|TR|3
LTAR|VAS|Sivas|Sivas Nuri Demirağ|TR|3
LTAS|ONQ|Zonguldak|Zonguldak Çaycuma|TR|3
LTAT|MLX|Malatya|Malatya Erhaç|TR|3
LTAU|ASR|Kayseri|Kayseri Erkilet|TR|4
LTAV||Sivrihisar||TR|2|||LTBY:83
LTAW|TJK|Tokat||TR|3
LTAY|DNZ|Denizli|Çardak|TR|3
LTAZ|NAV|Nevşehir|Nevşehir Kapadokya|TR|4
LTBA|ISL|Istanbul|İstanbul Atatürk|TR|3|Istanbul(Bakırköy)||LTFM:35
LTBD|CII|Aydın|Aydın Çıldır|TR|1|||LTFE:66
LTBE||Bursa|Bursa Yunuseli|TR|1|||LTBR:47
LTBF|BZI|Balıkesir||TR|3
LTBG|BDM|Bandırma||TR|2|||LTBF:78
LTBH|CKZ|Çanakkale||TR|3
LTBI|ESK|Eskişehir|Eskişehir Air Base|TR|2|||LTBY:6
LTBJ|ADB|Izmir|Adnan Menderes|TR|4|Gaziemir
LTBK||Gaziemir|Gaziemir Air Base|TR|1|||LTBJ:3
LTBL|IGL|Çiğli|Çiğli Airbase|TR|2|||LTBJ:28
LTBM||Isparta||TR|1|||LTFC:21
LTBN||Kütahya||TR|2|||LTBZ:36
LTBO|USQ|Uşak||TR|2|||LTBZ:74
LTBP||Çiftlikköy|Yalova Air Base|TR|1|||LTFJ:24
LTBQ|KCO|Kartepe|Cengiz Topel|TR|2|||LTFJ:68
LTBR|YEI|Yenişehir|Bursa Yenişehir|TR|3
LTBS|DLM|Dalaman||TR|4
LTBT||Akhisar|Akhisar Airport / Akhisar Air Base|TR|2|||LTBJ:82
LTBU|TEQ|Çorlu|Tekirdağ Çorlu|TR|3
LTBV|BXN|Bodrum|Bodrum-Imsık|TR|1|||LTFE:12
LTBW||Çatalca|İstanbul Hezarfen|TR|1|||LTFM:25
LTBX||Ümraniye|İstanbul Samandıra Army Air Base|TR|2|Ümraniye, Istanbul||LTFJ:13
LTBY|AOE|Eskişehir|Hasan Polatkan|TR|4
LTBZ|KZR|Altıntaş|Zafer|TR|3
LTCA|EZS|Elazığ||TR|3
LTCB|OGU|Ordu|Ordu–Giresun|TR|3
LTCC|DIY|Diyarbakır||TR|3
LTCD|ERC|Erzincan||TR|3
LTCE|ERZ|Erzurum||TR|3
LTCF|KSY|Kars||TR|3
LTCG|TZX|Trabzon||TR|3
LTCI|VAN|Van|Van Ferit Melen|TR|3
LTCJ|BAL|Batman||TR|3
LTCK|MSR|Muş||TR|3
LTCL|SXZ|Siirt||TR|2|||LTCJ:64
LTCM|NOP|Sinop||TR|3
LTCN|KCM|Kahramanmaraş||TR|3
LTCO|AJI|Ağrı||TR|3
LTCP|ADF|Adıyaman||TR|3
LTCR|MQM|Mardin||TR|3
LTCS|GNY|Şanlıurfa|Şanlıurfa GAP|TR|4
LTCT|IGD|Iğdır||TR|3
LTCU|BGG|Bingöl||TR|3
LTCV|NKT|Şırnak|Şırnak Şerafettin Elçi|TR|3
LTCW|YKO|Hakkari|Hakkari Yüksekova|TR|3
LTDA|HTY|Antakya|Hatay|TR|3
LTDB|COV|Tarsus|Çukurova|TR|4
LTFA||Çiğli|Kaklıç|TR|1|||LTBJ:30
LTFB|IZM|Selçuk|Selçuk Efes|TR|1|||LTBJ:41
LTFC|ISE|Isparta|Süleyman Demirel|TR|3
LTFD|EDO|Edremit|Balıkesir Koca Seyit|TR|4
LTFE|BJV|Bodrum|Milas Bodrum|TR|4
LTFG|GZP|Gazipaşa|Gazipaşa-Alanya|TR|3
LTFH|SZF|Samsun|Samsun-Çarşamba|TR|3
LTFJ|SAW|Istanbul|Istanbul Sabiha Gökçen|TR|4|Pendik
LTFK|GKD|Gökçeada||TR|1|||LTBH:47
LTFL||Keşan|Keşan Air Base|TR|2|||LGAL:55
LTFM|IST|Istanbul|İstanbul|TR|4
LTFN|||Isparta/Kilic|TR|1|||LTFC:1
LTFO|RZV|Rize|Rize–Artvin|TR|3
LTON||İstiklal|Samsun / Ondokuz Mayis|TR|1|||LTFH:47
LTXE||Antalya|Karain|TR|1|||LTAI:26
LUBL|BZY|Bălți|Bălți-Leadoveni|MD|2|||LRIA:74
LUBM||Mărculeşti|Mărculești Air Base|MD|2|||LRIA:88
LUCH||Cahul||MD|2|||LRBC:129
LUKE|||Vinaria Et Cetera Airstrip|MD|1|||LUKK:93
LUKH||Horeshti||MD|1|||LUKK:10
LUKK|RMO|Chişinău||MD|4
LUKV|||Vadul lui Voda|MD|1|||LUKK:20
LUTR||Tiraspol||MD|2|||LUKK:50
LWOH|OHD|Ohrid|Ohrid St. Paul the Apostle|MK|4
LWSK|SKP|Skopje||MK|4|Ilinden
LWSN||Brazda|Stenkovec Brazda|MK|1|Brazda, Čučer-Sandevo||LWSK:22
LWST||Štip|Suchevo Recreational|MK|1|||LWSK:49
LXGB|GIB|Gibraltar||GI|4
LYBC||Bela Crkva||RS|1|||LYBE:84
LYBE|BEG|Belgrade|Belgrade Nikola Tesla|RS|4
LYBJ||Palilula|Lisičji Jarak|RS|1|||LYBE:17
LYBO||Bor||RS|1|||LYNI:79
LYBR|IVG|Berane||ME|1|||LYPG:73
LYBT|BJY|Zemun|Batajnica Air Base|RS|2|||LYBE:14
LYCA||Čačak|Čačak-Preljina|RS|1|||LYKV:15
LYJA||Jagodina|Jagodina-Barutana|RS|1|||LYKV:54
LYKA||Kraljevo|Kraljevo Brege|RS|1|||LYKV:14
LYKG||Lužnice|Kragujevac / Mind|RS|1|||LYKV:41
LYKI||Kikinda||RS|1|||LRTR:72
LYKS||Kruševac|Rosulje|RS|1|||LYNI:46
LYKT||Kostolac||RS|1|||LYBE:68
LYKV|KVO|Kraljevo|Morava|RS|3
LYLE||Leskovac|Leskovac / Mira Sport|RS|1|||LYNI:36
LYNI|INI|Niš|Niš Constantine the Great|RS|4
LYNK||Nikšić||ME|1|||LYTV:44
LYNS||Čenej|Novi Sad / Čenej|RS|1|||LYBE:73
LYPA||Pančevo||RS|1|||LYBE:28
LYPG|TGD|Podgorica|Podgorica Airport / Podgorica Golubovci Airbase|ME|4
LYPJ||Pranjani|Pranjani / Galovica Polje|RS|1|||LYKV:41
LYPN||Paraćin|Paracín / Davidovac|RS|1|||LYNI:66
LYPO||Podgorica|Ćemovsko Polje / Špiro Mugoša|ME|1|||LYPG:8
LYSD||Smederevo||RS|1|||LYBE:55
LYSM||Veliki Radinci|Sremska Mitrovica / Veliki Radinci|RS|1|||LYBE:57
LYSP||Smederevska Palanka|Smederevska Palanka / Rudine|RS|1|||LYKV:66
LYSU||Bikovo|Subotica / Bikovo Sport|RS|1|||LDOS:93
LYTR||Trstenik||RS|1|||LYKV:42
LYTV|TIV|Tivat||ME|3
LYUZ|UZC|Stapari|Ponikve|RS|2|||LYKV:72
LYVA||Divci|Valjevo Divci|RS|1|Divci, Valjevo||LYBE:62
LYVR||Vršac||RS|1|||LRTR:74
LYZP||Zemun Polje|Zemun Polje 13 May|RS|1|||LYBE:6
LYZR||Zrenjanin|Ečka|RS|1|||LYBE:59
LZBD||Bidovce||SK|1|||LZKZ:18
LZDB||Dubnica nad Váhom|Slávnica-Dubnica nad Váhom|SK|1|||LKMT:78
LZDN||Zvolen|Dobra Niva|SK|1|||LZSL:17
LZDV||Dubová|Dubová Airstrip|SK|1|||LZIB:22
LZHL||Holič||SK|1|||LKTB:50
LZHR|||Hrabušice|SK|1|||LZTT:16
LZIB|BTS|Bratislava|M. R. Štefánik|SK|4
LZJS||Dúbrava|Jasná|SK|1|||LZSL:53
LZKA||Komoča||SK|1|||LZIB:65
LZKC||Kamenica nad Cirochou||SK|1|||LZKZ:63
LZKV||Kvetoslavov||SK|1||LSKV|LZIB:17
LZKZ|KSC|Košice||SK|3
LZLU|LUE|Lučenec||SK|1|||LZSL:55
LZMA||Martin||SK|1|||LZSL:49
LZMC||Kuchyňa|Malacky/Kuchyňa Air Base|SK|2|||LZIB:27
LZNI||Nitra||SK|1|||LZIB:69
LZNZ||Nové Zámky||SK|1|||LZIB:76
LZOC||Očová||SK|1|||LZSL:11
LZPE||Prievidza||SK|1|||LZSL:43
LZPP|PZY|Piešťany||SK|2|||LZIB:68
LZPT||Partizánske|Male Bielice-Partizánske|SK|1|||LZSL:59
LZPW|POV|Prešov|Prešov Air Base|SK|1|||LZKZ:41
LZRU||Ružomberok||SK|1|||LZSL:53
LZRY||Ražňany||SK|1|||LZKZ:47
LZSE||Hlboké|Senica|SK|1|||LZIB:55
LZSK||Svidník||SK|1|||LZKZ:78
LZSL|SLD|Sliač||SK|3
LZSV||Spišská Nová Ves||SK|1|||LZTT:26
LZSY||Šurany||SK|1|||LZIB:68
LZTN||Trenčín||SK|1|||LZSL:87
LZTR||Boleráz|Trnava|SK|1|||LZIB:39
LZTT|TAT|Poprad|Poprad-Tatry|SK|3
LZZI|ILZ|Dolný Hričov|Žilina-Dolný Hričov|SK|2|||LKMT:63
MBAC||Big Ambergris Cay|Harold Charles|TC|1|||MBSC:26
MBGT|GDT|Cockburn Town|JAGS McCartney|TC|3
MBMC|MDS|Middle Caicos||TC|1|||MBNC:18
MBNC|NCA|North Caicos||TC|3
MBPI|PIC|Pine Cay||TC|1|||MBNC:16
MBPV|PLS|Providenciales||TC|4
MBSC|XSC|South Caicos||TC|3
MBSY|SLX|Salt Cay||TC|2
MDAB||Arroyo Barril||DO|1|||MDCY:33
MDAD||Azua||DO|1|||MDBH:45
MDAN||Cotui Angelina||DO|1|||MDST:50
MDBA||Consuelo|Consuelo Batey Anita|DO|1|||MDSD:41
MDBC||La Romana|La Romana Batey Cacata|DO|1|||MDLR:3
MDBE||La Romana|La Romana Batey Lechuga|DO|1|||MDLR:21
MDBG||Higuey|Baigua|DO|1|||MDLR:27
MDBH|BRX|Barahona|Maria Montez|DO|3
MDBL||Boca Chica||DO|1|||MDSD:8
MDBM||San Pedro de Macoris||DO|1|||MDLR:39
MDCR|CBJ|Cabo Rojo||DO|2|||MDBH:66
MDCY|AZS|Samana|Samaná El Catey|DO|3
MDCZ|COZ|Costanza|Constanza - Expedición 14 de Junio National|DO|1|||MDST:57
MDDJ||Dajabon||DO|1|||MTCH:57
MDER||La Vega|El Ranchito|DO|1|||MDST:35
MDES||Esperanza|Peñuela / Esperanza Field|DO|1|||MDST:42
MDHN||Barahona|Juancho Enriquillo|DO|1|||MDBH:45
MDJB|JBQ|La Isabela||DO|3||MDLI
MDLL|||Los Llanos de Sabanatosa|DO|1|||MDSD:24
MDLM||San Cristobal|Los Montones|DO|1|||MDJB:13
MDLR|LRM|La Romana|Casa De Campo|DO|4
MDMA||La Romana|Magdalena Cuya|DO|1|||MDLR:13
MDMC||Monte Cristi||DO|1|||MTCH:60
MDPC|PUJ|Punta Cana||DO|4
MDPM||Monte Cristi|Piloto|DO|1|||MDST:67
MDPP|POP|Puerto Plata|Gregorio Luperon|DO|3
MDSA||San Juan de la Maguana||DO|1|||MDBH:65
MDSD|SDQ|Santo Domingo|Las Américas|DO|4
MDSI||San Isidro|San Isidro Air Base|DO|2|||MDSD:13
MDSP||San Pedro de Macorís|Cueva Las Maravillas|DO|1|||MDLR:27
MDST|STI|Santiago|Cibao|DO|4
MDWO||Monte Cristi|Walterio|DO|1|||MTCH:61
MGBN||Morales|Bananera|GT|1|||MGPB:39
MGCA||Canillá|Canilla|GT|1|||MGHT:71
MGCB|CBV|Coban||GT|2|||MGGT:99
MGCP||Champerico||GT|1|||MGRT:32
MGCQ|CIQ|Chiquimula||GT|1|||MGGT:112
MGCR|CMM|Carmelita||GT|1|||MGMM:64
MGCS||Chisec||GT|1|||MGMM:130
MGCT|CTF|Coatepeque||GT|1|||MGRT:28
MGDL|DON|Dos Lagunas||GT|1|||MGMM:80
MGES||Esquipulas||GT|1|||MSSS:99
MGFB||El Achiotal|Fray Bartolome|GT|1|||MZPG:116
MGGT|GUA|Guatemala City|La Aurora|GT|4
MGHH||Iztapa|Iztapa Aeroclub|GT|1|||MGGT:76
MGHT|HUG|Huehuetenango||GT|2
MGJU||Jutiapa||GT|1|||MGGT:71
MGLL||La Libertad||GT|1|||MGMM:34
MGML||San Marcos|Malacatán|GT|1|||MMTP:33
MGMM|FRS|San Benito|Mundo Maya|GT|3||MGTK
MGPB|PBR|Puerto Barrios||GT|3
MGPC|PCG|Paso Caballos||GT|1|||MGMM:57
MGPG|PKJ|Playa Grande||GT|1|||MGHT:111
MGPP|PON|Poptún||GT|1|||MZPG:69
MGQC|AQB|Santa Cruz del Quiché|Quiché|GT|1|||MGQZ:41
MGQZ|AAZ|Quezaltenango||GT|2
MGRB|RUV|Rubelsanto||GT|2|||MGMM:120
MGRD|LCF|Rio Dulce|Las Vegas|GT|1|||MGPB:41
MGRF||Monterrico||GT|1|||MGGT:77
MGRT|RER|Retalhuleu||GT|3
MGSJ|GSJ|Puerto San José|San José|GT|2|||MGGT:79
MGSM||San Marcos||GT|1|||MGQZ:34
MGST|||Santiago|GT|1|||MGQZ:40
MGUX|UAX|Uaxactun||GT|1|||MGMM:59
MGZA||Zacapa||GT|1|||MGGT:114
MHAC||Acensa||HN|1|||MHTG:92
MHAG||Buena Vista|Sur Agropecuaria|HN|1|||MHTG:91
MHAH|AHS|Ahuas||HN|1|||MHPL:66
MHAL|||El Alto|HN|1|||MHTG:50
MHAN||San Luis||HN|1|||MHPR:47
MHAP||Apala||HN|1|||MHTG:89
MHAR||Archaga||HN|1|||MHTG:25
MHAU||Tasajeras|Hacienda Ulua|HN|1|||MHTG:101
MHAY||Araslaya||HN|1|||MHPL:97
MHAZ||Cacao|Aserradero Azacualpa|HN|1|||MHTG:128
MHBA||Barbareta Island|Barbareta|HN|1|||MHNJ:25
MHBE||San Bernardo||HN|1|||MHTG:107
MHBL|BHG|Brus Laguna||HN|1|||MHPL:99
MHCA||Catacamas||HN|1|||MHLC:137
MHCB||Cocobila||HN|1|||MHPL:125
MHCG|GAC|Gracias|Celaque Gracias|HN|1||MHGS|MHPR:107
MHCI||Chiquerito||HN|1|||MHNJ:116
MHCM||Choloma||HN|1|||MHLM:81
MHCO|||Coco|HN|1|||MHPL:49
MHCQ||Danli|Ministerios Cristo Te Quiere|HN|1|||MHTG:61
MHCR|LUI|La Unión|Carta|HN|1|||MHLC:81
MHCS|CYL|Coyoles||HN|1|||MHLC:38
MHCU|CDD|Cauquira||HN|1|||MHPL:21
MHDU||Mocorón|Durzona|HN|1|||MHPL:56
MHEA|OAN|Olanchito|El Arrayán|HN|1|||MHLC:40
MHEC|||El Cubo|HN|1|||MHTG:47
MHEI||El Guanacaste|La America|HN|1|||MHLM:26
MHEL||El Paraiso|Barrio El Aterrizaje|HN|1|||MHTG:74
MHEN||La Canoa|Aserradero El Encino|HN|1|||MHTG:74
MHEZ||Lérida|La Esperanza|HN|1|||MHLC:78
MHFA||La Lima|Finca San Antonio|HN|1|||MHTG:99
MHFC||Fort Morgan Cay||HN|1|||MHRO:27
MHFN||San Fernando||HN|1|||MHTG:29
MHGA||Chumbagua||HN|1|||MGPB:55
MHGB||Esquias|Guayabillas|HN|1|||MHPR:48
MHGC||Catacamas|Grupo Carnol|HN|1|||MHLC:146
MHGE|CAA|El Aguacate||HN|1|||MHLC:150
MHGR||Donel|Sangrelaya|HN|1|||MHNJ:103
MHGU|EDQ|Erandique||HN|1|||MHPR:89
MHGY||El Zapato|Guayape|HN|1|||MHTG:89
MHHE||Punuare|La Herradura|HN|1|||MHLC:143
MHHG||La Lima|Hacienda Galeras|HN|1|||MHTG:101
MHHO||Horcones|Agua Caliente|HN|1|||MHLC:35
MHIC||Del Cisne Island|Islas Del Cisne|HN|1|||MHNJ:236
MHIN||Minas de Oro||HN|1|||MHPR:54
MHIR|IRN|Iriona||HN|1|||MHNJ:100
MHJE||Rio Plátano|Nueva Jerusalen|HN|1|||MHPL:122
MHJI||Jicalapa||HN|1|||MHLC:119
MHJO|||La Joya|HN|1|||MHTG:89
MHJQ||Caleras/El Triunfo|Joya Del Quebracho|HN|1|||MHPR:87
MHJU|JUT|Jutigalpa||HN|1|||MHTG:126
MHLA||Candelaria|La Alondra|HN|1|||MSSS:78
MHLC|LCE|La Ceiba|Golosón|HN|3
MHLE|LEZ|La Esperanza||HN|1|||MHPR:61
MHLF|||Flefil|HN|1|||MHTG:42
MHLG||Monjarás|La Grecia|HN|1|||MHTG:95
MHLI|||Talanguita|HN|1|||MHTG:48
MHLJ||Coyoles|Las Lajas|HN|1|||MHLC:99
MHLM|SAP|San Pedro Sula|Ramón Villeda Morales|HN|4
MHLN|LMH|Limón|Limon|HN|1|||MHNJ:82
MHLP||Mapulaca||HN|1|||MSSS:65
MHLS||Laguna Seca||HN|1|||MHTG:140
MHLT||Moroceli|Llanos Del Tigre|HN|1|||MHTG:41
MHLU||San Luis Pajón|Luz y Vida|HN|1|||MHLM:66
MHLZ||el agua|La Estanzuela|HN|1|||MGPB:83
MHML||Monte Líbano|Monte Libano|HN|1|||MHTG:98
MHMN||Monica||HN|1|||MHLC:27
MHMO||San Marcos|San Marcos De Ocotepeque|HN|1|||MSSS:81
MHMP||Agua Blanca Sur|Marcos Perez|HN|1|||MHLM:19
MHMS||Siksatara|Las Marias|HN|1|||MHPL:123
MHMT||Manto||HN|1|||MHLC:105
MHNB||Apala|Noveno Batallón|HN|1|||MHTG:86
MHNC||Choluteca||HN|1|||MHTG:83
MHNJ|GJA|Guanaja|La Laguna|HN|3
MHNS||Marcala|Los Llanos|HN|1|||MHPR:47
MHNV||Nueva Ocotepeque||HN|1|||MSSS:81
MHOR||Mocorón|Mocoron|HN|1|||MHPL:59
MHOT||Copón|Ocotales|HN|1|||MHNJ:115
MHPA||Barra del Patuca||HN|1|||MHPL:82
MHPC|PCH|Palacios||HN|1|||MHNJ:117
MHPI||Buena Vista|Agropecuaria Piedra De Agua Azul|HN|1|||MHTG:86
MHPL|PEU|Puerto Lempira||HN|2
MHPR|XPL|Palmerola||HN|4||MHSC
MHPS||El Encinal|Desvio Potrerillos|HN|1|||MHTG:129
MHPV||Manga|El Porvenir|HN|1|||MHLC:66
MHRA|||Rapaco II|HN|1|||MHTG:33
MHRC|RUY|Copán Ruinas|Rioamarillo|HN|1||MHRU|MGPB:101
MHRD||Rus Rus|Rus Rus II|HN|1|||MHPL:82
MHRH|||Regional Hamer|HN|1|||MHLC:74
MHRJ||Apala|Rancho Jamastran|HN|1|||MHTG:87
MHRO|RTB|Roatán|Juan Manuel Gálvez|HN|4|Coxen Hole
MHRR||Rus Rus|Rus Rus I|HN|1|||MHPL:94
MHRY||Raya||HN|1|||MHPL:56
MHSI||Sico||HN|1|||MHNJ:110
MHSJ||Oropoli|San Jose|HN|1|||MHTG:51
MHSL||El Hato|San Lorenzo|HN|1|||MHTG:74
MHSN||Sinaloa||HN|1|||MHNJ:84
MHSX|||Sixatigni|HN|1|||MHPL:64
MHTA||Tamara||HN|1|||MHTG:20
MHTB||Tuntuntara|La Katabila|HN|1|||MHPL:14
MHTE|TEA|Tela||HN|2|||MHLM:60
MHTG|TGU|Tegucigalpa|Toncontín|HN|3
MHTI||Tipimunatara|Tipimuratara|HN|1|||MHPL:30
MHTJ|TJI|Trujillo||HN|2|||MHNJ:58
MHTO|TCF|Tocoa||HN|1|||MHNJ:88
MHUC||Auca||HN|1|||MHPL:37
MHUH||Uhi||HN|1|||MHPL:28
MHUL|SCD|Sulaco||HN|1|||MHPR:70
MHUT|UII|Utila Island|Utila|HN|2
MHUY||Cucuyagua||HN|1|||MSSS:106
MHVE||Coyolillo|Villa Hermosa|HN|1|||MSSS:68
MHWA||Wampusirpi|Wampusirpi I|HN|1|||MHPL:90
MHWD||Wampusirpi|Wampusirpi II|HN|1|||MHPL:88
MHWP||Waplaya||HN|1|||MHPL:31
MHWR||Warunta||HN|1|||MHPL:50
MHWS||Wasma||HN|1|||MHPL:72
MHWW||Wawina||HN|1|||MHPL:76
MHYO||El Caulote|Yodeco|HN|1|||MHLC:66
MHYR|ORO|Yoro||HN|1|||MHLC:75
MHYX||Puerto Lempira|Yaxu|HN|1|||MHPL:5
MHZA||Azacualpa||HN|1|||MHPR:84
MKBS|OCJ|Boscobel|Ian Fleming|JM|3
MKJP|KIN|Kingston|Norman Manley|JM|4
MKJS|MBJ|Montego Bay|Sangster|JM|4
MKKJ|POT|Ken Jones||JM|2|||MKTP:38
MKNG|NEG|Negril||JM|1|||MKJS:48
MKTP|KTP|Tinson Pen||JM|3
MLLJ||Guanacaste|La Javilla|CR|1|||MRNS:43
MMAA|ACA|Acapulco|General Juan N. Álvarez|MX|4
MMAG|AZG|Apatzingán|Apatzingán - Pablo L. Sidar|MX|1|||MMPN:50
MMAL||Agualeguas|Agualeguas National|MX|1|||MMMY:84
MMAN|NTR|Monterrey|Del Norte|MX|2|||MMMY:16
MMAS|AGU|Aguascalientes||MX|4
MMBT|HUX|Huatulco|Bahías de Huatulco|MX|4
MMCA|CNA|Cananea|Cananea National|MX|1|||KTUS:141
MMCB|CVJ|Temixco|General Mariano Matamoros|MX|2|||MMTO:64
MMCC|ACN|Ciudad Acuña||MX|2|||MMPG:96
MMCD||Cedros Island|Isla Cedros|MX|2
MMCE|CME|Ciudad del Carmen||MX|3
MMCG|NCG|Nuevo Casas Grandes|Aeropuerto Municipal de Nuevo Casas Grandes|MX|1|||MMCS:195
MMCH||Chilpancingo|Chilpancingo National|MX|1|||MMAA:94
MMCL|CUL|Culiacán|Bachigualato Federal|MX|4
MMCM|CTM|Chetumal||MX|3
MMCN|CEN|Ciudad Obregón||MX|3
MMCO|CJT|Comitán|San Antonio Copalar|MX|1|||MGHT:112
MMCP|CPE|Campeche|Ingeniero Alberto Acuña Ongay|MX|3
MMCS|CJS|Ciudad Juárez|Abraham González|MX|4
MMCT|CZA|Tinúm|Chichén Itzá|MX|1|||MMTL:97
MMCU|CUU|Chihuahua|General Roberto Fierro Villalobos|MX|4
MMCV|CVM|Ciudad Victoria|General Pedro Jose Mendez|MX|3
MMCY|CYW|Celaya|Captain Rogelio Castillo National|MX|2|||MMQT:73
MMCZ|CZM|Cozumel||MX|4
MMDA|CUA|Comondú|Ciudad Constitución National|MX|2
MMDM|MMC|Ciudad Mante|Ciudad Mante Los Huastecas National|MX|1|||MMCV:107
MMDO|DGO|Durango|General Guadalupe Victoria|MX|3
MMEP|TPQ|Tepic|Amado Nervo National|MX|3
MMES|ESE|Ensenada|Ensenada International Airport / El Ciprés Air Base|MX|2|||MMTJ:90
MMGA||Bocoyna|Creel International Airport / Barrancas del Cobre Regional|MX|2|||MMCU:198
MMGD||Ensenada|Aeródromo Isla Guadalupe|MX|1|Ensenada (Isla Guadalupe)
MMGL|GDL|Guadalajara||MX|4
MMGM|GYM|Guaymas|General José María Yáñez|MX|3
MMGR|GUB|San Quintín|Guerrero Negro|MX|2
MMGT||Silao|Aeródromo del Rancho Medio Sitio|MX|1|||MMLO:17
MMHC|TCN|Tehuacán|Tehuacán National|MX|1|||MMPB:124
MMHO|HMO|Hermosillo|General Ignacio L. Pesqueira|MX|4
MMIA|CLQ|Colima|Licenciado Miguel de la Madrid|MX|3
MMIM|ISJ|Isla Mujeres|Isla Mujeres National|MX|1|||MMUN:27
MMIO|SLW|Saltillo|Plan de Guadalupe|MX|3
MMIT|IZT|Ixtepec|General Antonio Cárdenas Rodríguez National Airport / Ixtepec Air Base|MX|3
MMJA|JAL|Emiliano Zapata|El Lencero|MX|2|||MMVR:74
MMJC|AZP|Atizapán de Zaragoza|Jorge Jiménez Cantú National|MX|1|||MMMX:28
MMLB||Loma Bonita|Air Station No. 8 Loma Bonita|MX|1|||MMVR:129
MMLC|LZC|Lázaro Cárdenas||MX|2|||MMZH:92
MMLM|LMM|Los Mochis|Valle del Fuerte|MX|3
MMLO|BJX|León / Guanajuato|Guanajuato|MX|4|Silao
MMLP|LAP|La Paz|Manuel Márquez de León|MX|3
MMLT|LTO|Loreto||MX|4
MMMA|MAM|Matamoros|General Servando Canales|MX|3
MMMD|MID|Mérida|Manuel Crescencio Rejón|MX|4
MMMG|MUG|Mulege||MX|1|||SRL:24
MMML|MXL|Mexicali|General Rodolfo Sánchez Taboada|MX|3
MMMM|MLM|Morelia|General Francisco J. Mujica|MX|4
MMMT|MTT|Cosoleacaque|Minatitlán/Coatzacoalcos|MX|3
MMMV|LOV|Monclova||MX|2|||MMIO:167
MMMX|MEX|Mexico City|Mexico City Benito Juárez|MX|4
MMMY|MTY|Monterrey||MX|4
MMMZ|MZT|Mazatlàn|General Rafael Buelna|MX|4
MMNG|NOG|Nogales||MX|2|||KTUS:99
MMNL|NLD|Nuevo Laredo|Quetzalcóatl|MX|3
MMNV||Navojoa|Navojoa Municipal|MX|1|||MMCN:61
MMOO|LOM|Lagos de Moreno|Francisco Primo de Verdad y Ramos|MX|1|||MMLO:56
MMOX|OAX|Oaxaca|Xoxocotlán|MX|4
MMPA|PAZ|Poza Rica|El Tajín National|MX|3
MMPB|PBC|Puebla|Hermanos Serdán|MX|4
MMPC||Pachuca|Engineer Juan Guillermo Villasana National|MX|1|||MMSM:44
MMPD||Ciudad de Acapulco|Base Nº7 de la Fuerza Aérea Mexicana|MX|1|Gustavo G. León González||MMAA:30
MMPE|PPE|Puerto Peñasco|Mar de Cortés|MX|2
MMPG|PDS|Piedras Negras||MX|3
MMPL|PCO|La Ribera|Punta Colorada|MX|1|||MMSD:51
MMPN|UPN|Uruapan|Uruapan - Licenciado y General Ignacio Lopez Rayon|MX|3
MMPP||La Paz|Punta Pescadero|MX|1|||MMSD:72
MMPQ|PQM|Palenque||MX|1|||MMVA:99
MMPR|PVR|Puerto Vallarta||MX|4
MMPS|PXM|Puerto Escondido||MX|3
MMPT||Comondú|Puerto Cortés Airstrip|MX|1|||MMDA:68
MMPY|PCM|Playa del Carmen|Playa del Carmen National|MX|1|||MMCZ:20
MMQT|QRO|Querétaro|Querétaro Intercontinental|MX|4
MMRX|REX|Reynosa|General Lucio Blanco|MX|3
MMSD|SJD|San José del Cabo|Los Cabos|MX|4
MMSF|SFH|Mexicali|San Felipe|MX|1|||MMPE:151
MMSG||Saucillo|Air Base No. 11 Santa Gertrudis|MX|1|||MMCU:105
MMSL|CSW|Cabo San Lucas||MX|3
MMSM|NLU|Mexico City|Felipe Ángeles|MX|4
MMSP|SLP|San Luis Potosí|Ponciano Arriaga|MX|3
MMSZ|SCX|Salina Cruz|Estación Aeronaval de Salina Cruz|MX|1|||MMBT:123
MMTA||Atlangatepec|Estación No. 9 de la Fuerza Aérea Mexicana|MX|1|||MMPB:47
MMTB||Tuxtla Gutiérrez|Terán Air Base|MX|2|||MMTG:25
MMTC|TRC|Torreón|Francisco Sarabia Tinoco|MX|3
MMTG|TGZ|Tuxtla Gutiérrez|Angel Albino Corzo|MX|3
MMTJ|TIJ|Tijuana|General Abelardo L. Rodriguez|MX|4
MMTL|TQO|Tulum|Felipe Carrillo Puerto International Airport Tulum|MX|4
MMTM|TAM|Ciudad Madero|General Francisco Javier Mina|MX|3
MMTN|TSL|Tamuín|Tamuín National|MX|1|||MMTM:101
MMTO|TLC|Toluca|Adolfo López Mateos|MX|4
MMTP|TAP|Tapachula||MX|3
MMTQ||Puente de Ixtla|Tequesquitengo|MX|1|||MMTO:83
MMTU|TUY|Tulum|Base Aeronaval de Tulum|MX|1|||MMTL:24
MMTX||Zapotiltic|Zapotiltic - Tuxpan|MX|1|||MMIA:42
MMUN|CUN|Cancún||MX|4
MMVA|VSA|Villahermosa|Carlos Rovirosa Pérez|MX|4
MMVR|VER|Veracruz|General Heriberto Jara|MX|4
MMZC|ZCL|Zacatecas|General Leobardo C. Ruiz|MX|3
MMZH|ZIH|Ixtapa|Ixtapa-Zihuatanejo|MX|4
MMZM|ZMM|Zamora||MX|1|||MMPN:76
MMZO|ZLO|Manzanillo|Playa de Oro|MX|3
MMZP||Zapopan|Zapopan Air Force Base|MX|1|||MMGL:30
MNAL||Alamicamba||NI|1|||MNPC:110
MNAM||Altamira||NI|1|||MNMG:49
MNBC||Boaco||NI|1|||MNMG:66
MNBL|BEF|Bluefields||NI|3
MNBR||Los Brasiles||NI|1|||MNMG:21
MNBZ|BZA|Bonanza|San Pedro|NI|1|||MNPC:134
MNCE|ECI|Tola|Costa Esmeralda|NI|1|||MNMG:81
MNCH||Chinandega|Chinandega Germán Pomares Ordóñez|NI|1|||MNMG:119
MNCI|RNI|Corn Island||NI|2
MNCT||Chinandega|Corinto|NI|1|||MNMG:116
MNDM||Dos Montes||NI|1|||MNMG:73
MNES||Estelí||NI|1|||MNMG:110
MNFC||Punta Huete||NI|1|Panchito||MNMG:24
MNHG||Hato Grande||NI|1|||MNMG:82
MNJG||Jinotega||NI|1|||MNMG:107
MNKW||Karawala||NI|1|||MNCI:98
MNLL||Malacataya|Las Lajas|NI|1|||MNMG:28
MNLN||León|Leon|NI|1|Fanor Urroz||MNMG:86
MNMG|MGA|Managua|Augusto C. Sandino|NI|4
MNMR||Montelimar||NI|1|||MNMG:53
MNMT||La Cumplida||NI|1|||MNMG:101
MNOM||Omtepe Island|Omtepe|NI|2||MNLP
MNPC|PUZ|Puerto Cabezas||NI|3
MNPP||El Papalonal||NI|1|||MNMG:49
MNRS||Rivas||NI|1|||MNMG:87
MNRT|RFS|La Rosita|Rosita|NI|1|||MNPC:112
MNSC|NCR|San Carlos||NI|1|||MRAN:77
MNSI|SIU|Siuna||NI|1|||MNPC:154
MNSN||San Juan de Nicaragua||NI|1|||MRAN:108
MNWP|WSP|Waspam||NI|1|||MHPL:62
MPAC|ACU|Mamitupu|Achutupu|PA|1|||MPRA:130
MPAG||El Aguila|El Aguila Airstrip|PA|1|||MPSM:25
MPAI|AIL|Isla Lorenzo Bello|Ailigandí|PA|1|||MPRA:129
MPAR||Arenas||PA|1|||MPCE:84
MPBO|BOC|Isla Colón|Bocas del Toro "Isla Colón"|PA|3
MPCA||Suletupu|Caledonia|PA|1|||MPRA:151
MPCB||Guarumal|La Cabezona|PA|1|||MPDA:9
MPCE|CTD|Chitré|Alonso Valderrama|PA|3
MPCH|CHX|Changuinola|Changuinola Captain Manuel Niño|PA|3
MPCJ|CZJ|Tupile|Corazón de Jesús|PA|1|||MPTO:98
MPCL||Calzada Larga|Capt. Alex H. Bosquez|PA|1|||MPTO:21
MPCM||Chame|Captain Krish E. Persaud|PA|1|||MPSM:35
MPDA|DAV|David|Enrique Malek|PA|3
MPEJ|ONX|Colón|Enrique Adolfo Jimenez|PA|3
MPFE||Pedro de Cocal|Fernando Eleta|PA|1|||MPRA:26
MPFS||Fort Sherman||PA|1|||MPEJ:9
MPGU||Los Santos|Augusto Vergara|PA|1||MPNU|MPCE:21
MPJE|JQE|Jaqué||PA|1|||MPPI:8
MPMC||Chame|Chame Mayor|PA|1|||MPSM:37
MPMF||Miraflores||PA|1||MPSE|MPPI:84
MPMG|PAC|Albrook|Marcos A. Gelabert|PA|3||MPLB
MPMI|NMG|Isla del Rey|San Miguel|PA|1|||MPRA:22
MPMU|MPP|Mulatupo||PA|1|||MPRA:147
MPOA|PUE|Puerto Obaldía||PA|1|||SKLC:123
MPPA|BLB|Panamá City|Panamá Pacífico|PA|2||MPHO
MPPD|PDM|Pedasí|Capt. J. Montenegro|PA|2
MPPH|PYC|Ukupseni|Playón Chico|PA|1|||MPRA:116
MPPI|BFQ|Puerto Piña|Bahia Piña|PA|2
MPPN||Penonomé|Guillermo Palm Jaén|PA|1|||MPSM:29
MPPT||Punta Patiño|Punta Patiño Airstrip|PA|1|||MPPI:75
MPPU||Punta Cocos||PA|1|||MPRA:47
MPPX||Pixvae|Pixvae Airstrip|PA|2
MPRA|OTD|Contadora Island|Raul Arias Espinoza|PA|2
MPRE|ELE|El Real de Santa María|EL Real|PA|1|||MPPI:76
MPSA|SYP|Santiago|Ruben Cantu|PA|2|||MPCE:60
MPSB|SAX|Boca de Sábalo|Sambú|PA|1|||MPPI:49
MPSM|RIH|Río Hato|Scarlett Martinez|PA|2||MPRH
MPTO|PTY|Tocumen||PA|4
MPUP|UTU|Ustupu||PA|1|||MPRA:133
MPWN|NBL|San Blas|Wannukandi|PA|1|||MPRA:122
MPZL||La Dalia|Finca 32|PA|1|||MPCH:6
MRAD||Quepos|Aerodamas|CR|1|||MRQP:9
MRAF|ACO|Cóbano||CR|1|||MRNS:69
MRAG||AltaGracia Resort|Altagracia|CR|1|||MRQP:61
MRAJ||Miramar|Aranjuez|CR|1|||MRAN:52
MRAL||Trinidad|Altomonte|CR|1|||MRQP:56
MRAM||Amubri||CR|1|||MPCH:49
MRAN|FON|La Fortuna|La Fortuna Arenal|CR|3
MRAO||Roxana|Aerotortuguero|CR|3
MRAR||Turrialba|Atirro|CR|1|||MRPV:55
MRAT||San Carlos|Altamira de San Carlos|CR|1|||MRAN:24
MRBA|BAI|Punta Arenas|Buenos Aires|CR|2|||MRGF:59
MRBB||Siquirres|Babilonia|CR|1|||MRPV:64
MRBC|BCL|Pococi|Barra del Colorado|CR|2|||MRPV:109
MRBM||Guacimo|Bremen|CR|1|||MRPV:67
MRBN||Limón|Bataan|CR|1|Monte Libano||MRLM:35
MRBO||Quepos|Boca Naranjo|CR|1|||MRQP:5
MRBP||Pococi|Barra de Parismina|CR|1|||MRLM:52
MRBT|TTQ|Tortuguero||CR|1|||MRLM:87
MRCA||Guapiles|Codela|CR|1|||MRLB:53
MRCC|OTR|Corredores|Coto 47|CR|2|||MRGF:24
MRCD||Cangrejo-Verde|Cangrejo Verde|CR|1|||MRGF:28
MRCE||Golfito|Carate|CR|1|||MRPJ:20
MRCH|JAP|Puntarenas|Chacarita|CR|1|||MRAN:58
MRCI||Bagaces|Ciruelas|CR|1|||MRLB:23
MRCJ||San Isidro|Cajuela/San Isidro|CR|1|||MRQP:49
MRCL||Liberia|Coyolar|CR|1|||MRLB:9
MRCO||Filadelfia|El Cerrito|CR|1|||MRLB:16
MRCR|PLD|Carrillo|Playa Samara/Carrillo|CR|1|||MRNS:22
MRCT||Liberia|Catsa|CR|1||MECT|MRLB:8
MRCV||Nicoya|Cabo Velas|CR|1|||MRLB:43
MRCZ||Carrizal||CR|1|||MROC:11
MRDC||Guapiles|Duacari 2|CR|1|||MRPV:71
MRDD||Limón|Don Diego|CR|1|||MPCH:42
MRDK|DRK|Puntarenas|Drake Bay|CR|1|||MRPJ:43
MRDM||Chorotega|Dos Marías|CR|1|||MRNS:73
MRDO||Puntarenas|Dieciocho|CR|1|||MRGF:39
MRDV||Pital|Dole Venecia|CR|1|||MRAN:34
MREC||Siquirres|El Carmen de Siquirres|CR|1|||MRLM:56
MRED||San Carlos|El Descanso de Poco Sol|CR|1|||MRAN:45
MREO||Ticabán|El Ceibo|CR|1|||MRPV:71
MRER||Ron Ron|El Ron Ron|CR|1|||MRAN:23
MRET||Parrita|Esterillos / Finca|CR|1|||MRQP:38
MRFC||Nicoya|Flying Crocodile|CR|1|||MRNS:14
MRFD||Puerto Cortés|Finca Delicias|CR|1|||MRGF:53
MRFI||Puntarenas|Finca 10 / Nuevo Palmar Sur|CR|1|||MRGF:46
MRFL|FMG|Brasilito|Flamingo|CR|1|||MRLB:32
MRFP||San Carlos|Frutez - Pital|CR|1|||MRAN:23
MRFS||Puntarenas|Finca 63|CR|1|Coto 63||MRGF:13
MRGA||Garza||CR|1|||MRNS:7
MRGF|GLF|Golfito||CR|3
MRGP|GPL|Pococi|Guapiles|CR|2|||MRPV:47
MRGT||Alajuela|Guatuso|CR|1|||MRAN:37
MRHG||Sarapiqui|Hacienda Rancho Grande|CR|1|||MROC:53
MRHH||San Carlos|Hacienda Homuha|CR|1|||MRAN:43
MRHO||Sarapiqui|Hacienda Rio Cuarto|CR|1|||MRAN:48
MRHP||Cañas|Hacienda La Pacífica|CR|1|||MRLB:46
MRHS||Pococi|Hacienda La Suerte|CR|1|||MRPV:75
MRIA|PBP|Nandayure|Islita|CR|1|||MRNS:34
MRIS||San Carlos|Las Islas|CR|1|||MRAN:67
MRJO||Jaco||CR|1|||MRQP:48
MRLA||Guanacaste|La Zampoña|CR|1|||MRLB:38
MRLB|LIR|Liberia|Daniel Oduber Quirós|CR|4
MRLC|LSL|Los Chiles||CR|2|||MRAN:64
MRLE||Puntarenas|Laurel|CR|1|||MRGF:38
MRLF||Liberia|La Flor|CR|1|||MRLB:6
MRLG||Upala|La Garroba|CR|1|||MRAN:52
MRLI||Parrita|La Ligia|CR|1|||MRQP:20
MRLL||Siquirres|Las Lomas|CR|1|||MRPV:62
MRLM|LIO|Limón||CR|3
MRLN||Nicoya|La Guinea|CR|1|||MRLB:21
MRLP||Cañas|Las Piedras|CR|1|||MRLB:46
MRLT||Las Trancas||CR|1|||MRLB:7
MRLV||Liberia|La Cueva|CR|1|||MRLB:10
MRLY||Parrita|La Yolanda|CR|1|||MRQP:49
MRLZ||Guanacaste|La Zopilota|CR|1|||MRLB:15
MRMA||Abangares|Monte Alto|CR|1|||MRNS:44
MRMC||La Cruz|Murcielago|CR|1|||MRLB:41
MRMJ|CSC|Cañas|Mojica|CR|1|||MRLB:44
MRMR|||Monte Reina|CR|1|||MRNS:14
MRNC|NCT|Nicoya/Guanacate|Guanacaste|CR|1|||MRNS:29
MRNI||San Isidro|La Bonita|CR|1|||MRQP:50
MRNS|NOB|Nicoya|Nosara|CR|3
MROC|SJO|San José|Juan Santamaría|CR|4|San José (Alajuela)
MRPA||Nandayure|Palo Arco|CR|1|||MRNS:48
MRPD||Limón|Pandora|CR|1|||MRLM:25
MRPJ|PJM|Puerto Jimenez||CR|3
MRPK||Uvita|Papa Kilo|CR|1|||MRQP:54
MRPL||Portalón||CR|1|||MRQP:19
MRPM|PMZ|Palmar Sur||CR|2|||MRGF:46
MRPN||Liberia|Pelon Nuevo|CR|1|||MRLB:19
MRPO||Puntarenas|Punta Banco|CR|1|||MRPJ:27
MRPP||Paquera|Playa Pájaros|CR|1|||MROC:55
MRPR|||Playon Sur|CR|1|||MRQP:28
MRPS||Santa Cruz|Peñas Blancas|CR|1|||MRLB:34
MRPT||Nicoya/Guanacate|Agropecuaria Playa Caletas|CR|1|||MRNS:51
MRPV|SYQ|San Jose|Tobías Bolaños|CR|3
MRPY||Puntarenas|Playa Ballena|CR|1|||MRQP:59
MRQA||Florencia|Quebrada Azul|CR|1|||MRAN:13
MRQN||Quepos|Quebrada Naranjo|CR|1|||MRQP:6
MRQP|XQP|Quepos|Quepos Managua|CR|3
MRRF|RFR|Rio Frio / Progreso||CR|1|||MRPV:50
MRRH||Santa Cruz|Rancho Humo|CR|1|||MRLB:38
MRRN||Puntarenas|Rancho Nuevo|CR|1|||MRQP:45
MRRX||Limón|Roxana Farms|CR|1|||MRPV:57
MRSA||Limón|San Alberto|CR|1|||MRLM:56
MRSB||San Carlos|San Cristobal|CR|1|||MRAN:4
MRSC||Santa Cruz||CR|1|||MRNS:34
MRSF||Pérez Zeledón|Santa Fe|CR|1|||MRQP:59
MRSG||Limón|Santa Clara De Guapiles|CR|1|||MRPV:59
MRSH||Talamanca|Shiroles|CR|1|||MRLM:42
MRSI|IPZ|Pérez Zeledón|San Isidro del General|CR|1|||MRQP:47
MRSL||Salama||CR|1|||MRGF:18
MRSM||Orotina|Santa Marta|CR|1|||MROC:45
MRSN||Península de Osa|Sirena|CR|1|||MRPJ:33
MRSO||Guapiles|Santa Maria De Guacimo|CR|1|||MRPV:70
MRSP||San Pedro||CR|1|||MRPV:66
MRSQ||San Carlos|Sarapigui|CR|1|||MROC:63
MRST||Puntarenas|San Agustin|CR|1|||MRAN:56
MRSV|TOO|Coto Brus|San Vito de Java|CR|1|||MRGF:31
MRSX||Sixaola||CR|1|||MPCH:14
MRTB||Pococi|Ticaban|CR|1|||MRPV:59
MRTG||Cañas|Taboga|CR|1|||MRLB:48
MRTL||Nicoya|Talolinga|CR|1|||MRLB:33
MRTM|TNO|Tamarindo||CR|1|||MRNS:41
MRTR|TMU|Nicoya|Tambor|CR|1|||MRNS:75
MRTS||Santa Teresa||CR|1|||MRNS:61
MRUP|UPL|Upala||CR|2|||MRLB:67
MRYT||Guacimo|Yucatica|CR|1|||MRPV:67
MRZP||Zapotal|Zapotal De Guanacaste|CR|1|||MRNS:38
MSAC||San Miguel|La Aramuaca|SV|1|||MSLP:101
MSBS||Barrillas|Barillas|SV|1|||MSLP:63
MSCD||Ceiba Doblada||SV|1|||MSLP:55
MSCH||La Chepona||SV|1|||MSLP:76
MSCM||Corral de Mulas||SV|1|||MSLP:61
MSCN||Jiquilisco|Casas Nuevas|SV|1|||MSLP:61
MSCR||Jiquilisco|La Carrera|SV|1|||MSLP:59
MSCS||Cangrejera|Las Cachas|SV|1|||MSLP:15
MSES||Espíritu Santo|Espiritu Santo|SV|1|||MSLP:60
MSET||Canoguero|El Tamarindo|SV|1|||MHTG:124
MSJC||El Jocotillo||SV|1|||MSSS:68
MSLC||La Cabaña||SV|1|||MSSS:35
MSLD||San Francisco Gotera|Los Comandos|SV|1|||MHPR:90
MSLM||Las Mesas||SV|1|||MSLP:16
MSLP|SAL|San Salvador|El Salvador International Airport Saint Óscar Arnulfo Romero y Galdámez|SV|4|San Salvador (San Luis Talpa)
MSPT||Suchitoto|El Platanar|SV|1|||MSSS:28
MSRC||Metapán|El Ronco|SV|1|||MSSS:81
MSSA||Santa Ana|El Palmer|SV|1|||MSSS:69
MSSJ||Corral de Mulas|Punta San Juan|SV|1|||MSLP:70
MSSM||San Miguel|El Papalon|SV|1||MSPP|MSLP:100
MSSN||San Ramón|San Ramon|SV|1|||MSLP:122
MSSS|ILS|San Salvador|Ilopango|SV|3
MSZT||Barra de Santiago|El Zapote|SV|1|||MSSS:98
MTCA|CYA|Les Cayes|Antoine-Simon|HT|3
MTCH|CAP|Cap Haitien||HT|4
MTJA|JAK|Jacmel||HT|2|||MTPP:45
MTJE|JEE|Carrefour Sanon|Jérémie|HT|3
MTPP|PAP|Port-au-Prince|Toussaint Louverture|HT|4
MTPX|PAX|Port-de-Paix||HT|2|||MTCH:72
MUBA|BCA|Baracoa|Gustavo Rizo|CU|3
MUBE||Alonso de Rojas|El Caribe|CU|1|||MUNG:86
MUBO||Batabanó||CU|1|||MUHA:33
MUBR|BWW|Cayo Santa Maria|Las Brujas|CU|1|||MUSC:83
MUBY|BYM|Bayamo|Carlos Manuel de Cespedes|CU|3
MUCA|AVI|Ciro Redondo|Máximo Gómez|CU|2|||MUCC:68
MUCC|CCC|Cayo Coco|Jardines Del Rey|CU|3
MUCF|CFG|Cienfuegos|Jaime Gonzalez|CU|3
MUCL|CYO|Cayo Largo del Sur|Vilo Acuña|CU|3
MUCM|CMW|Camaguey|Ignacio Agramonte|CU|4
MUCO||Colón||CU|1|||MUVR:64
MUCU|SCU|Santiago|Antonio Maceo|CU|4
MUCY||Cayajabo||CU|1|||MUHA:48
MUFL||Florida||CU|1|||MUCM:38
MUGM|NBW|Guantanamo Bay Naval Station|Leeward Point Field|CU|2|||MUCU:66
MUGT|GAO|Guantánamo|Mariana Grajales|CU|2|||MUCU:72
MUGV||Yaguajay|Guardalavaca|CU|1|||MUHG:63
MUHA|HAV|Havana|José Martí|CU|4
MUHG|HOG|Holguin|Frank Pais|CU|4
MUKW|VRO|Santa Marta|Kawama|CU|2|||MUVR:17
MULB||Havana|Ciudad Libertad|CU|1|||MUHA:12
MUMA|UMA|Maisí|Alfredo Noa Díaz|CU|1|||MUBA:40
MUMG||Managua||CU|1|||MUHA:14
MUMJ|MJG|Mayajigua||CU|1|||MUCC:80
MUMO|MOA|Moa|Orestes Acosta|CU|2|||MUBA:54
MUMZ|MZO|Manzanillo|Sierra Maestra|CU|3
MUNB||San Nicolás de Bari||CU|2|||MUHA:56
MUNG|GER|Nueva Gerona|Rafael Cabrera|CU|3
MUPA||Punta Alegre||CU|1|||MUCC:51
MUPB|UPB|Havana|Playa Baracoa|CU|2|||MUHA:18
MUSA||San Antonio de los Baños||CU|1|||MUHA:17
MUSC|SNU|Santa Clara|Abel Santamaria|CU|4
MUSG||Sagua la Grande||CU|1|||MUSC:36
MUSJ|SNJ|Sandino|San Julián Air Base|CU|2|||MUNG:145
MUSL||Nuevitas|Joaquín de Agüero|CU|1|||MUVT:59
MUSN|SZJ|Isla de la Juventud|Siguanea|CU|2|||MUNG:28
MUSS|USS|Sancti Spiritus||CU|1|||MUTD:61
MUTD|TND|Trinidad|Alberto Delgado|CU|3
MUTI||Manatí|Manatí Agricultural|CU|1|||MUVT:36
MUVR|VRA|Matanzas|Juan Gualberto Gomez|CU|4
MUVT|VTU|Las Tunas|Hermanos Ameijeiras|CU|3
MWCB|CYB|West End|Charles Kirkconnell|KY|3
MWCL|LYB|Blossom Village|Edward Bodden Little Cayman|KY|2|||MWCB:22
MWCR|GCM|George Town|Owen Roberts|KY|4
MXNT||Teacapán|Teacapán Naval Air Station / Escuinapa National|MX|1|||MMMZ:89
MYAB|MAY|Mangrove Cay|Clarence A. Bain|BS|2|||MYAK:17
MYAF|ASD|Andros Town||BS|3
MYAK|TZN|Andros|Congo Town|BS|3
MYAM|MHH|Marsh Harbour|Leonard M. Thompson|BS|3
MYAN|SAQ|Andros Island|San Andros|BS|3
MYAO||Moore's Island|Moores Island|BS|1|||MYAT:50
MYAP|AXP|Spring Point||BS|3
MYAS||Sandy Point||BS|1|||MYAM:64
MYAT|TCB|Treasure Cay||BS|3
MYAW|WKR|Walkers Cay||BS|1|||MYGF:83
MYAX|||Spanish Cay|BS|1|||MYAT:27
MYBC|CCZ|Chub Cay||BS|3
MYBG|GHC|Bullocks Harbour|Great Harbour Cay|BS|2|||MYBC:36
MYBS|BIM|South Bimini||BS|3
MYBW||Big Whale Cay||BS|1|||MYBC:9
MYBX||Little Whale Cay|Little Whale Cay Berry Islands|BS|1|||MYBC:13
MYCA|ATC|Arthur's Town||BS|3
MYCB|TBI|Cat Island|New Bight|BS|3
MYCC|CXY|North Cat Cay|Cat Cay|BS|1|||MYBS:16
MYCH||Hawks Nest Creek|Hawks Nest|BS|1|||MYCB:19
MYCI|CRI|Colonel Hill||BS|3
MYCP|PWN|Pitts Town||BS|1|||MYCI:19
MYCS||Cay Sal||BS|1|||MUVR:130
MYEB||Black Point|Black Point Airstrip|BS|1|||MYEF:79
MYEF|GGT|Moss Town|Exuma|BS|3
MYEH|ELH|North Eleuthera||BS|3
MYEL||Lee Stocking||BS|1|||MYEF:33
MYEM|GHB|Governor's Harbour||BS|3
MYEN|NMC|Normans Cay||BS|2|||MYER:73
MYER|RSD|Rock Sound||BS|3
MYES|TYM|Staniel Cay||BS|2|||MYER:85
MYGD||Deep Water Cay||BS|1|||MYAT:54
MYGF|FPO|Freeport|Grand Bahama|BS|4
MYGM||High Rock|Grand Bahama Auxiliary|BS|1|||MYGF:34
MYGW|WTD|West End||BS|1|||MYGF:31
MYIG|IGA|Matthew Town|Inagua|BS|3
MYLD|LGI|Deadman's Cay||BS|3
MYLM||Galliot Cay|Cape Santa Maria Airstrip|BS|1|||MYLS:9
MYLR|||Hard Bargain|BS|2|||MYLD:27
MYLS|SML|Stella Maris||BS|3
MYMM|MYG|Abraham Bay Settlement|Mayaguana|BS|3
MYNN|NAS|Nassau|Lynden Pindling|BS|4
MYRD|DCT|Duncan Town||BS|2|||MYLD:129
MYRP|RCY|Port Nelson|Rum Cay|BS|1|||MYLS:45
MYSM|ZSA|San Salvador||BS|4
MYTC||Hog Cay|Torch Cay|BS|1||MYEY|MYLS:31
MYXC||Long Island|Hog Cay North|BS|1|||MYLS:7
MYXD||Leaf Cay||BS|1|||MYER:88
MYXF||Little Darby Island||BS|1|||MYEF:48
MYXH||Sampson Cay||BS|1|||MYER:81
MYXX||Little Farmers Cay|Farmers Cay Airstrip|BS|1|||MYEF:64
MZBE|TZA|Belize City|Sir Barry Bowen Municipal|BZ|3
MZBG|BGK|Big Creek||BZ|2
MZBP|BCV|Belmopan|Hector Silva Airstrip|BZ|1|||MZBZ:58
MZBZ|BZE|Belize City|Philip S. W. Goldson|BZ|4
MZCF|SQS|Spanish Lookout|Matthew Spain|BZ|1|||MZBZ:85
MZCK|CUK|Caye Caulker||BZ|3
MZCP|CYC|Caye Chapel||BZ|3
MZCZ|CZH|Corozal||BZ|3
MZGJ||Gallon Jug|Chan Chich Airstrip|BZ|1|||MZTH:72
MZHR||Ropewalk Caye|Belize Dive Haven Airstrip|BZ|1|Ropewalk Caye, Turnette Atoll||MZBE:47
MZJC||Chan Chen|Johnny Chan Chen Airstrip|BZ|1|||MZCZ:8
MZKT|SVK|Silver Creek||BZ|1|||MZPL:21
MZLH||Northern Caye|Lighthouse Reef Airstrip|BZ|1|||MZCP:63
MZMF|CYD|Maya Flats|San Ignacio Town Airstrip|BZ|1|||MGMM:84
MZML|MDB|Hope Creek|Melinda|BZ|1|||MZPB:9
MZPB|DGA|Dangriga||BZ|3
MZPG|PND|Punta Gorda||BZ|2
MZPL|PLJ|Placencia||BZ|3
MZSJ|SJX|Sartaneja||BZ|2|||MMCM:27
MZSL|MZE|Spanish Lookout|Manatee|BZ|1|||MZBZ:82
MZSP|SPR|San Pedro|John Greif II|BZ|3
MZSV|INB|Independence||BZ|2
MZTH|ORZ|Orange Walk|H.E Alfredo Martinez Airstrip|BZ|2|Tower Hill
NCAI|AIT|Aitutaki||CK|2
NCAT|AIU|Atiu Island|Enua|CK|2
NCMG|MGS|Mangaia Island||CK|1|||NCMK:204
NCMH|MHX|Manihiki Island||CK|2
NCMK|MUK|Mauke Island|Mauke|CK|2
NCMN||Manuae||CK|1|||NCAI:98
NCMR|MOI|Mitiaro Island||CK|2
NCPK|PZK|Pukapuka Atoll|Pukapuka Island|CK|1
NCPY|PYE|Penrhyn Island|Tongareva|CK|1
NCRG|RAR|Avarua|Rarotonga|CK|4
NFCI|ICI|Cicia||FJ|2
NFCS|CST|Castaway Island|Castaway Island Seaplane Base|FJ|1|||NFMA:8
NFFA||Ba||FJ|1|||NFFN:37
NFFN|NAN|Nadi||FJ|4
NFFO|PTF|Malolo Lailai Island||FJ|2
NFFR|RBI|Rabi Island||FJ|1|||NFNM:23
NFGO||Mago Island|Mago Island Airstrip|FJ|1|||NFVB:27
NFKB||Kaibu Island||FJ|1|||NFVB:54
NFKD|KDV|Vunisea||FJ|2
NFMA|MNF|Mana Island||FJ|2
NFMO|MFJ|Moala||FJ|2
NFNA|SUV|Nausori||FJ|4
NFNB|LEV|Bureta|Levuka|FJ|2
NFND|PHR|Nanuku Auberge Resort|Nanuku|FJ|1|||NFNA:59
NFNG|NGI|Ngau||FJ|2
NFNH|LUC|Laucala Island||FJ|1|||NFNM:23
NFNK|LKB|Lakeba Island||FJ|2
NFNL|LBS|Labasa||FJ|3
NFNM|TVU|Matei||FJ|2
NFNO|KXF|Koro Island||FJ|2
NFNR|RTA|Rotuma||FJ|2
NFNS|SVU|Savusavu||FJ|2
NFNW|KAY|Wakaya Island||FJ|1|||NFNB:29
NFOL|ONU|Ono-i-Lau||FJ|1|||NFMO:270
NFSW|YAS|Yasawa Island||FJ|2
NFTE|EUA|Eua Island|Kaufana|TO|2
NFTF|TBU|Nuku'alofa|Fua'amotu|TO|4
NFTL|HPA|Lifuka|Lifuka Island|TO|3
NFTO|NFO|Angaha|Mata'aho|TO|1|Angaha, Niuafo'ou Island||NFTP:202
NFTP|NTT|Niuatoputapu|Kuini Lavenia|TO|2
NFTV|VAV|Vava'u Island|Vava'u|TO|4
NFUL|TTL|Nanuya Levu Island|Turtle Island Seaplane Base|FJ|1|||NFSW:30
NFVB|VBV|Vanua Balavu||FJ|2
NFVL|VTF|Vatulele||FJ|1|||NFKD:82
NGAB|ABF|Abaiang||KI|1|||NGTA:48
NGBR|BEZ|Beru||KI|1
NGFU|FUN|Funafuti||TV|3
NGKT|KUC|Kuria||KI|1|||NGUK:22
NGMA|MNK|Maiana||KI|1|||NGTA:44
NGMK|MZK|Marakei||KI|1|||NGTA:77
NGMN|MTK|Makin Island||KI|1|||NGTU:38
NGNU|NIG|Nikunau||KI|1
NGON|OOT|Onotoa||KI|1
NGTA|TRW|South Tarawa|Bonriki|KI|4
NGTB|AEA|Abemama||KI|1|||NGUK:40
NGTE|TBF||Tabiteuea North|KI|2|||NGUK:202
NGTM|TMN|Tamana Island||KI|1
NGTO|NON|Nonouti||KI|1|||NGUK:127
NGTR|AIS|Arorae Island||KI|1
NGTS|TSU|Tabiteuea South||KI|1|||NGUK:243
NGTU|BBG|Butaritari||KI|2
NGUK|AAK|Buariki|Aranuka|KI|2
NIUE|IUE|Alofi|Niue|NU|3
NLWF|FUT|Futuna Island|Pointe Vele|WF|2
NLWW|WLS|Wallis Island|Hihifo|WF|4
NSAS|OFU|Ofu||AS|2
NSAU|AAU|Asau||WS|1|||NSFA:76
NSFA|APW|Apia|Faleolo|WS|4
NSFI|FGI|Apia|Fagali'i|WS|1|||NSFA:29
NSFQ|FTI|Fitiuta Village|Fitiuta|AS|2
NSMA|MXS|Maota||WS|1|||NSFA:29
NSTU|PPG|Pago Pago||AS|4
NTAA|PPT|Papeete|Fa'a'ā|PF|4
NTAM|RMT|Rimatara Island|Rimatara|PF|2
NTAR|RUR||Rurutu|PF|3
NTAT|TUB||Tubuai|PF|3
NTAV|RVV||Raivavae|PF|2
NTGA|AAA|Anaa||PF|3
NTGB|FGU|Fangatau||PF|3
NTGC|TIH|Tuherahera|Tikehau|PF|3
NTGD|APK|Apataki||PF|2
NTGE|REA|Reao||PF|2|||NTGO:246
NTGF|FAV||Fakarava|PF|3
NTGG||Nengonengo Atoll|Nengo-Nengo|PF|1|||NTTO:114
NTGH|HHZ|Hikueru||PF|2
NTGI|XMH||Manihi|PF|3
NTGJ|GMR||Totegegie|PF|3
NTGK|KKR|Raitahiti|Kaukura|PF|3
NTGM|MKP|Makemo||PF|3
NTGN|NAU|Napuka Island||PF|2
NTGO|TKV|Tatakoto||PF|2
NTGP|PKP||Puka Puka|PF|2
NTGQ|PUK|Pukaruha||PF|1|||NTGO:184
NTGR||Aratika Atoll|Aratika-Perles|PF|1|||NTKA:43
NTGS||Auorotini|Marutea|PF|1|||NTGJ:194
NTGT|TKP||Takapoto|PF|3
NTGU|AXR||Arutua|PF|3
NTGV|MVT||Mataiva|PF|3
NTGW|NUK|Nukutavake||PF|1|||NTGO:217
NTGY|ZTA|Tureia||PF|1
NTHE|AHE|Ahe Atoll|Ahe|PF|3
NTKA|KHZ|Kauehi||PF|2
NTKF|FAC|Faaite||PF|1|||NTGA:77
NTKH|FHZ|Fakahina||PF|2
NTKK|RKA||Aratika Nord|PF|1|||NTKA:49
NTKM|TJN|Takume||PF|1|||NTKO:31
NTKN|NIU|Naiu Atoll|Naiu|PF|2
NTKO|RRR|Raroia||PF|2
NTKR|TKX||Takaroa|PF|3
NTKT|KXU|Katiu||PF|1|||NTGM:84
NTKU|NKP|Nukutepipi||PF|1
NTMD|NHV|Nuku Hiva||PF|3
NTMN|AUQ|Hiva Oa Island|Hiva Oa-Atuona|PF|3
NTMP|UAP|Ua Pou||PF|2
NTMU|UAH|Ua Huka||PF|2
NTTB|BOB|Motu Mute|Bora Bora|PF|3
NTTE|TTI|Tetiaroa||PF|1|||NTTM:56
NTTG|RGI||Rangiroa|PF|3
NTTH|HUH|Fare|Huahine-Fare|PF|3
NTTM|MOZ|Moorea-Maiao|Moorea Temae|PF|3
NTTO|HOI|Otepa|Hao|PF|3
NTTP|MAU||Maupiti|PF|3
NTTR|RFP|Uturoa|Raiatea|PF|3
NTTU|TPX|Tupai Atoll|Tupai|PF|1|||NTTB:24
NTTX|UOA|Moruroa Atoll|Moruroa|PF|1
NTUV|VHZ|Vahitahi||PF|1|||NTGO:164
NVSA|MTV|Ablow|Mota Lava|VU|1|||NVSC:28
NVSC|SLH|Sola||VU|2
NVSD|TOH|Loh/Linua|Torres Airstrip|VU|1|||NVSC:113
NVSE|EAE|Emae Island|Siwo|VU|1|||NVST:31
NVSF|CCV|Craig Cove||VU|2
NVSG|LOD|Longana||VU|2
NVSH|SSR|Pentecost Island|Sara|VU|2
NVSI|PBJ|Paama Island|Tavie|VU|2
NVSL|LPM|Lamap||VU|2
NVSM|LNB|Lamen Bay||VU|2
NVSN|MWF|Maewo Island|Maewo-Naone|VU|1|||NVSG:37
NVSO|LNE|Lonorore||VU|2
NVSP|NUS|Norsup||VU|2
NVSQ|ZGU|Gaua Island||VU|2|||NVSC:41
NVSR|RCL|Redcliffe||VU|1|||NVSW:17
NVSS|SON|Luganville|Santo Pekoa|VU|3
NVST|TGH|Tongoa Island|Tongoa|VU|2
NVSU|ULB|Ambrym Island|Uléi|VU|1|||NVSI:13
NVSV|VLS|Epi Island|Valesdir|VU|2
NVSW|WLH|Walaha||VU|2
NVSX|SWJ|Malekula Island|Southwest Bay|VU|1|||NVSL:41
NVSZ|OLJ|Olpoi|North West Santo|VU|2
NVVA|AUY|Anatom Island|Aneityum|VU|1|||NVVF:95
NVVB|AWD|Aniwa||VU|1|||NVVW:47
NVVD|DLY|Dillon's Bay||VU|1|||NVVW:80
NVVF|FTA|Futuna Island|Futuna|VU|2
NVVI|IPA|Ipota||VU|1|||NVVW:67
NVVJ||Forari||VU|1|||NVVV:22
NVVK||Lenakel||VU|1|||NVVW:8
NVVV|VLI|Port Vila|Bauerfield|VU|4
NVVW|TAH|Tanna Island|Whitegrass|VU|3
NWWA|TGJ|Tiga||NC|3
NWWB||Poé|Bourail - Poé|NC|1|||NWWD:85
NWWC|BMY|Waala|Île Art - Waala|NC|2
NWWD|KNQ|Koné||NC|3
NWWE|ILP|Île des Pins||NC|3
NWWI||Hienghène||NC|1|||NWWU:30
NWWK|KOC|Koumac||NC|2
NWWL|LIF|Lifou||NC|3
NWWM|GEA|Nouméa|Nouméa Magenta|NC|3
NWWP|PUV|Malabou|Poum / Malabou|NC|1|||NWWK:33
NWWQ|PDC|Népoui|Mueo|NC|1|||NWWD:34
NWWR|MEE|Maré||NC|3
NWWT||La Foa|Oua Tom|NC|1|||NWWW:42
NWWU|TOU|Touho||NC|3
NWWV|UVE|Ouvéa||NC|3
NWWW|NOU|Nouméa|La Tontouta|NC|4|Nouméa (La Tontouta)
NWWX||Canala||NC|1|||NWWW:60
NWWY||Ouaco||NC|1|||NWWD:38
NZAA|AKL|Auckland||NZ|4
NZAE||Mount Tarawera||NZ|1|||NZRO:22
NZAN||Anama|Anama airstrip|NZ|1|||NZTU:58
NZAP|TUO|Taupo||NZ|3
NZAR|AMZ|Manurewa|Ardmore|NZ|2|||NZAA:17
NZAS|ASG|Ashburton||NZ|1|||NZTU:64
NZBA||Balclutha||NZ|1|||NZDN:49
NZCB||Centre Bush||NZ|1|||NZNV:41
NZCG||Taupo|Centennial Park|NZ|1|||NZAP:9
NZCH|CHC|Christchurch||NZ|4
NZCI|CHT|Te One|Inia William Tuuta Memorial|NZ|3
NZCS|||Cromwell Racecourse|NZ|1|||NZQN:34
NZCW||Cromwell|Cromwell/Louburn|NZ|1|||NZWF:29
NZCX|CMV|Coromandel||NZ|1|||NZGB:61
NZDA|DGR|Dargaville||NZ|1|||NZWR:46
NZDN|DUD|Dunedin||NZ|3
NZDV|||Dannevirke|NZ|1|||NZPM:40
NZDY|||Drury|NZ|1|||NZAA:19
NZES|||Wharepapa South|NZ|1|||NZHN:36
NZFE||Fenside|Fernside Fields Airpark|NZ|1|||NZCH:19
NZFF|||Forest Field|NZ|1|||NZCH:18
NZFI||Feilding||NZ|1|||NZPM:7
NZFJ|WHO||Franz Josef|NZ|1|||NZHK:100
NZFO||Fox Glacier||NZ|1|||NZHK:114
NZFP|||Foxpine|NZ|1|||NZPM:33
NZFT||Flat Point||NZ|1|||NZWN:97
NZFX||McMurdo Station|Phoenix|AQ|1
NZGA|||Galatea|NZ|1|||NZRO:50
NZGB|GBZ|Claris|Great Barrier|NZ|2
NZGC|||Gore3|NZ|1|||NZNV:53
NZGM|GMN||Greymouth|NZ|1|||NZHK:33
NZGR||Great Mercury Island / Ahuahu|Great Mercury|NZ|1|||NZGB:47
NZGS|GIS|Gisborne||NZ|3
NZGT|GTN|Glentanner Station|Glentanner|NZ|2|||NZTU:98
NZGY|||Glenorchy|NZ|1|||NZQN:32
NZHA||Hawera||NZ|1|||NZNP:61
NZHK|HKK||Hokitika|NZ|3
NZHM||Hanmer Springs||NZ|1|||NZCH:104
NZHN|HLZ|Hamilton||NZ|3
NZHP|||Lake Haupiri/Gloriavale Christian Community|NZ|1|||NZHK:60
NZHS||Bridge Pa|Hastings|NZ|1|||NZNR:22
NZHT||Haast||NZ|1|||NZWF:97
NZKC|||Kelly Field|NZ|1|||NZAA:37
NZKD||Kaikoura Island|Motu Kaikoura Island|NZ|1|||NZGB:15
NZKE|WIK|Waiheke Island||NZ|1|||NZAA:35
NZKF|||Kaipara Flats|NZ|1|||NZAA:70
NZKI|KBZ||Kaikoura|NZ|1|||NZWB:103
NZKK|KKE|Kerikeri||NZ|3
NZKM|||Karamea|NZ|1|||NZWS:71
NZKO|KKO|Kaikohe||NZ|1|||NZKK:23
NZKT|KAT|Awanui|Kaitaia|NZ|3
NZKY||Kowhai||NZ|1|||NZNR:57
NZLD||Limestone Downs||NZ|1|||NZAA:52
NZLE|||Lake Station|NZ|1|||NZNS:65
NZLX|ALR|Alexandra||NZ|2|||NZQN:53
NZMA|MTA||Matamata Glider|NZ|1|||NZHN:39
NZMC|MON||Mount Cook|NZ|2|||NZTU:106
NZME|||Mercer1 PDZ|NZ|1|||NZAA:40
NZMF|MFN||Milford Sound|NZ|1|||NZQN:75
NZMJ||Jamestown|Martins Bay|NZ|1|||NZQN:93
NZMK|MZP||Motueka|NZ|1|||NZNS:28
NZML||Molesworth||NZ|1|||NZWB:79
NZMO|TEU||Manapouri|NZ|2|||NZQN:103
NZMR||Murchison||NZ|1|||NZWS:61
NZMS|MRO|Masterton|Hood|NZ|2|||NZPM:73
NZMT||Martinborough||NZ|1|||NZWN:58
NZMW|||Makarora Airstrip|NZ|1|||NZWF:55
NZMZ||Matakana Island||NZ|1|||NZTG:13
NZNE||Dairy Flat|North Shore|NZ|1|||NZAA:41
NZNF||Inglewood|Norfolk|NZ|1|||NZNP:22
NZNP|NPL|New Plymouth||NZ|3
NZNR|NPE|Napier|Hawke's Bay|NZ|3
NZNS|NSN|Nelson||NZ|3
NZNV|IVC|Invercargill||NZ|3
NZOA|||Omarama Glider|NZ|1|||NZWF:64
NZOF|||Omaha Flats|NZ|1|||NZGB:65
NZOH|OHA||RNZAF Base Ohakea|NZ|2|||NZPM:23
NZOI||Motiti Island||NZ|1|||NZTG:20
NZOM||Blenheim|Omaka Blenheim|NZ|1|||NZWB:5
NZOP|||Opotiki|NZ|1|||NZWK:36
NZOT||Otaki||NZ|2
NZOU|OAM||Oamaru|NZ|2|||NZTU:75
NZOX|||Okiwi Station|NZ|1|||NZGB:12
NZPH|||Pudding Hill|NZ|1|||NZCH:82
NZPI|||Parakai|NZ|1|||NZAA:51
NZPM|PMR|Palmerston North||NZ|3
NZPN|PCN|Koromiko|Picton|NZ|2
NZPO||Pōrangahau||NZ|1|||NZPM:88
NZPP|PPQ||Paraparaumu|NZ|2|||NZWN:49
NZPT||Pitt Island||NZ|2
NZPW||Papawai||NZ|1|||NZWN:63
NZQN|ZQN|Queenstown||NZ|4
NZRA|RAG|Raglan||NZ|1|||NZHN:42
NZRC|SZS|Oban|Ryan's Creek|NZ|1|||NZNV:57
NZRI||Rangitata Island||NZ|1|||NZTU:29
NZRK|||Rangitaiki|NZ|1|||NZAP:29
NZRO|ROT|Rotorua|Rotorua Regional|NZ|3
NZRR|||Ruatoria|NZ|1|||NZGS:91
NZRT||Rangiora||NZ|1|||NZCH:22
NZRU|||Waiouru|NZ|1|||NZWU:79
NZRW|||Ruawai|NZ|1|||NZWR:50
NZRX|||Roxburgh|NZ|1|||NZQN:71
NZSD||Stratford||NZ|1|||NZNP:36
NZSF||Springfield||NZ|1|||NZCH:51
NZSL|||Springhill|NZ|1|||NZWR:64
NZSP||Amundsen-Scott South Pole Station|Amundsen–Scott South Pole Station|AQ|2
NZTA|||Te Aroha|NZ|1|||NZHN:50
NZTE||Te Kowhai||NZ|1|||NZHN:20
NZTG|TRG|Tauranga||NZ|3
NZTH|TMZ||Thames|NZ|1|||NZAA:70
NZTI||Dunedin|Taieri|NZ|1|||NZDN:15
NZTK|KTF||Takaka|NZ|1|||NZNS:66
NZTL|||Tekapo|NZ|1|||NZTU:71
NZTM|||Taumarunui|NZ|1|||NZAP:72
NZTN|||Turangi|NZ|1|||NZAP:35
NZTO|TKZ|Tokoroa||NZ|1|||NZRO:40
NZTT||Te Kuiti||NZ|1|||NZHN:51
NZTU|TIU||Timaru|NZ|3
NZUK|TWZ|Twitzel|Pukaki|NZ|2|||NZWF:88
NZUN||Pauanui||NZ|1|||NZTG:78
NZVL|||Mandeville|NZ|1|||NZNV:61
NZVR||Taihape||NZ|1|||NZPM:72
NZWB|BHE|Blenheim|Woodbourne|NZ|3
NZWD||McMurdo Station|Williams Field Skiway|AQ|2
NZWF|WKA|Wanaka||NZ|3
NZWK|WHK|Whakatāne||NZ|3
NZWL|||West Melton|NZ|1|||NZCH:11
NZWM||Waimate||NZ|1|||NZTU:55
NZWN|WLG|Wellington||NZ|4
NZWO|WIR|Wairoa||NZ|2|||NZGS:63
NZWP|||RNZAF Base Auckland-Whenuapai|NZ|2|||NZAA:29
NZWQ||Te Kao|Waitiki|NZ|1|||NZKT:73
NZWR|WRE|Whangarei||NZ|3
NZWS|WSZ|Westport||NZ|3
NZWT|WTZ|Whitianga||NZ|1|||NZGB:68
NZWU|WAG|Wanganui||NZ|3
NZWV||Island View|Waihi Beach|NZ|1|||NZTG:34
NZYP|||Waipukurau|NZ|1|||NZNR:66
OAAK||Andkhoy||AF|1|||OAMS:180
OABN|BIN|Bamyan||AF|1|||OAKB:130
OABT|BST|Lashkar Gah|Bost|AF|1|||OAKN:141
OACC|CCN|Chaghcharan||AF|1|||OAHR:281
OADS|SBF|Sardeh Band||AF|1|||OAKS:109
OADY|DWR|Reg|Dwyer|AF|1|||OAKN:175
OADZ|DAZ|Darwaz||AF|1|||UTDK:108
OAEM||Ishkashim||AF|1|||OPCH:93
OAFR|FAH|Farah||AF|1|||OAHR:205
OAFZ|FBD|Fayzabad||AF|2
OAGN|GZI|Ghazni||AF|1|||OAKS:121
OAGZ|GRG|Gardez||AF|1|||OAKS:65
OAHN|KWH|Khwahan||AF|1|||UTDK:37
OAHR|HEA|Herat|Herat - Khwaja Abdullah Ansari|AF|4|Guzara
OAIX|OAI|Bagram||AF|2|||OAKB:43
OAJG||Joghari||AF|1|||OAKS:211
OAJL|JAA|Jalalabad||AF|2|||OPPS:104
OAKB|KBL|Kabul||AF|4
OAKG||Khoja-i-Ghar||AF|1|||UTDT:98
OAKN|KDH|Kandahar|Ahmad Shah Baba|AF|4
OAKS|KHT|Khost||AF|3
OALG|||Logar|AF|1|||OAKB:67
OALL||Lal||AF|1|Sarjangal||OAMS:258
OALP||Erghail|Little Pamir|AF|1|||ZWTK:103
OAMK||Muqur||AF|1|||OAKS:188
OAMN|MMZ|Maymana|Maymana Zahiraddin Faryabi|AF|2|||OAMS:236
OAMS|MZR|Mazar-i-Sharif||AF|4
OANL||Nili||AF|1|||OAKN:250
OANZ|IMZ|Ziarat-e Amiran Saseb|Nimroz|AF|1|||OIZH:199
OAOG|URN|Urgun||AF|1|||OAKS:73
OAPJ||Panjab||AF|1|||OAKB:202
OAQA||Qalat||AF|1|||OAKN:121
OAQM||Koran va Monjan||AF|1|||OPCH:95
OAQN|LQN|Qala-i-Naw||AF|1|||OAHR:119
OARG|URZ|Orūzgān||AF|1|||OAKN:172
OART||Rostaq||AF|1|||OAFZ:60
OARZ|KUR|Skazar|Razer|AF|1|||OPCH:99
OASA|OAS|Sharana|Sharana Airstrip|AF|1|||OAKS:92
OASD|OAH|Shindand|Shindand Air Base|AF|1|||OAHR:91
OASG||Sheberghan||AF|1|||OAMS:116
OASH|OAA|Baraki Barak|Shank Air Base|AF|1|||OAKB:73
OASL|OLR|Khost|Salerno|AF|1|||OAKS:16
OASN|SGA|Shiveh|Sheghnan|AF|1|||OAFZ:97
OATN|TII|Tarinkot||AF|1|||OAKN:122
OATQ|TQN|Taleqan||AF|1|||OAFZ:96
OATW||Taywarah||AF|1|||OAHR:216
OAUZ|UND|Kunduz||AF|2|||UTDT:134
OAYL||Yakawlang||AF|1|Yakolang||OAMS:257
OAYQ||Yangi Qaleh||AF|1|||UTDK:60
OAYW||Yawan||AF|1|||OAFZ:50
OAZI|OAZ|Lashkar Gah|Camp Shorabak|AF|1|||OAKN:158
OBBI|BAH|Manama|Bahrain|BH|4
OBBS||Sitrah|Sheik Isa Air Base|BH|2|||OBBI:39
OBKH||Zallaq|Sakhir Air Base|BH|1|||OBBI:28
OEAA||Jubail|Abu Ali|SA|1|||OEDF:97
OEAB|AHB|Abha||SA|4
OEAD||Ardah|Aradah|SA|2
OEAH|HOF|Hofuf|Al-Ahsa|SA|4
OEAO|ULH|Al-Ula||SA|4
OEBA|ABT|Al-Baha|King Saud Bin Abdulaziz|SA|3|Al Baha
OEBH|BHH|Bisha||SA|3
OEBN||Thabhloten|Thablotin|SA|1
OEBQ||Buqayq|Abqaiq|SA|1|||OEDF:65
OEBT||Batha||SA|2
OEDF|DMM|Ad Dammam|King Fahd|SA|4
OEDM|DWD|Dawadmi|Dawadmi Domestic|SA|3
OEDR|DHA|Dhahran|King Abdulaziz Air Base|SA|3|||OEDF:42
OEGN|GIZ|Jizan|Jizan Regional Airport / King Abdullah bin Abdulaziz|SA|3
OEGS|ELQ|Qassim|Prince Naif bin Abdulaziz|SA|4
OEGT|URY|Gurayat|Gurayat Domestic|SA|3
OEHL|HAS|Hail||SA|4
OEHR||Harad|Haradh|SA|1|||OEAH:135
OEHW||Hawtah||SA|1|||OERK:222
OEJB||Jubail||SA|2|||OEDF:74
OEJF||Jeddah|King Faisal Naval Base|SA|2|||OEJN:37
OEJL||Jubail|King Abdulaziz Naval Base|SA|1|||OEDF:53
OEJN|JED|Jeddah|King Abdulaziz|SA|4
OEKA||Riyadh|Khashm Alan Air Base|SA|1|||OERK:44
OEKF|||King Faisal Air Academy|SA|1|||OEGS:144
OEKJ||Al Kharj||SA|1|||OERK:123
OEKK|KMC|King Khaled Military City||SA|3
OEKM|KMX|Khamis Mushait|King Khalid Air Base|SA|2|||OEAB:17
OEKN||Khurais||SA|1|||OEAH:131
OEKR||Khurais oil field|Old Khurais|SA|1|||OEAH:132
OEMA|MED|Medina|Prince Mohammad Bin Abdulaziz|SA|4
OEMD|||The Saudi Aviation Club|SA|1|SAC||OEMA:52
OENG|EAM|Najran|Najran Domestic|SA|3
OENN|NUM|Neom|Neom Bay|SA|4|Sharma
OENR||Nariya||SA|1|||OEDF:172
OEOM||Umm Al Melh|Umm Al Melh Border Guards|SA|1
OEPA|AQI|Qaisumah|Qaisumah–Hafar Al-Batin|SA|4
OEPC||Wasea|Pump Station 3|SA|1|||OERK:83
OEPF|||Pump Station 6|SA|1|||OEDM:90
OEPI|||Pump Station 9|SA|1|||OEDM:201
OEPJ|||Pump Station 10|SA|1|||OEMA:144
OEPK||Hafar al Batin|IPSA 3|SA|1|||OEPA:74
OEPS|AKH|Al Kharj|Prince Sultan Air Base|SA|2||OEKH|OERK:134
OERB||Rabigh||SA|1|||OEJN:114
OERF|RAH|Rafha|Rafha Domestic|SA|3
OERG||Al-Rass||SA|1|||OEGS:74
OERK|RUH|Riyadh|King Khalid|SA|4
OERM||Al Mishab|Ras Mishab|SA|2|||OKKK:142
OERR|RAE|Arar|Arar Domestic|SA|3
OERS|RSI|Hanak|Red Sea|SA|4
OERT||Ras Tanura||SA|2|||OEDF:37
OESB||Shaybah|Shaibah|SA|1|||OMAA:225
OESH|SHW|Sharurah|Sharurah Domestic|SA|3
OESK|AJF|Al-Jawf||SA|4
OESL|SLF|As-Sulayyil||SA|1|||OEWD:44
OESN||Riyadh|King Salman Air Base|SA|2||OERY|OERK:55
OESS||Al Ghat|Soltana Al-Ghat|SA|1|||OEGS:115
OEST||Shubaytah||SA|1|||OMDL:222
OETB|TUU|Tabuk|Prince Sultan bin Abdulaziz|SA|4
OETF|TIF|Taif||SA|4
OETH|||Thumamah|SA|1|||OERK:29
OETN||As Saffaniyah|Ras Tanajib|SA|2|||OKKK:170
OETR|TUI|Turaif|Turaif Domestic|SA|3
OEUD||Udhailiyah||SA|1|||OEAH:22
OEUM||Umm Lejj|Ummlejj|SA|1|||OERS:40
OEWD|WAE|Wadi Al Dawasir|Wadi Al Dawasir Domestic|SA|3
OEWJ|EJH|Al Wajh|Al Wajh Domestic|SA|3
OEYN|YNB|Yanbu|Prince Abdulmohsen Bin Abdulaziz|SA|4
OEZL|ZUL|Zilfi||SA|1|||OEGS:106
OIAA|ABD|Abadan|Abadan Ayatollah Jami|IR|4
OIAD|DEF|Dezful||IR|3
OIAG|AKW|Omidiyeh|Aghajari|IR|2|||OIAM:54
OIAH|GCH|Gachsaran||IR|3
OIAI|QMJ|Masjed Soleyman|Shahid Asiyaee|IR|2|||OIAW:88
OIAJ|OMI|Omidiyeh||IR|1|||OIAM:48
OIAM|MRX|Mahshahr||IR|3
OIAW|AWZ|Ahvaz|Qasem Soleimani|IR|4
OIBA|AEU|Abu Musa|Abu Musa Island|IR|3
OIBB|BUZ|Bushehr||IR|3
OIBH|IAQ|Imam Hassan|Bahregan|IR|1|||OIBQ:65
OIBJ|KNR|Jam||IR|2||OIBM|OIBP:62
OIBK|KIH|Kish Island|Kish|IR|4
OIBL|BDH|Bandar Lengeh||IR|3
OIBP|PGU|Khiyaroo|Persian Gulf|IR|3
OIBQ|KHK|Khark||IR|3
OIBS|SXI|Siri||IR|2|||OIBA:50
OIBV|LVP|Lavan Airport|Lavan|IR|2|||OISR:65
OIBX||Tonb-e Bozorg||IR|1|||OIBA:51
OICB||Baneh||IR|1|||ORSJ:68
OICC|KSH|Kermanshah|Shahid Ashrafi Esfahani|IR|3
OICD||Abdanan||IR|1|||OICK:93
OICI|IIL|Ilam||IR|2|||OICC:109
OICK|KHD||Khoram Abad|IR|3
OICS|SDG||Sanandaj|IR|3
OICZ|||Aligoodarz|IR|1|||OICK:131
OIFE|IFH|Hesa||IR|1|||OIFM:36
OIFH||Esfahan|Shahid Vatanpour Army Air Base|IR|1|||OIFM:28
OIFK|KKS|Kashan||IR|3
OIFM|IFN|Isfahan|Isfahan Shahid Beheshti|IR|4
OIFP||Esfahan|Badr Air Base|IR|2|||OIFM:23
OIFS|CQD|Shahrekord||IR|2|||OIFM:110
OIFV||Zarrinshahr||IR|1|||OIFM:67
OIGG|RAS|Rasht|Sardar-e-Jangal|IR|3
OIHH|HDM|Hamadan||IR|3
OIHM||Malayer||IR|1|||OIHH:69
OIHR|AJK|Araak|Arak|IR|1|||OIHH:143
OIHS|NUJ|Amirabad|Nojeh Air Base|IR|2|||OIHH:39
OIIA||Gharpuz Abad|Qazvin Azadi|IR|1|||OIIP:39
OIIB||Eyvanekey|Eyvanekey Aflak-e-Asia|IR|1|||OIII:71
OIIC||Qāshqābolāq|Manzariyeh Air Base|IR|1|||OIIE:57
OIID||Tehran|Doshan Tappeh Air Base|IR|1|||OIII:15
OIIE|IKA|Tehran|Imam Khomeini|IR|4
OIIF||Fardis|Fath|IR|1|||OIIP:12
OIII|THR|Tehran|Mehrabad|IR|4
OIIK|GZW|Qazvin||IR|2|||OIIP:87
OIIM||Karaj|Naja|IR|1|||OIIP:5
OIIP|PYK|Karaj|Payam|IR|4
OIIR||Firuzabad|Shahid Aryafar|IR|1|||OIII:25
OIIS|SNX|Semnan|Semnan Municipal|IR|2
OIKB|BND|Bandar Abbas||IR|4
OIKJ|JYR|Jiroft||IR|2|||OIKM:85
OIKK|KER|Kerman|Ayatollah Hashemi Rafsanjani|IR|4
OIKM|BXR|Bam||IR|3
OIKP|HDR|Bandar Abbas|Havadarya|IR|1|||OIKB:21
OIKQ|GSM|Qeshm||IR|4|Qeshm(Dayrestan)
OIKR|RJN|Rafsanjan||IR|3
OIKY|SYJ|Sirjan||IR|2|||OIKR:91
OIMB|XBJ|Birjand||IR|4
OIMC|CKT|Sarakhs||IR|2|||OIMM:131
OIMD||Gonabad||IR|1|||OIMB:171
OIMH||Torbat-E-Heidarieh|Torbat-e Heydarieh|IR|1|||OIMM:114
OIMJ|RUD|Shahrud||IR|1|||OIIS:172
OIMK||Birjand|Birjand/Khor|IR|1|||OIMB:80
OIMM|MHD|Mashhad||IR|4
OIMN|BJB|Bojnord||IR|3
OIMQ||Kashmar|Kashmar Ultralight|IR|1|||OIMS:131
OIMS|AFZ|Sabzevar|Sabzevar National|IR|3
OIMT|TCX|Tabas||IR|2|||OIMB:238
OIMX||Soga||IR|1|||OIMN:101
OINE|KLM|Kalaleh||IR|1|||OIMN:164
OING|GBT|Gorgan||IR|2|||OINZ:112
OINJ|BSM|Amol|Bishe Kola Air Base|IR|1|||OINZ:75
OINM||Mahmood Abad||IR|1|||OIFK:39
OINN|NSH|Nowshahr||IR|3
OINR|RZR|Ramsar||IR|3
OINZ|SRY|Sari|Sari Dasht-e Naz|IR|3
OISA||Abadeh||IR|1|||OISS:167
OISD||Bargan|Darab|IR|1|||OISL:117
OISF|FAZ|Fasa||IR|2|||OISS:131
OISJ|JAR|Jahrom||IR|1|||OISL:128
OISL|LRR|Lar||IR|3
OISO||Zarqan||IR|1|||OISS:26
OISR|LFM|Lamerd||IR|3
OISS|SYZ|Shiraz|Shiraz Shahid Dastghaib|IR|4
OISY|YES|Yasuj||IR|2|||OIAH:79
OITH|KHA|Khaneh||IR|1|||OITR:105
OITK|KHY|Khoy||IR|1|||OITR:85
OITL|ADU|Ardabil||IR|3
OITM|ACP|Maragheh|Sahand|IR|1|||OITT:88
OITP|PFQ|Parsabad|Parsabad-Moghan|IR|2
OITR|OMH|Urmia||IR|3
OITS||Saghez||IR|1|||ORSJ:115
OITT|TBZ|Tabriz||IR|4
OITU|IMQ|Showt|Maku National|IR|2|||UBBN:46
OITZ|JWN|Zanjan||IR|2|||OIGG:127
OIYR||Fahraj|Imam Reza|IR|1|||OIYY:37
OIYY|AZD|Yazd|Shahid Sadooghi|IR|3
OIZB|ACZ|Zabol||IR|2|||OIZH:191
OIZC|ZBR|Konarak|Chabahar Konarak|IR|3
OIZH|ZAH|Zahedan||IR|4
OIZI|IHR|Iranshahr||IR|2|||OIZC:202
OIZJ|JSK|Bandar-e-Jask|Jask|IR|2
OIZS||Saravan||IR|1|||OPTU:175
OJAI|AMM|Amman|Queen Alia|JO|4
OJAM|ADJ|Amman|Marka International|JO|4|Amman Civil
OJAQ|AQJ|Aqaba|King Hussein|JO|4
OJHR|||H4 Air Base|JO|1|||OETR:107
OJKF||Al-Jafr|King Feisal Air Base|JO|2|||LLER:129
OJMF|OMF|Mafraq|King Hussein Air College|JO|1|||OJAM:50
OJMS||Al Azraq|Muwaffaq Salti Air Base|JO|2|||OEGT:66
OJPH|||Prince Hassan Air Base|JO|1||OJHF|OEGT:84
OKAJ|XIJ|Ahmed Al Jaber AB|Ahmed Al Jaber Air Base|KW|2|||OKKK:37
OKAS||Al Damaikhi|Ali Al Salem Air Base|KW|2|||OKKK:46
OKDI||Camp Buehring|Udairi Army Air Field|KW|1|||OKKK:74
OKKK|KWI|Kuwait City|Kuwait|KW|4||OKBK
OLBA|BEY|Beirut|Beirut Rafic Hariri|LB|4
OLKA|KYE|Tripoli|Rene Mouawad Air Base|LB|2|||OSLK:90
OLRA||Rayak|Rayak Air Base|LB|2|||OLBA:46
OMAA|AUH|Abu Dhabi|Zayed|AE|4
OMAB|||Buhasa|AE|1|||OMDL:147
OMAD|AZI|Abu Dhabi|Al Bateen Executive|AE|3|||OMAA:19
OMAF||Al Futaisi|Futaysi|AE|1|||OMAA:34
OMAG|||KIZAD|AE|1|||OMAA:37
OMAH||Al Shuweihat|Al Hamra Auxiliary|AE|1|||OMDL:50
OMAJ||Jebel Dhanna||AE|1|||OMDL:46
OMAL|AAN|Al Ain||AE|4
OMAM|DHF||Al Dhafra Air Base|AE|2|||OMAA:24
OMAQ||Qarnayn Island|Qarnayn|AE|1|||OMDL:70
OMAR||Arzanah Island|Arzanah|AE|1|||OMDL:38
OMAS||Das Island||AE|1|||OMDL:89
OMAW||Abu Dhabi|Abu Dhabi Northeast Airport - Suweihan Air Base|AE|1|||OMAA:34
OMAY||Al-Yasat|Lower Yasat Island|AE|1|||OMDL:50
OMAZ||Zirku Island|Zirku|AE|1|||OMDL:85
OMBY|XSB|Sir Bani Yas||AE|2|||OMDL:35
OMDB|DXB|Dubai||AE|4
OMDL|ZDY|Delma Island|Delma|AE|2
OMDM|NHD|Dubai|Al Minhad Air Base|AE|2|||OMDB:25
OMDW|DWC|Dubai|Al Maktoum|AE|4|Dubai(Jebel Ali)
OMEF||Al Ain|Emirates Falcons Aeroclub|AE|1|||OMAL:23
OMFJ|FJR|Fujairah||AE|4
OMLW||Zayed City|Liwa Air Base|AE|1|||OMAA:121
OMNK||Sas Al Nakheel|Sas Al Nakheel Air Base|AE|2|||OMAA:13
OMQF||Al Qaffay||AE|1|||OMDL:62
OMRJ|||Jazirah|AE|1|||OMRK:17
OMRK|RKT|Ras Al Khaimah||AE|4
OMRS||Al Duhaisah|Al Saqr Field|AE|1|||OMRK:16
OMSJ|SHJ|Sharjah||AE|4
OMSN||Sir Abu Nu'ayr||AE|1|||OMAA:96
OOBB||Ramlat Bū Tubūl|Butabul|OM|1|||OODQ:293
OOBR|RMB|Buraimi||OM|1|||OMAL:18
OODQ|DQM|Duqm||OM|4
OOFD|FAU|Fahud||OM|1|||OOSH:226
OOGB|RNM|Ghaba|Qarn Alam|OM|1|||OODQ:217
OOHA||Haima||OM|1|||OODQ:151
OOIA||Ibra||OM|1|||OOMS:99
OOII||Ibri||OM|1|||OOSH:135
OOIZ||Izki|Izki Air Base|OM|1|||OOMS:95
OOJA|JNJ|Duqm|Ja'Aluni|OM|1|||OODQ:34
OOKB|KHS|Khasab||OM|3
OOLK|LKW|Lekhwair||OM|1|||OMAL:164
OOMA|MSH|Masirah|RAFO Masirah|OM|2|||OODQ:185
OOMK|UKH|Mukhaizna Oil Field|Mukhaizna|OM|1|||OODQ:130
OOMN|MNH|Al Masna'ah|Mussanah|OM|2||OORQ|OOMS:81
OOMS|MCT|Muscat/Seeb|Muscat|OM|4
OOMX|OMM|Marmul||OM|1|||OOSA:168
OORH||Ras ar Ruays|Ras al Hadd|OM|2|||OOMS:211
OOSA|SLL|Salalah||OM|4
OOSH|OHS|Suhar||OM|4
OOSQ||Saiq||OM|1|||OOMS:88
OOTH|TTH|Thumrait|Thumrait Air Base|OM|2|||OOSA:70
OOYB||Yibal||OM|1|||OMAL:233
OPBG|BHW|Bhagatanwala||PK|1|||OPFA:77
OPBL||Khan Bela|Bela|PK|1|||OPBW:60
OPBR|WGB|Bahawalnagar||PK|1|||OPFA:160
OPBT||Jam Nida|Jam Nida Northwest|PK|1|||OPNH:88
OPBW|BHV|Bahawalpur||PK|3
OPCH|CJL|Chitral||PK|3
OPCL|CHB|Chilas||PK|1|||OPGT:59
OPCT||Nowshera|Chirat|PK|1|||OPPS:41
OPDB|DBA|Dalbandin||PK|2||OPXX
OPDG|DEA|Dera Ghazi Khan||PK|3
OPDI|DSK|Dera Ismael Khan|Dera Ismael Khan Airport [IN-ACTIVE]|PK|2|||OPZB:149
OPDK||Daharki||PK|1|||OPRK:58
OPFA|LYP|Faisalabad||PK|4||OPLF
OPGT|GIL|Gilgit||PK|3
OPGW|GWD|Gwadar|New Gwadar|PK|4|Gurandani|OPGD
OPIS|ISB|Islamabad||PK|4|Attock
OPJA|JAG|Jacobabad|Shahbaz Air Base|PK|2|||OPSK:71
OPKA||Cape Monz||PK|1|||OPKC:51
OPKC|KHI|Karachi|Jinnah|PK|4||OPQR OPHQ
OPKD|HDD|Hyderabad||PK|2
OPKE||Chore||PK|1|||OPKD:143
OPKF||Gharo||PK|1|||OPKC:47
OPKH|KDD|Khuzdar||PK|2
OPKT|OHT|Kohat||PK|1|||OPPS:48
OPKW|KCF|Kandanwari|Thar|PK|1|||OPSK:68
OPLA|LHE|Lahore|Allama Iqbal|PK|4||OPLR
OPLL|LRG|Loralai||PK|1|||OPZB:138
OPMA|XJM|Mangla||PK|2|||OPST:89
OPMF|MFG|Muzaffarabad||PK|2
OPMI|MWD|Mianwali|Mianwali Air Base|PK|2|||OPPS:159
OPMJ|MJD|Moenjodaro||PK|2|||OPSK:77
OPMK||Mirpur Khas|Mirpur Khas Air Base|PK|1|||OPKD:82
OPMN||Miram Shah||PK|1|||OAKS:38
OPMP|MPD|Sindhri|Sindhri Tharparkar|PK|1|||OPKD:82
OPMR||Karachi|Masroor Air Base|PK|2|||OPKC:22
OPMS|ATG|Kamra|Minhas Air Base|PK|2|||OPIS:53
OPMT|MUX|Multan||PK|4
OPNH|WNS|Nawabashah|Shaheed Benazirabad|PK|3
OPOK||Okara|Okara Cantonment Airstrip|PK|1|||OPFA:77
OPOR|ORW|Ormara Raik|Ormara|PK|1||OPOP|OPTU:175
OPPC|PAJ|Parachinar||PK|1|||OAKS:73
OPPG|PJG|Panjgur||PK|2|||OPTU:154
OPPI|PSI|Pasni||PK|2|||OPTU:83
OPPN||Pishin||PK|1|||OPQT:34
OPPS|PEW|Peshawar|Bacha Khan|PK|4
OPQS||Rawalpindi|Dhamial Army Airbase|PK|1|||OPIS:19
OPQT|UET|Quetta||PK|4
OPRK|RYK|Rahim Yar Khan|Shaikh Zaid|PK|3
OPRN||Rawalpindi|PAF Base Nur Khan|PK|2|Benazir Bhutto International Airport||OPIS:26
OPRQ||Shorkot|Rafiqui Air Base|PK|2|||OPFA:96
OPRS||Risalpur|Risalpur Air Base|PK|2|||OPPS:43
OPRT|RAZ|Rawalakot||PK|2|||OPMF:61
OPSB|SBQ|Sibi||PK|1|||OPQT:116
OPSD|KDU|Skardu||PK|4
OPSF||Karachi|Faisal Air Base|PK|2|||OPKC:6
OPSK|SKZ|Sukkur|Begum Nusrat Bhutto International Airport Sukkur|PK|3
OPSN|SYW|Sehwan Sharif||PK|2|||OPNH:73
OPSR|SGI|Sargodha|Mushaf Air Base|PK|2|||OPFA:82
OPSS|SDT|Saidu Sharif||PK|2|||OPMF:118
OPST|SKT|Sialkot||PK|4
OPSU|SUL|Sui||PK|2|||OPSK:109
OPSW|RZS|Sawan Gas Field|Sawan|PK|1|||OPSK:84
OPTA|TLB|Tarbela|Tarbela Dam|PK|1|||OPIS:52
OPTH|BDN|Badin|Talhar|PK|1|||OPKD:71
OPTT|TFT|Taftan||PK|1|||OIZH:88
OPTU|TUK|Turbat||PK|4
OPWN|WAF|Waana|Wana|PK|1|||OPZB:106
OPZB|PZH|Fort Sandeman|Zhob|PK|3
ORAA|IQA|Hīt|Al Asad Air Base|IQ|2|||ORBI:176
ORAI||Al Iskandariyah||IQ|1|||ORBI:33
ORAN||An Numaniyah|An Numaniyah Air Base|IQ|1|||ORNI:104
ORAT|TQD|Al Habbaniyah|Al Taqaddum Air Base|IQ|2|||ORBI:60
ORBB|BMN|Bamarni||IQ|1|||LTCW:99
ORBD||Al Bakr|Balad Southeast Airport / Joint Base Balad|IQ|2|||ORBI:76
ORBI|BGW|Baghdad|Baghdad International Airport / New Al Muthana Air Base|IQ|4||ORBS
ORBM|OSM|Mosul||IQ|3|||ORER:72
ORBR||Bashur||IQ|1|||ORER:48
ORER|EBL|Arbil|Erbil|IQ|4
ORJA||Jalibah|Jalibah Southeast Air Base|IQ|2|||ORMM:101
ORKK|KIK|Kirkuk||IQ|4
ORMM|BSR|Basra||IQ|4
ORNI|NJF|Najaf|Al Najaf|IQ|4
ORQT||Baghdad|Qasr Tall Mihl|IQ|1|||ORBI:5
ORQW|RQW|Qayyarah|Qayyarah West|IQ|2|||ORER:90
ORSH||Tikrit|Al Sahra Army Air Field|IQ|2|||ORKK:115
ORSJ|ISU|Sulaymaniyah|Jalal Talabani|IQ|3||ORSU
ORTF||Tall Afar|Tall Afar Army Air Field|IQ|2|||LTCV:124
ORTI||Taji|Al Taji Army Air Field|IQ|2|||ORBI:29
ORTK||Tikrit|Tikrit East|IQ|1|||ORKK:109
ORTL|XNH|Nasiriyah|Ali Air Base|IQ|2|||ORMM:156
ORTS||Tikrit|Tikrit South|IQ|1|||ORKK:121
ORUB||Al Kut|Ubaydah Bin Al Jarrah|IQ|2|||ORNI:138
OSAP|ALP|Aleppo||SY|4
OSDI|DAM|Damascus||SY|4
OSDZ|DEZ|Deir ez-Zor||SY|2|||OSKL:213
OSKL|KAC|Qamishli||SY|3
OSLK|LTK|Latakia||SY|3
OSPR|PMS|Tadmur|Palmyra|SY|2|||OSAP:206
OTBD|DIA|Doha||QA|4|||OTHH:5
OTBH|XJD|Ar Rayyan|Al Udeid Air Base|QA|2|||OTHH:34
OTHH|DOH|Doha|Hamad|QA|4
OYAA|ADE|Aden||YE|4
OYAT|AXK|Ataq||YE|2|||OYSY:263
OYBA||Dhula'|Al Badie|YE|1
OYBD|BYD|Al-Bayda||YE|1||OYBI|OYTZ:148
OYBN|BHN|Beihan||YE|1|||OYSN:179
OYBQ|BUK|Al-Bough||YE|1|||OENG:36
OYBS|EAB|Abs||YE|1||OYAB|OEGN:117
OYGD|AAY|Al Ghaydah||YE|3
OYHD||Hodeida||YE|2|||OYSN:156
OYKM|KAM|Kamaran||YE|1|||OEGN:170
OYMB|MYN|Marib||YE|1|||OYSN:119
OYMS|UKR|Mukayras|Mukeiras|YE|1||OYMK|OYAA:141
OYQN|IHN|Qishn||YE|1|||OYGD:101
OYRN|RIY|Mukalla|Riyan|YE|4|Mukalla(Riyan)
OYRT||Barat||YE|1|||OENG:98
OYSF||As Salif||YE|1|||OYSN:166
OYSH|SYE|Sa'dah|Sadah|YE|1|||OENG:103
OYSN|SAH|Sanaa||YE|4
OYSQ|SCT|Mori|Socotra|YE|3
OYSY|GXF|Seiyun|Seiyun Hadhramaut|YE|4
OYTZ|TAI|Taiz||YE|3
OYZM||Al-Hazm||YE|1|||OYSN:102
OZKL|||Koralta Station Airpirt|AU|1|||YBHI:88
PAAD||Deadhorse|Point Thomson Airstrip|US|1|||PASC:82
PAAK|AKB|Atka||US|2
PAAL|PML|Cold Bay|Port Moller|US|1|||PAOU:37
PAAM||Dutch Harbor|Driftwood Bay Air Force Station|US|1|||PADU:22
PAAN||Fairbanks|Gold King Creek|US|1|||PAFA:69
PAAP|PTD|Port Alexander|Port Alexander Seaplane Base|US|2
PAAQ|PAQ|Palmer|Warren "Bud" Woods Palmer Municipal|US|2|||PAMR:58
PAAT|ATU|Attu|Casco Cove Coast Guard Station|US|1
PABA|BTI|Barter Island|Barter Island Long Range Radar Station|US|3
PABE|BET|Bethel||US|3
PABG|BVU|Beluga||US|1|||PANC:56
PABI|BIG|Delta Junction Ft Greely|Allen Army|US|2|||PAFA:137
PABL|BKC|Buckland||US|2
PABM|BMX|Big Mountain||US|1|||PFKK:27
PABN||Nabesna|Devils Mountain Lodge|US|1|||PAOR:83
PABP||Deadhorse|Badami|US|1|||PASC:55
PABR|BRW|Utqiaġvik|Wiley Post Will Rogers Memorial|US|3
PABT|BTT|Bettles||US|2
PABU||Kaktovik|Bullen Point Short Range Radar Station|US|1|||PASC:61
PABV||Birchwood||US|2|||PAMR:29
PACD|CDB|Cold Bay||US|3
PACE|CEM|Central||US|2
PACH|CHU|Chuathbaluk||US|2
PACI|CIK|Chalkyitsik||US|2
PACJ|CKD|Crooked Creek||US|2
PACK|CYF|Chefornak||US|2
PACL||Clear||US|2|||PAFA:83
PACM|SCM|Scammon Bay||US|2
PACR|IRC|Circle|Circle City|US|2|New
PACS|WSF|Cape Sarichef||US|1|||PAUT:67
PACV|CDV|Cordova|Merle K Smith|US|3|Mudhole
PACX|CXF|Coldfoot||US|1|||PABT:69
PACY|CYT|Yakataga||US|2
PACZ|CZF|Cape Romanzof|Cape Romanzof LRRS|US|2|||PACM:25
PADE|DRG|Deering||US|3
PADG|RDB|Red Dog||US|1||PARD|PAWN:52
PADK|ADK|Adak||US|3
PADL|DLG|Dillingham||US|3
PADM|MLL|Marshall|Marshall Don Hunter Sr|US|2
PADQ|ADQ|Kodiak||US|3
PADT||Slana|Duffys Tavern|US|1|||PFTO:83
PADU|DUT|Unalaska|Tom Madsen|US|3|Dutch Harbor
PADY|KKH|Kongiganak||US|2
PAED|EDF|Anchorage|Elmendorf Air Force Base|US|2|||PAMR:5
PAEE|EEK|Eek||US|2
PAEG|EAA|Eagle||US|2
PAEH|EHM|Cape Newenham|Cape Newenham LRRS|US|2|||PAPM:43
PAEI|EIL|Fairbanks|Eielson Air Force Base|US|2|||PAFA:39
PAEL|ELV|Elfin Cove|Elfin Cove Seaplane Base|US|2
PAEM|EMK|Emmonak||US|3
PAEN|ENA|Kenai|Kenai Municipal|US|3
PAEW|WWT|Mertarvik||US|2
PAFA|FAI|Fairbanks||US|3
PAFB|FBK|Fairbanks|Ladd Army|US|2|||PAFA:12
PAFE||Kake||US|2|||PAPG:61
PAFL||Farewell Lake|Tin Creek|US|1|||PAFS:66
PAFM|ABL|Ambler||US|3
PAFR|FRN|Fort Richardson|Bryant Army|US|1|||PAMR:12
PAFS|NIB|Nikolai||US|2
PAFT|FLT|Flat||US|1|||PACJ:65
PAGA|GAL|Galena|Edward G. Pitka Sr|US|3
PAGB|GBH|Galbraith Lake||US|1|||PAKP:100
PAGG|KWK|Kwigillingok||US|2
PAGH|SHG|Shungnak||US|2
PAGK|GKN|Gulkana||US|3
PAGL|GLV|Golovin||US|2
PAGM|GAM|Gambell||US|3
PAGN|AGN|Angoon|Angoon Seaplane Base|US|2
PAGQ|BGQ|Big Lake||US|1|||PAMR:36
PAGS|GST|Gustavus||US|3
PAGT|NME|Nightmute||US|2
PAGX|KGX|Grayling||US|2
PAGY|SGY|Skagway||US|2
PAGZ|GMT|Granite Mountain|Granite Mountain Air Station|US|1|||PAKK:52
PAHC|HCR|Holy Cross||US|3
PAHE|||Healy|US|1|||PAML:15
PAHL|HSL|Huslia||US|3
PAHN|HNS|Haines||US|3
PAHO|HOM|Homer||US|3
PAHP|HPB|Hooper Bay||US|2
PAHU|HUS|Hughes||US|2
PAHV||Healy|Healy River|US|1|||PAFA:118
PAHX|SHX|Shageluk||US|1|||PANV:32
PAHY|HYG|Hydaburg|Hydaburg Seaplane Base|US|2
PAIG|IGG|Igiugig||US|2
PAII|EGX|Egegik||US|3
PAIK|IAN|Kiana|Bob Baker Memorial|US|3
PAIL|ILI|Iliamna||US|3
PAIM|UTO|Utopia Creek|Indian Mountain LRRS|US|3
PAIN|MCL|Denali Park|Denali National Park|US|1|||PAFA:131
PAIW|WAA|Wales||US|2
PAJC|KCG|Chignik||US|2
PAJN|JNU|Juneau||US|3
PAJO||Hinchinbrook|Johnstone Point|US|1|||PAKA:44
PAJZ|KGK|Koliganek||US|2
PAKA|TEK|Tatitlek||US|2
PAKC|KCC|Coffman Cove|Coffman Cove Seaplane Base|US|2
PAKD|KDK|Kodiak|Kodiak Municipal|US|1|||PADQ:9
PAKF|KFP|False Pass||US|2
PAKH|AKK|Akhiok||US|2
PAKI|KPN|Kipnuk||US|2
PAKK|KKA|Koyuk|Koyuk Alfred Adams|US|2
PAKL|LKK|Kulik Lake||US|1|||PFKK:53
PAKN|AKN|King Salmon||US|3
PAKO|IKO|Nikolski|Nikolski Air Station|US|2
PAKP|AKP|Anaktuvuk Pass||US|3
PAKT|KTN|Ketchikan||US|3
PAKU|UUK|Kuparuk|Ugnu-Kuparuk|US|1|||PASC:45
PAKV|KAL|Kaltag||US|2
PAKW|KLW|Klawock||US|3
PAKX||Port Alsworth|Wilder/Natwick LLC|US|1|||PALJ:1
PAKY|KYK|Karluk||US|2
PALB|KLN|Larsen Bay||US|2
PALG|KLG|Kalskag||US|2
PALJ|PTA|Port Alsworth||US|2
PALN|LNI|Point Lonely|Point Lonely Short Range Radar Site|US|1|||PAQT:114
PALP||Nuiqsut|Alpine Airstrip|US|1|||PAQT:15
PALR|WCR|Chandalar Lake||US|1|||PAVE:106
PALT|TLT|Tuluksak||US|2
PALU|LUR|Cape Lisburne|Cape Lisburne LRRS|US|3
PAMB|KMO|Manokotak||US|2
PAMC|MCG|McGrath||US|3
PAMD|MDO|Middleton Island||US|1|||PFCB:117
PAMH|LMA|Minchumina||US|2
PAMK|SMK|St Michael||US|2
PAML|MLY|Manley Hot Springs||US|2
PAMM|MTM|Metlakatla|Metlakatla Seaplane Base|US|2
PAMO|MOU|Mountain Village||US|2
PAMR|MRI|Anchorage|Merrill Field|US|3
PAMX|MXY|Mccarthy|Mc Carthy|US|1|||KMYK:16
PAMY|MYU|Mekoryuk||US|3
PANA|WNA|Napakiak||US|2
PANC|ANC|Anchorage|Ted Stevens Anchorage|US|4
PANI|ANI|Aniak||US|3
PANN|ENN|Nenana|Nenana Municipal|US|2|||PAFA:65
PANO|NNL|Nondalton||US|1|||PAIL:25
PANR|FNR|Funter Bay|Funter Bay Seaplane Base|US|2
PANT|ANN|Metlakatla|Annette Island|US|2|||PAKT:36
PANU|NUL|Nulato||US|2
PANV|ANV|Anvik||US|3
PANW|KNW|New Stuyahok||US|2
PAOB|OBU|Kobuk||US|2
PAOC|PCA|Portage Creek||US|1|||PFWS:47
PAOH|HNH|Hoonah||US|2
PAOM|OME|Nome||US|3
PAOO|OOK|Toksook Bay||US|2
PAOR|ORT|Northway||US|3
PAOT|OTZ|Kotzebue|Ralph Wien Memorial|US|3
PAOU|NLG|Nelson Lagoon||US|2
PAPB|STG|St George||US|3
PAPC|KPC|Port Clarence|Port Clarence Coast Guard Station|US|2|||PFKT:20
PAPE|KPV|Perryville||US|2
PAPG|PSG|Petersburg|Petersburg James A Johnson|US|3
PAPH|PTH|Port Heiden||US|3
PAPK|PKA|Napaskiak||US|2
PAPM|PTU|Platinum||US|3
PAPN|PIP|Pilot Point||US|2
PAPO|PHO|Point Hope||US|2
PAPR|PPC|Prospect Creek||US|1|||PABT:40
PAQH|KWN|Quinhagak||US|2
PAQT|NUI|Nuiqsut||US|3
PARC|ARC|Arctic Village||US|3
PARS|RSH|Russian Mission||US|2
PARY|RBY|Ruby||US|3
PASA|SVA|Savoonga||US|3
PASC|SCC|Deadhorse||US|3
PASD|SDP|Sand Point||US|3
PASH|SHH|Shishmaref||US|2
PASI|SIT|Sitka|Sitka Rocky Gutierrez|US|3
PASK|WLK|Selawik||US|2
PASL|SLQ|Sleetmute||US|2
PASM|KSM|St Mary's||US|2
PASN|SNP|St Paul Island||US|3
PASO|SOV|Seldovia||US|2
PASP|SMU|Sheep Mountain||US|1|||PAVD:101
PAST|UMM|Cantwell|Summit|US|1|||PAMH:169
PASV|SVW|Sparrevohn|Sparrevohn LRRS|US|2|||SRV:94
PASW|SKW|Skwentna||US|1|||PANC:108
PASX|SXQ|Soldotna||US|2|||PAEN:16
PASY|SYA|Shemya|Eareckson Air Station|US|2
PATA|TAL|Tanana|Ralph M Calhoun Memorial|US|2
PATC|TNC|Tin City|Tin City Long Range Radar Station|US|2
PATE|TLA|Teller||US|2
PATG|TOG|Togiak Village|Togiak|US|2
PATK|TKA|Talkeetna||US|2|||PAMR:124
PATL|TLJ|Takotna|Tatalina LRRS|US|2|||PPCT:11
PATM||Taylor Mountain Mine|Taylor Mountain|US|1|||PASL:93
PATQ|ATK|Atqasuk|Atqasuk Edward Burnell Sr Memorial|US|3
PATW||Cantwell||US|1|||PAFA:167
PAUK|AUK|Alakanuk||US|2
PAUM|UMT|Umiat||US|1|||PAQT:103
PAUN|UNK|Unalakleet||US|3
PAUO|WOW|Willow||US|1|||PAMR:61
PAUT|KQA|Akutan||US|2
PAVA|VAK|Chevak||US|2
PAVC|KVC|King Cove||US|2
PAVD|VDZ|Valdez|Valdez Pioneer Field|US|3
PAVE|VEE|Venetie||US|2
PAVL|KVL|Kivalina||US|2
PAWB|WBQ|Beaver||US|2
PAWD|SWD|Seward||US|2|||PFCB:79
PAWG|WRG|Wrangell||US|3
PAWI|AIN|Wainwright||US|3
PAWM|WMO|White Mountain||US|2
PAWN|WTK|Noatak||US|2
PAWR||Whittier||US|1|||PAMR:78
PAWS|WWA|Wasilla||US|2|||PAMR:43
PAWT||Wainwright|Wainwright Air Station|US|1|||PAWI:6
PAXK||Paxson||US|1|||PAGK:97
PAYA|YAK|Yakutat||US|3
PCIS|CIS|Abariringa|Canton Island|KI|2
PFAK|AKI|Akiak||US|2
PFAL|AET|Allakaket||US|2
PFCB|NCN|Chenega|Chenega Bay|US|2
PFCL|CLP|Clarks Point||US|2
PFCR||Crooked Creek|Donlin Creek|US|1|||PACJ:19
PFEL|ELI|Elim||US|2
PFKA|KUK|Kasigluk||US|2
PFKK|KNK|Kokhanok||US|2
PFKO|KOT|Kotlik||US|2
PFKT|KTS|Brevig Mission||US|2
PFKU|KYU|Koyukuk||US|2
PFKW|KWT|Kwethluk||US|2
PFME||Mertarvik|Mertarvik Quarry Road Landing Strip|US|1|||PAEW:1
PFMP|RMP|Rampart||US|2
PFNO|ORV|Noorvik|Robert Curtis Memorial|US|2|Bob
PFSH|SKK|Shaktoolik||US|2
PFSV|SVS|Stevens Village||US|2
PFTO|TKJ|Tok|Tok Junction|US|2
PFWS|WSN|South Naknek|South Naknek Number 2|US|2
PFYU|FYU|Fort Yukon||US|3
PFZK|KKI|Akiachak||US|2
PGRO|ROP|Rota Island|Rota|MP|4
PGSN|SPN|I Fadang|Saipan|MP|3|I Fadang, Saipan
PGUA|UAM|Yigo|Andersen Air Force Base|GU|2|||PGUM:18
PGUM|GUM|Hagåtña|Antonio B. Won Pat|GU|4
PGWT|TIQ|Tinian Island|Francisco Manglona Borja / Tinian|MP|3
PHBK|BKH|Kekaha|Barking Sands|US|2|||PHLI:46
PHDH|HDH|Mokuleia|Kawaihapai|US|1|||PHNL:40
PHHF||Tern Island|French Frigate Shoals|US|1
PHHI|HHI|Wahiawa|Wheeler Army|US|1|||PHNL:22
PHHN|HNM|Hana||US|3
PHIK||Honolulu|Hickam Air Force Base|US|2|||PHNL:3
PHJH|JHM|Lahaina|Kapalua|US|3
PHJR|JRF|Kapolei|Kalaeloa|US|2|||PHNL:15
PHKO|KOA|Kailua-Kona|Ellison Onizuka Kona International Airport at Keāhole|US|4
PHLI|LIH|Lihue||US|4|Lihue, Kauai
PHLU|LUP|Kalaupapa||US|2
PHMK|MKK|Kaunakakai|Molokai|US|3
PHMU|MUE|Waimea|Waimea Kohala|US|3|Waimea (Kamuela)
PHNG|NGF|Kaneohe|Kaneohe Bay MCAS|US|2|Marion E. Carl Field||PHNL:22
PHNL|HNL|Honolulu|Daniel K. Inouye|US|4|Honolulu, Oahu
PHNY|LNY|Lanai City|Lanai|US|3
PHOG|OGG|Kahului||US|4
PHPA|PAK|Hanapepe|Port Allen|US|1|||PHLI:29
PHSF|BSF|Waimea|Bradshaw Army|US|1|Waimea (Kamuela)||PHMU:29
PHTO|ITO|Hilo||US|3
PHUP|UPP|Hawi|Upolu|US|1|||PHMU:36
PKMA|ENT|Eniwetok Atoll|Eniwetok|MH|2
PKMJ|MAJ|Majuro Atoll|Marshall Islands|MH|4
PKRO||Roi-Namur|Dyess Army Air Field|MH|1|||MJE:157
PKWA|KWA|Kwajalein|Bucholz Army Air Field|MH|3
PLCH|CXI|Kiritimati|Cassidy|KI|4
PLFA|TNV|Tabuaeran Island||KI|1
PLPA||Palmyra Island Atoll|Palmyra|UM|1|Cooper
PLWN|TNQ|Teraina|Washington Island Airstrip|KI|1
PMDY|MDY|Sand Island|Henderson Field|UM|2
PODC|DCK|Dahl Creek||US|1|||PAOB:3
POKA|TNK|Tununak||US|2
POKW|KWF|Waterfall|Waterfall Seaplane Base|US|1|||PAKW:33
POLI||Oliktok Point|Oliktok Point Long Range Radar Station|US|1|||PAQT:52
POWS|WSB|Steamboat Bay|Steamboat Bay Seaplane Base|US|1|||PAKW:36
PPCT|TCT|Takotna||US|2
PPIT|NUP|Nunapitchuk||US|2
PPIZ|PIZ|Point Lay|Point Lay LRRS|US|3
PPWR|PWR|Port Walter|Port Walter Seaplane Base|US|1|||PASI:86
PTFK|TKL|Taku Lodge|Taku Lodge Seaplane Base|US|1|||PAJN:40
PTKK|TKK|Weno Island|Chuuk|FM|4
PTPN|PNI|Pohnpei Island|Pohnpei|FM|3
PTRO|ROR|Babelthuap Island|Roman Tmetuchl|PW|4
PTSA|KSA|Okat|Kosrae|FM|4
PTYA|YAP|Yap Island|Yap|FM|4
PTYU|ULI|Falalop Island|Ulithi|FM|1|||PTYA:196
PWAK|AWK|Wake Island||UM|3
RCAY||Kaohsiung|Gangshan Air Force Base|TW|2|Kaohsiung (Gangshan)||RCNN:20
RCBS|KNH|Shang-I|Kinmen|TW|3
RCCM|CMJ|Qimei||TW|1|||RCQC:45
RCDC||Pingtung|Pingtung Air Force Base|TW|2|||RCKH:16
RCFG|LZN|Matsu|Matsu Nangan|TW|3|Matsu (Nangan)
RCFN|TTT|Taitung City|Taitung|TW|3
RCGI|GNI|Lüdao||TW|1|||RCFN:38
RCKH|KHH|Kaohsiung||TW|4|Kaohsiung (Xiaogang)
RCKU|CYI|Shuishang|Chiayi|TW|3
RCKW|HCN|Hengchun||TW|2|||RCKH:71
RCLM|DSX|Kaohsiung|Dongsha Island|TW|1|Kaohsiung (Cijin - Pratas Island) Pratas Island
RCLY|KYD|Orchid Island|Lanyu|TW|3
RCMQ|RMQ|Taichung|Taichung International Airport / Ching Chuang Kang Air Base|TW|4|Taichung (Qingshui)
RCMT|MFK|Matsu|Matsu Beigan|TW|3|Matsu (Beigan)
RCNN|TNN|Tainan|Tainan International Airport / Tainan Air Base|TW|4|Tainan (Rende)
RCPO|HSZ|Hsinchu City|Hsinchu Air Base|TW|2|||RCTP:41
RCQC|MZG|Huxi|Penghu Magong|TW|4
RCQS||Taitung City|Chihhang Air Base|TW|2|||RCFN:9
RCSP||Kaohsiung|Taiping Island|TW|1|Kaohsiung (Cijin - Taiping Island)
RCSQ||Pingtung|Pingtung Air Force Base North|TW|3
RCSS|TSA|Taipei|Taipei Songshan|TW|4|Taipei (Songshan)
RCTP|TPE|Taoyuan|Taiwan Taoyuan|TW|4
RCWA|WOT|Wang'an||TW|1|||RCQC:26
RCXY||Guiren|Guiren Airport / Guiren Army|TW|1|||RCNN:9
RCYU|HUN|Hualien City|Hualien Chiashan|TW|4
RJAA|NRT|Tokyo|Narita|JP|4
RJAF|MMJ|Matsumoto|Shinshu-Matsumoto|JP|3
RJAH|IBR|Omitama|Ibaraki|JP|4
RJAK||Tsuchiura|JGSDF Kasumigaura|JP|1|||RJAH:26
RJAM|MUS|Ogasawara|JMSDF Minami Torishima Air Base|JP|1
RJAN||Niijima Village|Niijima|JP|2
RJAW|IWO|Ogasawara|Ioto Airbase|JP|2|Iwo Jima
RJAZ||Kozushima||JP|1|||RJTQ:41
RJBB|KIX|Osaka|Kansai|JP|4
RJBD|SHM|Shirahama|Nanki Shirahama|JP|3
RJBE|UKB|Kobe||JP|4
RJBK||Okayama|Kohnan|JP|1|||RJOB:20
RJBT|TJH|Toyooka|Konotori Tajima|JP|3
RJCA||Asahikawa|JGSDF Camp Asahikawa|JP|1|||RJEC:15
RJCB|OBO|Obihiro|Tokachi-Obihiro|JP|3
RJCC|CTS|Sapporo|New Chitose|JP|4
RJCH|HKD|Hakodate||JP|4
RJCJ||Chitose|JASDF Chitose Air Base|JP|2|||RJCC:3
RJCK|KUH|Kushiro||JP|3
RJCM|MMB|Ōzora|Memanbetsu|JP|3
RJCN|SHB|Nakashibetsu||JP|3
RJCO|OKD|Sapporo|Sapporo Okadama|JP|3
RJCR|RBJ|Rebun||JP|1|||RJER:26
RJCS||Betsukai|JASDF Kenebetsu|JP|2|||RJCN:24
RJCT||Obihiro|Tokachi|JP|2|||RJCB:18
RJCW|WKJ|Wakkanai||JP|3
RJCY||Yakumo|JASDF Yakumo Airbase|JP|1|||RJCH:70
RJDA|AXJ|Amakusa||JP|3
RJDB|IKI|Iki||JP|3
RJDC|UBJ|Ube|Yamaguchi Ube|JP|3
RJDK||Shinkamigoto|Kamigoto|JP|1|||RJFE:51
RJDM||Yoshinogari|JGSDF Metabaru|JP|1|||RJFS:22
RJDO||Ojika||JP|1|||RJFE:63
RJDT|TSJ|Tsushima||JP|3
RJDU|OMJ|Nagasaki|JMSDF Omura Air Base|JP|1|||RJFU:2
RJEB|MBE|Monbetsu||JP|3
RJEC|AKJ|Higashikagura|Asahikawa|JP|3
RJEO|OIR|Okushiri Island|Okushiri|JP|3
RJER|RIS|Rishiri||JP|3
RJFA||Ashiya|JASDF Ashiya Air Base|JP|2|||RJFR:36
RJFC|KUM|Yakushima||JP|3
RJFE|FUJ|Goto|Fukue|JP|3
RJFF|FUK|Fukuoka||JP|4
RJFG|TNE|Tanegashima|New Tanegashima|JP|3
RJFK|KOJ|Kagoshima||JP|4
RJFM|KMI|Miyazaki||JP|4
RJFN||Shintomi|JASDF Nyūtabaru Air Base|JP|1|||RJFM:23
RJFO|OIT|Oita||JP|3
RJFR|KKJ|Kitakyushu||JP|4
RJFS|HSG|Saga|Kyushu Saga|JP|4
RJFT|KMJ|Kumamoto||JP|4
RJFU|NGS|Nagasaki||JP|4
RJFY||Kanoya|JMSDF Kanoya Air Base|JP|2|||RJFK:50
RJFZ||Tsuiki|JASDF Tsuiki Air Base|JP|2|||RJFR:18
RJGG|NGO|Nagoya|Chubu Centrair|JP|4|Tokoname
RJKA|ASJ|Amami||JP|3
RJKB|OKE|Wadomari|Okinoerabu|JP|3
RJKI|KKX|Kikai||JP|3
RJKN|TKN|Amagi|Tokunoshima|JP|3
RJNA|NKM|Nagoya|Nagoya Airport / JASDF Komaki Air Base|JP|3
RJNF|FKJ|Fukui||JP|2|||RJNK:32
RJNG|QGU|Gifu||JP|2|||RJGG:60
RJNH||Hamamatsu|JASDF Hamamatsu Air Base|JP|2|||RJNS:45
RJNK|KMQ|Kanazawa|Komatsu Airport / JASDF Komatsu Air Base|JP|4
RJNO|OKI|Okinoshima|Oki Global Geopark|JP|3
RJNS|FSZ|Makinohara / Shimada|Mount Fuji Shizuoka|JP|4
RJNT|TOY|Toyama|Toyama Kitokito|JP|3
RJNW|NTQ|Wajima|Noto Satoyama|JP|3
RJNY||Yaizu|JASDF Shizuhama Air Base|JP|2|||RJNS:10
RJOA|HIJ|Hiroshima||JP|4
RJOB|OKJ|Okayama|Okayama Momotaro|JP|4
RJOC|IZO|Izumo|Izumo Enmusubi|JP|3
RJOE||Ise|JGSDF Akeno|JP|1|||RJGG:38
RJOF||Hofu|JASDF Hofu|JP|2|||RJDC:27
RJOH|YGJ|Yonago|Yonago Kitaro Airport / JASDF Miho Air Base|JP|3
RJOI|IWK|Iwakuni|Iwakuni Kintaikyo|JP|3
RJOK|KCZ|Kochi|Kochi Ryoma|JP|4|Nankoku
RJOM|MYJ|Matsuyama||JP|4
RJOO|ITM|Osaka|Osaka Itami|JP|4
RJOR|TTJ|Tottori|Tottori Sand Dunes Conan|JP|3
RJOS|TKS|Tokushima|Tokushima Awaodori Airport / JMSDF Tokushima Air Base|JP|4
RJOT|TAK|Takamatsu||JP|4
RJOW|IWJ|Masuda|Iwami|JP|3
RJOY||Yao||JP|2|||RJOO:25
RJOZ||Shimonoseki|Ozuki|JP|1|||RJFR:22
RJSA|AOJ|Aomori||JP|4
RJSC|GAJ|Higashine|Yamagata|JP|3
RJSD|SDS|Sado||JP|3
RJSF|FKS|Sukagawa|Fukushima|JP|3
RJSH|HHE|Hachinohe|JMSDF Hachinohe Air Base / Hachinohe|JP|2|||RJSA:69
RJSI|HNA|Hanamaki|Iwate Hanamaki|JP|3
RJSK|AXT|Akita||JP|3
RJSM|MSJ|Misawa|Misawa Airport / Misawa Air Base|JP|3
RJSN|KIJ|Niigata||JP|4
RJSO||Mutsu|JMSDF Ōminato Base|JP|1|||RJCH:65
RJSR|ONJ|Kitaakita|Odate Noshiro|JP|3
RJSS|SDJ|Sendai||JP|4|Natori
RJST||Ishinomaki|JASDF Matsushima Air Base|JP|2|||RJSS:40
RJSU||Sendai|JGSDF Kasuminome|JP|1|||RJSS:11
RJSY|SYO|Shonai||JP|3
RJTA|NJA|Ayase / Yamato|JMSDF Atsugi Air Base / Naval Air Facility Atsugi|JP|2|||RJTT:32
RJTC||Tachikawa||JP|1|||RJTT:39
RJTE||Tateyama|JMSDF Tateyama Air Base|JP|2|||RJTO:48
RJTF||Chofu||JP|3
RJTH|HAC|Hachijojima||JP|3
RJTJ||Sayama|Iruma Air Base|JP|2|||RJTT:47
RJTK||Kisarazu|JGSDF Kisarazu|JP|2|||RJTT:20
RJTL||Matsudo|JMSDF Shimofusa Air Base|JP|2|||RJAA:34
RJTO|OIM|Izu Oshima|Oshima|JP|3
RJTQ|MYE|Miyakejima||JP|3
RJTT|HND|Tokyo|Tokyo Haneda|JP|4
RJTU||Utsunomiya|Utsunomiya Air Field|JP|2|||RJAH:61
RJTY|OKO|Fussa|Yokota Air Base|JP|2|||RJTT:45
RKCH||Namji||KR|1|||RKPK:48
RKJB|MWX|Muan||KR|4|Muan (Piseo-ri)
RKJJ|KWJ|Gwangju||KR|3
RKJK|KUV|Gunsan|Gunsan Airport / Gunsan Air Base|KR|3
RKJM||Gonghang-ro|Mokpo Air Base|KR|1|Gonghang-ro (Mokpo)||RKJB:26
RKJU|CHN|Jeonju|Jeonju Air Base|KR|1|G 703||RKJJ:89
RKJY|RSU|Yeosu||KR|3
RKNK||Girin-myeon|G-420|KR|1|||RKNY:33
RKNN|KAG|Gangneung|Gangneung Airport|KR|2|K-18||RKNY:42
RKNW|WJU|Wonju|Wonju Airport / Hoengseong Air Base|KR|3|K-38/K-46|RKNH
RKNY|YNY|Yangyang||KR|4|Gonghang-ro
RKPC|CJU|Jeju City|Jeju|KR|4
RKPD|JDG|Jeju Island|Jeongseok|KR|2|||RKPC:24
RKPE|CHF|Jinhae|Jinhae Air Base|KR|1|||RKPK:22
RKPK|PUS|Busan|Gimhae|KR|4
RKPS|HIN|Sacheon|Sacheon Airport / Sacheon Air Base|KR|3
RKPU|USN|Ulsan||KR|3
RKRA||Ganap-ri||KR|1|G-222||RKSS:35
RKRB||Ilsin-ro|Bucheon|KR|1|G-103||RKSS:10
RKRG||Yangpyeong||KR|1|G-301||RKSS:74
RKRI||Idong-myeon|Idong Airport|KR|1|G-231||RKSS:73
RKRK||Ha-myeon|G-213|KR|1|||RKSS:57
RKRN||Jinsangmi-ro|Icheon|KR|1|G-510||RKTU:54
RKRO|QJP|Pocheon||KR|1|G-217||RKSS:48
RKRP||Paju||KR|1|G-110||RKSS:23
RKRS||Goyang|Susaek|KR|1|G 113||RKSS:8
RKRY||Pogong-ro|Yongin|KR|1|G-501||RKSS:49
RKSG||Pyeongtaek|Camp Humphreys Desiderio Army|KR|2|A-511||RKTU:50
RKSI|ICN|Seoul|Incheon|KR|4
RKSM|SSN|Seongnam|Seoul Air Base|KR|2|K-16||RKSS:31
RKSO|OSN|Pyeongtaek|Osan Air Base|KR|2|||RKSS:56
RKSS|GMP|Seoul|Seoul Gimpo|KR|4
RKST||Dongduchon|Camp Casey-Dongduchon|KR|1|Camp Mobile H-220||RKSS:47
RKSW|SWU|Suwon||KR|2|||RKSS:40
RKTA||Taean||KR|1|||RKSI:98
RKTE|||Seongmu|KR|1|||RKTU:16
RKTH|KPO|Pohang|Pohang Airport|KR|3|G-815/K-3
RKTI|JWO|Gimseang-ro|Jungwon Air Base/Chungju|KR|2|||RKTU:49
RKTL|UJN|Bongsan-ri|Uljin|KR|1|Bongsan-ri, Uljin||RKTH:88
RKTN|TAE|Daegu||KR|4
RKTP|HMY|Seosan|Seosan Air Base|KR|1|||RKSI:85
RKTS||Sangju||KR|1|||RKTU:69
RKTU|CJJ|Cheongju|Cheongju International Airport/Cheongju Air Base|KR|4|K-59/G-513
RKTY|YEC|Yecheon-ri|Yecheon Airbase|KR|2|||RKTU:76
RKUC||Jochiwon||KR|1|G-505||RKTU:24
RKUL||Songdang-ri|G 536|KR|1|||RKTU:61
ROAH|OKA|Naha||JP|4
RODE||Ie|Iejima Auxiliary Air Base|JP|1|||RORA:54
RODN|DNA|Okinawa|Kadena Air Base|JP|3|||ROAH:22
ROIG|ISG|Ishigaki|New Ishigaki|JP|3
ROIT||Bungo-ono|Oita Prefectural|JP|1|Oitakenou||RJFO:55
ROKJ|UEO|Kumejima||JP|3
ROKR|KJP|Zamami|Kerama|JP|1|||ROAH:35
ROMD|MMD|Minamidaito||JP|3
ROMY|MMY|Miyakojima|Miyako|JP|3
RORA|AGJ|Aguni||JP|2
RORE|IEJ|Ie|Iejima|JP|2|||RORA:56
RORH|HTR|Taketomi|Hateruma|JP|1|||ROIG:58
RORK|KTD|Kitadaitōjima|Kitadaito|JP|3
RORS|SHI|Miyakojima|Shimojishima|JP|3
RORT|TRA|Tarama||JP|3
RORY|RNJ|Yoron||JP|3
ROTM|||Futenma Marine Corps Air Station|JP|2|||ROAH:15
ROYN|OGN|Yonaguni||JP|3
RPEN|ENI|El Nido||PH|2
RPLA||Pinamalayan||PH|1|||RPUH:81
RPLB|SFS|Subic Bay|Subic Bay International Airport / Naval Air Station Cubi Point|PH|4|Olongapo
RPLC|CRK|Clark|Clark International Airport / Clark Air Base|PH|4|Mabalacat
RPLE|BSI|Balesin|Balesin Island|PH|1||RPBL|RPLL:110
RPLG||Mansalay|Wasig|PH|1||RPVL|RPUH:51
RPLH|LLC|Lal-lo|Cagayan North|PH|2|||RPUT:60
RPLI|LAO|Laoag City|Laoag|PH|4
RPLJ||Jomalig|Jomalig Island|PH|1|||RPLL:143
RPLK|DRP|Legazpi|Bicol|PH|4
RPLL|MNL|Manila|Ninoy Aquino|PH|4|Manila (Pasay)
RPLM||Tanay|Camp Capinpin Airstrip|PH|1|||RPLL:37
RPLN||Palanan|Palanan Community|PH|2||RPPA
RPLO|CYU|Cuyo||PH|2
RPLQ||Capas|Colonel Ernesto Rabina Air Base|PH|1|||RPLC:21
RPLR||Rosales|Carmen Airstrip|PH|1|||RPLC:78
RPLS|SGL|Cavite|Danilo Atienza Air Base|PH|2|||RPLL:13
RPLT||Itbayat|Itbayat Jorge Abad|PH|3
RPLU|LBX|Lubang||PH|2|||RPLB:106
RPLV||Santa Rosa|Fort Magsaysay|PH|1|||RPLC:63
RPLX||Corregidor|Corregidor Airport|PH|1|Kindley Field||RPLL:46
RPLY||Perez|Alabat Island|PH|1|||RPLL:103
RPLZ||Sorsogon|Bacon Community|PH|1|||RPLK:40
RPMA|AAV|Surallah|Allah Valley|PH|2|||RPMR:51
RPMB||General Santos City|Rajah Buayan Air Base|PH|2|||RPMR:16
RPMC|CBO|Datu Odin Sinsuat|Cotabato|PH|3|Awang
RPMD|DVO|Davao|Francisco Bangoy|PH|4
RPME|BXU|Butuan|Bancasi|PH|3
RPMF|BPH|Bislig||PH|2|||RPME:125
RPMG|DPL|Dipolog||PH|3
RPMH|CGM|Mambajao|Camiguin|PH|3
RPMI|IGN|Balo-i|Maria Cristina|PH|1|Iligan||RPMO:41
RPMJ|JOL|Jolo||PH|3
RPML||Cagayan de Oro|Lumbia|PH|1|||RPMY:28
RPMM|MLP|Malabang||PH|1|||RPMC:53
RPMN|TWT|Bongao|Sanga Sanga|PH|3
RPMO|OZC|Ozamiz|Labo|PH|3
RPMP|PAG|Pagadian||PH|3
RPMQ|MXI|Mati|Mati National|PH|2|||RPMD:72
RPMR|GES|General Santos||PH|4
RPMS|SUG|Surigao City|Surigao|PH|3
RPMT||Manolo Fortich|Del Monte Plantation|PH|1|||RPMY:52
RPMU|CDY|Mapun|Cagayan de Sulu|PH|1|||WBKS:133
RPMV|IPE|Ipil||PH|1|||RPMP:95
RPMW|TDG|Tandag||PH|2|||RPME:77
RPMX||Liloy|Liloy Community|PH|1|||RPMP:92
RPMY|CGY|Laguindingan||PH|4
RPMZ|ZAM|Zamboanga||PH|4
RPNO|XSO|Siocon||PH|1|||RPMZ:88
RPNS|IAO|Del Carmen|Siargao|PH|2
RPPN||Kalayaan|Rancudo|PH|1|Kalayaan (Pag-asa Island / Thitu Island)
RPSB||Santa Fe|Bantayan|PH|1|||RPVB:94
RPSD|RZP|Taytay|Cesar Lim Rodriguez|PH|1|Taytay-Sandoval||RPEN:20
RPSM||Maasin||PH|1|||RPVM:89
RPSN||Ubay|Ubay Community|PH|1|||RPVM:56
RPSP|TAG|Panglao|Bohol-Panglao|PH|4
RPSV|SWL|San Vicente||PH|2
RPTP||Rizal|Tarumpitao Point|PH|1|||RPVP:146
RPUA||Agutaya|Pamalican Airstrip|PH|1|||RPLO:67
RPUB|BAG|Baguio|Loakan|PH|2|||RPLC:132
RPUD|DTE|Daet||PH|2|||RPUN:68
RPUE||Caluya|Semirara|PH|1|||RPUH:49
RPUF||Floridablanca|Basa Air Base|PH|1|||RPLC:23
RPUG||Lingayen||PH|1|||RPLC:100
RPUH|SJI|San Jose||PH|3
RPUI||Iba||PH|1|||RPLC:65
RPUJ||Castillejos|Castillejos - Jesus F Magsaysay|PH|1|||RPLB:19
RPUK||Calapan|Calapan National|PH|1|||RPUH:119
RPUL||Lipa|Basilio Fernando Air Base|PH|1|||RPLL:63
RPUM|MBO|Mamburao||PH|2|||RPUH:106
RPUN|WNP|Naga||PH|3
RPUO|BSO|Basco||PH|3
RPUP||Larap|Jose Panganiban Airstrip|PH|1|||RPUN:104
RPUQ||Vigan City|Vigan|PH|1|||RPLI:71
RPUR|BQA|Baler|Dr. Juan C. Angara|PH|2|||RPLC:117
RPUS|SFE|San Fernando||PH|2|||RPUY:159
RPUT|TUG|Tuguegarao City|Tuguegarao|PH|3
RPUU||Bulan||PH|1|||RPVJ:44
RPUV|VRC|Virac||PH|3
RPUW|MRQ|Gasan|Marinduque|PH|2|||RPVU:120
RPUX||Plaridel||PH|1|||RPLC:45
RPUY|CYZ|Cauayan City|Cauayan|PH|3
RPUZ|||Bagabag|PH|1|||RPUY:64
RPVA|TAC|Tacloban City|Daniel Z. Romualdez|PH|3
RPVB|BCD|Bacolod City|Bacolod-Silay|PH|4
RPVC|CYP|Calbayog City|Calbayog|PH|3
RPVD|DGT|Dumaguete City|Sibulan|PH|3
RPVE|MPH|Caticlan|Godofredo P. Ramos|PH|3
RPVF|CRM|Catarman|Catarman National|PH|3
RPVG||Guiuan||PH|1|||RPVA:81
RPVH||Hilongos||PH|1|||RPVM:86
RPVI|ILO|Iloilo||PH|4|Cabatuan
RPVJ|MBT|Masbate|Moises R. Espinosa|PH|3
RPVK|KLO|Kalibo||PH|4
RPVM|CEB|Cebu|Mactan Cebu|PH|4|Cebu City/Lapu-Lapu City
RPVO|OMC|Ormoc City|Ormoc|PH|2|||RPVA:54
RPVP|PPS|Puerto Princesa|Puerto Princesa International Airport / PAF Antonio Bautista Air Base|PH|4
RPVQ|||Biliran|PH|1|||RPVC:63
RPVR|RXS|Roxas City|Roxas|PH|3
RPVS|EUQ|San Jose|Evelio Javier|PH|2|||RPVI:62
RPVU|TBH|Tablas Island|Tugdan|PH|3
RPVV|USU|Coron|Francisco B. Reyes|PH|3|Busuanga
RPVW|BPA|Borongan City|Borongan|PH|1|||RPVA:70
RPVY||Catbalogan||PH|1|||RPVC:42
RPVZ||Siquijor||PH|1||RPSQ|RPVD:23
SAAA||San Antonio de Areco||AR|1|||SABE:101
SAAC|COC|Concordia|Comodoro Pierrestegui|AR|2|||SBUG:192
SAAG|GHU|Gualeguaychu||AR|2|||SABE:174
SAAI||Veronica|Punta Indio Naval Air Base|AR|1|||SAEZ:128
SAAK||Isla Martin Garcia||AR|1|||SABE:45
SAAN||Pergamino||AR|1|||SAAR:114
SAAP|PRA|Parana|General Urquiza|AR|3
SAAR|ROS|Rosario|Rosario Islas Malvinas|AR|4
SAAU||Villaguay||AR|1|||SAAP:133
SAAV|SFN|Santa Fe|Sauce Viejo|AR|3
SABE|AEP|Buenos Aires|Aeroparque Jorge Newbery|AR|4
SABP||Coronel Pringles||AR|1|||SAZB:108
SACA||Córdoba|Captain D Omar Darío Gelardi|AR|1|||SACO:15
SACC|LCM|La Cumbre||AR|1|||SACO:46
SACD||Cordoba|Coronel Olmedo|AR|1|||SACO:20
SACE||Córdoba|Escuela de Aviación Militar|AR|1|Military Aviation School||SACO:16
SACI||Pilar||AR|1|||SACO:53
SACL||Laguna Larga||AR|1|||SACO:120
SACM||Villa General Mitre||AR|1|||SACO:70
SACN||Ascochinga||AR|1|||SACO:39
SACO|COR|Cordoba|Ingeniero Aeronáutico Ambrosio L.V. Taravella|AR|4
SACQ||Monte Quemado||AR|1|||SANT:255
SACS||Villa de Soto||AR|1|||SACO:89
SACT||Gobernador Gordillo|Chamical|AR|2|||SANL:118
SACV||Villa de María de Río Seco||AR|1|||SACO:165
SADF||San Fernando||AR|2|||SABE:20
SADJ||General Sarmiento|Mariano Moreno|AR|1|||SABE:34
SADL|LPG|La Plata||AR|2|||SAEZ:61
SADM||Morón||AR|1|||SAEZ:19
SADO||Campo de Mayo|Campo de Mayo Military|AR|1|||SABE:24
SADP|EPA|El Palomar||AR|2|||SABE:19
SADQ||Quilmes||AR|1|||SABE:23
SADZ||La Matanza|Matanza|AR|1|||SAEZ:11
SAEA||General Acha||AR|1|||SAZR:95
SAEK||Laprida||AR|1|||SAZB:181
SAEL||Las Flores||AR|1|||SAEZ:148
SAEM|MJR|Miramar||AR|1|||SAZM:42
SAET||Trenque Lauquen|Ñanco Lauquen|AR|1|||SAZR:151
SAEZ|EZE|Buenos Aires|Ezeiza International Airport - Ministro Pistarini|AR|4|Buenos Aires (Ezeiza)
SAFR|RAF|Rafaela||AR|1|||SAAV:81
SAFS|NCJ|Sunchales|Sunchales Aeroclub|AR|1|||SAAV:108
SAFT||El Trebol||AR|1|||SAAV:102
SAFV||Venado Tuerto||AR|1|||SAAR:139
SAHC|HOS|Chos Malal||AR|1|||SAZN:246
SAHE|CVH|Lafontaine|Caviahue|AR|1|||SCPC:179
SAHI||Cipoletti|Cipoletti Aeroclub|AR|1|||SAZN:16
SAHR|GNR|General Roca|Dr. Arturo H. Illia|AR|1|||SAZN:47
SAHS|RDS|Rincon de los Sauces||AR|2|||SAZN:185
SAHV||Victorica||AR|1|||SAZR:112
SAHZ|APZ|Zapala||AR|2|||SAZY:151
SAMA||General Alvear||AR|1|||SAMR:83
SAMC||Cristo Redentor||AR|1|||SCEL:93
SAME|MDZ|Mendoza|Governor Francisco Gabrielli|AR|4
SAMH||Valle Hermoso||AR|1|||SAMR:176
SAMI||San Martin|Aeroclub San Martín|AR|1|||SAME:37
SAMJ||Jachal||AR|1|||SANU:151
SAML||Punta de Vacas||AR|1|||SAME:90
SAMM|LGS|Malargue|Comodoro D.R. Salomón|AR|2|||SAMR:147
SAMP||La Paz||AR|1|||SAOU:113
SAMQ||Mendoza|Mendoza Airpark|AR|1|||SAME:8
SAMR|AFA|San Rafael|Suboficial Ay Santiago Germano|AR|3
SAMS||San Carlos||AR|1|||SAME:108
SAMU||Uspallata||AR|1|||SAME:61
SANC|CTC|Catamarca|Coronel Felipe Varela|AR|3
SANE|SDE|Santiago del Estero|Vicecomodoro Angel D. La Paz Aragonés|AR|3
SANH||Rio Hondo|Las Termas|AR|1|||SANR:4
SANL|IRJ|La Rioja|Capitan V A Almonacid|AR|3
SANO||Chilecito||AR|1|||SANL:65
SANR|RHD|Termas de Río Hondo||AR|3
SANT|TUC|San Miguel de Tucumán|Teniente Benjamín Matienzo|AR|4
SANU|UAQ|San Juan|Domingo Faustino Sarmiento|AR|3
SANW|CRR|Ceres||AR|1|||SAAV:231
SAOC|RCU|Rio Cuarto|Area De Material|AR|2|||SAOU:196
SAOD|VDR|Villa Dolores||AR|2|||SACO:113
SAOE||Rio Tercero||AR|1|||SACO:96
SAOI||Villa Maria del Rio Seco|Villa Maria|AR|1|||SACO:150
SAOL||Laboulaye||AR|1|||SAAR:275
SAOM||Marcos Juarez||AR|1|||SAAR:131
SAOR|VME|Villa Mercedes|Villa Reynolds|AR|2|||SAOU:103
SAOS|RLO|Merlo|Valle Del Conlara|AR|1|||SAOU:147
SAOU|LUQ|San Luis|Brigadier Mayor D Cesar Raul Ojeda|AR|3
SAOV||Villa Maria|Presidente Néstor Kirchner Regional|AR|2|||SACO:145
SARC|CNQ|Corrientes||AR|3
SARE|RES|Resistencia||AR|4
SARF|FMA|Formosa|Formosa National|AR|3
SARG||General Paz|Caa Cati|AR|1|||SARC:116
SARI|IGR|Puerto Iguazu|Cataratas Del Iguazú|AR|3
SARL|AOL|Paso de los Libres||AR|2|||SBUG:15
SARM|MCS|Monte Caseros||AR|2|||SBUG:80
SARP|PSS|Posadas|Libertador Gral D Jose De San Martin|AR|3
SARS|PRQ|Presidencia Roque Sáenz Peña|Termal|AR|1|||SARE:162
SARV||Villa Angela||AR|1|||SARE:162
SASA|SLA|Salta|Martín Miguel de Güemes|AR|4
SASJ|JUJ|San Salvador de Jujuy|Gobernador Horacio Guzman|AR|4
SASL||Salar de Cauchari||AR|1|||SASA:175
SASM||Metan|Metán|AR|1|||SASA:90
SASO|ORA|Orán||AR|2|||SASJ:159
SASQ||La Quiaca||AR|1|||SLTJ:112
SASR||Rivadavia||AR|1|||SASJ:228
SAST|TTG|Tartagal|General Enrique Mosconi|AR|2|||SLTJ:151
SATC|CLX|Clorinda|Aeródromo de Clorinda|AR|1|||SGAS:23
SATD|ELO|El Dorado||AR|1|||SARI:74
SATG|OYA|Goya||AR|2|||SARE:185
SATI||Bernardo de Irigoyen||AR|1|||SSFB:66
SATK|LLS|Las Lomitas|Alferez Armando Rodriguez|AR|1|||SARF:286
SATM|MDX|Mercedes||AR|1|||SBUG:119
SATO||Oberá||AR|1|||SSZR:73
SATR|RCQ|Reconquista||AR|2|||SARE:205
SATU|UZU|Curuzu Cuatia||AR|2|||SBUG:91
SAVA||Piedra del Aguila||AR|1|||SAZY:97
SAVB|EHL|El Bolsón||AR|2|||SAZS:93
SAVC|CRD|Comodoro Rivadavia|General Enrique Mosconi|AR|4
SAVD|EMX|El Maitén||AR|1|||SAZS:98
SAVE|EQS|Esquel|Esquel Brigadier Antonio Parodi|AR|3
SAVH|LHS|Las Heras||AR|3
SAVJ|IGB|Ingeniero Jacobacci|Ingeniero Jacobacci - Captain H R Bordón|AR|1|||SAZS:134
SAVM|OLN|Sarmiento|Lago Musters|AR|1|||SAVH:107
SAVN|OES|San Antonio Oeste|Antoine de Saint Exupéry|AR|2
SAVP||Paso de los Indios||AR|1|||SAVE:200
SAVQ|MQD|Maquinchao||AR|1|||SAZS:205
SAVR|ARR|Alto Rio Senguerr|D. Casimiro Szlapelis|AR|1|||SCBA:121
SAVS|SGV|Sierra Grande||AR|1|||SAVN:97
SAVT|REL|Rawson|Almirante Marco Andres Zar|AR|3
SAVV|VDM|Viedma / Carmen de Patagones|Gobernador Castello|AR|3
SAVY|PMY|Puerto Madryn|El Tehuelche|AR|3
SAWB||Marambio Base|Gustavo Marambio|AQ|1
SAWC|FTE|El Calafate|El Calafate - Commander Armando Tola|AR|3
SAWD|PUD|Puerto Deseado||AR|3
SAWE|RGA|Rio Grande|Gobernador Ramón Trejo Noel|AR|3
SAWG|RGL|Rio Gallegos|Piloto Civil Norberto Fernández|AR|4
SAWH|USH|Ushuaia|Ushuaia - Malvinas Argentinas|AR|3
SAWJ|ULA|San Julian|Capitan D Daniel Vazquez|AR|2|||SAWR:181
SAWL||Tolhuin|Tolhuin Lago Fagnano|AR|1|||SAWH:82
SAWM|ROY|Rio Mayo||AR|1|||SAWP:109
SAWO||Ushuaia|Ushuaia Aeroclub|AR|1|||SAWH:2
SAWP|PMQ|Perito Moreno|Perito Moreno Jalil Hamer|AR|3
SAWR|GGS|Gobernador Gregores||AR|2
SAWS|JSM|Chubut|Jose De San Martin|AR|1|||SAVE:138
SAWT|RYO|Rio Turbio|28 de Noviembre|AR|2
SAWU|RZA|Puerto Santa Cruz|Santa Cruz|AR|2|||SAWR:178
SAWZ||Matienzo Base|Matienzo|AQ|1
SAYB||Base Belgrano II||AQ|1
SAYE||Fortín Sargento Cabral|Esperanza Base|AQ|1
SAYJ||Carlini Base|Jubany Airbase|AQ|1
SAYS||San Martín Base||AQ|1
SAZA||Azul||AR|1|||SAZO:206
SAZB|BHI|Bahía Blanca|Comandante Espora|AR|3
SAZC|CSZ|Coronel Suarez|Brigadier D.H.E. Ruiz|AR|1|||SAZB:144
SAZD||Dolores||AR|1|||SAZL:93
SAZE||Pigüé||AR|1|||SAZB:126
SAZF|OVR|Olavarria||AR|1|||SAZO:216
SAZG|GPO|General Pico||AR|2|||SAZR:110
SAZH|OYO|Tres Arroyos||AR|2|||SAZO:132
SAZI||Bolívar||AR|1|||SAEZ:275
SAZJ||Benito Juarez||AR|1|||SAZO:122
SAZL|SST|Santa Teresita||AR|3
SAZM|MDQ|Mar del Plata|Ástor Piazzola|AR|3
SAZN|NQN|Neuquén|Presidente Perón|AR|4
SAZO|NEC|Necochea||AR|3
SAZP|PEH|Pehuajó|Comodoro Pedro Zanni|AR|2|||SAZR:232
SAZQ||Rio Colorado||AR|1|||SAZB:173
SAZR|RSA|Santa Rosa||AR|3
SAZS|BRC|San Carlos de Bariloche|Teniente Luis Candelaria|AR|4
SAZT|TDL|Tandil|Héroes de Malvinas|AR|2|||SAZO:144
SAZU||Puelches||AR|1|||SAZN:214
SAZV|VLG|Villa Gesell||AR|2|||SAZL:82
SAZW|CUT|Cutral-Co||AR|2|||SAZN:96
SAZX||Nueve de Julio||AR|1|||SAEZ:228
SAZY|CPC|Chapelco/San Martin de los Andes|Aviador C. Campos|AR|3
SBAA|CDJ|Conceição do Araguaia||BR|2|||SWGN:171
SBAC|ARX|Aracati|Aracati Dragão do Mar Regional|BR|2||SNAT|SBMS:86
SBAE|JTC|Bauru|Bauru/Arealva–Moussa Nakhal Tobias State|BR|3||SJCT
SBAF||Rio de Janeiro|Campo Délio Jardim de Mattos|BR|2|||SBGL:16
SBAM||Amapá||BR|1|||SBMQ:227
SBAN||Anápolis|Anápolis Airbase|BR|2|||SBGO:52
SBAQ|AQA|Araraquara||BR|3
SBAR|AJU|Aracaju|Aracaju - Santa Maria|BR|3
SBAT|AFL|Alta Floresta|Piloto Osvaldo Marques Dias|BR|3
SBAU|ARU|Araçatuba||BR|3
SBAX|AAX|Araxá|Romeu Zema|BR|3
SBBE|BEL|Belém|Val de Cans/Júlio Cezar Ribeiro|BR|4
SBBG|BGX|Bagé|Comandante Gustavo Kraemer|BR|2|||SURV:138
SBBH|PLU|Belo Horizonte|Pampulha - Carlos Drummond de Andrade|BR|2|||SBCF:24
SBBI|BFH|Curitiba|Bacacheri|BR|2|||SBCT:15
SBBP|BJP|Bragança Paulista|Estadual Arthur Siqueira|BR|1|||SBGR:51
SBBQ||Barbacena|Major Brigadeiro Doorgal Borges|BR|2|||SBZM:67
SBBR|BSB|Brasília|Presidente Juscelino Kubitschek|BR|4
SBBU||Bauru||BR|1|||SBAE:21
SBBV|BVB|Boa Vista|Atlas Brasil Cantanhede|BR|4
SBBW|BPG|Barra do Garças||BR|2|||SBRD:262
SBCA|CAC|Cascavel|Coronel Adalberto Mendes da Silva|BR|3
SBCB|CFB|Cabo Frio||BR|2
SBCC||Novo Progresso|Campo de Provas Brigadeiro Veloso|BR|2|||SBAT:138
SBCD|CFC|Caçador|Doctor Carlos Alberto da Costa Neves|BR|1|||SSUV:63
SBCF|CNF|Belo Horizonte|Tancredo Neves|BR|4
SBCG|CGR|Campo Grande||BR|3
SBCH|XAP|Chapecó|Serafin Enoss Bertaso|BR|3
SBCI|CLN|Carolina|Brig. Lysias Augusto Rodrigues|BR|2|||SWGN:87
SBCJ|CKS|Parauapebas|Carajás|BR|3
SBCN|CLV|Caldas Novas|Nelson Ribeiro Guimarães|BR|2||SWKN
SBCO||Porto Alegre|Canoas Air Force Base|BR|2|||SBPA:6
SBCP|CAW|Campos dos Goytacazes|Bartolomeu Lisandro|BR|3
SBCR|CMG|Corumbá||BR|3
SBCT|CWB|Curitiba|Curitiba-Afonso Pena|BR|4
SBCX|CXJ|Caxias Do Sul|Hugo Cantergiani Regional|BR|3
SBCY|CGB|Cuiabá|Várzea Grande–Marechal Rondon|BR|4
SBCZ|CZS|Cruzeiro Do Sul||BR|3
SBDB|BYO|Bonito||BR|2
SBDN|PPB|Presidente Prudente||BR|3
SBDO|DOU|Dourados||BR|1|||SBPP:89
SBEG|MAO|Manaus|Eduardo Gomes|BR|4
SBEK|JCR|Jacareacanga||BR|2|||SWBR:287
SBES||São Pedro da Aldeia|Tenente Jorge Henrique Möller|BR|1|||SBCB:12
SBFI|IGU|Foz do Iguaçu|Cataratas|BR|4
SBFL|FLN|Florianópolis|Hercílio Luz|BR|4
SBFN|FEN|Fernando de Noronha||BR|3
SBFT||Fronteira||BR|1||SSFR|SBSR:64
SBFZ|FOR|Fortaleza|Pinto Martins|BR|4
SBGL|GIG|Rio De Janeiro|Rio de Janeiro Galeão – Tom Jobim|BR|4
SBGM|GJM|Guajará-Mirim||BR|2|||SLGM:15
SBGO|GYN|Goiânia|Santa Genoveva|BR|4
SBGP||Gavião Peixoto|EMBRAER - Unidade Gavião Peixoto|BR|1|||SBAQ:28
SBGR|GRU|São Paulo|São Paulo/Guarulhos–Governor André Franco Montoro|BR|4
SBGV|GVR|Governador Valadares|Coronel Altino Machado|BR|3
SBGW|GUJ|Guaratinguetá|Edu Chaves Field|BR|2|||SBSJ:83
SBHT|ATM|Altamira|Altamira Interstate|BR|3
SBIC|ITA|Itacoatiara||BR|2|||SBEG:174
SBIH|ITB|Itaituba||BR|3
SBIL|IOS|Ilhéus|Bahia - Jorge Amado|BR|3
SBIP|IPN|Ipatinga|Usiminas|BR|3
SBIT|ITR|Itumbiara|Francisco Vilela do Amaral|BR|1|||SBCN:103
SBIZ|IMP|Imperatriz|Prefeito Renato Moreira|BR|3
SBJA|JJG|Jaguaruna|Humberto Ghizzo Bortoluzzi Regional|BR|2
SBJD|QDV|Jundiaí|Comte. Rolim Adolfo Amaro–Jundiaí State|BR|1|||SBKP:27
SBJE|JJD|Cruz|Comandante Ariston Pessoa|BR|3
SBJF|JDF|Juiz de Fora|Francisco de Assis|BR|3
SBJH|JHF|São Roque|São Paulo Catarina Executive|BR|2|||SDCO:34
SBJI|JPR|Ji-Paraná||BR|2
SBJP|JPA|João Pessoa|Presidente Castro Pinto|BR|4
SBJR|RRJ|Rio de Janeiro|Jacarepaguá - Roberto Marinho|BR|2|||SBRJ:23
SBJU|JDO|Juazeiro do Norte|Orlando Bezerra de Menezes|BR|2
SBJV|JOI|Joinville|Lauro Carneiro de Loyola|BR|3
SBKG|CPV|Campina Grande|Presidente João Suassuna|BR|3
SBKP|VCP|Campinas|Viracopos|BR|4
SBLE|LEC|Lençóis|Coronel Horácio de Mattos|BR|2
SBLJ|LAJ|Lages||BR|3
SBLO|LDB|Londrina|Governor José Richa|BR|3
SBLP|LAZ|Bom Jesus da Lapa||BR|2|||SNBR:218
SBLS||Lagoa Santa|Lagoa Santa Air Base|BR|1|||SBCF:8
SBMA|MAB|Marabá|João Correa da Rocha|BR|3
SBMD|MEU|Almeirim|Monte Dourado - Serra do Areão|BR|2|||SNYA:66
SBME|MEA|Macaé|Macaé Benedito Lacerda|BR|2|||SBCB:72
SBMG|MGF|Maringá|Regional de Maringá - Sílvio Name Júnior|BR|3
SBMI|JMR|Maricá||BR|1|||SBRJ:34
SBMK|MOC|Montes Claros|Mário Ribeiro|BR|3
SBML|MII|Marília|Frank Miloye Milenkowichi–Marília State|BR|3
SBMN|PLL|Manaus|Ponta Pelada Airport / Manaus Air Base|BR|2|||SBEG:14
SBMO|MCZ|Maceió|Zumbi dos Palmares|BR|4
SBMQ|MCP|Macapá|Macapá - Alberto Alcolumbre|BR|3
SBMS|MVF|Mossoró|Dix-Sept Rosado|BR|3
SBMT|RTE|São Paulo|Campo de Marte|BR|2|||SBSP:13
SBMY|MNX|Manicoré||BR|3
SBNF|NVT|Navegantes|Ministro Victor Konder|BR|4
SBNM|GEL|Santo Ângelo||BR|3
SBNT||Natal|Natal Air Force Base|BR|2|||SBSG:21
SBNV||Goiânia|Aeródromo Nacional de Aviação|BR|1|||SBGO:14
SBOA||Sapé|Fazenda Antas Airstrip|BR|1|||SBJP:39
SBOB||Unaí|Fazenda Buriti|BR|1||SJPQ|SBBR:90
SBOD||Araguaína|Fazenda Santa Cruz|BR|1|||SWGN:108
SBOE||Querência|Fazenda Americana|BR|1
SBOF||Chapadão do Sul|Fazenda Bandeirantes|BR|1|||SBTG:183
SBOG||Vitória da Conquista|Fazenda Vereda Grande|BR|1|||SBVC:17
SBOH||Tesouro|Fazenda São Sebastião|BR|1|||SBRD:142
SBOI|OYK|Oiapoque||BR|2|||SOCA:124
SBOJ||Itaituba|Crepurizão|BR|1
SBOK||Lucas do Rio Verde|Fazenda São Vicente|BR|1|||SBSO:96
SBOL||Aporé|Fazenda Santa Lúcia Airstrip|BR|1|||SBTG:206
SBOM||Lambari d'Oeste|Fazenda Santa Maria|BR|1|||SWTS:84
SBON||Goiatins|Fazenda Renascer|BR|1|||SWGN:97
SBOO||Bonito|Fazenda Ceita Corê|BR|1|||SBDB:48
SBOQ||Chapadão do Céu|Fazenda Irmãs Prata|BR|1|||SBTG:266
SBOR||Mundo Novo|Fazenda Agro Tamareira|BR|1
SBOS||Brasnorte|Fazenda Santo Augusto|BR|1|||SWTS:183
SBOT||Igarapé do Meio|Fazenda Eldorado|BR|1|||SBSL:168
SBOU||Nova Canaã do Norte|Fazenda São Jerônimo Airstrip|BR|1|||SBAT:57
SBOV||Santa Rita do Trivelato|Fazenda Tabatinga|BR|1|||SBSO:203
SBOW||Itaituba|Fazenda Agropecuária Vale do Ouro|BR|1|||SBIH:9
SBOX||Corumbá|Fazenda Baia Morena|BR|1|||SBRD:199
SBOY||Corumbá|Fazenda São José|BR|1|||SBRD:180
SBOZ||Cáceres|Fazenda Arizona|BR|1|||SBCY:137
SBPA|POA|Porto Alegre|Porto Alegre-Salgado Filho|BR|4
SBPB|PHB|Parnaíba|Parnaíba - Prefeito Doutor João Silva Filho|BR|3
SBPC|POO|Poços De Caldas|Poços de Caldas - Embaixador Walther Moreira Salles|BR|2|||SBKP:142
SBPF|PFB|Passo Fundo|Lauro Kurtz|BR|3
SBPG|PGZ|Ponta Grossa|Ponta Grossa Airport - Comandante Antonio Amilton Beraldo|BR|3
SBPJ|PMW|Palmas|Brigadeiro Lysias Rodrigues|BR|3
SBPK|PET|Pelotas|João Simões Lopes Neto|BR|3
SBPL|PNZ|Petrolina|Senador Nilo Coelho|BR|3
SBPO|PTO|Pato Branco|Juvenal Loureiro Cardoso|BR|2
SBPP|PMG|Ponta Porã||BR|3
SBPR||Belo Horizonte|Carlos Prates|BR|1|||SBCF:31
SBPS|BPS|Porto Seguro||BR|4
SBPV|PVH|Porto Velho|Governador Jorge Teixeira de Oliveira|BR|4
SBQA||Nazário|Fazenda Floresta|BR|1|||SBGO:67
SBQB||Correntina|Fazenda Pedrinhas II|BR|1|||SNBR:132
SBQC||Nova Mutum|Fazenda Cantagalo Airstrip|BR|1|||SBSO:101
SBQD||Alta Floresta|Fazenda Vaca Branca|BR|1||SWVH|SBAT:41
SBQE||Ribeiro Gonçalves|Fazenda Tradição|BR|1
SBQG||São José do Rio Claro|Fazenda Rio Azul|BR|1|||SBSO:153
SBQH||Confresa|CMTE Juliano Rambo Airstrip|BR|1
SBQI||Caracaraí||BR|1|||SBBV:121
SBQJ||Ibaiti|Osvaldo de Carvalho|BR|1|||SBLO:110
SBQK||São Félix do Xingu|Fazenda Mundial|BR|1|||SBCJ:166
SBQM||Iateí|Fazenda São Miguel Airstrip|BR|1|||SSUM:130
SBQN||Porto Estrela|Fazenda Nossa Senhora Aparecida II Airstrip|BR|1|||SWTS:102
SBQO||Prado|Fazenda Paraíso Airstrip|BR|1|||SBPS:66
SBQP||Uruçuí|Fazenda Três Santos Airstrip|BR|1
SBQR||Buritizeiro|Fazenda Arena de Aço|BR|1|||SBMK:123
SBQS||Campo Verde|Santa Rosa Airstrip|BR|1|||SBCY:127
SBQT||Tesouro|Fazenda Campo Formoso Airstrip|BR|1|||SBRD:152
SBQX||Campo Novo do Parecis|Fazenda São Carlos Airstrip|BR|1|||SWTS:132
SBRB|RBR|Rio Branco|Rio Branco-Plácido de Castro|BR|4
SBRD|ROO|Rondonópolis|Maestro Marinho Franco|BR|3
SBRF|REC|Recife|Recife/Guararapes - Gilberto Freyre|BR|4
SBRJ|SDU|Rio de Janeiro|Santos Dumont|BR|4
SBRP|RAO|Ribeirão Preto|Leite Lopes|BR|3
SBSC|SNZ|Rio de Janeiro|Santa Cruz Air Force Base|BR|2|||SBGL:50
SBSG|NAT|Natal|Rio Grande do Norte/São Gonçalo do Amarante–Governador Aluízio Alves|BR|4
SBSI|OPS|Sinop|Presidente João Batista Figueiredo|BR|2
SBSJ|SJK|São José Dos Campos|Professor Urbano Ernesto Stumpf|BR|3
SBSL|SLZ|São Luís|Marechal Cunha Machado|BR|4
SBSM|RIA|Santa Maria||BR|3
SBSN|STM|Santarém|Santarém - Maestro Wilson Fonseca|BR|3
SBSO|SMT|Sorriso|Adolino Bedin Regional|BR|2
SBSP|CGH|São Paulo|Congonhas–Deputado Freitas Nobre|BR|4
SBSR|SJP|São José do Rio Preto|Prof. Eribelto Manoel Reino State|BR|3
SBST|SSZ|Guarujá|Santos Nero Moura Air Base / Guarujá|BR|2|||SBSP:49
SBSV|SSA|Salvador|Deputado Luiz Eduardo Magalhães|BR|4
SBTA||Taubaté|Base de Aviação de Taubaté|BR|2|||SBSJ:41
SBTB|TMT|Oriximiná|Trombetas|BR|3
SBTC|UNA|Una|Una-Comandatuba|BR|2
SBTD|TOW|Toledo|Toledo - Luiz Dalcanale Filho Municipal|BR|2
SBTE|THE|Teresina|Senador Petrônio Portela|BR|3
SBTF|TFF|Tefé||BR|3
SBTG|TJL|Três Lagoas|Plínio Alarcom|BR|2
SBTK|TRQ|Tarauacá||BR|2|||SBCZ:227
SBTS||Aldeia Tiriós|Tiriós|BR|2|||SMDA:253
SBTT|TBT|Tabatinga||BR|3
SBTU|TUR|Tucuruí||BR|3
SBTV||Porto Seguro|Terravista|BR|1|||SBPS:12
SBUA|SJL|São Gabriel da Cachoeira||BR|3
SBUF|PAV|Paulo Afonso||BR|3
SBUG|URG|Uruguaiana|Rubem Berta|BR|3
SBUL|UDI|Uberlândia|Ten. Cel. Aviador César Bombonato|BR|3
SBUR|UBA|Uberaba|Mário de Almeida Franco|BR|3
SBUY|RPU|Urucu||BR|1|||SWCA:171
SBVC|VDC|Vitória da Conquista|Glauber de Andrade Rocha|BR|3
SBVG|VAG|Varginha|Major Brigadeiro Trompowsky|BR|2|||SBSJ:186
SBVH|BVH|Vilhena|Brigadeiro Camarão|BR|3
SBVT|VIX|Vitória|Eurico de Aguiar Salles|BR|4
SBYA||São Gabriel da Cachoeira|Iauaretê|BR|1|||SKMU:137
SBYS||Pirassununga|Campo Fontenelle|BR|2|||SBAQ:84
SBZM|IZA|Juiz de Fora|Presidente Itamar Franco|BR|3||SDZY
SCAB||La Lumbrera|El Alba|CL|1|||SCEL:55
SCAC|ZUD|Ancud|Pupelde|CL|1|||SCPQ:49
SCAD||Talagante|Grupo Tamarena|CL|1|||SCEL:40
SCAE||Arica|El Buitre|CL|1|||SCAR:19
SCAG||Palmilla|Agua Santa|CL|1|||SCEL:138
SCAH||Achao|Tolquien|CL|1|||SCPQ:20
SCAI||Curacautín||CL|1|||SCQP:84
SCAJ||Retiro|Las Alpacas|CL|1|||SCIE:136
SCAK||Recinto|Atacalco|CL|1|||SCIE:133
SCAL||Cochrane|Valchac|CL|1|||SAWP:131
SCAM||Teno|Alempue|CL|1|||SCEL:166
SCAN|LOB|Los Andes|San Rafael|CL|1|||SCEL:66
SCAO||Lolol|Palo Alto|CL|1|||SCEL:173
SCAP|WAP|Palena|Alto Palena|CL|1|||SAVE:95
SCAQ||Lago Ranco|Arquilhué|CL|1|||SAZY:77
SCAR|ARI|Arica|Chacalluta|CL|3
SCAS|WPA|Puerto Aysén|Cabo Juan Román|CL|1|||SCBA:95
SCAT|CPO|Copiapo|Desierto de Atacama|CL|3
SCAU||Paine|Juan Enrique|CL|1|||SCEL:56
SCAV||Linares|Achibueno|CL|1|||SCIE:167
SCAY||Ayacara||CL|1|||SCPQ:76
SCAZ||Timaukel|Azopardo|CL|1|||SAWH:58
SCBA|BBA|Balmaceda||CL|3
SCBB||Negrete|Del Bío Bío|CL|1|||SCIE:103
SCBC||Lago Verde|Cacique Blanco|CL|1|||SAVE:158
SCBD||Santa Cruz|El Boldal|CL|1|||SCEL:149
SCBE|TOQ|Tocopilla|Barriles|CL|2|||SCCF:126
SCBI|DPB|Bahia Inutil|Pampa Guanaco|CL|1|||SAWE:76
SCBL||Casablanca|El Porvenir|CL|1|||SCEL:70
SCBN||Rio Bueno|Cotreumo|CL|1|||SCJO:41
SCBO||General Bernardo O'Higgins Base|General Bernardo O'Higgins Base Skyway|AQ|1
SCBQ||Santiago|El Bosque|CL|1|||SCEL:21
SCBR||Lago Brown||CL|1|||SAWP:139
SCBS||Bahia Posesion|Posesión|CL|1|||SAWG:80
SCBT||Cochamo|Rincón Bonito|CL|1|||SCTE:105
SCBU||Molina|El Baúl Airstrip|CL|1|||SCEL:217
SCBV||Rio Claro|Bellavista|CL|1|||SCEL:205
SCCA||Cauquenes|El Boldo|CL|1|||SCIE:116
SCCB||Combarbala|Pedro Villarroel C.|CL|1|||SCSE:146
SCCC|CCH|Chile Chico||CL|2|||SAWP:54
SCCE||Cauquenes|El Arenal|CL|1|||SCIE:133
SCCF|CJC|Calama|El Loa|CL|3
SCCG||Combarbala|La Pelícana|CL|1|||SCSE:130
SCCH|YAI|Chillan|Gral. Bernardo O´Higgins|CL|2|||SCIE:94
SCCI|PUQ|Punta Arenas|President Carlos Ibáñez|CL|4
SCCK||Contao||CL|1|||SCTE:50
SCCL||Caldera||CL|1|||SCAT:20
SCCM||Choshuenco|Molco|CL|1|||SCPC:61
SCCN||Cauquenes|Alto Cauquenes|CL|1|||SCIE:119
SCCP||Zapallar|Catapilco|CL|1|||SCEL:103
SCCQ|COW|Coquimbo|Tambillos|CL|1|||SCSE:32
SCCR||Caleta Tortel|Enrique Mayer Soto|CL|1|||SAWP:238
SCCS||Casablanca|Santa Rita|CL|1|||SCEL:64
SCCT||Constitucion|Quivolgo|CL|1|||SCIE:174
SCCU||Lonquimay|Lolco|CL|1|||SCPC:133
SCCV||Curacaví||CL|1|||SCEL:35
SCCY|GXQ|Coyhaique|Teniente Vidal|CL|2|||SCBA:48
SCDA|IQQ|Iquique|Diego Aracena|CL|4
SCDD||Puerto Varas|Don Dobri|CL|1|||SCTE:54
SCDG||La Estrella|Don Aliro Garcia|CL|1|||SCEL:115
SCDH||Chaiten|Vodudahue|CL|1|||SAVE:109
SCDI||Pichidangui||CL|1|||SCEL:154
SCDK||Concepcion|El Patagual|CL|1|||SCIE:29
SCDL||Cabildo|El Algarrobo|CL|1|||SCEL:104
SCDM||Duao|San Damian|CL|1|||SCEL:207
SCDQ||Duqueco|San Lorenzo|CL|1|||SCIE:145
SCDS||Retiro|San Andrés|CL|1|||SCIE:144
SCDW||Isla Dawson|Almirante Schroeders|CL|1|||SCCI:72
SCEA||Chaiten|El Amarillo|CL|1|||SAVE:109
SCEB||Entrada Baker||CL|1|||SAWP:104
SCEC||Estacion Chañaral|Pelícano|CL|1|||SCSE:91
SCED||Sagrada Familia|Los Cedros|CL|1|||SCEL:209
SCEG||Talagante|El Corte|CL|1|||SCEL:37
SCEH||Santa Barbara|El Huachi|CL|1|||SCIE:151
SCEI||Diego de Almagro|Potrerillos|CL|1|||SCES:30
SCEK||Chepica|Chépica|CL|1|||SCEL:158
SCEL|SCL|Santiago|Comodoro Arturo Merino Benítez|CL|4
SCEO||Parral|El Salto|CL|1|||SCIE:129
SCEP||Pirque|El Principal|CL|1|||SCEL:45
SCER||Quintero||CL|1|||SCEL:96
SCES|ESR|El Salvador|Ricardo García Posada|CL|3
SCET||San Vicente De Tagua Tagua|El Tambo|CL|1|||SCEL:122
SCEV|FRT|Frutillar|El Avellano|CL|1|||SCTE:49
SCEX||Aysén|Río Exploradores|CL|1|||SCBA:135
SCEY||Entrada Mayer||CL|1|||SAWR:173
SCFA|ANF|Antofagasta|Andrés Sabella Gálvez|CL|4
SCFC||Fachinal||CL|1|||SCBA:81
SCFF||Freirina||CL|1|||SCAT:143
SCFI||Frutillar|Fundo Tehuén|CL|1|||SCTE:39
SCFJ||Ovalle|Fray Jorge|CL|1|||SCSE:92
SCFK||Chillan|Fundo El Carmen|CL|1|||SCIE:95
SCFL||Casablanca|Fundo Loma Larga|CL|1|||SCEL:57
SCFM|WPR|Porvenir|Captain Fuentes Martinez|CL|2|||SCCI:45
SCFN||Timaukel|Russfin|CL|1|||SAWE:90
SCFO||Pelarco|La Reforma|CL|1|||SCIE:217
SCFR||Frutillar||CL|1|||SCTE:35
SCFS||Chonchi|Los Calafates|CL|1|||SCPQ:40
SCFT|FFU|Futaleufu|Futaleufú|CL|1|||SAVE:66
SCFU||Futrono|Loncopan|CL|1|||SCVD:66
SCFX||Isla San Felix||CL|1
SCGA||La Union|Punta Galera|CL|1|||SCVD:65
SCGB||Los Sauces|Guadaba|CL|1|||SCQP:108
SCGC|UGL|Union Glacier|Union Glacier Blue-Ice Runway|AQ|1
SCGE|LSQ|Los Angeles|María Dolores|CL|1|||SCIE:90
SCGF||Futrono|Golfo Azul|CL|1|||SCJO:84
SCGH||Los Angeles|Cholguahue|CL|1|||SCIE:113
SCGI||Retiro|San Guillermo|CL|1|||SCIE:140
SCGL||Rapel|Las Aguilas|CL|1|||SCEL:110
SCGM||Rengo|Los Gomeros|CL|1|||SCEL:108
SCGN||Chaiten|Caleta Gonzalo|CL|1|||SCPQ:95
SCGO||Angol|Los Confines|CL|1|||SCIE:118
SCGS||Cholguan|Siberia|CL|1|||SCIE:98
SCGU||Antofagasta|Aguas Blancas|CL|1|||SCFA:97
SCGV||Caleta Chañaral De Aceituno|Punta Gaviota|CL|1|||SCSE:96
SCGY||Cunco|Los Guayes|CL|1|||SCPC:27
SCGZ|WPU|Puerto Williams|Guardia Marina Zañartu|CL|2|||SAWH:44
SCHA||Copiapo|Chamonate|CL|1|||SCAT:36
SCHC||Santiago|Chicureo|CL|1|||SCEL:19
SCHD||Chaiten|Chumilden|CL|1|||SCPQ:77
SCHE||Huepil|Rucamanqui|CL|1|||SCIE:114
SCHG||Pichidegua|Almahue|CL|1|||SCEL:124
SCHH||Chile Chico|Punta Baja|CL|1|||SCBA:129
SCHK||La Union|Hueicolla|CL|1|||SCJO:71
SCHL||Lampa|Hacienda Lipangue|CL|1|||SCEL:13
SCHM||Isla Mocha|Punta El Saco|CL|1|||SCQP:123
SCHN||Choshuenco|Chan Chan|CL|1|||SCPC:66
SCHO||Los Vilos|Punta Chungo|CL|1|||SCEL:180
SCHP||Retiro|Copihue|CL|1|||SCIE:138
SCHR|LGR|Cochrane||CL|2|||SAWP:145
SCHT||Chaiten|Tic Toc|CL|1|||SCPQ:156
SCHU||Huasco|Gran Cañon|CL|1|||SCAT:100
SCHW||Hualaihue|Hualaihué|CL|1|||SCTE:73
SCIA||Isla Apiao||CL|1|||SCPQ:50
SCIB||Isla Butachauques|Butachauques|CL|1|||SCPQ:47
SCIC||Curico|General Freire|CL|1|||SCEL:179
SCID||Punta Arenas|Marco Davison Bascur|CL|1|||SCCI:15
SCIE|CCP|Concepcion|Carriel Sur|CL|4
SCIF||Llifen|Chollinco|CL|1|||SCJO:83
SCIH||Caleta Andrade||CL|1|||SCBA:166
SCII||Puerto Ingeniero Ibañez||CL|1|||SCBA:47
SCIK||Isla Talcan||CL|1|||SCPQ:76
SCIL||Illapel|Aucó|CL|1|||SCSE:185
SCIM||Isla Mocha||CL|1|||SCQP:122
SCIN|||Mininco|CL|1|||SCQP:121
SCIO||Villa O'Higgins|Laguna Redonda|CL|1|||SAWC:159
SCIP|IPC|Isla De Pascua|Mataveri|CL|4
SCIR||Isla Robinson Crusoe|Robinson Crusoe|CL|1
SCIS||Isla Santa Maria|Puerto Sur|CL|1|||SCIE:49
SCIT||Isla Tierra Del Fuego|Iván Martinez|CL|1|||SCCI:55
SCJC||Ranguelmo|James Conrad|CL|1|||SCIE:34
SCJK||Osorno|Juan Kemp|CL|1|||SCJO:66
SCJO|ZOS|Osorno|Cañal Bajo Carlos Hott Siebert|CL|3
SCJS|||José Abel Sepúlveda|CL|1|||SCIE:108
SCJV||San Javier|El Parrón|CL|1|||SCIE:179
SCKA||San Carlos|Santa Marta|CL|1|||SCIE:109
SCKB||Lago Caburga|Llollenorte|CL|1|||SCPC:32
SCKC||Cunco|Roberto Chavéz|CL|1|||SCQP:38
SCKD||Rio Bueno|El Cardal|CL|1|||SCJO:36
SCKE||Pelluhue|Piedra Negra|CL|1|||SCIE:109
SCKI||Curico|Los Lirios|CL|1|||SCEL:173
SCKK||Molina|La Cascada|CL|1|||SCEL:223
SCKL||Lampa|Lipangui|CL|1|||SCEL:9
SCKM||Cochamo|Cochamó|CL|1|||SCTE:66
SCKN||Licanten|Licancel|CL|1|||SCEL:211
SCKO||Collipulli|Agua Buena|CL|1|||SCQP:109
SCKP|CPP|Pica|Coposa|CL|1|||SCDA:158
SCKQ||Pucon|Curimanque|CL|1|||SCPC:10
SCKT||Coelemu|Torreón|CL|1|||SCIE:46
SCLA||Lautaro|General Tovarías|CL|1|||SCQP:46
SCLB||Lebu|Los Pehuenches|CL|1|||SCIE:111
SCLC||Santiago|Municipal de Vitacura|CL|1|||SCEL:19
SCLD||Llanada Grande||CL|1|||SAZS:103
SCLE||Antofagasta|La Escondida|CL|1|||SCFA:164
SCLF||Llifen|Calcurrupe|CL|1|||SCJO:81
SCLG||Pencahue|La Aguada|CL|1|||SCIE:197
SCLI||Llico|Torca|CL|1|||SCEL:194
SCLJ||La Junta||CL|1|||SAVE:157
SCLK||Cunco|Lago Colico|CL|1|||SCPC:30
SCLL|VLR|Vallenar||CL|2|||SCAT:148
SCLM||San Javier|Las Mercedes|CL|1|||SCIE:177
SCLN|ZLR|Linares|Municipal de Linares|CL|1|||SCIE:169
SCLO||Chile Chico|Leones|CL|1|||SCBA:128
SCLP||Molina|Los Petiles|CL|1|||SCEL:205
SCLQ||La Ligua|Diego Portales|CL|1|||SCEL:114
SCLR||Chaiten|Los Alerces|CL|1|||SCPQ:100
SCLS||Lautaro|Esperanza|CL|1|||SCQP:61
SCLT||Litueche|Topocalma|CL|1|||SCEL:133
SCLU||Marchigue|La Laguna|CL|1|||SCEL:134
SCLV||Guangali|La Viña|CL|1|||SCEL:151
SCLY||Arauco|La Playa|CL|1|||SCIE:52
SCMA||Puerto Marin Balmaceda|Puerto Marín Balmaceda|CL|1|||SCPQ:172
SCMC||Lonquimay|Icalma|CL|1||SCQI|SCPC:87
SCME||Melipilla|Los Cuatro Diablos|CL|1|||SCEL:46
SCMF||Villarrica|Malloco|CL|1|||SCPC:37
SCMG||San Javier|Santa María de Mingre|CL|1|||SCIE:164
SCMH||Marchigue|La Esperanza|CL|1|||SCEL:122
SCMI||Mialqui|Los Tricahues|CL|1|||SCSE:97
SCMK||Melinka||CL|1|||SCPQ:173
SCML||Melipeuco||CL|1|||SCPC:49
SCMN||Pichilemu|Mónaco|CL|1|||SCEL:146
SCMO||Molina|Los Monos|CL|1|||SCEL:208
SCMP||Melipilla||CL|1|||SCEL:49
SCMR||Rapel|Las Aguilas Oriente|CL|1|||SCEL:110
SCMS||Longavi|Las Moras|CL|1|||SCIE:156
SCMU||Pichilemu|Panilonco|CL|1|||SCEL:146
SCMV||Molina|Viña San Pedro|CL|1|||SCEL:197
SCMY||Michilla|Carolina|CL|1|||SCFA:84
SCMZ||El Manzano|Marina de Rapel|CL|1|||SCEL:104
SCNA||Linares|Fundo La Caña|CL|1|||SCIE:158
SCND||Ñadis||CL|1|||SAWP:181
SCNH||Vilcún|Ainhoa|CL|1|||SCQP:44
SCNI||San Nicolas|Santa Eugenia|CL|1|||SCIE:89
SCNK||Cuncumen|Los Pelambres|CL|1|||SCEL:170
SCNL||Villa Cerro Castillo||CL|1|||SCBA:43
SCNM||Cañete|Las Misiones|CL|1|||SCIE:115
SCNO||Ñochaco||CL|1|||SCJO:35
SCNP|||Nueva Pintacura|CL|1|||SCEL:192
SCNT|PNT|Puerto Natales|Lieutenant Julio Gallardo|CL|3
SCNY||Navarino|Yendegaia|CL|1|||SAWH:35
SCOA||Ovalle|Estancia Los Loros|CL|1|||SCSE:105
SCOB||Ovalle|Tabalí Bajo|CL|1|||SCSE:83
SCOC||Puerto Octay|Las Araucarias|CL|1|||SCJO:54
SCOE||Romeral|San Miguel|CL|1|||SCEL:176
SCOH||Villa O'Higgins||CL|1|||SAWR:181
SCOI||Hualanne|Los Coipos|CL|1|||SCEL:187
SCOL||Puyehue|Refugio del Lago|CL|1|||SCJO:61
SCOM||Olmué||CL|1|||SCEL:57
SCON||Quellon|Quellón|CL|1|||SCPQ:89
SCOO||Cisnes|Melimoyu|CL|1|||SCPQ:202
SCOP||Osorno|Pilauco|CL|1|||SCJO:9
SCOT||Ovalle|Santa Rosa de Tabalí|CL|1|||SCSE:87
SCOV|OVL|Ovalle|El Tuqui|CL|1|||SCSE:72
SCOY||Ovalle|Huayanay|CL|1|||SCSE:66
SCPA||Antofagasta|Paranal|CL|1|||SCFA:133
SCPB||Puelo Bajo||CL|1|||SCTE:70
SCPC|ZPC|Pucon|Pucón|CL|2
SCPD||Peldehue||CL|1|||SCEL:32
SCPE||San Pedro De Atacama||CL|1|||SCCF:90
SCPF||Puerto Montt|Marcel Marchant|CL|1|||SCTE:15
SCPG||Panguipulli|Municipal de Panguipulli|CL|1|||SCPC:55
SCPH||Puyuhuapi||CL|1|||SCBA:185
SCPI||Coihueco|Pullami|CL|1|||SCIE:114
SCPK||Puerto Cisnes||CL|1|||SCBA:151
SCPL||Paillaco|Calpulli|CL|1|||SCJO:63
SCPM||Pichilemu||CL|1|||SCEL:159
SCPN||Chaiten|Pillán|CL|1|||SCPQ:103
SCPO||Quinta de Tilcoco|Los Paltos|CL|1|||SCEL:105
SCPP||Mulchen|Poco a Poco|CL|1|||SCQP:132
SCPQ|MHC|Dalcahue|Mocopulli|CL|2
SCPR||Purranque|Corte Alto|CL|1|||SCJO:38
SCPS||Copiapo|Perales|CL|1|||SCAT:21
SCPT||Santa Cruz|La Puerta|CL|1|||SCEL:146
SCPU||Peulla||CL|1|||SAZS:72
SCPV|PUX|Puerto Varas|El Mirador|CL|1|||SCTE:16
SCPW||Peumo||CL|1|||SCEL:118
SCPX||Punta Catalina||CL|1|||SAWG:112
SCPY||Cerro Castillo||CL|1|||SAWT:39
SCPZ||Patriot Hills Base Camp|Patriot Hills|AQ|1
SCQC||Quino|La Colmena|CL|1|||SCQP:66
SCQE||Isla Quenac|Quenac|CL|1|||SCPQ:34
SCQK||Tirua|Lequecahue|CL|1|||SCQP:96
SCQL||Quillota|El Boco|CL|1|||SCEL:74
SCQM||Osorno|Las Quemas|CL|1|||SCJO:6
SCQO||Aysén|Quitralco|CL|1|||SCBA:125
SCQP|ZCO|Temuco|La Araucanía|CL|4
SCQR||Cobquecura|Los Morros|CL|1|||SCIE:76
SCQT||Quebrada Las Tacas|Las Tacas|CL|1|||SCSE:26
SCQW||Quemchi||CL|1|||SCPQ:27
SCQX||Queilen|Queilén|CL|1|||SCPQ:64
SCQY||Lonquimay|Villa Portales|CL|1|||SCPC:106
SCRA|CNR|Chañaral||CL|2|||SCES:84
SCRB||Tortel|Río Bravo|CL|1|||SAWP:230
SCRC||Rio Cisnes|Villa Tapera|CL|1|||SCBA:143
SCRD|VAP|Viña Del Mar|Rodelillo|CL|1|||SCEL:80
SCRE||Rio Cisnes|Estancia Río Cisnes|CL|1|||SCBA:160
SCRF||Laguna San Rafael||CL|1|||SCBA:185
SCRG||Rancagua|La Independencia|CL|2|||SCEL:87
SCRH||Reñihue|Reñihúe|CL|1|||SCPQ:104
SCRI||Cochamó|Río Frío|CL|1|||SAZS:91
SCRL||Rapel|La Estrella|CL|1|||SCEL:110
SCRM|TNM|Villa Las Estrellas|Teniente Rodolfo Marsh Martin|AQ|1
SCRN||Río Negro||CL|1|||SCTE:78
SCRO||Romeral|Santa Bárbara|CL|1|||SCEL:178
SCRP||Rapel|Rapelhuapi|CL|1|||SCEL:104
SCRQ||Rio Bueno|Rucañanco|CL|1|||SCJO:26
SCRR||Rio Bueno|Purrahuín|CL|1|||SCJO:36
SCRS||Cartagena|El Rosario|CL|1|||SCEL:58
SCRT||Retiro|El Almendro|CL|1|||SCIE:145
SCRU||Rio Murta|Río Murta|CL|1|||SCBA:97
SCRV||Vilcún|La Verónica|CL|1|||SCQP:57
SCRW||Paredones|Rucalonco|CL|1|||SCEL:173
SCRZ||Marchigue|El Carrizal|CL|1|||SCEL:144
SCSA||Til Til|Alberto Santos Dumont|CL|1|||SCEL:41
SCSB|SMB|Cerro Sombrero|Franco Bianco|CL|1|||SCCI:106
SCSD||San Fernando||CL|1|||SCEL:131
SCSE|LSC|La Serena-Coquimbo|La Florida|CL|3
SCSF|SSD|San Felipe|Víctor Lafón|CL|1|||SCEL:72
SCSG||Algarrobo|San Gerónimo|CL|1|||SCEL:78
SCSH||Teodoro Schmidt|El Budi|CL|1|||SCQP:47
SCSJ||San Javier||CL|1|||SCIE:176
SCSK||San Clemente|Colorado|CL|1|||SCIE:200
SCSL||Salar De Atacama|El Salar|CL|1||SCSI|SCCF:142
SCSM||Salar De Atacama|Minsal|CL|1|||SCCF:132
SCSN||Santo Domingo||CL|1|||SCEL:82
SCSO||Lago Rapel|Costa del Sol|CL|1|||SCEL:106
SCSP||Petorca|El Sobrante|CL|1|||SCEL:130
SCSQ||San Pablo|Quilpe|CL|1|||SCJO:37
SCSR||Segundo Corral|Segundo Corral Alto|CL|1|||SAVE:109
SCSS||Porvenir|San Sebastián|CL|1|||SAWE:79
SCST|WCA|Castro|Gamboa|CL|1|||SCPQ:17
SCSU||Freire|Santa Lucía|CL|1|||SCQP:25
SCSV||Peralillo|Viñasutil|CL|1|||SCEL:130
SCSZ||Puerto Sanchez|Puerto Sanchéz|CL|1|||SCBA:102
SCTA||Santa Barbara|Santa Luisa|CL|1|||SCQP:155
SCTB||Santiago|Eulogio Sánchez|CL|1|||SCEL:23
SCTC|PZS|Temuco|Maquehue|CL|2|||SCQP:18
SCTE|PMC|Puerto Montt|El Tepual|CL|4
SCTG||Tongoy||CL|1|||SCSE:48
SCTH||San Gregorio|Tres Chorrillos|CL|1|||SCCI:54
SCTL|TLX|Talca|Panguilemo|CL|2|||SCIE:203
SCTM||Curico|La Montaña|CL|1|||SCEL:176
SCTN|WCH|Chaitén|Nuevo Chaitén|CL|2|||SCPQ:87
SCTO|ZIC|Victoria||CL|2|||SCQP:80
SCTP||Tortel|Río Pascua|CL|1|||SAWR:240
SCTQ||Alto Del Carmen|Tres Quebradas|CL|1|||SCSE:130
SCTR||Traiguen|Traiguén|CL|1|||SCQP:73
SCTS||Melipilla|Santa Teresa del Almendral|CL|1|||SCEL:49
SCTT|TTC|Taltal|Las Breas|CL|2|||SCES:103
SCTU||Litueche||CL|1|||SCEL:117
SCTW||Casablanca|El Tapihue|CL|1|||SCEL:52
SCUI||Chaiten|Pumalín|CL|1|||SCPQ:83
SCUL||Bulnes|El Litral|CL|1|||SCIE:58
SCUM||Cumpeo|La Obra|CL|1|||SCEL:218
SCUN||Teno|Uni Frutti|CL|1|||SCEL:160
SCUP||Cumpeo|Lontuecito|CL|1|||SCEL:214
SCUR||Bulnes|Rucamalen|CL|1|||SCIE:80
SCUT||Longavi|Verfrut Sur|CL|1|||SCIE:149
SCUU|||El Peral|CL|1|||SCSE:193
SCUZ||Santa Cruz|Aerosanta Cruz|CL|1|||SCEL:150
SCVA||Casablanca|Viñamar|CL|1|||SCEL:53
SCVB||Parral|Hospital Villa Baviera|CL|1|||SCIE:140
SCVC||Vicuña|El Indio|CL|1|||SCSE:112
SCVD|ZAL|Valdivia|Pichoy|CL|3
SCVE||Lago Verde||CL|1|||SAVE:164
SCVF||San Pedro|Verfrut|CL|1|||SCEL:88
SCVG||Riñihue|El Vergel|CL|1|||SCVD:55
SCVH||Santiago|La Victoria de Chacabuco|CL|1|||SCEL:39
SCVI||Villarrica||CL|1|||SCPC:27
SCVJ||Marchigue|Paredes Viejas|CL|1|||SCEL:132
SCVK||Vichuquen|El Alamo|CL|1|||SCEL:198
SCVL||Valdivia|Las Marías|CL|2
SCVM|KNA|Viña del Mar||CL|2|||SCEL:81
SCVN||Vicuña|Huancara|CL|1|||SCSE:46
SCVO||Victoria|María Ester|CL|1|||SCQP:79
SCVQ||Vichuquen|Cuatro Pantanos|CL|1|||SCEL:199
SCVS||Cochrane|Lago Vargas|CL|1|||SAWP:203
SCVT||Isla De Maipo|Viña Tarapacá|CL|1|||SCEL:43
SCVU||Vilcun|Agromanzún|CL|1|||SCQP:37
SCVV||La Union|Los Maitenes de Villa Vieja|CL|1|||SCJO:33
SCVY||Vilcun|Malla|CL|1|||SCQP:41
SCVZ|||Vina Santa Cruz|CL|1|||SCEL:162
SCXA||Molina|Alupenhue|CL|1|||SCEL:207
SCXB||Salamanca|Las Brujas|CL|1|||SCEL:180
SCXR||Lago Ranco|Las Bandurrias|CL|1|||SCJO:78
SCYB||Yumbel|Trilahue|CL|1|||SCIE:69
SCYC||Puyehue|La Capilla|CL|1|||SCJO:25
SCYL||Puyehue|Licán|CL|1|||SCJO:55
SCYO||El Chaiten|Poyo|CL|1|||SCPQ:85
SCYR||Retiro|Los Maitenes|CL|1|||SCIE:144
SCYU||Purranque|Cuyumaique|CL|1|||SCJO:37
SCZB||La Unión|Pozo Brujo|CL|1|||SCJO:61
SCZC||Zapallar|Casas Viejas|CL|1|||SCEL:103
SCZE||Pirque|Estero Seco|CL|1|||SCEL:45
SCZR||Curepto|Los Zorrillos de Tonlemu|CL|1|||SCEL:208
SDAA||Araras||BR|1|||SBKP:78
SDAD||Adamantina|Everaldo Moras Barreto|BR|1|||SBDN:63
SDAE||São Pedro||BR|1|||SBAQ:89
SDAF||Analândia|Fazenda Palmeiras|BR|1|||SBAQ:57
SDAG|GDR|Angra dos Reis||BR|1|||SBGL:110
SDAI||Americana||BR|1|||SBKP:31
SDAJ||Jateí|Fazenda Recanto|BR|1|||SSUM:155
SDAM||Campinas|Estadual de Campos dos Amarais - Prefeito Francisco Amaral|BR|1|||SBKP:17
SDAN||Brotas|Fazenda Santo Ângelo|BR|1|||SBAQ:50
SDAO||São José do Rio Claro|Fazenda Portela|BR|1|||SWTS:120
SDAR||Porto dos Gaúchos|Fazenda Agrovera|BR|1|||SBSI:75
SDAS||Mirandópolis|Fazenda Santo Antônio|BR|1|||SBTG:71
SDAU||Água Clara|Fazenda Itau|BR|1|||SBTG:173
SDAY||Santa Maria das Barreiras|Fazenda Santa Lucia|BR|1|||SBPJ:266
SDBA||Batatais||BR|1|||SBRP:35
SDBB||Bebedouro||BR|1|||SBRP:77
SDBD||Vera|Fazenda Sodema|BR|1||SDKW|SBSO:25
SDBE||Moju|Biopalma|BR|1|||SBBE:100
SDBI||Sete Quedas|Fazenda Piray|BR|1|||SSGY:90
SDBJ||Patrocínio|Boa Vista|BR|1|||SBAX:90
SDBK||Botucatu|Botucatu - Tancredo de Almeida Neves|BR|1|||SBAE:106
SDBN||Salto de Pirapora|Associação Recreativa Fazenda Bonanza|BR|1|||SDCO:24
SDBP||Santa Fé de Goiás|Fazenda Pontal|BR|1|||SBGO:226
SDBV||Ilha Comprida|Balneário São Januário|BR|1|||SDCO:157
SDBX||Itapejara d'Oeste|Eloy Biesuz|BR|1|||SSFB:15
SDBY||Bariri|Bariri - Aparecido O. Silva|BR|1|||SBAE:39
SDBZ||Arraias|Fazenda Brauna|BR|1|||SNBR:211
SDCA||Capão Bonito||BR|1|||SDCO:108
SDCB||Brasília|Centro Brasileiro de Aviação Agrícola Experimental e Recreativo|BR|1|CBAAER||SBBR:26
SDCD||Catanduva||BR|1|||SBSR:57
SDCE||Aliança do Tocantins|Fazenda Boa Sorte|BR|1|||SBPJ:118
SDCF||Aquidauana|Fazenda Porto Ciriaco|BR|1|||SBCR:165
SDCG|OLC|São Paulo De Olivença|Senadora Eunice Micheles|BR|1|||SKRA:112
SDCH||Itumbiara|Fazenda Rosa dos Ventos|BR|1|||SBCN:146
SDCJ||Alto Araguaia|Fazenda São Domingos Airstrip|BR|1|||SBRD:173
SDCK||Brasilândia de Minas|Fazenda Gleba da Barra|BR|1|||SNZR:90
SDCL||Cerqueira César|Fazenda Campo Alegre|BR|1|||SBAE:111
SDCM||São Desidério|Sete Povos|BR|1|||SNBR:153
SDCO|SOD|Sorocaba||BR|2
SDCR||Itanhaém|Fazenda Caiçara|BR|1|||SBSP:52
SDCU||Casemiro de Abreu|Brigadeiro Francisco Pinto de Moura|BR|1|||SBCB:41
SDCW||Colômbia|Fazenda Paloma|BR|1|||SBSR:81
SDCX||Gilbués|Celeiro 2|BR|1|||SNBR:298
SDCZ||Mangaratiba|Fazenda Bom Jardim|BR|1|||SBGL:87
SDDA||Corumbá|Fazenda Santa Alaydes Airstrip|BR|1|||SBRD:225
SDDB||Bom Jesus da Lapa|Ninho do Bacurau|BR|1|||SNBR:209
SDDC||Pontes E Lacerda|Fazenda São João do Guaporé|BR|1
SDDD||Corumbá|Fazenda São Francisco|BR|1|||SBRD:181
SDDE||Manicoré|Fazenda Dois Irmãos|BR|1|||SBPV:246
SDDI||Salmourão|Fazenda Tamara|BR|1|||SBAU:66
SDDJ||Monções|Fazenda Santa Maria|BR|1|||SBAU:48
SDDK||Ocauçu|Saint-Exupéry|BR|1|||SBML:32
SDDL||São João Da Paraúna|Fazenda Limeira|BR|1|São João Da Paraúna,||SBGO:129
SDDN||Andradina||BR|1|||SBTG:37
SDDQ||Riachão das Neves|Fazenda São Francisco|BR|1|||SNBR:69
SDDR||Dracena||BR|1|||SBTG:79
SDDV||Palmares Paulista|Usina Catanduva|BR|1|||SBSR:68
SDDX||Populina|Fazenda Paiquerê|BR|1|||SBAU:140
SDEB||Timburi|Fazenda São Paulo dos Palmares|BR|1|||SBML:126
SDED||Ipeúna|Scoda Aeronáutica|BR|1|||SBAQ:83
SDEJ||Itapetininga|Fazenda Guará do Pinhal|BR|1|||SDCO:63
SDEM||Álvares Machado|Estância Machado|BR|1|||SBDN:8
SDEN||Porto Belo|Costa Esmeralda|BR|1|||SBNF:32
SDEO||Ibitinga|Fazenda Entre Rios|BR|1|||SBAE:53
SDEP||Presidente Epitácio|Geraldo Moacir Bordon State|BR|1|||SBDN:86
SDER||Sud Menucci|Fazenda Entre Rios|BR|1|||SBAU:61
SDES||Sales de Oliveira|Estância Colorado|BR|1|||SBRP:42
SDET||Tietê||BR|1|||SDCO:48
SDEV||Campos de Júlio|Fazenda Ventania|BR|1|||SBVH:120
SDFC||Altair|Fazenda Constância|BR|1|||SBSR:43
SDFD||Fernandópolis|Fernandópolis - Coronel Aviador Carlos Orleans Guimarães|BR|1|||SBAU:99
SDFE||Guiratinga|Fazenda Pertinho do Céu|BR|1|||SBRD:88
SDFF||Lábrea|Fazenda Fusão|BR|1|||SBRB:73
SDFH||Santa Rosa Do Viterbo|Fazenda Amália|BR|1|||SBRP:54
SDFI||Fazenda Rio Crixás||BR|1
SDFK||Marabá Paulista|Fazenda Figueira|BR|1|||SBDN:76
SDFT||Itapira|Virgulino de Oliveira|BR|1|||SBKP:74
SDFU||Presidente Eptácio|Fazenda Ponte Funda|BR|1|||SBDN:83
SDFX||Casa Nova||BR|1|||SBPL:46
SDFY||Rio Negro|Fazenda Valença|BR|1|||SBCG:129
SDFZ||Riachão das Neves|Fazenda Santana|BR|1|||SNBR:91
SDGA||Angélica|Adecoagro|BR|1|||SBCG:194
SDGB||Guaíra|Usina Colorado|BR|1|||SBUR:61
SDGC||Garça||BR|1|||SBML:28
SDGF||Nova Alvorada do Sul|Usina Santa Luzia|BR|1|||SBCG:129
SDGJ||Porto Murtinho|Fazenda São José|BR|1|||SBDB:48
SDGM||Baldim|Fazenda Mucambo|BR|1|||SBCF:39
SDGP||Paranatinga|Fazenda Gaivota|BR|1|||SBSO:293
SDGQ||Limoeiro do Norte|Jeová Gomes|BR|1|||SBMS:86
SDGT||Manacapuru|Agrotec|BR|1|||SBEG:58
SDGX||Cairu|Morro de São Paulo|BR|1||SNPP|SNVB:17
SDGY||Araçatuba|Fazenda Anhangaí|BR|1|||SBAU:41
SDHC||Getulina|Fazenda Koga|BR|1|||SBML:37
SDHE||Itapira|Fazenda Herdade|BR|1|||SBKP:65
SDHK||Campinorte|Fazenda Tulipa Airstrip|BR|1|||SBBR:230
SDHP||Ribas do Rio Pardo|Modelo II|BR|1|||SBCG:164
SDHR||Porto Murtinho|Fazenda União|BR|1|||SBDB:89
SDHS||Porto dos Gaúchos|Fazenda Ouro Branco|BR|1|||SBSI:91
SDHX||Tapes|D'Tapes|BR|1|||SBPA:91
SDIB||Espírito Santo Do Pinhal|Irmãos Ribeiro|BR|1|||SBKP:101
SDID||Araçatuba|Aeroata|BR|1|||SBAU:17
SDIE||Lagoa Grande|Fazenda Lagoa|BR|1|||SNZR:68
SDIG||Ibitinga||BR|1|||SBAE:51
SDIH||Biritiba-Mirim|Fazenda Irohy|BR|1|||SBSJ:43
SDIL||Angra dos Reis|Fazenda Pedra Branca|BR|1|||SBGL:107
SDIM|JTN|Itanhaém||BR|1|||SBSP:61
SDIN||Anaurilândia|Fazenda Piúna|BR|1|||SBDN:158
SDIO||Itápolis|Aeroclube de Itápolis|BR|1|||SBAE:67
SDIP||Caçapava|Fazenda Centro de Vôo a Vela Ipuã|BR|1|||SBSJ:23
SDIR||Iracema|Ajarani 2 Airstrip|BR|1|||SBBV:182
SDIV||Ituverava||BR|1|||SBUR:71
SDIX||Ninheira|MGX Florestal|BR|1|||SBVC:96
SDIY|FEC|Feira de Santana|João Durval Carneiro|BR|2||SBFE|SBSV:101
SDIZ||Baixa Grande do Ribeiro|Fazenda Diamante|BR|1
SDJA||Itirapina|Doutor José Augusto de Arruda Botelho|BR|1|||SBAQ:51
SDJC||Jaboticabal||BR|1|||SBRP:54
SDJF||Buri|Fazenda Jequitibá|BR|1|||SDCO:106
SDJG||Currais|Fazenda São João do Pirajá Airstrip|BR|1
SDJL|JLS|Jales||BR|1|||SBAU:95
SDJN||Jardinópolis|Fazenda São Luiz|BR|1|||SBRP:6
SDJO||São Joaquim Da Barra||BR|1|||SBRP:60
SDJQ||Pereira Barreto|Fazenda São Joaquim O.B.|BR|1|||SBAU:70
SDJR||Sete Lagoas|JN Resort|BR|1|||SBCF:42
SDJS||Uiramutã|Andorinha|BR|1|||SYKA:97
SDJV||São João da Boa Vista|São João da Boa Vista Municipal|BR|1|||SBKP:114
SDJX||Palmeirópolis|Fazenda Serra Dourada|BR|1
SDJZ||São Gabriel|Fazenda São José|BR|1|||SBSM:52
SDKA||Normandia|Angical|BR|1|||SYLT:88
SDKE||Valença do Piauí||BR|1|||SBTE:189
SDKJ||Formosa do Rio Preto||BR|1|||SNBR:119
SDKK||Mococa||BR|1|||SBRP:86
SDKL||Normandia|Caracaranã|BR|1|||SYLT:52
SDKO||Colômbia|Fazenda Campo Grande|BR|1|||SBSR:90
SDKP||Nova Andradina|Fazenda Pirangi|BR|1|||SSUM:171
SDKQ||Guaraci|Fazenda São João|BR|1|||SBSR:79
SDKX||Rosário Oeste|Fazenda Serra Azul|BR|1|||SBCY:125
SDKZ||Uiramutã|Caraparu 4|BR|1|||SVSE:75
SDLD||Confresa|Fazenda Barra Grande|BR|1
SDLE||Rio de Contas||BR|1|||SBLE:134
SDLG||Costa Rica|Fazenda Planalto|BR|1|||SBRD:241
SDLH||São Gabriel do Oeste|Fazenda Pato Branco|BR|1|||SBCG:129
SDLI||Campo Novo do Parecis|Fazenda Dois Irmãos|BR|1|||SWTS:127
SDLK||Caculé||BR|1|||SBVC:153
SDLL||Leme|Yolanda Penteado|BR|1|||SBAQ:90
SDLM||Normandia|Guariba Airstrip|BR|1|||SYLT:56
SDLN||Querência|Primavera|BR|1||SNXL
SDLO|PBA|Cairu|Fábio Perini|BR|1|||SNVB:30
SDLP||Lençóis Paulista|José Boso Municipal|BR|1|||SBAE:56
SDLR||Tapauá|Luiz Ribeiro Maia|BR|1|||SBMY:212
SDLU||Barra Bonita|Fazenda Santa Luíza|BR|1|||SBAE:67
SDLW||Aruanã|Fazenda Colorado|BR|1|||SBGO:253
SDLX||São Félix do Araguaia|Fazenda Jacareúna|BR|1
SDLY||Matão|Armando Natali|BR|1|||SBAQ:31
SDLZ||Campo Verde||BR|1||SIWJ|SBCY:105
SDMA||Itupeva|Muraro|BR|1|||SBKP:21
SDMC||Baixa Grande do Ribeiro|Cajupi|BR|1
SDMD||Coxim|Fazenda Santa Izabel|BR|1|||SBRD:159
SDME||Matão|Marchesan S.A.|BR|1|||SBAQ:34
SDMF||Miranda|Fazenda Damaro|BR|1||SSIW|SBDB:141
SDMG||Alto Alegre|Haxiu|BR|1
SDMH||Mirassol||BR|1|||SBSR:8
SDMJ||Mogi Mirim|Mogi-mirim|BR|1|||SBKP:70
SDMK||Brasilândia|Fazenda Tropical|BR|1|||SBTG:91
SDMM||Pacaraima|Lago Verde|BR|1|||SVSE:40
SDMO||Monte Alto||BR|1|||SBAQ:74
SDMP||Itatinga|Fazenda DIMEP|BR|1|||SDCO:109
SDMR||Rio De Janeiro|Marambaia|BR|1|||SBGL:70
SDMV||Jaú|Fazenda Morro Vermelho|BR|1|||SBAE:50
SDMW||Nova Crixás|Fazenda Karajá|BR|1
SDMX||Campo Verde|Fazenda Fontana|BR|1|||SBCY:81
SDMY||Matão|Fazenda Cambuhy|BR|1|||SBAQ:41
SDNA||Comendador Gomes|Fazenda Vale Verde|BR|1|||SBUR:108
SDNB||Brasnorte||BR|1|||SBVH:237
SDNC||Dom Aquino|Fazenda Cabeceira|BR|1|||SBRD:128
SDND||Narandiba|Fazenda Nova Damasco|BR|1|||SBDN:36
SDNE||Marabá Paulista|Fazenda São Joaquim|BR|1|||SBDN:57
SDNH||Novo Horizonte||BR|1|||SBAE:76
SDNI||Cotia|Nascimento I|BR|1|||SBSP:33
SDNJ||Capão Bonito|Nascimento II|BR|1|||SDCO:100
SDNK||Primavera do Leste|Fazenda Vitória|BR|1|||SBRD:194
SDNL||Caarapó|Fazenda Santa Claudina|BR|1|||SBPP:105
SDNM|NVM|Nova Mutum|Brigadeiro Eduardo Gomes|BR|1|||SBSO:154
SDNO||São Manuel||BR|1|||SBAE:78
SDNQ||Senador Guiomard|Fazenda Água Limpa|BR|1|||SBRB:46
SDNS||Chapada dos Guimarães|Fazenda Furnas|BR|1|||SBCY:122
SDNT||Porto Nacional|Fazenda Terra Prometida|BR|1|||SBPJ:18
SDNV||Altamira|Aldeia Nacepoti|BR|1|||SBAT:233
SDNW||Rio Negro|Fazenda Guanabara|BR|1|||SBCG:121
SDNY||Campo Novo do Parecis|Fazenda Ponte Serrada|BR|1|||SWTS:98
SDOA||Barra do Corda|Fazenda Lagoa da Floresta|BR|1|||SBTE:255
SDOB||Tapiratiba|Fazenda São José O.B.|BR|1|||SBRP:111
SDOD||Barra Do Corda|Fazenda Vida|BR|1|||SBIZ:216
SDOE||Grajaú|Fazenda Sibéria|BR|1|||SBIZ:187
SDOI||Boituva|Centro Nacional de Pára-quedismo|BR|1|||SDCO:29
SDOL||Tapurah|Fazenda Agropesp|BR|1|||SBSO:134
SDOQ||Ribeirão Cascalheira|Fazenda Campo Claro Airstrip|BR|1
SDOR||Orlândia|Fazenda Mosquito|BR|1|||SBRP:45
SDOS||Sete Barras|Banaer|BR|1|||SDCO:112
SDOU|OUS|Ourinhos|Jornalista Benedito Pimentel|BR|1|||SBML:86
SDOV||Mozarlândia||BR|1|||SBGO:252
SDOW|OIA|Ourilândia do Norte||BR|1|||SBCJ:136
SDOX||Xinguara|Fazenda Água Fria|BR|1|||SBCJ:122
SDOY||São Félix do Xingu|Fazenda Monte Dourado|BR|1|||SBCJ:194
SDPA||Mangaratiba|Fazenda Portobello|BR|1|||SBGL:86
SDPC||Rancharia|Atena|BR|1|||SBDN:41
SDPD||Pindamonhangaba||BR|1|||SBSJ:54
SDPE|PNB|Porto Nacional||BR|2||SBPN|SBPJ:48
SDPH||São Miguel do Araguaia|Fazenda Piratininga|BR|1||SWDE
SDPI||Uiramutã|Makukem|BR|1|||SYKA:100
SDPN||Penápolis||BR|1|||SBAU:50
SDPR||Pontes e Lacerda|Fazenda Turazzi|BR|1|||SWTS:208
SDPV||Presidente Venceslau||BR|1|||SBDN:57
SDPW||Piracicaba||BR|1|||SBKP:59
SDPX||Pacaraima|Nova Vitória|BR|1|||SVSE:23
SDPY||Pirassununga||BR|1|||SBAQ:77
SDPZ||Ribas do Rio Pardo|Sossego|BR|1|||SBCG:162
SDQA||Angélica|Fazenda Aldebaran|BR|1|||SBCG:179
SDQB||Querência|Fazenda Estrela D'Alva|BR|1
SDQD||Vila Bela da Santíssima Trindade|Fazenda Candelária|BR|1||SDZE
SDQE||Poconé|Ilha do Caracará|BR|1||SIYY|SBCR:194
SDQF||Santo Antônio da Barra|Fazenda Floresta|BR|1|||SBGO:190
SDQG||Caiabu|Fazenda Nova Floresta|BR|1|||SBDN:40
SDQH||Castanheira|Fazenda Santa Clara|BR|1|||SBVH:279
SDQJ||Wanderley|Fazenda Santo Antônio da Serra do Boqueirão Airstrip|BR|1|||SNBR:138
SDQK||Rio Verde de Mato Grosso|Fazenda Taboca|BR|1|||SBCG:191
SDQL||Nioaque|Fazenda Cerro Azul|BR|1|||SBDB:75
SDQM||Barreiras|Fazenda Santo Antônio|BR|1|||SNBR:114
SDQN||Barreiras|Fazenda Palmares 2|BR|1|||SNBR:123
SDQQ||Quatá|Companhia Agrícola de Quatá|BR|1|||SBML:74
SDQT||Novo Horizonte do Sul|Fazenda Vista Alegre|BR|1|||SSUM:139
SDQU||Bom Jesus|Fazenda Colorado|BR|1
SDQX||Primavera do Leste|Fazenda Falcão|BR|1|||SBRD:144
SDQZ||Barra do Garças|Fazenda Espinhaço II|BR|1
SDRA||São Miguel Arcanjo|Fazenda das Represas|BR|1|||SDCO:72
SDRC||Rancharia|Fazenda Santana|BR|1|||SBDN:58
SDRD||Estrela do Norte|Fazenda Andorinha|BR|1|||SBBR:264
SDRF||Rio Claro|Fazenda Recanto Feliz|BR|1|||SBGL:82
SDRH||Campo Grande|Fazenda Chaparral|BR|1|||SBCG:44
SDRK||Rio Claro||BR|1|||SBKP:78
SDRL||Porto Murtinho|Fazenda Retiro Velho|BR|1|||SBDB:144
SDRM||Amajari|Olomai Airstrip|BR|1|||SVCN:296
SDRP||Amajari|Onkiola Airstrip|BR|1
SDRQ||São Desidério|Fazenda Brinquinho|BR|1|||SNBR:158
SDRR||Avaré|Avaré-Arandu|BR|1|||SBAE:104
SDRS|REZ|Resende||BR|1|||SBGL:131
SDRT||Ponto Geral||BR|1|||SVSE:41
SDRU||Inúbia Paulista|Fazenda Caramuru|BR|1|||SBDN:74
SDRV||Chapadão do Sul|Tenoar|BR|1|||SBTG:246
SDRW||Ribas do Rio Pardo|Fazenda Reserva Airstrip|BR|1|||SBTG:178
SDRX||Chapada|Fazenda do Cedro|BR|1|||SBPF:86
SDRY||Vassouras|Sítio Ouro Preto|BR|1|||SBJF:51
SDRZ||Corumbá|Fazenda Vó Zita do Rio Vermelho|BR|1|||SBCR:107
SDSA||Corumbá|Fazenda Califórnia|BR|1|||SBRD:193
SDSC|QSC|São Carlos|Mário Pereira Lopes–São Carlos|BR|1|||SBAQ:25
SDSD||Pacaraima|Samã I|BR|1|||SVSE:27
SDSE||Gabriel Monteiro|Sítio Santa Helena|BR|1|||SBAU:42
SDSG||Alto Taquari|Ipiranga|BR|1|||SBRD:195
SDSH||Alta Floresta|Fazenda Shalon|BR|1|||SBAT:64
SDSI||Sambaíba|Fazenda Alice|BR|1|||SWGN:284
SDSJ||Cascavel|Executivo|BR|1|||SBCA:15
SDSK||Jateí|Fazenda Dona Rosa S. Rezek|BR|1|||SSUM:142
SDSL||São José do Xingu|Fazenda Bang Bang|BR|1
SDSM||São Manuel|Fazenda Nossa Senhora da Conceição|BR|1|||SBAE:86
SDSQ||Santa Rita Do Passa Quatro|Usina Santa Rita|BR|1|||SBAQ:50
SDSS||Aquidauana|Fazenda Baia das Pedras Airstrip|BR|1|||SBCG:178
SDST||São Carlos|Fazenda Santa Terezinha da Barra|BR|1|||SBAQ:38
SDSV||Guariba|Fazenda Santa Cândida|BR|1|||SBRP:47
SDTA||Sinop|Tasi|BR|1|||SBSI:12
SDTB||Atibaia||BR|1|||SBGR:35
SDTD||Laguna Carapã|Fazenda Campanário|BR|1|||SBPP:70
SDTE||Arandu|Fazenda Tapijara|BR|1|||SBAE:118
SDTF||Tatuí||BR|1|||SDCO:43
SDTH||Brasnorte|Fazenda Tamanduá|BR|1|||SWTS:170
SDTI||Tupi Paulista||BR|1|||SBTG:72
SDTK|JPY|Paraty||BR|1|||SBSJ:116
SDTO||Ubarana|Fazenda Cataco|BR|1|||SBSR:63
SDTP||Tupã||BR|1|||SBML:69
SDTR||Vila Bela da Santíssima Trindade|Fazenda Triunfo|BR|1
SDTS||Jaraguari|Fazenda Planalto|BR|1|||SBCG:31
SDTV||São Desidério|Fazenda São Miguel|BR|1|||SNBR:146
SDTW||Sapezal|Fazenda Miragem|BR|1|||SWTS:165
SDTX||Ilha Solteira|Fazenda São José|BR|1|||SBTG:41
SDTY||Pradópolis|Usina São Martinho|BR|1|||SBRP:42
SDTZ||Santa Filomena|Fazenda Fortaleza|BR|1
SDUA||Novo Progresso|Vale do Curuá|BR|1
SDUB|UBT|Ubatuba|Ubatuba Gastão Madeira State|BR|1|||SBSJ:84
SDUC||Uiramutã|Santa Rita|BR|1|||SVSE:107
SDUD||Jaboticabal|Usina Santa Adélia|BR|1|||SBAQ:57
SDUE||Balsa Nova|Fazenda Thália|BR|1||SSTH|SBCT:51
SDUG||Pacaraima|Santa Rosa|BR|1|||SVSE:35
SDUK||Água Boa|Fazenda Xaimite|BR|1
SDUL||Ribeirão Preto|Usina Santa Lydia|BR|1|||SBRP:17
SDUN|ITP|Itaperuna||BR|1|||SBCP:80
SDUQ||Paraguaçu Paulista||BR|1|||SBML:75
SDUR||Itaboraí||BR|1|||SBRJ:40
SDUS||Machadinho d'Oeste|Fazenda Sucuri|BR|1|||SBJI:187
SDUU||Parapuã|Usina Califórnia|BR|1|||SBDN:64
SDUY||Apiacás|Mayrowy|BR|1|||SBAT:285
SDVA||Vargem Grande Do Sul|Fazenda Campo Vitória|BR|1|||SBRP:115
SDVE||Vera Cruz||BR|1|||SBML:12
SDVF||Uiramutã|Santo Antônio do Pão|BR|1|||SYKA:101
SDVG|VOT|Votuporanga|Domingos Pignatari|BR|1|||SBSR:74
SDVH||Bragança Paulista|Fazenda Vale Eldorado - Dr José de Aguiar Leme|BR|1|||SBGR:50
SDVI||Tangará Da Serra|Comandante Gastão|BR|1|||SWTS:6
SDVJ||Santa Maria Das Barreiras|Fazenda Santa Marta|BR|1|||SBPJ:289
SDVK||Nova Andradina|Fazenda São Pedro|BR|1|||SBCG:193
SDVM||Pontes E Lacerda|Fazenda Minas Gerais|BR|1|||SWTS:173
SDVO||Araguaína|Clube Voart|BR|1|||SWGN:14
SDVP||Uiramutã|São Luiz Cotingo|BR|1|||SVSE:76
SDVQ||Campos Lindos|Fazenda Cabeceira Verde|BR|1|||SWGN:195
SDVS||Pontal|Fazenda Vassoural|BR|1|||SBRP:28
SDVT||Taquarussu|Fazenda Campo Verde|BR|1||SSIX|SSUM:129
SDVX||Alta Floresta|Fazenda Santa Amália|BR|1||SWWN|SBAT:71
SDVY||Avanhandava|Vitalli|BR|1|||SBAU:61
SDVZ||Parelhas|Vitalli|BR|1|||SBKG:109
SDWC||Rondonópolis|Agropastoril Bom Pastor|BR|1||SDRO|SBRD:13
SDWE||Corumbá|Palmeiras|BR|1|||SBCR:66
SDWF||Pacaraima|SAPAN|BR|1|||SVSE:45
SDWG||São Desidério|Fazenda Santa Maria|BR|1|||SNBR:110
SDWH||José Bonifácio|Fazenda Avanhandava|BR|1|||SBAU:51
SDWI||Gravatá|Fazenda Lagoa do Cavalo|BR|1|||SNRU:44
SDWJ||Campo Novo do Parecis|Fazenda São Sebastião|BR|1|||SWTS:161
SDWK||Igarapava|Junqueira|BR|1|||SBUR:33
SDWL||Itupeva|Três Marias|BR|1|||SBKP:21
SDWM||Aurora do Pará|Fazenda Modelo Airstrip|BR|1|||SNEB:89
SDWN||Colômbia|Fazenda Barreiro Grande|BR|1|||SBSR:84
SDWO||Amajari|Sauba Airstrip|BR|1|||SVSE:177
SDWQ|ALT|Alenquer|Alenquer Municipal|BR|1|||SBSN:57
SDWR||São Félix Do Araguaia|Fazenda Rio Preto|BR|1
SDWU||Porto Murtinho|Fazenda Anahí|BR|1|||SBDB:143
SDWV||Senador José Porfírio|Chácara Maringá|BR|1|||SBHT:83
SDWX||Itaituba|Pista Sol Nascente|BR|1|||SBIH:218
SDWZ||Araçatuba|Palo Verde|BR|1|||SBAU:15
SDXA||Normandia|SAWI Airstrip|BR|1|||SYLT:96
SDXB||Piracuruca||BR|1|||SBPB:111
SDXD||Jaborandi|Fazenda Guará|BR|1|||SBBR:265
SDXE||Jaboticabal|Chácara Serradinho|BR|1|||SBRP:62
SDXF||Alto Paraíso||BR|1|||SBBR:199
SDXI||Camapuã|Cel Porto Airstrip|BR|1|||SBCG:179
SDXJ||Costa Rica||BR|1|||SBRD:269
SDXK||Uiramutã|Ticoça|BR|1|||SYKA:110
SDXM||Monte Belo|Monte Cristo|BR|1|||SBRP:145
SDXO||Tomazina|Fazenda Barra Grande|BR|1||SSWV|SBLO:115
SDXT||São Manuel|Fazenda Encontro das Águas|BR|1|||SBAE:86
SDXU||Gaúcha do Norte|Fazenda Relu|BR|1|||SBSO:290
SDXW||Rio Verde de Mato Grosso|Fazenda Sombra da Serra|BR|1|||SBCG:171
SDXY||Itinga do Maranhão|Sitio Cajuapara|BR|1|||SBIZ:108
SDXZ||Miguel do Passa Quatro|Fazenda Agrorosso|BR|1|||SBGO:66
SDYB||Itapetininga|Fazenda São José do Barreiro|BR|1|||SDCO:93
SDYE||Formosa do Rio Preto|Fazenda São Diego|BR|1|||SNBR:180
SDYF||Lucas Do Rio Verde|Fazenda Irmãos Munaretto|BR|1|||SBSO:78
SDYG||Ubaíra|Fazenda Rosa do Deserto Airstrip|BR|2
SDYI||Buritizeiro|Fazenda Buritiz|BR|1|||SNZR:174
SDYJ||Regente Feijó|José Martins da Silva|BR|1|||SBDN:10
SDYN||Taciba|Fazenda Esmeralda|BR|1|||SBDN:47
SDYQ||Rio Verde de Mato Grosso|Fazenda Querência|BR|1|||SBCG:180
SDYS||Porto Belo|Aeroportobelo|BR|1|||SBNF:33
SDYT||Amajari|Tucuxim|BR|1
SDYW||Luzilândia|Luzilandia|BR|1|||SBPB:101
SDYX||Campo Maior||BR|1|||SBTE:66
SDZC||Mucajaí|Uxiu Airstrip|BR|1|||SBBV:220
SDZF||Brasília|Fazenda Lamarão|BR|1|||SBBR:50
SDZG|JTA|Tauá|Pedro Teixeira Castelo|BR|1|||SBJU:183
SDZH||Pindamonhangaba|Fazenda Santa Helena|BR|1|||SBSJ:53
SDZI||Jaborandi|Fazenda Trijunção|BR|1|||SBBR:238
SDZK||Alto Alegre|Waphuta Airstrip|BR|1
SDZL||Corumbá|Fazenda Campo Zélia|BR|1|||SBCR:214
SDZN||Uiramutã|Warogarem Airstrip|BR|1|||SYKA:91
SDZO||Uiramutã|Waromada Airstrip|BR|1|||SVSE:78
SDZR||Guariba|Fazenda Cruzeiro|BR|1|||SBAQ:49
SDZS||Uruçuí|Serra Branca Agrícola|BR|1
SDZU||Marabá Paulista|Fazenda Anhumas|BR|1|||SBDN:80
SDZV||Guiratinga|Fazenda Lagoa Vermelha|BR|1|||SBRD:145
SDZW||Buritizeiro|Jonis Pereco|BR|1|||SBMK:164
SDZX||Campinápolis|Fazenda Suri|BR|1|||SBRD:261
SDZZ||Nova Europa|Sítio São José|BR|1|||SBAQ:43
SEAA||Aguayo||EC|1|||SERO:58
SEAB||Mar Abierto||EC|1|||SESA:24
SEAC||Acado||EC|1|||SECO:107
SEAD||Paandin||EC|1|||SEMC:52
SEAE||Bucay|Alba Elena|EC|1|||SEGU:67
SEAH||Achuentza||EC|1|||SEMC:72
SEAJ||Valencia|San Alejandro|EC|1|||SELT:87
SEAK||Macuma|Macuma Airstrip|EC|1|||SEMC:50
SEAL||Guayaquil|Algarrobo Airstrip|EC|1|||SEGU:21
SEAM|ATF|Ambato|Chachoán Regional|EC|2|||SELT:34
SEAN||La Esperanza|Ana María|EC|1|||SELT:89
SEAO||Samborondón|Agromarina Airstrip|EC|1|||SEGU:39
SEAP||Sangay|Arapicos|EC|1|||SEMC:53
SEAQ||Engunga|Aquapesca Airstrip|EC|1|||SESA:58
SEAR||Arajuno||EC|1|||SELT:110
SEAT||Achuar|Achuar Airstrip|EC|1|||SEMC:79
SEAU||Morona Santiago|Chau Airstrip|EC|1|||SEMC:70
SEAW||Sharamentza|Sharamentza Airstrip|EC|1|||SEMC:127
SEAX||Mashumarentza|Mashumarentza Military Airstrip|EC|1|||SEMC:112
SEAY||Ayangue||EC|1|||SESA:37
SEAZ||Valencia|Costa Azul Airstrip|EC|1|||SELT:79
SEBA||Buenavista|Solbananas|EC|1|||SERO:19
SEBL||Balzaura|Balzaura Airstrip|EC|1|||SECO:181
SEBM||Isla Puná|Brisas del Mar Airstrip|EC|1|||SERO:68
SEBO||Ventanas|Bototillal Airstrip|EC|1|||SEGU:98
SEBP||Mariscal Sucre|Blanca Piedra Airstrip|EC|1|||SEGU:46
SEBS||Tres Postes|Banastru|EC|1|||SEGU:34
SEBT||Samborondón|El Batán|EC|1|||SEGU:7
SEBU||Pastaza|Bufeo Airstrip|EC|1|||SEMC:149
SEBW||Boanamo|Boanamo Airstrip|EC|1|||SECO:111
SEBX||El Recreo|Probana|EC|1|||SEGU:58
SEBZ||Cumbaratza||EC|1|||SECA:54
SECA|LOH|La Toma|Ciudad de Catamayo|EC|2|La Toma (Catamayo)|SETM
SECB||Cononaco Bameno|Cononaco Bameno Airstrip|EC|1|||SECO:131
SECC||La Concordia|La Celeste|EC|1|||SETN:111
SECD||Los Lojas|Calademar|EC|1|||SEGU:48
SECG||Chongón|Chongón Airstrip|EC|1|||SEGU:21
SECH||Chone||EC|1|||SEMT:71
SECI||Los Lojas|Calica Airstrip|EC|1|||SEGU:49
SECK||Morona Santiago|Chankuap Airstrip|EC|1|||SEMC:74
SECM||Pozuelos|Hacienda Clementina|EC|1|||SEGU:75
SECO|OCC|Coca|Francisco De Orellana|EC|3
SECQ||Coaque||EC|1|||SETN:119
SECR||Curacay|Curaray|EC|1|||SECO:103
SECU|CUE|Cuenca|Mariscal Lamar|EC|3
SECY||Camaguay||EC|1|||SEGU:50
SECZ||Cerro Azul||EC|1|||SEGU:19
SEDA||El Consuelo|Dualar Airstrip|EC|1|||SEGU:38
SEDB||Guayas|Aerocisne|EC|1|||SEGU:62
SEDF||El Morro|Delfines Airstrip|EC|1|||SEGU:66
SEDM||Damointaro|Damointaro Airstrip|EC|1|||SECO:100
SEDO||Isla Puná|Colas de Oro|EC|1|||SEGU:63
SEDP||Pukuan|Pukuan Airstrip|EC|1|||SEMC:109
SEDS||Isla Puná|Darsacom Airstrip|EC|1|||SEGU:69
SEED||San Eduardo|San Eduardo Airstrip|EC|1|||SECO:37
SEEG||Quevedo|El Guayabo|EC|1|||SELT:92
SEEK||Tekerika Suraka|Tekerika Suraka Airstrip|EC|1|||SECO:173
SEEL||Pasaje|Celia María|EC|1|||SERO:28
SEEN||Puerto Grande|Las Peñas|EC|1|||SERO:56
SEEO||El Morro|El Morro Airstrip|EC|1|||SEGU:75
SEEP||San Pedro|El Piedrero|EC|1|||SECU:69
SEER||Esmeraldas|Palpailón|EC|1|||SKCO:67
SEET||Etza|Etsa Airstrip|EC|1|||SEMC:91
SEEU||Setuch|Setuch Airstrip|EC|1|||SEMC:108
SEEX||Chongón|Exportamar Airstrip|EC|1|||SEGU:55
SEEZ||Shiramentza|Shiramentza Airstrip|EC|1|||SEMC:80
SEFM||San Francisco de Macuma|San Francisco de Macuma Airstrip|EC|1|||SEMC:63
SEFR||Daule|Hacienda La Fragua|EC|1|||SEGU:35
SEFU||Las Mercedes|Fumipalma|EC|1|||SEGU:59
SEGB||Soledad|Guabital|EC|1|||SEGU:71
SEGE||Guale||EC|1|||SEGU:72
SEGH||Balzar|Hacienda Gran Chaparral|EC|1|||SEMT:91
SEGL||Guarumal||EC|1|||SEGU:43
SEGN||Tanguntza|Tanguntza Airstrip|EC|1|||SECO:184
SEGO||Naranjal|Camacongo|EC|1|||SEGU:69
SEGR||Guaraní|Guaraní Airstrip|EC|1|||SEMC:98
SEGS|GPS|Isla Baltra|Seymour Galapagos Ecological|EC|3
SEGT||Tarangaro|Tarangaro Airstrip|EC|1|||SECO:113
SEGU|GYE|Guayaquil|José Joaquín de Olmedo|EC|4
SEGZ||Santiago|Gualaquiza|EC|1|||SECU:75
SEHB||Chumbi|Chumbi Airstrip|EC|1|||SEMC:75
SEHE||Mashient|Mashient Airstrip|EC|1|||SEMC:90
SEHG||Huasaga|Nases Airstrip|EC|1|||SEMC:109
SEHN||Mashuin|Mashuin Airstrip|EC|1|||SEMC:138
SEHR||Masurash|Masurash Airstrip|EC|1|||SEMC:96
SEHS||Kashaints|Kashaints Airstrip|EC|1|||SEMC:79
SEHT||Chichirata|Chichirata Airstrip|EC|1|||SEMC:163
SEHU||Chuindia|Chuindia Airstrip|EC|1|||SEMC:163
SEHV||Progreso|Josema|EC|1|||SEGU:41
SEHW||Shuwin Mamus|Shuwin Mamus Airstrip|EC|1|||SEMC:122
SEHX||Shaimi|Shaimi Airstrip|EC|1|||SEMC:80
SEHZ||Mashientenza|Mashientenza Airstrip|EC|1|||SEMC:80
SEIA||Balao|La Maria|EC|1|||SERO:64
SEID||Ishpingo de Amuntay|Ishpingo de Amuntay Airstrip|EC|1|||SEMC:154
SEIE||Morona Santiago|Iñaywa Norte Airdtrip|EC|1|||SEMC:72
SEIF||Sasain|Sasain Airstrip|EC|1|||SEMC:88
SEIG||Santiago||EC|1|||SEMC:84
SEIH||Ishpink|Ishpink Airstrip|EC|1|||SEMC:79
SEII|IBB|Puerto Villamil|General Villamil|EC|2
SEIM||Naranjito|Santa María|EC|1|||SEGU:56
SEIN||El Guabo|La Mina|EC|1|||SERO:35
SEIO||Huito Molino|Huito Molino Airstrip|EC|1|||SEMC:103
SEIP||Ipiak|Ipiak Airstrip|EC|1|||SEMC:110
SEIR||Kapirna|Kapirna Airstrip|EC|1|||SEMC:145
SEIS||América|Isabel Maria|EC|1|||SEGU:36
SEIT||Kapitian|Kapitian Airstrip|EC|1|||SEMC:80
SEIU||Pitiur|Pitiur Airstrip|EC|1|||SEMC:80
SEIV||Milagro|Ingenio Valdez|EC|1|||SEGU:32
SEIW||Iwia|Iwia Airstrip|EC|1|||SEMC:71
SEIX||Pimpintza|Pimpintza Airstrip|EC|1|||SEMC:72
SEIY||Iñaywa Sur|Iñaywa Sur Airstrip|EC|1|||SEMC:90
SEIZ||La Troncal|Agroazucar|EC|1|||SECU:65
SEJA||Jandiyacu|Jandiyacua Airstrip|EC|1|||SEMC:129
SEJD|TNW|Ahuano|Jumandy|EC|2|||SECO:94
SEJE||Jempentza|Jempentza Airstrip|EC|1|||SEMC:86
SEJG||Yaguachi|San Jacinto|EC|1|||SEGU:25
SEJI|JIP|Jipijapa||EC|1|||SEMT:6
SEJK||Juyukam Entsa|Juyukamentza Airstrip|EC|1|||SEMC:108
SEJL||Quevedo|Agro Aereo Jaramillo|EC|1|||SELT:93
SEJM||Jama||EC|1|||SEMT:95
SEJR||Quilloalpa|Jaime Roldós Airstrip|EC|1|||SECO:103
SEJS||Joya de Los Sachas||EC|1|||SECO:19
SEJT||Taisha|San José de Taisha Airstrip|EC|1|||SEMC:69
SEJU||San Juan|San Juan Airstrip|EC|1|||SEMC:70
SEJY||Juyuintsa|Juyuintsa Airstrip|EC|1|||SECO:204
SEJZ||Jimiarentsa|Jimiarentza Airstrip|EC|1|||SEMC:80
SEKA||Kaank Chico|Kaan Airstrip|EC|1|||SEMC:70
SEKB||Kusutkau|Kusutkau Airstrip|EC|1|||SEMC:138
SEKC||Kaiptach||EC|1|||SEMC:117
SEKE||Morona|Kenkuim Airstrip|EC|1|||SEMC:43
SEKF||Huasaga|Kuserua Airstrip|EC|1|||SEMC:136
SEKH||Kuakash||EC|1|||SEMC:58
SEKI||Luz de América|Km 60|EC|1|||SELT:94
SEKJ||Atatakuinjia|Atatakuinjia Airstrip|EC|1|||SECO:132
SEKK||Vía Quinindé-La Concordia|Km 192|EC|1|||SETN:92
SEKL||La Concordia|Silok|EC|1|||SEQM:113
SEKM||Fumisa|KM 35|EC|1|||SELT:88
SEKN||Taisha|Kaniats Airstrip|EC|1|||SEMC:82
SEKP||Kapatinentza|Kapatinentza Airstrip|EC|1|||SEMC:83
SEKQ||Kikints|Kikints Airstrip|EC|1|||SEMC:85
SEKS||Vargas Guerra|Kaspaim Airstrip|EC|1|||SEMC:74
SEKT||Ayuy|Kusutka Airstrip|EC|1|||SEMC:58
SEKU||Pedro|Kupit Airstrip|EC|1|||SEMC:107
SEKV||Iniayu|Kurinua Airstrip|EC|1|||SEMC:93
SEKW||Kapawi|Kapawi Airstrip|EC|1|||SEMC:144
SEKX||Chimbucta|Shinkiatam Airstrip|EC|1|||SEMC:76
SEKY||Capadino Entza|Kayamentza Airstrip|EC|1|||SEMC:54
SEKZ||Kayantza|Kayantza Airstrip|EC|1|||SEMC:85
SELC||Quevedo|La Cadena|EC|1|||SELT:89
SELD||Chongón|Loma Alta|EC|1|||SEGU:23
SELI||Limoncocha||EC|1|||SECO:41
SELJ||Julia|Hacienda La Julia|EC|1|||SEGU:62
SELK||Panientza|Libertad Sur Airstrip|EC|1|||SEMC:83
SELL||Babahoyo|La Lolita|EC|1|||SEGU:59
SELM||Loma Larga||EC|1|||SEGU:86
SELT|LTX|Latacunga|Cotopaxi|EC|3
SELU||La Puntilla||EC|1|||SEGU:63
SELV||Zapotal|La Virgen|EC|1|||SELT:105
SEMA|MRR|Macará|Jose Maria Velasco Ibarra|EC|2|||SECA:76
SEMC|XMS|Macas|Coronel E Carvajal|EC|3
SEMK||Maki|Maki Airstrip|EC|1|||SEMC:118
SEML|||Manglaralto|EC|1|||SESA:49
SEMO||Montalvo|El Carmen|EC|1|||SEMC:130
SEMT|MEC|Manta|Eloy Alfaro|EC|3
SEMX||Puerto Balao|Maragrosa|EC|1|||SERO:69
SEMY||Martinica||EC|1|||SEGU:55
SENB||Canusa|Nueva Canusa Airstrip|EC|1|||SEMC:44
SEND||Nemonpade|Nemonpade Airstrip|EC|1|||SECO:91
SENE||Nuevo Corrientes|Nuevo Corrientes Airstrip|EC|1|||SEMC:154
SENF||Napurak|Napurak Airstrip|EC|1|||SEMC:128
SENH||Moretecocha|Llanchamacocha Airstrip|EC|1|||SEMC:118
SENL|LGQ|Lago Agrio|Nueva Loja|EC|1||SELA|SKAS:61
SENX||Posorja|NIRSA|EC|1|||SEGU:75
SEOC||Alto Corrientes|Alto Corrientes Airstrip|EC|1|||SEMC:136
SEOH||Lorocachi|Lorocachi Airstrip|EC|1|||SECO:170
SEOI||Golfo de Guayaquil|Matorrillos|EC|1|||SEGU:32
SEOM||Progreso|Langosmar|EC|1|||SEGU:44
SEON||Conambo||EC|1|||SEMC:146
SEOU||Pedro Vicente Maldonado|Molaute Airstrip|EC|1|||SEQM:87
SEOY||Valencia|Pantalony|EC|1|||SELT:75
SEOZ||Copataza|Copataza Airstrip|EC|1|||SEMC:78
SEPA||Morona Santiago|Centro Paatin Airstrip|EC|1|||SEMC:46
SEPB||Pecro Carbo|Pedro Carbo|EC|1|||SEGU:55
SEPC||Patuca||EC|1|||SEMC:53
SEPD||Pedernales||EC|1|||SETN:112
SEPE||Naranjal|Pechichal|EC|1|||SEGU:63
SEPH||Capauari|Capauari Airstrip|EC|1|||SEMC:108
SEPI||Pindoyacu|Pindoyacu Airstrip|EC|1|||SECO:147
SEPK||Pakintza|Pakintza Airstrip|EC|1|||SEMC:94
SEPL||General Villamil|Playas|EC|1|||SEGU:78
SEPN|||Panamao|EC|1|||SESA:44
SEPO||Posorja||EC|1|||SEGU:73
SEPS||Pasaje|Amable Calle Gutierrez|EC|1|||SERO:29
SEPT|PYO|Puerto Putumayo|Putumayo|EC|1|||SKAS:84
SEPV|PVO|Portoviejo|Reales Tamarindos|EC|2|||SEMT:25
SEPX||Hacienda Payo|Payo|EC|1|||SEGU:45
SEPZ||Los Perez||EC|1|||SELT:85
SEQE||Quevedo||EC|1|||SELT:95
SEQM|UIO|Quito|Mariscal Sucre|EC|4
SERB||Riobamba|Chimborazo|EC|1|||SELT:83
SERI|||Maria Cristina|EC|1|||SELT:102
SERL||Isla Puná|Roble Mar|EC|1|Isla Puná,||SERO:55
SERO|ETR|Santa Rosa|Santa Rosa - Artillery Colonel Victor Larrea|EC|3
SERS||Cotopaxi|Cristal|EC|1|||SELT:83
SESA|SNC|Salinas/La Libertad|General Ulpiano Paez|EC|4
SESB||Morona Santiago|Sebastián Airstrip|EC|1|||SEMC:114
SESC|SUQ|Sucúa||EC|1|||SEMC:20
SESD||Santo Domingo de Los Colorades|Santo Domingo de Los Colorados|EC|1|||SEQM:96
SESE||Jesús María|Secadal|EC|1|||SEGU:62
SESF||Shushufind|Shushufindi|EC|1|||SECO:48
SESH|||San Honorato|EC|1|||SEMT:113
SESJ||Hacienda San José|San José|EC|1|||SEGU:53
SESK||Tsunkintza|Tsunkintza Airstrip|EC|1|||SEMC:119
SESL||San Lorenzo||EC|1|||SKCO:61
SESM|PTZ|Shell Mera|Rio Amazonas|EC|1|||SEMC:89
SESN||Coronel Marcelino Maridueña|San Carlos|EC|1|||SEGU:51
SESO||Puebloviejo|La Estrella|EC|1|||SEGU:76
SESP||Golfo de Guayaquil|San Andres|EC|1|||SEGU:50
SESQ||El Guabo|Barbones - Samuel Quimi|EC|1|||SERO:32
SESR||Bucay|San Rafael|EC|1|||SEGU:72
SESS||San Carlos|San Carlos Oriente Airstrip|EC|1|||SEMC:65
SEST|SCY|Puerto Baquerizo Moreno|San Cristóbal|EC|2
SESV|BHA|Bahía de Caraquez|Los Perales|EC|1||SEBC|SEMT:49
SETA||Virgen de Fatima|Taura Air Base|EC|1|||SEGU:25
SETE||Tena|Mayor Galo Torres|EC|1|||SELT:89
SETG||Tenguel||EC|1|||SERO:54
SETH|TSC|Taisha||EC|1|||SEMC:69
SETI|TPN|Tiputini||EC|1|||SKLG:107
SETN|ESM|Esmeraldas|Carlos Concha Torres|EC|4|Tachina
SETO|||Andes Aeroclub|EC|1|||SEQM:25
SETR|TPC|Tarapoa||EC|2|||SKAS:72
SETS||Bacundo|Tsentsakentza Airstrip|EC|1|||SEMC:85
SETU|TUA|Tulcán|Lieutenant Colonel Luis A. Mantilla|EC|3
SETW||Tiwaeno|Tiwaeno Airstrip|EC|1|||SECO:109
SEUA||Lago Agrio|Guarumo|EC|1|||SKAS:62
SEUC||Chumbela|Cuchintza Airstrip|EC|1|||SEMC:117
SEUD||Pedro|Muruntza Airstrip|EC|1|||SEMC:105
SEUE||Pedro|Pumpuentza Airstrip|EC|1|||SEMC:90
SEUI||Cusuimi|Cusuimi Airstrip|EC|1|||SEMC:68
SEUK||Copataza|Kuankua Airstrip|EC|1|||SEMC:86
SEUN||Putunts|Putuntz Airstrip|EC|1|||SEMC:85
SEUQ||Untsuri Entsa|Untsurientsa Airstrip|EC|1|||SEMC:28
SEUR||Pucar||EC|1|||SEMC:76
SEUV||Putuimi|Putuimi Achuar Airstrip|EC|1|||SEMC:115
SEUW||Uunt Suants|Unswantz Airstrip|EC|1|||SEMC:38
SEUX||Patukmai|Patukmai Airstrip|EC|1|||SEMC:104
SEUY||Uyuimi|Uyuimi Airstrip|EC|1|||SEMC:72
SEUZ||Kurintza|Curintza Airstrip|EC|1|||SEMC:150
SEVA||Pavacachi|Pavacachi Airstrip|EC|1|||SECO:143
SEVL||Valencia|Esterito|EC|1|||SELT:78
SEVN||Vinces||EC|1|||SEGU:65
SEVS|||Casa Vinces|EC|1|||SEGU:101
SEWA||Wachirpas|Wachirpas Airstrip|EC|1|||SEMC:149
SEWE||Wentado|Wentado Airstrip|EC|1|||SECO:68
SEWG||Tarimiant|Tarimiant Airstrip|EC|1|||SEMC:118
SEWH||Washintza||EC|1|||SEMC:69
SEWI||Wichimi|Wichimi Airstrip|EC|1|||SEMC:97
SEWK||Wasurak|Wasurak Airstrip|EC|1|||SEMC:91
SEWM||Wiririma|Wiririma Airstrip|EC|1|||SECO:191
SEWN||Wusui Norte|Wusui Norte Airstrip|EC|1|||SEMC:74
SEWO||Buena Fe|Wongkinmay|EC|1|||SELT:92
SEWP||Wampuik|Wampuik Airstrip|EC|1|||SEMC:127
SEWR||Warientza|Warientza Airstrip|EC|1|||SECU:86
SEWT||Waruintza|Waruintza Airstrip|EC|1|||SEMC:110
SEWU||Wisui|Wisui Airstrip|EC|1|||SEMC:47
SEWX||Kawa|Kawa Airstrip|EC|1|||SEMC:60
SEWY||Wayusentsa|Wayusentsa Airstrip|EC|1|||SEMC:135
SEWZ||Washintsa||EC|1|||SEMC:105
SEXI||Itak|Itak Airstrip|EC|1|||SEMC:100
SEXK||Kambantsa||EC|1|||SEMC:147
SEXM||Balao|Carmita|EC|1|||SERO:68
SEXP||Atacapi|Atacapi Airstrip|EC|1|||SEMC:119
SEXS||Los Rios|San Simón Airstrip|EC|1|||SELT:85
SEXT||Tres Marias||EC|1|||SEMC:67
SEYA||Yaupi|Yaupi Airstrip|EC|1|||SEMC:65
SEYD||Pastaza|Yandana – Entsa Airstrip|EC|1|||SECO:190
SEYH||Cuyacocha|Cuyacocha Airstrip|EC|1|||SECO:128
SEYJ||Balao|La Joya|EC|1|||SERO:72
SEYK||Yankuntza|Yankuntza Airstrip|EC|1|||SEMC:100
SEYM||Yampuna|Yampuna Airstrip|EC|1|||SEMC:70
SEYN||Yanayaku|Yanayaku Airstrip|EC|1|||SECO:193
SEYP||Yaapi|Yaapi Airstrip|EC|1|||SEMC:62
SEYS||Yasnunka|Yasnunka Airstrip|EC|1|||SEMC:89
SEYT||Yutsuntz|Yutsuntz Airstrip|EC|1|||SEMC:185
SEYV||Yuvientza|Yuvientza Airstrip|EC|1|||SEMC:62
SEYW||Yawaentza|Yawaentza Airstrip|EC|1|||SEMC:91
SEYX||Yamaran|Yamaran Airstrip|EC|1|||SEMC:64
SEZA||Pampantza|Pampantza Airstrip|EC|1|||SEMC:80
SEZE||Tzapapentza|Tzapapentza Airstrip|EC|1|||SEMC:102
SEZI||Imatiño|Imatiño Airstrip|EC|1|||SECO:167
SEZK||Karakam|Karakam Airstrip|EC|1|||SEMC:96
SEZM||Tamantza|Tamantza Airstrip|EC|1|||SEMC:59
SEZN||Tzapino|Tzapino Airstrip|EC|1|||SECO:85
SEZR||Surikentza|Surik Nuevo Airstrip|EC|1|||SEMC:119
SFAL|PSY|Stanley|Port Stanley|FK|2
SGAS|ASU|Asunción|Silvio Pettirossi|PY|4
SGAY|AYO|Ayolas|Aeropuerto Nacional Juan de Ayolas|PY|2|||SARP:87
SGBA||Colonia Doctor Pastor Obligado|Aeródromo de Bella Vista Sur|PY|1|||SGEN:32
SGBN|BFA|Bahía Negra||PY|1|||SLPS:144
SGCB||Capitan Bado|Aeródromo Capitan Bado|PY|1|||SBPP:81
SGCO|CIO|Concepción|Lieutenant Colonel Carmelo Peralta National|PY|2|||SGAS:200
SGCU|||Aeródromo de Curuguaty|PY|1|||SGES:137
SGCZ||Caazapá|Aeródromo de Caazapá|PY|1|||SGEN:129
SGEN|ENO|Encarnación|Teniente Ramon A. Ayub Gonzalez|PY|4
SGES|AGT|Ciudad del Este|Guaraní|PY|4
SGFI|FLM|Filadelfia|Aeródromo de Filadelfia|PY|1
SGGR||Salto del Guaira|Aeropuerto Nacional de Salto del Guaira|PY|2|||SSGY:17
SGIB||Itaipú||PY|2|||SGES:23
SGLP||Loma Plata|Aeródromo de Loma Plata|PY|1
SGLV|PCJ|Puerto La Victoria||PY|1|||SBDB:187
SGLZ||La Paz|Aeródromo La Paz|PY|1|||SGEN:25
SGME|ESG|Mariscal Estigarribia|Dr. Luis María Argaña|PY|2
SGMZ|||Aeródromo José María Argaña|PY|1|||SGEN:66
SGOL|OLK|Fuerte Olimpo|Aeródromo de Fuerte|PY|1|||SBDB:150
SGOV||Coronel Oviedo|Aeropuerto Nacional de Coronel Oviedo|PY|2|||SGAS:116
SGPC||Pozo Colorado|Aeropuerto de Pozo Colorado|PY|1|||SGAS:233
SGPG|||Base de la Fuerza Aérea Paraguaya "Teniente Pelayo Prats Gill"|PY|1
SGPI|PIL|Pilar|Aeródromo Don Carlos Miguel Gimenez|PY|2|||SARF:75
SGPJ|PJC|Pedro Juan Caballero|Aeropuerto Nacional Dr. Augusto Roberto Fuster|PY|2|||SBPP:17
SGPO||Pinasco|Aeródromo de Puerto Pinasco|PY|1|||SBDB:210
SGRO||Rosario|Aeródromo de Rosario|PY|1|||SGAS:99
SGSP||San Pedro del Ycuamandiyu|San Pedro de Ycuamanindeyu National|PY|1|||SGAS:144
SGST||Santa Teresa||PY|2|||SBPP:96
SGVM|VMI|Puerto Vallemi|Aeropuerto Nacional Doctor Juan Plate|PY|2|||SBDB:184
SGVO||Villa del Rosario|Aeródromo de la Colonia Volendam|PY|1|||SGAS:118
SIAB||São Paulo|Guatambu São Paulo|BR|1|||SDCO:105
SIAC||São Sebastião da Bela Vista|Fazenda Paineira|BR|1|||SBSJ:121
SIAD||Porto Murtinho|Estância Regina|BR|1|||SBDB:97
SIAG||Bom Jesus de Goiás|Fazenda Goiasa|BR|1|||SBCN:121
SIAI||Goioerê|Sitio Aeroportuário Esteirinha|BR|1|||SSUM:48
SIAJ||Prado|Fazenda Taua|BR|1|||SBPS:61
SIAN||Rio de Janeiro|Clube CÉU|BR|1|||SBGL:45
SIAP||Nova Ubiratã|Fazenda Nossa Senhora Aparecida|BR|1|||SBSO:76
SIAQ||Cuiabá|Bom Futuro|BR|1|||SBCY:16
SIAR||Miranda|Fazenda Arancuã|BR|1|||SBDB:119
SIAS||Paranatinga|Fazenda Cachoeira Alta|BR|1|||SBSO:159
SIAT||Brasnorte|Fazenda Toloza|BR|1|||SWTS:175
SIAU||Vila Bela da Santíssima Trindade|Fazenda Pirizal|BR|1
SIAW||Ulianópolis|Sítio Gurupi|BR|1|||SNEB:83
SIAX||Unaí|Fazenda HJ|BR|1||SNYI|SNZR:83
SIAY||Comodoro|Fazenda Santa Fé do Guaporé|BR|1|||SBVH:149
SIAZ||Campo Verde|Fazenda Água Azul|BR|1|||SBCY:133
SIBA||Alto Garças|Fazenda Arco-Íris|BR|1|||SBRD:129
SIBC||Pereira Barreto|Fazenda Bonança|BR|1||SDFA|SBTG:68
SIBI||Laranjeiras|Fazenda Boa Luz|BR|1||SNLU|SBAR:21
SIBJ||Ipiaçu|Fazenda Retiro do Bom Fim|BR|1|||SBCN:181
SIBK||Bagé|Aeroclube de Bagé|BR|1|||SURV:134
SIBN||Jaru|Savana|BR|1|||SBJI:87
SIBO||Três Marias|Simão Sarkis Simão|BR|1|||SBCF:203
SIBP||Itiquira|Fazenda Pampa Alegre|BR|1|||SBRD:111
SIBU||Catolé do Rocha|Jerônimo Sérgio Rosado Maia|BR|1|||SJZA:111
SIBV||Nova Alvorada do Sul|Fazenda Bela Vista|BR|1|||SBCG:111
SIBW||Conceição||BR|1|||SNHS:59
SIBX||Buritama|WEM Agropecuária|BR|1|||SBAU:20
SIBY||Monteiro|Lourival Nunes de Farias|BR|1|||SNRU:132
SIBZ||Itaporanga||BR|1|||SJZA:73
SICF||Juara|Fazenda Catuaí|BR|1|||SBSI:225
SICJ||Sapezal|Gaivota Aviação Agrícola|BR|1|||SBVH:167
SICK||Capelinha|Dr. Jucelino José Ribeiro|BR|1|||SBGV:147
SICM||Brasilândia|Fazenda Nossa Senhora de Fátima|BR|1|||SBTG:98
SICN||Sandovalina|Fazenda Vista Bonita|BR|1|||SBDN:55
SICP||Unaí|Fazenda São Pedro|BR|1|||SNZR:51
SICQ||Cuiabá|Fazenda Luar|BR|1|||SBCY:47
SICR||Pontes e Lacerda|Fazenda Coração do Brasil|BR|1|||SWTS:277
SICS||Santa Rita do Trivelato|Fazenda Santa Terezinha|BR|1||SSDA|SBSO:133
SICU||Paracatu|Ouro Branco|BR|1||SNDO|SNZR:61
SICW||Campo Alegre de Goiás|Fazenda Santa Fé|BR|1|||SBCN:88
SICY||Marabá|Fazenda Apucarana|BR|1|||SBMA:71
SIDF||Cáceres|Fazenda São José|BR|1|||SWTS:192
SIDG||Jaru|Irmãos Gonçalves|BR|1|||SBJI:89
SIDJ||Santa Maria das Barreiras|Fazenda Arpa|BR|1|||SBPJ:280
SIDK||Arraias|Fazenda Boqueirão de Cedro|BR|1|||SNBR:204
SIDM||Barra Do Garças|Fazenda Cibrapa|BR|1
SIDN||Corumbá|Fazenda Figueiral|BR|1|||SBRD:214
SIDO||Presidente Prudente|Pagador|BR|1|||SBDN:5
SIDR||Miranda|Retiro Piúva|BR|1|||SBCR:137
SIDS||Aral Moreira|Romaer Aviação Agrícola|BR|1|||SBPP:44
SIDV||Juiz de Fora|Doutor Saulo Villela|BR|1|||SBJF:11
SIDW||Lucas do Rio Verde|Fazenda Cortezia|BR|1|||SBSO:74
SIDY||Lunardelli|Fazenda Yanduy|BR|1|||SBMG:70
SIDZ||Tabocas do Brejo Velho|Fazenda Santa Fé|BR|1|||SNBR:107
SIEA||Guararapes|Fazenda Ibiporã|BR|1|||SBAU:53
SIEB||Sidrolândia|Fazenda São Bento|BR|1||SJSD|SBCG:82
SIEC||Jaraguari|Agropecuária Cachoeira|BR|1|||SBCG:64
SIED||Paranhos|Fazenda Espadim|BR|1|||SSGY:121
SIEE||São Bernardo do Campo|Ecovias Imigrantes Heliport|BR|1|||SBSP:18
SIEF||Campo Grande|Fazenda São José|BR|1|||SBCG:12
SIEG||Guarda-Mor|Fazenda Chapadão|BR|1|||SNZR:82
SIEH||Jales|Fazenda Vô Chico|BR|1|||SBAU:94
SIEJ||Nova Monte Verde|Monte Verde|BR|1|||SBAT:151
SIEK||Cachoeira do Arari|Fazenda Espírito Santo|BR|1|||SBBE:63
SIEL||Pimenta Bueno|Eletro Primavera LTDA|BR|1|||SSKW:51
SIEM||Sapezal|Fazenda Encantado|BR|1||SWET|SBVH:157
SIEN||Corumbá|Fazenda Santa Eulina Airstrip|BR|1|||SBCR:156
SIEO||São Sebastião do Oeste|Fazenda Mendonça|BR|1|||SBCF:120
SIEQ||Nova Mutum|Fazenda Táua|BR|1|||SBSO:134
SIEV||Bodoquena|Fazenda Boca da Onça|BR|1|||SBDB:60
SIEW||Novo Aripuanã|Areia Branca Airstrip|BR|1|||SBMY:243
SIEX||Santa Vitória|Fazenda São Joaquim I|BR|1|||SBSR:228
SIEZ||Tubarão|Asa Branca|BR|1|||SBJA:20
SIFC||Igarassu|Coroa do Avião|BR|1|||SBRF:32
SIFD||Campo Grande|Fazenda Santa Marina II|BR|1|||SBCG:131
SIFE||Maracaju|Fazenda Estiva|BR|1|||SBPP:111
SIFF||São Francisco de Paula|Sunset|BR|1|||SSCN:10
SIFJ||Pedra Preta|Fazenda Bom Jesus|BR|1|||SBRD:70
SIFM||Chapadão do Sul|Fazenda Mimoso|BR|1||SSYC|SBTG:232
SIFN||Ribas Do Rio Pardo|Fazenda Cachoeira Branca|BR|1|||SBCG:140
SIFO||Estiva Gerbi|Fazenda Santo Antonio do Oriçanga|BR|1||SDCT|SBKP:88
SIFQ||Flores Da Cunha|Condomínio Menega|BR|1|||SBCX:17
SIFT||Vila Bela Da Santíssima Trindade|Fazenda Travessão|BR|1
SIFU||Barra Do Piraí|Fazenda Ribeirão|BR|1|||SBGL:69
SIFV||Aracruz|Primo Bitti|BR|1|||SBVT:52
SIFW||Corumbá|Fazenda São Lourenço|BR|1|||SBCR:160
SIFX||São Félix do Xingu|Fazenda Patropi|BR|1
SIGA||Paracatu|Fazenda Granja Santiago|BR|1|||SNZR:25
SIGE||Lagoa da Confusão|Alberi Juliani|BR|1|||SBPJ:145
SIGF||Padre Bernardo|Rumenos Sarkis Simão|BR|1|||SBBR:88
SIGG||Nova Maringá|FSA|BR|1|||SBSO:168
SIGL||Bragança Paulista|Fazenda Dumont - Chiquinho Ribeiro|BR|1|||SBKP:50
SIGN||General Carneiro|Asa Delta|BR|1|||SBRD:195
SIGS||Mundo Novo|Fazenda São Francisco|BR|1
SIGT||Itaberá|Fazenda Goiabeira|BR|1|||SBPG:165
SIGW||Ribeiro Gonçalves|Fazenda Serra Grande|BR|1
SIGX||Juara|Fazenda Gairova|BR|1|||SBVH:262
SIGY||Martinópolis|Fazenda Guadiana|BR|1|||SBDN:41
SIHA||São Miguel das Missões|Agropecuária São Bernardo|BR|1|||SBNM:63
SIHB||Grajaú|Fazenda Soberana|BR|1|||SBIZ:155
SIHI||Piçarras|Fazenda Itaipavas|BR|1|||SWGN:107
SIHP||Itapeva|Fazenda Esperança|BR|1|||SDCO:141
SIHV||Juscimeira|Fazenda Ouro Verde|BR|1|||SBRD:57
SIHW||Ribeirão Preto|Agrishow|BR|1|||SBRP:13
SIHX||Nova Bandeirantes|Fazenda Pau D'Alho|BR|1|||SBAT:234
SIHY||Itápolis|Tom Aviação Agrícola Ltda. Airstrip|BR|1|||SBAE:66
SIIA||Brasnorte|Fazenda Paraná|BR|1|||SBVH:232
SIIC||Jaborandi|Celeiro 1|BR|1|||SNBR:261
SIID||Osório|Fazenda Dona Chica|BR|1|||SBPA:77
SIIE||Guia Lopes da Laguna|Fazenda Santa Fé|BR|1|||SBDB:65
SIIG||Rancharia|Eliza Camargo de Arruda Botelho|BR|1|||SBDN:39
SIII||Guaíra|Doutor Heráclito da Motta Luiz|BR|1|||SBUR:79
SIIJ||Bonito|São Geraldo|BR|1|||SBDB:12
SIIK||Ribas Do Rio Pardo|Fazenda Santa Lídia|BR|1|||SBCG:106
SIIN||São Miguel do Guaporé|Fazenda Marrecão|BR|1|||SSKW:183
SIIP||Alfenas|Fazenda Paraíso|BR|1|||SBRP:202
SIIS||Alto Paraíso|Fazenda Uberaba|BR|1|||SSUM:55
SIIT||Anastácio|Fazenda Cachoeira|BR|1|||SBCG:99
SIIU||Campo Florido|Santa Marta|BR|1|||SBUR:79
SIIZ||Mutunópolis|Fazenda Iporanga|BR|1||SIVC|SBBR:288
SIJA||Tailândia|Maca Aero|BR|1|||SBTU:130
SIJE||Corumbá|Fazenda Joana Estãncia|BR|1|||SBCR:115
SIJG||Guararapes|Fazenda Jaguaretê|BR|1|||SBAU:46
SIJJ||Juti|Fazenda Cambay Airstrip|BR|1|||SBPP:142
SIJK||Camaçari|Fazenda Capuame Airstrip|BR|1|||SBSV:28
SIJL||São João da Barra||BR|1|||SBCP:29
SIJM||Sapezal|Fazenda Tupancy|BR|1|||SWTS:182
SIJN||Bom Retiro|Pouso na Serra|BR|1|||SBLJ:70
SIJO||Corumbá|Fazenda São João do Jatobazinho|BR|1|||SBCR:51
SIJQ||Alta Floresta|A2 Aviação Agrícola Ltda|BR|1|||SBAT:26
SIJR||Balsa Nova|Ely Rego|BR|1|||SBCT:43
SIJS||Paragominas|Fazenda Tonga|BR|1|||SNEB:54
SIJU||Juína|Fazenda Areia Branca|BR|1|||SBVH:205
SIJV||Rio Verde de Mato Grosso|Fazenda Vitória|BR|1|||SBCG:210
SIJW||Iguatemi|Fazenda Retimar|BR|1|||SSGY:90
SIJY|ITJ|Itajaí|Campo Comandantes|BR|1|||SBNF:20
SIJZ||Itaituba|Fazenda Vera Paz|BR|1|||SBAT:284
SIKA||Amambai|Fazenda Alegria II|BR|1|||SSGY:114
SIKI||Irauçuba|Cialne Irauçuba Airstrip|BR|1|||SBJE:104
SIKJ||Comodoro|Fazenda JK|BR|1|||SBVH:43
SIKK||Arcos|Calciolândia|BR|1|||SBAX:157
SIKM||Arame|Fazenda Viamão|BR|1|||SBIZ:164
SIKN||Arame|Fazenda Bonanza|BR|1|||SBIZ:176
SIKO||Anastácio|Fazenda Água Boa|BR|1|||SBDB:94
SIKP||Corumbá|Fazenda Santa Teresa|BR|1|||SBCR:81
SIKQ||Conquista d'Oeste|Fazenda Sararé|BR|1|||SWTS:205
SIKR||Aquidauana|Fazenda Barra Mansa Airstrip|BR|1|||SBCG:178
SIKS||Nova Bandeirantes|Fazenda Vale do Juruena|BR|1|||SBAT:238
SIKU||Gaúcha do Norte|Fazenda Gaúcha do Norte|BR|1|||SBSO:298
SIKW||Mucuri|Fazenda Vista Linda|BR|1|||SBPS:198
SIKX||Juara|Fazenda Água Boa|BR|1|||SBAT:225
SIKZ||Parnarama|Fazenda Olho D'Água|BR|1|||SBTE:104
SILA||Jateí|Fazenda Santa Ada|BR|1|||SSUM:128
SILB||Riachão das Neves|Fazenda Belizário|BR|1|||SNBR:100
SILC|LVR|Lucas do Rio Verde|Municipal Bom Futuro|BR|1|||SBSO:69
SILD||Olímpia|Pachu Aviação Agrícola|BR|1|||SBSR:39
SILG||Sapezal|Fazenda Panamá|BR|1|||SWTS:173
SILI||Bom Jesus|Fazenda Santa Clara|BR|1
SILJ||Laranjal Do Jari|Do Gaúcho|BR|1|||SNYA:73
SILN||Rio Negrinho|Aeroclube de Rio Negrinho|BR|1||SSRN|SBJV:73
SILO||Aruanã|Fazenda Santa Luzia|BR|1
SILQ||Cascavel|Aeroleve Aeródromo Privado|BR|1|||SBCA:8
SILS||Tangará da Serra|Big Master|BR|1|||SWTS:18
SILU||Miranda|BRPEC Agro-Pecuária|BR|1|||SBCR:119
SILY||Correntina|Tabuleiro V|BR|1|||SNBR:135
SILZ||Rio Sono|Fazenda Santo Expedito IV|BR|1|||SBPJ:126
SIMA||Santa Rita Do Trivelato|Fazenda Mãe Margarida|BR|1|||SBSO:177
SIMB||Manoel Urbano||BR|1||SSPX|SBRB:188
SIME||Davinópolis|Comandante Carlos Inácio Agnes|BR|1|||SBIZ:7
SIMF||Sebastião Leal|Fazenda Imperial|BR|1
SIMG||Porto Murtinho|Fazenda Seis Palmas|BR|1|||SBDB:132
SIMJ||Capinópolis|Capinópolis - Aviação Agrícola Buttarello Ltda.|BR|1|||SBUL:141
SIMK|FRC|Franca|Tenente Lund Pressoto|BR|1||SBFC|SBRP:73
SIML||Santo Antônio do Leverger|Fazenda Siriema|BR|1|||SBCY:37
SIMN||Sinop|Aviação Agrícola Manain|BR|1|||SBSI:29
SIMO||Ribeirão Claro|Fazenda Morro Vermelho|BR|1|||SBML:116
SIMP||Sonora|Fazenda Triunfo|BR|1|||SBRD:136
SIMQ||Corumbá|Fazenda Dois de Maio|BR|1|||SBRD:211
SIMR||Rio Verde|Fazenda Reunidas|BR|1|||SBGO:240
SIMS||Camapuã|Fazenda Califórnia Airstrip|BR|1|||SBCG:161
SIMU||Anaurilândia|Fazenda Mutum|BR|1|||SBDN:147
SIMV||Uberaba|Fazenda Mata Velha|BR|1|||SBUR:15
SIMW||Jaraguari|Fazenda Retiro do Cervo I|BR|1|||SBCG:75
SIMX||Jangada|Fazenda Jangada|BR|1|||SBCY:67
SIMY||Itaquiraí|Fazenda Porto Oculto|BR|1|||SSGY:97
SIMZ||Sonora|Fazenda Primeiro de Maio|BR|1|||SBRD:145
SINA||Brasília|Asas do Ar|BR|1|||SBBR:47
SINC||Bom Jardim da Serra|Campo Nuic|BR|1|||SBJA:60
SING||Nova Granada|Fazenda São João|BR|1|||SBSR:31
SINH||Novo Horizonte Do Sul|Fazenda Esperança|BR|1|||SSUM:131
SINI||Corumbá|Fazenda Bela Vista do Caronal Airstrip|BR|1|||SBCR:200
SINJ||Ribas do Rio Pardo|Tamanduá Bandeira - MC Airstrip|BR|1|||SBCG:102
SINK||Parapuã|Fazenda Negrinha|BR|1|||SBDN:66
SINM||Santa Vitória|Fazenda Mangabas|BR|1|||SBSR:201
SINN||Araranguá|Comandante Nelinho|BR|1|||SBJA:53
SINP||Santa Mônica|Campo Primavera|BR|1|||SSUM:79
SINQ||Laranjal Do Jari|Laranjal|BR|1|||SNYA:77
SINR||Cáceres|Fazenda Santa Rosa|BR|1|||SLPS:213
SINS||Cáceres|Fazenda Grupo Nissey|BR|1|||SWTS:206
SINT||Santa Isabel|Fazenda Santa Adélia|BR|1|||SBGO:161
SINV||Mineiros|Fazenda Nova Baús|BR|1|||SBRD:248
SINZ||Fernandes Pinheiro|Xanadu|BR|1|||SBPG:48
SIOA||Canavieiras|Fazenda Primavera|BR|1|||SBTC:29
SIOB||Andradina|Fazenda Guanabara|BR|1|||SBTG:44
SIOC||Nova Independência|Santo Expedito|BR|1|||SBTG:46
SIOE||Dois Vizinhos|Mocelin|BR|1|||SSFB:30
SIOG||Diamantino|Suinobras|BR|1|||SWTS:124
SIOI||Novo Horizonte do Sul|Fazenda Onça Parda|BR|1|||SSUM:133
SIOJ||Carmo do Cajuru|Fazenda Porto Velho|BR|1|||SBCF:107
SIOK||Perdizes|Fazenda Cachoeirinha|BR|1|||SBAX:29
SIOL||Costa Rica|Fazenda Rio Bonito|BR|1|||SBTG:219
SIOM||Barreiras|Fazenda Orquídeas|BR|1|||SNBR:136
SIOO||Porto Murtinho|Fazenda Água Doce do Pantanal|BR|1|||SBDB:173
SIOP||Santa Rita do Trivelato|Poletto Airstrip|BR|1|||SBSO:153
SIOQ||Iguatemi|Fazenda Mato Alto|BR|1|||SSGY:65
SIOR||Santa Rita do Passa Quatro|Adhemar Ribeiro|BR|1|||SBRP:65
SIOS||Jateí|Fazenda Santa Josefa|BR|1|||SSUM:132
SIOT||Santa Rita Do Pardo|Fazenda Santa Vergínia|BR|1|||SBTG:111
SIOU||Paragominas|Fazenda Progresso|BR|1|||SNEB:41
SIOV||Vera|Vera Municipal|BR|1||SJEM|SBSO:41
SIOZ||Altamira|Pista Aldeia Kenjdã|BR|1
SIPA||São José Do Rio Pardo|Aeroclube de São José do Rio Pardo|BR|1|||SBRP:104
SIPB||Raposa|CAVU - Clube de Aviação Ultraleve|BR|1|||SBSL:20
SIPE||Goiana|Itapessoca|BR|1|||SBRF:53
SIPF||Feliz||BR|1|||SBCX:30
SIPG||Cocalinho|Fazenda Água Preta|BR|1
SIPH||Correntina|Fazenda Ipanema|BR|1|||SNBR:211
SIPJ||Tupanciretã|Aero Parque Tupã|BR|1|||SBSM:72
SIPK||Poconé|SESC Pantanal|BR|1|||SBCY:99
SIPL||São Félix do Xingu|Pista Aldeia Pykararankre|BR|1
SIPN||Porto Murtinho|Fazenda Progresso|BR|1|||SBDB:132
SIPO||Condeúba|Sebastião José Pereira|BR|1|||SBVC:112
SIPP||Francisco Sá|Fazenda Musa do Norte Airstrip|BR|1|||SBMK:72
SIPR||Uruguaiana|Fazenda GAP São Pedro Airstrip|BR|1|||SBUG:77
SIPU||Santa Rita de Cássia|Guatambu Piauí Airstrip|BR|1|||SNBR:178
SIPV||Tabaporã|Fazenda Santa Vitória-MT|BR|1|||SBSI:57
SIPW||Teresina|Nossa Senhora de Fátima|BR|1|||SBTE:13
SIPY||Cumaru do Norte|Pista Aldeia Pykatô|BR|1
SIQA||Ribas do Rio Pardo|Fazenda Bela Vista|BR|1|||SBCG:136
SIQD||Terenos|Fazenda Estância Regina|BR|1|||SBCG:23
SIQE||Brasília|Botelho|BR|1|||SBBR:22
SIQF||Morro Agudo|Fazenda Palmital|BR|1||SIAM|SBRP:72
SIQG||Ponta Porã|Fazenda Guanandy|BR|1|||SBPP:76
SIQH||Caarapó|Estância Ayrton Senna|BR|1|||SBPP:91
SIQI||Mostardas|Aerolis|BR|1|||SBPA:90
SIQJ||Chapada Dos Guimarães|Morro do Chapéu II|BR|1|||SBCY:84
SIQK||Nova Odessa||BR|1|||SBKP:32
SIQO||Corumbá|Fazenda Santa Glória|BR|1|||SBCR:206
SIQQ||São Francisco de Itabapoana|José Bernardo|BR|1|||SBCP:37
SIQR||Querência|Fazenda Pioneira|BR|1
SIQS||Porto Estrela|Fazenda Terra do Sol|BR|1|||SWTS:86
SIQU||Aparecida Do Taboado|Alcoolvare|BR|1|||SBTG:84
SIQV||Sapezal|Fazenda Matão|BR|1|||SBVH:167
SIQX||Barra de Santo Antônio|Fazenda São Braz|BR|1|||SBMO:32
SIQY||Sorriso|Fazenda Amizade|BR|1|||SBSO:34
SIQZ||José de Freitas|Fazenda Lagoa Serena|BR|1|||SBTE:57
SIRA||Cáceres|Fazenda Iracema|BR|1|||SWTS:172
SIRB||Rio Brilhante|Fazenda Mimoso|BR|1|||SBCG:148
SIRC||Caracol|Rancho Sinuelo|BR|1|||SBDB:115
SIRD||Charqueadas|Gaelo|BR|1|||SBPA:44
SIRF||Rio Formoso|José Múcio Monteiro|BR|1|||SBRF:68
SIRH||Coxim|Fazenda Morada da Lua|BR|1|||SBRD:192
SIRI|MUU|Maraú|Barra Grande|BR|1|||SNVB:68
SIRM||Água Boa|Fazenda Couto Magalhães|BR|1||SWCM
SIRN||Nova Xavantina|Fazenda Jaó|BR|1
SIRQ||Porto Alegre do Norte|Fazenda Ouro Verde|BR|1
SIRR||Caracaraí|Ecotur Univini Park|BR|1|||SWBC:242
SIRS||Campo Florido|Fazenda São Sebastião|BR|1|||SBUR:87
SIRT||Diamantino|Fazenda Guapirama|BR|1||SIWI|SWTS:84
SIRV||Porto Esperidião|Fazenda Morro Branco|BR|1|||SWTS:215
SIRX||Lambari d'Oeste|Fazenda Santo Reis|BR|1|||SWTS:78
SISA||Ourilândia do Norte|Pista Aldeia Aukre|BR|1|||SBCJ:271
SISD||Aparecida Do Rio Doce|Fazenda São Sebastião|BR|1|||SBGO:275
SISG||Aracaju|Aeroclube de Sergipe|BR|1||SNAU|SBAR:9
SISJ||Corumbá|Fazenda São José do Piquiri|BR|1|||SBRD:132
SISK||Aporé|Fazenda Cimal Airstrip|BR|1|||SBTG:213
SISL||Barão De Melgaço|Fazenda Santa Lúcia|BR|1|||SBRD:131
SISM||Macapá|Sérgio Miranda|BR|1|||SBMQ:9
SISN||Brasilândia de Minas|Fazenda Valiosa|BR|1|||SNZR:109
SISO||Chaves|Fazenda Santo Ambrósio|BR|1|||SBMQ:167
SISR||Santa Isabel do Pará|Fazenda Reunidas Sococo|BR|1|||SBBE:51
SISS||Cláudia|Vô Amantino|BR|1|||SBSI:45
SISV||Diamantino|Fazenda Promissão|BR|1|||SWTS:93
SISW||Campos de Júlio|Fazenda Mato Grosso|BR|1|||SBVH:161
SISX||Aquidauana|Santa Terezinha|BR|1|||SBCR:174
SISY||Piraquara||BR|1|||SBCT:9
SITA||Taiobeiras|Taiobeiras Municipal|BR|1|||SBVC:168
SITB||Naviraí|Fazenda Touro Branco|BR|1|||SSUM:100
SITC|||Fazenda Colorado|BR|1|||SBSO:77
SITF||Antônio João|Fazenda Tereré|BR|1|||SBPP:22
SITH||Luís Eduardo Magalhães|Fazenda Vitória|BR|1|||SNBR:94
SITI||Lagoa Dos Patos|Fazenda Baluarte|BR|1|||SBMK:109
SITJ||Coxim|Estância Tejo|BR|1|||SBRD:196
SITL||Água Clara|Fazenda Figueira II|BR|1|||SBTG:159
SITM||Panorama|Fazenda Bela Vista Airstrip|BR|1|||SBTG:77
SITR||Bom Jesus de Goiás|Fazenda Tamboril|BR|1|||SBCN:127
SITS||Lucas do Rio Verde|Estância Indiana|BR|1|||SBSO:80
SITT||Itaituba|Independência|BR|1|||SBAT:261
SITU||Turvelândia|Fazenda Santa Genoveva|BR|1|||SBCN:185
SITV||Coxim|Fazenda Serra Dourada|BR|1|||SBCG:215
SITX||Aquidauana|Fazenda Chapéu de Pano|BR|1|||SBCG:118
SIUA||Viamão|Águas Claras|BR|1|||SBPA:33
SIUB||Cáceres|Fazenda Uberaba|BR|1|||SLPS:189
SIUC||lagoas|Fazenda Campo Grande|BR|1|||SBMK:227
SIUF||Peixoto De Azevedo|Fazenda São Francisco|BR|1|||SBAT:265
SIUG||Sandovalina|Fazenda Santa Irene|BR|1|||SBDN:61
SIUH||Tamboril|Fazenda Flores|BR|1|||SBFZ:236
SIUL||Camaquã|KL Aviação Agrícola|BR|1|||SBPK:109
SIUM||Balsas|Fazenda Planeste|BR|1|||SWGN:213
SIUO||São José do Xingu|Fazenda Santa Adélia|BR|1
SIUQ||Cocalinho|Fazenda Rancho Alegre|BR|1
SIUR||Camapuã|Fazenda Ribeirão|BR|1|||SBCG:156
SIUS||Formosa do Rio Preto|Fazenda Santana|BR|1|||SNBR:133
SIUU||Poconé|Fazenda Santa Eulalia|BR|1|||SBCY:138
SIUV||Nova Maringá|Fazenda Vianmacel|BR|1|||SBSO:196
SIUW||Bonito|Comandante Milton Tosto|BR|1|||SBLE:53
SIUY||Mirassol d'Oeste|Jair Feliciano de Deus|BR|1|||SWTS:135
SIUZ||Itaituba|Pista Bom Jesus|BR|1|||SBIH:210
SIVD||Rio Verde de Mato Grosso|Agropecuária Santa Rita|BR|1|||SBCG:166
SIVF||São Félix Do Araguaia|Fazenda Santa Cruz|BR|1
SIVG||Sinop|Clube Aerodesportivo Selva|BR|1|||SBSI:15
SIVJ||Jaboticatubas|Cirrus Sociedade Aerodesportiva|BR|1|||SBCF:22
SIVK||Corumbá|Fazenda Ilha Verde Airstrip|BR|1|||SBRD:147
SIVN||Montes Claros|Fazenda Sansara|BR|1|||SBMK:13
SIVO||Bom Jesus Do Araguaia|Fazenda Malu|BR|1
SIVP||Nova Crixás|Bela Manhã|BR|1|||SBGO:281
SIVQ||Quadra|Clube de Voo Aeroquadra|BR|1|||SDCO:58
SIVR||Jacareacanga|Fazenda Fortuna Airstrip|BR|1|||SBAT:119
SIVU||Vila Velha|João Moteiro|BR|1|||SBVT:19
SIVV||Barão De Melgaço|Fazenda Bororeo|BR|1|||SBCY:143
SIVW||Jacupiranga|Banaer de Jacupiranga|BR|1|||SDCO:147
SIVY||São Félix do Araguaia|Fazenda Vale do Boi II|BR|1
SIVZ||Itaqui|Mata-Fome|BR|1|||SBUG:82
SIWA||Aripuanã|Fazenda Estrela do Aripuanã|BR|1|||SBVH:230
SIWB||Amambaí|Fazenda Sperafico|BR|1|||SBPP:83
SIWC||Uberlândia|Asas do Cerrado Airstrip|BR|1|||SBUL:19
SIWD||Alto Parnaíba|Fazenda Pequena Holanda|BR|1|||SBPJ:282
SIWE||Monte Carlo|Nelson Pizzani|BR|1|||SBLJ:92
SIWH||Coromandel|Francisco Lazaro da Silveira|BR|1|||SBUL:115
SIWK||São Félix do Xingu|Pista Aldeia Moykarako|BR|1|||SBCJ:248
SIWN||Joviânia|Fazenda Vargem das Flores|BR|1|||SBCN:104
SIWO||Chupinguaia|Fazenda Juliana|BR|1|||SBVH:108
SIWQ||Santa Rita Do Pardo|Fazenda Mateira|BR|1|||SBTG:146
SIWR||Nova Crixás|Fazenda Amazonas|BR|1
SIWS||Cáceres|Fazenda Santa Fé|BR|1||SDQV|SWTS:201
SIWT||Santa Terezinha|Fazenda Santa Terezinha I|BR|1|||SBPJ:247
SIWU||Aquidauana|Fazenda São Sebastião|BR|1|||SBCR:138
SIWV||Rio de Janeiro|Ten. Brig. Ar Waldir de Vasconcelos|BR|1|||SBGL:23
SIWX||Sapezal|Fazenda Comil|BR|1|||SWTS:175
SIWY||Corumbá|Fazenda Campo Augusta|BR|1|||SBRD:152
SIWZ||Aquidauana|Fazenda Fazendinha|BR|1|||SBCR:135
SIXA||Suzanópolis|Fazenda União Suzanópolis|BR|1|||SBTG:66
SIXB||Porto dos Gaúchos|Fazenda Cambara|BR|1|||SBSI:110
SIXD||Santana Do Livramento|Fazenda da Paz|BR|1|||SURV:17
SIXE||Eldorado Do Sul|Aeroclube de Eldorado do Sul|BR|1|||SBPA:27
SIXF||Três Lagoas|Fazenda Lageado|BR|1|||SBTG:57
SIXG||Catalão|Fazenda Pouso Alegre|BR|1|||SNZR:107
SIXI||São Félix do Xingu|Pista Aldeia Kokraymoro|BR|1
SIXK||Itaquiraí|Nossa Senhora do Carmo|BR|1|||SSGY:102
SIXL||São Félix do Xingu|Fazenda Barra do Triunfo|BR|1|||SBCJ:265
SIXM||Cuiabá|CIFI|BR|1|||SBCY:14
SIXO||Comodoro|Fazenda Nossa Senhora de Fátima|BR|1|||SBVH:151
SIXR||Coxim|Fazenda Santa Maria III|BR|1|||SBRD:204
SIXU||Pedra Preta|Fazenda Bahia|BR|1||SIRU|SBRD:79
SIXV||Alcinópolis|Fazenda Rancho do Planalto|BR|1|||SBRD:226
SIXX||Corumbá|Retiro Santo Antônio da Fazenda Triunfo|BR|1||SNXF|SBCR:143
SIXZ||Colniza||BR|1
SIYA||Vilhena|CAT - Clube Aéreo Taquari|BR|1|||SBVH:13
SIYD||Comodoro|Fazenda Curitiba|BR|1|||SBVH:101
SIYE||Morro Agudo|Fazenda Barra do Agudo|BR|1|||SBRP:59
SIYF||Serranópolis|Fazenda São José|BR|1|||SBTG:288
SIYH||Rio Verde Do Mato Grosso|Fazenda Cruzeiro|BR|1|||SBCG:178
SIYI||Montividiu|Fazenda Planalto|BR|1|||SBGO:216
SIYK||Urutai|Fazenda Sorriso Metálico|BR|1|||SBCN:51
SIYM||Toledo|Fazenda Montesion|BR|1|||SBTD:22
SIYN||Afogados da Ingazeira|Recanto dos Mouras|BR|1|||SNHS:87
SIYO||Montividiu|Fazenda Goiás Barreiro|BR|1|||SBGO:232
SIYR||Itaituba|Fazenda Rosa de Maio|BR|1|||SBIH:15
SIYS||Ananás|Fazenda Sertaneja|BR|1|||SWGN:111
SIYW||Lábrea|Fazenda Estrela Airstrip|BR|1|||SLGM:155
SIYX||Porto Murtinho|Fazenda Tereré Airstrip|BR|1|||SBDB:145
SIZA||Planalto Da Serra|Fazenda Serra Azul|BR|1||SWRR|SBCY:199
SIZC||Formosa do Rio Preto|Fazenda Cachoeira do Café|BR|1|||SNBR:111
SIZD||Tijucas|DZ47 Airstrip|BR|1|||SBFL:44
SIZF||Altônia|Nossa Senhora das Graças|BR|1|||SSGY:26
SIZG||Nova Maringá|Fazenda Santo André II|BR|1|||SBSO:177
SIZH||Aparecida do Taboado|Fazenda Vista Alegre|BR|1|||SBTG:86
SIZI||Catalão|Fazenda Agrícola Godoy|BR|1|||SNZR:80
SIZK||Barra do Garças|Fazenda Vera Cruz|BR|1
SIZL||São Pedro do Turvo|Fazenda Lagoa|BR|1|||SBML:62
SIZM||Dois Vizinhos|Mocelin II|BR|1|||SSFB:42
SIZN||Damianópolis|Fazenda Lagoa Nova Airstrip|BR|1|||SBBR:233
SIZO||Cocalinho|Calcário Vale do Araguaia|BR|1
SIZP||Gaúcha do Norte||BR|1|||SBSO:273
SIZQ||Botucatu|Fazenda Real|BR|1|||SDCO:109
SIZR||Iguatemi|Fazenda Águas Claras|BR|1|||SSGY:89
SIZS||Gaúcha|Agropecuária Equus|BR|1|||SBSO:269
SIZU||Paranatinga|Agrochapada|BR|1|||SBSO:185
SIZX|JUA|Juara|Inácio Luís do Nascimento|BR|1|||SBSI:224
SJAA||Gaúcha do Norte|Fazenda Araguari|BR|1||SIGO|SBSO:209
SJAC||Capitão Poço|Citropar|BR|1|||SNSM:128
SJAF||Santo Antônio do Leverger|Santo Antônio das Furnas|BR|1|||SBRD:50
SJAH||Grajaú|Fazenda Gesso Integral|BR|1|||SBIZ:255
SJAI||Montividiu do Norte|Fazenda Davilândia|BR|1
SJAK||Sinop|Aerobako|BR|1|||SBSI:17
SJAL||Iramaia|Lagoa Grande|BR|1|||SBLE:107
SJAQ||Unaí|Fazenda Renascença|BR|1|||SNZR:137
SJAR||Nova Crixás|Fazenda Araçatuba|BR|1||SJCL|SBGO:266
SJAS||Reginópolis|Fazenda São Roque|BR|1|||SBAE:56
SJAU||Araguacema||BR|1|||SBPJ:208
SJAV||Chapadão do Céu|Aerocéu Aviação Agrícola|BR|1|||SBTG:282
SJAW||Gavião Peixoto|Fazenda Citrícola|BR|1|||SBAQ:27
SJAZ||São Desidério|Fazenda Querubim|BR|1|||SNBR:134
SJBA||Campo Grande|Fazenda Beatriz|BR|1|||SBCG:158
SJBB||Caseara|Fazenda Bacaba|BR|1|||SBPJ:188
SJBC||Cumaru do Norte|Fazenda União|BR|1
SJBF||Manga|Fazed Santa Bárbara|BR|1|||SBMK:236
SJBH||Canarana|Fazenda Canaã|BR|1
SJBK||Altamira|Iriri|BR|1|||SBIH:252
SJBN||Rio Maria|Nossa Senhora Aparecida Airstrip|BR|1|||SBCJ:143
SJBR||Figueirópolis|Fazenda Santa Rita|BR|1|||SBPJ:227
SJBT||Aquidauana|Fazenda Vera Lúcia|BR|1|||SBCR:176
SJBU||Jaborandi|Fazenda Alto Jaborandir Airstrip|BR|1|||SBBR:247
SJBW||Portão|Berge Vile|BR|1|||SBPA:30
SJBX||São José Do Mipibu|Severino Lopes|BR|1|||SBSG:31
SJBY||Santa Inês|João Silva|BR|1|||SBSL:171
SJBZ||Itarumã|Fazenda Três Barras|BR|1|||SBTG:208
SJCA||Mococa|Comandante Vittorio Bonomi|BR|1|||SBRP:87
SJCC||Correntina|Fazenda Serrana|BR|1|||SNBR:245
SJCF||Palmas|Sítio Flyer|BR|1||SIHJ|SBPJ:21
SJCH||Brejo da Madre de Deus|Fernando João Pereira dos Santos Filho|BR|1|||SNRU:23
SJCJ||Sapezal|Fazenda Carajás|BR|1|||SBVH:164
SJCM||Aquiraz|Catuleve|BR|1|||SBFZ:25
SJCN||Mineiros|Fazenda Jacuba|BR|1|||SBRD:230
SJCP||Paraúna|Fazenda São Roberto|BR|1|||SBGO:180
SJCQ||Baixa Grande|Fazenda Serra Azul|BR|1|||SBLE:146
SJCR||Serra Dourada|Fazenda Rebeca|BR|1||SNRE|SNBR:141
SJCS||Abunã|Fazenda Santa Cármen Airstrip|BR|1|||SLGM:133
SJCU||Correntina|SJ Agropecuária Airstrip|BR|1|||SNBR:203
SJCW||Urucará|Jatapu|BR|1|||SBEG:226
SJCY||Cuiabá|Estância Santa Rita|BR|1|||SBCY:17
SJCZ||Ipiranga do Norte|Fazenda Cascata|BR|1|||SBSI:45
SJDB||Britânia|Fazenda Santa Elisa|BR|1|||SBGO:289
SJDC||Pium|Fazenda Vale Verde|BR|1|||SBPJ:157
SJDE||Jateí|Fazenda União|BR|1|||SSUM:151
SJDF||Brasilândia de Minas|Fazenda Futura|BR|1|||SNZR:80
SJDG||Salto Grande|Jorge de Barros Carvalho|BR|1|||SBML:77
SJDI||Loanda|Fazenda Ipiranga|BR|1|||SSUM:101
SJDJ||Camapuã|Fazenda São José|BR|1|||SBCG:196
SJDL||Corumbá|Fazenda Paraíso|BR|1|||SBRD:144
SJDM||Peixoto De Azevedo|Fazenda Jarinã|BR|1|||SBSI:279
SJDN||Aquidauana|Fazenda Campo Alegre|BR|1|||SBCG:159
SJDS||Eusébio|M Dias Branco|BR|1|||SBFZ:16
SJDT||Aquidauana|Fazenda São Roque|BR|1|||SBCG:125
SJDU||Uruguaiana|Nossa Senhora do Loreto|BR|1|||SBUG:10
SJDW||Caracol|Fazenda Canadá|BR|1|||SBDB:130
SJDX||Aquidauana|Fazenda Bandeirantes|BR|1|||SBCG:149
SJDY||Camapuã|Fazenda da Barra|BR|1|||SBCG:211
SJDZ||Unaí|Fazenda Canduá|BR|1|||SBBR:144
SJEA||Palmeirópolis|Cadete 56-147 Santana|BR|1|||SBPJ:285
SJEC||Pelotas|Eduardo Cordeiro de Araújo|BR|1|||SBPK:14
SJEF||Aquidauana|Fazenda Costa Rica|BR|1|||SBCG:164
SJEG||Corumbá|Estância Esmeralda|BR|1|||SBCR:139
SJEH||Ribeirão Bonito|Clemente Verillo|BR|1|||SBAQ:34
SJEJ||Alto Alegre|Fazenda Estrela|BR|1|||SBBV:83
SJEK||Canarana|Satélite Aviação Agrícola|BR|1
SJEL||Cornélio Procópio|Fazenda Santa Helena|BR|1|||SBLO:55
SJEN||Santa Vitória do Palmar|Plá e Silva|BR|1|||SBPK:170
SJER||Acreúna|Fazenda Canadá|BR|1|||SBGO:144
SJEV||Assaré|Evanderto Almeida|BR|1|||SBJU:68
SJEW||Nova Andradina|Usina Santa Helena|BR|1|||SSUM:203
SJEX||São Desidério|Fazenda Vitória|BR|1|||SNBR:158
SJFA||São Desidério|Franor|BR|1||SNSD|SNBR:121
SJFB||Riachão|Fazenda Bacuri|BR|1|||SWGN:236
SJFF||Estrela D'Oeste|Frigo Estrela|BR|1|||SBAU:94
SJFG||Campo Verde|Fazenda Fartura Airstrip|BR|1|||SBCY:139
SJFI||Santa Rita do Tocantins|Fazenda JAD|BR|1|||SBPJ:101
SJFJ||Terenos|Fazenda Jaraguá|BR|1|||SBCG:14
SJFK||Araguaçu|Fazenda Cachoeira|BR|1|||SBPJ:286
SJFL||Sandolândia|Fazenda Campo Formoso|BR|1
SJFM||Eldorado|Fazenda Macuco|BR|1|||SSGY:27
SJFN||Coxim|Fazenda Brasil Novo|BR|1|||SBRD:200
SJFO||Mossâmedes|Fazenda Sorriso|BR|1|||SBGO:111
SJFP||Corumbá|Fazenda Pensamento|BR|1|||SBCR:124
SJFQ||Itatinga|Fazenda Quatrirmãs|BR|1|||SBAE:97
SJFR||Porto Seguro|Trancoso Rio Frade Airstrip|BR|1|||SBPS:23
SJFT||Nova Bandeirantes|Fazenda Triunfo Rio Turvo|BR|1|||SBAT:179
SJFU||Bananeiras|Tabuleiro|BR|1|||SBKG:70
SJFV||Monte Alegre De Minas|Fazenda Gaia|BR|1|||SBUL:57
SJFW||São Francisco de Goiás|Fazenda São Francisco|BR|1|||SBGO:86
SJFX||Corumbá|Fazenda Cypi|BR|1|||SBCR:88
SJFY||Campo Novo do Parecis|Fazenda Flamingo|BR|1|||SWTS:105
SJGB||Curvelo|Fazenda São Gabriel|BR|1|||SBCF:81
SJGC||São Desidério|Fazenda Busato I|BR|1|||SNBR:105
SJGD||São Desidério|Fazenda Rio Brilhante|BR|1|||SNBR:111
SJGE||Itaituba|Nações Unidas Airstrip|BR|1|||SBIH:207
SJGF||Campo Novo do Parecis|Fazenda Irmãos Garcia|BR|1|||SWTS:112
SJGH||São Borja|Aeropel|BR|1|||SARP:147
SJGI||Itiquira|Fazenda Itiquira|BR|1|||SBRD:112
SJGJ||Itapeva|Sítio São Jorge|BR|1|||SDCO:157
SJGL||Luziânia|Comandante Zequinha / Grand Lake|BR|1|||SBBR:90
SJGN||São José Do Rio Claro|Fazenda Agromar|BR|1|||SWTS:152
SJGR||Flores de Goiás|Santa Maria|BR|1|||SBBR:180
SJGU||Araguatins||BR|1|||SBIZ:74
SJGV||Santo Antônio de Goiás|Toca|BR|1|||SBGO:19
SJGW||Couto Magalhães|Fazenda São Geraldo|BR|1|||SWGN:146
SJGY||São Domingos|Fazenda Barriguda|BR|1|||SNBR:261
SJGZ||Anaurilândia|Fazenda Araçatuba|BR|1|||SBDN:129
SJHD||Darcinópolis|Josidith|BR|1|||SWGN:64
SJHE||Ipiranga Do Norte|Fazenda Palmeira|BR|1|||SBSI:50
SJHF||Mata de São João|Aníbal Azevedo Filho Airstrip|BR|1|||SBSV:39
SJHG|CFO|Confresa||BR|1
SJHH||Serranópolis|Fazenda Poruína|BR|1|||SBTG:298
SJHJ||Baixa Grande do Ribeiro|Fazenda São João|BR|1
SJHK||Barão de Melgaço|Fazenda Santa Maria do Porto da Capivara|BR|1|||SBCY:174
SJHN||Itaquiraí|Fazenda Meio Século|BR|1|||SSGY:89
SJHQ||São José Do Xingu|Fazenda São José da Reunidas|BR|1
SJHS||Uberlândia|Fazenda São Vicente|BR|1|||SBUL:49
SJHU||Vila Bela da Santíssima Trindade|Agropecuária Vale do Guaporé|BR|1|||SBVH:132
SJHV||Taim|Granja 4 Irmãos|BR|1|||SBPK:65
SJHW||Engenheiro Navarro|Professor Maurício Joppert|BR|1|||SBMK:67
SJHX||Unaí|Fazenda Ouro Verde|BR|1|||SNZR:84
SJHZ||Barão de Melgaço|Fazenda Arara Azul|BR|1||SWZB|SBCY:155
SJIC||Santa Rita Do Pardo|Pedro da Costa Lima|BR|1|||SBTG:125
SJID||Três Lagoas|Fazenda Goiaba|BR|1|||SBTG:136
SJIF||Sapezal|Grupo Scheffer|BR|1||SJIE|SBVH:164
SJIJ||Novo São Joaquim|Fazenda 2J|BR|1|||SBRD:276
SJIL||Tupaciguara|Brigadeiro Fábio Pereira da Silveira|BR|1|||SBUL:60
SJIN||Cocalinho|Fazenda Lagoa Baia da Saudade|BR|1
SJIR||Iramaia|Engenheiro Joaquim Martins|BR|1|||SBLE:102
SJIS||Deodápolis|Fazenda Annalu|BR|1|||SBPP:163
SJIU||Ipiranga do Norte|Fazenda Caregi|BR|1|||SBSO:45
SJIV||Caseara|Fazenda Veneza|BR|1|||SBPJ:198
SJIY||Iaciara|Fazenda Iaciara|BR|1|||SBBR:234
SJIZ||Eunápolis|Fazenda Cafenápolis|BR|1|||SBPS:54
SJJB||Brasilândia|Fazenda Cacique|BR|1|||SBTG:114
SJJC||Ponta Porã|Fazenda Cachoeira|BR|1|||SBPP:36
SJJD||Porto Murtinho|Fazenda Cerro Porã|BR|1|||SBDB:136
SJJF||Novo Aripuanã|Pousada do Rio Roosevelt|BR|1|||SBJI:282
SJJG||Corumbá|Fazenda Santa Bárbara|BR|1|||SBCR:193
SJJH||Campos De Júlio|Fazenda Juína|BR|1|||SBVH:123
SJJI||Matupá|Fazenda São José Airstrip|BR|1|||SBAT:149
SJJJ||Altamira|Aeroxingu|BR|1|||SBHT:12
SJJK||Alta Floresta|Fazenda Taquaral|BR|1|||SBAT:72
SJJL||Barreiras|Fazenda Campo Aberto|BR|1|||SNBR:109
SJJM||Matupá|Fazenda São João|BR|1|||SBAT:175
SJJN||Alta Floresta|Fazenda Shangri-lá Airstrip|BR|1|||SBAT:52
SJJO||Monte Alegre De Goiás|João de Oliveira Bueno|BR|1|||SNBR:260
SJJQ||Rio Pardo de Minas|Fazendas Apóstolo Simão Coffee|BR|1|||SBVC:184
SJJR||Andrelândia|Fazenda Recreio|BR|1|||SBJF:85
SJJT||Três Lagoas|Fazenda Pampili|BR|1|||SBTG:115
SJJU||Nova Lacerda|Fazenda Barra Mansa|BR|1|||SBVH:150
SJJV||Campo Grande|Fazenda Primavera|BR|1|||SBCG:67
SJJW||Quirinópolis|Fazenda Canamari|BR|1||SWWG|SBCN:209
SJJX||Porto Murtinho|Porto Conceição|BR|1|||SBDB:155
SJKA||Campo Novo Do Parecis|Aerocampo|BR|1|||SWTS:125
SJKB||Brasnorte|Fazenda Adelaide|BR|1|||SWTS:186
SJKC||Ourilândia do Norte|Pista Aldeia Kikretum|BR|1|||SBCJ:214
SJKE||São Félix do Xingu|Pista Aldeia Kedjêrêkrã|BR|1
SJKG||Regeneração|Fazenda Chapada Grande|BR|1|||SBTE:148
SJKI||Macapá|Hangar Comandante Salomão Alcolumbre|BR|1|||SBMQ:19
SJKJ||Campos de Júlio|Fazenda Siriema|BR|1|||SBVH:132
SJKK||Ivaiporã|Sérgio Bonifácio|BR|1|||SBMG:96
SJKL||Normândia|Canã|BR|1|||SYKA:90
SJKM||Uiramutã|Canawapai|BR|1|||SYKA:72
SJKN||Uiramutã|Caracanã|BR|1|||SVSE:99
SJKO||Normândia|Cararuau|BR|1|||SYLT:87
SJKP||Uiramutã|Caraparu|BR|1|||SVSE:76
SJKQ||Uiramutã|Caramambataí|BR|1|Mapae||SVSE:89
SJKS||Mucajaí|Catrimani I|BR|1|||SBBV:263
SJKT||Normândia|Contão|BR|1|||SVSE:79
SJKU||Uiramutã|Cumaipá|BR|1|||SVSE:80
SJKV||Pacaraima|Cumanã I|BR|1|||SVSE:42
SJKW||Pacaraima|Cumanã II|BR|1|||SVSE:38
SJKX||Normândia|Cutia|BR|1|||SYLT:88
SJKZ||Uiramutã|Estevão|BR|1|||SVSE:80
SJLA||Uiramutã|Flechal|BR|1|||SVSE:96
SJLB||Lambari d'Oeste|Fazenda Chaparral|BR|1|||SWTS:107
SJLC||Alto Alegre|Hakoma|BR|1
SJLD||Lambari d'Oeste|Fazenda Porto do Campo|BR|1|||SWTS:121
SJLE||Alto Alegre|Halikato-u|BR|1|||SVSE:272
SJLH||Bonfim|Jacamim|BR|1|||SBBV:125
SJLI||Bom Jardim|Fazenda Lilliani|BR|1|||SNEB:138
SJLJ||Caroebe|Jatapuzinho|BR|1|||SBBV:299
SJLK||Bonfim|Lago Grande I|BR|1|||SYLT:63
SJLL||Normândia|Maturucá|BR|1|||SYKA:105
SJLM||Pacaraima|Leão de Ouro|BR|1|||SVSE:55
SJLN||Pacaraima|Maloquinha|BR|1|||SVSE:64
SJLO||Uiramutã|Manalaí|BR|1|||SYKA:99
SJLP||Bonfim|Manoá-Pium|BR|1|||SYLT:55
SJLQ||Normândia|Maracanã|BR|1|||SYKA:108
SJLS||Bonfim|Marupá|BR|1|||SBBV:125
SJLT||Boa Vista|Milho|BR|1|||SBBV:68
SJLU||Caracaraí|Missão Catrinami|BR|1|||SBBV:216
SJLV||Uiramutã|Morro|BR|1|||SYKA:106
SJLW||Pacaraima|Mudubim I|BR|1|||SVSE:74
SJLX||Uiramutã|Mutum|BR|1|||SYKA:90
SJLZ||Formoso Do Araguaia|Coperjava|BR|1|||SBPJ:227
SJMA||Camapuã|Fazenda Marli|BR|1|||SBCG:144
SJMD||Iracema|Paapiu Novo|BR|1|||SBBV:251
SJME||Pacaraima|Mato Grosso|BR|1|||SVSE:27
SJMF||Normândia|Pacu|BR|1|||SYLT:100
SJMH||Alto Alegre|Palimiú|BR|1|||SVSE:244
SJMI||Alto Alegre|Parafuri Airstrip|BR|1
SJMJ||Uiramutã|Pedra Branca|BR|1|||SVSE:98
SJMK||Uiramutã|Pedra Preta|BR|1|||SVSE:76
SJML||Pacaraima|Piolho|BR|1|||SVSE:48
SJMM||Uiramutã|Pipi|BR|1|||SYKA:96
SJMN||Normândia|Raposa|BR|1|||SYLT:59
SJMO||Pacaraima|Santa Isabel|BR|1|||SVSE:33
SJMP||Pacaraima|Santa Liberdade Airstrip|BR|1|||SVSE:103
SJMQ||Normândia|Santa Maria de Normândia Airstrip|BR|1|||SYLT:97
SJMR||Itaquiraí|Maragogipe|BR|1|||SSGY:70
SJMT||Pacaraima|São Miguel Cachoeirinha|BR|1|||SVSE:19
SJMU||Uiramutã|Sauparú|BR|1|||SVSE:92
SJMV||Uiramutã|Serra do Sol|BR|1|||SVSE:86
SJMW||Uiramutã|Socó|BR|1|||SVSE:108
SJMX||Pacaraima|Suapi|BR|1|||SVSE:32
SJMZ||São Desidério|Fazenda Mizote|BR|1|||SNBR:146
SJNA||Glicério|Fazenda Nova Aliança|BR|1|||SBAU:32
SJNB||Pacaraima|Ubaru|BR|1|||SVSE:38
SJNC||Alto Alegre|Uraricoera|BR|1|||SBBV:174
SJND||Cascavel|Darinha|BR|1|||SBFZ:49
SJNE||Caracaraí|Wapum|BR|1|||SBBV:125
SJNF||Uiramutã|Wilimon|BR|1|||SYKA:97
SJNG||Alto Alegre|Xidea|BR|1
SJNH||São Félix do Xingu|Fazenda Nova Esperança|BR|1
SJNI||Valentim Gentil|Fazenda Buriti|BR|1|||SBAU:78
SJNK||Santa Luzia D'Oeste|Fazenda Três Perobas|BR|1|||SSKW:68
SJNL||Campo Novo Do Parecis|Fazenda Reata|BR|1|||SWTS:116
SJNM||Nova Mutum|Fazenda Santa Luzia|BR|1|||SBSO:171
SJNO||Itaju do Colônia|Fazenda Bela Nova Airstrip|BR|1|||SBIL:72
SJNP|NPR|Novo Progresso||BR|1
SJNQ||Medeiros Neto|Destilaria Medasa|BR|1|||SBPS:164
SJNR||Macapá|Fazenda Rosário|BR|1|||SBMQ:173
SJNU||Ribeirão Cascalheira|Fazenda Campo Alto|BR|1
SJNV||Gouvelândia|Fazenda São Francisco|BR|1|||SBCN:191
SJNW||Novo Mundo|Fazenda Nhandu|BR|1|||SBAT:101
SJNX||Chapadão Do Céu|Cosmos Aviação Agrícola|BR|1|||SBTG:279
SJNZ||Lambari D'oeste|Fazenda São Jorge|BR|1|||SWTS:99
SJOD||Jordão||BR|1||SSQB|SBCZ:199
SJOG|AQM|Ariquemes||BR|1|||SBPV:161
SJOH||João Pinheiro|Destilaria Veredas|BR|1|||SNZR:125
SJOJ||Açailândia|Simasa|BR|1|||SBIZ:74
SJOO||Comodoro|Doutor João Osmar de Oliveira|BR|1|||SBVH:163
SJOP||Rosário Oeste|Fazenda Panflora|BR|1||SWRJ|SBCY:79
SJOR||Cocos|Fazenda Onça do Barão|BR|1|||SNBR:238
SJOU||Paranatinga|Minerva Paranatinga|BR|1|||SBRD:247
SJOW||Santo Antônio Do Aracanguá|Fazenda Guadalupe|BR|1|||SBAU:21
SJOX||São José do Xingu|Fazenda Alegria|BR|1
SJOY||Palmeira|Jorge Luiz Stocco|BR|1|||SBPG:42
SJPC||Comodoro|Fazenda Paredão|BR|1||SJAG|SBVH:106
SJPI||Itaquiraí|Porto Bonito|BR|1||SSKF|SSUM:76
SJPK||Timon|Fazenda Campo das Princesas|BR|1|||SBTE:29
SJPL||Itaituba|Pista do Limão|BR|1|||SBIH:173
SJPO||Piranhas|Xingó|BR|1|||SBUF:56
SJPP||Alta Floresta|Aero Rural|BR|1|||SBAT:11
SJPR||Balsa Nova|Asas de Balsa Nova|BR|1|||SBCT:47
SJPS||União do Sul|Fazenda Promissão|BR|1|||SBSI:125
SJPT||Uberlândia|Quatro Ventos|BR|1|||SBUL:16
SJPU||Teresina|Clube de Ultraleves do Piauí|BR|1|||SBTE:12
SJPW||Lucas Do Rio Verde|Fazenda Guimarães II|BR|1|||SBSO:89
SJPX||Poxoréo|Fazenda Cidade Verde|BR|1|||SBRD:135
SJQB||Nova Alvorada do Sul|Fazenda Jequitibá|BR|1|||SBCG:180
SJQD||Formosa do Rio Preto|Grupo Shimohira|BR|1|||SNBR:174
SJQF||Campo Novo Do Parecis|Fazenda Londrina|BR|1|||SWTS:149
SJQI||Poconé|Porto Jofre|BR|1|||SBCY:202
SJQJ||Jaborandi|Fazenda Fortaleza|BR|1|||SBRP:86
SJQK||Boa Vista|Barra do Vento|BR|1|||SBBV:22
SJQL||Santa Juliana|Águas Claras Aviação Agrícola|BR|1|||SBUR:65
SJQN||Quirinópolis||BR|1|||SBCN:207
SJQO||Baixa Grande do Ribeiro|Fazenda Confiança|BR|1
SJQP||Cocalinho|Estância Rebog|BR|1
SJQQ||Portel|Fazenda Terra Alta|BR|1|||SBHT:147
SJQS||União do Sul|Fazenda Santa Tereza|BR|1|||SBSI:173
SJQT||Nova Lima|Fazenda Haras RPC|BR|1|||SBCF:59
SJQV||Novo Aripuanã|Pousada Amazon Roosevelt|BR|1|||SBMY:206
SJQX||Uruará|Fazenda Uruará|BR|1|||SBHT:130
SJQZ||Alta Floresta d'Oeste|Fazenda Peça Rara Agropecuária II|BR|1|||SSKW:128
SJRB||Santa Cruz Do Xingu|Fazenda VR|BR|1
SJRC||Vila Bela Da Santíssima Trindade|Serra da Borda|BR|1|||SBVH:241
SJRG|RIG|Rio Grande|Rio Grande Regional|BR|1||SBRG|SBPK:43
SJRH||Campo Verde|Fazenda Galheiro|BR|1|||SBRD:143
SJRI||Baixa Grande Do Ribeiro|Condomínio Boa Esperança|BR|1
SJRJ||Campo Grande|Fazenda Jacaré|BR|1||SSAR|SBCG:136
SJRK||Santana Do Araguaia|Agropecuária São Roberto|BR|1
SJRO||Auriflama|Fazenda Santa Elisa|BR|1|||SBAU:71
SJRP||Marcelândia|Grupo Pronorte|BR|1|||SBSI:145
SJRR||Paraúna|Fazenda Barreiro|BR|1|||SBGO:188
SJRS||Junqueirópolis|Fazenda Guanabara|BR|1|||SBTG:72
SJRT||São José do Rio Claro|Aero Agricola Rio Claro|BR|1|||SBSO:156
SJRU||Santa Maria das Barreiras|Fazenda Terra Roxa Airstrip|BR|1|||SBPJ:285
SJRV||Nova Maringá|PCH Garganta da Jararaca|BR|1|||SWTS:143
SJRW||Paraíso das Águas|PCH Buriti|BR|1|||SBTG:189
SJRY||Juara|Fazenda Rio Mutuca|BR|1|||SBAT:234
SJSA||Juti|Fazenda Aimorés|BR|1|||SBPP:116
SJSB||Corumbá|Fazenda São Bento do Nabileque|BR|1|||SBCR:126
SJSC||Sertão|Fazenda San Cyro|BR|1|||SBPF:37
SJSE||Itaituba|Serabi|BR|1|||SBIH:232
SJSF||Maracaju|Fazenda Serrana Airstrip|BR|1|||SBCG:104
SJSH||Governador Celso Ramos|Fly Ville|BR|1|||SBFL:34
SJSJ||Guaratinga|Fazenda São Jorge|BR|1|||SBPS:66
SJSK||Parecis|Usina Calcário Parecis|BR|1|||SSKW:73
SJSM||Goioerê|Chácara Marcella|BR|1|||SSUM:55
SJSN||São Luiz Do Norte|Fazenda Carvalho|BR|1|||SBBR:192
SJSR||Mara Rosa|Fazenda Santa Rosa|BR|1|||SBBR:288
SJSS||Sorriso|Agrifor|BR|1|||SBSO:4
SJSU||Alto Paraíso|Fazenda São Marcus|BR|1|||SSUM:56
SJSV||São Roque de Minas|Fazenda Guiné|BR|1|||SBAX:111
SJSX||Matrinchã|Fazenda Montana|BR|1||SWMN|SBGO:234
SJTB||Chapada Dos Guimarães|Fazenda Buriti|BR|1|||SBCY:57
SJTC||Antônio João|Fazenda Itaguassu|BR|1|||SBPP:41
SJTF||Alta Floresta D'Oeste|Fazenda Mequens|BR|1|||SSKW:195
SJTG||Porto Murtinho|Fazenda Matão|BR|1|||SBDB:109
SJTH||Paraúna|Fazenda Pôr do Sol|BR|1|||SBBR:72
SJTK||Itaquiraí|Fazenda Itakiray|BR|1|||SSGY:64
SJTL||Jaguapitã|Aero Agrícola Gaivota|BR|1|||SBLO:58
SJTM||Mirandópolis|Santa Cecília|BR|1|||SBAU:65
SJTN||Candeias do Jamari|Fazenda Triunfo|BR|1|||SBPV:58
SJTO||São Desidério|Tabuleiro III|BR|1|||SNBR:143
SJTP||Tapurá|Tapurah|BR|1|||SBSO:94
SJTQ||Campos de Júlio|Delazzeri|BR|1|||SBVH:144
SJTR||Aurora do Tocantins|Fazenda Timbaúba I|BR|1|||SNBR:137
SJTS||Terra Santa||BR|1|||SBTB:66
SJTT||Novo Planalto|Fazenda Lagoa do Barro|BR|1
SJTU||Campo Novo Do Parecis|Fazenda Tucano|BR|1|||SWTS:121
SJTW||Uruguaiana|Arenhart Aviação Agrícola|BR|1|||SBUG:16
SJTZ||Dom Eliseu||BR|1|||SBIZ:137
SJUA||Buritis|Fazenda ABC|BR|1|||SBBR:179
SJUB||Vila Bela Da Santíssima Trindade|Fazenda Rio Azul|BR|1|||SBVH:277
SJUC||Padre Bernardo|Fazenda Santa Cruz|BR|1|||SBBR:63
SJUD||Comodoro|Fazenda Uberaba|BR|1|||SBVH:45
SJUH||Pedrinópolis|Fazenda Lagoinha|BR|1|||SBAX:67
SJUI||Araguanã|Fazenda Uirapuru|BR|1|||SWGN:47
SJUJ||Peixoto de Azevedo|Fazenda Juruna|BR|1|||SBSI:279
SJUL||Iaras|Fazenda Rio Pardo|BR|1|||SBAE:80
SJUO||Jussara|Fazenda Juscelândia|BR|1|||SBGO:266
SJUQ||São José dos Campos|Fazenda São Clemente|BR|1|||SBSJ:12
SJUR||Paranatinga|Fazenda Reunidas|BR|1|||SBSO:203
SJUS||Britânia|Fazenda Acará|BR|1|||SBGO:270
SJUU||Nova Roma|Fazenda Paraná|BR|1|||SBBR:234
SJUV||Nova Ubiratã|Fazenda Vitória|BR|1|||SBSO:82
SJVA||Brasnorte|Fazenda Varnier|BR|1|||SWTS:186
SJVB||Pedrinhas Paulista|Bugio|BR|1|||SBLO:67
SJVD||Paranatinga|Fazenda Santo André IV|BR|1|||SBRD:295
SJVF||Cáceres|Fazenda Várzea Funda|BR|1|||SBCY:201
SJVG||Vila Bela da Santíssima Trindade|Fazenda Gameleira|BR|1|||SBVH:225
SJVI||Corumbá|Fazenda Carmen|BR|1|||SBCR:155
SJVK||São Lourenço do Sul|Pian Airstrip|BR|1|||SBPK:82
SJVL||Guaramirim|Vale Europeu|BR|1|||SBJV:23
SJVM||Alta Floresta|Estância Califórnia|BR|1|||SBAT:4
SJVN||Campo Novo do Parecis|Fazenda Pindorama|BR|1|||SWTS:115
SJVO|ARS|Aragarças||BR|1||SWAC|SBRD:276
SJVP||Presidente Figueiredo|Vila Pitinga|BR|1|||SBEG:249
SJVQ||Loreto|Fazenda Rio Verde|BR|1
SJVR||Jardim|Fazenda São Joaquim|BR|1|||SBDB:27
SJVS||Capinópolis|Vale do Paranaíba|BR|1|||SBUL:155
SJVU||Unaí|Maicom Manica|BR|1|||SNZR:71
SJVV||Dueré|Fazenda Viviane|BR|1|||SBPJ:168
SJVW||Luís Eduardo Magalhães|Fazenda Agronol|BR|1||SNBB|SNBR:79
SJVX||Ulianópolis|Pagrisa|BR|1|||SNEB:91
SJVY||Itarumã|Fazenda Vitória|BR|1|||SBTG:223
SJVZ||Guatapará|Represa Fazenda Capão da Cruz|BR|1|||SBRP:35
SJWA||Bom Jesus do Galho|Aerovaço|BR|1|||SBIP:13
SJWB||Rancharia|Fazenda Bartira|BR|1|||SBDN:47
SJWE||Canarana|Fazenda Araribá|BR|1
SJWG||Alegrete|Itagro|BR|1|||SBUG:130
SJWI||Campo Grande|Fazenda Flor|BR|1|||SBCG:149
SJWO||Cocalinho|Joule Agropecuária|BR|1
SJWP||São Desidério|Warpol|BR|1|||SNBR:117
SJWQ||Birigui|Aeroclube de Birigui - CMTE Munir Djabak|BR|1|||SBAU:15
SJWT||Correntina|Fazenda Tucumã|BR|1|||SNBR:193
SJWV||São Miguel Do Araguaia|Fazenda São Judas|BR|1
SJWW||Água Clara|Fazenda Cachoeira Preta|BR|1|||SBCG:160
SJWX||Euclides da Cunha Paulista|Rio Alegre|BR|1|||SBMG:113
SJXA||Itaúna|Clube de Aviação de Itaúna|BR|1|||SBCF:87
SJXB||Bonito|Fazenda Rancho Bonito|BR|1|||SBDB:20
SJXC||Santa Cruz Cabrália|Usina Santa Cruz|BR|1|||SBPS:41
SJXE||Buriti dos Lopes|Deputado Moraes Souza|BR|1|||SBPB:33
SJXG||São Félix do Araguaia|Fazenda Agrovás|BR|1
SJXI||Santa Rita do Sapucai||BR|1|||SBSJ:109
SJXJ||Nova Alvorada do Sul|Alimentos Dallas|BR|1|||SBCG:113
SJXM||Lima Duarte|Carolina de Assis Repetto|BR|1|||SBJF:53
SJXO||Jaborandi|Grupo DH|BR|1|||SNBR:253
SJXS||Belmonte|Veracel|BR|1|||SBPS:48
SJXU||Brasília|Fazenda Coperbrás|BR|1|||SBBR:42
SJXV||Amambaí|Fazenda Bela Vista|BR|1|||SBPP:79
SJXX||Ponta Porã|Recreio|BR|1|||SBPP:22
SJXZ||Itabela|Antônio Covre|BR|1|||SBPS:50
SJYC||Juti|Fazenda Yvy-Pita|BR|1|||SBPP:113
SJYD||Santa Luzia d'Oeste|Fazenda Kajussol|BR|1|||SSKW:57
SJYE||Pacaraima|Água Fria|BR|1|||SVSE:96
SJYF||Caracaraí|Ajarani|BR|1|||SBBV:128
SJYG||Alto Alegre|Alto Mucajaí|BR|1|||SBBV:170
SJYH||Santana do Araguaia|Fazenda Cachoeira Alta|BR|1
SJYI||Pacaraima|Araí|BR|1|||SVSE:35
SJYJ||Alto Alegre|Aratha-Ú|BR|1
SJYK||Caracaraí|Baixo Catrimani|BR|1|||SWBC:241
SJYL||Alto Alegre|Baixo Mucajaí|BR|1|||SBBV:148
SJYM||Pacaraima|Bala|BR|1|||SVSE:100
SJYO||Pacaraima|Bananal|BR|1|||SVSE:63
SJYP||Uiramutã|Bananeira|BR|1|||SVSE:109
SJYQ||Uiramutã|Barreirinha|BR|1|||SVSE:98
SJYR||Pacaraima|Caju|BR|1|||SVSE:72
SJYS||Normândia|Camará Airstrip|BR|1|||SYLT:81
SJYT||Pacaraima|Campo Formoso|BR|1|||SVSE:45
SJYU||Pacaraima|Campo Grande Airstrip|BR|1|||SVSE:41
SJYW||Santa Terezinha|Fazenda Santa Terezinha|BR|1|||SBPJ:284
SJYZ||Campo Novo do Parecis|Fazenda Gaúcha|BR|1|||SWTS:106
SJZA|CJZ|Cajazeiras|Pedro Vieira Moreira|BR|2
SJZB||Castanheira|Vale do Tucanã|BR|1|||SBVH:274
SJZC||Maraial|Destilaria São Luiz|BR|1|||SNRU:61
SJZD||Corumbá|Fazenda Bandeiras|BR|1|||SBCR:164
SJZE||Santa Terezinha|Fazenda Tapiraguaia|BR|1|||SBPJ:243
SJZF||Três Lagoas|Fazenda Campo Triste|BR|1|||SBTG:39
SJZG||Caseara|Fazenda São Geraldo|BR|1|||SBPJ:169
SJZH||Nova Santa Helena|Fazenda Rio do Fogo|BR|1|||SBSI:128
SJZL||Caracol|Fazenda Vaca Mocha|BR|1||SDXR|SBDB:131
SJZM||Rio Verde de Mato Grosso|Fazenda Santa Clara|BR|1|||SBCG:179
SJZN||Sapezal|Fazenda Cima|BR|1|||SBVH:165
SJZO||Campo Grande|Zi Viol|BR|1|||SBCG:84
SJZP||Novo Mundo|Mathovi|BR|1|||SBAT:70
SJZQ||Itaqui|Fazenda Bom Retiro|BR|1|||SBUG:97
SJZR||São Miguel do Guaporé|Fazenda Rodeio|BR|1|||SSKW:184
SJZS||Uruçui|Fazenda Canel|BR|1
SJZT||Serra Ramalho|Fazenda Busato II|BR|1|||SNBR:189
SJZW||Itatinga|Fazenda Regina|BR|1|||SDCO:129
SJZZ||Palmeirópolis|Agropecuária Zé Reis|BR|1
SKAA||Paz de Ariporo|Caño Garza|CO|1|||SKYP:93
SKAC|ACR|Araracuara||CO|1|||SKHZ:105
SKAD|ACD|Acandí|Alcides Fernández|CO|1|||SKLC:98
SKAG|HAY|Aguachica|Hacaritama|CO|1|||SKCC:123
SKAL||La Loma|Calenturitas|CO|1|||SKVP:91
SKAM|AFI|Amalfi||CO|1|||SKRG:91
SKAP|API|Apiay|Gomez Nino Apiay Air Base|CO|2|||SKVV:12
SKAR|AXM|Armenia|El Eden|CO|3
SKAS|PUU|Puerto Asís|Tres De Mayo|CO|3
SKAT|ARQ|Arauquita|El Troncal|CO|1|||SKSA:52
SKBC|ELB|El Banco|Las Flores|CO|2|||SKCZ:147
SKBE||Becerril||CO|1|||SKVP:86
SKBG|BGA|Bucaramanga|Palonegro|CO|3
SKBM|NBB|Barranco Minas||CO|1|||SKPD:215
SKBN||Fonseca|Buenavista|CO|1|||SKVP:63
SKBO|BOG|Bogota|El Dorado|CO|4
SKBQ|BAQ|Barranquilla|Ernesto Cortissoz|CO|4
SKBR||Berástegui||CO|1|||SKMR:17
SKBS|BSC|Bahía Solano|José Celestino Mutis|CO|3
SKBU|BUN|Buenaventura|Gerardo Tobar López|CO|3
SKCA|CPB|Acandí|Capurganá|CO|1|||SKLC:115
SKCB||Carmen De Bolivar||CO|1|||SKCZ:43
SKCC|CUC|Cúcuta|Camilo Daza|CO|3
SKCD|COG|Condoto|Mandinga|CO|1|||SKUI:69
SKCE||Ibague|Cruz Verde|CO|1|||SKIB:1
SKCG|CTG|Cartagena|Rafael Nuñez|CO|4
SKCH||Cartagena Del Chiara|El Pacífico|CO|1|||SKFL:85
SKCI|CCO|Puerto López|Carimagua|CO|1|||SKYP:143
SKCL|CLO|Cali|Alfonso Bonilla Aragon|CO|4
SKCM|CIM|Cimitarra||CO|1|||SKEJ:75
SKCN|RAV|Cravo Norte||CO|1|||SKUC:102
SKCO|TCO|Tumaco|La Florida|CO|3
SKCP|BHF|Bahía Solano|Cupica|CO|1|||SKBS:56
SKCR|CUO|Carurú||CO|1|||SKMU:121
SKCU|CAQ|Caucasia|Juan H White|CO|2|||SKMR:117
SKCV|CVE|Coveñas||CO|2|||SKTL:17
SKCZ|CZU|Corozal|Las Brujas|CO|3
SKEB|EBG|El Bagre||CO|2|||SKEJ:128
SKEH|ECR|El Charco||CO|1|||SKGP:26
SKEJ|EJA|Barrancabermeja|Yariguíes|CO|3
SKFE||Frontino|Guillermo Gaviria Correa|CO|1|||SKMD:84
SKFL|FLA|Florencia|Gustavo Artunduaga Paredes|CO|3
SKFR||Quipama|Furatena|CO|1|||SKBO:92
SKFU|FDA|Fundación||CO|1|||SKSM:65
SKGA|LGT||La Gaviota|CO|1|||SKYP:183
SKGB||Cali|Marco Fidel Suarez Air Base|CO|1|||SKCL:16
SKGI|GIR|Girardot|Santiago Vila|CO|2|||SKIB:41
SKGO|CRC|Cartago|Santa Ana|CO|2|||SKPE:25
SKGP|GPI|Guapi||CO|3
SKGY||Chía|Guaymaral|CO|1|||SKBO:15
SKGZ||Garzón|La Jagua|CO|1|||SKFL:64
SKHA|CPL|Chaparral|General Navas Pardo|CO|1|||SKIB:86
SKHC|HTZ|Hato Corozal||CO|1|||SKTM:33
SKHZ|LCR|La Chorrera|Virgilio Barco Vargas|CO|2
SKIB|IBE|Ibagué|Perales|CO|3
SKIG|IGO|Chigorodó|Jaime Ortiz Betancourt|CO|1|||SKLC:15
SKIM|LPE|La Primavera||CO|1|||SKUC:180
SKIO||Limón|Cicuco|CO|1|||SKCZ:70
SKIP|IPI|Ipiales|San Luis|CO|3
SKIR||San Martin|Mapiripan|CO|1|||SKSJ:66
SKJC||Juanchaco||CO|1|||SKBU:43
SKJU|JUO|Juradó||CO|1|||MPPI:76
SKLA||Málaga|Málaga Regional|CO|1|||SKBG:69
SKLC|APO|Carepa|Antonio Roldán Betancur|CO|3
SKLG|LQM|Puerto Leguízamo|Caucaya|CO|2
SKLM|MCJ|La Mina-Maicao|Jorge Isaac|CO|2|||SKRH:58
SKLP|LPD|La Pedrera||CO|2
SKLT|LET|Leticia|Alfredo Vásquez Cobo|CO|3
SKMA||Madrid|Major Justino Mariño Cuesto Air Base|CO|1|||SKBO:15
SKMB|TBD|Timbiqui||CO|1|||SKGP:34
SKMD|EOH|Medellín|Enrique Olaya Herrera|CO|3
SKME||Melgar|Lieutenant Colonel Luis F. Pinto Parra Air Base|CO|1|||SKIB:60
SKMF|MFS|Miraflores||CO|1|||SKSJ:157
SKMG|MGN|Magangué|Baracoa|CO|2|||SKCZ:49
SKMJ||Maicao||CO|1|||SKRH:76
SKML|MTB|Montelíbano|Montelibano|CO|1|||SKMR:104
SKMN||Maní|Casanare|CO|1|||SKYP:56
SKMO|MSK|Puerto Gaitán|Morelia|CO|1|||SKSJ:185
SKMP|MMP|Santa Cruz de Mompóx|San Bernardo|CO|1|||SKCZ:93
SKMR|MTR|Montería|Los Garzones|CO|3
SKMU|MVP|Mitú|Fabio Alberto Leon Bentley|CO|3
SKMZ|MZL|Manizales|La Nubia|CO|3
SKNA|LMC|La Macarena||CO|2
SKNC|NCI|Necocli||CO|1|||SKLC:72
SKNQ|NQU|Nuquí|Reyes Murillo|CO|2
SKNV|NVA|Neiva|Benito Salas|CO|3
SKOC|OCV|Ocaña|Aguas Claras|CO|2|||SKCC:103
SKOE|ORC|Orocue||CO|1|||SKYP:129
SKOL||Puerto López||CO|1|||SKVV:71
SKOR||Orito||CO|1|||SKAS:46
SKOT|OTU|Remedios|Otu|CO|1|||SKEJ:100
SKPA|RON|Paipa|Juan Jose Rondon|CO|1|||SKYP:94
SKPB||Portete|Puerto Bolívar|CO|1|||SKRH:128
SKPC|PCR|Puerto Carreño|German Olano|CO|3
SKPD|PDA|Puerto Inírida|Obando Cesar Gaviria Trujillo|CO|3
SKPE|PEI|Pereira|Matecaña|CO|3
SKPG||Puerto Gaitan||CO|1|||SKYP:118
SKPI|PTX|Pitalito||CO|2|||SKFL:65
SKPL|PLT|Plato||CO|1|||SKCZ:76
SKPN|NAR|Armenia|Puerto Nare|CO|1|||SKRG:92
SKPP|PPN|Popayán|Guillermo León Valencia|CO|3
SKPQ|PAL|La Dorada|German Olano Air Base|CO|2|||SKMZ:103
SKPR|PBE|Puerto Berrio||CO|1|||SKEJ:92
SKPS|PSO|Chachagüí|Antonio Nariño|CO|3
SKPV|PVA|Providencia|El Embrujo|CO|3
SKPZ|PZA|Paz de Ariporo||CO|2|||SKTM:65
SKQU|MQU|Mariquita||CO|2|||SKMZ:67
SKRA|TCD|Tarapacá||CO|2
SKRG|MDE|Medellín|Jose Maria Córdova|CO|4
SKRH|RCH|Riohacha|Almirante Padilla|CO|3
SKRU|SNT|Sabana de Torres|Las Cruces|CO|1|||SKBG:45
SKSA|RVE|Saravena|Los Colonizadores|CO|2
SKSG||San Gil||CO|1|||SKBG:61
SKSI||Maní|Santiago I|CO|1|||SKYP:66
SKSJ|SJE|San José Del Guaviare|Jorge E. Gonzalez Torres|CO|3
SKSL|SSL|Santa Rosalia||CO|1|||SKYP:169
SKSM|SMR|Santa Marta|Simón Bolívar|CO|3
SKSO|SOX|Sogamoso|Alberto Lleras Camargo|CO|1|||SKYP:76
SKSP|ADZ|San Andrés|Gustavo Rojas Pinilla|CO|4
SKSR|SRS|San Marcos||CO|1|||SKCZ:73
SKSV|SVI|San Vicente Del Caguán|Eduardo Falla Solano|CO|3
SKTA|TAU|Tauramena||CO|1|||SKYP:52
SKTB|TIB|Tibú||CO|1|||SKCC:82
SKTD|TDA|Trinidad||CO|1|||SKYP:81
SKTI||Tolemaida - Nilo|Tolemaida Air Base|CO|1|||SKIB:57
SKTJ||Tunja||CO|2|||SKYP:109
SKTL|TLU|Santiago de Tolú|Golfo de Morrosquillo|CO|2
SKTM|TME|Tame|Gustavo Vargas|CO|3
SKTQ|TQS|Tres Esquinas|Captain Ernesto Esguerra Cubides Air Base|CO|2|||SKFL:101
SKUA||Marandúa|Marandúa Air Base|CO|2|||SKPC:151
SKUB|URI|La Uribe|Uribe|CO|1|||SKNV:110
SKUC|AUC|Arauca|Santiago Perez|CO|3
SKUI|UIB|Quibdó|El Caraño|CO|3
SKUL|ULQ|Tuluá|Heriberto Gíl Martínez|CO|2|||SKCL:63
SKUM||Cumaribo||CO|1|||SKPD:218
SKUR|URR|Urrao||CO|1|||SKMD:62
SKUV|GMC|Puerto Carreño|Guerima|CO|1|||SKMU:264
SKVG|VGZ|Villa Garzón||CO|1|||SKAS:54
SKVL|PYA|Puerto Boyacá|Velásquez|CO|1|||SKRG:110
SKVN||Villanueva||CO|1|||SKVV:90
SKVP|VUP|Valledupar|Alfonso López Pumarejo|CO|3
SKVV|VVC|Villavicencio|Vanguardia|CO|3
SKYA|AYG|San Vicente Del Caguán|Yaguara|CO|1|||SKNA:72
SKYG||Mitu|Yapu|CO|1|||SKMU:71
SKYP|EYP|Yopal|El Alcaravan - Yopal|CO|3
SLAG|MHW|El Bañado|Monteagudo|BO|1|||SLAL:140
SLAL|SRE|Sucre|Alcantarí|BO|4
SLAM||Gral. Ballivian|Arampampa|BO|1|||SLCB:52
SLAN||Ballivian|Angora|BO|1|||SLTR:101
SLAP|APB|Apolo||BO|1|||SLRQ:104
SLAQ||Campero|Aiquile|BO|1|||SLAL:115
SLAS|ASC|Ascensión de Guarayos|Ascención de Guarayos|BO|1|||SLVR:190
SLBA|BVL|Baures||BO|1|||SLTR:184
SLBB||Carrasco|Bulo Bulo|BO|1|||SLHI:88
SLBF||Madre De Dios|Blanca Flor|BO|1|||SLPR:97
SLBH||Ballivian|Buena Hora|BO|1|||SLRI:135
SLBJ|BJO|Bermejo||BO|2|||SLTJ:141
SLBN||Mamoré|Bella Unión|BO|1|||SLTR:138
SLBR||Itenes|Buen Retiro Itenez|BO|1|||SLTR:220
SLBS||Itenes|Bella Vista Itenez|BO|1|||SLTR:91
SLBT||Ballivian|Buen Retiro Ballivian|BO|1|||SLRQ:118
SLBV||De Montaño|Villa Vista Montano|BO|1|||SLRQ:138
SLCA|CAM|Camiri||BO|1|||SLAL:190
SLCB|CBB|Cochabamba|Jorge Wilsterman|BO|4
SLCC||Copacabana||BO|1|||SLLP:103
SLCD||Gutierrez|Cañada|BO|1|||SLAL:233
SLCE||Cordillera|Cabezas|BO|1|||SLET:110
SLCG||Cordillera|Charagua|BO|1|||SLAL:214
SLCH|||Carol Marghata|BO|1|||SLVR:87
SLCI||Gran Chaco|Caigua|BO|1|||SLTJ:109
SLCL||Abaroa|Collpani|BO|1|||SLOR:107
SLCM||Camacho||BO|1|||SLPR:47
SLCN||Charaña||BO|1|||SPTN:103
SLCO|CIJ|Cobija|Capitán Aníbal Arab|BO|3
SLCP|CEP|Concepción||BO|1|||SLVR:204
SLCR||M. Caballero|Comarapa|BO|1|||SLHI:124
SLCS||Nor Lipez|Cerdas|BO|1|||SLUY:63
SLCT||Mamore|Choreti|BO|1|||SLTR:145
SLCU||Sud Cinti|Culpina|BO|1|||SLTJ:85
SLCV||Ballivian|Cavinas|BO|1|||SLPR:175
SLCX||Iturralde|Chive|BO|1|||SPTU:76
SLCY||A. Ibañez|Collpa|BO|1|||SLVR:10
SLDA||Ichilo|Caranda|BO|1|||SLVR:45
SLDL|||Dalmacia|BO|1|||SLVR:97
SLDN||Yacuma|El Desengano|BO|1|||SLTR:83
SLEA||Yacuma|El Cocal|BO|1|||SLRQ:181
SLEC||Yacuma|El Cairo|BO|1|||SLRQ:138
SLEE||Tesoro|El Escondido|BO|1|||SLTJ:140
SLEF||Yacuma|El Triunfo|BO|1|||SLTR:138
SLEH||Mamore|El Rancho|BO|1|||SLTR:197
SLEI||Cordillera|Espino|BO|1|||SLET:166
SLEK||Tesoro|El Condor|BO|1|||SLTJ:130
SLEO||Yacuma|El Paraiso|BO|1|||SLTR:111
SLEP||Yacuma|El Peru|BO|1|||SLTR:81
SLER||Hernando Siles|Cerrillos|BO|1|||SLAL:145
SLES||Poopo|Estalsa|BO|1|||SLOR:57
SLET|SRZ|Santa Cruz|El Trompillo|BO|3
SLEV||Ballivian|El Salvador|BO|1|||SLRQ:79
SLEZ||Moxos|La Esperanza|BO|1|||SLTR:66
SLFA||Ballivian|Fatima|BO|1|||SLRQ:125
SLFL||Moira|Florida|BO|1|||SBVH:244
SLFO||Moxos|Flor De Oro|BO|1|||SBVH:137
SLFR||Moxos|Florencia|BO|1|||SLTR:119
SLGM|GYA|Guayaramerín||BO|3
SLGP||Cordillera|Guirapembi|BO|1|||SLET:27
SLGQ|||Chiquitos|BO|1|||SLET:275
SLGY||Guayaramerín|Capitán de Av. Emilio Beltrán|BO|1|||SLGM:8
SLHA||Itenes|Cachascani|BO|1|||SLTR:166
SLHC||H. Silez|Huacareta|BO|1|||SLTJ:148
SLHI|CCA|Chimore||BO|2
SLHJ|BVK|Itenes|Huacaraje|BO|1|||SLTR:175
SLHS||Parapeti|Chacobos|BO|1|||SLET:208
SLIG||Ballivian|Inglaterra|BO|1|||SLRQ:153
SLIN||Moxos|Santa Catalina|BO|1|||SLTR:131
SLIP||Florida|Samaipata|BO|1|||SLET:86
SLIR||Itenes|Ibori|BO|1|||SLTR:239
SLIT||Cordillera|Itaguazurenda|BO|1|||SLET:219
SLIX||Iturralde|Ixiamas|BO|1|||SLRQ:101
SLIY||La Joya|Intiraymi|BO|1|||SLOR:42
SLIZ||Cordillera|Izozog|BO|1|||SLET:96
SLJA||Madre De Dios|Jatata|BO|1|||SLPR:81
SLJE|SJS|San José de Chiquitos||BO|1|||SLVR:254
SLJO|SJB|San Joaquín||BO|1|||SLTR:197
SLJS||Yacuma|Josuani|BO|1|||SLRQ:207
SLJV|SJV|San Javier||BO|1|||SLVR:168
SLLB||Yacuma|Las Brizas|BO|1|||SLTR:97
SLLH||Itenes|Lago Huachi|BO|1|||SLTR:174
SLLI||Ballivian|La India|BO|1|||SLRQ:119
SLLJ||Los Andes|Laja|BO|1|||SLLP:12
SLLL||Ballivian|Laguna Loa|BO|1|||SLRQ:78
SLLP|LPB|La Paz / El Alto|El Alto|BO|4
SLLQ||L. Cabrera|Copaquilla|BO|1|||SLUY:125
SLLS||Caraparicito|Lagunillas|BO|1|||SLAL:162
SLLZ||Moxos|San Lorenzo|BO|1|||SLTR:109
SLMB||Velasco|Mangabalito|BO|1|||SLRQ:117
SLMD||Iturralde|Madidi|BO|1|||SPTU:106
SLME||Cordillera|Mandeyepecua|BO|1|||SLTJ:207
SLMG|MGD|Magdalena||BO|1|||SLTR:196
SLMM||Velasco|Mora|BO|1|||SBVH:243
SLMN||Manuripi||BO|1|||SLCO:91
SLMX||Valle Grande|Monos Araña|BO|1|||SLHI:111
SLMZ||Mizque||BO|1|||SLCB:102
SLNL||Chiquitos|Cañada Larga|BO|1|||SLVR:79
SLNO||Yacuma|Nuevo Mundo|BO|1|||SLTR:131
SLNV||Yacuma|Nieve|BO|1|||SLTR:130
SLOR|ORU|Oruro|Juan Mendoza|BO|4
SLPA||Guanacos|Palmar|BO|1|||SLET:131
SLPB||Entre Ríos|Palos Blancos|BO|1|Entre Ríos, O'Connor||SLTJ:99
SLPF||Velasco|Piso Firme|BO|1|||SBVH:206
SLPG||Moxos|Progreso|BO|1|||SLTR:87
SLPI||Moxos|Pitai|BO|1|||SLTR:133
SLPL||J. Mendoza|Padilla|BO|1|||SLAL:90
SLPM||Yacuma|Palmira|BO|1|||SLRQ:140
SLPN||Velasco|Porvenir Norte|BO|1|||SBVH:213
SLPO|POI|Potosí|Capitan Nicolas Rojas|BO|2|||SLAL:69
SLPR|PUR|Puerto Rico/Manuripi|Puerto Rico|BO|2
SLPS|PSZ|Puerto Suárez|Capitán Av. Salvador Ogaya G.|BO|3
SLPW||Luis Calvo|El Porvenir Sur|BO|1|||SLTJ:179
SLPY||Sanja Honda|Piray|BO|1|||SLET:58
SLQN||Ballivian|Coquinal|BO|1|||SLRQ:148
SLRA|SRD|San Ramón / Mamoré|San Ramón|BO|1|||SLTR:176
SLRB|RBO|Roboré||BO|1|||SLPS:217
SLRF||Velasco|Refugio|BO|1|||SBVH:251
SLRH||Yacuma|Rancho Alegre|BO|1|||SLRI:133
SLRI|RIB|Riberalta|Capitán Av. Selin Zeitun Lopez|BO|3
SLRL||Yacuma|Rosal|BO|1|||SLTR:121
SLRP||Carangas|Rosapata|BO|1|||SLOR:92
SLRQ|RBQ|Rurrenabaque||BO|2
SLRR||Yacuma|Retiro|BO|1|||SLRQ:124
SLRS||Campo Ingelmeco|Rio Seco|BO|1|||SLET:44
SLRT||Yacuma|Santa Rita|BO|1|||SLRQ:137
SLRX||German Busch|Rincon Del Tigre|BO|1|||SLPS:94
SLRY|REY|Reyes||BO|1|||SLRQ:21
SLSA|SBL|Santa Ana del Yacuma||BO|2|||SLTR:130
SLSB|SRJ|San Borja|Capitán Av. German Quiroga G.|BO|1|||SLRQ:95
SLSD||Yacuma|San Carlos Gutierrez|BO|1|||SLTR:72
SLSE||Angel Sandoval|Santa Teresita|BO|1|||SWTS:284
SLSF|||San Rafael|BO|1|||SLVR:97
SLSG||Yacuma|San Miguel De Gaser|BO|1|||SLRQ:156
SLSH||Sud Yungas|Santa Ana De Huachi|BO|1|||SLRQ:119
SLSI|SNG|San Ignacio de Velasco|Capitán Av. Juan Cochamanidis S.|BO|1|||SLVR:270
SLSJ||Ladislao Cabrera|Salinas|BO|1|||SLUY:116
SLSK||A. Ibañez|Santa Rosa Del Sara|BO|1|||SLVR:78
SLSM|SNM|San Ignacio de Moxos||BO|1|||SLTR:79
SLSN||Gran Chaco|Sanandita|BO|1|||SLTJ:114
SLSP||Gran Chaco|Sipuati|BO|1|||SLTJ:173
SLSQ||Santiago de Chiquitos||BO|1|||SLPS:201
SLSR|SRB|Santa Rosa|Santa Rosa de Yacuma|BO|1|||SLRQ:86
SLSS||Sunsas||BO|1|||SLPS:73
SLSU||Sucre|Juana Azurduy de Padilla Air Force Base|BO|2|||SLAL:30
SLSV||San Ignacio de Velasco||BO|2|||SLVR:262
SLTA||Cordillera|Taquipirenda|BO|1|||SLTJ:211
SLTC||Chiquitos|Tres Cruces|BO|1|||SLVR:96
SLTE||Larecaja|Teoponte|BO|1|||SLLP:119
SLTG||Moxos|Santiago|BO|1|||SLTR:73
SLTI|MQK|San Matías||BO|1|||SWTS:213
SLTJ|TJA|Tarija|Capitan Oriel Lea Plaza|BO|3
SLTL||Nor Lipez|San Cristóbal Toldos|BO|1|||SLUY:88
SLTO||Oruro|Totora|BO|1|||SLOR:109
SLTR|TDD|Trinidad|Teniente Av. Jorge Henrich Arauz|BO|3
SLTU||Sajama|Turco|BO|1|||SLOR:116
SLTW||San Rafael|Tita|BO|1|||SLET:134
SLTX||Franz Tamayo|Tuichi|BO|1|||SLRQ:118
SLTY||Yacuma|Tiguipa|BO|1|||SLRQ:153
SLTZ||Sud Chichas|Tupiza-Mochará|BO|1|||SLTJ:97
SLUC||Cordillera|Cuevo|BO|1|||SLTJ:171
SLUK||Oruro|Curahuara de Carangas|BO|1|||SLOR:139
SLUP||Puerto America||BO|1|||SLPR:85
SLUS||Ballivian|Urusi|BO|1|||SLRQ:144
SLUU||Franz Tamayo|Ulla Ulla|BO|1|||SPJL:109
SLUY|UYU|Quijarro|Joya Andina|BO|4
SLVA||Aroma|Villa Aroma|BO|1|||SLOR:101
SLVD||Sud Yungas|Covendo|BO|1|||SLLP:140
SLVE||Yacuma|Venecia|BO|1|||SLRQ:84
SLVG|VAH|Vallegrande|Capitán Av. Vidal Villagomez Toledo|BO|1|||SLET:123
SLVI||Nor Yungas|Caranavi|BO|1|||SLLP:108
SLVM|VLM|Villamontes|Teniente Coronel Rafael Pabón|BO|2|||SLTJ:138
SLVN||Yacuma|Villa Negrita|BO|1|||SLTR:201
SLVR|VVI|Santa Cruz|Viru Viru|BO|4
SLVT||Tesoro|Tesoro/La Vertiente|BO|1|||SLTJ:143
SLVU||Luis Calvo|Vuelta Grande|BO|1|||SLTJ:172
SLVV||Mamore|Villa Elvira|BO|1|||SLTR:140
SLVZ||M.Omiste|Villazon|BO|1|||SLTJ:112
SLYA|BYC|Yacuíba|Yacuiba|BO|2|||SLTJ:117
SLYG||Las Juntas|Yabog|BO|1|||SLET:94
SLYI||Ichilo|Yapacani|BO|1|||SLHI:116
SLZB||Moxos|San Pedro Rb|BO|1|||SLTR:79
SLZC||Ichilo|San Carlos|BO|1|||SLVR:62
SLZF||Nacif|San Francisco Naciff|BO|1|||SLTR:129
SLZJ||Itenes|San Pedro Richard|BO|1|||SLTR:152
SLZV||Velasco|San Vicente|BO|1
SMAF||Afobakka|Afobakka Airstrip|SR|1|||SMJP:55
SMAM||Amatopo|Amatopo Airstrip|SR|1|||SYLT:240
SMAN||Benzdorp|Lawa Antino Airstrip|SR|1|||SOOA:12
SMBG||Bakhuys|Bakhuys Airstrip|SR|1|||SMWA:119
SMBN|ABN|Albina||SR|1|||SOOM:4
SMBO|BTO|Botopasi||SR|1|||SMDA:87
SMCA|AAJ|Awaradam|Cayana Airstrip|SR|1|||SMDA:103
SMCB||Cabana|Cabana Airstrip|SR|1|||SMJP:80
SMCI||Coeroeni||SR|1|||SYLT:271
SMCO|TOT|Totness||SR|1|||SMWA:38
SMCT||Lawa Cottica|Cottica Airstrip|SR|1|||SOOA:30
SMDA|DRJ|Drietabbetje||SR|2
SMDJ|DOE|Djumu-Djomoe||SR|1|||SMDA:90
SMDK||Donderskamp|Donderskamp Airstrip|SR|1|||SMWA:64
SMDO|LDO|Aurora|Ladouanie|SR|1|||SMDA:87
SMDU||Alalapadi|Alalapadu Airstrip|SR|1|||SMDA:255
SMEG|EAX|Kwatta|Eduard Alexander Gummels|SR|2
SMGA||Gakaba|Gakaba Airstrip|SR|1|||SMDA:46
SMGH||Pikienkondre of Miranda|Godo Holo Airstrip|SR|2
SMGR|||Gross Rosebel Airstrip|SR|1|||SMJP:41
SMHA||Antongron|Henri Alwies Airstrip|SR|1|||SMZO:49
SMJA||Jarikaba|Jarikaba Airstrip|SR|1|||SMZO:16
SMJK||Nieuw Jacobkondre|Nieuw Jacobkondre Airstrip|SR|1|||SMJP:69
SMJP|PBM|Paramaribo|Johan Adolf Pengel|SR|4
SMKA||Kabalebo||SR|1|||SMWA:171
SMKE||Kayserberg|Kayser|SR|1|||SMDA:230
SMLA||Anapaike|Lawa Anapaike Airstrip|SR|1|||SOOA:27
SMLI||Lelygebergte|Lelygebergte Airstrip|SR|1|||SMDA:19
SMLT||Langatabbetje|Langatabbetje Airstrip|SR|1|||SMMO:68
SMMO|MOJ|Moengo|Moengo Airstrip|SR|2
SMNI|ICK|Nieuw Nickerie|Nieuw Nickerie - Major Henk Fernandes|SR|1|||SMWA:43
SMOL|||Oelemari|SR|1|||SOOA:83
SMPA|OEM|Paloemeu|Vincent Fayks|SR|1|||SMDA:121
SMPE||Poeketi|Poeketi Airstrip|SR|1|||SMDA:6
SMPG||Poesoegroenoe|Poesoegroenoe Airstrip|SR|1|Pusugrunu||SMDA:128
SMPT||Apetina|Apetina Airstrip|SR|1|||SMDA:80
SMRA||Ralleigh|Ralleigh Airstrip|SR|1|||SMWA:135
SMRN||Ragoebarsing|Ragoebarsing Airstrip|SR|1|||SMWA:110
SMSI||Sipaliwini||SR|1|||SMDA:282
SMSK||Sarakreek|Sarakreek Airstrip|SR|1|||SMDA:40
SMSM||Kwamalasoemoetoe Airport|Kwamalasoemoetoe|SR|1
SMST|SMZ|Stoelmanseiland||SR|1|||SMDA:39
SMTA||Benzdorp|Tabiki Airstrip|SR|1|||SOOA:6
SMTB||Tafelberg|Rudi Kappel|SR|1|||SMDA:168
SMTP|KCB|Kasikasima|Tepoe Airstrip|SR|1|||SMDA:158
SMVG||Vier Gebroeders|Vier Gebroeders Airstrip|SR|1|||SMDA:277
SMVO||Avanavero|Avanavero Airstrip|SR|1|||SMWA:132
SMWA|AGI|Wageningen|Wageningen Airstrip|SR|2
SMWS|WSO|Washabo||SR|1|||SMWA:90
SMZO|ORG|Paramaribo|Zorg en Hoop|SR|2
SNAB|JAW|Araripina||BR|1|||SBJU:145
SNAC||Xinguara|Fazenda Santa Rosa|BR|1|||SBCJ:102
SNAD||Gurupi|Fazenda Águia Branca|BR|1|||SNEB:69
SNAE||Arcoverde||BR|1|||SNRU:119
SNAF||Penápolis|Fazenda Aparecida|BR|1||SJCO|SBAU:52
SNAG||Araguari||BR|1|||SBUL:24
SNAH||Duque de Caxias|Fazenda Piloto Padrão KKS37/3 Airstrip|BR|1|||SBGL:23
SNAI||Jateí|Fazenda Nossa Senhora das Graças|BR|1|||SSUM:128
SNAJ||Paragominas|Fazenda Jaguaré|BR|1|||SNEB:121
SNAL|APQ|Arapiraca||BR|1|||SBMO:96
SNAN||Chiapeta|Empresa Agrícola Chiapeta|BR|1|||SBNM:37
SNAO||Casimiro de Abreu|Trimonte Jorge Mussi|BR|1|||SBCB:45
SNAP||Janaúba||BR|1|||SBMK:121
SNAR|AMJ|Almenara|Cirilo Queiróz|BR|1|||SBVC:142
SNAS||Três Marias||BR|1|||SBCF:203
SNAV||Juazeiro|Agrovale|BR|1|||SBPL:27
SNAX|AIF|Assis|Marcelo Pires Halzhausen|BR|1||SBAS|SBML:73
SNAY||Pontes e Lacerda|Fazenda São João|BR|1|||SWTS:215
SNBA|BAT|Barretos|Chafei Amsei|BR|2||SBBT|SBSR:88
SNBC|BDC|Barra do Corda||BR|1|||SBIZ:248
SNBE||Novo Horizonte do Sul|Fazenda Bela Vista|BR|1|||SSUM:134
SNBF||Canarana|Fazenda Vale Verde|BR|1
SNBG||Baixo Guandu|Baixo Guandu - Aimorés|BR|1|||SBVT:116
SNBI||Bacabal||BR|1|||SBSL:194
SNBJ||Brasnorte|Fazenda São Gotardo Airstrip|BR|1|||SWTS:184
SNBL||Unaí|Fazenda Agropecuária Camargos Airstrip|BR|1|||SNZR:78
SNBM||Muriaé|Cristiano Ferreira Varella|BR|1|||SBZM:91
SNBN||Portel|Balbinot|BR|1|||SBTU:133
SNBR|BRA|Barreiras|Dom Ricardo Weberberger|BR|2
SNBS|BSS|Balsas||BR|1|||SWGN:243
SNBT||Benedito Leite||BR|1
SNBW||Sapezal|Fazenda Santa Luzia|BR|1|||SBVH:175
SNBX|BQQ|Barra||BR|1|||SNBR:231
SNBZ||Paramirim||BR|1|||SBLE:152
SNCA||Campo Belo||BR|1|||SBCF:200
SNCB||Prainha|Castanhal|BR|1|||SBSN:95
SNCC||Cabixi|Fazenda Centrino|BR|1|||SBVH:124
SNCE||Campo Do Meio||BR|1|||SBRP:204
SNCF||Verdelândia|Colonial|BR|1|||SBMK:147
SNCG||Campo Grande|Fazenda Cedro|BR|1|||SBCG:40
SNCI||Capanema|Cibrasa|BR|1|||SNSM:61
SNCJ||Santarém|Piquiatuba|BR|1|||SBSN:16
SNCK||Januária|Porto Cajueiro|BR|1|||SBMK:260
SNCL|MXQ|Cairu|Lorenzo|BR|1|||SNVB:14
SNCM||Cáceres|Fazenda Camparino|BR|1|||SWTS:203
SNCO||Tacuru|Agropecuária Santa Paola|BR|1|||SSGY:109
SNCP|EEA|Correia Pinto|Planalto Serrano Regional|BR|2|||SBLJ:18
SNCQ||Santa Izabel do Oeste|Dal Molin|BR|1|||SSFB:53
SNCS||Campos Sales||BR|1|||SBJU:122
SNCT||Caratinga|Ubaporanga|BR|1|||SBIP:48
SNCV||Campina Verde||BR|1|||SBSR:141
SNCW||Alcântara|Alcântara Space Center|BR|1|||SBSL:30
SNCX|QCH|Colatina||BR|1|||SBVT:91
SNCY||Coruripe|Campo da Praia|BR|1|||SBMO:96
SNCZ||Ponte Nova||BR|1|||SBIP:113
SNDA||Figueirópolis d'Oeste|Fazenda Vale Formoso Airstrip|BR|1|||SWTS:152
SNDB||Juatuba|Palácio dos Leilões Heliport|BR|1|||SBCF:55
SNDC|RDC|Redenção||BR|1|||SWGN:211
SNDD||Elias Fausto|Condomínio Aeronáutico Santos Dumont|BR|1|||SBKP:20
SNDF||Itaúna do Sul|Fecularia Lopes|BR|1|||SBMG:118
SNDH||Barreiras|Aba|BR|1|||SNBR:10
SNDI||Naviraí|Fazenda Dois Irmãos|BR|1|||SSUM:143
SNDJ||Borba|Pousada Sucunduri Airstrip|BR|1|||SWBR:132
SNDP||São Félix do Araguaia|Derso Portilho Vieira|BR|1
SNDQ||São Desidério|Fazenda Soya|BR|1|||SNBR:112
SNDR||Timon|Domingos Rego|BR|1|||SBTE:6
SNDS||Ilha Solteira|Fazenda São Martinho|BR|1||SNSX|SBTG:62
SNDT|DTI|Diamantina||BR|1|||SBCF:160
SNDU||Capitólio|Ponta Do Sol|BR|1|||SBAX:156
SNDV|DIQ|Divinópolis|Brigadeiro Cabral|BR|1|||SBCF:112
SNDX||Coruripe|Cachoeira|BR|1|||SBMO:83
SNDZ||Nova Xavantina|NX GOLD|BR|1
SNEA||Alegrete|Estância Primavera Airstrip|BR|1|||SURV:102
SNEB|JPE|Paragominas|Nagib Demachki|BR|2
SNEC||Porto Seguro|Outeiros da Brisas|BR|1|||SBPS:31
SNED|CNV|Canavieiras|Sócrates Rezende|BR|1|||SBTC:35
SNEE|VCC|Vacaria||BR|1|||SBCX:87
SNEG||Tangará da Serra|Fazenda Netolândia|BR|1|||SWTS:48
SNEI||Rio Pardo|Fazenda São Miguel|BR|1|||SBPA:98
SNEJ||Itaituba|J.C. Peralta Airstrip|BR|1|||SBIH:13
SNEK||São Desidério|Fazenda Acalanto|BR|1||SJAX|SNBR:143
SNEL||Caarapó|Fazenda Joá|BR|1|||SBPP:76
SNEN||Passagem Franca do Piauí|Fazenda Calubra Airstrip|BR|1|||SBTE:111
SNES||Santo Antônio do Leverger|Fazenda Saltos do Poente|BR|1|||SBRD:60
SNET||Sidrolândia|Fazenda Estrela|BR|1|||SBCG:106
SNEU||Euclides Da Cunha||BR|1|||SBUF:152
SNEW||Carneirinho|Fazenda Congonhas|BR|1|||SBTG:143
SNEY||Porto Esperdião|Aquapey|BR|1|||SWTS:190
SNEZ||Novo Brasil|Fazenda Palmeira do Capim|BR|1|||SBGO:176
SNFB||Itaguari|Fazenda Cachoeira do Bambuzal|BR|1|||SBGO:92
SNFC||Tucuruí|Marina do Caraipé|BR|1|||SBTU:10
SNFE||Alfenas|Comandante Paschoal Patrocínio Filho|BR|1|||SBRP:194
SNFF||Fortaleza|Feijó|BR|1|||SBFZ:10
SNFG||Itaituba|Pista Fogoió|BR|1|||SBIH:209
SNFH||Chupinguaia|Usina César Filho|BR|1|||SSKW:90
SNFI||Tupaciguara|Fazenda São José do Parnaíba|BR|1|||SBCN:78
SNFJ||Jacareacanga|Pousada Thaimaçu|BR|1|||SBAT:104
SNFL||Cabo Frio|Fly Lagos|BR|1|||SBCB:23
SNFM||Colniza|Fazenda Mourão|BR|1|||SBJI:214
SNFN||Jardinópolis|Fazenda Santa Fé|BR|1|||SBRP:24
SNFO||Formiga||BR|1|||SBCF:180
SNFP||Sorriso|Fazenda Pirapó|BR|1|||SBSO:35
SNFQ||Nova Marilândia|Fazenda Bandeirantes|BR|1|||SWTS:64
SNFR||Novo Aripuanã|Presidente Roosevelt|BR|1|||SBMY:229
SNFS||Formosa do Rio Preto|Fazenda Barcelona V|BR|1|||SNBR:123
SNFT||União do Sul|Fazenda Toca da Onça|BR|1|||SBSI:127
SNFU||Frutal||BR|1|||SBSR:102
SNFV||Santa Fé de Goiás|Serra da Pintura|BR|1|||SBGO:243
SNFW||Rio Verde Do Mato Grosso|Fazenda Giruá|BR|1||SIIM|SBCG:186
SNFX|SXX|São Félix do Xingu||BR|1|||SBCJ:223
SNFY||Florianópolis|Fly Park Florianópolis|BR|1|||SBFL:24
SNFZ||Bocaíuva|Fazenda Villa Terezinha|BR|1|||SBMK:79
SNGA|GUZ|Guarapari||BR|2
SNGD|GDP|Guadalupe||BR|1|||SBTE:209
SNGG||Bom Jesus Do Gurguéia||BR|1
SNGH||Figueirão|Fazenda Esparrame|BR|1|||SBCG:211
SNGI|GNM|Guanambi||BR|1|||SBVC:212
SNGJ||Marabá|Fazenda Padre Cícero|BR|1|||SBMA:46
SNGK||Monte Alegre De Minas|Fazenda Bela Vista|BR|1|||SBUL:81
SNGM||São Félix do Xingu|Fazenda Epemaju Airstrip|BR|1|||SBCJ:123
SNGN|QGP|Garanhuns||BR|1|||SNRU:79
SNGO||Montes Claros de Goiás||BR|1|||SBGO:259
SNGP||Tupaciguara|Fazenda Santa Maria|BR|1|||SBUL:75
SNGQ||Bom Despacho||BR|1|||SBCF:137
SNGR||Gorotire||BR|1|||SBCJ:223
SNGS||Maceió|Aeroclube de Alagoas|BR|1|||SBMO:9
SNGT||Gentio De Ouro||BR|1|||SBLE:178
SNGV||Querência|Fazenda Tanguru|BR|1
SNGW||Barra do Choça|Fazenda Santo Angelo|BR|1|||SBVC:30
SNGX||Guaxupé||BR|1|||SBRP:110
SNGY||Castanhal|Salles|BR|1|||SBBE:60
SNHD||Uberlândia|Fazenda Floresta do Lobo|BR|1|||SBUL:24
SNHE||Formoso do Araguaia|Fazenda Canuanã|BR|1|||SBPJ:252
SNHG||Sandolândia|Fazenda Varjadão|BR|1|||SBPJ:266
SNHJ||José Bonifácio|Usina de José Bonifácio|BR|1|||SBAU:53
SNHK||Nioaque|Fazenda Caacupê|BR|1|||SBDB:65
SNHP||Santa Rita do Pardo|Fazenda São Judas Tadeu|BR|1|||SBTG:161
SNHR||Luziânia|Aero Roça|BR|1|||SBBR:75
SNHS|SET|Serra Talhada|Santa Magalhães|BR|2
SNHU||Itinga Do Maranhão|FazendaBola Sete|BR|1|||SBIZ:107
SNHW||Santa Luzia|Fazenda Agro-Maratá|BR|1|||SNEB:189
SNHX||Aquidauana|Fazenda Central Airstrip|BR|1|||SBCR:162
SNIB||Itaberaba||BR|1|||SBLE:109
SNIC|IRE|Irecê||BR|1|||SBLE:141
SNIE||Caetité||BR|1|||SBVC:197
SNIF||Itaituba|Fazenda Serra Dourada|BR|1|||SBIH:171
SNIG|QIG|Iguatu||BR|1|||SJZA:96
SNIH||Aquidauana|Fazenda Rio Negro|BR|1|||SBCR:162
SNII||Corumbá|Fazenda Joazeiro Airstrip|BR|1|||SBCR:183
SNIJ||Birigui|Joca Viol|BR|1|||SBAU:16
SNIK||Peixoto de Azevedo|Kapoto|BR|1
SNIN||Pântano Grande|Nova Era|BR|1|||SBPA:125
SNIO||Cipó||BR|1|||SBAR:155
SNIP|QIT|Itapetinga||BR|1|||SBVC:78
SNIR||Parnarama|Fazenda Mata Escura|BR|1|||SBTE:115
SNIS||Caxias|Fazenda Rio Largo|BR|1|||SBTE:87
SNIT||Ibotirama||BR|1|||SNBR:195
SNIU|IPU|Ipiaú||BR|1|||SBIL:100
SNIV||Ipiaçu|Fazenda Jumari|BR|1|||SBCN:170
SNIW||Maracaju|Fazenda Carmelo|BR|1|||SBDB:119
SNIX||Campos De Júlio|Fazenda Masutti|BR|1|||SBVH:144
SNIY||Planalto da Serra|Fazenda Fartura|BR|1|||SBCY:189
SNIZ||Vilhena|Fazenda Jaqueline|BR|1|||SBVH:21
SNJA||Capivari do Sul|Capivari|BR|1|||SBPA:65
SNJB|JCM|Jacobina||BR|1|||SBLE:166
SNJC||Umirim|Cialne Umirim|BR|1|||SBFZ:98
SNJD||Chapadão do Céu|Fazenda Jardim|BR|1|||SBTG:278
SNJE||Gonçalves Dias|Fazenda Fresadora|BR|1|||SBTE:136
SNJF||Sitio do Mato|Rural Verde|BR|1|||SNBR:174
SNJH||Correntina|JH Sementes|BR|1|||SNBR:225
SNJI||Jequitaí|Fazenda Fortaleza de Santa Terezinha|BR|1|||SBMK:103
SNJJ||Dois Irmãos Do Buriti|Fazenda Vô Anízio|BR|1|||SBCG:78
SNJK|JEQ|Jequié||BR|1|||SNVB:133
SNJL||Luís Eduardo Magalhães|J Lem|BR|1|||SNBR:83
SNJM|JMA|Manhuaçu|Aeroporto Elias Breder|BR|1|||SBIP:93
SNJN|JNA|Januária||BR|1|||SBMK:150
SNJP||João Pinheiro||BR|1|||SNZR:101
SNJQ||Jequitinhonha||BR|1|||SBVC:171
SNJR|JDR|São João Del Rei|Prefeito Octávio de Almeida Neves|BR|1|||SBJF:117
SNJU||São José do Xingu|Nossa Senhora da Penha|BR|1
SNJV||São João Da Ponte|Fazenda Santa Mônica|BR|1|||SBMK:79
SNKB||Campina Grande|Aeroclube|BR|1|||SBKG:15
SNKC||Cocos||BR|1|||SNBR:238
SNKD||Conceição Do Mato Dentro||BR|1|||SBCF:88
SNKE||Morada Nova de Minas|Fazenda São Francisco Airstrip|BR|1|||SBCF:184
SNKF||Conselheiro Lafaiete|Das Bandeirinhas|BR|1|||SBZM:108
SNKH||Creputiá||BR|1|||SBAT:224
SNKI|CDI|Cachoeiro do Itapemirim|Cachoeiro do Itapemirim - Raimundo de Andrade|BR|1|||SNGA:75
SNKJ||Cumaru do Norte|Fazenda Rio Dourado|BR|1|||SBCJ:293
SNKN|QCP|Currais Novos||BR|1|||SBKG:131
SNKO||Brotas de Macaúbas||BR|1|||SBLE:157
SNKP||Mirante do Paranapanema|Conquista do Pontal|BR|1|||SBDN:74
SNKQ||Porto Murtinho|Fazenda Quebraxo|BR|1|||SBDB:126
SNKR||Corrente||BR|1|||SNBR:181
SNKS||Santa Rita de Cássia||BR|1|||SNBR:133
SNKT||Naviraí|Fazenda Viçosa|BR|1|||SSUM:91
SNKU||Canudos||BR|1|||SBUF:102
SNKV||Tartarugalzinho|Fazenda Campo Verde|BR|1|||SBMQ:126
SNKX||Corumbá|Fazenda Santa Rosália|BR|1|||SBCR:80
SNKY||Paragominas|Fazenda Cikel|BR|1|||SBTU:101
SNKZ||Vila Bela da Santíssima Trindade|Fazenda São Marcos|BR|1|||SWTS:283
SNLA||Canaã Dos Carajás|Fazenda Lagoa das Antas|BR|1|||SBCJ:59
SNLB||Lábrea|Fazenda Magdalena Airstrip|BR|1|||SLGM:191
SNLC||Buritis|Fazenda Panambi Airstrip|BR|1|||SBBR:156
SNLD||Carneirinho|Fazenda São Luíz do Matão|BR|1|||SBAU:143
SNLE||Miranda|Estância Mil|BR|1|||SBDB:135
SNLF||Vila Rica|Fazenda Três Flechas|BR|1
SNLG||Jaboticatubas|Serra do Cipó|BR|1|||SBCF:35
SNLI||Abaeté||BR|1|||SBAX:160
SNLJ||Corumbá|Fazenda Campo Aliancinha Airstrip|BR|1|||SBCR:160
SNLK||Saquarema|Skydive Litoral|BR|1|||SBCB:50
SNLL||Montividiu|Condomínio Liberty|BR|1|||SBGO:30
SNLM||Apuí|Pousada Pirá-Açu Airstrip|BR|1|||SBMY:239
SNLN|LHN|Linhares|Linhares Municipal|BR|2|||SBVT:103
SNLO|SSO|São Lourenço||BR|1|||SBSJ:152
SNLQ||Nova Crixás|Fazenda Conforto|BR|1
SNLT||Paulistana||BR|1|||SBPL:148
SNLV||Porto União|Maria Magalhães|BR|1|||SSUV:6
SNLY||Lagoa Da Prata||BR|1|||SBAX:157
SNLZ||Divinópolis Do Tocantins|Fazenda Boca da Mata|BR|1|||SBPJ:166
SNMA|MTE|Monte Alegre||BR|1|||SBSN:93
SNMB||Corumbá|Fazenda Santa Maria|BR|1|||SBCR:115
SNMC||Macaúbas||BR|1|||SBLE:163
SNMD||Itaituba|Mundico Coelho|BR|1
SNME||Mata De São João|Costa dos Coqueiros|BR|1|||SBSV:57
SNMF||Monte Belo|Agropastoril Monte Alegre|BR|1|||SBRP:160
SNMH||Pirenópolis|Pirenopolis Centeral|BR|1|||SBGO:91
SNMI||Jaguarari|Mina Caraíba|BR|1|||SBPL:91
SNMJ||Maracás||BR|1|||SBLE:140
SNMK||Jaíba|Mocambinho|BR|1|||SBMK:180
SNML||Rio Largo|Manduca Leão|BR|1|||SBMO:5
SNMM||Ipirá|Fazenda Caraíbas Airstrip|BR|1|||SBLE:131
SNMN||Minas Novas||BR|1|||SBMK:150
SNMP||Paracatu|Fazenda Marocopa|BR|1|||SNZR:37
SNMR||Maraú||BR|1|||SBIL:75
SNMS||Pracuúba|Acácio Favacho|BR|1|||SBMQ:171
SNMU|MVS|Mucuri||BR|1|||SBPS:197
SNMV||Alcinópolis|Fazenda Flávia|BR|1|||SBRD:222
SNMW||Corrente|Fazenda Parceiro|BR|1|||SNBR:176
SNMX|SBJ|São Mateus|São Mateus - Ernesto Bonomo|BR|1|||SBVT:177
SNMZ|PTQ|Porto de Moz||BR|1|||SNYA:48
SNNB||Paracatu|Fazenda Cana Brava|BR|1|||SNZR:62
SNNC||Corumbá|Namocoli|BR|1|||SBDB:135
SNNE||São João Nepomuceno||BR|1|||SBZM:16
SNNF||Jaraguari|Fazenda Nossa Senhora de Fátima|BR|1|||SBCG:35
SNNK||Campo Grande|Fazenda Santa Bernadette da Volta Grande Airstrip|BR|1|||SBCG:123
SNNL||Nova Maringá|Fazenda Locks|BR|1|||SBSO:162
SNNM||Guarapuava|Entre Rios|BR|1|||SSUV:85
SNNN||Arinos|Fazenda Buriti II|BR|1|||SNZR:168
SNNO||Comodoro|Fazenda São Domingos|BR|1|||SBVH:154
SNNP||Nilo Peçanha||BR|1
SNNQ||Paranatinga|Fazenda Mina de Ouro|BR|1|||SBSO:241
SNNR||Naviraí|Fazenda Nossa Senhora Medianeira|BR|1|||SSUM:119
SNNU|NNU|Nanuque||BR|1|||SBPS:203
SNNV||Joinville|Vila Nova|BR|1|||SBJV:16
SNNW||Flores De Goiás|Fazenda Regalito|BR|1||SILM|SBBR:192
SNNX||Barra do Quaraí|Cabanha Umbú|BR|1|||SBUG:31
SNNY||Pimenteiras do Oeste|Fazenda Tapyratynga|BR|1|||SSKW:136
SNOA||Balsas|Fazenda Irajá|BR|1|||SWGN:239
SNOE||Oeiras||BR|1|||SBTE:230
SNOF||Ouro Fino||BR|1|||SBKP:110
SNOG||Ceará-Mirim|Ceará Mirim|BR|1|||SBSG:13
SNOH||Barra do Garças|Fazenda Tundavala|BR|1||SWDJ
SNOI||Tupã|Estancia Irmãos Martins|BR|1|||SBML:62
SNOJ||Formosa do Rio Preto|Fazenda Paz|BR|1|||SNBR:184
SNOK||Aurora do Pará|Fazenda Chão de Estrelas|BR|1|||SNEB:85
SNOL||Alta Floresta|Agropecuária Mariana|BR|1|||SBAT:17
SNOM||Vila Bela da Santíssima Trindade|Fazenda Guaporeí|BR|1|||SBVH:257
SNON||Montividiu|André Textor|BR|1|||SBGO:223
SNOP||Rodolândia|Vale da Providência|BR|1|||SBJI:57
SNOR||Sidrolândia|Fazenda Recanto|BR|1|||SBCG:76
SNOS|PSW|Passos|José Figueiredo Municipal|BR|1|||SBRP:124
SNOT||Uberaba|Usina Vale do Tijuco|BR|1|||SBUR:53
SNOU|FEJ|Feijó||BR|1|||SBCZ:274
SNOV||Coruripe|Povoado de Camaçari|BR|1|||SBMO:87
SNOW||Rancharia|Fazenda Turmalina|BR|1|||SBDN:51
SNOX|ORX|Oriximiná||BR|1|||SBTB:67
SNOZ||Paço Do Lumiar|Coronel Alexandre Raposo|BR|1|||SBSL:15
SNPA||Pará de Minas||BR|1|||SBCF:70
SNPC|PCS|Picos||BR|1|||SBJU:250
SNPD|POJ|Patos de Minas||BR|1|||SBAX:111
SNPF||Porangatu|Fazenda Retiro da Matão|BR|1|||SBBR:290
SNPG||Corumbá|Fazenda Uval|BR|1|||SBCY:188
SNPI||Piatã|De Piatã|BR|1|||SBLE:93
SNPJ||Patrocínio||BR|1|||SBAX:73
SNPL||Santa Mercedes|Fazenda Pacuruxu|BR|1|||SBTG:56
SNPN||Lavínia|Fazenda Água Fria|BR|1|||SBAU:53
SNPO||Pompeu||BR|1|||SBCF:121
SNPQ||Pesqueira||BR|1|||SNRU:69
SNPS||Nova Andradina|Fazenda Seriema Airstrip|BR|1|||SSUM:194
SNPT||Conceição das Alagoas|Fazenda Paraíso|BR|1|||SBUR:66
SNPU||Paraguaçu||BR|1|||SBSJ:186
SNPW||Alto Taquari|Fazenda Palmeira|BR|1|||SBRD:219
SNPX|PIV|Pirapora||BR|1|||SBMK:130
SNPY||São Sebastião Do Paraíso||BR|1|||SBRP:85
SNPZ||Pedra Azul||BR|1|||SBVC:132
SNQA||Paragominas|Fazenda Tracajá|BR|1|||SNEB:74
SNQB||Sorriso|Fermap|BR|1|||SBSO:10
SNQD||Sousa||BR|1|||SJZA:44
SNQE||Parauapebas|Fazenda Serra Grande|BR|1|||SBCJ:19
SNQF||Inocência|Fazenda Paraíso Airstrip|BR|1|||SBTG:105
SNQG|FLB|Floriano|Cangapara|BR|1|||SBTE:201
SNQJ||Divinópolis|Fazenda Aerovilas|BR|1|||SBCF:111
SNQM||Queimadas||BR|1|||SBPL:208
SNQN||Canarana|Fazenda Estrela|BR|1
SNQO||Corumbá|Fazenda Carvalho|BR|1|||SBCR:204
SNQP||Magda|Fazenda São Francisco|BR|1|||SBAU:67
SNQQ||lores de Goiás|Centroar|BR|1|||SBBR:180
SNQR||Poconé|Fazenda Bahia - Don Bosco|BR|1|||SBCY:169
SNQS||Ivinhema|Fazenda Nossa Senhora Auxiliadora|BR|1|||SBPP:174
SNQT||Umuarama|Fazenda Estrela do Sul|BR|1|||SSUM:17
SNQU|CHD|Mucugê||BR|1|||SBLE:64
SNQV||Curvelo||BR|1|||SBCF:111
SNQW||Jacareacanga|Cururu|BR|1
SNQX||Quixadá||BR|2|||SBFZ:143
SNQZ||Caarapó|Fazenda Taquarussu|BR|1|||SBPP:72
SNRA||Niquelândia|Nossa Senhora da Abadia|BR|1|||SBBR:153
SNRB||Rosário do Sul|Fazenda Brasa Airstrip|BR|1|||SURV:83
SNRC||Alcinópolis|Fazenda Recanto|BR|1|||SBRD:176
SNRD|PDF|Prado||BR|1|||SBPS:98
SNRH||Envira|João Fonseca|BR|1
SNRJ|JRT|Juruti||BR|1|||SBTB:85
SNRK||Campo Alegre de Goiás|Fazenda Soledade|BR|1|||SNZR:71
SNRM||Remanso||BR|1|||SBPL:171
SNRN||Getulina|Fazenda Vinte de Maio|BR|1|||SBML:43
SNRO||Querência|Fazenda Liberdade|BR|1
SNRP||Rio Paranaíba||BR|1|||SBAX:85
SNRQ||Jacareacanga|Porto Rico|BR|1|||SBIH:257
SNRS||Cocalinho|Fazenda Canoeiro|BR|1
SNRU|CAU|Caruaru||BR|2
SNRV||Sapucaia|Fazenda Rio Vermelho|BR|1|||SBCJ:104
SNRX||Riachão||BR|1|||SWGN:178
SNRZ||Oliveira||BR|1|||SBCF:152
SNSA||Unaí|Hilário Grandi|BR|1|||SNZR:84
SNSC||Sacramento||BR|1|||SBUR:59
SNSE||Sento Sé||BR|1|||SBPL:148
SNSF||Fartura|Fazenda São Francisco|BR|1||SDFN|SBML:147
SNSG||Salgueiro||BR|1|||SNHS:89
SNSH||Santarém|São José|BR|1|||SBSN:18
SNSI||Santa Maria Do Suaçuí||BR|1|||SBGV:93
SNSJ||Sapezal|Fazenda Fogliatelli|BR|1|||SWTS:175
SNSK||Herculândia|Central Ferraz|BR|1|||SBML:54
SNSL||Luís Eduardo Magalhães|Fazenda São Luiz|BR|1|||SNBR:140
SNSM|OPP|Salinópolis||BR|2
SNSO||Serro||BR|1|||SBCF:128
SNSP||Baixa Grande do Ribeiro|Fazenda Tropical|BR|1
SNSR||Guarda-Mor|Fazenda Santos Reis|BR|1|||SNZR:35
SNSS|IAL|Salinas|Salinas Municipal|BR|1|||SBMK:169
SNSU||Sapezal|Fazenda Globo|BR|1||SJHM|SBVH:166
SNSV||Ribas do Rio Pardo|Fazenda São Domingos|BR|1|||SBCG:147
SNTA||Pompéia|Fazenda São Miguel|BR|1|||SBML:41
SNTB||Cocos|Santa Colomba Agropecuária|BR|1|||SBBR:281
SNTC||Prata|Fazenda Campo Alto|BR|1|||SBUL:72
SNTD||Natalândia|Fazenda Mamoneira|BR|1|||SNZR:84
SNTF|TXF|Teixeira de Freitas|9 de Maio - Teixeira de Freitas|BR|1|||SBPS:136
SNTG||Formosa do Rio Preto|Gercino Coelho|BR|1|||SNBR:93
SNTI|OBI|Óbidos|Óbidos Municipal|BR|1|||SBSN:101
SNTK||Quintana|Fazenda Bom Retiro Airstrip|BR|1|||SBML:47
SNTL||Araguaína|Fazenda Treze Estrelas|BR|1|||SWGN:102
SNTO|TFL|Teófilo Otoni|Juscelino Kubitscheck|BR|1|||SBGV:122
SNTP||Tailândia|Agropalma|BR|1|||SBBE:132
SNTQ||Buritirama||BR|1|||SNBR:211
SNTR||Piritiba||BR|1|||SBLE:113
SNTS|JPO|Patos|Aeroporto Brigadeiro Firmino Ayres|BR|1|||SJZA:152
SNTU||Gaúcha do Norte|Fazenda Tupã|BR|1|||SBSO:239
SNTV||Luís Eduardo Magalhães|Fazenda Timbaúba|BR|1|||SNBR:133
SNTX||Buriticupu|Fazenda Santo Antônio|BR|1|||SBIZ:174
SNTY||Correntina||BR|1|||SNBR:151
SNUA||Santa Terezinha de Itaipu|Fazenda Paulista|BR|1|||SBFI:24
SNUB||Ubá||BR|1|||SBZM:53
SNUC||Açu||BR|1|||SBMS:62
SNUD||Porto Esperidião|Fazenda Arruda Ramos Airstrip|BR|1|||SWTS:211
SNUE||São Sepé|Aero Sepé Aviação Agrícola|BR|1|||SBSM:53
SNUF||São Paulo|Alfa Airport Posse|BR|1|||SBKP:52
SNUG||Vila Bela Da Santíssima Trindade|Fazenda Eunice|BR|1|||SWTS:237
SNUH||Piumhi||BR|1|||SBAX:140
SNUI|AIY|Araçuaí||BR|1|||SBMK:189
SNUJ||Indiavaí|Fazenda São Francisco|BR|1|||SWTS:143
SNUK||Formosa do Rio Preto|Centúria Montana|BR|1|||SNBR:141
SNUM||Água Boa|Fazenda Córrego Fundo|BR|1
SNUN||Unaí||BR|1|||SNZR:99
SNUP||Campo Alegre|Usina Porto Rico|BR|1|||SBMO:57
SNUS||Delta|Usina Delta I|BR|1|||SBUR:28
SNUT||Utinga||BR|1|||SBLE:47
SNUU||Aruanã|Fazenda Tainacan Airstrip|BR|1
SNUW||Morada Nova de Minas|Fazenda Morada Bela|BR|1|||SBCF:199
SNUZ||Coruripe|Usina Coruripe|BR|1|||SBMO:78
SNVA||Cumaru Do Norte|Fazenda Bela Vista|BR|1|||SBCJ:219
SNVB|VAL|Valença||BR|2
SNVC||Viçosa||BR|1|||SBZM:92
SNVD||Santa Maria da Vitória||BR|1|||SNBR:170
SNVH||Cáceres|Fazenda Santa Helena|BR|1|||SWTS:183
SNVI||Três Corações|Mélio Viana Public|BR|1|||SBSJ:171
SNVJ||Tangará da Serra|Fazenda Senhora Aparecida Airstrip|BR|1|||SWTS:118
SNVL||Santana do Araguaia|Nova Vida|BR|1|||SBPJ:285
SNVN||Santa Vitória|Fazenda Vitória Santa|BR|1|||SBUL:226
SNVP||Várzea da Palma|Fazenda Paraíso Airstrip|BR|1|||SBMK:156
SNVQ||Brasilândia|Fazenda União Airstrip|BR|1|||SBTG:127
SNVR||Vera Cruz|Aeroclube da Bahia|BR|1|||SBSV:39
SNVS|BVS|Breves||BR|2
SNVY||Paranhos|Aeródromo de Fazenda Ouro Verde|BR|1|||SSGY:120
SNVZ||Jaborandi|Fazenda Flor da Serra|BR|1|||SNBR:258
SNWB||Porto Seguro|Bom Sossego|BR|1|||SBPS:6
SNWC|CMC|Camocim|Camocim - Pinto Martins|BR|1|||SBJE:56
SNWD||Iguatemi|Fazenda Guavirá|BR|1|||SSGY:84
SNWE||Santa Rita|Clube Estância Ouro Verde|BR|1|||SBJP:12
SNWF||Ponta Porã|Fazenda Cachoeirinha|BR|1|||SBPP:50
SNWG||Itaquiraí|Fazenda Iporã|BR|1|||SSGY:57
SNWH||Querência do Norte|Fazenda São Mateus|BR|1|||SSUM:96
SNWI||Nova Lacerda|Fazenda São João do Guapore|BR|1|||SBVH:153
SNWJ||Araputanga|Fazenda Rancho Alegre|BR|1|||SWTS:141
SNWK||Pedra Preta|Fazenda Santa Terezinha|BR|1|||SBRD:50
SNWL||Bandeirantes|Fazenda Santarém|BR|1|||SBCG:73
SNWO||Amambaí|Fazenda Vera Cruz|BR|1|||SBPP:122
SNWP||Diamantino|Fazenda Parecis|BR|1|||SWTS:83
SNWQ||Jari|Fazenda Santa Cecília|BR|1|||SBSM:76
SNWR||Senador José Porfírio|Wilma Rabelo|BR|1|||SBHT:83
SNWS|JCS|Crateús||BR|1|||SBTE:235
SNWU||Aral Moreira|Fazenda Ponte Quinhá|BR|1|||SBPP:54
SNWX||Campo Grande|Fazenda Vista Alegre|BR|1|||SBCG:74
SNWZ||Santana do Araguaia|Fazenda Santa Maria|BR|1|||SBPJ:262
SNXA||Tamboril|Brigadeiro Sampaio|BR|1|||SBJE:217
SNXB||Caxambu||BR|1|||SBJF:164
SNXE||Ferreira Gomes|Aero Z Ferrus|BR|1|||SBMQ:105
SNXG||Sapucaia|Fazenda dos Castanhais|BR|1|||SBCJ:102
SNXH||Codó|Itapecuru|BR|1|||SBTE:146
SNXI||Cordisburgo|Alberto Ramos|BR|1|||SBCF:72
SNXK||São Félix Do Xingu|Fazenda Lagoa do Triunfo|BR|1
SNXN||Altamira|Fazenda Novo Progresso|BR|1|||SBIH:288
SNXP||Carneirinho|Fazenda Pontal|BR|1||SNVO|SBTG:114
SNXQ||Xique-Xique||BR|1|||SBLE:239
SNXR||Itaituba|Fazenda Conforto|BR|1|||SBAT:279
SNXS||Tapurah|Agropecuária Lazarotto|BR|1|||SBSO:104
SNXT||Barão de Melgaço|Pousada Alvorada|BR|1|||SBRD:153
SNXU||Dois Irmãos do Buriti|Fazenda Gruta Azul|BR|1|||SBCG:68
SNXV||Felixlândia|Tranquilo Testolin|BR|1||SNTT|SBCF:154
SNXX||Maxaranguape||BR|1|||SBSG:46
SNXY||Portel|Cikel Brasil Verde|BR|1|||SNVS:118
SNXZ||Santa Filomena|Fazenda Nazaré|BR|1
SNYA|GGF|Almeirim||BR|2
SNYB||Ituiutaba||BR|1|||SBUL:133
SNYE|PHI|Pinheiro||BR|1|||SBSL:97
SNYF||Brasilândia|Fazenda Fortaleza|BR|1||SSIH|SBTG:110
SNYH||Cumaru do Norte|Fazenda Vale Sereno|BR|1
SNYJ||Jacareacanga|Pista São Jorge|BR|1|||SBIH:262
SNYL||Nova Canaã do Norte|Fazenda Morro Alto|BR|1|||SBAT:83
SNYO||Guararapes|Fazenda Rio Preto|BR|1|||SBAU:38
SNYP||Benevides|Chácara Paraíso|BR|1|||SBBE:21
SNYS||João Pinheiro|WD Agroindustrial|BR|1|||SNZR:144
SNYT||Ituaçu||BR|1|||SBVC:127
SNYU||Iturama||BR|1|||SBSR:149
SNYV||Moju|Fazenda Socôco|BR|1|||SBBE:84
SNYW|GMS|Guimarães|Antônio Guerreiro|BR|1|||SBSL:70
SNYX||Carangola|Fazenda Fenix|BR|1|||SBCP:125
SNYY||Boa Esperança|Sítio São Luiz|BR|1|||SSUM:74
SNYZ||Cumaru do Norte|Fazenda Rio 18|BR|1|||SBCJ:294
SNZA|PPY|Pouso Alegre||BR|1|||SBSJ:105
SNZB||Pouso Redondo|Rancho Sumidor|BR|1|||SBLJ:79
SNZC||Aquidauana|Fazenda Cervinho Airstrip|BR|1|||SBCG:134
SNZD||Pimenteiras do Oeste|Fazenda Capivara|BR|1|||SBVH:131
SNZE||Itaqui|Fazenda Santa Zélia Airstrip|BR|1|||SBUG:123
SNZF||Tangará da Serra|AFG II|BR|1|||SWTS:89
SNZG||Capâo Bonito|Fazenda São Benedito|BR|1|||SDCO:87
SNZH||Jaíba|Fazenda Novo Horizonte|BR|1|||SBMK:142
SNZK||Itacarambí|Fazenda Canadá|BR|1|||SBMK:189
SNZL||Ourinhos|Usina São Luiz|BR|1||SDUZ|SBML:85
SNZN||Sete Quedas|Fazenda Naná Porã|BR|1|||SSGY:104
SNZO||Touros|Fazenda Bebida Velha|BR|1|||SBSG:56
SNZP||Sapezal|Fazenda Três Lagoas|BR|1|||SBVH:161
SNZR|PYT|Paracatu|Pedro Rabelo de Souza|BR|2
SNZS||Santa Terezinha|Fazenda Vô Zeca|BR|1||SWXY|SBPJ:254
SNZT||Paragominas|Fazenda Recreio|BR|1|||SNEB:125
SNZU||Tomé Açu|Fazenda Nova Conceição|BR|1|||SNEB:103
SNZV||Ulianópolis|Fazenda Jamaica|BR|1|||SNEB:80
SNZW|ITE|Ituberá||BR|1|||SNVB:51
SNZY||Buritizeiro|Fazenda Lago Vermelho|BR|1|||SNZR:150
SNZZ||Coruripe|Muzzi|BR|1|||SBMO:67
SOCA|CAY|Cayenne|Cayenne – Félix Eboué|GF|4|Matoury
SOGS|GSI|Grand-Santi||GF|1|||SMDA:38
SOML||Malin||PE|1|||SPJR:58
SOOA|MPY|Maripasoula||GF|3
SOOC|OYC|Camopi||GF|1|||SOCA:183
SOOG|OYP|Saint-Georges-de-l'Oyapock||GF|2|||SOCA:120
SOOK||Kourou||GF|1|||SOCA:54
SOOM|LDX|Saint-Laurent-du-Maroni||GF|3
SOOR|REI|Régina||GF|1|||SOCA:62
SOOS|XAU|Saül||GF|1|||SOOA:93
SOOY||Sinnamary||GF|1|||SOCA:89
SPAA||Ancash|Caraz|PE|1|||SPEO:79
SPAB||Huancabamba||PE|1|||SPJE:83
SPAC||Santa María de Nieva|Ciro Alegria|PE|1|||SPJE:143
SPAG||Aguaytia||PE|1|||SPNC:121
SPAI||Pataz|Urpay|PE|1|||SPEO:152
SPAL||El Dorado|Alao|PE|1|||SPST:38
SPAP||Picota||PE|1|||SPST:45
SPAR|ALD|Fortaleza|Alerta|PE|1|||SLCO:84
SPAS|AOP|Andoas|Alferez FAP Alfredo Vladimir Sara Bauer|PE|1|||SEMC:192
SPAT||Aguas Calientes||PE|1|||SPCL:52
SPAY|AYX|Atalaya|Teniente General Gerardo Pérez Pinedo|PE|2|||SPJJ:220
SPBB|MBP|Moyobamba||PE|1|||SPST:87
SPBC||Caballococha||PE|2|||SKLT:70
SPBJ||Ramón Castilla|Buncuyo|PE|1|||SPMS:183
SPBL||Bolognesi||PE|1|||SPCL:196
SPBQ||San Isidro|Nuevo Acari|PE|1|||SPZA:70
SPBR|IBP|Iberia||PE|2|||SLCO:87
SPBS||Jeberos|Bellavista|PE|1|||SPMS:70
SPBT||Obenteni||PE|1|||SPJJ:178
SPCC||Ciudad Constitución||PE|1|||SPNC:131
SPCG||Ascope|Casa Grande|PE|1|||SPRU:39
SPCH||Tocache||PE|1|||SPST:188
SPCI|||Campamento De Ilo|PE|1|||SPLO:9
SPCL|PCL|Pucallpa|Cap FAP David Abenzur Rengifo|PE|4
SPCM||Contamana||PE|1|||SPCL:125
SPCP||Pucacaca||PE|1|||SPST:37
SPCR||Acarí|Acarí Airbase|PE|1|||SPZA:78
SPCT||Chota||PE|1|||SPJR:68
SPCV||Cutivireni|Quempiri|PE|1|||SPHO:145
SPDN||Colonia Angamos||PE|1|||SPQT:158
SPDO||Mollendo||PE|1|||SPQU:90
SPDR|TDP|Corrientes|Trompeteros|PE|1|||SPQT:192
SPDS||Cuajone|Cuajone Botiflaca|PE|1|||SPLO:92
SPDU|||Pueblo Libre Del Codo|PE|1|||SPNC:104
SPEB||Loreto|Pebas|PE|1|||SPQT:173
SPEE|||El Estrecho|PE|1|||SKHZ:112
SPEN||Iscozasin||PE|1|||SPNC:120
SPEO|CHM|Chimbote|FAP Lieutenant Jaime Andres de Montreuil Morales|PE|3
SPEP||Esperanza|Puerto Esperanza|PE|1|||SLCO:253
SPEQ||Moquegua|Cesar Torke Podesta|PE|1|||SPLO:72
SPEZ||Oxapampa|Puerto Bermudez|PE|1|||SPNC:146
SPGB|||Galilea|PE|1|||SECA:179
SPGL|CGL||Chagual|PE|1|||SPJR:118
SPGM|TGI|Tingo Maria||PE|1|||SPNC:69
SPGP|||Güeppi­|PE|1|||SKLG:54
SPGS||Cajamarca|Lagunas|PE|1|||SPJR:31
SPGT||Puerto Victoria||PE|1|||SPNC:136
SPGU||Baguá||PE|1|||SPJE:27
SPHC||Puerto Chala|Chala|PE|1|||SPZA:128
SPHI|CIX|Chiclayo|Capitán FAP José A. Quiñones González|PE|4
SPHO|AYP|Ayacucho|Air Force Colonel Alfredo Mendivil Duarte|PE|3
SPHV||Huánuco Viejo||PE|1|||SPNC:6
SPHY|ANS|Andahuaylas||PE|2
SPHZ|ATA|Anta|Comandante FAP German Arias Graziani|PE|2|||SPEO:104
SPID||Iquitos|Teniente Bergerie|PE|1|||SPQT:7
SPIL|UMI|Quince Mil|Quincemil Air Base|PE|1|||SPZO:133
SPIN||Iñapari||PE|1|||SLCO:85
SPIR||Pillcopata|Patria|PE|1|||SPZO:84
SPIS||Pataz|Pias|PE|1|||SPJR:137
SPIT||Paita Wesr|Paita|PE|1|||SPYL:58
SPIY||Yauri||PE|1|||SPZO:150
SPIZ|UCZ|Uchiza||PE|1|||SPNC:158
SPJA|RIJ|Rioja|Juan Simons Vela|PE|2|||SPPY:78
SPJB||Pampa Grande||PE|1|||SPJR:71
SPJC|LIM|Lima|Jorge Chávez|PE|4||SPIM
SPJE|JAE|Jaén|Shumba|PE|3
SPJI|JJI|Juanjuí|Juanjui|PE|2|||SPST:83
SPJJ|JAU|Jauja|Francisco Carle|PE|3
SPJL|JUL|Juliaca|Inca Manco Capac|PE|4
SPJN|SJA|San Juan de Marcona||PE|1|||SPZA:59
SPJR|CJA|Cajamarca|Mayor General FAP Armando Revoredo Iglesias|PE|3
SPKI||La Convención|Kiteni|PE|1||SPQI|SPHY:122
SPLA||Luisiana||PE|1|||SPHO:76
SPLC||La Joya|Mariano Melgar|PE|1|||SPQU:60
SPLD||Celendín||PE|1|||SPJR:48
SPLG||Lagarto|Lagarto Nuevo|PE|1|||SPTU:66
SPLH||Ica|Las Dunas|PE|1|||SPZA:125
SPLN|RIM|Rodriguez de Mendoza|San Nicolas|PE|1|||SPPY:45
SPLO|ILQ|Ilo|General Jorge Fernandez Maldon|PE|3
SPLP||Chorrillos|Las Palmas Air Base|PE|1|||SPJC:20
SPLS||Zorrillos||PE|1|||SPCL:62
SPLX||San Bartolo|Lib Mandi Metropolitan|PE|1|||SPJC:56
SPME|TBP|Tumbes|Captain Pedro Canga Rodríguez|PE|3
SPMF|MZA|Mazamari|Mayor PNP Nancy Flores Paucar|PE|1|||SPJJ:114
SPMS|YMS|Yurimaguas|Moises Benzaquen Rengifo|PE|3
SPNC|HUU|Huánuco|Alferez Fap David Figueroa Fernandini|PE|3
SPNH||Choclococha|Laguna Choclococha|PE|1|||SPHO:94
SPNM||Nuevo Mundo||PE|1|||SPHO:213
SPNP||Ventilla||PE|1|||SPJL:44
SPNR||Ricrán||PE|1|||SPNC:100
SPNT||Intuto||PE|1|||SPQT:161
SPNU||Manu||PE|1|||SPZO:179
SPOA|SQU|Plaza Saposoa|Saposoa|PE|1|||SPST:67
SPON||Orellana||PE|1|||SPST:141
SPOR||Orcopampa||PE|1|||SPQU:141
SPOV||Leon Velarde|Shiringayoc/Hacienda Hda Mejia|PE|1|||SPTU:80
SPOY||Atico||PE|1|||SPZA:211
SPPB||Puerto Breu|Tipishsa|PE|1|||SBCZ:215
SPPE||Palmapampa||PE|1|||SPHO:74
SPPH||Pampa Hermosa||PE|1|||SPST:142
SPPL||Trismaje|Playa|PE|1|||SPNC:154
SPPN||Palmas del Espino||PE|1|||SPNC:174
SPPO||Pozuzo||PE|1|||SPNC:75
SPPP||Huanacopampa||PE|1|||SPZO:80
SPPY|CHH|Chachapoyas||PE|3
SPPZ||Porvenir|Palcazú|PE|1|||SPNC:119
SPQJ||Jaquí||PE|1|||SPZA:89
SPQM||San Lorenzo||PE|1|||SPMS:129
SPQR||Qiruvilca|Quiruvilca|PE|1|||SPJR:97
SPQT|IQT|Iquitos|Coronel FAP Francisco Secada Vignetta|PE|4
SPQU|AQP|Arequipa|Rodríguez Ballón|PE|4
SPRF||San Rafael||PE|1|||SPJL:134
SPRG||Chincha|San Regis|PE|1|||SPZA:192
SPRL||Imperial||PE|1|||SPJJ:74
SPRM||San Ramón|Capitán FAP Leonardo Alvariño Herr|PE|1|||SPJJ:74
SPRR||San Vicente de Cañete|Revalora|PE|1|||SPJC:162
SPRU|TRU|Trujillo|Capitán FAP Carlos Martínez de Pinillos|PE|4
SPSA||Casma||PE|1|||SPEO:42
SPSE||Sepahua||PE|1|||SPHO:257
SPSF||San Francisco de Yeso|San Francisco|PE|1|||SPPY:47
SPSI||Siguas||PE|1|||SPQU:64
SPSJ||El Dorado|San José de Sisa|PE|1|||SPST:37
SPSL||Lamas||PE|1|||SPST:20
SPSN||Shapaja||PE|1|||SPST:15
SPSO|PIO|Pisco|Captain Renán Elías Olivera|PE|3|||SPZA:183
SPSS||Masisea||PE|1|||SPCL:39
SPST|TPP|Tarapoto|Cadete FAP Guillermo Del Castillo Paredes|PE|3
SPSY|SYC|Shiringayoc||PE|1|||SPTU:82
SPTA||Nauta||PE|1|||SPQT:89
SPTE||San Francisco||PE|1|||SPHO:82
SPTI||Puerto Inca||PE|1|||SPCL:120
SPTN|TCQ|Tacna|Coronel FAP Carlos Ciriani Santa Rosa|PE|3
SPTO||Santa Clara de Tulpo|Tulpo|PE|1|||SPJR:123
SPTP||Talara|El Pato Air Base|PE|1|||SPYL:4
SPTQ||Toquepala||PE|1|||SPLO:85
SPTR||Tournavista||PE|1|||SPCL:62
SPTU|PEM|Puerto Maldonado|Padre Aldamiz|PE|3
SPUC||Huamachuco||PE|1|||SPJR:91
SPUR|PIU|Piura|PAF Captain Guillermo Concha Iberico|PE|3
SPVA||El Valor|Hacienda El Valor|PE|1|||SPJE:17
SPVI||Vicco||PE|1|||SPNC:108
SPVL||Caraveli||PE|1|||SPZA:200
SPVN||Vilcashuamán||PE|1|||SPHY:62
SPVR||La Joya|Vitor|PE|1|||SPQU:30
SPWB|PTL|Máncora|Walter Braedt Segú|PE|1|||SPYL:60
SPWT|VVN|Las Malvinas|Las Malvinas/Echarate|PE|1|||SPHO:199
SPYA||Luya||PE|1|||SPHI:18
SPYC||Pucallpa|Yarinacocha|PE|1|||SPCL:5
SPYL|TYL|Talara|Captain Victor Montes Arias|PE|3
SPYO||Pacasmayo||PE|1|||SPHI:74
SPYU||Yauca||PE|1|||SPZA:97
SPZA|NZC|Nazca|Maria Reiche Neuman|PE|3
SPZH||Pachiza||PE|1|||SPST:98
SPZO|CUZ|Cusco|Alejandro Velasco Astete|PE|4
SPZT||Chazuta||PE|1|||SPST:27
SQAB||Irbo|White Waters Ag|CO|1|||SKBG:88
SQED||El Delirio||CO|1|||SKUC:19
SQFQ||Puerto Triunfo|Airport Hacienda Nápoles|CO|1|||SKRG:81
SQGC||Espinal|Agua Blanca|CO|1|||SKIB:38
SQIR||El Cairano||CO|1|||SKCG:40
SQKS||Tubará|Aerodromo Los Campanos|CO|1|||SKBQ:27
SQPS||Apartado|Los Planes|CO|1|||SKLC:8
SQPU||Nunchía|Acapulco Ag|CO|1|||SKYP:58
SQSW||Mitu|Santa Lucía|CO|1|||SKMU:29
SQUJ|TTM|Tablón De Tamara||CO|1|||SKYP:55
SQZJ|PZR|Bajo Baudó|Pizarro|CO|1|||SKNQ:84
SSAB||Ibaiti|Moisés Lupion|BR|1|||SBLO:100
SSAD||Chapadão do Sul|Fazenda Ribeirão|BR|1|||SBTG:256
SSAE||Arroio Grande||BR|1|||SBPK:89
SSAF||Santa Terezinha de Itaipu|Aeroclube de Foz do Iguaçu|BR|1|||SBFI:25
SSAG||Água Clara|Fazenda Lobo|BR|1|||SBTG:159
SSAH||São Félix do Araguaia|Fazenda Sorriso|BR|1
SSAI||Iaciara|Fazenda Panamá|BR|1|||SBBR:230
SSAK|CZB|Cruz Alta|Carlos Ruhl|BR|1|||SBNM:69
SSAM||Barão de Melgaço|Posto de Proteção Ambiental Santo André|BR|1|||SBCY:124
SSAN||Andirá||BR|1|||SBML:97
SSAO||Baixa Grande|Fazenda Olhos D'Água|BR|1|||SBLE:121
SSAP|APU|Apucarana|Captain João Busse|BR|1|||SBLO:40
SSAQ||Passo Fundo|Aeroclube|BR|1|||SBPF:19
SSAT||Vazante||BR|1|||SNZR:79
SSAU||Tapes|Centeno|BR|1|||SBPA:87
SSAV||Porto Murtinho|Fazenda Amonguijá|BR|1|||SBDB:117
SSAY||Campo Grande|Sítio Pouso do Aviador|BR|1|||SBCG:20
SSAZ||Natal|Stratus Ale|BR|1|||SBSG:17
SSBA||Formosa do Rio Preto|Fazenda Arizona|BR|1|||SNBR:142
SSBB||João Pinheiro|Fazenda Balada Airstrip|BR|1|||SNZR:100
SSBC||Castilho|Fazenda Barra do Tietê|BR|1|||SBTG:10
SSBF||Aparecida do Taboado|Fazenda JL|BR|1|||SBTG:89
SSBG|BGV|Bento Gonçalves|Aeroclube de Bento Gonçalves|BR|1|||SBCX:35
SSBI||Barreiras|Condomínio Irmãos Gatto|BR|1|||SNBR:143
SSBJ||Riachão das Neves|Fazenda Savana|BR|1|||SNBR:82
SSBK||Sonora|Fazenda Araruna|BR|1|||SBRD:111
SSBL|BNU|Blumenau||BR|1|||SBNF:44
SSBN||Porto Alegre|Belém Novo|BR|1|||SBPA:22
SSBQ||Fazenda Brusque||BR|1
SSBR||Bandeirantes||BR|1|||SBLO:78
SSBS||Alto Garças|Fazenda Selena|BR|1|||SBRD:154
SSBT||Bataiporã|Fazenda Santa Ilídia|BR|1|||SSUM:166
SSBV||Bela Vista||BR|1|||SBDB:93
SSBX||Coxim|Fazenda Lageado|BR|1|||SBRD:207
SSBY||Miranda|Orlando Chesini Ometto|BR|1|||SBDB:132
SSBZ|BZC|Cabo Frio|Umberto Modiano|BR|2||SBBZ|SBCB:20
SSCA||Chapadão do Sul|Fazenda Pantanal|BR|1|||SBTG:244
SSCB||Casa Branca|Casa Branca Municipal|BR|1||SDKB|SBRP:104
SSCD||Chapadão do Sul||BR|1|||SBTG:229
SSCE||São José de Mipibu|Campos de Melo|BR|1|||SBSG:28
SSCF||Campo Largo|Max Fontoura|BR|1|||SBCT:37
SSCH||Nova Andradina|Fazenda Cachoeirão|BR|1|||SBTG:186
SSCI||Coxim||BR|1|||SBRD:211
SSCK|CCI|Concórdia|Olavo Cecco Rigon|BR|1|||SBCH:60
SSCL|CSS|Cassilândia||BR|1|||SBTG:179
SSCM||Rio Brilhante|Fazenda Caçadinha|BR|1|||SBCG:128
SSCN|CEL|Canela||BR|2
SSCO||Capão do Leão|Comandante Marilda Zaiden de Mesquita|BR|1|||SBPK:13
SSCP|CKO|Cornélio Procópio||BR|1|||SBLO:57
SSCQ||Cacequi|Salcã|BR|1|||SBSM:122
SSCR||Marechal Cândido Rondon|Balduino Helmuth Jope|BR|1|||SBTD:41
SSCT|GGH|Cianorte|Engenheiro Gastão de Mesquita Filho|BR|1|||SBMG:68
SSCU||Santa Maria Das Barreiras|Fazenda Santa Marina|BR|1|||SBPJ:282
SSCV|CRQ|Caravelas||BR|2||SBCV|SBPS:136
SSCW||Nova Maringá|Fazenda Centro Oeste|BR|1|||SWTS:143
SSCX||Passo Fundo|Fazenda Coxilha|BR|1|||SBPF:17
SSDC||Venda Nova do Imigrante|Caxixe Airstrip|BR|1|ACA||SNGA:68
SSDF||São Sebastião do Passé|Ecides Fires|BR|1|||SBSV:48
SSDG||Sorriso|Fazenda Nossa Senhora das Graças|BR|1||SWNG|SBSO:50
SSDH||Correntina|Fazenda Chapadão Alegre|BR|1|||SNBR:154
SSDI||Buriti Bravo|Fazenda Bacatuba|BR|1|||SBTE:118
SSDK|||São Pedro|BR|1|||SBCF:93
SSDL||Ribeirão Gonçalves|Fazenda Ribeirão|BR|1
SSDM||Ituberá|Fazenda Serinhaém|BR|1|||SNVB:60
SSDN||Barreiras do Piauí|Fazenda Nova Fronteira|BR|1|||SNBR:221
SSDO||Porto Seguro|São Pedro|BR|1|||SBPS:43
SSDP||Vila Bela da Santíssima Trindade|Fazenda Fortaleza do Guaporé|BR|1|||SBVH:197
SSDQ||Miranda|Fazenda Marema|BR|1|||SBDB:120
SSDT||Redenção|Fazenda Pau d'Arco|BR|1|||SBCJ:204
SSDU||Cáceres|Fazenda Duas Lagoas|BR|1||SWOE|SWTS:185
SSDV||Corumbá|Fazenda Santa Maria|BR|1|||SBRD:197
SSDW||Sorriso|Fazenda Potrich|BR|1|||SBSO:51
SSDX||Camaquã|Fazenda da Coxilha|BR|1|||SBPK:98
SSDY||Macapá|Alegria Alcolumbre|BR|1|||SBMQ:100
SSDZ||São Desidério|Fazenda Requinte|BR|1|||SNBR:147
SSEA||Rosário Oeste|SESC Serra Azul|BR|1||SITN|SBCY:138
SSEB||São Domingos|Mata Serena|BR|1|||SBBR:264
SSEC||Tupaciguara|Fazenda F5|BR|1|||SBCN:76
SSED||Pedro Gomes|Fazenda Escalada|BR|1|||SBRD:157
SSEE||Estrela|Vale do Taquari Regional|BR|1|||SBCX:78
SSEF||Cajuru|Fazenda Passaredo|BR|1|||SBRP:60
SSEG||Renascença|Sementes Guerra|BR|1|||SBPO:26
SSEH||Alto Taquari|Fazenda Pantera|BR|1|||SBRD:219
SSEK||Ribas do Rio Pardo|Fazenda Lontra|BR|1|||SBCG:156
SSEM||Santo Antônio do Leverger|Fazenda Girassol do Prata|BR|1|||SBRD:74
SSEN||Barão de Melgaço|Bainho de Baixo Airstrip|BR|1|||SBRD:109
SSEP||São Sepé||BR|1|||SBSM:53
SSEQ||Arame|Renascera|BR|1|||SBIZ:197
SSER|ERM|Erechim||BR|1|||SBPF:65
SSET||Imbituba|Sunset|BR|1|||SBFL:58
SSEU||Itaituba|Tabocal|BR|1|||SBAT:292
SSEV||Corumbá|São Camilo|BR|1|||SBCR:117
SSEW||Pardinho|Sítio Limoeiro|BR|1|||SDCO:92
SSEX||Miranda|Estância Caiman|BR|1|||SBDB:143
SSEZ||Espumoso||BR|1|||SBPF:76
SSFA||Pinhão|Foz do Areia|BR|1|||SSUV:64
SSFB|FBE|Francisco Beltrão|Paulo Abdala|BR|2
SSFC||Dom Pedrito|Safra|BR|1|||SURV:82
SSFE||Foz do Iguaçu|Estância Hércules|BR|1|||SBFI:18
SSFH||Uberaba|Vale dos Dinassauros|BR|1|||SBUR:16
SSFI||Corumbá|Fazenda Eldorado da Formosa|BR|1|||SBCR:169
SSFJ||Campo Grande|Fazenda Retiro da Cachoeira|BR|1|||SBCG:38
SSFK||Corumbá|Forte Coimbra|BR|1|||SBCR:100
SSFL||Fronteiras|João Pereira dos Santos Filho|BR|1|||SBJU:151
SSFM||Baixa Grande do Ribeiro|Fazenda Montani|BR|1
SSFN||Corumbá|Fazenda Nazaré|BR|1|||SBCR:69
SSFO||Miranda|Fazenda Novo Horizonte|BR|1|||SBDB:135
SSFQ||Grajaú|Fazenda Canoa Quebrada|BR|1|||SBIZ:141
SSFS||Sapezal|Fazenda Sapezal|BR|1|||SBVH:159
SSFU||Dom Eliseu|Antonio Furlaneto|BR|1|||SBIZ:123
SSFV||Pirapora|Fazenda Viveiros|BR|1|||SBMK:149
SSFW||Mucugê|Fazenda Progresso|BR|1|||SBLE:79
SSFX||Nova Fátima|Fazenda Primavera|BR|1|||SBLO:58
SSFZ||Buritis|Fazenda Carolina|BR|1|||SBBR:144
SSGA||Garibaldi||BR|1|||SBCX:34
SSGB||Guaratuba||BR|1|||SBJV:42
SSGC||Santo Antônio do Leverger|Fazenda Chapadão|BR|1|||SBCY:23
SSGD||Jaborandi|Fazenda Porta do Céu|BR|1|||SNBR:244
SSGE||Três Lagoas|Fazenda Periquitos|BR|1|||SBTG:32
SSGF||Ribas do Rio Pardo|Fazenda Formosa|BR|1|||SBCG:154
SSGG|GPB|Guarapuava|Tancredo Thomas de Faria|BR|1||SBGU|SSUV:104
SSGH||Aquidauana|Fazenda Capão Verde|BR|1|||SBDB:136
SSGJ||Corumbá|Fazenda Poleiro Grande|BR|1|||SBCY:178
SSGL||Sorriso|FNSC Airstrip|BR|1|||SBSO:30
SSGM||Bela Vista|Fazenda Seriema|BR|1|||SBDB:51
SSGN||Iguatemi|Fazenda Guaíba|BR|1|||SSGY:100
SSGO||São Gabriel d'Oeste|Rosada|BR|1|||SBCG:116
SSGQ||Rio Brilhante|Fazenda Capivari Airstrip|BR|1|||SBCG:148
SSGR||Santa Helena de Goiás|Santa Helena de Goiás - Paulo Lopes Regional|BR|1|||SBGO:194
SSGS||Eldorado|Fazenda São Pedro|BR|1|||SSGY:48
SSGT||Rio Brilhante|Fazenda Capão Alto|BR|1|||SBPP:132
SSGU||Santa Isabel do Ivaí|Fazenda Gurucaia|BR|1|||SSUM:68
SSGW||Goioerê|Manoel Ribas|BR|1|||SSUM:54
SSGX||Santa Cruz do Rio Pardo|Guacho|BR|1|||SBAE:80
SSGY|GGJ|Guaíra||BR|2
SSGZ||Naviraí|Fazenda Santa Helena do Pindó|BR|1|||SSUM:115
SSHA||Aquidauana|Aeroclube de Aquidauana|BR|1|||SBDB:111
SSHB||Luís Eduardo Magalhães|Boris|BR|1|||SNBR:89
SSHC||Paranaíba|Fazenda Alvemi Airstrip|BR|1|||SBTG:160
SSHD||Alegrete|Chico Ledur|BR|1||SSOR|SBUG:128
SSHE||Comodoro|Fazenda Nova Guaporé|BR|1|||SBVH:137
SSHF||Formosa do Rio Preto|Fazenda Gerais|BR|1|||SNBR:180
SSHG||Rio Pardo|Fazenda Santa Helena|BR|1|||SBSM:112
SSHK||Ponta Porã|Fazenda Jaguarandy|BR|1|||SBPP:14
SSHL||Jussara|Fazenda Jussara|BR|1|||SBMG:41
SSHN||Iguaraçu|Recanto das Águias|BR|1|||SBMG:29
SSHP||Goioxim|Fazenda Paiol do Piquiri Airstrip|BR|1|||SBPO:151
SSHQ||Rosana|Fazenda Sossego|BR|1|||SBDN:130
SSHT||Alta Floresta|Ingazeira|BR|1|||SBAT:73
SSHU||Aquidauana|Fazenda Centenário|BR|1|||SBCR:178
SSHV||Várzea da Palma|Fazenda Genipapo|BR|1|||SBMK:141
SSHW||Recursolândia|Fazenda Nova Esperança|BR|1|||SWGN:195
SSHX||Paranhos|Aeródromo de Fazenda Jatobá|BR|1|||SSGY:114
SSHZ|HRZ|Horizontina|Walter Bündchen|BR|1|||SSZR:35
SSIA||Baixa Grande do Ribeiro|Fazenda Ipê|BR|1
SSIC||Dourados|APLIC Aviação Agrícola Ltda|BR|1|||SBPP:94
SSIE||Campo Grande|Teruel Ipanema Estância|BR|1|||SBCG:17
SSIF||Itaquiraí|Fazenda Baunilha|BR|1|||SSGY:60
SSIJ|IJU|Ijuí|João Batista Bos Filho|BR|1|||SBNM:33
SSIM|CCM|Criciúma|Forquilhinha - Criciúma|BR|2||SBCM|SBJA:36
SSIO||Santa Carmem|Fazenda Conquista Airstrip|BR|1|||SBSI:99
SSIQ|ITQ|Itaqui||BR|1|||SBUG:83
SSIR||Ibirubá||BR|1|||SBPF:84
SSIS||Ibaté|Major José Ignácio|BR|1|||SBAQ:26
SSIT||Nova Olímpia|Rancho Toca do Lobo|BR|1|||SWTS:16
SSIY||Novo Progresso|Fazenda Três Irmãos|BR|1|||SBAT:63
SSJA|JCB|Joaçaba|Santa Terezinha|BR|1|||SBCH:109
SSJB||Naviraí|Fazenda Vaca Branca|BR|1|||SSUM:96
SSJC||Valparaíso|Jacarezinho|BR|1||SJQR|SBAU:49
SSJD||Miranorte|Fazenda Bacaba – JEM Airstrip|BR|1|||SBPJ:96
SSJG||Porto Murtinho|Fazenda Santa Ana|BR|1|||SBDB:127
SSJI||Jardim||BR|1|||SBDB:41
SSJJ||Camapuã|Fazenda Brejon Airstrip|BR|1|||SBCG:150
SSJK||Júlio De Castilho||BR|1|||SBSM:62
SSJL||Bonfim|Fazenda Murará|BR|1|||SYLT:52
SSJM||Chapadão Do Sul|Fazenda Júlio Martins|BR|1|||SBTG:229
SSJO||Corumbá|Fazenda Angico|BR|1|||SBCR:47
SSJP||Colorado|Fazenda Junqueira|BR|1|||SBMG:65
SSJQ||Ribeirão Cascalheira|Fazenda Floresta|BR|1
SSJR||Sorriso|Fazenda São Roque|BR|1|||SBSO:111
SSJS||Brasnorte|Autos do Sangue|BR|1|||SBVH:241
SSJU||Primavera do Leste|Fazenda São Caetano|BR|1|||SBRD:148
SSJV||Corumbá|Fazenda Piratininga|BR|1|||SBCR:173
SSJW||Rio Brilhante|Fazenda Jauru|BR|1|||SBCG:167
SSJX||Corumbá|São Bento|BR|1|||SBCR:86
SSJY||Corumbá|São João|BR|1|||SBRD:202
SSKA||Corumbá|Fazenda Campinas|BR|1|||SBCR:139
SSKB||Aquidauana|Fazenda Tupanciretan|BR|1|||SBCR:145
SSKC||Barra do Bugres|Fazenda Cristiani|BR|1|||SWTS:39
SSKD||Nova Crixás|Fazenda Cristal 2|BR|1|||SBGO:287
SSKE||Cocal|Luís Antônio Fontenele - Cocal da Estação|BR|1|||SBPB:64
SSKG||Campo Grande|Estância Santa Maria|BR|1|||SBCG:16
SSKH||Aral Moreira|Fazenda Karl Hermann Isenberg|BR|1|||SBPP:44
SSKI||Parecis|Fazenda Cristo Rei|BR|1|||SSKW:68
SSKJ||Pau dos Ferros||BR|1|||SJZA:93
SSKK||Capão Da Canoa||BR|1|||SSCN:88
SSKM|CBW|Campo Mourão||BR|1|||SBMG:69
SSKN||Araraquara|Takeo Noguchi|BR|1|||SBAQ:13
SSKO||Brasnorte|Fazenda Matrinchã|BR|1|||SBSO:188
SSKP||Palotina|Copacel|BR|1|||SSGY:44
SSKQ||Nova Crixás|Fazenda Santa Rosa|BR|1|||SBGO:268
SSKR||Paraúna|Fazenda Primavera|BR|1|||SBGO:180
SSKS|QDB|Cachoeira Do Sul||BR|1|||SBSM:79
SSKT||São José|Aeroclube de Santa Catarina|BR|1|||SBFL:14
SSKU||Curitibanos||BR|1|||SBLJ:64
SSKW|OAL|Cacoal||BR|2
SSKX||Estância|SKYJU|BR|1||SNOD|SBAR:56
SSKY||Tangará Da Serra|Fazenda Querência|BR|1|||SWTS:100
SSKZ||Carazinho||BR|1|||SBPF:49
SSLA||Sorriso|Fazenda Alves|BR|1|||SBSO:17
SSLB||Corumbá|Fazenda São Paulino|BR|1|||SBCR:184
SSLD||Corumbá|Fazenda Lourdes|BR|1|||SBCR:104
SSLG||São Luís Gonzaga||BR|1|||SSZR:73
SSLI||Aquidauan|Fazenda Nova Piúva Airstrip|BR|1|||SBCG:110
SSLJ||Pimenteiras do Oeste|Fazenda São Luís|BR|1|||SBVH:116
SSLK||Itapecerica|Fazenda Três Lagoas|BR|1|||SBCF:138
SSLL||Vista Alegre do Abunã|Fazenda Vale Verde|BR|1|||SLGM:147
SSLM||Leopoldo de Bulhões|Estância Acrobata|BR|1|||SBGO:31
SSLN|LOI|Lontras|Helmuth Baungarten|BR|1|||SBNF:94
SSLO||Loanda||BR|1|||SSUM:99
SSLP||Porto Murtinho|Fazenda Lucero Porã|BR|1|||SBDB:144
SSLQ||Corumbá|Fazenda Taiamã|BR|1|||SBRD:192
SSLR||Ladário|Ocorema|BR|1|||SBCR:13
SSLS||Ruy Barbosa||BR|1|||SBLE:84
SSLT|ALQ|Alegrete|Alegrete Novo|BR|1|||SBUG:110
SSLW||Chapadão Do Sul|Fazendas Reunidas Schlatter|BR|1||SSXW|SBTG:237
SSLX||Diamante do Norte|Fazenda Santa Lydia Airstrip|BR|1|||SBMG:124
SSMB||Valença|Fazenda Oriente|BR|1|||SBJF:60
SSMC||Nova Andradina|Fazenda São Miguel da Catequese|BR|1|||SSUM:191
SSMF||Barão de Melgaço|Fazenda Santri|BR|1|||SBCY:176
SSMH||Capão Do Leão|Fazenda Santa Maria|BR|1|||SBPK:27
SSMI||Campo Verde|Fazenda São Miguel|BR|1|||SBCY:126
SSMJ||Maracaju||BR|1|||SBPP:117
SSMK||Eldorado Do Sul|El Dorado|BR|1|||SBPA:25
SSML||Bom Jesus da Lapa|Comandante Jorge Mello|BR|1|||SNBR:194
SSMO||Paraíso das Águas|Fazenda Luma|BR|1|||SBTG:191
SSMR||Manoel Ribas||BR|1||SBMR|SBMG:123
SSMT||Mostardas||BR|1|||SBPA:126
SSMV||Pirassununga|Fazenda Boa Vista|BR|1|||SBAQ:64
SSMW||Peruibe|ICA / Ultraleves|BR|1|Ilha Clube Aerodesportivo||SBSP:85
SSMX||Nova Resende|Fazenda Planalto|BR|1|||SBRP:134
SSMY||São Miguel do Iguaçu||BR|1|||SBFI:34
SSMZ||Comodoro|Fazenda São Mateus|BR|1|||SBVH:137
SSNA||Miranda|Estância Miranda|BR|1|||SBDB:150
SSNB||Naviraí||BR|1|||SSGY:116
SSND||São Félix Do Araguaia|Santa Maria|BR|1
SSNE||Barão de Melgaço|Santa Maria|BR|1|||SBCY:167
SSNF||Colômbia|Fazenda Naisa|BR|1|||SBSR:82
SSNG|QGF|Montenegro||BR|1|||SBPA:44
SSNH|QHV|Novo Hamburgo||BR|1|||SBPA:34
SSNI||Naviraí|Fazenda Novo Rumo|BR|1|||SSUM:107
SSNJ||Aquidauana|Fazenda Primavera|BR|1|||SBCG:167
SSNN||Planalto da Serra|Fazenda Nova Fartura|BR|1|||SBCY:198
SSNO||Aporé|Fazenda Estrela Dalva|BR|1|||SBTG:230
SSNP||Nova Prata||BR|1|||SBCX:60
SSNQ||Nioaque||BR|1|||SBDB:65
SSNR||Coxim|Fazenda Novo Horizonte|BR|1|||SBRD:194
SSNS||Correntina|Fazenda Pajuçara|BR|1|||SNBR:123
SSNT||Wanderley|Fazenda Jacarezinho Nova Terra|BR|1|||SNBR:102
SSNU||Brotas|Santa Isabel|BR|1|||SBAQ:49
SSNV||Corumbá|Fazenda Novo Hamburgo|BR|1|||SBCR:72
SSNY||Cáceres|Fazenda Florida|BR|1|||SLPS:204
SSNZ||Campos Novos Paulista|Paradiso Agropecuária|BR|1|||SBML:50
SSOC||Engenheiro Beltrão|Ivaí Aeroagrícola|BR|1|||SBMG:30
SSOD||Miranda|Fazenda Pouso Alegre|BR|1|||SBDB:111
SSOE|SQX|São Miguel do Oeste|São Miguel do Oeste Hélio Wasum|BR|1|||SSFB:91
SSOG|APX|Arapongas||BR|1|||SBLO:37
SSOI||Pederneiras||BR|1|||SBAE:35
SSOJ||Inocência|Fazenda Estrela|BR|1|||SBTG:86
SSOK||Londrina|14 Bis|BR|1|||SBLO:14
SSOL|VRZ|Lavras|Padre Israel|BR|1|||SBJF:174
SSOM||Bela Vista de Goiás|Embaixador|BR|1|||SBGO:28
SSON||Tacuru|Fazenda Joalice|BR|1|||SSGY:91
SSOO||Camapuã|Fazenda Pontal da Cachoeira|BR|1|||SBCG:122
SSOP||Itaituba|Porquinho Airstrip|BR|1||SNEH|SBIH:208
SSOQ||Aquidauana|Fazenda Barranco Alto|BR|1|||SBCR:172
SSOS||Osório||BR|1|||SSCN:82
SSOT||São Romão|Fazenda Saco da Tapera|BR|1|||SBMK:168
SSOU|AIR|Aripuanã||BR|1|||SSKW:262
SSOW||Frederico Westphalen|Aeroclube de Frederico Westphalen|BR|1|||SBCH:77
SSOX||Pedro Gomes|Fazenda Olho d'Água|BR|1|||SBRD:188
SSOY||Nova Maringá|Fazenda Morada do Sol|BR|1|||SBSO:148
SSOZ||Antônio João|Fazenda Onça Parda|BR|1|||SBPP:32
SSPA||Cariri do Tocantins|Fazenda Marajoara|BR|1|||SBPJ:200
SSPB||Ribas do Rio Pardo|Fazenda São José do Pontal|BR|1|||SBCG:114
SSPC||Cocalinho|Fazenda Santa Júlia|BR|1
SSPD||Comodoro|Fazenda Paraguá|BR|1|||SBVH:231
SSPE||Nobres|Essência Retiro do Rio Cuiabá|BR|1|||SBCY:146
SSPF||Altos|Fly Village|BR|1|||SBTE:35
SSPG|PNG|Paranaguá||BR|1|||SBCT:65
SSPH||Lucas do Rio Verde|Fazenda Santa Lucia|BR|1|||SBSO:68
SSPI|PVI|Paranavaí||BR|1|||SBMG:65
SSPJ||Nova Bandeirantes|Pousada Juruena Airstrip|BR|1|||SBAT:273
SSPL||Palmeira Da Missões|Palmeira das Missões|BR|1|||SBNM:93
SSPM||Porto Murtinho||BR|1|||SBDB:156
SSPN|PBB|Paranaíba||BR|1|||SBTG:132
SSPO||Itaporã|Aplicação Aviação Agrícola II|BR|1|||SBPP:112
SSPP||Montividiu|Fazenda Estreito Ponte de Pedras|BR|1|||SBGO:223
SSPS||Palmas||BR|1|||SBPO:77
SSPT||Palotina||BR|1|||SBTD:40
SSPU||Pontes e Lacerda|Fazenda São João do Ibiporã|BR|1|||SWTS:266
SSPV||Alcinópolis|Fazenda Vera Airstrip|BR|1|||SBRD:175
SSPW||Costa Rica|Fazenda São Paulo|BR|1|||SBRD:237
SSPY||Corumbá|Porto Índio|BR|1|||SLPS:145
SSPZ||Piracicaba|Fazenda Redenção|BR|1|||SBKP:99
SSQA||Comodoro|Fazenda Guaporé|BR|1|||SBVH:117
SSQC||Siqueira Campos||BR|1|||SBLO:139
SSQD||Querência|Fazenda Panamby|BR|1
SSQG||Rondon do Pará|Fazenda Bom Gosto|BR|1|||SBMA:59
SSQI||Sorriso|Santa Anastácia|BR|1|||SBSO:4
SSQJ||Paracatu|Fazenda Buriti 10|BR|1|||SNZR:47
SSQK||Cerqueira César|Fazenda Gávea|BR|1||SDKG|SBAE:119
SSQL||Felixlândia|Fazenda La Poveda|BR|1|||SBCF:133
SSQM||Campo Novo do Parecis|Malibu do Parecis Airstrip|BR|1|||SWTS:170
SSQO||Setubinha|Fazenda Sequóia|BR|1|||SBGV:141
SSQP||Monte Santo||BR|1|||SBUF:164
SSQQ||Campo Grande|Condomínio CLC|BR|1|||SBCG:17
SSQR||Ribas do Rio Pardo|Fazenda Primavera|BR|1|||SBCG:151
SSQS||Barra do Garças|Fazenda Brasil|BR|1
SSQT||Castro||BR|1|||SBPG:46
SSQU||Aquidauana|Fazenda Alegrete - Retiro Carabda|BR|1|||SBCG:116
SSQZ||Luíz Eduardo Magalhães|Mimoso do Oeste|BR|1|||SNBR:96
SSRA||Santa Rosa do Purus||BR|1||SSPQ|SLCO:257
SSRB||Rio Brilhante||BR|1|||SBPP:144
SSRC||Rio Brilhante|Fazenda Santa Inês|BR|1|||SBCG:141
SSRE||Realeza||BR|1|||SSFB:53
SSRF||Castro Alves||BR|1|||SNVB:77
SSRG||Registro|Registro State|BR|1|||SDCO:122
SSRJ||Guaíba|Fazenda do Jacuí|BR|1|||SBPA:13
SSRK||Campo Alegre De Lourdes||BR|1|||SBPL:267
SSRL||Rio Verde de Mato Grosso|Fazenda Rancho Alegre Airstrip|BR|1|||SBCG:196
SSRM||Rio Maria|Fazenda Santos Reis|BR|1|||SBCJ:144
SSRO||Jaborandi|Fazenda Arrojadinho|BR|1|||SNBR:214
SSRP||Marcelândia|Fazenda Agromaster|BR|1|||SBSI:148
SSRS|BRB|Barreirinhas|Barreirinhas National|BR|1||SBRR|SBPB:120
SSRU|SQY|São Lourenço Do Sul||BR|1|||SBPK:46
SSRW||Porangaba|Fazenda J Campos|BR|1|||SDCO:70
SSRZ||Rosário do Sul|Dário Brasil Capoano de Oliveira|BR|1|||SURV:94
SSSA||Bela Vista|Fazenda Sant'Anna do Apa|BR|1|||SBPP:83
SSSB|JBS|São Borja||BR|1|||SARP:141
SSSC|CSU|Santa Cruz do Sul||BR|1|||SBSM:123
SSSD||Soledade||BR|1|||SBPF:72
SSSF||Acreúna|Fazenda Francês|BR|1|||SBGO:149
SSSG||São Gabriel||BR|1|||SBSM:90
SSSH||Corumbá|Fazenda Santo Inácio|BR|1|||SBCR:73
SSSI||Baixa Grande do Ribeiro|Fazenda Manto Verde|BR|1
SSSK||Codó|FC|BR|1|||SBTE:136
SSSM||Itamarati|Matheus Lopes Maia da Silva|BR|1|||SWCA:228
SSSP||Miranda|Fazenda Santa Delfina|BR|1|||SBDB:135
SSSQ||Nova Aurora|Fazenda Mata Roxa|BR|1|||SBCN:64
SSSR||Água Clara|Fazenda Santa Rosa|BR|1|||SBTG:120
SSSS||São Francisco do Sul||BR|1|||SBJV:23
SSST||Santiago||BR|1|||SBNM:123
SSSV||Nova Ubiratã|Fazenda Palmitos|BR|1|||SBSO:179
SSSW||Colniza|Madereira|BR|1|||SBJI:246
SSSY||Nova Andradina|Fazenda Silvana|BR|1|||SSUM:144
SSSZ||Sertanópolis|Sertanópolis Municipal|BR|1|||SBLO:32
SSTA||São Gabriel|Santa Maria|BR|1|||SURV:104
SSTB||Três Barras||BR|1|||SSUV:76
SSTD||André Da Rocha|Fazenda Arco de Canto|BR|1|||SBPF:79
SSTE|TSQ|Torres||BR|1||SBTR|SSCN:99
SSTG||Corumbá|Fazenda Santa Terezinha|BR|1|||SBCR:89
SSTI||Porto Seguro|Arraial d'Ajuda|BR|1|||SBPS:8
SSTJ||Trombudo Central|Walter Ewaldo Siegel|BR|1|||SBLJ:66
SSTK||Iguatemi|Fazenda União de Iguatemi|BR|1|||SSGY:57
SSTL||São Desidério|Fazenda São Sebastião|BR|1||SWXH|SNBR:174
SSTP||Turvelândia|Fazenda Baessa|BR|1|||SBCN:183
SSTQ||Pedra Branca do Amapari|Silvestre|BR|1|||SBMQ:129
SSTR||Morrinhos|Usina CEM|BR|1|||SBCN:71
SSTU||Camapuã|Fazenda Jauru|BR|1|||SBCG:202
SSTV||Sinop|Fazenda Diamantino|BR|1|||SBSI:33
SSTW||Quissamã|Quissamã Airstrip|BR|1|||SBCP:44
SSTY||Cabo Frio|Fazenda Tosana Airstrip|BR|1|||SBCB:36
SSTZ||Aquidauana|Fazenda Sertãozinho Airstrip|BR|1|||SBCR:164
SSUA||Sonora|Fazenda Sonora Estância|BR|1|||SBRD:117
SSUC||Ribas Do Rio Pardo|Fazenda Aurora II|BR|1|||SBTG:178
SSUD||Itaituba|Fazenda Serra Dourada Airstrip|BR|1|||SBIH:181
SSUI||Santa Fé do Araguaia|Fazenda Novo Horizonte|BR|1|||SWGN:59
SSUK||Itapura|Fazenda Menina|BR|1|||SBTG:25
SSUL||São José dos Pinhais|Ultraleve Clube Curitiba|BR|1|||SBCT:6
SSUM|UMU|Umuarama|Orlando de Carvalho|BR|2
SSUQ||Correntina|Fazenda Terra Morena|BR|1|||SNBR:128
SSUR||São Félix do Araguaia|Fazenda Rio Fontoura|BR|1
SSUS||Costa Rica|Uniggel Sementes - Fazenda Santa Maria|BR|1|||SBRD:281
SSUT||Nova Olímpia|Usinas Itamarati|BR|1|||SWTS:30
SSUU||Lagoa Da Confusão|Fazenda Colorado|BR|1|||SBPJ:133
SSUV|UVI|União da Vitória|José Cleto|BR|2
SSUW||Centenário do Sul|Fazenda Palmeiras|BR|1|||SBDN:67
SSUY||Paracatu|Fazenda Fundão|BR|1|||SNZR:30
SSVA||Ladário|Fazenda Visa Estância|BR|1|||SBCR:7
SSVB||São Desidério|Fazenda Ventura IV|BR|1|||SNBR:172
SSVC||Aquidauana|Fazenda Vazante|BR|1|||SBDB:135
SSVD||Juti|Fazenda Brasília do Sul|BR|1|||SBPP:114
SSVE||Tacuru|Fazenda Cerro Verde|BR|1|||SSGY:93
SSVG||Guapé|Condomínio Fly Vila Resort|BR|1|||SBAX:168
SSVH||Ponta Porã|Fazenda Paquetá|BR|1|||SBPP:62
SSVI|VIA|Videira||BR|1|||SSUV:86
SSVJ||Alcinópolis|Fazenda São João|BR|1|||SBRD:174
SSVK||Naviraí|Fazenda Dom Arlindo|BR|1|||SSUM:141
SSVL|TEC|Telêmaco Borba||BR|2||SBTL|SBPG:109
SSVM||Cocos|Fazenda Savannah|BR|1|||SBBR:259
SSVN||Veranópolis||BR|1|||SBCX:47
SSVO||Monções|Usina de Monções|BR|1|||SBAU:43
SSVP||Conceição da Barra|Fazenda São Joaquim Airstrip|BR|1|||SBPS:219
SSVR||Itinga do Maranhão|Adão Veríssimo Airstrip|BR|1|||SBIZ:128
SSVS||Rio Brilhante|Fazenda Sucuri|BR|1|||SBPP:135
SSVT||Russas|Aníbal|BR|1|||SBMS:75
SSVU||Lassance|Fazenda Serra do Cabral|BR|1|||SBMK:124
SSVV||Figueirão|Fazenda Garimpinho|BR|1|||SBCG:199
SSVW||Conquista D'Oeste|Fazenda Galera|BR|1|||SBVH:211
SSVX||Rio Maria|Valeu Boi Leilões|BR|1|||SBCJ:132
SSVY||Pitangueiras|Fazenda Três Barras|BR|1|||SBRP:47
SSWA||São José do Xingu|Fazenda Alvorada I|BR|1
SSWB||Brasília|COOPA-DF|BR|1|||SBBR:42
SSWE||Boa Vista do Incra|Fazenda Fortaleza|BR|1|||SBSM:90
SSWF||Ribas do Rio Pardo|Fazenda Cachoeirinha Airstrip|BR|1|||SBCG:96
SSWG||Baixa Grande do Ribeiro|Fazenda Galiléia|BR|1
SSWH||São Carlos|Dr. Emílio Fehr|BR|1|||SBAQ:34
SSWK||Angélica|Fazenda Cuelhambi|BR|1|||SBPP:179
SSWL||Tianguá|Luiz Aragão|BR|1|||SBJE:119
SSWM||Tiros|Fazenda Platô Azul|BR|1|||SBAX:140
SSWN||São Félix do Araguaia|Fazenda Cayman|BR|1
SSWO||Comodoro|Fazenda Santa Paula|BR|1||SNVW|SBVH:147
SSWP||Delfinópolis|Palmares|BR|1|||SBAX:80
SSWQ||Corumbá|Fazenda Guanandi Airstrip|BR|1|||SBCR:154
SSWR||Rio Brilhante|Fazenda Campana|BR|1|||SBPP:162
SSWS||Caçapava do Sul||BR|1|||SBSM:96
SSWT||Nioaque|Fazenda Vaticano|BR|1|||SBDB:35
SSWW||Corumbá|Fazenda Belém|BR|1|||SBCR:191
SSWX||Santa Cruz do Xingu|Fazenda Rio Xingú|BR|1
SSWZ||Presidente Olegário|Fazenda Dona Neném|BR|1|||SBAX:138
SSXA||Rancho Alegre|Fazenda Congonhas|BR|1|||SBLO:38
SSXB||Itaporanga d'Ajuda|Fazenda Água Boa Maricultura|BR|1|||SBAR:21
SSXC||Porto Murtinho|Fazenda Laguna Porã|BR|1|||SBDB:138
SSXD||Sarandi||BR|1|||SBPF:60
SSXG||Paranapoema|Fazenda Guanabara|BR|1||SSFG|SBDN:91
SSXH|BMS|Brumado|Sócrates Mariani Bittencourt|BR|1||SNBU|SBVC:121
SSXL||Miranda|Laguna|BR|1|||SBDB:91
SSXN||Altamira|Aéreo Amazônia|BR|1|||SBAT:206
SSXO||Presidente Castelo Branco|Pousada das Águias|BR|1|||SBMG:24
SSXP||Ribeirão Cascalheira|Fazenda Sete Barras|BR|1||SWGK
SSXR||Santana do Araguaia|Fazenda Nobel Pará|BR|1|||SBPJ:265
SSXU||Jardim|Fazenda Aurora|BR|1||SSLU|SBDB:35
SSXV||Naviraí|Fazenda Santa Rita|BR|1|||SSUM:125
SSXX|AXE|Xanxerê||BR|1|||SBCH:40
SSXY||Uruçuí|Fazenda Rainha da Serra|BR|1
SSXZ||Iturama|Fazenda Santa Rosa|BR|1|||SBSR:141
SSYA||São Luiz do Norte|Fazenda Tropical|BR|1|||SBBR:176
SSYB||Santa Clara d'Oeste|Fazenda Bela Manhã|BR|1|||SBTG:116
SSYD||Nova Ponte||BR|1||SNNT|SBUL:63
SSYE||Araputanga|Fazenda Roberta|BR|1|||SWTS:135
SSYF||Monte Alegre De Minas|Fazenda do Café|BR|1|||SBUL:52
SSYI||Itaeté|Fazenda Sesmarias|BR|1|||SBLE:80
SSYL||Iguatemi|Fazenda Tuju Puitan|BR|1|||SSGY:91
SSYN||Nova Andradina|Fazenda Guarani|BR|1||SSJH|SSUM:184
SSYO||São Simão|Usina São Simão|BR|1|||SBTG:229
SSYP||Codó|Gessomar|BR|1|||SBTE:135
SSYQ||Anhembi|Fazenda Água das Pedras|BR|1|||SBAQ:94
SSYR||São João dos Patos|José Mendes Ribeiro|BR|1|||SBTE:186
SSYS||Miracatu|Aerodinâmica Aviação Agrícola|BR|1|||SDCO:92
SSYT||Itapiranga||BR|1|||SBCH:102
SSYU||Naviraí|Fazenda Concórdia|BR|1|||SSGY:137
SSYV||Água Clara|Fazenda Progresso|BR|1|||SBTG:167
SSYY||Costa Rica|Fazenda Fundãozinho|BR|1|||SBCG:232
SSZA||Boa Vista|Fazenda Angra dos Reis|BR|1|||SBBV:16
SSZB||Diamantino|Fazenda Chalana|BR|1|||SWTS:63
SSZD||Porto Velho|Zirondi|BR|1|||SBPV:20
SSZF||Corumbá|Fazenda Santa Gertrudes|BR|1|||SBCR:184
SSZG||Água Clara|Fazenda São João|BR|1|||SBTG:209
SSZH||Tacuru|Fazenda Corrientes|BR|1|||SSGY:72
SSZK||Perdizes|Fazenda Água Santa|BR|1|||SBAX:47
SSZL||Brasilândia|Fazenda Córrego Azul|BR|1|||SBTG:91
SSZM||Edéia|Miguel Rodrigues de Barros|BR|1|||SBGO:109
SSZN||Cáceres|Fazenda Carandazal|BR|1|||SWTS:239
SSZO||Santa Maria das Barreiras|Santa Marta I|BR|1|||SBCJ:279
SSZP||Jateí|Fazenda Santa Adriana|BR|1|||SSUM:153
SSZR|SRA|Santa Rosa|Luis Alberto Lehr|BR|2
SSZS||Vila Rica|Fazenda Sucupira|BR|1
SSZT||Águas De Santa Bárbara|Fazenda São João|BR|1|||SBAE:76
SSZV||Pedra Preta|Fazenda Cifrão|BR|1|||SBRD:50
SSZW||Limeira Do Oeste|Usina Coruripe - Filial Limeira do Oeste|BR|1||SJIQ|SBTG:174
SSZX||Pontes e Lacerda|Fazenda Ranchinho do Guaporé|BR|1|||SWTS:290
SSZY||Jaciara|Fazenda Nascente|BR|1|||SBRD:69
STIX||Rio Brilhante|Fazenda Estrela do Sul|BR|1|||SBCG:159
SUAA||Montevideo|Ángel S. Adami|UY|2|||SUMU:22
SUAG|ATI|Artigas||UY|1|||SBUG:86
SUAN||Estancia Anchorena|Anchorena|UY|1|||SABE:52
SUAY||Termas del Arapey||UY|1|||SBUG:137
SUBL||Montevideo|Captain Juan Manuel Boiso Lanza Air Base|UY|1|||SUMU:13
SUBU|BUV|Bella Union|Placeres|UY|1|||SBUG:78
SUCA|CYR|Colonia del Sacramento|Colonia Laguna de Los Patos|UY|1|||SABE:60
SUCD||Cardona||UY|1|||SABE:121
SUCH||Chuy||UY|1|||SULS:196
SUCL||Minas|La Calera|UY|1|||SULS:68
SUCM||Carmelo|Zagarzazú|UY|1|||SABE:66
SUCN||Canelones|Aeroclub Canelones|UY|1|||SUMU:42
SUDU|DZO|Durazno|Santa Bernardina|UY|2|||SUMU:170
SUFB||Fray Bentos|Villa Independencia|UY|1|||SABE:158
SUFL||Florida|Florida Aviation Center|UY|1|||SUMU:85
SUFT||Tacuarembó|Frigorifico Tacuarembó|UY|1|||SURV:92
SUGA||Pando|Military Aeronautical School|UY|1|||SUMU:12
SUGN||Guichón||UY|1|||SURV:223
SUJL||Juan Lacaze||UY|1|||SABE:89
SUJP||José Pedro Varela||UY|1|||SULS:162
SULS|PDP|Punta del Este|Capitan Corbeta CA Curbelo|UY|3
SUME||Mercedes|Ricardo Detomasi|UY|1|||SABE:149
SUMI||Minas|Minas Municipal|UY|1|||SULS:58
SUMO|MLZ|Melo|Cerro Largo|UY|1|||SBPK:191
SUMU|MVD|Montevideo|Carrasco General Cesáreo L. Berisso|UY|4|Ciudad de la Costa
SUNM||Nuevo Berlin|Estancia Nueva Mehlem|UY|1|||SABE:181
SUPC||Paysandú|Charles Chalkling|UY|1|||SAAP:240
SUPE||Maldonado|El Jagüel / Punta del Este|UY|1|||SULS:17
SUPL||Punta Colorada|Centro Aeronáutico Piriápolis|UY|1|||SULS:14
SUPU|PDU|Paysandú|Tydeo Larre Borges|UY|2|||SAAP:236
SURB||Jaguarao|Rio Branco|UY|1|||SBPK:143
SURO||Rocha||UY|1|||SULS:85
SURV|RVY|Rivera/Santana do Livramento|Pres. Gral. Óscar D. Gestido Binational|UY|3
SUSG||Cerro Chato|San Gregorio|UY|1|||SURV:176
SUSJ||San José||UY|1|||SUMU:86
SUSO|STY|Salto|Nueva Hesperides|UY|2|||SBUG:205
SUTB|TAW|Tacuarembo||UY|1|||SURV:96
SUTD||Trinidad|Juan B. Desalvo|UY|1|||SUMU:170
SUTG||Tomás Gomenzoro||UY|1|||SBUG:83
SUTR|TYT|Treinta y Tres||UY|1|||SULS:197
SUVE||Vergara|SAMAN Vergara|UY|1|||SBPK:204
SUVO|VCH|Vichadero||UY|1|||SURV:120
SUYI||Sarandi del Yí|Sarandí del Yí|UY|1|||SUMU:174
SUYN||Young||UY|1|||SABE:220
SVAA|||Araya|VE|1||SVAY|SVCU:23
SVAB||Campamento Arekuna|Antabare|VE|1||SVTE|SVCN:28
SVAC|AGV|Acarigua|Oswaldo Guevara Mujica|VE|2|||SVBM:56
SVAD||Adícora||VE|1||SVAR|SVJC:41
SVAE|||Montellano|VE|1|||SKVP:85
SVAF||Médano Alto|Medano Alto|VE|1|||SKPC:101
SVAH|||Agropecuaria Los Araguaneyes|VE|1||SVGG|SVMT:22
SVAJ|||Cacuri|VE|1|||SKPC:284
SVAL|||Algodonal|VE|1|||SVBI:82
SVAM|||Mata de Caña|VE|1|||SKUC:172
SVAN|AAO|Anaco||VE|2|||SVST:64
SVAO|||Altagracia de Orituco|VE|1|||SVMI:112
SVAP||Apurito||VE|1|||SVBI:206
SVAQ|||Mata Oscura|VE|1|||SVVA:117
SVAS|LPJ|Guayabal|Armando Schwarck|VE|1|||SKPC:87
SVAT||San Fernando de Atabapo||VE|1|||SKPD:32
SVAU|||Agua Clara|VE|1|||SKPC:112
SVAV|||El Alcaravan|VE|1|||SVMT:60
SVAW|||Merecure|VE|1|||SKPC:150
SVAZ|||Mata Palos|VE|1|||SVBI:184
SVBA||Boca de Anaro|Boca Anaro|VE|1|||SVBI:87
SVBC|BLA|Barcelona|General José Antonio Anzoategui|VE|4
SVBD|||Los Camorucos|VE|1|||SVBI:170
SVBE|||Bernal|VE|1|||SKVP:112
SVBF|||El Fuentero|VE|1||SVFT|SKUC:127
SVBG||La Cruz|La Batalla|VE|1|||SVVA:109
SVBH|||Los Belseres|VE|1|||SVVA:96
SVBI|BNS|Barinas||VE|3
SVBJ|||Hato Viejo|VE|1|||SKUC:121
SVBL|||El Libertador Airbase|VE|2|||SVVA:41
SVBM|BRM|Barquisimeto|Jacinto Lara|VE|4
SVBN|||Bocon|VE|1|||SVCN:43
SVBO||Bocono||VE|1||SVBK|SVVL:40
SVBP||San Fernando de Apure|Jobito|VE|1|||SKPC:159
SVBR|||Carbonero|VE|1|||SVVA:86
SVBS|MYC|Maracay|Escuela Mariscal Sucre|VE|2|||SVVA:33
SVBT|||Boquemonte|VE|1|||SVBI:83
SVBU||Bobures|Central Venezuela|VE|1|||SVVL:61
SVBV|||Banco Verde|VE|1|||SVBI:76
SVBW|||Hato El Burro|VE|1|||SVCN:120
SVCB|CBL|Ciudad Bolivar|General Tomas de Heres|VE|2|||SVPR:87
SVCD|CXA||Caicara del Orinoco|VE|2|||SKPC:217
SVCG|CUV|Casigua El Cubo||VE|1|||SKCC:92
SVCH|||Achaguas|VE|1|||SKPC:192
SVCJ||San Carlos||VE|1|||SVVA:90
SVCK||El Poblado|Caño Lucas|VE|1|||SVBM:87
SVCL|CLZ|Guarico|Calabozo|VE|2|||SVVA:147
SVCM||Tinaco|Cañita Mendera|VE|1|||SVVA:74
SVCN|CAJ|Canaima||VE|3
SVCP|CUP|Carúpano|General Francisco Bermúdez|VE|3
SVCQ|||Cazorla|VE|1|||SKPC:216
SVCR|CZE|Coro|José Leonardo Chirinos|VE|3
SVCS||Charallave|Caracas Óscar Machado Zuloaga|VE|2|||SVMI:40
SVCU|CUM|Cumaná|Antonio José de Sucre|VE|3
SVCV||Cunaviche||VE|1|||SKPC:135
SVCW|||Chinazón|VE|1|||SVVL:38
SVCX|||Guachara|VE|1|||SKPC:157
SVCY||Las Campanas|Cuartel Yaruro|VE|1|||SKPC:151
SVCZ||Carrizal|Captain Manuel Ríos Air Base|VE|1|||SVMI:137
SVDB|||Doña Bella|VE|1|||SVVA:106
SVDC|||Cocuiza|VE|1|||SVST:235
SVDF|||Punto Fijo|VE|1|||SKPC:161
SVDG|||Punta Gorda|VE|1|||SVMT:63
SVDP||Santa Elena de Uairén|Hato Divina Pastora Airstrip|VE|1|||SVSE:18
SVDS|||CODSA Airstrip|VE|1|||SVSE:25
SVDU|||Dabajuro|VE|1|||SVJC:102
SVDV|||Hato Veladero|VE|1|||SVMT:33
SVEB|||El Guayabo del Zulia|VE|1|||SVVG:73
SVED|EOR|Bolivar|El Dorado|VE|2|||SVCN:145
SVEE||El Samán de Apure|El Esterero|VE|1|||SVBI:185
SVEF|||Empujeca|VE|1|||SVVA:79
SVEG|||El Guayabo de Cojedes|VE|1|||SVVA:67
SVEK|||El Capitán|VE|1|||SKVP:82
SVEM||El Paraiso||VE|1|||SVBI:36
SVEP|||El Palmar|VE|1|||SVVA:53
SVER|||El Respiro|VE|1|||SKUC:194
SVES||El Samán de Apure||VE|1|||SVBI:185
SVET|||El Manteco|VE|1|||SVPR:107
SVEW|||Encontrados|VE|1||SVEN|SVVG:78
SVEX|||La Esperanza|VE|1|||SVBI:126
SVEY||El Yagual||VE|1|||SKPC:177
SVEZ|EOZ||Elorza|VE|2|||SKUC:137
SVFE||Hacienda Santa Fé||VE|1|||SKVP:122
SVFG||Francisco de Miranda|El Flagelo|VE|1|||SVVA:145
SVFK||La Mosca|La Fe de Cojedes|VE|1|||SVVA:75
SVFL|||Fundación Layera|VE|1|||SKPC:133
SVFM||Caracas|Generalissimo Francisco de Miranda Air Base|VE|2|||SVMI:21
SVFR||Guarico|El Frío|VE|1|||SVBI:169
SVFS|||Fagotrans|VE|1|||SVMI:139
SVFU||San Antonio de Caparo|La Fortuna|VE|1|||SVSO:63
SVFW|||Finca Villa Carrara II|VE|1|||SVMT:67
SVFX|||La Fe de Apure|VE|1|||SKUC:138
SVFY|||Finca Yacurito|VE|1|||SVBM:116
SVFZ||El Lucero|El Lucero del Zulia|VE|1|||SVMC:99
SVGA||La Paragua||VE|1||SVPU|SVCN:87
SVGD|GDO|Guasdualito||VE|2|||SKUC:16
SVGE|||Ganadería Pedernales|VE|1|||SVBM:96
SVGH|||La Guacharaca|VE|1|||SVMI:122
SVGI|GUI||Guiria|VE|2|||SVCP:104
SVGL|||Agua Linda|VE|1|||SKUC:64
SVGP|||Guesipo|VE|1|||SVVA:100
SVGR|||El Milagro Carabobo|VE|1|||SVVA:49
SVGT|||Guasipati|VE|1|||SVPR:131
SVGU|GUQ|Guanare||VE|2|||SVBI:68
SVGX||Independencia|Las Guadalupes|VE|1|||SVST:69
SVGZ|||La Garza|VE|1|||SVBI:142
SVHC|||Hacienda El Caimito|VE|1|||SVMC:67
SVHD|||Hacienda El Calvario|VE|1|||SKVP:97
SVHE|||Hato Rancho Alegre|VE|1|||SVVA:76
SVHG|HGE|Higuerote||VE|1|||SVMI:99
SVHH||Churuguara||VE|1|||SVCR:68
SVHK|||Hato la Guaca|VE|1|||SVVA:85
SVHL|||Hacienda Carutal|VE|1|||SVMI:101
SVHM||Hato Los Mamomes|Hato Los Mamones|VE|1|||SVVA:91
SVHN|||Hato La Chaconera|VE|1|||SVBI:174
SVHP||Las Vegas del Tuy|Hacienda El Paso|VE|1|||SVBM:76
SVHT|||Hato Altamira de Monagas|VE|1|||SVMT:43
SVHX|||Hato La Candelaria|VE|1|||SVVA:165
SVHY|||Hato Las Yeguas|VE|1|||SVVA:170
SVIA|||Los Andes|VE|1||SVAX|SKVP:87
SVIB||La Blanquilla - Isla Margarita|La Blanquilla|VE|1||SVLB|SVMG:121
SVIC|ICA|Ikabarú|Ikabaru|VE|1|||SVSE:70
SVID||Isla Los Roques|Dos Mosquises|VE|1||SVDM|SVRS:30
SVIE|ICC|Isla de Coche|Andrés Miguel Salazar Marcano|VE|2
SVIH||Los Marimares|Hato El Carito|VE|1||SVHR|SVVA:75
SVIM|||Hato El Caimán|VE|1|||SVBI:85
SVIT||Isla La Tortuga|La Tortuga Punta Delgada|VE|1||SVDA|SVBC:110
SVJB|||Hacienda Bella Vista|VE|1||SVWE|SVBI:79
SVJC|LSP|Paraguaná|Josefa Camejo|VE|3
SVJF|||Juan Florencio|VE|1|||SKPC:146
SVJH||Soledad|Juancho|VE|1|||SVPR:93
SVJI|||Hato La Lejanía|VE|1|||SVMT:74
SVJJ||Anzoategui|Curujujul|VE|1|||SKPC:144
SVJL||Guayabal|Fleitera|VE|1|||SKPC:202
SVJM||San Juan de los Morros||VE|2|||SVVA:66
SVJO|||La Vigía Oeste|VE|1|||SVMI:104
SVJT|||Caujarito|VE|1||SVCT|SKPC:125
SVJU|||Hato La Laguna del Junco|VE|1|||SVVA:107
SVJX|||Hato Altamira de Bolívar|VE|1||SVHA|SVPR:92
SVJZ||La Palmita|Hacienda El Oasis|VE|1||SVHO|SVBI:39
SVKA|KAV|Kavanayén|Kavanayen|VE|1|||SVSE:134
SVKB|||La Calzada|VE|1|||SVBI:71
SVKC|||El Cenizo|VE|1|||SVVL:26
SVKG|||La Gran China|VE|1||SVGC|SKVP:111
SVKI||Piscuri||VE|1|||SVSO:27
SVKL||Las Clavellinasmer|Las Clavellinas|VE|1|||SVVL:43
SVKM|KTV|Kamarata||VE|1|||SVCN:81
SVKN|||Caño Negro|VE|1|||SKPC:221
SVKZ|||La Culata|VE|1|||SVVA:109
SVLA||Las Colmenas|Las Adjuntas|VE|1|||SVST:45
SVLC|||La Centella|VE|1||SVTL|SKPC:196
SVLD||Mata de Vino|Las Brisas|VE|1|||SKUC:133
SVLE||La Esmeralda||VE|1|||SKPD:273
SVLF|LFR||La Fria|VE|2|||SKCC:44
SVLG|||Las Majaguas|VE|1|||SVBM:60
SVLH||Banco del Medio|Las Delicias|VE|1|||SKUC:150
SVLI|||La Alcancía|VE|1|||SKPC:126
SVLJ||La Ceiba|La Vieja|VE|1|||SVBC:73
SVLK|||Hato Macolla|VE|1|||SKPC:185
SVLL||El Callao||VE|1||SVEL|SVPR:148
SVLM|||Las Flores|VE|1|||SVMT:39
SVLN|||La Candelaria|VE|1|||SVVA:78
SVLO||Isla La Orchila|La Orchila|VE|2|||SVRS:55
SVLP||Luepa||VE|1|||SVSE:141
SVLS|||Las Corobas|VE|1|||SKPC:115
SVLT|||La Argentina|VE|1|||SVBI:161
SVLU||El Lechozo||VE|1|||SVMI:149
SVLW|||Los Aguacates|VE|1|||SVVA:14
SVLX|||La Yaguita|VE|1|||SKUC:153
SVLY|||La Yagua|VE|1|||SKPC:168
SVLZ|||Las Cruces|VE|1|||SVBI:164
SVMA||Maripa||VE|1||SVNB|SVST:201
SVMB|||El Embrujo|VE|1|||SVMI:221
SVMC|MAR|Maracaibo|La Chinita|VE|4
SVMD|MRD|Mérida|Alberto Carnevalli|VE|2|||SVVG:56
SVME|||Mapire|VE|1|||SVST:148
SVMF|||Mata Charo|VE|1|||SVBI:30
SVMG|PMV|Isla Margarita|Del Caribe Santiago Mariño|VE|4
SVMH|||Morichito II|VE|1|||SVBC:199
SVMI|CCS|Maiquetía|Maiquetía Simón Bolívar|VE|4
SVMJ|||Hacienda Las Lomas|VE|1|||SVVA:83
SVMK|||El Milagro Cojedes|VE|1|||SVVA:102
SVML|||El Milagro Sureste|VE|1|||SKPC:122
SVMM|||Mamón|VE|1|||SVJC:58
SVMN||Mene Grande||VE|1|||SVVL:62
SVMO|||El Milagro Oeste|VE|1|||SKPC:183
SVMP||Ocumare del Tuy|Metropolitano|VE|2|||SVMI:57
SVMQ|||Fundo la Marqueseña|VE|1|||SVBI:32
SVMS|||Guasimal|VE|1|||SKPC:179
SVMT|MUN|Maturín|José Tadeo Monagas|VE|3
SVMU|SFX|Ciudad Guayana|Macagua|VE|1|||SVPR:11
SVMV||Maroa||VE|1|||SKPD:132
SVMW|||Los Malabares|VE|1|||SVSA:25
SVMX||Las Fernández|Mata|VE|1|||SVST:30
SVMY|||Mayupa|VE|1||SVUA|SVCN:8
SVMZ||Mantecal||VE|1|||SVBI:167
SVNA|||Macana|VE|1|||SVMC:80
SVNC|||El Centro|VE|1|||SKPC:180
SVNE|||Las Mercedes|VE|1|||SKUC:93
SVNF||Morichito|Morichitos|VE|1|||SKPC:199
SVNG|||El Mango|VE|1|||SVMC:86
SVNJ|||Mata de Juajua|VE|1|||SVST:191
SVNK|||Hato Mikitole|VE|1|||SVST:87
SVNP|||Marisol|VE|1|||SVBM:106
SVNR|||El Morichal|VE|1|||SKPC:154
SVNT||La Guarandinga|Mata de Turagua|VE|1|||SVBI:143
SVNV|||Las Nieves|VE|1|||SKPC:150
SVNX|||Morichal|VE|1|||SVPR:70
SVOA|||San Lorenzo De Barinas|VE|1|||SVBI:49
SVOB|||San Lorenzo De Falcón|VE|1|||SVVA:117
SVOC|||San Luis Capanaparo|VE|1|||SKPC:127
SVOD|||Santa Ana|VE|1|||SKPC:201
SVOH|||San Silvestre|VE|1|||SVBI:35
SVOI|||Los Indios|VE|1|||SKPC:139
SVOJ|||Ojo de Agua|VE|1|||SVBI:61
SVOK||Oritupano||VE|1|||SVST:79
SVOL||Santa Ana|San Roque|VE|1|||SVST:67
SVON|CBS|Cabimas|Oro Negro|VE|1|||SVMC:51
SVOO|||Hato El Rosero|VE|1|||SVBI:139
SVOP|||Los Oripopos|VE|1|||SKPC:189
SVOQ|||Santa Mónica|VE|1|||SVVA:167
SVOR|||San Ramón|VE|1|||SKPC:243
SVOS|||Los Cocos|VE|1|||SKPC:193
SVOT|||San Pablo de Barinas|VE|1|||SKUC:79
SVOW|||Coco de Mono|VE|1|||SKPC:160
SVOZ|||San Pablo Paeño|VE|1|||SKPC:210
SVPA|PYH|Puerto Ayacucho|Cacique Aramare|VE|2|||SKPC:64
SVPC|PBL|Puerto Cabello|General Bartolome Salom|VE|2|||SVVA:40
SVPD|||Hato La Ponderosa|VE|1|||SKPC:111
SVPE|PDZ|Capure|Pedernales|VE|1|||SVMT:104
SVPG||Pariaguán||VE|1||SVPF|SVST:66
SVPI||Ciudad Piar||VE|1||SVDW|SVPR:105
SVPJ|||Pesurca|VE|1|||SKUC:180
SVPK|||Las Palmeras|VE|1|||SVBI:144
SVPM|SCI|San Cristóbal|Paramillo|VE|2|||SVSA:26
SVPN|||Espino|VE|1|||SVST:210
SVPO|||Hato El Porvenir|VE|1|||SKPC:173
SVPP|PPZ|Puerto Paez||VE|1||SVDZ|SKPC:6
SVPR|PZO|Guyana City|General Manuel Carlos Piar|VE|4
SVPS||San Pedro|Hacienda La Pastora|VE|1|||SVVL:79
SVPT|PTM|Palmarito||VE|2|||SKUC:84
SVPV||Pedraza La Vieja||VE|1|||SKUC:100
SVPW||Pedro María Freites|Pelayo|VE|1|||SVST:54
SVPX|PPH|Paraitepuy de Ikabarú|Paraitepuy Airstrip|VE|1||SVPH|SVSE:39
SVPY|||Palma Sola|VE|1|||SVVA:46
SVPZ|||La Paz|VE|1|||SVBI:184
SVQA|||Santa Rosalía|VE|1|||SVST:226
SVQB|||Santa Elena de Río Claro|VE|1|||SKPC:101
SVQC|||Santa María La Tigra|VE|1|||SKPC:53
SVQD|||Santa Juana|VE|1|||SVST:108
SVQI|||Tucupido|VE|1|||SVBC:148
SVQJ||La Trinidad|La Trinidad de Apure|VE|1|||SKUC:182
SVQK|||Tierra Negra|VE|1|||SVMI:137
SVQL|||El Jabillal|VE|1||SVEJ|SVVL:24
SVQN|||Torunos|VE|1|||SVBI:38
SVQO|||Tocuyito|VE|1|||SVVA:22
SVQP||Miguelón||VE|1|||SVVG:53
SVQQ|||Los Conucos|VE|1|||SVBC:74
SVQR|||El Carrao|VE|1|||SVBI:155
SVQS||San Fernando de Apure|Hato Santa Rita|VE|1|||SKPC:163
SVQT|||El Terrón|VE|1||SVRN|SVMT:43
SVQU||San Isidro|Santa Rosa de Guanare|VE|1|||SVBI:56
SVQW|||Tamatal|VE|1|||SVMI:208
SVQX||El Paso|Tamayare|VE|1|||SVBM:103
SVQY|||Tapaquire|VE|1|||SVST:116
SVQZ|||Santa Rosa de Barinas|VE|1|||SVBI:57
SVRA|||Río de Agua|VE|1|||SVCP:32
SVRB||Tocópero|Cumarebo|VE|1|||SVCR:41
SVRC|||El Rocío|VE|1|||SVVA:98
SVRD||Coco de Mono|El Remanso del Cinaruco Pedroc|VE|1|||SKPC:43
SVRE|||Aracay Abajo|VE|1|||SVST:198
SVRG||La Leona|Rancho Grande de Apure|VE|1|||SKUC:156
SVRH|||Rancho Grande de Táchira|VE|1|||SVSO:8
SVRI||Caño Riecito|Riecito|VE|1|||SKPC:166
SVRK|||Los Arrecifes|VE|1|||SVVA:111
SVRL|||San Pancracio|VE|1|||SVBI:64
SVRM|||Hato La Romereña|VE|1|||SVVA:78
SVRQ|||Rosetta|VE|1|||SKPC:172
SVRR|||Carrao|VE|1|||SVCN:3
SVRS|LRV|Gran Roque Island|Los Roques|VE|2
SVRT|||Corocito|VE|1|||SKPC:153
SVRU|||Roblecito|VE|1|||SVMI:173
SVRW|||Rosario|VE|1|||SVVG:108
SVRX|||Hacienda Río Yaza|VE|1|||SKVP:101
SVRZ|||El Corozo|VE|1|||SVST:214
SVSA|SVZ|San Antonio del Tachira|Juan Vicente Gómez|VE|3
SVSB|SBB|Santa Bárbara|Santa Bárbara de Barinas|VE|1|||SKUC:94
SVSC|||San Carlos Río Negro|VE|1|||SBUA:230
SVSD|||Sabana Dulce|VE|1|||SVBI:68
SVSE|SNV|Santa Elena de Uairén||VE|3
SVSF|||San Antonio De Falcon|VE|1|||SVVA:112
SVSG||Barinas|San Antonio De Barinas|VE|1|||SVBI:19
SVSH|||San Juan de Río Claro|VE|1|||SKPC:115
SVSI||Haoo Piñero|Agropecuaria San Francisco|VE|1|||SVVA:137
SVSK|||Nuestra Señora del Socorro|VE|1|||SVVA:49
SVSL|||Hacienda Santa Elena de Mirand|VE|1|||SVMI:82
SVSM||Punta de Mata|Santa Bárbara de Monagas|VE|1||SVOF|SVMT:52
SVSN||Sabaneta||VE|1||SVOE|SVBI:36
SVSO|STD|Santo Domingo|Mayor Buenaventura Vivas|VE|3
SVSP|SNF|San Felipe|Sub Teniente Nestor Arias|VE|2|||SVBM:71
SVSQ|||San Leonardo|VE|1|||SKPC:132
SVSR|SFD|San Fernando de Apure|San Fernando de Apure Las Flecheras National|VE|2|||SKPC:189
SVST|SOM|El Tigre|San Tomé|VE|3
SVSU|||San Benito|VE|1|||SVMC:45
SVSW|||San Francisco De Carabobo|VE|1|||SVVA:20
SVSX|||San Juan de los Cayos|VE|1|||TNCB:108
SVSY|||San Francisco de Mérida|VE|1|||SVVG:22
SVSZ|STB|San Carlos del Zulia|Miguel Urdaneta Fernández|VE|2|||SVVG:49
SVTB|||Turapa|VE|1|||SVST:173
SVTC|TUV|Tucupita||VE|2|||SVPR:115
SVTD||La Estacada||VE|1|||SVBI:185
SVTF|||La Trinidad de Ferro|VE|1|||SKPC:144
SVTG|||La Tigra|VE|1|||SVBI:199
SVTH||La Trinidad de Orichuna||VE|1||SVTK|SKUC:105
SVTJ||central Matilde||VE|1|||SVBM:56
SVTM|TMO||Tumeremo|VE|2|||SVPR:178
SVTN|||Turen|VE|1||SVTV|SVBM:90
SVTO||Gurí|Tocomita|VE|1|||SVPR:69
SVTP|||Playa Pintada|VE|1|||SVBC:82
SVTT|||La Torta|VE|1|||SVMI:130
SVTU||Turagua||VE|1|||SVBI:142
SVTW||Las Mercedes del Llano|Toromacho|VE|1||SVTY|SVMI:176
SVUC||Cordereño||VE|1||SVDR|SVBI:85
SVUE||San Juan de Manapiare|Manapiare Airstrip|VE|1|||SKPC:187
SVUK|||San Ignacio|VE|1|||SVVA:91
SVUM|URM|Urimán|Uriman|VE|1|||SVCN:99
SVUP||Upata||VE|1|||SVPR:59
SVUQ|WOK|Uonquén|Uon Quen|VE|1|||SVSE:80
SVUR||Zaraza|Cuenca de Unare|VE|1|Zaraza, Guárico|SVCE|SVBC:106
SVUY|||Uruyen|VE|1|||SVCN:75
SVVA|VLN|Valencia|Arturo Michelena|VE|4
SVVB|||Bajo Verde|VE|1|||SVMI:182
SVVD|||Valle Grande|VE|1|||SVVA:225
SVVE|||Venepal|VE|1||SVVV|SVVA:56
SVVG|VIG|El Vigía|Juan Pablo Pérez Alfonso|VE|3
SVVH|||Valle Hondo|VE|1|||SVMT:50
SVVK||Las Queseritas|La Verdad|VE|1|||SKUC:186
SVVL|VLV|Valera|Dr. Antonio Nicolás Briceño|VE|3
SVVM|||Buena Vista del Caño Medio|VE|1|||SKPC:109
SVVP|VDP||Valle de La Pascua|VE|2|||SVBC:174
SVVQ||Quebrada Arriba|Venelac|VE|1|||SVVL:101
SVVR|||Hato La Vergareña|VE|1|||SVCN:105
SVVS|||Villa del Rosario|VE|1|||SVMC:68
SVVX|||Los Venados|VE|1|||SKPC:170
SVWA||Santa Bárbara|Mata de Agua|VE|1|||SKPC:134
SVWB|||La Bananera|VE|1|||SVVA:70
SVWQ||Mijagual|El Pardillero|VE|1|||SVBI:50
SVWX|||El Recreo|VE|1|||SVVA:128
SVXF|||Hato Santa Clara|VE|1|||SKUC:164
SVXS||El Socorro|Hato El Sesenta|VE|1||SVHS|SVST:173
SVXU||La Hoyda|La Guacamaya|VE|1|||SVBI:123
SVYA|||Yaure|VE|1|||SVSO:90
SVYG|||Hoya Grande|VE|1|||SVVG:33
SVYI|||El Yavi|VE|1|||SKPC:194
SVYM|||Macanillal|VE|1|||SKPC:138
SVYP|||Yopita|VE|1|||SKUC:157
SVYU|||Yutaje|VE|1||SVYT|SKPC:166
SVZA|||Santa Bárbara del Amazonas|VE|1||SVOG|SKPD:90
SWAA||Nova Crixás|Fazenda Ykaraí|BR|1|||SBGO:275
SWAD||Bom Jesus de Goiás|Fazenda Santa Adelaide|BR|1|||SBCN:121
SWAE||Alto Alegre|Uaicas|BR|1|||SVSE:251
SWAG||Mateiros|Agrícola Rio Galhão|BR|1|||SNBR:218
SWAI||Icaraíma|Fazenda Santa Luiza|BR|1||SJSL|SSUM:53
SWAJ||Santa Vitória do Palmar|Viatec Aviação Agrícola|BR|1|||SBPK:188
SWAK||São Gabriel da Cachoeira|Assunção do Içana|BR|1|||SBUA:151
SWAL||Itapetininga|Fazenda Santa Albana|BR|1||SDFL|SDCO:82
SWAM||Taquarituba|Fazenda Agropecuária Gomes|BR|1|||SBAE:166
SWAN||Pompéia|Fazenda Jamaica|BR|1|||SBML:36
SWAO||São Gabriel da Cachoeira|Anamoim|BR|1|||SBUA:220
SWAP||Pedra Preta|Sementes Petrovina|BR|1||SSNK|SBRD:76
SWAR||Ribeirão Cascalheira|Fazenda Aruanã|BR|1
SWAS||Sertãozinho|Usina Açucareira Santo Antônio|BR|1||SDTN|SBRP:18
SWAU||Pirajuba|Fazenda Nossa Senhora Aparecida|BR|1|||SBUR:68
SWAV||Palestina de Goiás|Fazenda Vale dos Sonhos|BR|1|||SBGO:237
SWAX||Formosa do Rio Preto|Fazenda Sassapão|BR|1|||SNBR:174
SWAY||Piripiri||BR|1|||SBTE:142
SWAZ||São Gabriel da Cachoeira|Santo Atanázio|BR|1|||SKMU:131
SWBB||Correntina|Castelli Fazenda Sobradinho|BR|1|||SNBR:208
SWBC|BAZ|Barcelos||BR|2
SWBD||Sonora|Fazenda Mundo Acabado|BR|1|||SBRD:152
SWBE|JSB|São Benedito|Walfrido Salmito de Almeida|BR|1|||SBJE:140
SWBF||Pium|Fazenda Boa Fortuna|BR|1|||SBPJ:128
SWBG|LCB|Pontes e Lacerda|André Antônio Maggi|BR|1|||SWTS:217
SWBH||Aquidauana|Fazenda São José do Rancho Grande Airstrip|BR|1|||SBCG:97
SWBI||Cocos|Santa Colomba Cafés|BR|1|||SBMK:278
SWBJ||Canarana|Fazenda Itarema|BR|1
SWBK||São Desidério|Fazenda Paladino|BR|1|||SNBR:144
SWBN||Balsas|Fazenda São Gabriel|BR|1|||SWGN:233
SWBO||Corumbiara|Fazenda Perobal|BR|1|||SBVH:140
SWBP||Colômbia|Fazenda Continental|BR|1|||SBUR:89
SWBQ||Pinheiros|Geraldo Alvino Covre|BR|1|||SBGV:196
SWBR|RBB|Borba||BR|2
SWBS||Rolim de Moura||BR|1|||SSKW:40
SWBT||Nova Andradina|Fazenda Tupi|BR|1|||SBDN:180
SWBV||Boa Vista|Auaris|BR|1
SWBW||Sonora|Fazenda Água Nascente|BR|1|||SBRD:128
SWBX||Itiquira|Fazenda Santo Antônio do Paraíso|BR|1|||SBRD:114
SWBY||Indiara|Fazenda Bela Vista|BR|1|||SBGO:102
SWBZ||Santa Rita de Cássia|Projeto Brasil I|BR|1|||SNBR:84
SWCA|CAF|Carauari||BR|2
SWCB||Campos Belos||BR|1|||SNBR:212
SWCC||Três Lagoas|Candote|BR|1|||SBTG:65
SWCD||Colider||BR|1||SIKC|SBAT:122
SWCE||Formosa do Rio Preto|Fazenda Centúria Austrália|BR|1|||SNBR:149
SWCF||São Félix do Xingu|Fazenda Califórnia|BR|1
SWCH||Jaborandi|Fazenda Jucurutu - Nordeste|BR|1|||SBBR:263
SWCI||Posse|Agropecuária Rio da Prata|BR|1|||SBBR:235
SWCJ||Palmeira do Piauí|Fazenda Campo Alegre|BR|1
SWCO||Cocalinho|Fazenda Continental|BR|1
SWCP||Pontal||BR|1|||SBRP:27
SWCQ|CQS|Costa Marques||BR|1|||SLGM:210
SWCR||Formosa do Rio Preto|Fazenda Canaã|BR|1|||SNBR:201
SWCS||Cristal|Corticeiras|BR|1|||SBPK:90
SWCU||Altamira|Fazenda Curuá|BR|1|||SBAT:244
SWCZ||Ceres||BR|1|||SBGO:149
SWDB||Corumbá|Fazenda Barro Preto|BR|1|||SBCR:102
SWDC||Coração de Maria|Fazenda do Coronel|BR|1|||SBSV:85
SWDD||Santo Antônio do Leverger|Fazenda Colibri|BR|1|||SBRD:83
SWDI||Paranapanema|Aeroagrícola Solo|BR|1|||SDCO:140
SWDM|DMT|Diamantino||BR|1|||SWTS:117
SWDN|DNO|Dianópolis||BR|1|||SNBR:207
SWDQ||Rio Verde de Mato Grosso|Fazenda Baia Grande|BR|1|||SBCG:191
SWDR||Taquarussu|Fazenda Bandeirantes|BR|1||SSTS|SSUM:133
SWDS||Ji-Paraná|Condomínio Aéreo Santos Dumont|BR|1|||SBJI:19
SWDT||Nerópolis|Dezoito|BR|1||SNEO|SBGO:22
SWDU||Caaporã|Destilaria Tabu|BR|1|||SBJP:37
SWDW||Passo Fundo|Fazenda Pessegueiro|BR|1|||SBPF:18
SWDY||Nova Crixás|Fazenda Água Fria|BR|1|||SBGO:243
SWEA||Comodoro|Fazenda Santiago de Compostela|BR|1|||SBVH:86
SWEB||Formosa do Rio Preto|Bahiagliding Airstrip|BR|1|||SNBR:118
SWEC||Aragarças|Estância Araguaia|BR|1|||SBRD:291
SWED||Arapoema|Fazenda Eldorado|BR|1|||SWGN:114
SWEE||Atalaia Do Norte|Estirão do Equador|BR|1|||SBTT:183
SWEF||Cocalinho|Fazenda Europa|BR|1|||SBGO:290
SWEH||Querência|Fazenda Agroplan|BR|1|||SBSI:298
SWEI|ERN|Eirunepé||BR|1|||SBTT:265
SWEJ||Porto Nacional|Associação Tocantinense de Aviação|BR|1|||SBPJ:24
SWEK|CQA|Canarana||BR|1
SWEM||Primavera Do Leste|Emal - Empresa de Mineiração Aripuanã Ltda.|BR|1|||SBRD:232
SWEN||Alta Floresta|Estância Recanto|BR|1|||SBAT:8
SWEO||Rorainópolis|Itapara Sport Fishing|BR|1|||SWBC:202
SWEP||Sertaneja|Estância Punta del Este|BR|1|||SBLO:61
SWEQ||Belém|Clube de Esportes Aéreos e Náuticos do Pará|BR|1|||SBBE:13
SWER||Porto Murtinho|Fazenda Entre Rios|BR|1|||SBDB:68
SWES||Ibiporã|Paraná Experimental Aviation Club|BR|1|||SBLO:6
SWEU|ITI|Itambacuri|Fazenda Americana|BR|1|||SBGV:88
SWEV||Correntina|Fazenda Cambara 1 Airstrip|BR|1|||SNBR:201
SWEW||Porto Esperidião|Fazenda Felicidade|BR|1|||SWTS:183
SWEX||Santa Luzia|Boa Esperança|BR|1|||SNEB:197
SWFA||Cristalina|Fazenda Pamplona|BR|1|||SBBR:53
SWFC||Lucas do Rio Verde|Fazenda Cedro|BR|1||SJPV|SBSO:78
SWFD||Ponta Porã|Fazenda Dom Felipe|BR|1|||SBPP:33
SWFE||Machadinho d'Oeste|Fazenda São Félix|BR|1|||SBJI:175
SWFF||Sapezal|Fazenda Franciosi|BR|1||SWLN|SWTS:177
SWFG||Barra Do Garças|Fazenda Guanabara|BR|1
SWFH||Porto Seguro|Fly Club|BR|1|||SBPS:11
SWFI||Cáceres|Fazenda Santa Paula|BR|1|||SWTS:110
SWFJ||Antônio João|Fazenda Estrela|BR|1|||SBPP:39
SWFL||Santa Terezinha|Fazenda Peixe Bravo|BR|1|||SBPJ:223
SWFM||Goiandira|Fazenda Maiador|BR|1|||SBCN:65
SWFN||Manaus|Flores|BR|1|||SBEG:5
SWFO||Formosa do Rio Preto|Fazenda Santa Maria|BR|1|||SNBR:184
SWFP||Rurópolis|Fazenda Prata|BR|1|||SBIH:69
SWFQ||Porto Nacional|Fazenda Alvorada|BR|1|||SBPJ:37
SWFR||Formosa||BR|1|||SBBR:71
SWFU||Fortuna||BR|1|||SWTS:277
SWFV||Guapé|Terramare|BR|1|||SBAX:172
SWFW||Tabaporã|Fazenda Terra Way - VII|BR|1|||SBSI:61
SWFX|SXO|São Félix Do Araguaia||BR|1|||SBPJ:295
SWFZ||Almas|Fazenda Galiléia|BR|1|||SBPJ:193
SWGC||Ponta Porã|Agricenter|BR|1|||SBPP:15
SWGD||Baixa Grande do Ribeiro|Fazenda Estrela|BR|1
SWGF||Novo Aripuanã|Fazenda Fortaleza|BR|1|||SBMY:233
SWGI|GRP|Gurupi||BR|1|||SBPJ:182
SWGJ||Baianópolis|Fazenda Campo Grande|BR|1|||SNBR:84
SWGL||Getúlio Vargas|AAGV - Associação Aerodesportiva de Getulio Vargas|BR|1|||SBPF:45
SWGN|AUX|Araguaína||BR|3
SWGO||Goianésia|Santa Cecília|BR|1|||SBBR:143
SWGP||Palmeiras De Goiás||BR|1|||SBGO:73
SWGQ||Nova Olímpia|Fazenda Monte Alegre|BR|1|||SWTS:16
SWGS||Nova Maringá|Fazenda Rancho Branco Airstrip|BR|1|||SBSO:172
SWGT||Jandaia|Fazenda Nova|BR|1|||SBGO:121
SWGU||Brasnorte|Fazenda São Gabriel|BR|1|||SBVH:201
SWGV||Água Boa|Fazenda Cocal II|BR|1
SWGW||Jussara|Fazenda Santa Rita do Araguaia|BR|1|||SBGO:287
SWGZ||Tailândia|Fazenda Cangaia|BR|1|||SBTU:125
SWHD||Naviraí|Fazenda Ipuitã|BR|1|||SSUM:105
SWHF||Correntina|Fazenda Chaparral|BR|1|||SNBR:160
SWHJ||Brasiléia|Fazenda Santa Lúcia|BR|1|||SLCO:56
SWHL||Campo Verde|Fazenda Marabá|BR|1|||SBCY:115
SWHM||Alcinópolis|Lobo Agropecuaria|BR|1|||SBRD:223
SWHN||Selvíria|Fazenda Colibri|BR|1|||SBTG:61
SWHO||Capitão Enéas|Fazenda Novo Horizonte|BR|1|||SBMK:63
SWHP|GGB|Água Boa|Frederico Carlos Müller|BR|1
SWHQ||Vila Bela Da Santíssima Trindade|Fazenda Santa Cruz|BR|1|||SWTS:274
SWHR||Presidente Epitácio|Estância Rio Paraná Airstrip|BR|1|||SBDN:86
SWHS||Maurilândia|Fazenda São João|BR|1|||SBCN:192
SWHT|HUW|Humaitá||BR|1|||SBPV:160
SWHU||Racharia|Fazenda Izaura - Usina Cocal|BR|1|||SBDN:68
SWHZ||Carlinda|Fazenda Taquaruçu Retiro|BR|1|||SBAT:55
SWIA||Juruá|Antônio Costa da Silva|BR|1|||SBTF:148
SWIB||Nova Santa Helena|Fazenda Santa Laura|BR|1|||SBSI:135
SWIC||Nova Mutum|Fazenda Rancho Alegre|BR|1|||SBSO:123
SWIE||Jaborandi|Fazenda Planalto das Emas|BR|1|||SNBR:256
SWIH||Novo São Joaquim|Fazenda Felicidade|BR|1|||SBRD:283
SWII|IPG|Santo Antônio do Içá|Ipiranga|BR|1|||SKRA:8
SWIJ||Jaborandi|Fazenda Água Doce|BR|1|||SNBR:228
SWIK||Cocalinho|Fazenda Vanguarda|BR|1|||SBGO:292
SWIL||Pedra Preta|Fazenda Tarumã|BR|1|||SBRD:62
SWIM||Montes Claros De Goiás|Fazenda Três Ranchos|BR|1|||SBGO:267
SWIN||Campo Novo Do Parecis|Fazenda Itamarati Norte|BR|1|||SWTS:75
SWIP||Unaí|Fazenda dos Três Rios|BR|1|||SNZR:73
SWIQ|MQH|Minaçu||BR|2||SBMC|SBBR:260
SWIS||Caseara|Caiapo|BR|1|||SBPJ:198
SWIT||Santa Terezinha de Itaipu|Condomínio de Voo Itaipu - CVI|BR|1|||SBFI:13
SWIV||Almeirim|Águia Branca do Paru|BR|1|||SNYA:80
SWIW||Cocalzinho De Goiás|Fazenda Pirapitinga|BR|1|||SBBR:91
SWIX||Sorriso|JPO|BR|1|||SBSO:17
SWIY|IDO|Cristalândia|Santa Izabel do Morro|BR|1|||SBPJ:290
SWIZ||Nova Alvorada do Sul|Fazenda 7 Reis|BR|1|||SBCG:94
SWJA||Brusque|Fazenda Aero – Amil|BR|1|||SBNF:25
SWJB||Tangará Da Serra|Fazenda Juba|BR|1|||SWTS:74
SWJC||Jaciara||BR|1|||SBRD:73
SWJD||São Domingos|Fazenda Genipapo|BR|1|||SNBR:237
SWJE||Baliza|Fazenda Ibia|BR|1|||SBRD:256
SWJG||Arenápolis|Fazenda Jaraguá|BR|1|||SWTS:20
SWJH||Tapejara|Sementes Beé|BR|1|||SBPF:41
SWJI||Baixa Grande do Ribeiro|Fazenda Maringá|BR|1
SWJL||Itajá|Fazenda Invernada|BR|1|||SBTG:195
SWJM||Novo Alegre|Fazenda Bom Jesus|BR|1|||SNBR:196
SWJN|JIA|Juína||BR|1|||SBVH:208
SWJO||Poxoréo|Fazenda São José|BR|1|||SBRD:132
SWJP||Japurá|Bittencourt|BR|1|||SKLP:20
SWJQ||Paranhos|Fazenda São João|BR|1||SIXQ|SSGY:129
SWJR||Aquidauana|Fazenda Santa Rita Airstrip|BR|1|||SBCG:162
SWJS||Poconé|Santa Rosa Pantanal Hotel|BR|1||SWCT|SBCY:204
SWJU||Dueré|Fazenda Mundo Novo|BR|1|||SBPJ:186
SWJV||Atalaia Do Norte|Palmeiras do Javari|BR|1|||SPQT:159
SWJW|JTI|Jataí||BR|1
SWJX||Gaúcha do Norte|Fazenda Eldorado|BR|1|||SBSO:262
SWJY||São Miguel de Taipu|Professora Francisca Cardoso|BR|1|||SBJP:27
SWJZ||Itaituba|Sítio Primavera|BR|1|||SBIH:250
SWKA||Jussara|Fazenda Canadá|BR|1|||SBGO:246
SWKB||Boca Do Acre|Fazenda Campina|BR|1|||SBRB:95
SWKC|CCX|Cáceres||BR|1|||SWTS:155
SWKE||Formoso Do Araguaia|Cobrape|BR|1|||SBPJ:211
SWKH||Ourilândia do Norte|Aldeia Rio Vermelho Airstrip|BR|1|Krénhêdjã||SBCJ:248
SWKJ||Dom Aquino|Fazenda Mutum|BR|1|||SBRD:132
SWKL||Alto Alegre Dos Parecis|Fazenda Primavera do Terebinto|BR|1|||SSKW:132
SWKM||Tangará Da Serra|Aero Agrícola Rondon|BR|1|||SWTS:7
SWKO|CIZ|Coari|Danilson Municipal|BR|1|||SBTF:195
SWKP||Pontes E Lacerda|Chácara Veneza|BR|1|||SWTS:208
SWKQ|NSR|São Raimundo Nonato|Serra da Capivara|BR|1|||SBPL:230
SWKR||Itarumã|Fazenda Mangue Che II|BR|1|||SBTG:232
SWKT|TLZ|Catalão||BR|1|||SBUL:82
SWKU||São Gabriel da Cachoeira|Cucuí|BR|1|||SBUA:142
SWKV||Itaúba|Fazenda Beira Rio|BR|1|||SBSI:113
SWKX||Cáceres|Corixá|BR|1|||SWTS:213
SWKY||Cristais Paulista|Fazenda Recanto da Cachoeira|BR|1|||SBUR:82
SWKZ||Brasnorte|Fazenda Cerejal|BR|1|||SBVH:227
SWLA||Juína|Fazenda Amália|BR|1|||SBVH:183
SWLB|LBR|Lábrea||BR|2
SWLC|RVD|Rio Verde|General Leite de Castro|BR|1|||SBGO:228
SWLD||Baixa Grande do Ribeiro|Condomínio Milla|BR|1
SWLF||São José Dos Quatro Marcos|Fazenda Dona Laura|BR|1|||SWTS:135
SWLH||Balsas|Fazenda Nova Holanda|BR|1|||SWGN:272
SWLI||Corumbá|Fazenda Santa Maria da Nhecolândia|BR|1|||SBCR:117
SWLJ||Iaciara|Fazenda Santa Cruz|BR|1||SNNJ|SBBR:217
SWLK||Sorriso|Fazenda Boa Vista - Grupo IJP|BR|1|||SBSO:81
SWLM||Candeias do Jamari|Fazenda Mustang II|BR|1|||SBPV:71
SWLP||Aripuanã|Fazenda Rosa - Paralelo 10|BR|1|||SBJI:121
SWLQ||Manicoré|Fazenda Mata Velha|BR|1|||SBMY:235
SWLR||Pontes E Lacerda|Fazenda Miura|BR|1|||SWTS:253
SWLS||Palotina|Fazenda São Luís|BR|1|||SSGY:35
SWLT||Marcelândia|Fazenda Tatiana|BR|1|||SBAT:221
SWLU||Glorinha|CAVOK Airstrip|BR|1|||SBPA:43
SWLV||Santo Antônio Do Leverger|Santo Antônio do Lerverger|BR|1|||SBCY:23
SWLY||Andradina|Chácara MCL|BR|1|||SBTG:37
SWMA||Barreiras|Aero Agrícola Fulanete|BR|1|||SNBR:140
SWMB||Goiatuba|Fazenda Marimbondo|BR|1|||SBCN:108
SWMC||Luís Antônio|Capão da Cruz|BR|1|||SBRP:38
SWME||Mineiros||BR|1|||SBRD:254
SWMG||Monte Alegre De Goiás|Fazenda Caraíbas|BR|1|||SNBR:240
SWMH||Itapirapuã|Fazenda Bom Pastor|BR|1|||SBGO:227
SWMJ||Corumbá|Pousada Xaraés|BR|1|||SBCR:92
SWMK||São Gabriel da Cachoeira|Maturacá|BR|1|||SBUA:130
SWML||Itaituba|Fazenda Nova Santa Rita|BR|1|||SBIH:290
SWMO||Itiquira|Fazenda Maria José|BR|1|||SBRD:97
SWMQ||Aripuanã|Fazenda Muiraquitã|BR|1|||SBJI:150
SWMR||Aquidauana|Fazenda Retirinho Airstrip|BR|1|||SBCG:156
SWMT||Nova Ubiratã|Fazenda Centro da Mata|BR|1|||SBSO:94
SWMU||Pacaraima|Surumu|BR|1|||SVSE:56
SWMV||Mucajaí|Paa-Piu|BR|1|||SBBV:251
SWMW|MBZ|Maués||BR|1|||SBIH:214
SWMX||Barra do Bugres|Fazenda Jauquara|BR|1|||SWTS:66
SWMY||Barra Do Garças|Porto Fluvial Suiá Missu|BR|1|||SBPJ:293
SWMZ||Rondonópolis|Aeroporto Agroer Aviação|BR|1|||SBRD:16
SWNA|NVP|Novo Aripuanã||BR|1|||SWBR:116
SWNB||Luís Eduardo Magalhães||BR|1|||SNBR:76
SWNC||Rio Branco|Fazenda Nictheroy|BR|1|||SBRB:49
SWNE||Nova Viçosa|Nelson Saldanha|BR|1|||SBPS:164
SWNF||Divinópolis do Tocantins|Franciscus|BR|1|||SBPJ:165
SWNH||Aruanã||BR|1|||SBGO:272
SWNJ||Novo São Joaquim|Fazenda Itaquerê|BR|1|||SBRD:207
SWNK|BCR|Boca do Acre|Novo Campo|BR|1||SBBA|SBRB:132
SWNL||Ribas do Rio Pardo|Fazenda São Sebastião|BR|1|||SBCG:73
SWNM||Porto Esperidião|Módulo Aguapei|BR|1|||SWTS:232
SWNN||Tapurah|Fazenda Jandaira Airstrip|BR|1|||SBSO:94
SWNO||São Miguel do Tapuio||BR|1|||SBTE:175
SWNP||Nova Alvorada do Sul|Fazenda Diamante - Jufap Airstrip|BR|1|||SBCG:153
SWNQ|NQL|Niquelândia||BR|1|||SBBR:171
SWNS|APS|Anápolis||BR|1|||SBGO:43
SWNT||Peixoto de Azevedo|Fazenda Aracagi Airstrip|BR|1|||SBSI:273
SWNU||Ipixuna do Pará|Fazenda Maringá|BR|1|||SNEB:89
SWNV||Nova Andradina|Fazenda Baile|BR|1|||SSUM:174
SWNW||Aceguá|Roso|BR|1|||SURV:156
SWNZ||Serra Nova Dourada|Fazenda Jamaica|BR|1
SWOA||Goianira|Arnapar|BR|1|||SBGO:22
SWOB|FBA|Fonte Boa||BR|1|||SBTF:178
SWOC||Caracol|Fazenda São Bento do Bocajá|BR|1|||SBDB:128
SWOF||Alto Taquari|Fazenda Três Fronteiras|BR|1|||SBRD:232
SWOG||São José Do Rio Claro|Fazenda Itaipu|BR|1|||SWTS:114
SWOH||Alto Feliz|Vinícola Don Guerino Heliport|BR|1|||SBCX:25
SWOI||Cáceres|Fazenda Nova Esperança Airstrip|BR|1|||SBCY:134
SWOK||Itiquira|Fazenda Pontal|BR|1|||SBRD:116
SWOL||Barra Do Garças|Fazenda Roncador|BR|1|||SBRD:299
SWOM||Naviraí|Fazenda Marialva|BR|1|||SSUM:110
SWON||Araquari|Clube de Aviação Céu Azul|BR|1|||SBNF:36
SWOO||Campo Verde|Fazenda San Diego|BR|1|||SBRD:138
SWOQ||Palmeira Do Piauí|Fazenda Vista Verde|BR|1
SWOR||Britânia|Fazenda Colorado|BR|1|||SBGO:251
SWOS||Caiapônia|Fazenda Santa Márcia|BR|1||SWFT|SBRD:275
SWOT||Sapezal|Fazenda Planorte|BR|1|||SWTS:176
SWOV||Pedra Preta|Fazenda Girassol|BR|1|||SBRD:78
SWOW||Moura||BR|1|||SWBC:153
SWOX||São Carlos|Fazenda Pixoxó|BR|1|||SBAQ:26
SWOY||Pedro Gomes|Fazenda Santa Rita I|BR|1|||SBRD:147
SWOZ||Campo Verde|Fazenda Santo Antônio|BR|1|||SBCY:136
SWPA||Nova Ubiratã|Fazenda Futura|BR|1|||SBSO:97
SWPB||Costa Marques|Forte Príncipe da Beira|BR|1|||SLGM:200
SWPC||São Gabriel da Cachoeira|Parí Cachoeira|BR|1|||SKMU:120
SWPD||Cantá|Pouso da Águia|BR|1|||SBBV:12
SWPE||Carlinda|Fazenda Lagoa da Mata|BR|1|||SBAT:64
SWPF||Pimenteiras do Oeste|Fazenda Primavera|BR|1|||SBVH:150
SWPH||Barra do Garças|Fazenda Paulo Abreu|BR|1
SWPI|PIN|Parintins||BR|1|||SBTB:138
SWPK||Poconé||BR|1|||SBCY:90
SWPL||Chapada Dos Guimarães|Posto Leonardo Vilas Boas|BR|1|||SBSI:242
SWPM|PBQ|Pimenta Bueno||BR|1|||SSKW:34
SWPN||Santo Antônio do Leverger|Pesqueiro Pantanal|BR|1|||SBRD:119
SWPP||Mozarlândia|Fazenda Pica-Pau|BR|1|||SBGO:260
SWPQ|PBX|Porto Alegre do Norte|Fazenda Piraguassu|BR|1
SWPR||Pires do Rio||BR|1|||SBCN:54
SWPS||Prudente de Morais|Fazenda das Perobas|BR|1|||SBCF:25
SWPT||São Desidério|Ventura I Airstrip|BR|1||SNVK|SNBR:181
SWPV||Piracuruca|Dom Rodrigo El Manco Airstrip|BR|1|||SBPB:117
SWPW||Caçapava|CEA-Caçapava|BR|1|||SBSJ:23
SWPX||Belterra||BR|1|||SBSN:33
SWPY||Primavera Do Leste||BR|1|||SBRD:121
SWPZ||Posse|Oriçanga de Abreu|BR|1|||SBBR:258
SWQC||Rio Verde|Fazenda São Francisco|BR|1|||SBGO:270
SWQE||São Gabriel da Cachoeira|Querari|BR|1|||SKMU:48
SWQG||Maracaju|Fazenda Sossego|BR|1|||SBDB:109
SWQH||Aripuanã|Agropecuária Nova Santana|BR|1|||SBJI:164
SWQI||Zacarias|Fazenda Caturama Airstrip|BR|1|||SBAU:40
SWQJ||Laranjal do Jari|Coomerj Airstrip|BR|1|||SNYA:159
SWQK||Ourilândia do Norte|Aldeia Kubenkrankenh Airstrip|BR|1
SWQL||Doverlândia|Fazenda Três Companheiros|BR|1|||SBRD:264
SWQN||Castanheira|Fazenda Nego Velho|BR|1|||SBVH:262
SWQO||Frutal|Fazenda Renascença Airstrip|BR|1|||SBSR:70
SWQP||Junqueirópolis|Rio Vermelho Açucar e Álcool|BR|1|||SBTG:70
SWQQ||Sete Quedas|Fazenda Taquarussu Airstrip|BR|1|||SSGY:83
SWQS||Ribas do Rio Pardo|Fazenda Santa Rosa|BR|1|||SBCG:139
SWQT||Cotriguaçu|Fazenda São Nicolau|BR|1|||SBAT:233
SWQU||Vila Bela da Santíssima Trindade|Fazenda Guaporé|BR|1|||SBVH:212
SWQW||Alta Floresta|Fazenda Bacaeri|BR|1|||SBAT:82
SWQX||Água Clara|Fazenda Cachoeira|BR|1|||SBCG:187
SWQY||Porto de Moz|Fazenda Peturú|BR|1|||SBHT:64
SWRA||Nova Monte Verde|Fazenda Bela Vista|BR|1|||SBAT:99
SWRB||Campinas do Sul|Fazenda Santa Rita Airstrip|BR|1|||SBCH:64
SWRC||Ribeirão Cascalheira|Fazenda Sevilha|BR|1
SWRD||Alto Garças|Chácara Rondoagro|BR|1|||SBJI:134
SWRE||Alto Garças|Fazenda Renovo|BR|1|||SBRD:129
SWRF||Pedreiras|Francisco Ramalho|BR|1|||SBTE:198
SWRG||Guajará-Mirim|Fazenda Rancho Maria e Tereza|BR|1|||SLGM:18
SWRH||São Desidério|Fazenda Aurora|BR|1|||SNBR:143
SWRI||Querência|Fazenda Roncador I|BR|1
SWRL||Corumbiara|Fazenda Pouso Redondo|BR|1|||SBVH:108
SWRM||Cacoal|Fazenda Remanso|BR|1|||SSKW:53
SWRO||Porto Velho|Aeroclube de Rondônia|BR|1|||SBPV:11
SWRP||Apiacás|Teles Pires Lodge|BR|1|||SBAT:182
SWRQ||Teresina|Aero Park|BR|1|||SBTE:17
SWRS||Rondonópolis|Fazenda Santa Mônica|BR|1|||SBRD:43
SWRT||Santa Rita Do Araguaia|Fazenda Santa Rita|BR|1|||SBRD:184
SWRU||Novo Progresso|Grupo Rotta Airstrip|BR|1
SWRW||Mirassol D'Oeste|Fazenda Santa Alice|BR|1|||SWTS:121
SWRX||Nova Mutum|Fazenda Ribeiro do Céu|BR|1||SWYP|SBSO:165
SWRY||Porto Estrela|Fazenda Santa Maria|BR|1|||SWTS:120
SWRZ||Nortelândia|Fazenda Arrossensal|BR|1|||SWTS:86
SWSA||Londrina|Fazenda Santa Maria|BR|1|||SBLO:27
SWSC||Paraíso das Águas|Fazenda São Carlos|BR|1|||SBCG:218
SWSD||Araguaiana|Fazenda Santo Antônio|BR|1|||SBGO:299
SWSF||Vila Bela Da Santíssima Trindade|Fazenda São Francisco|BR|1|||SBVH:282
SWSG||Campos De Júlio|Fazenda Simarelli|BR|1|||SBVH:132
SWSH||Paredão de Minas|Fazenda Agropecuária Nossa Senhora Aparecida Airstrip|BR|1|||SNZR:136
SWSI||Jacareacanga|Pousada Amazônia Fishing Lodge Airstrip|BR|1|||SBAT:131
SWSJ||Sapezal|Fazenda São José|BR|1||SIAF|SBVH:175
SWSL||Lucas Do Rio Verde|Aviação Estrela Bôscoli|BR|1||SICO|SBSO:103
SWSM||Diamantino|Sulina Sementes|BR|1|||SWTS:85
SWSN||Pontes e Lacerda|Fazenda São Valentim|BR|1|||SWTS:205
SWSP||Paranatinga|Sopave Norte|BR|1|||SBSO:172
SWSQ||São Gabriel da Cachoeira|São Joaquim|BR|1|||SKMU:106
SWSU||Naviraí|Fazenda Santa Umbelina Airstrip|BR|1|||SSUM:109
SWSV||Cocalinho|Fazenda Santa Sílvia|BR|1
SWSX|XIG|Xinguara|Xinguara Municipal|BR|1|||SBCJ:108
SWSZ||Nova Bandeirantes|Fazenda Santa Luzia|BR|1|||SBAT:215
SWTB||Santa Terezinha de Itaipu|Tarobá Airstrip|BR|1|||SBFI:5
SWTC||Brasilândia|Fazenda Beatriz|BR|1|||SBTG:56
SWTD||Nova Bandeirantes|Fazenda Nova Agropecuária|BR|1|||SBAT:232
SWTG||Santo Antônio do Aracanguá|Fazenda Santa Marina|BR|1|||SBAU:50
SWTI||Nova Lacerda|São Vicente|BR|1|||SBVH:206
SWTK||Vila Bela da Santíssima Trindade|Fazenda Santa Maria do Guaporé|BR|1|||SBVH:169
SWTL||Pimenta Bueno|Fazenda Corumbiara|BR|1|||SSKW:114
SWTN||Araputanga|Fazenda Arapucel|BR|1|||SWTS:145
SWTO||Paraíso Do Tocantins||BR|1|||SBPJ:64
SWTP|IRZ|Santa Isabel do Rio Negro|Tapuruquara|BR|2
SWTQ||Rio Quente|Rio Quente Resorts|BR|1|||SBCN:17
SWTR||São Gabriel da Cachoeira|Taraquá|BR|1|||SBUA:176
SWTS|TGQ|Tangará da Serra||BR|2
SWTU|AZL|Sapezal|Fazenda Tucunaré|BR|1|||SBVH:159
SWTY||Taguatinga||BR|1|||SNBR:156
SWTZ||Ribas do Rio Pardo|Fazenda Santo Antônio - Zampieri|BR|1|||SBCG:122
SWUA|SQM|São Miguel do Araguaia||BR|1
SWUB||Araçás|Belo Horizonte|BR|1|||SBSV:83
SWUC||Campo Novo do Parecis|Fazenda Ouro Verde II|BR|1|||SWTS:136
SWUD||Cláudio||BR|1|||SBCF:126
SWUE||Nova Canaã do Norte|Fazenda Tapayuna|BR|1|||SBAT:95
SWUH||Cáceres|Fazenda Primavera|BR|1||SWGH|SBCY:174
SWUJ||São Gotardo||BR|1|||SBAX:93
SWUK||São Gabriel da Cachoeira|Uapuí Cachoeira|BR|1|||SKMU:114
SWUL||Ananás|Fazenda Furna Azul|BR|1|||SWGN:114
SWUN||Inocência|Fazenda União|BR|1|||SBTG:167
SWUQ||Alto Alegre|Surucucu|BR|1
SWUR||Cáceres|Fazenda Ressaca|BR|1|||SWTS:172
SWUU||Água Clara|Fazenda Três Marias|BR|1||SSZU SJTE|SBTG:199
SWUV||Sebastião Leal|Fazenda Progresso|BR|1
SWUW||Barra do Bugres|Fazenda Okuhara|BR|1|||SWTS:82
SWUY||Poconé|Fazenda Videira|BR|1|||SBCY:174
SWUZ||Luziânia|Brigadeiro Araripe Macedo|BR|1|||SBBR:44
SWVC|VLP|Vila Rica||BR|1
SWVF||Vila Bela da Santíssima Trindade|Fazenda Santo Antônio Guaporé|BR|1
SWVJ||Comodoro|Fazenda São Judas Tadeu|BR|1|||SBVH:102
SWVK||Nova Ubiratã|Fazenda Vale do Rio Celeste|BR|1|||SBSO:72
SWVN||Itu|Clube de Voo Fazenda Novo Horizonte|BR|1|||SBKP:34
SWVO||Ribas do Rio Pardo|Fazenda Goaçu Airstrip|BR|1|||SBCG:146
SWVS||Vila Bela da Santíssima Trindade|Baia do Padre|BR|1
SWVU||Rio Brilhante|Fazenda Ramalhete|BR|1|||SBCG:141
SWVV||Vila Bela da Santíssima Trindade|Fazenda Bela Vista|BR|1
SWVW||Formiga|Furnaspark Resort|BR|1|||SBAX:178
SWVX||Aripuanã|Fazenda Guariba Airstrip|BR|1|||SBJI:199
SWVY||Sete Quedas|Fazenda Floresta Negra|BR|1||SSQF|SSGY:59
SWVZ||Nobres|EMAL - Empresa de Mineração Aripuanã Ltda|BR|1|||SBCY:104
SWWA||Porangatu||BR|1
SWWE||Piên|M. Baumann|BR|1|||SBCT:65
SWWF||Uberaba|Fazenda Inhumas do Chapadão|BR|1|||SBUL:47
SWWH||Angélica|Fazenda Marca Salto Airstrip|BR|1|||SBCG:186
SWWI||General Carneiro|Fazenda Fortaleza|BR|1|||SBRD:158
SWWM||Mantena||BR|1|||SBGV:110
SWWP||Corumbaíba|Fazenda Pontal|BR|1|||SBCN:71
SWWQ||Mundo Novo|Fazenda Santa Maria|BR|1
SWWR||São Raimundo das Mangabeiras|Fazenda Roseira|BR|1|||SBIZ:257
SWWT||Morada Nova de Minas|Sílvio Gonçalves de Mello|BR|1|||SBCF:177
SWWU||Uruaçu||BR|1|||SBBR:194
SWWV||Barão de Melgaço|Posto de Proteção Ambiental Santa Maria|BR|1|||SBCY:117
SWWW||Barão de Melgaço|Posto de Proteção Ambiental São Luiz|BR|1|||SBCY:115
SWWX||Barão de Melgaço|Posto de Proteção Ambiental São Joaquim|BR|1|||SBCY:125
SWWY||Barão de Melgaço|Posto de Proteção Ambiental Espírito Santo|BR|1|||SBCY:105
SWWZ||General Carneiro|Fazenda WSA|BR|1|||SBRD:190
SWXA||Jussara|Fazenda Canadazinho|BR|1|||SBGO:293
SWXB||Campo Verde|Fazenda Jangada Airstrip|BR|1|||SBCY:108
SWXC||Cerejeiras|Fazenda Tropical|BR|1|||SBVH:132
SWXD||São Félix do Araguaia|Joatão do Colorado|BR|1||SWJT
SWXE||Campinápolis|PCH Paranatinga II|BR|1
SWXF||São Desidério|Fazenda Triflora|BR|1|||SNBR:84
SWXG||Caiapôni|Fazenda Cachoeirinha|BR|1|||SBGO:267
SWXJ||Cuiabá|Chácara São José|BR|1|||SBCY:14
SWXK||Aparecida do Rio Doce|Fazenda Santa Thereza|BR|1||SDTQ|SBGO:276
SWXL||Inocência|Fazenda Santa Maria|BR|1|||SBTG:118
SWXM|MBK|Matupá|Orlando Villas Boas Regional|BR|1|||SBAT:131
SWXN||Montividiu|Fazenda Bom Jardim|BR|1|||SBGO:229
SWXO||São Félix do Xingu|Fazenda Porto Seguro|BR|1
SWXP||Itaituba|Gold Bravo Airstrip|BR|1|||SBIH:208
SWXQ|LIP|Lins||BR|2||SBLN|SBML:63
SWXR||Santana|Flights Ranch Airstrip|BR|1|||SNBR:146
SWXS||Santo Antônio do Leverger|Fazenda Poças|BR|1|||SBCY:58
SWXT||Santa Filomena|Fazenda Parnaguá Airstrip|BR|1
SWXU||Brasília|E-AR|BR|1|||SBBR:27
SWXV|NOK|Nova Xavantina|Xavantina|BR|1
SWXW||São Desidério|Fazenda Montani Bahia|BR|1|||SNBR:155
SWXX||Uberlândia|Fazenda Canadá|BR|1|||SBUL:21
SWXZ||Comodoro|Fazenda Taquarussu|BR|1|||SBVH:72
SWYA||Ribas do Rio Pardo|Fazenda Santa Helena|BR|1|||SBCG:143
SWYC||Vila Bela da Santíssima Trindade|Fazenda Rancho Alegre I|BR|1
SWYE||Alegrete|Fazenda São Lourenço Airstrip|BR|1|||SBUG:124
SWYG||Piraquara|Graciosa|BR|1||SJQE|SBCT:18
SWYH||Araputanga|Fazenda Aliança|BR|1|||SWTS:117
SWYJ||Campos dos Goytacazes|San Martin|BR|1|||SBCP:35
SWYK||Poconé|Fazenda Ilha Camargo|BR|1|||SBCY:164
SWYL||Itapipoca|Fazenda Carrapato|BR|1|||SBJE:104
SWYM||Conquista d'Oeste|Fazenda Anhanguera|BR|1|||SWTS:216
SWYN|IUP|Apuí||BR|1|||SBMY:219
SWYO||Adamantina|Usina Branco Peres|BR|1|||SBAU:73
SWYQ||São Félix do Xingu|Fazenda Brusque|BR|1
SWYR||Jauru|Fazenda Nossa Senhora do Pillar|BR|1|||SWTS:164
SWYS||Frutal|Usina Cerradão|BR|1|||SBSR:103
SWYU||Correntina|Fazenda Sagarana|BR|1|||SNBR:224
SWYV||Ibirá|Clube Aerodesportivo de Ibirá|BR|1|||SBSR:36
SWYW||Alto Garças|Fazenda Adriana|BR|1|||SBRD:99
SWYX||Lucas do Rio Verde|Fazenda Zancchetin|BR|1|||SBSO:78
SWYY||Nova Xavantina|Fazenda Nova Viena|BR|1
SWZA||Juara|Agrosan|BR|1|||SBVH:259
SWZC||Porto Esperidião|Fazenda Corixo|BR|1|||SWTS:235
SWZD||Jandaia|Fazenda Denusa Destilaria Nova União|BR|1|||SBGO:120
SWZE||Pontes E Lacerda|Fazenda Tamboril|BR|1|||SWTS:213
SWZG||Porto Esperidião|Fazenda Lagoa Encantada|BR|1|||SWTS:217
SWZH||Colatina|Fazenda XV de Outubro|BR|1|||SBVT:97
SWZL||Rio Verde|Base Aeroverde|BR|1|||SBGO:223
SWZM||Porto dos Gaúchos|Fazenda América Airstrip|BR|1|||SBSI:109
SWZN||Água Boa|Fazenda Tunica|BR|1
SWZO||Campo Verde|Fazenda Lagoa Funda|BR|1|||SBCY:110
SWZP||São José do Povo|Fazenda Vale Rico|BR|1|||SBRD:60
SWZQ||Jussara|Fazenda Jussara|BR|1|||SBGO:216
SWZR||Alta Floresta|Fazenda Sertaneja|BR|1|||SBAT:21
SWZS||Cáceres|Fazenda Nova Larga|BR|1|||SBCY:201
SWZT||Paraopeba|Fazenda do Brejo|BR|1|||SBCF:68
SWZV||Correntina|Fazenda Integrada|BR|1|||SNBR:221
SWZX||Macaúbas|Selma Nunes|BR|1|||SBLE:154
SWZY||Brasnorte|Fazenda Sete Estrelas|BR|1|||SBVH:238
SYAG||Anna Regina||GY|1|||SYEC:70
SYAH|AHL|Aishalton||GY|1|||SYLT:113
SYAL||Albion||GY|1|||SMWA:90
SYAN|NAI|Annai||GY|1|||SYLT:99
SYAP||Apoteri||GY|1|||SYLT:150
SYAW||Awaruwaunau||GY|1|||SYLT:104
SYBE|BCG|Kumaka|Bemichi|GY|1|||SYEC:132
SYBG||Banagara Island|Baganara|GY|1|||SYCJ:41
SYBL||Blairmont||GY|1|||SYCJ:83
SYBR|BMJ|Baramita||GY|1|||SYCJ:265
SYBS||Bath Settlement|Fort Wellington|GY|1|||SYCJ:73
SYBT|GFO|Bartica|Bartica A|GY|1|||SYCJ:47
SYCJ|GEO|Georgetown|Cheddi Jagan|GY|4||SYGT
SYCP|||Cipo Airstrip|GY|1|||SYKA:72
SYDW||Dadanawa||GY|1|||SYLT:68
SYEB||Ebini||GY|1|||SYCJ:116
SYEC|OGL|Ogle|Eugene F. Correia|GY|3||SYGO
SYEK|||Ekereku Bottom|GY|1|||SYKA:203
SYHC||Anna Regina|Krishna Sankar|GY|1|||SYEC:70
SYIB|IMB|Imbaimadai||GY|1|||SYKA:107
SYKA|KAI|Kaieteur Falls|Kaieteur|GY|3
SYKE|||Kwebana|GY|1|||SYEC:141
SYKI||Kaow Island||GY|1|||SYCJ:41
SYKK||Kurukabaru||GY|1|||SYKA:69
SYKM|KAR|Kamarang||GY|1|||SYKA:146
SYKN|||Kaikan|GY|1|||SVSE:180
SYKR|KRM|Karanambo||GY|1|||SYLT:66
SYKS|KRG|Karasabai||GY|1|||SYLT:78
SYKT|KTO|Kato||GY|1|||SYKA:70
SYKW||Kwakwani||GY|1|||SYCJ:139
SYKZ|KKG|Konawaruk||GY|1|||SYKA:56
SYLD||Linden||GY|1|||SYCJ:59
SYLP|LUB|Lumid Pau||GY|1|||SYLT:116
SYLT|LTM|Lethem||GY|3
SYMB|USI|Mabaruma||GY|1|||SYEC:241
SYMD|MHA|Mahdia||GY|1|||SYKA:39
SYMK|VEG|Maikwak||GY|1|||SYKA:48
SYMM|MYM|Monkey Mountain||GY|1|||SYKA:82
SYMN||Manari||GY|1|||SYLT:26
SYMP||Mountain Point||GY|1|||SYLT:45
SYMR|MWJ|Matthews Ridge||GY|1|||SYCJ:240
SYMW||Marurawana||GY|1|||SYLT:101
SYNA|QSX|New Amsterdam||GY|1|||SYCJ:91
SYOR|ORJ|Orinduik||GY|1|||SYKA:79
SYPK|PKM|Port Kaituma||GY|1|||SYEC:222
SYPL|PIQ|Pipillipai||GY|1|||SYKA:101
SYPM|PMT|Paramakatoi||GY|1|||SYKA:59
SYPR|PRR|Paruima||GY|1|||SVSE:141
SYSC|SDC|Sand Creek||GY|1|||SYLT:53
SYSK|SKM|Skeldon||GY|1|||SMWA:53
SYTW|||Tassawani|GY|1|||SYEC:181
SYVB|||Von Better|GY|1|||SYCJ:72
SYWI||Wichabai||GY|1|||SYLT:63
SYYS|||Yakishuru|GY|1|||SYCJ:191
TAPA|ANU|Antigua|V. C. Bird|AG|4|Osbourn
TAPB|BBQ|Codrington|Burton-Nibbs|AG|3
TAPT||Coco Point|Coco Point Lodge Airstrip|AG|1|||TAPB:8
TBPB|BGI|Bridgetown|Grantley Adams|BB|4
TCYT|||Crystal Brook|AU|1|||YBCS:149
TDCF|DCF|Canefield||DM|3
TDPD|DOM|Marigot|Douglas-Charles|DM|3
TFFA|DSD|Grande Anse|La Désirade|GP|2
TFFB|BBR|Basse-Terre|Basse-Terre Baillif|GP|2
TFFC|SFC|St-François||GP|2
TFFF|FDF|Fort-de-France|Martinique Aimé Césaire|MQ|4
TFFG|SFG|Grand Case|Grand Case-l'Espérance|MF|3
TFFJ|SBH|Gustavia|St. Jean|BL|3
TFFM|GBJ|Grand-Bourg|Marie-Galante|GP|3
TFFR|PTP|Pointe-à-Pitre|Maryse Condé|GP|4
TFFS|LSS|Les Saintes|Terre-de-Haut|GP|1|||TFFB:24
TGPY|GND|Saint George's|Maurice Bishop|GD|4
TGPZ|CRU|Carriacou Island|Lauriston|GD|2
TIST|STT|Charlotte Amalie|Cyril E. King|VI|4
TISX|STX|Christiansted|Henry E. Rohlsen|VI|3
TJAB|ARE|Arecibo|Antonio Nery Juarbe Pol|PR|2|||TJBQ:48
TJBQ|BQN|Aguadilla|Rafael Hernández|PR|3||TJFF
TJCP|CPX|Culebra|Benjamin Rivera Noriega|PR|3
TJIG|SIG|San Juan|Fernando Luis Ribas Dominicci|PR|3
TJMZ|MAZ|Mayaguez|Eugenio Maria De Hostos|PR|3
TJPS|PSE|Ponce|Mercedita|PR|3
TJRV|NRR|Ceiba|José Aponte de la Torre|PR|3||TJNR
TJSJ|SJU|San Juan|Luis Munoz Marin|PR|4
TJVQ|VQS|Vieques|Antonio Rivera Rodriguez|PR|3
TKPK|SKB|Basseterre|Robert L. Bradshaw|KN|4
TKPN|NEV|Charlestown|Vance W. Amory|KN|3
TLPC|SLU|Castries|George F. L. Charles|LC|3
TLPL|UVF|Vieux Fort|Hewanorra|LC|4
TNCA|AUA|Oranjestad|Queen Beatrix|AW|4
TNCB|BON|Kralendijk|Flamingo|BQ|4
TNCC|CUR|Willemstad|Hato|CW|4
TNCE|EUX|Oranjestad|F. D. Roosevelt|BQ|3
TNCM|SXM|Sint Maarten|Princess Juliana|SX|4
TNCS|SAB|Zion's Hill|Juancho E. Yrausquin|BQ|3
TQPF|AXA|The Valley|Clayton J. Lloyd|AI|3
TRPG|MNI|Montserrat|John A. Osborne|MS|4|Gerald's Park
TTCP|TAB|Scarborough|A.N.R. Robinson|TT|4
TTPP|POS|Port of Spain|Piarco|TT|4
TUPA|NGD|Anegada|Captain Auguste George|VG|1|||TUPW:33
TUPJ|EIS|Tortola|Terrance B. Lettsome|VG|4|Beef Island
TUPW|VIJ|Spanish Town|Virgin Gorda|VG|3
TVSA|SVD|Kingstown|Argyle|VC|4
TVSB|BQU|Bequia|J F Mitchell|VC|3
TVSC|CIW|Canouan||VC|3
TVSM|MQS|Lovell|Mustique|VC|3
TVSU|UNI|Union Island||VC|3
TXKF|BDA|Hamilton|L.F. Wade|BM|4
UAAA|ALA|Almaty||KZ|4
UAAC||Otegen Batyr|Bayserke|KZ|1|||UAAA:10
UAAH|BXH|Balkhash||KZ|3
UAAL|USJ|Usharal||KZ|2
UAAM||Bakhar|Chundzha|KZ|1|||UCFK:147
UAAR|BXJ|Boralday||KZ|1|||UAAA:13
UAAT|TDK|Taldykorgan||KZ|3
UABA||Burana village|Burana|KG|1|||UCFM:78
UACC|NQZ|Astana|Nursultan Nazarbayev|KZ|4
UACK|KOV|Kokshetau||KZ|4
UACP|PPK|Petropavl||KZ|4
UACS||Stepnogorsk||KZ|1|||UACC:147
UADD|DMB|Taraz||KZ|4
UAFA||Tamga||KG|2
UAFE||Kerben||KG|2
UAFF||Tokmok||KG|2
UAFS||Kyzyl-Kiya||KG|2
UAFT||Talas||KG|2
UAFW||Kant|Kant Air Base|KG|2|||UCFM:38
UAFX||Toktogul||KG|1|||UZFA:136
UAFZ||Kazarman||KG|2
UAII|CIT|Shymkent||KZ|4
UAIT|HSA|Turkıstan|Hazrat Sultan|KZ|4
UAKD|DZN|Zhezkazgan|Zhezkazgan National|KZ|4
UAKK|KGF|Karaganda|Sary-Arka|KZ|4
UAOD||Zhosaly||KZ|1|||UAOL:69
UAOL|BXY|Baikonur|Baikonur Krayniy|KZ|4
UAON||Töretam|Yubileyniy|KZ|2|||UAOL:48
UAOO|KZO|Kyzylorda|Korkyt Ata|KZ|4
UARR|URA|Uralsk|Manshuk Mametova|KZ|4
UASA||Ayaguz||KZ|2|||UASU:130
UASB|EKB|Ekibastuz||KZ|2|||UASP:144
UASD||Semey|Dolon Air Base|KZ|2|||UASS:76
UASE||Tughyl||KZ|1|||UASZ:49
UASF||Semey|Dolon Southwest Air Base|KZ|1|||UASS:83
UASK|UKK|Ust-Kamenogorsk|Oskemen|KZ|4|Ust-Kamenogorsk (Oskemen)
UASN||Barshatas||KZ|1|||UASU:254
UASP|PWQ|Pavlodar||KZ|4
UASS|PLX|Semey|Semei|KZ|4
UASU|UZR|Urzhar||KZ|2
UASV||Akzhar||KZ|1|||UASZ:88
UASY||Zyryanovsk|Zubovsk|KZ|1|||UASK:126
UASZ|SZI|Zaysan||KZ|2
UATA||Aralsk||KZ|1|||UAOL:182
UATD||Kultay|Buzachi|KZ|1|||UATE:150
UATE|SCO|Aktau||KZ|4
UATG|GUW|Atyrau||KZ|4
UATL||Akzhar|Gurvey Northeast|KZ|1|||UATG:17
UATR||Shalkar||KZ|2
UATT|AKX|Aktobe||KZ|4
UATW||Zhanaozen||KZ|1|||UATE:159
UATZ||Tengiz||KZ|1|||UATG:153
UAUR|AYK|Arkalyk|Arkalyk North|KZ|1|||UAKD:296
UAUT||Turgay||KZ|1
UAUU|KSN|Kostanay||KZ|4
UBBA||Akstafa||AZ|1|||UGTB:72
UBBB|GYD|Baku|Heydar Aliyev|AZ|4
UBBF|FZL|Fuzuli||AZ|1|||OITP:59
UBBG|GNJ|Ganja||AZ|4
UBBH||Khachmaz||AZ|1|||UBBQ:118
UBBI||Sumqayit|Nasosnaya Air Base|AZ|2|||UBBB:44
UBBL|LLK|Lankaran||AZ|2
UBBM||Hajigabul|Hajigabul Kazı Magomed|AZ|1|||OITP:99
UBBN|NAJ|Nakhchivan||AZ|4
UBBQ|GBB|Gabala||AZ|3
UBBS||Khojaly||AZ|2|||UBLC:36
UBBY|ZTU|Zaqatala||AZ|2|||UBBG:96
UBBZ|ZZE|Zangilan||AZ|1|||UBLC:92
UBEE|YLV|Yevlakh||AZ|1|||UBBQ:53
UBEI||Shaki||AZ|1|||UBBQ:60
UBEN||Naftalan||AZ|1|||UBBG:50
UBEY||Agjabedi||AZ|1|||OITP:59
UBLC|LHL|Lachin||AZ|3
UBLL||Lökbatan|Güzdək Military|AZ|1|||UBBB:35
UBTT|ZXT|Zabrat||AZ|2|||UBBB:7
UCFB||Batken||KG|3||UAFB
UCFD||Jalal-Abad||KG|3
UCFK|IKG|Karakol||KG|3||UAFP
UCFL|IKU|Tamchy|Issyk-Kul|KG|4||UAFL
UCFM|BSZ|Bishkek|Manas|KG|4||UAFM
UCFN||Naryn||KG|2
UCFO|OSS|Osh||KG|4||UAFO
UCFR||Isfana|Razzakov|KG|2||UAFI
UDCK|YUK|Kapan|Syunik|AM|1|||UBLC:76
UDLS||Stepanavan||AM|1|||UDSG:52
UDSG|LWN|Gyumri|Shirak|AM|4||UGEL
UDYE||Yerevan|Erebuni|AM|2|||UDYZ:6
UDYZ|EVN|Yerevan|Zvartnots|AM|4||UGEE
UEAT||Tyubelyahe|Chumpu-Kytyl|RU|1|||UEMT:91
UEBB|BQJ|Batagay||RU|2
UEBD|DPT|Deputatskiy||RU|2
UEBG||Khayyr|Lake Khaiyr|RU|1|||UEBT:119
UEBK||Kular||RU|1|||UEBT:78
UEBN||Nizhneyansk||RU|1|||UEBT:160
UEBS|SUK|Batagay-Alyta|Sakkyryr|RU|2
UEBT|UKG|Ust-Kuyga||RU|2
UEBW|||Verkhoyansk|RU|1|||UEBB:56
UEBY|||Byas-Kyuyol|RU|1|||UEMO:120
UECT|TLK|Talakan Oil Field|Talakan|RU|1|||UERL:229
UEDB|||Kulun-Elbyut|RU|1|||UEMA:45
UEDK|||Desku|RU|1|||UEBD:218
UEDN||Sayylyk|Horula|RU|1|||UENI:98
UEEA|ADH|Aldan||RU|1|||UELL:190
UEED|||Sebyan-Kyuyol|RU|1|||UEBS:278
UEEE|YKS|Yakutsk|Platon Oyunsky Yakutsk|RU|4
UEEG|||Chagda|RU|1|||UEMU:280
UEEJ|||Kobyay|RU|1|||UEEE:233
UEEK||Yugoryonok||RU|1|||UEMU:192
UEEQ|||Sanyyakhtakh|RU|1|||UEMO:197
UEEX|||Bel'kachi|RU|1|||UEMU:193
UEGT||Sobolokh||RU|1|||UEMA:22
UEKG|||Kuberganya|RU|1|||UEMA:156
UEKO|||Delgey|RU|1|||UEMO:115
UEKU|||Kutana|RU|1|||UEMU:210
UEKY||Keng-Kyuyol||RU|1|||UEMA:215
UELD||Chulman|Yukovsk|RU|1|||UELL:3
UELL|NER|Neryungri|Chulman|RU|3
UELT|||Torgo|RU|1|||UEMO:224
UEMA|MQJ|Khonuu|Moma|RU|3
UEMC|||Khatyngnakh|RU|1|||UESK:49
UEMD|||Chagda|RU|1|||UENW:195
UEME|||Tyaya|RU|1|||UENW:211
UEMH|KDY|Khandyga|Typliy Klyuch|RU|1|||UEMU:299
UEMJ||Tomtor||RU|1|||UEMT:145
UEML||Ust-Ynykchan|Solnechniy|RU|1|||UEMU:170
UEMM|GYG|Magan||RU|2|||UEEE:12
UEMN|||Syagannakh|RU|1|||UEBD:188
UEMO|OLZ|Olyokminsk||RU|3
UEMR||Aryktakh||RU|1|||UENW:177
UEMS||Sangar||RU|1|||UEEE:239
UEMT|USR|Ust-Nera||RU|3
UEMU|UMS|Ust-Maya||RU|2
UENH|||Yatek|RU|1|||UENW:123
UENI|VHV|Verkhnevilyuisk||RU|2
UENK||Kyzyl-Syr||RU|2|||UENW:55
UENL||Ilbenge||RU|1|||UENW:170
UENN|NYR|Nyurba||RU|1|||UENI:98
UENO|||Chapayevo|RU|1|||UERL:143
UENS|SUY|Suntar||RU|2
UENU|||Sayylyk|RU|1|||UENW:106
UENW|VYI|Vilyuisk||RU|3
UENY||Satagay|Kyrgyday|RU|1|||UENW:94
UEOA|||Macha|RU|1|||UEMO:169
UEOQ|||Tyanya|RU|1|||UEMO:155
UEOT|||Tokko|RU|1|||UEMO:58
UEOU|||Uritskoye|RU|1|||UEMO:108
UEQC|||Ezhantsy|RU|1|||UEMU:41
UEQD||Dzhebariki-Khaya||RU|1|||UEMU:218
UEQK|||Kyuptsy|RU|1|||UEMU:73
UEQL||Eldikan|Eldikan Airstrip|RU|1|||UEMU:58
UEQM||Ust-Mil|Ust-Mil Airstrip|RU|1|||UEMU:110
UEQN||Allakh-Yun||RU|1|||UEMU:214
UERA|||Aykhal|RU|2|||UERP:54
UERL|ULK|Lensk||RU|3
UERO|ONK|Olenyok||RU|1|||UERP:236
UERP|PYJ|Yakutia|Polyarny|RU|3
UERR|MJZ|Mirny||RU|3
UERS|SYS|Saskylakh||RU|3
UERT||Vitim||RU|1|||UERL:188
UESC|||Berezovka|RU|1|||UESK:129
UESG|BGN|Belaya Gora||RU|2|||UESO:239
UESH||Argakhtakh||RU|1|||UESK:108
UESK|SEK|Srednekolymsk||RU|3
UESL|||Sylgy-Ytar|RU|1|||UESK:62
UESO|CKH|Chokurdah|Chokurdakh|RU|3
UESR|||Tumat|RU|1|||UEBD:150
UESS|CYX|Cherskiy||RU|3
UEST|IKS|Tiksi||RU|3
UESU|ZKP|Zyryanka||RU|3
UESW||Svatay||RU|1||UESV|UESK:104
UESX|||Aleko-Kyuyol|RU|1|||UESK:154
UESY||Abyy||RU|1|||UEMA:231
UESZ|||Kazachye|RU|1|||UEBT:84
UEVV|ZIX|Zhigansk||RU|3
UEWD||Dzhargalakh||RU|1|||UEBS:59
UEWO|||Kudu-Kyuyol|RU|1|||UEMO:115
UEYB||Betyung||RU|1|||UENW:35
UEYR||Sasyr||RU|1|||UESU:188
UGAM||Ambrolauri||GE|3
UGGT||Telavi|Telavi Kurdgelauri|GE|1|||UGTB:56
UGKO|KUT|Kopitnari|David the Builder Kutaisi|GE|4
UGMS||Mestia|Mestia Queen Tamar|GE|2
UGSA||Natakhtari||GE|2
UGSB|BUS|Batumi|Alexander Kartveli Batumi|GE|4
UGSG||Gudauta|Gudauta Air Base|GE|2|||UGSS:52
UGSS|SUI|Sukhumi|Vladislav Ardzinba Sukhum|GE|4||URAS
UGTB|TBS|Tbilisi||GE|4
UHAC||Chuvanskoye||RU|1|||UHMO:129
UHAL||Lamutskoye||RU|1|||UHMO:122
UHAW||Vayegi||RU|1|||UHMO:63
UHBA||Arkhara||RU|1|||ZYLD:200
UHBB|BQS|Blagoveschensk|Ignatyevo|RU|3
UHBE|EYA|Zeya||RU|1
UHBF|||Fevralsk|RU|1
UHBN||Novokievsky Uval||RU|1|||UHBB:173
UHBO|||Oktyabrskiy|RU|1|||UHBB:299
UHBP||Ekimchan||RU|1
UHBS||Svobodny||RU|1|||UHBB:124
UHBW|TYD|Tynda||RU|1|||UELL:181
UHBX||Gornyy||RU|1
UHDW||Vankarem||RU|1
UHEI|||Ilirney|RU|1|||UHMK:101
UHEK|||Kupol|RU|1|||UHMK:180
UHGB||Yamsk||RU|1|||UHMM:196
UHGE||Yagodnoye||RU|1|||UHMM:300
UHGL||Glukharinoye||RU|1|||UESU:132
UHHB||Birobidzhan|Birobidzhan Yuzhniy|RU|1|||ZYFY:106
UHHD|DLR|Dalnerechensk||RU|2
UHHG||Bomnak||RU|1
UHHH|KHV|Khabarovsk|Khabarovsk Novy|RU|3
UHHM||Chegdomyn||RU|1|||UHKK:292
UHHO||Troitskoye||RU|1|||UHKK:110
UHHT||Khabarovsk|Khabarovsk MVL|RU|1|||UHHH:3
UHHW||Kukan||RU|1|||ZYFY:131
UHHY||Chumikan||RU|1
UHII||Chernigovka|Chernigovka Air Base|RU|2|||UHWW:108
UHIU||Artyom|Uglovaya Air Base|RU|1||UUGG|UHWW:9
UHKD||Komsomolsk-na-Amur|Dzemgi|RU|2|||UHKK:24
UHKG||Sovetskaya Gavan|Kamenny Ruchey Naval Air Base|RU|2|||UHSK:137
UHKK|KXK|Komsomolsk-on-Amur||RU|3
UHKM|GVN|Sovetskaya Gavan||RU|2|Maygatka||UHSK:152
UHKN||Nizhnetambovskoye||RU|1|||UHKK:106
UHKP||Zavety Il'icha|Sovetskaya Gavan|RU|1|Postovaya||UHSK:136
UHMA|DYR|Anadyr|Ugolny Yuri Ryktheu|RU|3
UHMD|PVS|Chukotka|Provideniya Bay|RU|2|||PAGM:100
UHME||Egvekinot|Zaliv Kresta|RU|1|||UHMA:232
UHMF||Omsukchan||RU|3
UHMG||Chaybukha||RU|2
UHMH||Susman|Susuman|RU|2
UHMI||Mys Shmidta||RU|1
UHMK|KPW|Keperveem||RU|3
UHML||Lavrentiya||RU|1|||PAIW:133
UHMM|GDX|Magadan|Sokol|RU|3
UHMN||Omolon||RU|2
UHMO|KVM|Markovo||RU|2
UHMP|PWE|Apapelgino|Pevek|RU|3
UHMR||Beringovsky|Beringovskiy|RU|1|||UHMA:205
UHMS||Seymchan||RU|2
UHMT||Magadan|Magadan-13|RU|2|||UHMM:34
UHMW|SWV|Evensk|Severo-Evensk|RU|2
UHMZ||Wrangel Island||RU|1
UHNA||Ayan|Munuk|RU|1
UHNB|BQG|Bogorodskoye||RU|2
UHNI||Kiran||RU|1
UHNK||Mar-Kyuel||RU|1
UHNN|NLI|Nikolayevsk-na-Amure Airport|Nikolayevsk-na-Amure|RU|3
UHNT||Tugur||RU|1|||UHNN:262
UHOA||Arka||RU|1|||UHOO:88
UHOI||Tukchi||RU|1
UHOO|OHO|Okhotsk||RU|3
UHOQ||Inya||RU|1|||UHOO:100
UHPA||Ust-Pakhachi||RU|1
UHPD||Ossora||RU|1
UHPG||Tigil||RU|1
UHPH||Petropavlovsk-Kamchatskiy|Khalaktyrka|RU|1|||UHPP:24
UHPK||Ust'-Kamchatsk||RU|2|Ust'-Kamchatsk (Krutoberegovo)
UHPL||Palana||RU|2
UHPM||Milkovo||RU|1|||UHPP:168
UHPN||Manily||RU|1
UHPP|PKC|Petropavlovsk-Kamchatsky|Yelizovo|RU|4
UHPS||Sobolevo||RU|1|||UHPP:206
UHPT||Korf|Tilichiki|RU|1
UHPU||Ust-Khayryuzovo||RU|1
UHPX||Nikolskoye||RU|1
UHQE||Slautnoye||RU|1|||UHMO:204
UHQO||Ozernovskiy||RU|1|||UHPP:226
UHQS||Esso||RU|1
UHSA|UHS|Aleksandrovsk-Sakhalinskiy||RU|1|||UHSN:121
UHSB|BVV|Kurilsk|Burevestnik|RU|1|||UHSI:46
UHSH|OHH|Okha||RU|1|||UHNN:154
UHSI|ITU|Kurilsk|Iturup|RU|2
UHSJ||Korsakov|Korsakov Pushistyy|RU|1|||UHSS:31
UHSK|EKS|Shakhtyorsk||RU|2
UHSM|DEE|Yuzhno-Kurilsk|Yuzhno-Kurilsk Mendeleyevo|RU|2
UHSN|NGK|Nogliki||RU|2
UHSO|ZZO|Tymovskoye|Zonalnoye|RU|1|||UHSN:127
UHSS|UUS|Yuzhno-Sakhalinsk||RU|4
UHTG|AEM|Amgu||RU|1|||UHWP:157
UHTO|||Vostok|RU|1|||UHHD:168
UHTQ|ETL|Svetlaya||RU|1|||UHWP:248
UHTR|RZH|Preobrazheniye||RU|1||UIKP|UHWW:152
UHTS|||Samarga|RU|1|||RJER:290
UHWA||Arsenyev|Arsenyev Sport|RU|1|||UHWW:123
UHWE|EDN|Yedinka||RU|1|||RJER:290
UHWK|KVR|Kavalerovo||RU|1|||UHWP:117
UHWP|TLY|Plastun||RU|2
UHWR||Roshchino||RU|1|||UHHD:88
UHWT|NEI|Terney||RU|1|||UHWP:38
UHWV||Vozdvizhenka|Vozdvizhenka Air Base|RU|2||UVOZ|UHWW:60
UHWW|VVO|Vladivostok||RU|4|Artyom
UIAA|HTA|Chita|Chita-Kadala|RU|4
UIAC|||Tungukochen|RU|1|||UIAA:229
UIAD||Krasniy Chikoy||RU|1|||UIUU:185
UIAE||Krasnokamensk||RU|2|||ZBMZ:74
UIAI||Chita|Cheryomushki Air Base|RU|2|||UIAA:10
UIAO||Barguzin||RU|1|||UIUN:246
UIAR|CZR|Chara||RU|1|||UIKG:213
UIAU|||Yumurchen|RU|1|||UIAA:184
UIAY|||Usugli|RU|1|||UIAA:149
UIBB|BTK|Bratsk||RU|3
UIBM|||Mostovoy|RU|1|||UIBB:34
UIBS|UIK|Ust-Ilimsk||RU|1|||UIBB:203
UIBV||Zheleznogorsk-Ilimsky|Zheleznogorsk|RU|2|||UITT:107
UICU|||Ust'-Karenga|RU|1||UIAG|UIKG:236
UIIB||Usolye-Sibirskoye|Belaya Air Base|RU|1|||UIII:91
UIID||Dzhida|Dzhida Air Base|RU|2|||UIUU:155
UIIH||Khuzhir||RU|2|Khuzhir, Olkhon Island
UIII|IKT|Irkutsk||RU|4
UIIN||Kyren||RU|1|||UIII:167
UIIR||Irkutsk|Irkutsk Northwest|RU|2|||UIII:18
UIIV||Zhigalovo||RU|1|||UITT:231
UIKB|ODO|Bodaybo||RU|2
UIKE|ERG|Erbogachen|Yerbogachen|RU|1
UIKG|TKM|Taksimo||RU|2
UIKK|KCK|Kirensk||RU|1|||UITT:173
UIKM||Mama||RU|1|||UIKB:94
UINN||Nizhneudinsk||RU|1|||UIBB:233
UINO||Oktyabrskiy||RU|1|||UIBB:145
UITK||Kazachinskaya||RU|1|||UITT:130
UITT|UKX|Ust-Kut||RU|3
UIUN|NZG|Nizhneangarsk||RU|2
UIUU|UUD|Ulan Ude|Baikal|RU|4
UKBB|KBP|Boryspil||UA|3|||UMGG:243
UKBC||Bila Tserkva|Bila Tserkva Air Base|UA|2
UKBD|||Ksaverivka|UA|1|||UMGG:286
UKBF||Konotop|Konotop Air Base|UA|1|||UMGG:205
UKBH|||Korshun Shevchenkovskiy|UA|1
UKBL||Brody|Brody Air Base|UA|1|||EPLB:213
UKBM|MXR|Myrhorod|Myrhorod Air Base|UA|1
UKBP||Pryluky|Pryluki Air Base|UA|1|||UMGG:236
UKCD||Novoaydar|Dmitrievka|UA|1
UKCK|KRQ|Kramatorsk||UA|1
UKCM|MPW|Mariupol||UA|2|||URKK:263
UKDB|ERD|Berdyansk||UA|2|||URKG:267
UKDD|DNK|Dnipro||UA|2
UKDE|OZH|Zaporizhia|Zaporizhzhia|UA|2
UKDM||Melitopol|Melitopol Air Base|UA|2
UKDR|KWG|Kryvyi Rih||UA|2
UKFB|UKS|Sevastopol|Sevastopol International Airport / Belbek Air Base|UA|2
UKFF|SIP|Simferopol||UA|3
UKFG||Hvardiiske|Gvardeyskoye Air Base|UA|2
UKFH||Sevastopol|Sevastopol Kozachya Bay Aerodrome / Khersones Air Base|UA|1
UKFI||Novofedorivka|Saky Air Base|UA|2||URFI
UKFK|KHC|Kerch||UA|1|||URKG:154
UKFP||Sevastopol|Yukharina Balka|UA|1
UKFW||Simferopol|Zavodskoe|UA|1
UKFY||Dzhankoy|Dzhankoy Air Base|UA|2
UKGC||Gorodok|Tsuniv|UA|1|||EPRZ:123
UKGW||Voroniv||UA|1|||UMBB:250
UKHB||Lozovaya|Bliznyuki Air Base|UA|1
UKHD||Kharkiv|Kharkiv North|UA|1|||UUOO:288
UKHH|HRK|Kharkiv||UA|2|||UUOO:294
UKHI||Ivanivka|Izyum Air Base|UA|1
UKHK|KHU|Kremenchuk|Kakhnovka|UA|1
UKHP|PLV|Poltava|Suprunovka|UA|2
UKHS|UMY|Sumy||UA|1
UKHU||Kupyansk|Kupyansk Air Base|UA|1|||UUOO:260
UKHW||Chuhuiv|Chuhuiv Air Base|UA|1|||UUOO:285
UKIN||Haisyn||UA|1|||LUKK:213
UKKA||Kacha|Kacha Air Base|UA|2||URFA
UKKB||Borodyanka||UA|1|||UMGG:220
UKKE|CKC|Cherkasy||UA|2
UKKG|KGO|Kirovograd||UA|1
UKKJ||Petropavlivska Borshchahivka|Kyiv Chaika|UA|1|||UMGG:238
UKKK|IEV|Kyiv|Igor Sikorsky Kyiv International Airport|UA|2|Zhuliany||UMGG:240
UKKM||Kiev|Hostomel|UA|2|||UMGG:221
UKKN||Kalynivka|Kalynivka Air Base|UA|1|||LRSV:256
UKKO||Zhytomyr|Ozerne Air Base|UA|2
UKKT||Kyiv|Svyatoshyn|UA|1|||UMGG:232
UKKV|ZTR|Zhytomyr||UA|2|||UMGG:296
UKKW||Vasylkiv|Vasylkiv Air Base|UA|1|||UMGG:260
UKLA||Sambir|Novyi Kalyniv Air Base|UA|1|||EPRZ:113
UKLC|UCK|Lutsk||UA|1|||UMBB:194
UKLD||Drohobych||UA|1|||EPRZ:138
UKLH|HMJ|Khmelnytskyi||UA|2|||LRSV:191
UKLI|IFO|Ivano-Frankivsk||UA|2|||LRBM:164
UKLJ||Dubno|Dubno Air Base|UA|1|||UMBB:229
UKLK|KCP|Kamyan'ka|Kam'yanets'-Podil's'kyi|UA|1|||LRSV:114
UKLL|LWO|Lviv||UA|3|||EPRZ:142
UKLN|CWC|Chernivtsi||UA|2|||LRSV:69
UKLR|RWN|Rivne||UA|2|||UMBB:228
UKLS||Starokostiantyniv|Starokostiantyniv Air Base|UA|1|||LRSV:239
UKLT|TNL|Ternopil||UA|1|||LRSV:210
UKLU|UDJ|Uzhhorod||UA|2|||LZKZ:75
UKMC||Gorodok|Jagellon|UA|1|||EPRZ:125
UKMG|||Pidhirya|UA|1|||LRBM:146
UKMN||Koson'|Kosino Spa Resort|UA|1|||LRSM:68
UKNG||Gogoliv||UA|1|Gogoliv (Kiev)||UMGG:224
UKOA||Artsyz|Artsyz Air Base|UA|1|||LUKK:114
UKOD||Bolgrad|Zhovtneve Air Base|UA|2|||LRCK:143
UKOE||Naberezhne|Liman|UA|1|||LUKK:140
UKOH|KHE|Kherson||UA|2|||LUKK:274
UKOM||Lymanske||UA|1|||LUKK:87
UKON|NLV|Mykolaiv|Mykolaiv International Airport [CLOSED]|UA|2|||LUKK:227
UKOO|ODS|Odesa||UA|3|||LUKK:144
UKOR||Mykolaiv|Kulbakyne Air Base|UA|1|||LUKK:240
UKOW||Voznesensk|Voznesensk Air Base|UA|1|||LUKK:187
UKRN||Nizhyn|Nizhyn Air Base|UA|2|||UMGG:170
UKVN||Nalyvaikivka||UA|1|||UMGG:244
UKWW|VIN|Vinnitsa|Vinnytsia/Gavyryshivka|UA|2|||LRSV:240
UKXK||Korostelivka|Korostelivka Airstrip|UA|1|||UMGG:268
UKYO||Orekhovo||UA|1
ULAA|ARH|Archangelsk|Talagi|RU|3
ULAE||Mezen||RU|1|||ULAL:130
ULAH|VKV|Arkhangelsk|Vaskovo|RU|2|||ULAA:23
ULAL|LDG|Leshukonskoye||RU|2
ULAM|NNM|Naryan Mar||RU|3
ULAO||Onega||RU|1|||ULAA:147
ULAP||Karpogory||RU|1|||ULAL:115
ULAR||Kargopol||RU|1|||ULWC:254
ULAS|CSH|Solovetsky Islands|Solovki|RU|2
ULAT||Pertominsk|Pertominsk Airstrip|RU|1|||ULAA:111
ULAV||Nizhnyaya Pesha||RU|1|||ULAL:224
ULBK||Kamenka||RU|1|||ULAL:132
ULBL||Lopshenga|Lopshenga Airstrip|RU|1|||ULAS:93
ULBM||Purnema||RU|1|||ULAS:108
ULBO||Shoyna|Shoyna Airstrip|RU|1
ULBW|||Verkhnyaya Zolotitsa|RU|1|||ULAA:122
ULBZ||Letnyaya Zolotitsa|Letnyaya Zolotitsa Airstrip|RU|1|||ULAS:52
ULDA||Belaya|Rogachyovo Air Base|RU|2
ULDD|AMV|Amderma||RU|3
ULDT||Karatayka||RU|1|||ULDD:111
ULDW|VRI|Varandey||RU|1|||ULDD:167
ULEH||Khorey-Ver||RU|1|||UUYS:160
ULEK||Kotkino||RU|1|||ULAM:110
ULER||Kharuta||RU|1|||UUYS:134
ULJC||Tsenogora||RU|1||ULIC|ULAL:47
ULJI||Vizhas||RU|1|||ULAL:194
ULJM||Oma||RU|1|||ULAL:199
ULJO||Olema||RU|1|||ULAL:49
ULKK|KSZ|Kotlas||RU|3
ULKS||Kotlas|Savvatiya Air Base|RU|1|||ULKK:28
ULLI|LED|St. Petersburg|Pulkovo|RU|4
ULLK||Novgorod|Krechevitsy Air Base|RU|2|||ULLI:145
ULLP||St. Petersburg|Pushkin|RU|2|||ULLI:14
ULMA||Umba|Umba Airstrip|RU|1|||XLMK:92
ULML||Lovozero||RU|1|||XLMK:86
ULMM|MMK|Murmansk|Emperor Nicholas II Murmansk|RU|4
ULMX||Krasnoshchelye|Krasnoshchelye Airstrip|RU|1|||XLMK:150
ULNB||Borovichi||RU|1|||ULWC:255
ULNL||Lyubytino|Lyubytino Airstrip|RU|1|||ULLI:209
ULNP||Pestovo||RU|1|||ULWC:148
ULNR||Staraya Russa|Staraya Russa Air Base|RU|2|||ULOO:178
ULOL|VLU|Velikiye Luki||RU|2|||ULOO:205
ULOO|PKV|Pskov|Princess Olga Pskov|RU|3
ULOR||Seredka||RU|1|||ULOO:42
ULPB|PES|Petrozavodsk||RU|3
ULPK||Kalevala||RU|1|||EFKS:123
ULPP||Petrozavodsk|Peski|RU|2|||ULPB:9
ULPS||Segezha||RU|1|||ULAS:158
ULSC||Seltso||RU|1|||ULLI:45
ULSG||Gostilitsy||RU|1|||ULLI:36
ULSJ||Solovyovo|Burny|RU|1|||ULLI:91
ULSK||Gatchina|Korpikyulya|RU|1|||ULLI:22
ULSM||Manushkino||RU|1|||ULLI:31
ULSO||Rozhdestveno|Kuznetsovo|RU|1|||ULLI:64
ULSW||Putilovo|Severniy veter|RU|1|||ULLI:68
ULSY||Gatchina|Sivoritsy|RU|1|||ULLI:39
ULWC|CEE|Cherepovets||RU|3
ULWK||Kichmengskiy Gorodok||RU|1|||ULWU:93
ULWR||Vytegra||RU|1|||ULPB:154
ULWU|VUS|Velikiy Ustyug||RU|3
ULWW|VGD|Vologda||RU|2|||ULWC:110
ULWX||Kedrovo||RU|1|||ULWC:91
UMBB|BQT|Brest||BY|4
UMBK||Barysava|Borisovo Air Base|BY|1|||UMBB:35
UMDD||Lida|Lida Air Base|BY|1|||EYVI:84
UMGG|GME|Gomel||BY|3
UMGI||Min'kov|Rogachev|BY|1|||UMGG:94
UMII|VTB|Vitebsk|Vitebsk Vostochny|BY|2|||UMOO:131
UMIO|TXC|Orsha|Orsha Airport - Balbasovo Air Base|BY|2|||UMOO:56
UMKE||Medovoye||RU|1|||UMKK:42
UMKK|KGD|Kaliningrad|Khrabrovo|RU|4
UMKS||Strelnya||RU|1|||UMKK:42
UMLI||Minsk|Minsk Machulishchy Air Base|BY|1|||UMMS:33
UMMA||Baranavichi|Baranavichi Air Base|BY|2|||UMMS:158
UMMG|GNA|Hrodna||BY|2|||EYVI:140
UMMI|||Lipki Air Base|BY|1|||UMMS:22
UMMK|||Aerodrom Ozerki|BY|1|||EYVI:114
UMMO||Byaroza|Osovtsy Air Base|BY|2|||UMBB:84
UMMS|MSQ|Minsk|Minsk National|BY|4
UMNB||Babruisk|Babruisk Air Base|BY|2|||UMOO:111
UMNG||Grodno|Karolin|BY|1|||EYKA:150
UMNI|||Aerodrom Kukoviatsino|BY|1|||UMOO:134
UMNL||Luninets|Luninets Air Base|BY|1||UMHA|UMBB:197
UMNM||Mahiylow / Mogilev|Novo-Pashkovo|BY|1|||UMOO:10
UMNS||Babruysk|Bobruisk Aeroclub|BY|1|||UMMS:104
UMNV||Pruzhany|Pruzhany Air Base|BY|1|||UMBB:62
UMOO|MVQ|Mogilev||BY|3
UMWB||Polatsk|Borovtsy Air Base|BY|1|||UMMS:196
UNAA|ABA|Abakan||RU|4
UNAN||Novoselovo||RU|1|||UNAA:144
UNAT||Krasnoturansk||RU|1|||UNAA:64
UNAU||Kazantsevo|Shushenskoye|RU|1|||UNAA:59
UNBA||Kosh-Agach||RU|1|||ZMUL:141
UNBB|BAX|Barnaul|Barnaul Gherman Titov|RU|4
UNBG|RGK|Gorno-Altaysk||RU|2|||UNWW:216
UNBM||Volchikha||RU|1|||UASS:186
UNBO||Manzherok||RU|1|||UNBB:229
UNBU||Ust-Koksa Airport|Ust-Koksa|RU|1|||UASK:231
UNCN||Krasnoozyorskoye|Krasnoozyorsk|RU|1|||UNNT:242
UNEE|KEJ|Kemerovo|Alexei Leonov Kemerovo|RU|4
UNHA||Aksenovo||RU|1|||UNIW:160
UNHU||Worgalan|Artel-Amur Kondyor|RU|1|||UEMU:292
UNHZ||Zotino||RU|1|||UNIS:191
UNIA||Aydara||RU|1|||UNII:216
UNIB|BKA|Baykit||RU|2|||UNIS:231
UNII|EIE|Yeniseysk||RU|3
UNIJ|YAE|Yartsevo||RU|1|||UNIS:156
UNIM|MJY|Motygino||RU|2
UNIP|TGP|Bor|Podkamennaya Tunguska|RU|2|||UNIS:212
UNIS|VEO|Severo-Yeniseysk||RU|3
UNIT|GOY|Tura|Tura Mountain|RU|2
UNIW|VAQ|Vanavara||RU|3
UNKB|BGS|Boguchany||RU|1|||UNIM:161
UNKD||Kyzyl-Mazhalyk||RU|1|||ZMUG:153
UNKI|KNY||Kodinsk|RU|1|||UNIM:256
UNKL|KJA|Krasnoyarsk||RU|4
UNKM|KCY|Krasnoyarsk|Krasnoyarsk Cheremshanka|RU|3
UNKN||Kansk|Kansk West|RU|1|||UNKM:191
UNKO||Sharypovo||RU|1|||UNEE:195
UNKS|ACS|Achinsk||RU|2|||UNKL:119
UNKY|KYZ|Kyzyl||RU|3
UNLK||Kargasok||RU|1
UNLL||Kolpashevo||RU|1|||UNTT:256
UNLW||Novy Vasyugan||RU|1|||USNN:263
UNNE||Novosibirsk|Yeltsovka|RU|2|||UNNT:26
UNNG||Novosibirsk|Gorodskoy Aeroport|RU|1||UNCC|UNNT:20
UNNM||Novosibirsk|Mochische|RU|1|||UNNT:37
UNNS||Severnoe|Severnoye|RU|1
UNNT|OVB|Novosibirsk|Novosibirsk Tolmachevo|RU|4
UNOK||Kalachinsk||RU|1|||UNOO:83
UNOO|OMS|Omsk|Omsk Central|RU|4
UNOS||Omsk|Omsk Severny|RU|2|||UNOO:16
UNOT||Tara||RU|1|||UNOO:224
UNOW||Tevriz||RU|1|||USTJ:244
UNQK|||Kuznetsovo|RU|1|||UNKM:38
UNRR||Barabinsk||RU|1|||UNNT:277
UNSA||Aleksandrovskoye||RU|1|||USNN:93
UNSS|SWT|Strezhevoy||RU|2|||USNN:69
UNTR||Tomsk|Beryozkino|RU|1|||UNTT:35
UNTT|TOF|Tomsk|Tomsk Kamov|RU|4
UNWW|NOZ|Novokuznetsk|Spichenkovo|RU|3
UODD|DKS|Dikson||RU|2
UODL||Chelyuskin Polar Station|Cape Chelyuskin|RU|1
UODN||Alexandra Land|Nagurskoye|RU|2
UODS||Khatanga|Sredniy Island Air Base|RU|1
UOHH|HTG|Khatanga||RU|3
UOIC||Snezhnogorsk||RU|1|||UOII:83
UOIG|SES|Svetlogorsk||RU|2|||UOII:102
UOII|IAA|Igarka||RU|3
UOOO|NSK|Norilsk|Alykel|RU|4
UOTT|THX|Turukhansk||RU|2
UOTU||Tutonchany||RU|1
URKA|AAQ|Krasnyi Kurgan|Anapa Vityazevo|RU|2|||URKG:70
URKE|EIK|Yeysk||RU|2|||URKK:198
URKG|GDZ|Gelendzhik||RU|3
URKK|KRR|Krasnodar|Krasnodar Pashkovsky|RU|4
URKR||Armavir|Armavir Air Base|RU|1|||URMT:81
URKS||Enem||RU|1|||URKK:21
URKT||Tikhoretsk|Tikhoretsk Air Base|RU|1|||URKK:119
URKW||Labinsk||RU|1|||URMT:118
URMB||Budyonnovsk|Budyonnovsk Air Base|RU|2|||URMM:100
URME||Yessentuki||RU|1|||URMM:27
URMG|GRV|Grozny|Akhmat Kadyrov Grozny|RU|4
URML|MCX|Makhachkala|Makhachkala Uytash|RU|4
URMM|MRV|Mineralnyye Vody|Mineralnye Vody|RU|4
URMN|NAL|Nalchik||RU|3
URMO|OGZ|Beslan|Vladikavkaz Beslan|RU|3
URMS|IGT|Sunzha|Magas|RU|3
URMT|STW|Stavropol|Stavropol Shpakovskoye|RU|3
UROD||Dudinka||RU|2|||UOOO:46
URRH||Shakhty||RU|1
URRM||Morozovsk|Morozovsk Air Base|RU|1|||URWW:195
URRN|||Potapov|RU|1|||URWI:219
URRP|ROV|Rostov-on-Don|Platov|RU|3|||URKK:279
URRW||Veshenskaya||RU|1|||URWW:215
URSS|AER|Sochi||RU|4
URWA|ASF|Astrakhan|Astrakhan Narimanovo Boris M. Kustodiev|RU|4
URWI|ESL|Elista||RU|3
URWW|VOG|Volgograd||RU|4
USCC|CEK|Chelyabinsk|Kurchatov Chelyabinsk|RU|4
USCG|||Chelyabinsk Shagol|RU|1|||USCC:14
USCM|MQF|Magnitogorsk||RU|4
USCU||Uvelsky|Uprun Air Base|RU|2|||USCC:104
USCV||Chelyabinsk|Kalachevo|RU|1|||USCC:39
USDA|SBT|Sabetta||RU|3
USDB|BVJ|Bovanenkovo||RU|3
USDD|SLY|Salekhard||RU|3
USDI||Antipayuta||RU|1|||USDA:298
USDK|YMK|Mys Kamennyi|Mys Kamenny|RU|1|||USDB:291
USDO||Tolka||RU|2
USDP|KKQ|Krasnoselkup||RU|1|||UOTT:250
USDR||Yar-Sale||RU|1|||USMM:174
USDS|TQL|Tarko-Sale||RU|1|||USMU:140
USDT||Tazovsky||RU|1|||USMU:183
USDU|UEN|Urengoy||RU|1|||USMU:87
USHA||Saranpaul'||RU|1|||UUYP:204
USHB|EZV||Berezovo|RU|2|||USHQ:86
USHH|HMA|Khanty-Mansiysk|Khanty Mansiysk|RU|3
USHI|IRM||Igrim|RU|1|||USHQ:125
USHK|KXD|Kondinskoye||RU|1|||USHU:154
USHL||Lugovoy||RU|2
USHN|NYA|Nyagan||RU|3
USHQ|EYK||Beloyarskiy|RU|3
USHS|OVS|Sovetskiy||RU|3
USHU|URJ|Uray||RU|3
USII|IJK|Izhevsk||RU|3
USKK|KVX|Kirov|Pobedilovo|RU|3
USMM|NYM|Nadym||RU|3
USMQ||Yamburg||RU|2|||USMU:222
USMU|NUX|Novy Urengoy||RU|3
USNN|NJC|Nizhnevartovsk||RU|4
USPP|PEE|Perm||RU|4
USPT||Solikamsk|Berezniki|RU|1|||USPP:191
USRA||Ay-Pim||RU|1|||USRR:155
USRK|KGP|Kogalym||RU|3
USRN|NFG|Nefteyugansk||RU|2|||USRR:48
USRO|NOJ|Noyabrsk||RU|3
USRR|SGC|Surgut||RU|4
USSK||Yekaterinburg|Uktus|RU|2|||USSS:5
USSQ||Alapayevsk||RU|1|||USSS:137
USSS|SVX|Yekaterinburg|Koltsovo|RU|4
USTJ|RMZ|Tobolsk|Tobolsk Remezov|RU|3
USTL||Tyumen|Plekhanovo|RU|1|||USTR:9
USTO|TOX|Tobolsk||RU|1|||USTJ:11
USTR|TJM|Tyumen|Roshchino|RU|4
USUU|KRO|Kurgan||RU|3
UTAA|ASB|Ashgabat||TM|4
UTAE|KEA|Kerki||TM|1|||UZSK:122
UTAK|KRW|Turkmenbaşy||TM|3
UTAM|MYP|Mary||TM|3
UTAN|BKN|Balkanabat||TM|3
UTAT|TAZ|Daşoguz|Dashoguz|TM|4
UTAV|CRZ|Türkmenabat||TM|4
UTDD|DYU|Dushanbe||TJ|4
UTDK|TJU|Kulob||TJ|4
UTDL|LBD|Khujand||TJ|4
UTDT|KQT|Bokhtar||TJ|4
UTOD||Khorog||TJ|1|||OAFZ:97
UUBA|KMW|Kostroma|Kostroma Sokerkino|RU|3
UUBC|KLF|Kaluga|Grabtsevo|RU|2|||UUWW:129
UUBD||Ryazan|Dyagilevo Air Base|RU|2|||UUBW:136
UUBG||Sasovo||RU|1|||UWPS:211
UUBI|IWA|Ivanovo|Ivanovo South|RU|3
UUBL||Vladimir|Semyazino|RU|2|||UUBI:98
UUBM||Moscow|Myachkovo|RU|2|||UUBW:10
UUBN||Tver|Zmeyevo|RU|1|||UUEE:138
UUBP|BZK|Bryansk||RU|2|||UMGG:225
UUBQ||Sharya||RU|1|||USKK:221
UUBS||Smolensk|Smolensk South|RU|1|||UMOO:155
UUBW|ZIA|Moscow|Zhukovsky|RU|4
UUCB||Beloomut||RU|1|||UUBW:99
UUCN|||Nudol|RU|1|||UUEE:55
UUCT||Torbeyevo||RU|1|||UUDD:38
UUDD|DME|Moscow|Domodedovo|RU|4
UUDG||Pushchino|Bolshoye Gryzlovo|RU|1|||UUDD:71
UUDL|IAR|Yaroslavl|Golden Ring Yaroslavl|RU|4|Tunoshna
UUEE|SVO|Moscow|Sheremetyevo|RU|4
UUEI||Kimry||RU|1|||UUEE:91
UUEM|KLD|Tver|Migalovo Air Base|RU|2|||UUEE:139
UUFO||Kaluga|Oreshkovo|RU|2|||UUWW:146
UUIN||Zventsovo|Nebyloye|RU|1|||UUBI:85
UUMB||Kubinka|Kubinka Air Base|RU|2|||UUWW:38
UUMD||Selnikovo||RU|1|||UUBW:79
UUMI||Stupino|Stupino Air Base|RU|1|||UUDD:60
UUML||Voskresensk|Severka|RU|1|||UUBW:51
UUMT||Lukhovitsy|Tretyakovo|RU|2|||UUDD:91
UUMU|CKL|Moscow|Chkalovskiy Air Base|RU|2|||UUBW:37
UUMV||Voskresensk|Voskresensk Airstrip|RU|1|||UUBW:39
UUMW||Ruza|Vatulino|RU|1|||UUWW:71
UUMY||Ozery||RU|1|||UUDD:80
UUOB|EGO|Belgorod||RU|2|||UUOO:225
UUOD||Voronezh|Pridacha|RU|1|||UUOO:18
UUOK|URS|Kursk|Kursk East|RU|2|||UUOO:202
UUOL|LPK|Lipetsk||RU|2|||UUOO:101
UUOO|VOZ|Voronezh||RU|3
UUOQ||Parusnoye|Parus|RU|1|||UUOO:31
UUOT|TBW|Tambov|Donskoye|RU|2|||UUOO:189
UUOW||Valuyki||RU|1|||UUOO:193
UUTZ||Shetakovo|Zavidovo Air Park|RU|1|U.C.||UUEE:83
UUWE||Balabanovo|Yermolino Air Base|RU|2|||UUWW:58
UUWK||Kudinovo||RU|1|||UUWW:90
UUWW|VKO|Moscow|Vnukovo|RU|4
UUYH|UCT|Ukhta||RU|3
UUYI|INA|Inta||RU|2|||UUYS:124
UUYK||Vuktyl||RU|2|||UUYP:144
UUYM||Emva|Yemva|RU|1|||UUYY:107
UUYN||Noviy Bor||RU|1|||ULAM:109
UUYP|PEX|Pechora||RU|3
UUYS|USK|Usinsk||RU|3
UUYT||Ust-Kulom||RU|1|||UUYY:151
UUYV||Izhma||RU|2|||UUYP:148
UUYW|VKT|Vorkuta||RU|3
UUYX|UTS|Ust-Tsylma||RU|2|||UUYH:222
UUYY|SCW|Syktyvkar||RU|3
UWGB||Bolshoye Boldino||RU|1|||UWPS:100
UWGG|GOJ|Nizhny Novgorod|Nizhny Novgorod / Strigino|RU|4
UWKB|UUA|Bugulma||RU|3
UWKD|KZN|Kazan||RU|4
UWKE|NBC|Nizhnekamsk|Begishevo|RU|3
UWKG||Kazan|Borisoglebskoye|RU|2|||UWKD:30
UWKJ|JOK|Yoshkar-Ola||RU|2|||UWKS:76
UWKP||Menzelinsk||RU|1|||UWKE:63
UWKS|CSY|Cheboksary||RU|3
UWLL|ULV|Ulyanovsk|Ulyanovsk Baratayevka|RU|3
UWLS|||Soldatskaya Tashla|RU|1|||UWLL:29
UWLW|ULY|Cherdakly|Ulyanovsk Vostochny|RU|3
UWOD||Adamovka||RU|1|||UWOR:105
UWOH||Kvarkeno||RU|1|||UWOR:135
UWOI||Orenburg|Chebenki Air Base|RU|1|||UWOO:21
UWOO|REN|Orenburg|Orenburg Central|RU|3
UWOR|OSW|Orsk||RU|3
UWOS|||Svetlyy|RU|1|||UWOR:164
UWOX||Buzuluk||RU|1|||UWWW:157
UWPP|PEZ|Penza||RU|3
UWPS|SKX|Saransk||RU|4
UWSB|BWO|Balakovo||RU|3
UWSG|GSV|Saratov|Gagarin|RU|4
UWSK||Krasny Kut||RU|1|||UWSG:100
UWTK||Karaishevo||RU|1|||UWKD:8
UWUB|BCX|Beloretsk||RU|1|||USCM:67
UWUK|OKT|Kzyl-Yar|Oktyabrskiy|RU|1|||UWKB:44
UWUU|UFA|Ufa||RU|4
UWUZ||Aktanysh||RU|1|||UWKE:125
UWWB||Buguruslan|Buguruslan Severny|RU|2|||UWKB:106
UWWE||Tolyatti|Verkhneye Sancheleyevo|RU|1|||UWWW:49
UWWG||Samara|Bezymyanka|RU|2|||UWWW:33
UWWS||Samara|Smyshlyayevka|RU|1|||UWWW:32
UWWW|KUF|Samara|Kurumoch|RU|4
UWWZ||Buguruslan|Buguruslan Glavny|RU|1|||UWKB:116
UZFA|AZN|Andijan||UZ|3||UTKA UTFA
UZFF|FEG|Fergana||UZ|3||UTKF UTFF
UZFN|NMA|Namangan||UZ|4||UTFN UTKN
UZKK|OQN|Kokand||UZ|1||UTKK|UZFF:65
UZNM|MOK|Muynak||UZ|1||UTNM UTMM|UZNN:149
UZNN|NCU|Nukus||UZ|4||UTNN
UZNU|UGC|Urgench||UZ|4||UTNU
UZSA|NVI|Navoi||UZ|3||UTSA
UZSB|BHK|Bukhara||UZ|4||UTSB
UZSH||Shahrisabz||UZ|1||UTSH|UZSS:73
UZSK|KSQ|Karshi||UZ|2||UTSK
UZSL||Khanabad|Karshi-Khanabad Air Base|UZ|1||UTSL|UZSK:13
UZSM||Tandy Bulak||UZ|1||UTSM|UZSA:189
UZSN|AFS|Zarafshan|Sugraly|UZ|1||UTSN|UZSA:184
UZSO||Sokh||UZ|1||UTSO|UZFF:67
UZSR||Sariasiya||UZ|1||UTSR|UTDD:78
UZSS|SKD|Samarkand||UZ|4||UTSS
UZST|TMJ|Termez||UZ|3||UTST
UZSU||Uchkuduk||UZ|1||UTSU|UZNU:239
UZTC||Chirchik|Chirchik Air Base|UZ|1||UTTC|UZTP:27
UZTP|TVT|Tashkent|Tashkent-Khumo|UZ|3||UTTP
UZTT|TAS|Tashkent||UZ|4||UTTT
UZTZ|OMN|Zomin||UZ|3||UTTZ
VAAH|AMD|Ahmedabad|Sardar Vallabh Patel|IN|4
VAAK|AKD|Akola||IN|2|||VAAM:70
VAAM|AVR|Amravati||IN|3
VAAU|IXU|Aurangabad||IN|3
VAAV||Aamby Valley City|Aamby Valley|IN|1|||VANM:53
VABB|BOM|Mumbai|Chhatrapati Shivaji Maharaj|IN|4
VABJ|BHJ|Bhuj||IN|3
VABO|BDQ|Vadodara||IN|4
VABP|BHO|Bhopal|Raja Bhoj|IN|4
VABV|BHU|Bhavnagar||IN|3
VADN|NMB|Daman||IN|2|||VASU:76
VADS||Deesa||IN|1|||VAAH:139
VADU|DIU|Diu||IN|2
VAGD|GDB|Gondia||IN|3
VAGN|GUX||Guna|IN|1|||VABP:152
VAHS|HSR|Rajkot||IN|4
VAID|IDR|Indore|Devi Ahilya Bai Holkar|IN|4
VAJB|JLR|Jabalpur||IN|3
VAJJ||Mumbai|Juhu|IN|1|||VABB:4
VAJL|JLG|Jalgaon||IN|2
VAJM|JGA|Jamnagar||IN|3
VAJO||Karwar|Fury|IN|1|Karwar, Jodhpur||VIJO:21
VAKD||Khandwa||IN|1|||VAID:111
VAKE|IXY|Kandla||IN|3
VAKP|KLH|Kolhapur||IN|3
VAKS|IXK|Keshod||IN|3
VALT|LTU|Latur|Murod Kond|IN|3
VAMA||Mundra||IN|1|||VAKE:46
VAND|NDC|Nanded||IN|3
VANM|NMI|Navi Mumbai||IN|4
VANP|NAG|Nagpur|Dr. Babasaheb Ambedkar|IN|4
VANR||Nashik|Gandhinagar|IN|1|||VAOZ:20
VANY||Naliya|Naliya Air Force Station|IN|1|||VABJ:80
VAOZ|ISK|Nashik||IN|4
VAPO|PNQ|Pune||IN|4
VAPR|PBD|Porbandar||IN|3
VARG|RTC||Ratnagiri|IN|2|||VAKP:109
VARK|RAJ|Rajkot||IN|2|||VAHS:28
VASD|SAG|Shirdi||IN|4|Kakadi
VASL|SSE|Solapur||IN|2|||VALT:104
VASU|STV|Surat||IN|4
VAUD|UDR|Udaipur|Maharana Pratap|IN|3
VCBI|CMB|Colombo|Bandaranaike International Colombo|LK|4
VCCA|ACJ|Anuradhapura||LK|2|||VCCT:87
VCCB|BTC|Batticaloa||LK|3
VCCC|RML|Colombo|Colombo Ratmalana|LK|4
VCCG|ADP|Ampara||LK|2|||VCCB:41
VCCH|HIM|Polonnaruwa Town|Hingurakgoda Air Force Base|LK|2|||VCCT:59
VCCJ|JAF|Jaffna||LK|4
VCCK|KCT|Galle|Koggala|LK|3
VCCN|KTY|Kalutara|Katukurunda Air Force Base|LK|1|||VCCC:32
VCCS|GIU|Sigiriya|Sigiriya Air Force Base|LK|1|||VCCT:82
VCCT|TRR|Trincomalee|China Bay|LK|3
VCCV||Vavuniya||LK|1|||VCCT:78
VCCW|WRZ|Weerawila||LK|1|||VCRI:13
VCRI|HRI|Mattala|Mattala Rajapaksa|LK|3
VDBG|BBM|Battambang||KH|3
VDDS|DSY|Ta Noun|Dara Sakor|KH|4
VDKC||Kompong Cham|Kampong Cham|KH|1|||VDTI:93
VDKK|KKZ|Krong Khemara Phoumin|Koh Kong|KH|1|||VDDS:82
VDMK|MWV|Sen Monorom|Mondulkiri|KH|1|||VVBM:104
VDPP|PNH|Phnom Penh||KH|3|Phnom Penh (Pou Senchey)||VDTI:22
VDRK|RBE|Ratanakiri||KH|2|||VVPK:115
VDSA|SAI|Siem Reap|Siem Reap-Angkor|KH|4
VDSV|KOS|Preah Sihanouk|Sihanouk|KH|4
VDSY|KZD|Krakor||KH|1|||VDSA:93
VDTI|KTI|Phnom Penh|Techo|KH|4|Phnom Penh (Boeng Khyang)
VEAB|IXD|Allahabad|Prayagraj|IN|3||VIAL
VEAH|AZH|Azamgarh||IN|1|||VEGK:73
VEAN|IXV||Along|IN|2|||VEMN:80
VEAP|AHA|Ambikapur|Maa Mahamaya|IN|3
VEAT|IXA|Agartala|Agartala - Maharaja Bir Bikram|IN|3
VEAY|AYJ|Faizabad|Maharshi Valmiki|IN|3
VEAZ||Aizawl|Tuirial|IN|1|||VELP:21
VEBA||Kolkata|Behala|IN|1|||VECC:23
VEBD|IXB|Bagdogra||IN|4|Siliguri
VEBG|RGH|Balurghat||IN|1|||VGSD:56
VEBI|SHL|Shillong||IN|3
VEBK|||Bokaro|IN|1|||VERC:92
VEBL||Bhusugaon|Barbil Tonto Airstrip|IN|1|||VEJH:137
VEBN|VNS|Varanasi|Lal Bahadur Shastri|IN|4||VIBN
VEBP||Berhampur|Berhampur Rangeilunda|IN|1|Berhampur (Brahmapur)||VEBS:144
VEBS|BBI|Bhubaneswar|Biju Patnaik|IN|4
VEBT||Patna|Bihta Air Force Station|IN|1|||VEPT:21
VEBU|PAB|Bilaspur||IN|3||VABI
VECA||Chabua|Chabua Air Force Station|IN|1|||VEMN:10
VECC|CCU|Kolkata|Netaji Subhash Chandra Bose|IN|4
VECK|||Chakulia|IN|1|||VEDG:140
VECO|COH|Cooch Behar||IN|1|||VGSD:85
VECT|CWK|Chitrakoot||IN|1|||VERW:79
VECX|KNU|Kanpur||IN|3||VICX
VEDB|DBD||Dhanbad|IN|2|||VEDO:74
VEDG|RDP|Durgapur|Kazi Nazrul Islam|IN|3
VEDH|DBR|Darbhanga||IN|3
VEDO|DGH|Deoghar||IN|2
VEDX||Doarkhol|Kharagpur Airport / Kalaikunda Air Force Station|IN|1|||VECC:131
VEDZ|DEP|Daporijo||IN|1|||VELR:78
VEGK|GOP|Gorakhpur||IN|3
VEGT|GAU|Guwahati|Lokpriya Gopinath Bordoloi|IN|4
VEGY|GAY|Gaya||IN|3
VEHK||Sambalpur|Hirakud|IN|1|||VEJH:37
VEHO|HGI|Hollongi|Itanagar Donyi Polo Hollongi|IN|3
VEHX||Jalpaiguri|Hashimara Air Force Station|IN|2|||VQPR:79
VEIM|IMF|Imphal|Bir Tikendrajit|IN|4
VEJH|JRG||Jharsuguda|IN|2
VEJP|PYB|Jeypore||IN|1|||VEJR:58
VEJR|JGB|Jagdalpur||IN|2
VEJS|IXW|Jamshedpur|Sonari|IN|2|||VERC:103
VEJT|JRH|Jorhat||IN|3
VEKG||Kishanganj||IN|1|||VNCG:57
VEKI|KBK|Kushinagar||IN|2|||VEGK:44
VEKJ||Gopinathapur|Kendujhar|IN|1|||VEJH:160
VEKM|IXQ|Manik Bhandar|Kamalpur|IN|1|||VEAT:64
VEKO|HJR|Khajuraho||IN|3||VAKJ
VEKR|IXH|Kailashahar||IN|2|||VGSY:74
VEKU|IXS|Silchar||IN|3
VEKW|IXN|Khowai||IN|1|||VEAT:42
VELP|AJL|Aizawl|Lengpui|IN|3|Aizawl (Lengpui)
VELR|IXI|Lilabari|Lilabari North Lakhimpur|IN|3
VEMH|LDA|Malda||IN|1|||VGRJ:81
VEMN|DIB|Dibrugarh||IN|3
VEMR|DMU|Dimapur||IN|3
VEMZ|MZU|Muzaffarpur||IN|2|||VEDH:61
VENP||Nawapara||IN|1|||VERP:88
VEPG|IXT|Pasighat||IN|1|||VEMN:72
VEPH|||Panagarh Air Force Station|IN|2|||VEDG:25
VEPI||Barrackpore|Barrackpore Air Force Station|IN|1|||VECC:17
VEPT|PAT|Patna|Jay Prakash Narayan|IN|3
VEPU|||Purnea|IN|1|||VNVT:82
VEPY|PYG|Pakyong||IN|1|||VEBD:66
VERB||Tarauna|Fursatganj|IN|1||VIRB|VILK:75
VERC|IXR|Ranchi|Birsa Munda|IN|3
VERK|RRK|Rourkela||IN|2|||VEJH:88
VERL|||Raxaul|IN|1|||VNSI:26
VERP|RPR|Raipur|Swami Vivekananda|IN|3||VARP
VERU|RUP|Rupsi||IN|1|||VGSD:109
VERW|REW|Rewa|Rewa Airport, Chorhata, REWA|IN|3
VESL||Sultanpur||IN|1||VISL|VEAY:57
VEST|TNI||Satna|IN|1||VIST|VERW:38
VETJ|TEI|Tezu||IN|1|||VEMN:121
VETU||Tuting|Tuting Advanced Landing Ground|IN|1|||ZUNZ:65
VETZ|TEZ||Tezpur|IN|3
VEUK|UKE|Bhawanipatna|Utkela|IN|3
VEZO|ZER|Ziro||IN|2|||VELR:42
VGBG||Bogra||BD|1|||VGRJ:85
VGBR|BZL|Barisal||BD|3
VGCB|CXB|Cox's Bazar||BD|3
VGCM|CLA|Comilla||BD|1|||VEAT:50
VGEG|CGP|Chattogram|Shah Amanat|BD|4|Chattogram (Chittagong)
VGHS|DAC|Dhaka|Hazrat Shahjalal|BD|4||VGZR
VGIS|IRD|Ishurdi||BD|2|||VGRJ:54
VGJR|JSR|Jashore|Jessore|BD|3|Jashore (Jessore)
VGLM||Lalmonirhat||BD|1|||VGSD:54
VGRJ|RJH|Rajshahi|Shah Makhdum|BD|3
VGSD|SPD|Saidpur||BD|3
VGSG|TKR|Thakurgaon||BD|1|||VGSD:58
VGSH|ZHM|Shamshernagar||BD|1|||VGSY:63
VGSY|ZYL|Sylhet|Osmany|BD|4
VGTJ||Dhaka|Tejgaon|BD|1|||VGHS:7
VHHH|HKG|Hong Kong||HK|4
VHSK||Islands|Shek Kong Air Base|HK|2|||VHHH:22
VIAG|AGR|Agra|Agra Airport / Agra Air Force Station|IN|3
VIAH|HRH|Aligarh||IN|1|||VIND:63
VIAM||Ambala|Ambala Air Force Station|IN|2|||VICG:34
VIAR|ATQ|Amritsar|Sri Guru Ram Das Ji|IN|4
VIAW||Awantipura|Awantipura Air Force Station|IN|1|||VISR:22
VIAX|AIP|Adampur||IN|2
VIBK|BKB|Bikaner|Nal|IN|2|||VIJO:203
VIBL||Lucknow|Bakshi Ka Talab Air Force Station|IN|1|||VILK:25
VIBR|KUU|Bhuntar|Kullu Manali|IN|3
VIBT|BUP||Bhatinda Air Force Station|IN|2|||VIHX:99
VIBW||Bhiwani||IN|1|||VIHR:58
VIBY|BEK|Bareilly|Bareilly Air Force Station|IN|3
VICG|IXC|Chandigarh|Shaheed Bhagat Singh|IN|4
VIDD||New Delhi|Safdarjung|IN|2|||VIDP:11
VIDN|DED|Dehradun|Dehradun Jolly Grant|IN|3|Dehradun (Jauligrant)
VIDP|DEL|New Delhi|Indira Gandhi|IN|4
VIDX|HDO|Ghaziabad|Hindon Airport / Hindon Air Force Station|IN|2
VIGG|DHM|Kangra||IN|3
VIGR|GWL|Gwalior||IN|3
VIHR|HSS|Hisar|Maharaja Agrasen|IN|4
VIHX|HWR|Halwara||IN|4
VIJN|||Jhansi|IN|1|||VIGR:95
VIJO|JDH|Jodhpur||IN|3
VIJP|JAI|Jaipur||IN|4
VIJR|JSA||Jaisalmer|IN|3
VIJU|IXJ|Jammu||IN|3
VIKA||Kanpur|Kanpur Civil Airport|IN|1|Old||VECX:6
VIKG|KQH|Ajmer|Kishangarh Airport Ajmer|IN|3|Ajmer (Kishangarh)
VIKO|KTU|Kota||IN|2|||VIJP:185
VILD|LUH||Ludhiana|IN|2|||VIHX:33
VILH|IXL|Leh|Leh Kushok Bakula Rimpochee|IN|3
VILK|LKO|Lucknow|Chaudhary Charan Singh|IN|4
VILP||Lalitpur||IN|1|||VEKO:152
VIMB|MZS|Moradabad||IN|3
VIND|DXN|Noida||IN|4|Gautam Buddha Nagar
VINL|||Narnaul|IN|1|||VIDP:102
VIPG||Pithoragarh||IN|1||VIDF|VNDT:77
VIPK|IXP|Pathankot||IN|3
VIPL|||Patiala|IN|1|||VICG:57
VIPT|PGH|Pantnagar||IN|3
VIPX|||Phalodi Air Force Station|IN|1|||VIJO:126
VISA|||Sirsa Air Force Station|IN|2|||VIHR:83
VISM|SLV|Jubbarhatti|Shimla|IN|1|||VICG:53
VISP|SWN|Sherpur Naqeebpur|Sarsawa Air Force Station|IN|1|||VIDN:76
VISR|SXR|Srinagar||IN|4
VISV|VSV|Shravasti||IN|2
VIUT|||Uttarlai|IN|1|||VIJR:135
VIUX||Udhampur|Udhampur Air Force Station|IN|2|||VIJU:38
VLAP|AOU|Attopeu||LA|1|||VVPK:137
VLBK|BOR|Ton Phueng|Bokeo|LA|3
VLFL|PCQ|Phongsaly|Boun Neau|LA|1|||VLLN:92
VLHS|HOE|Huay Xai|Ban Huoeisay|LA|1|||VLBK:29
VLLB|LPQ|Luang Phabang||LA|4
VLLN|LXG|Luang Namtha||LA|2
VLNK|||Nongkhang|LA|1|||VVDB:140
VLOS|ODY|Oudomsay||LA|2
VLPS|PKZ|Pakse||LA|4
VLPV|||Phonesavanh|LA|1|||VLXK:6
VLSB|ZBY|Sainyabuli|Sayaboury|LA|1|||VLLB:88
VLSK|ZVK||Savannakhet|LA|2|||VTUW:93
VLSN|NEU||Sam Neua|LA|2|||VLXK:144
VLSP|||Sepon|LA|1|||VVDH:89
VLSV|VNA|Salavan||LA|1|||VLPS:93
VLTK|THK|Thakhek||LA|1|||VTUW:23
VLVT|VTE|Vientiane|Wattay|LA|4
VLXK|XKH|Xieng Khouang||LA|2
VLXL|XIE|Xienglom||LA|1|||VTCN:90
VMMC|MFM|Macau||MO|4|Nossa Senhora do Carmo
VNBG|BJH|Bajhang||NP|1|||VNDT:39
VNBJ|BHP|Bhojpur||NP|1|||VNTR:23
VNBL|BGL|Baglung||NP|1|||VNPK:31
VNBP|BHR|Bharatpur||NP|2
VNBR|BJU|Bajura||NP|1|||VNST:54
VNBT|BIT|Baitadi||NP|1|||VNDT:44
VNBW|BWA|Bhairahawa|Gautam Buddha|NP|4|Siddharthanagar
VNCG|BDP|Bhadrapur||NP|2
VNCJ|RUK|Rukumkot|Rukum Chaurjahari|NP|1||VNRK|VNSK:55
VNDG|DNP|Dang|Tulsipur|NP|1|||VNNG:62
VNDH|DHI|Dhangarhi||NP|1|||VNDT:66
VNDL|DAP|Darchula||NP|1|||VNDT:59
VNDP|DOP|Dolpa||NP|2
VNDR||Dhorpatan||NP|1|||VNDP:59
VNDT|SIH|Silgadi Doti||NP|2
VNGK|GKH|Gorkha|Palungtar|NP|1|||VNBP:40
VNJI|JIR|Jiri||NP|1|||VNLK:50
VNJL|JUM|Jumla||NP|2
VNJP|JKR|Janakpur||NP|3
VNJS|JMO|Jomsom||NP|2
VNKD||Diktel|Khanidanda|NP|1|||VNTR:44
VNKL|||Kangel Danda|NP|1|||VNLK:32
VNKT|KTM|Kathmandu|Tribhuvan|NP|4
VNLD|LDN|Lamidanda||NP|1|||VNLK:49
VNLK|LUA|Lukla|Tenzing-Hillary|NP|3
VNLT|LTG|Langtang||NP|1|||VNKT:60
VNMA|NGX|Ngawal|Manang|NP|1|||VNJS:39
VNMG|MEY|Meghauli||NP|1|||VNBP:23
VNMN|XMG|Mahendranagar||NP|1|||VIPT:66
VNNG|KEP|Nepalgunj||NP|3
VNPK|PKR|Pokhara|Pokhara Domestic|NP|3
VNPL|PPL|Phaplu||NP|1|||VNLK:24
VNPR|PHH|Pokhara||NP|4
VNRB|RJB|Rajbiraj||NP|1|||VNVT:53
VNRC|RHP|Ramechhap||NP|1|||VNLK:73
VNRP|RPA|Rolpa||NP|1|||VNDP:80
VNRR||Karkibada|Talcha Rara Mugu|NP|1|||VNJL:28
VNRT|RUM|Rumjatar||NP|1|||VNLK:46
VNSB|SYH|Namche Bazaar|Syangboche|NP|1|||VNLK:14
VNSI|SIF|Simara||NP|2
VNSK|SKH|Surkhet||NP|2
VNSL||Musikot|Rukum Salle|NP|2
VNSR|FEB|Sanfebagar||NP|1|||VNDT:27
VNST|IMK|Simikot||NP|2
VNTH||Khotang Bazar|Thamkharka|NP|1|||VNTR:45
VNTJ|TPJ|Taplejung||NP|3
VNTP|TPU|Tikapur||NP|1|||VNSK:51
VNTR|TMI|Tumling Tar||NP|2
VNVT|BIR|Biratnagar||NP|3
VOAR||Arakkonam|INS Rajali / Arakkonam Naval Air Station|IN|1|||VOMM:53
VOAT|AGX|Agatti||IN|3
VOBG||Bangalore|HAL|IN|2|||VOBL:28
VOBI|BEP|Bellary||IN|2|||VOKU:151
VOBL|BLR|Bengaluru|Kempegowda International Airport Bengaluru|IN|4
VOBM|IXG|Belgaum|Belagavi|IN|3||VABM
VOBR|IXX|Bidar|Bidar Airport / Bidar Air Force Station|IN|2|||VOGB:87
VOBX||Campbell Bay|Campbell Bay Airport / INS Baaz|IN|2|||WITT:234
VOBZ|VGA|Vijayawada||IN|4
VOCB|CJB|Coimbatore||IN|4
VOCC||Kochi|INS Garuda / Willingdon Island Naval Air Station|IN|1|||VOCI:27
VOCI|COK|Kochi|Cochin|IN|4
VOCL|CCJ|Calicut||IN|4
VOCP|CDP|Kadapa||IN|3
VOCX|CBD|IAF Camp|Car Nicobar Air Force Base|IN|2|||VOPB:277
VODG||Hyderabad|Dundigul Air Force Academy|IN|2|||VOHS:44
VODX||Diglipur|INS Kohassa|IN|1||VABM|VOPB:181
VOGA|GOX|Goa|Manohar|IN|4|Mopa
VOGB|GBI|Kalaburagi||IN|2
VOGO|GOI|Goa|Goa Dabolim|IN|4|Vasco da Gama
VOHB|HBX|Hubballi||IN|3||VAHB
VOHK||Secunderabad|Hakimpet|IN|1|||VOHS:37
VOHS|HYD|Hyderabad|Rajiv Gandhi|IN|4
VOHY|BPM|Hyderabad|Begumpet|IN|2|||VOHS:25
VOJK||Bengaluru|Jakkur|IN|1|||VOBL:18
VOJV|VDY|Toranagallu|Jindal Vijaynagar|IN|1|||VOHB:168
VOKN|CNN|Kannur||IN|4
VOKP||Basapur|Baldota Koppal|IN|1|||VOHB:122
VOKU|KJB|Orvakal|Kurnool|IN|3
VOMD|IXM|Madurai||IN|3
VOML|IXE|Mangaluru||IN|4
VOMM|MAA|Chennai||IN|4
VOMY|MYQ|Mysore||IN|3
VONS||Nagarjuna Sagar||IN|1|||VOHS:122
VONV|NVY|Neyveli||IN|1|||VOPC:50
VOPB|IXZ|Port Blair|Veer Savarkar International Airport / INS Utkrosh|IN|4
VOPC|PNY|Puducherry|Pondicherry|IN|3|Puducherry (Pondicherry)
VOPN|PUT|Puttaparthi|Sri Sathya Sai|IN|2|||VOBL:106
VORG|RMD|Ramagundam|Basanth Nagar|IN|1|||VOHS:193
VORM||Ramnad|Ramnad Naval Air Station|IN|1|||VOMD:112
VORR|||Raichur|IN|1|||VOKU:107
VORY|RJA|Madhurapudi|Rajahmundry|IN|3
VOSH|RQY|Shimoga|Rashtrakavi Kuvempu|IN|2|||VOML:128
VOSM|SXV|Salem||IN|2|||VOTR:134
VOSR|SDW|Chipi|Sindhudurg|IN|3
VOSX||Sulur|Coimbatore Air Force Station|IN|1|||VOCB:13
VOTJ|TJV|Thanjavur|Thanjavur Air Force Station|IN|1|||VOTR:43
VOTK|TCR|Vagaikulam|Tuticorin|IN|2
VOTP|TIR|Tirupati||IN|4
VOTR|TRZ|Tiruchirappalli||IN|4
VOTV|TRV|Thiruvananthapuram||IN|4
VOTX||Chennai|Tambaram Air Force Station|IN|1|||VOMM:11
VOVI|VTZ|Visakhapatnam|Alluri Sitarama Raju International Airport|IN|4|Vizag
VOVR||Vellore||IN|1|||VOTP:95
VOVZ||Visakhapatnam|INS Dega Airport|IN|2|visakhapatnam international airport|VEVZ|VOVI:40
VOWA|WGC|Warangal||IN|1|||VOHS:146
VOYK||Yelahanka|Yelahanka Air Force Station|IN|1|||VOBL:13
VQBT|BUT|Jakar|Bathpalathang|BT|2
VQGP|GLU|Gelephu||BT|2|||VQBT:80
VQPR|PBH|Paro||BT|4
VQTY|YON|Yongphulla||BT|2
VRAH|HRF||Hoarafushi|MV|2
VRBK|HDK|Kulhudhuffushi||MV|2
VRCF|FND|Funadhoo||MV|2
VRDA|NMF|Noonu Atoll|Maafaru|MV|3
VREI|IFU|Ifuru Island|Ifuru|MV|1|||VRDA:51
VRGD|LMV|Naifaru|Madivaru|MV|1|||VRDA:41
VRMD|DRV|Baa Atoll|Dharavandhoo|MV|2
VRMG|GAN|Gan||MV|4
VRMH|HAQ|Haa Dhaalu Atoll|Hanimaadhoo|MV|4
VRMK|KDO|Kadhdhoo||MV|3
VRMM|MLE|Malé|Velana|MV|4
VRMO|GKK|Huvadhu Atoll|Kooddoo|MV|2
VRMR|FVM|Fuvahmulah Island|Fuvahmulah|MV|1||VRMF|VRMG:53
VRMT|KDM|Huvadhu Atoll|Kaadedhdhoo|MV|3
VRMU|DDD|Kudahuvadhoo|Dhaalu Atoll|MV|1|||VRNT:59
VRMV|VAM|Maamigili|Villa International Airport Maamigili|MV|3
VRNT|TMF|Thimarafushi||MV|2
VRQF|FMT|Faresmaathodaa|Faresmaathoda|MV|2
VRQM|RUL|Maavaarulu|Maavaarulaa|MV|2
VTBC||Khao Wua|Chanthaburi Airstrip|TH|1|||VTBO:51
VTBD|DMK|Bangkok|Don Mueang|TH|4
VTBH|||Sa Pran Nak|TH|1|||VTBD:115
VTBI||Prachin Buri|Khao E To|TH|1|||VTBS:81
VTBK|KDT|Nakhon Pathom|Kamphaeng Saen|TH|2|||VTBD:77
VTBL|KKM|Lop Buri|Khok Kathiam|TH|2|||VTBD:107
VTBN||Prachuap Khiri Khan||TH|1|||VTPH:26
VTBO|TDX|Laem Ngop|Trat|TH|3
VTBP||Mueang Prachuap Khiri Khan|Prachuap|TH|1|||VTPH:96
VTBS|BKK|Bangkok|Suvarnabhumi|TH|4
VTBT||Bang Phra||TH|1|||VTBS:55
VTBU|UTP|Rayong|U-Tapao–Rayong–Pattaya|TH|4
VTBV||Mueang Trat|Koh Takian|TH|1|||VTBO:22
VTBW||Watthana Nakhon||TH|1|||VDBG:124
VTCC|CNX|Chiang Mai||TH|4
VTCH|HGN|Mae Hong Son||TH|3
VTCI|PYY|Pai||TH|1|||VTCH:49
VTCL|LPT||Lampang|TH|3
VTCM||Ban Thi||TH|1|||VTCC:18
VTCN|NNT||Nan|TH|3
VTCO|||Lamphun|TH|2
VTCP|PRH||Phrae|TH|2|||VTCL:71
VTCS||Mae Sariang||TH|1|||VTCH:125
VTCT|CEI|Chiang Rai|Mae Fah Luang - Chiang Rai|TH|4
VTCY|||Nok|TH|1|||VTCC:19
VTED||Ban Mak Khaen|Udorn Air Base|TH|1|||VTUD:1
VTPB|PHY||Phetchabun|TH|3
VTPH|HHQ|Hua Hin||TH|3
VTPI|TKH|Takhli|Takhli Royal Thai Air Force Base|TH|2|||VTBD:155
VTPL||Lom Sak|Sak Long|TH|1|||VTPB:18
VTPM|MAQ||Mae Sot|TH|3
VTPN|||Nakhon Sawan|TH|1|||VTPP:124
VTPO|THS||Sukhothai|TH|3
VTPP|PHS|Phitsanulok||TH|3
VTPR||Photharam||TH|1|||VTBD:98
VTPT|TKT||Tak|TH|2|||VTPO:71
VTPY|||Khunan Phumipol|TH|1|||VTPM:81
VTSA|||Khoun Khan|TH|1|||VTSS:46
VTSB|URT|Surat Thani||TH|3
VTSC|NAW||Narathiwat|TH|3
VTSE|CJM|Chumphon||TH|3
VTSF|NST|Nakhon Si Thammarat||TH|3
VTSG|KBV|Krabi||TH|4
VTSH|SGZ||Songkhla|TH|2|||VTSS:37
VTSK|PAN||Pattani|TH|2|||VTSC:71
VTSM|USM|Koh Samui|Samui|TH|4|Na Thon
VTSN||Nakhon Si Thammarat|Cha Eian|TH|2|||VTSF:8
VTSP|HKT|Phuket||TH|4
VTSR|UNN|Ranong||TH|3
VTSS|HDY|Hat Yai||TH|4
VTST|TST|Trang||TH|3
VTSW||Talang|Phuket Airpark|TH|1|||VTSP:14
VTSY|BTZ|Betong||TH|2|||WMKA:94
VTUD|UTH|Udon Thani||TH|4
VTUI|SNO||Sakon Nakhon|TH|3
VTUJ|PXR|Surin||TH|3
VTUK|KKC|Khon Kaen||TH|3
VTUL|LOE||Loei|TH|3
VTUN||Nakhon Ratchasima|Khorat|TH|1|||VTUO:130
VTUO|BFV|Buriram|Buri Ram|TH|3
VTUQ|NAK|Chaloem Phra Kiat|Nakhon Ratchasima|TH|2|||VTUO:106
VTUR|||Rob Muang|TH|1|||VTUV:15
VTUU|UBP|Ubon Ratchathani||TH|3
VTUV|ROI|Roi Et||TH|3
VTUW|KOP|Nakhon Phanom||TH|3
VTUZ||Khon Kaen|Nam Phung Dam|TH|1||VTEZ|VTUK:28
VVBM|BMV|Buon Ma Thuot||VN|3
VVCA|VCL|Tam Nghĩa|Chu Lai|VN|2
VVCI|HPH|Haiphong|Cat Bi|VN|4|Haiphong (Hai An)
VVCM|CAH|Ca Mau City|Cà Mau|VN|3
VVCR|CXR|Nha Trang|Cam Ranh International Airport / Cam Ranh Air Base|VN|4|Nha Trang/nha Trang aiurportCam Ranh
VVCS|VCS|Con Dao||VN|3
VVCT|VCA|Can Tho||VN|4
VVDB|DIN|Dien Bien Phu||VN|3
VVDH|VDH|Dong Hoi||VN|3
VVDL|DLI|Da Lat|Lien Khuong|VN|3
VVDN|DAD|Da Nang||VN|4
VVGL||Hanoi|Gia Lam Air Base|VN|2|Hanoi (Long Bien)||VVNB:22
VVKP||Kep|Kep Air Base|VN|1|||VVNB:51
VVLT|LTH|Ho Chi Minh City|Long Thanh International Airport|VN|3|Ho Chi Minh City (Long Thanh) Under Construction||VVTS:43
VVNB|HAN|Hanoi|Noi Bai|VN|4|Hanoi (Soc Son)
VVNS|SQH|Mai Son|Na San|VN|1|||VVDB:108
VVPB|HUI|Huế|Phu Bai|VN|4
VVPC|UIH|Quy Nohn|Phu Cat|VN|3
VVPK|PXU|Pleiku||VN|3
VVPQ|PQC|Phu Quoc Island|Phú Quốc|VN|4
VVPR|PHA|Phan Rang||VN|1|||VVCR:50
VVRG|VKG|Rach Gia||VN|3
VVTH|TBB|Tuy Hoa|Dong Tac|VN|3
VVTS|SGN|Ho Chi Minh City|Tan Son Nhat|VN|4
VVTX|THD|Thanh Hóa|Tho Xuan|VN|2
VVVD|VDO|Van Don||VN|3
VVVH|VII|Vinh||VN|3
VVVT|VTG|Vũng Tàu|Vung Tau|VN|1|||VVTS:69
VVYB||Yen Bai|Yen Bai Air Base|VN|1|||VVNB:114
VYAN|VBA|Aeng|Ann|MM|1|||VYKP:64
VYAS||Anisakan||MM|1|||VYMD:52
VYBG|NYU|Nyaung U|Bagan|MM|2
VYBM|BMO|Banmaw||MM|2
VYBP|VBP|Bokpyinn||MM|1|||VTSE:84
VYCI||Cocokyun|Coco Island|MM|1|||VOPB:286
VYCZ|VBC|Mandalay|Chanmyathazi|MM|1|||VYMD:29
VYDW|TVY|Dawei||MM|3
VYFS|SRU|Falam|Surbung|MM|1|||VELP:143
VYGG|GAW|Gangaw||MM|1|||VYBG:138
VYGW|GWA|Gwa||MM|1|||VYPN:90
VYHB||Hmawbi|Hmawbi Air Base|MM|1|||VYYY:24
VYHH|HEH|Heho||MM|3
VYHL|HOX|Hommalinn||MM|1|||VEIM:104
VYHN|TIO|Tilin||MM|1|||VYBG:104
VYHT|HEB|Hinthada||MM|1|||VYYY:107
VYKG|KET|Kengtung||MM|3
VYKI|KHM|Kanti||MM|2
VYKL|KMV|Kalemyo|Kalay|MM|1|||VELP:163
VYKP|KYP|Kyaukpyu||MM|3
VYKT|KAW|Kawthoung||MM|3
VYKU|KYT|Kyauktu||MM|1|||VYBG:86
VYLK|LIW|Loikaw||MM|3
VYLN||Lonekin||MM|1|||VYKI:79
VYLS|LSH|Lashio||MM|3
VYLY||Lanywa||MM|1|||VYBG:29
VYMD|MDL|Mandalay||MM|4
VYME|MGZ|Mkeik|Myeik|MM|3
VYMH||Mong Hpayak||MM|1|||VYTL:39
VYMI||Mongyai||MM|1|||VYLS:62
VYMK|MYT|Myitkyina||MM|3
VYML||Meiktila|Meiktila Air Base|MM|2|||VYMD:91
VYMM|MNU|Mawlamyine||MM|2
VYMN|MGU|Manaung||MM|1|||VYKP:67
VYMO|MOE||Momeik|MM|2|||VYLS:114
VYMP||Mongpyin||MM|1|||VYKG:63
VYMS|MOG|Mong Hsat||MM|3
VYMT|MGK|Mong Tong||MM|1|||VYMS:45
VYMU||Mrauk-U||MM|1|||VYSW:59
VYMW|MWQ|Magway||MM|2
VYMY|NYW|Monywar||MM|1|||VYMD:108
VYNM||Naungmom||MM|1|||VYPT:43
VYNP||Myitkyina|Nampong Air Base|MM|2|||VYMK:7
VYNS|NMS|Namsang||MM|2|||VYHH:99
VYNT|NYT|Naypyitaw|Nay Pyi Taw|MM|4||VYEL
VYNU|NMT|Namtu||MM|1|||VYLS:40
VYPA|PAA|Hpa-N||MM|1|||VYMM:50
VYPB||Phonngbyin||MM|1|||VEIM:106
VYPE||Paletwa|Seinzan|MM|1|||VGCB:99
VYPI||Pearl Island||MM|1|||VYME:137
VYPK|PAU|Pauk||MM|1|||VYBG:55
VYPL||Pinlebu||MM|1|||VEIM:167
VYPN|BSX|Pathein||MM|2
VYPP|PPU|Pa Pun|Hpapun|MM|1|||VTCH:148
VYPT|PBU|Putao||MM|3
VYPU|PKK|Pakhokku||MM|1|||VYBG:31
VYPW||Palaw||MM|1|||VYME:58
VYPY|PRU|Pye|Pyay|MM|1|||VYTD:110
VYSA||Saw||MM|1|||VYBG:79
VYSL||Salingyi||MM|1|||VYBG:103
VYST||Meiktila|Shante Air Base|MM|2|||VYMD:85
VYSW|AKY|Sittwe||MM|3
VYTD|SNW|Thandwe||MM|3
VYTL|THL|Tachileik||MM|3
VYTN||Tanai||MM|1|||VYKI:114
VYTO||Taungoo||MM|1|||VYNT:69
VYTY||Tanyang||MM|1|||VYLS:86
VYXG||Kyaukhtu South||MM|1|||VYBG:87
VYYE|XYE|Ye||MM|1|||VYMM:129
VYYY|RGN|Yangon||MM|4
WAAA|UPG|Makassar|Sultan Hasanuddin|ID|4
WAAT||Makale-Celebes Island|Makale|ID|1|||WAFB:11
WABA|WET|Tigi|Deiyai / Waghete Baru|ID|1|||WAYY:85
WABB|BIK|Biak|Frans Kaisiepo|ID|3
WABC||Siriwo|Siriwo Airstrip|ID|1|||WAYB:122
WABD|ONI|Moanamani||ID|1|||WAYY:111
WABF|FOO|Nomfor|Kornasoren|ID|1|||WAUU:92
WABG||Kasonaweja|Kasonaweja Airstrip|ID|1|||WAVB:170
WABH|TMY|Tiom-Papua Island|Tiom|ID|1|||WAVB:36
WABI|NBX|Nabire|Douw Aturure|ID|2|||WAYB:186
WABK||Biri|Biri Airstrip|ID|1|||WAYB:126
WABL||Kustera|Kustera Airstrip|ID|1|||WAVB:134
WABM|BXM|Batom||ID|1||WAJG|WAJO:59
WABN||Bareri||ID|1|||WAYB:119
WABO|ZRI|Serui|Stevanus Rumbewas|ID|2|||WABB:71
WABP||Burumeso|Burumeso Airstrip|ID|1|||WAVB:166
WABR||Daufo||ID|1|||WAYB:68
WABS|NKD|Sinak||ID|1|||WAYB:90
WABV||Derapos|Derapos Airstrip|ID|1|||WAYB:88
WABW||Momi-Papua Island|Waren|ID|1|||WAUU:82
WABX||Apouwo|Apouwo Airstrip|ID|1|||WAYY:156
WADB|BMU|Bima|Sultan Muhammad Salahuddin|ID|3||WRRB
WADD|DPS|Denpasar|Denpasar I Gusti Ngurah Rai|ID|4|Kuta Bali|WRRR
WADE||Gerokgak|Lieutenant Colonel Wisnu|ID|2|Gerokgak, Buleleng
WADL|LOP|Mataram|Lombok|ID|4|Mataram (Pujut, Lombok Tengah)
WADS|SWQ|Sumbawa Besar|Sultan Muhammad Kaharuddin III|ID|2||WRRS
WADU|LYK|Lunyuk||ID|1||WRRU|WADS:60
WADY|BWX|Rogojampi|Banyuwangi|ID|2|Rogojampi, Banyuwangi|WARB
WAEA||Dumu Mahak|Mahak Baru|ID|1|||WAQL:52
WAEB||Modjid-Celebes Island|Marimoi|ID|1|||WAEE:47
WAEE|TTE|Ternate|Sultan Babullah|ID|3
WAEF||Ulubongka|Lebone Airstrip|ID|1|||WAFU:52
WAEG|GLX|Galela|Gamarmalamo|ID|1||WAMA|WAEE:121
WAEH|WDB|Weda|Weda Bay|ID|1|||WAEE:75
WAEJ|GEB|Gebe Island|Gebe|ID|1||WAMJ|WASN:151
WAEK|KAZ|Kao|Kuabang|ID|1|||WAEE:70
WAEL|LAH|Labuha-Halmahera Island|Oesman Sadik|ID|1||WAPH|WAEE:163
WAEM|PGQ|Pekaulang|Buli|ID|1||WAME|WAEE:112
WAEO|MAL|Mangole Island|Mangole Airport, Falabisahaya|ID|1||WAPE|WAPN:225
WAES|SQN|Sanana|Emalamo|ID|1|||WAPN:161
WAEW|OTI|Gotalalamo-Morotai Island|Pitu|ID|2|||WAEE:171
WAFB|TRT|Toraja||ID|3
WAFD|LLO|Palopo|Bua - Palopo Lagaligo|ID|2
WAFF|PLW|Palu|Mutiara - SIS Al-Jufrie|ID|3||WAML
WAFJ|MJU|Mamuju|Tampa Padang|ID|1||WAAJ WAWJ|WAFB:119
WAFK||Rampi|Onondowa/Rampi|ID|1|||WAFD:106
WAFL|TLI|Toli Toli-Celebes Island|Sultan Bantilan|ID|2
WAFM|MXB|Masamba|Andi Jemma|ID|1||WAAM WAWM|WAFD:59
WAFN|||Seko|ID|1|||WAFD:98
WAFO|MOH|Morowali|Maleo|ID|2
WAFP|PSJ|Poso-Celebes Island|Kasiguncu|ID|2|||WAFF:100
WAFQ|BQR|Kendek|Maulana Prins Mandapar Airstrip|ID|1|||WAFO:222
WAFS||Sumarorong||ID|1|||WAFB:69
WAFT|TTR|Makale|Pongtiku|ID|1||WAWT|WAFB:19
WAFU|OJU|Tojo Una-Una|Tanjung Api|ID|2
WAFW|LUW|Luwok|Syukuran Aminuddin Amir|ID|2||WAMW|WAFU:129
WAFY|UOL|Buol|Buol - Pogogul|ID|2||WAMY
WAFZ||Pohuwato|Panua Pohuwato|ID|1|||WAFY:84
WAGA|GXM|Kuala Kurun||ID|1|||WAGT:96
WAGB|HMS|Muara Teweh|Haji Muhammad Sidik|ID|2
WAGD|TJS|Tanjung Selor-Borneo Island|Tanjung Harapan|ID|2||WALG
WAGF|KLP|Seruyan|Seruyan Kuala Pembuang|ID|2
WAGG|PKY|Palangkaraya|Tjilik Riwut|ID|3||WRBP WAOP
WAGI|PKN|Pangkalanbun|Iskandar|ID|2||WAOI WRBI
WAGL||Long Apar|Long Apari|ID|1|||WAQM:58
WAGM||Buntok|Sanggu|ID|1||WAOU|WAGB:72
WAGP|||Purukcahu|ID|1|||WAGB:66
WAGS|SMQ|Sampit||ID|2|H.Asan|WAOS WRBS
WAGT|TBM|Tumbang Samba-Borneo Island|Tumbang Samba|ID|2||WAOW WRBW
WAGU||Umaq Dian|Byan|ID|1|Umaq Dian, Tabang, Kutai Kartanegara Regency||WALC:160
WAHH|JOG|Yogyakarta|Adisutjipto|ID|3||WARJ WIIJ
WAHI|YIA|Yogyakarta||ID|4
WAHL|CXP|Cilacap|Tunggul Wulung|ID|3||WIIL WIHL
WAHP|PWL|Purwokerto-Java Island|Jenderal Besar Soedirman|ID|1||WICP WIAP|WAHL:47
WAHQ|SOC|Surakarta|Adisoemarmo|ID|4||WARQ WRSQ
WAHS|SRG|Semarang|Jenderal Ahmad Yani|ID|4||WARS WIIS
WAHU|KWB|Karimunjawa|Dewadaru|ID|2
WAJC|DRH|Dabra||ID|1|||WAVB:47
WAJD||Masi Masi Island|Wakde|ID|1|||WAJJ:181
WAJE|RUF|Amgotro|Yuruf Airport [UNUSABLE]|ID|1|||AYVN:111
WAJF||Ambisibil|Ambisibil Airstrip|ID|1|||WAJO:27
WAJH||Bime|Bime Airstrip|ID|1|||WAJO:65
WAJI|ZRM|Sarmi|Mararena Sarmi|ID|1|||WAVB:202
WAJJ|DJJ|Sentani|Dortheys Hiyo Eluay|ID|4
WAJK||Kiwirok|Kiwirok Airstrip|ID|2
WAJL|LHI|Lereh-Papua Island|Lereh|ID|1|||WAJJ:84
WAJM||Molof|Molof Airstrip|ID|1|||WAJJ:93
WAJO|OKL|Oksibil||ID|3
WAJS|SEH|Senggeh||ID|1|||WAJJ:100
WAJV||Iwur|Iwur Airstrip|ID|2
WAJW||Okyap|Okyap Airstrip|ID|2
WAJY||Borme|Borme Airstrip|ID|1|||WAJO:61
WAKB||Aboge|Aboge Airstrip|ID|1|||WAKT:115
WAKC||Yaniruma|Yaniruma Airstrip|ID|1|||WAVD:73
WAKD|MDP|Mindiptana-Papua Island|Mindiptana|ID|1|||WAKT:51
WAKE|BXD|Bade||ID|1|||WAKT:144
WAKG|EWE|Agats|Ewer Asmat|ID|1|||WAYY:170
WAKJ|KMM|Kimaam||ID|1|||WAKK:183
WAKK|MKQ|Merauke|Mopah|ID|3
WAKL||Bomakia||ID|1|||WAKT:58
WAKM|KCD|Kamur||ID|1|||WAVD:175
WAKO|OKQ|Okaba||ID|1|||WAKK:90
WAKP|KEI|Kepi||ID|1|||WAKT:118
WAKQ|ZEG|Senggo-Papua Island|Senggo|ID|1|||WAVD:94
WAKS||Amazu|Amazu Airstrip|ID|1|||WAVD:86
WAKT|TMH|Tanah Merah||ID|3
WAKY||Danowage|Korowai Batu Danowage|ID|1|||WAVD:71
WALA|SGQ|Sanggata|Sangkimah|ID|1|||WALC:30
WALB||Sangata|Tanjung Bara|ID|1||WRLJ|WALC:52
WALC|BXT|Bontang-Borneo Island|LNG Badak|ID|2||WRLC
WALE|GHS|Melak-Borneo Island|Melalan|ID|1||WRLE|WAGB:130
WALJ|DTD|Datadawai-Borneo Island|Datadawai|ID|2
WALK||Nusantara||ID|2|||WALL:24
WALL|BPN|Balikpapan|Sultan Aji Muhammad Sulaiman Sepinggan|ID|4||WRLL
WALN||Long Mawang-Borneo Island|Long Mawang|ID|1|||WAQL:13
WALO||Pertamina Oil & Gas Corp.|Datah Dian Airstrip|ID|1|||WAQL:39
WALQ||Muara Badak-Borneo Island|Muara Badak Pujangan|ID|1|||WALS:20
WALS|AAP|Samarinda|Aji Pangeran Tumenggung Pranoto|ID|3
WALT||Santan-Borneo Island|Tanjung Santan|ID|1|||WALC:24
WALU||Sangkulirang-Borneo Island|Sangkulirang|ID|1|||WALC:114
WALW||Miau Baru|Muara Wahau|ID|1||WRLW|WAQT:119
WALX||Buduk Kabul|Kurid Airstrip|ID|1|||WAQJ:12
WAMD||Kuripasai-Celebes Island|Jailolo/Kuripasai|ID|1|||WAEE:34
WAMG|GTO|Gorontalo|Jalaluddin|ID|2
WAMH|NAH|Tabukan Utara|Naha|ID|3|Tabukan Utara, Sangihe Islands
WAMI|LKM|Lolak|Bolaang Mongondow|ID|2
WAMK||Ulubongka|Uetangko Airstrip|ID|1|||WAFU:50
WAMM|MDC|Manado|Sam Ratulangi|ID|4
WAMN|MNA|Karakelong Island|Melangguane|ID|1|||WAMH:132
WAMO|BRG|Balirangen|Siau/Sitaro|ID|1|||WAMH:116
WAMP|MWS|Morowali|Indonesia Morowali Industrial Park|ID|1|IMIP||WAFO:85
WAMS|IAX|Miangas||ID|1|||RPMR:173
WAMU||Wuasa-Celebes Island|Wuasa|ID|1|||WAFF:72
WAOC|BTW|Batu Licin|Bersujud|ID|2||WRBC
WAOE||Long Segar|Long Segar Airstrip|ID|1|||WALC:105
WAOG||Sekapung|Sebuku|ID|1|Sekapung, Kotabaru||WAOK:43
WAOH||Mekar Putih|Kota Baru|ID|1|Mekar Putih, Kotabaru||WAOC:65
WAOK|KBU|Stagen|Gusti Syamsir Alam|ID|2||WRBK
WAON|TJG|Tanta-Tabalong|Warukin|ID|3||WRBN
WAOO|BDJ|Banjarbaru|Syamsudin Noor|ID|4||WRBB
WAOT||Teluk Kepayang||ID|1||WRBT|WAOC:34
WAPA|AHI|Amahai||ID|1|||WAPP:101
WAPB||Bula||ID|1|||WASF:196
WAPC|NDA|Bandanaira||ID|1|||WAPP:221
WAPD|DOB|Dobo-Warmar Island|Rar Gwamar|ID|1|||WAPF:160
WAPF|LUV|Langgur|Karel Sadsuitubun|ID|3
WAPG|NRE|Namrole||ID|1|||WAPN:85
WAPI||Saumlaki-Yamdena Island|Saumlaki/Olilit|ID|1|||WAPS:16
WAPK|BJK|Maikoor Island|Benjina|ID|1|||WAPF:171
WAPL||Langgur|Dumatubin|ID|1|||WAPF:11
WAPM|JIO|Tiakur|Jos Orno Imsula|ID|2
WAPN|NAM|Namniwel||ID|3
WAPO||Kepulauan Larat|Larat|ID|1|||WAPS:93
WAPP|AMQ|Ambon|Pattimura|ID|4
WAPR||Namlea||ID|1|||WAPN:17
WAPS|SXK|Saumlaki-Yamdena Island|Mathilda Batlayeri|ID|2||WPAS
WAPT|TAX|Tikong-Taliabu Island|Taliabu Island|ID|1|||WAMI:287
WAPU|||Kufar|ID|1|||WASF:175
WAPV|WBA|Wahai||ID|1|||WAPP:184
WAQA|NNX|Nunukan-Nunukan Island|Nunukan|ID|1||WRLF WALF|WBKW:54
WAQB||Bunju Island|Bunyu|ID|1||WALV|WAGD:88
WAQC|RTU|Maratua||ID|1|||WAQT:130
WAQE||Long Alango|Long Alango Airstrip|ID|1|||LBP:58
WAQG||Binuang||ID|1|||WAQJ:23
WAQH||Long Rungan||ID|2
WAQJ|LBW|Long Bawan|Yuvai Semaring|ID|2
WAQK||Mangkajang-Borneo Island|Mangkajang|ID|1|||WAQT:39
WAQL|LPU|Long Apung-Borneo Island|Long Apung|ID|2||WRLP
WAQM|LNU|Malinau|Robert Atty Bessing|ID|2||WALM
WAQP|||Long Pala Airstrip|ID|1|||WAQJ:51
WAQQ|TRK|Tarakan|Juwata International Airport / Suharnoko Harbani AFB|ID|3||WALR
WAQT|BEJ|Tanjung Redeb - Borneo Island|Kalimarau|ID|3
WAQU||Long Layu||ID|1|||WBGZ:28
WAQV||Long Pujungan|Long Pujungan Airstrip|ID|1|||LBP:81
WAQW||Long Pipa|Long Sule Airstrip|ID|1|||WAQL:89
WAQX||Pulau Sapi|Pulau Sapi Airstrip|ID|1|||WAQM:13
WARA|MLG|Malang|Abdul Rachman Saleh|ID|3
WARC|CPF|Blora|Ngloram|ID|1||WRSC|WARD:76
WARD|DHX|Kediri|Dhoho|ID|3
WARE|JBB|Jember|Notohadinegoro|ID|2
WARI||Magetan|Iswahjudi Air Base|ID|1||WIAR|WARD:58
WARP||Sapeken|Pagerungan|ID|1|||WADL:204
WARR|SUB|Surabaya|Juanda|ID|4
WART|SUP|Sumenep|Trunojoyo|ID|1||WRST|WARR:128
WARW|BXW|Bawean|Harun Thohir|ID|1|||WARR:185
WASA|AYW|Ayawasi||ID|1|||WASS:134
WASC|RSK|Ransiki-Papua Island|Abresso|ID|1|||WAUU:69
WASF|FKQ|Fakfak||ID|3
WASI|INX|Inanwatan||ID|1|||WASF:89
WASJ||Gusimawa|Gusimawa Airstrip|ID|1|||WASK:70
WASK|KNG|Kaimana|Utarom|ID|3
WASN|RJM|Waisai|Marinda|ID|2
WASO|BXB|Babo||ID|2|||WASK:127
WASS|SOQ|Sorong|Domine Eduard Osok|ID|3||WAXX
WAST|TXM|Atinjoe|Teminabuan|ID|1|||WASS:102
WASU|KBX|Kambuaya-Papua Island|Kambuaya|ID|1|||WASS:121
WASW||Suswa|Suswa Airstrip [UNUSABLE]|ID|1|||WASS:113
WATA|ABU|Atambua|AA Bere Tallo|ID|2|Haliwen
WATB|BJW|Soa|Bajawa Soa|ID|1|Soa, Ngada Turelelo||WATG:65
WATC|MOF|Waioti|Frans Xavier Seda|ID|2||WRKC
WATE|ENE|Ende|H. Hasan Aroeboesman|ID|2||WRKE
WATG|RTG|Satar Tacik|Frans Sales Lega|ID|2|Satar Tacik, Manggarai|WRKG
WATK|TMC|Radamata|Tambolaka|ID|2||WADT WRRT
WATL|LKA|Tiwatobi|Larantuka Gewayentana|ID|2
WATM|ARD|Kabola|Alor Island - Mali|ID|2
WATO|LBJ|Labuan Bajo|Komodo|ID|2|Labuan Bajo, Manggarai Barat|WRKO
WATP|AXO|Kabir|Pantar Kabir|ID|1|||WATM:43
WATQ||Pur-Pura|John Becker|ID|1||WAPQ|WAPM:79
WATR|RTI|Ba'a - Rote Island|David Constantijn Saudale|ID|2||WRKR
WATS|SAU|Sabu-Sawu Island|Sabu-Tardanu|ID|1||WRKS|WATR:138
WATT|KOE|Kupang|El Tari|ID|3||WRKK
WATU|WGP|Waingapu-Sumba Island|Umbu Mehang Kunda|ID|2||WADW WRRW
WATW|LWE|Lewoleba|Wonopito|ID|1|||WATL:49
WAUA|AGD|Anggi-Papua Island|Anggi|ID|1||WASG|WAUU:58
WAUB|NTI|Bintuni|Stenkol|ID|1||WASB|WAUU:147
WAUE||Mar|Werur|ID|1|||WASS:113
WAUK|KEQ|Kebar||ID|1||WASE|WAUU:111
WAUM|RDE|Merdei-Papua Island|Merdey|ID|1||WASM|WAUU:114
WAUS||Senopi|Synopi Airstrip|ID|1|||WAUU:125
WAUU|MKW|Manokwari|Rendani|ID|3||WASR
WAUW|WSR|Wasior||ID|1|||WASK:137
WAVA|LII|Mulia-Papua Island|Mulia|ID|1||WABQ|WAVB:80
WAVB|BUI|Bokondini||ID|2||WAJB
WAVC|IUL|Ilu||ID|1||WABE|WAVB:53
WAVD|DEX|Dekai|Nop Goliat Dekai|ID|2
WAVE|ELR|Elelim||ID|1||WAJN|WAVV:59
WAVG|KBF|Karubaga||ID|1|||WAVB:22
WAVI||Nania|Nania Airstrip|ID|1|||WAVV:49
WAVJ||Silimo|Silimo Airstrip|ID|1|||WAVV:41
WAVK||Kobagma||ID|1|||WAVB:42
WAVL|LLN|Kelila||ID|1|||WAVB:6
WAVM||Boven Digoel Regency|Manggelum|ID|1||WAJT|WAJO:60
WAVN||Angguruk|Angguruk Airstrip|ID|1|||WAVV:54
WAVO||Nungai Beoga|Beoga|ID|1|||WAYB:45
WAVP||Holuwon|Holuwon Airstrip|ID|1|||WAVD:48
WAVR|AAS|Apalapsili||ID|1|||WAVV:46
WAVU||Seradala|Seradala Airstrip|ID|1|||WAVD:49
WAVV|WMX|Wamena||ID|3
WAVW||Panggema|Panggema/Hasan|ID|1|||WAVV:47
WAVZ||Taiyeve|Taiyeve Airstrip|ID|1|||WAVB:56
WAWA||Kolaka|Pomala|ID|1||WAAP|WAWP:20
WAWB|BUW|Bau Bau|Betoambari|ID|1|||WAWD:120
WAWC|TQQ|Waha-Tomea Island|Maranggo|ID|1|||WAWD:61
WAWD|WNI|Wangi-wangi Island|Matahora|ID|3
WAWG||Malimpung||ID|1||WAAG|WAFB:64
WAWH|KSR|Benteng|Selayar - Haji Aroeppala|ID|2
WAWN|APD|Bone|Arung Palakka|ID|1|||WAAA:108
WAWP|KXB|Kolaka|Sangia Nibandera|ID|3
WAWR|RAQ|Raha|Sugimanuru|ID|1||WAAR|WAWW:78
WAWS|SQR|Soroako||ID|1||WAAS|WAFO:50
WAWW|KDI|Kendari|Haluoleo|ID|2||WAAU
WAYA||Alama|Alama Airstrip|ID|1|||WAVB:108
WAYB|UGU|Bilogai|Bilorai|ID|3
WAYC||Keneyan|Keneyan Airstrip|ID|1|||WAVV:84
WAYE|EWI|Enarotali||ID|1||WABT|WAYB:75
WAYG||Akimuga|Akimuga Airstrip|ID|1|||WAYY:86
WAYH||Mapenduma|Mapenduma Airstrip|ID|1|||WAVV:82
WAYI||Bilai|Bilai Airstrip|ID|1|||WAYB:19
WAYJ||Jila|Jila Airstrip|ID|1|||WAYB:84
WAYK|KOX|Kokonao||ID|1|||WAYY:54
WAYL|ILA|Ilaga||ID|1|||WAYB:71
WAYM||Kebo|Kebo Airstrip|ID|1||WABY|WAYB:72
WAYN||Jita|Jita Airstrip|ID|1|||WAYY:97
WAYO|OBD|Obano||ID|1|||WAYB:91
WAYP||Potowai Buru|Potowai Buru Airstrip|ID|1|||WASK:159
WAYQ||Paro|Paro Airstrip|ID|1|||WAVV:86
WAYS||Pogapa|Pogapa Airstrip|ID|1|||WAYB:21
WAYU||Wangbe|Wangbe Airstrip|ID|1|||WAYB:51
WAYW||Sawara Jaya|Waren Airstrip|ID|1|||WABB:123
WAYY|TIM|Timika|Mozes Kilangin|ID|3
WBAK|KUB|Seria|Anduki|BN|1|||WBGM:51
WBGA||Long Atip||MY|1|||WBMU:28
WBGB|BTU|Bintulu||MY|3
WBGC|BLG|Belaga||MY|1|||WBGB:98
WBGD|LSM|Long Semado||MY|1|||WBGQ:27
WBGE||Long Geng||MY|1|||WBGB:136
WBGF|LGL|Long Datih|Long Lellang|MY|2
WBGG|KCH|Kuching||MY|4
WBGI|ODN|Long Seridan||MY|2
WBGJ|LMN|Limbang||MY|3
WBGK|MKM|Mukah||MY|3
WBGL|LKH|Long Akah||MY|1|||WBGF:43
WBGM|MUR|Marudi||MY|3
WBGN|BSE|Sematan||MY|1|||WBGG:75
WBGO||Lio Matu||MY|1|||LBP:10
WBGP|KPI|Kapit||MY|1|||WBGS:109
WBGQ|BKM|Bakalalan||MY|2
WBGR|MYY|Miri||MY|3
WBGS|SBW|Sibu||MY|3
WBGU|LSU|Long Sukang||MY|1|||WBGW:34
WBGW|LWY|Lawas||MY|2
WBGZ|BBN|Bario||MY|3
WBKA|SMM|Semporna||MY|1|||WBKW:55
WBKB||Kota Belud||MY|1|||WBKK:67
WBKD|LDU|Lahad Datu||MY|3
WBKE|TEL|Telupid||MY|1|||WBKS:108
WBKG|KGU|Keningau||MY|1|||WBKK:65
WBKH|SXS|Sahabat|Sahabat [Sahabat 16]|MY|1|||WBKM:60
WBKK|BKI|Kota Kinabalu||MY|4
WBKL|LBU|Labuan||MY|3
WBKM|TMG|Tomanggong||MY|2
WBKN|GSA|Long Miau|Long Pasia|MY|1|||WBGQ:50
WBKO|SPE|Sepulot||MY|1|||WBGW:118
WBKP|PAY|Pamol||MY|1|||WBKS:73
WBKR|RNU|Ranau||MY|1|||WBKK:70
WBKS|SDK|Sandakan||MY|3
WBKT|KUD|Kudat||MY|2
WBKU||Kuala Penyu||MY|1|||WBKL:49
WBKW|TWU|Tawau||MY|3
WBMU|MZV|Mulu||MY|3
WBSB|BWN|Bandar Seri Begawan|Brunei|BN|4
WBTM|TGC|Belawai|Tanjung Manis|MY|1|||WBGS:87
WIAC||Balai Sepuak|Balai Sepuak Airstrip|ID|1|||WIOS:61
WIAF||Bentiang|Bentiang Airstrip|ID|1|||WBGG:80
WIAM||Gilgal|Gilgal Airstrip|ID|1|||WIOS:71
WIAQ||Semandang Hulu|Kuala Randau Airstrip|ID|1|||WIOS:125
WIAS||Lokok|Lokok Airstrip|ID|1|||WBGG:62
WIAU||Madya Raya|Madya Raya Airstrip|ID|1|||WIOG:58
WIBB|PKU|Pekanbaru|Sultan Syarif Kasim II International Airport / Roesmin Nurjadin AFB|ID|3
WIBD|DUM|Dumai|Pinang Kampai|ID|3
WIBG|PPR|Pasir Pengarayan|Tuanku Tambusai|ID|1||WIDE|WIBD:146
WIBI||Pelangiran|Pulai|ID|1|||WIDD:146
WIBJ|RGT|Rengat-Sumatra Island|Japura|ID|2||WIPR|WIJB:133
WIBL||Pangkalan Kerinci|Sultan Syarif Haroen Setia Negara|ID|1|||WIBD:135
WIBS|SEQ|Bengkalis-Sumatra Island|Sungai Pakning Bengkalis|ID|1|||WIBD:83
WICA|KJT|Kertajati||ID|3
WICC|BDO|Bandung|Husein Sastranegara|ID|3||WIIB
WICD|CBN|Cirebon-Java Island|Cakrabhuwana|ID|1||WIIC|WICA:43
WICK||Margahayu|Sulaiman|ID|1||WIAK|WICC:9
WICM|TSY|Cibeureum|Wiriadinata|ID|1|Cibeureum, Tasikmalaya-Java Island||WICN:49
WICN|CJN|Cijulang|Nusawiru|ID|2
WIDB|TBX|Tambelan||ID|1|||WIOO:240
WIDD|BTH|Batam|Hang Nadim|ID|4||WIKB
WIDL|LMU|Bukit Padi|Letung|ID|1|||WMBT:178
WIDM|MWK|Palmatak|Matak|ID|1||WIOM|WMBT:240
WIDN|TNJ|Tanjung Pinang-Bintan Island|Raja Haji Fisabilillah|ID|3||WIKN
WIDO|NTX|Ranai-Natuna Besar Island|Ranai|ID|3||WION
WIDS|SIQ|Pasirkuning-Singkep Island|Dabo|ID|1||WIKS|WIDN:156
WIDT|TJB|Tanjung Balai-Karinmunbesar Island|Raja Haji Abdullah|ID|1||WIBT|WSSL:66
WIEB|RKI|Sipura Island|Mentawai|ID|2||WIBR
WIEE|PDG|Padang|Minangkabau|ID|4|Padang (Katapiang)|WIPT
WIEP||West Pasaman|Pusako Anak Nagariu|ID|1|||WIEE:111
WIFA||Nanga Labang|Nanga Labang Airstrip|ID|1|||WIOS:37
WIFB||Nanga Mawong|Nanga Mawong Airstrip|ID|1|||WIOG:65
WIFD||Nanga Nyabu|Nanga Nyabu Airstrip|ID|1|||WIOP:32
WIFH||Nanga Ruan|Nanga Ruan Airstrip|ID|1|||WIOP:35
WIFL||Riam Batu|Riam Batu Airstrip|ID|1|||WIOK:87
WIFM||Riam Sejawak|Riam Sejawak Airstrip|ID|1|||WBGG:101
WIGE|ENG|Enggano||ID|1|||WIGG:161
WIGG|BKS|Bengkulu|Fatmawati Soekarno|ID|3||WIPL
WIHC|||Wiladatika|ID|1|||WIHH:10
WIHG|PPJ|Jakarta|Pulau Panjang|ID|1||WIIG|WIII:54
WIHH|HLP|Jakarta|Halim Perdanakusuma|ID|4||WIIH WIIX WIID
WIHI||Pandeglang|Salakanagara Tanjun Lesung|ID|1|||WIII:116
WIHJ||Bogor|Atang Senjaya|ID|1||WIAJ|WIHH:34
WIHK||Kalijati-Java Island|Kalijati|ID|1||WIIK|WICC:42
WIHP|PCB|Jakarta|Pondok Cabe Air Base|ID|1||WIPC WIIP|WIHH:16
WIII|CGK|Jakarta|Soekarno-Hatta|ID|4
WIJB|BUU|Muara Bungo||ID|2||WIPI
WIJI|KRC|Sungai Penuh|Departi Parbo|ID|2||WIPH
WIJJ|DJB|Jambi|Sultan Thaha|ID|2||WIPA
WIKK|PGK|Pangkal Pinang|Depati Amir|ID|3||WIPK
WIKT|TJQ|Tanjung Pandan|H A S Hanandjoeddin|ID|2||WIKD
WILB||Hutan|Tambling|ID|1|||WILL:102
WILG||Gunung Batin||ID|1|||WILL:61
WILL|TKG|Bandar Lampung|Radin Inten II|ID|3||WIIT WICT
WILM|AKQ|Menggala|Astra Ksetra|ID|1||WIAG|WILL:71
WILP|TFY|Krui|Muhammad Taufiq Kiemas|ID|1|||WILL:138
WILW||Sukadana|Way Jepara|ID|1|||WILL:57
WIMA|LSW|Lhok Seumawe-Sumatra Island|Malikus Saleh|ID|2||WITM
WIMB|GNS|Gunungsitoli|Binaka|ID|3
WIME|AEG|Padang Sidempuan|Aek Godang|ID|2|||WIMS:63
WIMF|JHN|Mandailing|Jenderal Besar Abdul Haris Nasution|ID|1|||WIMS:99
WIMG|GYO|Kabupaten Gayo Lues|Blangkejeren|ID|1|||WIMU:83
WIMI|FSH|Singkil|Syekh Hamzah Fansyuri|ID|2
WIMK|MES|Medan|Soewondo Air Force Base|ID|2|||WIMM:24
WIML|LKI|Lubang|Lasikin|ID|2||WITG
WIMM|KNO|Medan|Kualanamu|ID|4|Beringin
WIMN|DTB|Siborong-Borong|Silangit|ID|2
WIMO||Pulau-Pulau Batu|Lasondre|ID|2
WIMP|SIW|Parapat-Sumatra Island|Sibisa|ID|1|||WIMN:38
WIMS|FLZ|Sibolga|Dr. Ferdinand Lumban Tobing|ID|3|Sibolga (Pinangsori)
WIMT|TPK|Tapaktuan|Teuku Cut Ali|ID|1||WITA|WIMU:69
WIMU|LSR|Kutacane|Alas Leuser|ID|3
WIOB||Bengkayang-Borneo Island|Bengkayang|ID|1|||WIOO:110
WIOD|SKJ|Singkawang||ID|1|||WIOO:116
WIOG|NPO|Nanga Pinoh-Borneo Island|Nanga Pinoh|ID|3
WIOH||Paloh|Liku|ID|1|||WBGG:118
WIOI||Sinkawang-Borneo Island|Singkawang|ID|1|||WBGG:87
WIOK|KTG|Ketapang|Rahadi Osman|ID|3
WIOO|PNK|Pontianak|Supadio|ID|4
WIOP|PSU|Putussibau-Borneo Island|Pangsuma|ID|3
WIOQ||Anik|Anik Airstrip|ID|1|||WIOO:85
WIOS|SQG|Sintang|Tebelian|ID|3
WIOV||Jagoi|Babang Airstrip|ID|1|||WBGG:52
WIPB|LLJ|Lubuk Linggau|Silampari|ID|1|||WIGG:90
WIPD||Pasar Bandingagung|Banding Agung|ID|1|||WILL:148
WIPM||Menggala-Sumatra Island|Menggala|ID|1||WIAG|WILL:84
WIPO||Batu Raja-Sumatra Island|Gatot Subrato|ID|1|||WILL:129
WIPP|PLM|Palembang|Sultan Mahmud Badaruddin II|ID|3
WIPQ|PDO|Talang Gudang-Sumatra Island|Pendopo|ID|3
WIPU|MPC|Muko Muko||ID|2
WIPY|PXA|Bentayan|Atung Bungsu|ID|1|||WIPQ:99
WIQD||Terati|Teratai Airstrip|ID|1|||WIOS:93
WIQE||Tanah Pinoh Barat|Ulak Muid Aistrip|ID|1|||WIOG:44
WIRR|RTO|Tangerang-Java Island|Budiarto|ID|1||WICB WIIA|WIII:21
WISA|||Smart Semelagi|ID|1|||WIOO:134
WITC|MEQ|Kuala Pesisir|Cut Nyak Dhien|ID|3
WITK|TXE|Takengon|Rembele|ID|3
WITL|LSX|Lhok Sukon-Sumatra Island|Lhok Sukon|ID|2|||WIMA:38
WITN|SBG|Sabang|Maimun Saleh|ID|1||WIAA WITB|WITT:40
WITO|KJX|Blangpidie|Kuala Batu|ID|1|||WITC:69
WITS||Seumayam-Sumatra Island|Seumayam|ID|1|||WITC:53
WITT|BTJ|Banda Aceh|Sultan Iskandar Muda|ID|4||WIAB
WMAB||Batu Pahat|Batu Pahat Airstrip|MY|1|||WMKJ:77
WMAC||Benta||MY|1|||WMSA:113
WMAE||Bidor||MY|1|||WMKI:54
WMAG||Dungun||MY|1|||WMKN:73
WMAH||Grik||MY|1|||WMKP:95
WMAJ||Jendarata||MY|1|||WMPA:58
WMAN|SXT|Taman Negara|Sungai Tiang|MY|1|||WMKD:109
WMAP||Kluang||MY|2|||WMKJ:60
WMAQ||Labis||MY|1|||WMKM:88
WMAU|MEP|Mersing||MY|1|||WMBT:57
WMAV||Muar|Muar / Bakri|MY|1|||WMKM:51
WMAZ||Segamat||MY|1|||WMKM:70
WMBA|SWY|Sitiawan||MY|1|||WMPA:16
WMBE||Temerloh|Semantan|MY|1|||WMKD:98
WMBF||Ulu Bernam||MY|1|||WMSA:80
WMBH||Pengkalan Hulu||MY|1|||WMKA:86
WMBI|TPG|Taiping||MY|1|Tekah||WMKI:53
WMBT|TOD|Tioman Island|Tioman|MY|3
WMGK|||Gong Kedak|MY|1|||WMKC:46
WMKA|AOR|Alor Satar|Sultan Abdul Halim|MY|3
WMKB|BWH|Butterworth|RMAF Butterworth Air Base|MY|2|||WMKP:23
WMKC|KBR|Kota Baharu|Sultan Ismail Petra|MY|3
WMKD|KUA|Kuantan||MY|3
WMKE|KTE|Kerteh||MY|2|||WMKD:88
WMKF||Kuala Lumpur|Simpang|MY|1|||WMSA:17
WMKI|IPH|Ipoh|Sultan Azlan Shah|MY|4
WMKJ|JHB|Johor Bahru|Senai|MY|4
WMKK|KUL|Kuala Lumpur||MY|4|Sepang
WMKL|LGK|Langkawi||MY|4
WMKM|MKZ|Malacca||MY|3
WMKN|TGG|Kuala Terengganu|Sultan Mahmud|MY|3
WMKP|PEN|Penang||MY|4
WMPA|PKG|Pangkor Island|Pulau Pangkor|MY|2
WMPR|RDN|Redang|LTS Pulau Redang|MY|1|||WMKN:44
WMSA|SZB|Kuala Lumpur|Sultan Abdul Aziz Shah|MY|4|Subang
WPAT|AUT|Vila|Atauro|TL|1|||WPDL:35
WPDB|UAI|Suai|Commander in Chief of FALINTIL, Kay Rala Xanana Gusmão|TL|3
WPDL|DIL|Dili|Presidente Nicolau Lobato|TL|4
WPEC|BCH|Baucau||TL|3
WPFL||Fuiloro||TL|1|||WPEC:65
WPMN|MPT|Maliana||TL|1|||WATA:36
WPOC|OEC|Oecussi-Ambeno|Oecusse Route of the Sandalwood|TL|4
WPSM|||Same|TL|1|||WPDL:53
WPVQ|VIQ|Viqueque||TL|1|||WPEC:44
WRBU||Buntok-Borneo Island|Buntok|ID|1|||WAGB:79
WREF||Aurimi Wzil|Aurimi Wzil Airstrip|ID|1|||WAVB:169
WREL||Begowre|Begowre Airstrip|ID|1|||AYVN:53
WREN||Bomela||ID|1|||WAVD:51
WREP||Gamelia|Yugwa Airstrip|ID|1|||WAVB:22
WREX||Doyo Baru||ID|1|||WAJJ:8
WRFC||Endomen|Endomen Airstrip|ID|1|||WAVD:83
WRFE||Erageam|Proyam Airstrip|ID|1|||WAVB:7
WRFH||Eri|Eri Airstrip|ID|1|||WAVB:133
WRFJ||Foao|Foao Airstrip|ID|1|||WAVB:83
WRFL||Geyarek|Geyarek Airstrip|ID|1|||WAVV:65
WRGC||Kanggime|Kanggime Airstrip|ID|1|||WAVB:35
WRGK||Kiwi|Kiwi Airstrip|ID|2
WRGO||Kono|Kono Airstrip|ID|1|||WAVD:70
WRGQ||Kosorek||ID|1|||WAVV:64
WRGS||Kwelamdua|Kwelamdua Airstrip|ID|1|||WAVD:35
WRGT||Kwijawagi||ID|1|||WAVB:65
WRGX||Landikma|Landikma Airstrip|ID|1|||WAVV:44
WRHC||Makki|Makki Airstrip|ID|1|||WAVB:32
WRHD||Mbuwa|Mbuwa Airstrip|ID|1|||WAVV:56
WRHI||Kalca|Nalca Airstrip|ID|1|||WAVD:67
WRHK||Nenei|Nenei Airstrip|ID|1|||WAUU:67
WRHO||Pagai|Pagai Airstrip|ID|1|||WAVV:111
WRHP||Papasena|Papasena Airstrip|ID|1|||WAVB:86
WRHR||Pass Valley|Pass Valley Airstrip|ID|1|||WAVV:31
WRHV||Piramid|Piramid Airstrip|ID|1|||WAVB:26
WRIB||Pit|Pit River Airstrip|ID|1|||WAVB:37
WRIC||Poga|Poga Airstrip|ID|1|||WAVB:16
WRID||Polimo|Polimo Airstrip|ID|1|||WAVV:16
WRIE||Prongkoli|Prongkoli Airstrip|ID|1|||WAVV:44
WRIF||Puldama|Puldamat|ID|1|||WAVD:74
WRIJ||Sela|Sela Airstrip|ID|1|||WAVD:44
WRIL||Sikari|Sikari Airstrip|ID|1|||WAVB:108
WRIP||Soba|Soba Airstrip|ID|1|||WAVV:37
WRIQ||Somanente|Somanente Airstrip|ID|1|||WAVB:166
WRIU||Takar|Takar Airstrip|ID|1|||WAJJ:168
WRIW||Tangma|Tangma Airstrip|ID|1|||WAVV:21
WRJG||Kaureh|Ures Airstrip|ID|1|||WAJJ:108
WRJK||Walerek|Walerek Airstrip|ID|1|||WAVV:61
WRJL||Walma|Walma Airstrip|ID|1|||WAVV:51
WRJO||Wandama|Wandama Airstrip|ID|1|||WAVV:67
WRJR||Wolo|Wolo Airstrip|ID|1|||WAVB:27
WRJS||Wunin|Wunin Airstrip|ID|1|||WAVB:14
WRJU||Yapil|Yapil Airstrip|ID|2
WRJV||Yigi|Yigi Airstrip|ID|1|||WAVV:64
WRKA||Yogosem|Yogosem Airstrip|ID|1|||WAVV:29
WRKJ||Mena-Timor Island|Mena|ID|1|||WPOC:28
WRKN||Naikliu-Timor Island|Naikliu|ID|1|||WPOC:68
WRLA||Bugalaga|Bugalaga Airstrip|ID|1|||WAYB:50
WRLB||Dagai||ID|1|||WAVB:92
WRLD||Eaopoto|Eaopoto Airstrip|ID|1|||WAYB:80
WRLG||Faowi|Faowi Airstrip|ID|1|||WAYB:96
WRLH|TNB|Tanah Grogot||ID|1|||WAON:98
WRLK||Iray|Iray Airstrip|ID|1|||WAUU:51
WRLM||Kegata|Kegata Airstrip|ID|1|||WAYY:157
WRLN||Komopa|Komopa Airstrip|ID|1|||WAYB:62
WRLR||Modio|Modio Airstrip|ID|1|||WAYY:132
WRLS||Obogwy|Obogwy Airstrip|ID|1|||WAVB:123
WRLT||Omban|Omban Airstrip|ID|1|||WAJO:65
WRLU||Ros Bori - Yapen Island|Ros Bori Airstrip|ID|1|||WABB:52
WRLV||Syewa Merare|Wapoga Airstrip|ID|1|||WAYB:106
WRLX||Tigi Timur|Tigi Airstrip|ID|1|||WAYY:94
WRLY||Timepa|Timepa Airstrip|ID|1|||WAYY:135
WRMA||Basiem||ID|1|||WAVD:181
WRMH||Miaro|Miaro Airstrip|ID|1|||WAKT:144
WRMJ||Yaosakor|Yaosakor Airstrip|ID|1|||WAVD:140
WRNA||Turmo|Turmo Airstrip|ID|1|||WAYB:78
WRNB||Weri|Weri Airstrip|ID|1|||WAYB:102
WRPO||Kwerba|Kwerba Airstrip|ID|1|||WAVB:120
WRPQ||Danau Bira|Lake Holmes Airstrip|ID|1|||WAVB:155
WRPS||Magoda|Magoda Airstrip|ID|1|||WAYY:129
WRRP||Meyado|Mayado Airstrip|ID|1|||WASF:150
WRSJ||Waff|Waff Airstrip|ID|1|||WAVB:151
WSAC||Singapore|Changi Air Base|SG|2|East||WSSS:2
WSAG||Sembawang|Sembawang Air Base|SG|2|||WSSL:6
WSAP|QPG|Paya Lebar|Paya Lebar Air Base|SG|2|||WSSL:8
WSAT|TGA|Western Water Catchment|Tengah Air Base|SG|2|||WSSL:18
WSSL|XSP|Seletar||SG|3
WSSS|SIN|Singapore|Singapore Changi|SG|4
XAAD||Sary Shagan|Dzhaman Kuduk Air Base|KZ|1|||UAAH:178
XAAK||Kokpek|Kokpek Highway Strip|KZ|1|||UCFK:110
XAAP||Shengeldi|Priozerny Air Base|KZ|1|||UASZ:101
XASA||Aktogay|Zhuz-Agach Air Base|KZ|1|||UAAL:130
XATE||Zhem|Karas Air Base|KZ|1|||UATT:179
XHBO||Vernoye|Orlovka Air Base|RU|1|||UHBB:131
XHHB||Birofeld|Birofeld Air Base|RU|1|||ZYFY:129
XHHP||Pereyaslavka|Pereyaslavka-2 Air Base|RU|1|||ZYFY:58
XHIL||Khorol|Khorol Air Base|RU|1|||UHWW:117
XHIS||Chuguyevka|Chuguyevka Air Base|RU|2|||UHWW:158
XHSO||Dolinsk|Dolinsk-Sokol Air Base|RU|2|||UHSS:42
XHWI||Zolotaya Dolina|Zolotaya Dolina Air Base|RU|1|||UHWW:92
XIAB||Bada|Bada Air Base|RU|2|||UIUU:176
XIAN||Nerchinsk|Nerchinsk Air Base|RU|1|||UIAA:221
XIAS||Chita|Step Air Base|RU|2|||UIAA:185
XIUW||Ulan Ude|Ulan-Ude East|RU|2|||UIUU:21
XLLL||Soltsy|Soltsy-2 Air Base|RU|2|||ULOO:121
XLMK|KVK|Apatity|Kirovsk-Apatity|RU|2
XNBK||Kamen-na-Obi|Kamen-na-Obi Air Base|RU|1|||UNBB:165
XNBS||Slavgorod|Slavgorod North Air Base|RU|1|||UASP:142
XNKG||Kansk|Kansk Air Base|RU|2|||UNKM:193
XNNK||Kupino|Kupino Air Base|RU|1|||UASP:241
XNOR||Chistoozernoe|Chistoozernoe Air Base|RU|1|||UNOO:209
XRAS||Uchkhoz|Basy|RU|1|||URWA:82
XRMU||Grozny|Khankala Air Base|RU|2|||URMG:12
XRRT|TGK|Taganrog|Taganrog Yuzhny|RU|2|||URKK:242
XRWL||Kamyshin|Lebyazhye Air Base|RU|2|||URWW:170
XSSJ||Yugorsk|Yugorsk Sovetsky Air Base|RU|2|||USHS:26
XSSN||Nizhny Tagil|Salka|RU|1|||USSS:143
XUBK|RYB|Rybinsk|Staroselye|RU|2|||UUDL:95
XWKD||Yoshkar Ola|Danilovo Air Base|RU|2|||UWKS:76
XWON||Orenburg|Orenburg Air Base|RU|1|||UWOO:31
XWOW||Orsk|Sokol Air Base|RU|1|||UWOR:24
XWSB||Sennoy|Bagay-Baranovka Air Base|RU|2|||UWSB:62
XWTD||Dombarovskiy|Dombarovskiy Air Base|RU|1|||UWOR:71
XWWO||Kinel|Bobrovka Air Base|RU|2|||UWWW:54
YAAL|||Yarralin|AU|1|||YKKG:110
YABA|ALH|Albany||AU|3||YPAL
YABB||Babbiloora|Upper Warrego Airstrip|AU|1|||YBCV:162
YABD||Aberdeen||AU|1|||YBWW:127
YABF||Torrens Creek|Aberfoyle|AU|1|||YHUG:144
YABG||Abbieglassie|Abbieglassie Airstrip|AU|1|||YSGE:134
YABI|ABG|Abingdon Downs||AU|1|||YNTN:224
YABL||Ambalindum||AU|1|||YBAS:98
YABP||Mooga|Mooga/Brindley Park Airstrip|AU|1|||YROM:29
YABR||Peak Hill|Abra Mine Camp|AU|1|||YNWN:180
YABS|||Albion Downs|AU|1|||YLST:70
YABU||Burt Plain|Amburla|AU|1|||YBAS:91
YACD||Alice Downs|Alice Downs Station|AU|1|||YBCK:19
YACI|||Arcadia|AU|1|||YROM:149
YACR||Croyden|Lotus Creek/Croyden Airstrip|AU|1|||YMRB:120
YACS|||Acacia Downs|AU|1|||YBHI:77
YADA||Adavale||AU|1|||YQLP:85
YADD|||Arubiddy|AU|1
YADE||Coppabella|Annandale Airstrip|AU|1|||YMRB:25
YADG||Aldinga||AU|1|||YPAD:38
YADL||Adele Island|Adele Island Airstrip|AU|1|||YBRM:288
YADM|||Yandan Mine|AU|1|||YMRB:142
YADN|ANZ|Angus Downs Station|Angus Downs|AU|1|||YAYE:132
YADO||Ghan|Andado|AU|1|||YBAS:227
YADR||Miles|Aldersyde Airstrip|AU|1|||YROM:142
YADS|AWN||Alton Downs|AU|1|||YBDV:66
YADU|||Ardgour Airstrip|AU|1|||YSTW:100
YADY||Adaminaby||AU|1|||YCOM:37
YAGD|AUD||Augustus Downs|AU|1|||YBKT:92
YAGL||Kingsthorpe|Argyle Airstrip|AU|1|||YBWW:9
YAGN|AGW|Agnew||AU|1|||YBWP:64
YAHD|||Ashburton Downs|AU|1|||YPBO:77
YAIR||Moree|Beela Airstrip|AU|1|||YMOR:12
YAKG|||Arckaringa|AU|1|||YCBP:121
YALA|MRP|Marla||AU|1|||YCBP:218
YALC||Alcoota|Alcoota Station|AU|1|||YBAS:123
YALD|AYD|Alroy Downs||AU|1|||YTNK:202
YALG|||Adels Grove|AU|1|||YDMG:89
YALH|||Albilbah|AU|1|||YBCK:119
YALM|||Allambie|AU|1|||YBAS:72
YALN||Packsaddle|Allandy|AU|1|||YBHI:210
YALP||Alpurrurulam||AU|1|||YBMA:176
YALR||Anmatjere|Aileron Airstrip|AU|1|||YBAS:140
YALX|AXL||Alexandria Homestead|AU|1|||YDMG:255
YALY|||Alderley|AU|1|||YBOU:55
YAMB|||RAAF Base Amberley|AU|2|||YBBN:49
YAMC|AXC||Aramac|AU|1|||YBAR:68
YAMJ||Ampilatwatja||AU|1|||YTNK:250
YAMK|ADO|Andamooka||AU|1|||YOLD:25
YAML|||Armraynald|AU|1|||YBKT:33
YAMM|AMX||Ammaroo|AU|1|||YTNK:259
YAMN||Port Augusta|El Alamein Landing|AU|1|||YPAG:4
YAMO||Moray Downs|Belyando Airstrip|AU|1|||YMRB:149
YAMT|AMT||Amata|AU|1|||YAYE:104
YAND|||Answer Downs|AU|1|||YCCY:122
YANG|WLP||West Angelas|AU|1|||YPBO:98
YANJ|||Angatja|AU|1|||YAYE:117
YANK|||Anna Creek|AU|1|||YPMH:111
YANL|AYL||Anthony Lagoon|AU|1|||YMHU:185
YANN|||Anningie|AU|1|||YBAS:234
YANW|||Annitowa|AU|1|||YTNK:294
YAOC||Dunmore|Dunmore/Opal Creek|AU|1|||YBWW:86
YAOR|||Ardmore|AU|1|||YBMA:114
YAPA||Eighty Mile Beach|Anna Plains|AU|1|||YBRM:165
YAPH|ABH|Alpha||AU|1|||YBAR:131
YAPO|||Apollo Bay|AU|1|||YMAV:108
YAQA|||Aquila|AU|1|||YHBA:39
YARA|ARY|Ararat||AU|2|||YBDG:135
YARC||Archer River|Archer River Airstrip|AU|1|||YCOE:41
YARD|||Argadargada|AU|1
YARE||Redford Station|Redford Airstrip|AU|1|||YBCV:131
YARG|GYL||Argyle|AU|1|||YPKU:99
YARI|||Arizona 1|AU|1|||YJLC:112
YARK|||Arkaroola|AU|1|||YOLD:237
YARL|||Ardlethan|AU|1|||YNAR:45
YARM|ARM|Armidale||AU|3
YARN||Mereenie|Areyonga|AU|1|||YBAS:169
YARP|||Arapunya|AU|1|||YBAS:247
YARS|||Ardrossan|AU|1|||YPAD:81
YARY|AAB|Tanbar|Arrabury|AU|1|||YBDV:191
YASF|||Ashford|AU|1|||YMOR:119
YASS|||Bakblok|AU|1|||YSCB:50
YATL||Anatye|Atula|AU|1|||YBAS:261
YATN||Atherton||AU|1|||YBCS:49
YATR|||Amphitheatre|AU|1|||YBDG:96
YATY|||Atley|AU|1|||YMOG:138
YAUA|||Augathella|AU|1|||YBCV:80
YAUG||Augusta|Tallinup-Augusta|AU|1|||YBLN:75
YAUL|||Aratula Airstrip|AU|1|||YBBN:86
YAUR|AUU|Aurukun||AU|2
YAUS|AWP||Austral Downs|AU|1|||YBMA:182
YAUV|AVG|Auvergne Station|Auvergne|AU|1|||YPKU:140
YAVD|||Avon Downs|AU|1|||YBMA:217
YAVM|||Avonmore|AU|1|||YBDG:27
YAWT||Agnes Water|Agnes Water private|AU|1|||YGLA:77
YAYE|AYQ|Yulara|Ayers Rock Connellan|AU|3
YAYR|AYR|Ayr||AU|1|||YBTL:70
YBAB||Baralaba||AU|1|||YTNG:82
YBAD|||Baradine|AU|1|||YCNM:68
YBAF||Brisbane|Brisbane Archerfield|AU|1|||YBBN:24
YBAH|||Bauhinia Downs|AU|1|||YMHU:74
YBAL|||Balladonia|AU|1|||YESP:224
YBAN|MBN|Wunaamin Miliwundi Ranges|Mount Barnett|AU|1|||YFTZ:165
YBAO||Braidwood||AU|1|||YMRY:58
YBAR|BCI|Barcaldine||AU|3
YBAS|ASP|Alice Springs||AU|3
YBAU|BDD|Badu Island||AU|2
YBAW|BKP||Barkly Downs|AU|1|||YBMA:107
YBBA|||Barraba|AU|1|||YNBR:74
YBBC||Bamboo Creek Gold Mine|Bamboo Creek|AU|1|||YCHK:166
YBBE||Big Bell||AU|1|||YMOG:89
YBBL|||Billabalong|AU|1|||YKBR:158
YBBN|BNE|Brisbane||AU|4
YBBO||Bon Bon||AU|1|||YPMH:77
YBBT||Wedderburn|Boort|AU|1|||YBDG:86
YBCB|||Bencubbin|AU|1|||YKAR:211
YBCG|OOL|Gold Coast||AU|4
YBCH||Beechworth|Beechworth Airstrip|AU|1|||YMAY:43
YBCK|BKQ|Blackall||AU|3
YBCL|||Boolcarrol Station|AU|1|||YNBR:54
YBCM|||Coominya|AU|1|||YBBN:64
YBCR|||Batchelor|AU|1|||YPDN:73
YBCS|CNS|Cairns||AU|4
YBCV|CTL|Charleville||AU|3
YBDF|BDW||Bedford Downs|AU|1|||YPKU:214
YBDG|BXG||Bendigo|AU|2
YBDI||Badger Island||AU|1|||YFLI:27
YBDP||Bridport|Flinders Island Aviation|AU|1|||YMLT:60
YBDS||Tarcoola|Birthday Siding|AU|1|||YPMH:115
YBDU|||Birrindudu|AU|1|||YHOO:127
YBDV|BVI||Birdsville|AU|3
YBDX|||Barradale|AU|1|||YPLM:114
YBEB|BXF|Pumululu National Park|Bellburn Airstrip|AU|1|||YPKU:201
YBEC|||Beacon|AU|1|||YKAR:181
YBEE|||Beverley|AU|1|||YOLD:259
YBEF|||Beaufort|AU|1|||YBDG:124
YBEG|||Bening Field|AU|1|||YBTL:67
YBEL||Bothwell||AU|1|||YMHB:65
YBEO|BTX||Betoota|AU|1|||YBDV:141
YBEU|||Beulah 1|AU|1|||YBDG:193
YBEV|||Beverley|AU|1|||YPPH:95
YBEW|||Beechworth Airstrip|AU|1|||YCBA:116
YBFR|||Balfour|AU|1|||YWYY:76
YBFT|||Beaufort|AU|1|||YMAV:109
YBFW|||Beefwood HLS|AU|1|||YEML:42
YBGB|BEE|Dampier Peninsula|Beagle Bay|AU|1|||YBRM:113
YBGD|OCM||Boolgeeda|AU|1|||YPBO:85
YBGI|||Balgair|AU|1
YBGO|BQW|Balgo|Balgo Hill|AU|1
YBGR||Bridgewater On Loddon|Bridgewater|AU|1|||YBDG:36
YBGT|||Budgerygar|AU|1|||YWDH:111
YBGY|||Biniguy|AU|1|||YMOR:34
YBHB||Southwest|Bathurst Harbour|AU|1|||YMHB:127
YBHI|BHQ|Broken Hill||AU|3
YBHK|||Bushy Park|AU|1|||YBMA:71
YBHL||Bindoon|Bindoon Hill Airstrip|AU|1||YBOO|YPPH:70
YBHM|HTI|Hamilton Island||AU|3
YBHN|||Blenheim Airstrip|AU|1|||YBWW:52
YBIA|||Bingara|AU|1|||YMOR:75
YBID|||Binda|AU|1|||YBTH:103
YBIE|BEU|Bedourie||AU|3
YBII|||Balbirini|AU|1|||YMHU:48
YBIL|BIW||Billiluna|AU|1|||YFTZ:270
YBIN|||Biggenden|AU|1|||YBUD:74
YBIR|||Birchip|AU|1|||YBDG:151
YBIU|||Ballidu|AU|1|||YKAR:153
YBIZ|BZP|Lakefield National Park|Bizant|AU|1|||YCKN:138
YBJW|||Banjawarn|AU|1|||YLST:90
YBKE|BRK||Bourke|AU|3
YBKS|||Barkly Wayside Inn|AU|1|||YTNK:171
YBKT|BUC||Burketown|AU|2
YBLA|BLN|Benalla||AU|2|||YMAY:101
YBLB||Meadow|Billabong Road House|AU|1|||YKBR:103
YBLC|LCN||Balcanoona|AU|1|||YOLD:236
YBLD|||Brooklands|AU|1|||YPPH:80
YBLE|ZBL|Biloela||AU|1|||YTNG:21
YBLG|||Bollards Lagoon|AU|1
YBLH|||Bellalie|AU|1|||YQLP:136
YBLI||Hernani|Bald Hills|AU|1|||YCFS:63
YBLL|BLS||Bollon|AU|1|||YSGE:109
YBLM|||Blinman|AU|1|||YPAG:181
YBLN|BQB|Busselton|Busselton Margaret River Regional|AU|2
YBLP||Bluewater park Airstrip||AU|1|||YBTL:29
YBLT|||Ballarat|AU|1|||YMAV:84
YBLU|||Bellevue|AU|1|||YLST:28
YBMA|ISA|Mount Isa||AU|3
YBMD|BFC||Bloomfield River|AU|1|||YCKN:50
YBMI|||Boomi|AU|1|||YMOR:89
YBMK|MKY|Mackay||AU|3
YBMM|||Bamawm|AU|1|||YBDG:61
YBMR|||Barmera|AU|1|||YMIA:148
YBMY||Barunga|Bamyili|AU|1
YBNA|BNK|Ballina|Ballina Byron Gateway|AU|3
YBNC|||Bannockburn|AU|1|||YHUG:141
YBND||Bendick Murrell|Bendick Murrell Airstrip|AU|1|||YPKS:118
YBNI|BYX|Baniyala||AU|1|||YGTE:90
YBNM|||Benmara|AU|1|||YMHU:186
YBNR|||Browns Range|AU|1|||YHOO:189
YBNS|BSJ|Bairnsdale||AU|2|||YHOT:96
YBNY|||Brunchilly|AU|1|||YTNK:91
YBOA|||Boonah|AU|1|||YBBN:83
YBOC|||Booleroo Centre|AU|1|||YPAG:74
YBOD|||Bodalla|AU|1|||YQLP:93
YBOG|||Boggabri|AU|1|||YNBR:49
YBOI|GIC|Boigu Island||AU|2
YBOK|OKY||Oakey Army Aviation Centre|AU|3
YBOM|||Bombala|AU|1|||YMER:64
YBOP|||Boyup Brook|AU|1|||YBLN:101
YBOR||Bordertown||AU|1|||YMTG:164
YBOT|||Boatman|AU|1|||YBCV:114
YBOU|BQL||Boulia|AU|3
YBOV||Border Village||AU|1
YBOY|||Booylgoo Springs|AU|1|||YLST:80
YBPI|BMP||Brampton Island|AU|1|||YBMK:42
YBPN|PPP|Proserpine|Proserpine Whitsunday Coast|AU|3
YBRA|||Benambra|AU|1|||YHOT:34
YBRC|||Barrow Creek|AU|1|||YTNK:215
YBRJ|||Burren Junction|AU|1|||YWLG:83
YBRK|ROK|Rockhampton||AU|3
YBRL|BOX||Borroloola|AU|1|||YMHU:47
YBRM|BME|Broome||AU|4
YBRN|BZD||Balranald|AU|2|||YMIA:144
YBRO|||Bruce Rock|AU|1|||YPPH:203
YBRS||Connewarre|Barwon Heads|AU|1|||YMAV:24
YBRU|BTD||Brunette Downs|AU|1|||YTNK:215
YBRW|BWQ||Brewarrina|AU|2|||YBKE:83
YBRY|BYP||Barimunya|AU|1|||YCHK:60
YBSG||Mission River|RAAF Base Scherger|AU|1|||YBWP:19
YBSP||Burt Plain|Bond Springs|AU|1|||YBAS:33
YBSR|||Blackstone|AU|1|||YAYE:284
YBSS||Bacchus Marsh||AU|1|||YMAV:34
YBSU|MCY|Maroochydore|Sunshine Coast|AU|4||YBMC
YBTD|BHT|Brighton Downs||AU|1|||YBOU:177
YBTH|BHS|Bathurst||AU|3
YBTI|BRT|Wurrumiyanga|Bathurst Island|AU|2|||YSNK:39
YBTK|||Bentinck Island|AU|1|||YMTI:63
YBTL|TSV|Townsville|Townsville Airport / RAAF Base Townsville|AU|3
YBTN|||Barton Siding|AU|1|||YCDU:204
YBTR|BLT||Blackwater|AU|2|||YEML:64
YBTS|||Battery Downs|AU|1|||YBTL:98
YBTT|||Buttabone|AU|1|||YCNM:86
YBTV|BVW||Batavia Downs|AU|1|||YLHR:70
YBUA|||Bundarra|AU|1|||YMRB:48
YBUD|BDB|Bundaberg||AU|3
YBUG|||Bulga Downs Station|AU|1|||YLST:120
YBUL||Bulgunnia||AU|1|||YPMH:79
YBUN|BUY||Bunbury|AU|1|||YBLN:43
YBUO||Bulloo Downs||AU|1|||YTGM:102
YBUP|||Bunyip|AU|1|||YMMB:57
YBUT||Butheroo|Butheroo Station|AU|1|||YSDU:95
YBUX|||Bulleringa|AU|1|||YBCS:224
YBUY|||Bunyan|AU|1|||YCOM:23
YBVA|||Balaklava|AU|1|||YPAD:97
YBVL|||Blackville|AU|1|||YSTW:85
YBVY|||Bullo River Valley|AU|1|||YPKU:119
YBWG|||Bronzewing|AU|1|||YLST:62
YBWI|||Burdekin Falls Dam|AU|1|||YBPN:152
YBWL||Bramwell Tourist Park|Bramwell Tourist Park airstrip|AU|1|||YBWP:96
YBWM|BIP||Bulimba|AU|1|||YKOW:241
YBWN|ZBO|Bowen||AU|1|||YBPN:64
YBWO||Upper Cornish Creek|Bowen Downs|AU|1|||YBAR:126
YBWP|WEI|Weipa||AU|3
YBWR|BCK||Bolwarra|AU|1|||YBCS:177
YBWT|||Bowthorn|AU|1|||YDMG:60
YBWW|WTB|Toowoomba|Toowoomba Wellcamp|AU|4
YBWX|BWB||Barrow Island|AU|1|||YPKA:143
YBYA|||Bryah|AU|1|||YMEK:121
YBYD|||Bonney Downs Station|AU|1|||YCHK:27
YBYI|||Bruny Island|AU|1|||YMHB:45
YBYL||Baryulgil|Baryulgil Airstrip|AU|1|||YLIS:76
YBYR||Byrock||AU|1|||YBKE:81
YBYS|BVZ|Wunaamin Miliwundi Ranges|Beverley Springs|AU|1|||YFTZ:162
YBYW|||Bayswater|AU|1|||YBCK:114
YCAB||Caboolture||AU|1|||YBBN:37
YCAC|CTR||Cattle Creek|AU|1|||YKKG:81
YCAE||Campbell Town||AU|1|||YMLT:54
YCAG|CGV||Caiguna|AU|1
YCAH|CLH||Coolah|AU|1|||YSDU:110
YCAI|||Callion|AU|1|||YPKG:114
YCAJ|||Cadjebut|AU|1|||YFTZ:68
YCAL|||Castlemaine|AU|1|||YBDG:46
YCAM|||Cannington Station|AU|1|||YCCY:140
YCAN||Cannon Hill|Cannon Hill Community|AU|1|||YMGD:144
YCAR|CVQ|Carnarvon||AU|3
YCAS|CSI||Casino|AU|1|||YLIS:20
YCBA|CAZ||Cobar|AU|3
YCBB|COJ||Coonabarabran|AU|2|||YCNM:93
YCBE|CBY|Canobie||AU|1|||YCCY:139
YCBG||Cambridge||AU|1|||YMHB:3
YCBN|CBI|Cape Barren Island||AU|1|||YFLI:33
YCBO|||Cape Borda|AU|1|||YKSC:83
YCBP|CPD|Coober Pedy||AU|3
YCBR|CRB||Collarenebri|AU|1|||YLRD:59
YCCA|CCL|Chinchilla||AU|2|||YBWW:146
YCCF||McArthur|Cape Crawford|AU|1|||YMHU:47
YCCK|||Canteen Creek|AU|1|||YTNK:185
YCCT|CNC||Coconut Island|AU|2
YCCY|CNJ|Cloncurry||AU|3
YCDB||Glendambo|Coondambo|AU|1|||YOLD:116
YCDE||Camperdown|Cobden|AU|1|||YMAV:127
YCDH||Coober Pedy|Cadney Homestead|AU|1|||YCBP:142
YCDO|CBX||Condobolin|AU|1|||YPKS:96
YCDR|CUD|Caloundra||AU|1|||YBSU:23
YCDS|||Childers|AU|1|||YBUD:39
YCDT|||Carandotta|AU|1|||YBOU:169
YCDU|CED||Ceduna|AU|3
YCDV|||Caldervale Station|AU|1|||YBCV:156
YCEE|CVC||Cleve|AU|2|||YPLC:115
YCEL||Capella||AU|1|||YEML:55
YCEM||Coldstream||AU|1|||YMMB:39
YCES|||Ceres|AU|1|||YMAV:22
YCFD|CFI||Camfield|AU|1|||YKKG:72
YCFH|CFH|Clifton Hills||AU|1|||YBDV:133
YCFL|CQP||Cape Flattery|AU|1|||YCKN:54
YCFN|||Clifton|AU|1|||YBWW:41
YCFS|CFS|Coffs Harbour||AU|3
YCGH|||Clonagh|AU|1|||YCCY:62
YCGI|||Carnegie Station|AU|1|||YGRM:263
YCGL||Mantuan Downs|Cungelella|AU|1|||YEML:162
YCGO|LLG|Chillagoe||AU|1|||YBCS:133
YCHB|CRH|Cherrabah Homestead Resort|Cherrabah|AU|1|||YBWW:101
YCHI||East Arnhem|Cape Shield|AU|1|Djarrakpi||YGTE:77
YCHK|CKW|Christmas Creek Mine|Christmas Creek|AU|2
YCHL||Charlton||AU|1|||YBDG:107
YCHR|||Childra|AU|1|||YCDU:116
YCHT|CXT||Charters Towers|AU|1|||YBTL:102
YCIG|||Corrigin|AU|1|||YPPH:181
YCIN|DCN|Derby|RAAF Base Curtin|AU|2|||YBRM:174
YCJU|||Conjuboy|AU|1|||YPAM:193
YCKA|||Curdimurka|AU|1|||YOLD:114
YCKD||Cape Barren Island|Clarke Island|AU|1|||YFLI:49
YCKI|CKI||Croker Island|AU|1|||YSNK:202
YCKN|CTN||Cooktown|AU|3
YCKY|||Cocklebiddy|AU|1
YCLA|||Clare Station|AU|1|||YMIA:194
YCLB||Brukunga|Claremont Airbase|AU|1|||YPAD:36
YCLE|||Callendale|AU|1|||YMTG:63
YCLG||Coolgardie||AU|1|||YPKG:28
YCLM|||Collymongle|AU|1|||YLRD:78
YCLQ||Dampier Peninsula|Cape Leveque|AU|1|||YBRM:188
YCLT|||Collector|AU|1|||YSCB:51
YCLY|||Coleambally|AU|1|||YNAR:62
YCMB||Cambooya||AU|1|||YBWW:20
YCMH|||Camden Haven|AU|1|||YPMQ:28
YCMK|||Camel Creek|AU|1|||YPAM:117
YCMM|||Cummins Town|AU|1|||YPLC:42
YCMT|CMQ||Clermont|AU|2|||YMRB:92
YCMU|CMA||Cunnamulla|AU|3
YCMW|CML||Camooweal|AU|1|||YBMA:165
YCNA|||Corona Station|AU|1|||YBHI:79
YCNF|NIF||Camp Nifty|AU|1|||YCHK:214
YCNG|||Cooranga|AU|1|||YMTG:112
YCNH||Carnarmah||AU|1|||YKAR:93
YCNK|CES||Cessnock|AU|1|||YWLM:46
YCNM|CNB||Coonamble|AU|3
YCNN|||Coonana|AU|1|||YPKG:164
YCNO|||Conargo|AU|1|||YNAR:145
YCNQ|||Coonawarra|AU|1|||YMTG:52
YCNR|||Cann River|AU|1|||YMER:94
YCNS|||Coniston|AU|1|||YBAS:233
YCNX|||Cooranga|AU|1|||YMOR:101
YCNY|||Century Mine|AU|1|||YDMG:92
YCOD|ODL|Cordillo Downs||AU|1|||YBDV:159
YCOE|CUQ|Coen||AU|3
YCOF||Coffin Bay||AU|1|||YPLC:34
YCOG|||Coongan|AU|1|||YPPD:113
YCOH|||Cohuna|AU|1|||YBDG:102
YCOI|CIE|Collie||AU|1|||YBLN:84
YCOM|OOM|Cooma|Cooma Snowy Mountains|AU|3
YCOO|CDA||Cooinda|AU|1|||YPDN:187
YCOR|CWW||Corowa|AU|2|||YMAY:55
YCOS||Cosmo Newbery||AU|1|||YLTN:84
YCOY||Lyndon|Coral Bay|AU|1|||YPLM:104
YCPD|||Cape Don|AU|1|||YSNK:129
YCPG|||Coppins Gap|AU|1|||YPPD:159
YCPH||Evelyn Downs|Copper Hills Airstrip|AU|1|||YCBP:127
YCPK||Carcoar|Coombing Park|AU|1|||YBTH:55
YCPN|CFP|Carpentaria Downs||AU|1|||YHUG:233
YCPR||Cape Preston||AU|1|||YPKA:60
YCPT||Carrapateena mine|Carrapateena|AU|1|||YOLD:106
YCPX||Middle Point NT 0822|Middle Point Research Station Airstrip|AU|1|||YPDN:50
YCRA|||Carinda|AU|1|||YWLG:62
YCRD||Currandooley||AU|1|||YSCB:30
YCRE|||Cressy|AU|1|||YMAV:72
YCRG|CYG||Corryong|AU|2|||YMAY:84
YCRK|CXQ|Wangkat Jungka|Christmas Creek Station|AU|1|||YFTZ:86
YCRL||Crookwell||AU|1|||YSCB:93
YCRN||Mount Direction|Cranbourn|AU|1|||YMLT:46
YCRT|||Carrieton|AU|1|||YPAG:76
YCRY|CDQ||Croydon|AU|1|||YNTN:139
YCSI|||Cassilis Rotherw|AU|1|||YSTW:133
YCSK||Casey Station|Casey Station Skiway|AQ|1
YCSL|||Consuelo|AU|1|||YEML:124
YCSP|||Curtin Springs|AU|1|||YAYE:80
YCST||Carcory Station|Carcuma|AU|1|||YPAD:170
YCSV|KCE||Collinsville|AU|1|||YBPN:73
YCTA|||Coolatai|AU|1|||YMOR:94
YCTC||Parnnguar|Cotten Creek|AU|1|||YNWN:292
YCTH|||Chatsworth|AU|1|||YBOU:113
YCTI||Kimbolton|Cockatoo Island|AU|1|||YBRM:253
YCTM|CMD||Cootamundra|AU|2|||YSWG:79
YCTN|||Casterton|AU|1|||YMTG:53
YCTS|||Calton Hills|AU|1|||YBMA:60
YCUA|CUG||Cudal|AU|1|||YPKS:52
YCUD|||Cuddapan|AU|1|||YWDH:118
YCUE|CUY||Cue|AU|1|||YMOG:74
YCUN|||Cunderdin|AU|1|||YPPH:123
YCUR||Cabramurra Township|Cabramurra|AU|1|||YCOM:67
YCUS|||Cummins|AU|1|||YPLC:49
YCUT|||Cuthero|AU|1|||YBHI:120
YCVA||Clare|Clare Valley|AU|1|||YWHA:123
YCVG|||Calvin Grove|AU|1|||YPAD:29
YCVS|||Cervantes|AU|1|||YPPH:182
YCWA|CJF|Coondewanna||AU|1|||YCHK:109
YCWE|||Cape Wessels|AU|1|||YPGV:141
YCWH|||Commonwealth Hill|AU|1|||YCBP:116
YCWI|CWR||Cowarie|AU|1|||YBDV:226
YCWL|CCW||Cowell|AU|1|||YWHA:89
YCWN|||Corowa Downs|AU|1|||YQLP:91
YCWO|||Chatsworth|AU|1|||YPOD:113
YCWR|CWT||Cowra|AU|2|||YPKS:88
YCWW|||Canowindra|AU|1|||YPKS:60
YCWY|COY|Coolawanyah Station|Coolawanyah|AU|1|||YPBO:153
YCXA|||Cooloola Village Airpark|AU|1|||YBSU:69
YCYT|||Crystal Brook|AU|1|||YBCS:149
YDAG|||Dagworth|AU|1|||YBCS:257
YDAJ|DJR||Dajarra|AU|1|||YBMA:116
YDAL|||Dallas|AU|1|||YNAR:34
YDAR||Runnymede|Darlington|AU|1|||YMHB:54
YDAY|DBY||Dalby|AU|1|||YBWW:69
YDBI|DRN||Dirranbandi|AU|2|||YSGE:70
YDBR|DNB|Maramie|Dunbar|AU|1|||YKOW:93
YDBY|DRB|Derby||AU|2|||YBRM:165
YDDF|DFP|Palmer|Drumduff|AU|1|||YKOW:149
YDDY|||Douglas Daly Airstrip|AU|1|||YPDN:161
YDEA||Bulman|Delara|AU|1|||YRNG:160
YDEG|||Delegate|AU|1|||YCOM:85
YDEK||Denmark||AU|1|||YABA:38
YDER|||Derrinallum|AU|1|||YMAV:109
YDEV|||Devoncourt|AU|1|||YCCY:67
YDFD||Wauchope|Dexfield Park|AU|1|||YPMQ:10
YDGA|DGD||Dalgaranga Gold Mine|AU|1|||YMOG:61
YDGI|||Dullingari|AU|1|||YTGM:288
YDGN|DNG|Drysdale River|Doongan|AU|1|||YPKU:261
YDGR|||Dalgaranga|AU|1|||YMOG:91
YDGT|||Dalgety Downs Station|AU|1|||YCAR:261
YDGU|||DeGrussa|AU|1|||YMEK:138
YDGY||De Grey|De Grey Homestead|AU|1|||YPPD:63
YDHD||Dirk Hartog Island|Dirk Hartog Island Airstrip|AU|1|||YSHK:43
YDHL|||Dhalinbuy|AU|1|||YPGV:50
YDIM|||Dimbulah|AU|1|||YBCS:75
YDIX|DXD|New Dixie|Dixie|AU|1|||YCOE:152
YDKG||Bandya|Duketon Gold|AU|1|||YLTN:113
YDKI|DKI|Dunk Island||AU|1|||YPAM:102
YDLC|||Dulacca|AU|1|||YROM:96
YDLD|||Delmore Downs|AU|1|||YBAS:180
YDLH|||[Duplicate] Dalhousie|AU|1
YDLK|DLK|Dulkaninna||AU|1|||YOLD:225
YDLL|||Dunolly|AU|1|||YBDG:57
YDLO|||Darlot|AU|1|||YLST:56
YDLQ|DNQ|Deniliquin||AU|2|||YBDG:142
YDLT|DDN||Delta Downs|AU|1|||YKMB:73
YDLV|DLV||Delissaville|AU|1|||YPDN:26
YDLW|DYW|Daly Waters||AU|1|||YMHU:289
YDME|||Mount Dimer|AU|1|||YPKG:162
YDMF|||Diemal Find|AU|1|||YLEO:215
YDMG|DMD||Doomadgee|AU|2
YDMN|DVR|Nauiyu|Daly River|AU|1|||YPDN:150
YDMR|||Delamere Station|AU|1|||YKKG:220
YDNB|||Doongmabulla|AU|1|||YMRB:189
YDNI|NLF|Darnley Island||AU|2
YDNK|||Darnick|AU|1|||YMIA:204
YDNR|||Dunmore Manila|AU|1|||YSTW:47
YDNV|||Dynevor Downs|AU|1|||YTGM:56
YDOC||Singleton|Dochra|AU|1|||YWLM:61
YDOD|||Donald|AU|1|||YBDG:125
YDON|||Dowerin|AU|1|||YPPH:133
YDOO|||Donors Hill|AU|1|||YNTN:126
YDOP||Donnington|Donnington Airpark|AU|1|||YBTL:40
YDOR|DRD|Dorunda Outstation|Dorunda|AU|1|||YKOW:119
YDPD|DVP||Davenport Downs|AU|1|||YBIE:168
YDPO|DPO|Devonport||AU|3
YDPR|||Dneiper|AU|1|||YBAS:187
YDPS|||Depot Springs|AU|1|||YLST:61
YDPT|||Depot Outcamp|AU|1
YDPW|||Deep Well|AU|1|||YBAS:60
YDRA|DOX|Port Denison|Dongara|AU|1|||YGEL:60
YDRC|||Dairy Creek Homestead|AU|1|||YCAR:226
YDRD|DRY|Drysdale River||AU|1|||YPKU:249
YDRG||Duaringa|Duaringa Airstrip|AU|1|||YBRK:92
YDRH|DHD||Durham Downs|AU|1|||YWDH:200
YDRI|DRR||Durrie|AU|1|||YBDV:91
YDRL||De Rose Hill||AU|1|||YAYE:267
YDRN||Drouin||AU|1|||YMMB:69
YDRS|||Drysdale Airstrip|AU|1|||YMAV:22
YDUK||Bandya|Duketon|AU|1|||YLTN:72
YDUM|||Dumbleyung|AU|1|||YABA:179
YDUN|SRR|North Stradbroke Island|Dunwich|AU|1|||YBBN:34
YDVE|||Dale River|AU|1|||YPPH:67
YDVR|DKV|Kaltukatjara|Docker River|AU|1|||YAYE:190
YDWF|||Delamere Range Facility|AU|1|||YKKG:222
YDWU|||Dalwallinu|AU|1|||YKAR:109
YDYD|||Derry Downs|AU|1|||YBAS:241
YDYS|DYA||Dysart|AU|2|||YMRB:69
YEAB|||Euabalong|AU|1|||YGTH:128
YEAT|||Yea|AU|1|||YHOT:82
YECB||Broome|Eco Beach|AU|1|||YBRM:43
YECH|ECH||Echuca|AU|2|||YBDG:75
YECL|EUC||Eucla|AU|1
YEDA|ETD|Etadunna||AU|1|||YOLD:255
YEDE|||Edenhope|AU|1|||YMTG:91
YEDM|||Edmund Station|AU|1|||YPBO:180
YEEB|ENB|Eneabba||AU|1|||YGEL:127
YEES|||Elderslie|AU|1|||YWLM:51
YEGA|||Engonnia|AU|1|||YBKE:81
YEIN|EIH|Einasleigh||AU|1|||YBCS:252
YEJI|||East Jaurdi|AU|1|||YPKG:110
YELD|ELC|Elcho Island||AU|3
YELE|||Belele|AU|1|||YMEK:57
YELG|||Elengerah|AU|1|||YSDU:68
YELK|EKD||Elkedra|AU|1|||YTNK:216
YELL||Elliott||AU|1|||YTNK:244
YELM|||Elmore|AU|1|||YBDG:40
YELN||Elliston||AU|1|||YPLC:140
YELS||Violet Town|Baddaginnie|AU|1|Earlston||YMAY:117
YELW|||Eildon Weir|AU|1|||YMEN:100
YELZ||Tipperary|Elizabeth Downs|AU|1|||YPDN:153
YEMG|||Eromanga|AU|1|||YQLP:99
YEMJ|||Emu Junction|AU|1|||YCBP:251
YEML|EMD|Emerald||AU|3
YEMP||Emu Park|Emu Park Authorised Landing Area|AU|1|||YBRK:37
YEPL|||Epsilon|AU|1|||YTGM:259
YEPR|||Epenarra|AU|1|||YTNK:144
YEPT|||Emu Point Airstrip|AU|1|||YPDN:205
YEQO|||El Questro|AU|1|||YPKU:82
YERA|||Errabiddy Homestead|AU|1|||YMEK:185
YERH|||Earaheedy|AU|1|||YWLU:176
YERL|EDD|Ghan|Erldunda|AU|1|||YBAS:169
YERN|ERB||Ernabella|AU|1|||YAYE:170
YERO|||Erong Station|AU|1|||YMEK:222
YERU|||Erudina|AU|1|||YPAG:200
YESC|||Escott|AU|1|||YBKT:13
YESE|ERQ|Elrose Mine|Elrose|AU|1|||YCCY:62
YESP|EPR|Esperance||AU|3
YETT||Bundaberg|North Gregory/Elliott Field|AU|1|||YBUD:19
YEUA||Euroa||AU|1|||YBDG:105
YEUD|||Eudamulla Station|AU|1|||YCAR:202
YEUL|||Eulalia|AU|1|||YCNM:20
YEUO|||Eulo|AU|1|||YCMU:59
YEVA|EVD|Eva Downs||AU|1|||YTNK:195
YEVD|EVH||Evans Head|AU|1|||YBNA:33
YEVP||Mimili|Everard Park|AU|1|||YAYE:268
YEWA|WHB||Eliwana|AU|2|||YPBO:121
YEWO||Carinda|Brewon|AU|1|||YWLG:63
YEXM|EXM|Exmouth||AU|1|||YPLM:22
YEYD|||Evelyn Downs|AU|1|||YCBP:95
YFBR||Coonamble|Fairey Bower|AU|1|||YCNM:17
YFBS|FRB|Forbes||AU|2|||YPKS:38
YFCK||Fish Creek||AU|1|||YMMB:116
YFCN||Cloncurry|Fort Constantine|AU|1|||YCCY:22
YFCU|||Fortescue River|AU|1|||YPKA:93
YFDF|KFE|Cloudbreak Village|Fortescue - Dave Forrest|AU|1|||YCHK:22
YFDN|||Federation Hsd|AU|1|||YSWG:19
YFFD||Stirling North|Stirling North/Flinders Field|AU|1|||YPAG:13
YFFT|||Farrell Flat|AU|1|||YPAD:124
YFGS||Tathra|Frogs Hollow|AU|1|||YMER:19
YFHA||Finch Hatton||AU|1|||YBMK:55
YFIL|FLY||Finley|AU|1|||YMAY:134
YFLI|FLS|Whitemark|Flinders Island|AU|2
YFLO|FVL||Flora Valley|AU|1|||YHOO:230
YFLS|||Flinders Island|AU|1|||YPLC:160
YFNE|FIK|Finke||AU|1|||YBAS:210
YFOR|||Fortnum|AU|1|||YMEK:143
YFRD|||Frome Downs|AU|1|||YBHI:185
YFRG|||Fregon|AU|1|||YAYE:205
YFRI|||Friendly Beaches|AU|1|||YMLT:101
YFRK||Frankland River|Frankland|AU|1|||YABA:92
YFRT|FOS||Forrest|AU|2
YFRV|FVR|Oombulgurri||AU|1|||YPKU:115
YFSA|||Forsayth|AU|1|||YRMD:240
YFSK||Fiskville||AU|1|||YMAV:46
YFST|FOT||Forster|AU|1|Wallis Is||YWLM:90
YFTA|||Forrestania|AU|1|||YESP:232
YFTN|||Mount Fitton Talc|AU|1|||YOLD:258
YFTZ|FIZ||Fitzroy Crossing|AU|3
YFVW|||Fairview|AU|1|||YPKS:59
YFWY|||Faraway Bay|AU|1|||YPKU:259
YGAD||Garden Island|HMAS Stirling Military|AU|1|||YPPH:43
YGAH|||Greenbah|AU|1|||YNBR:43
YGAM|GBP|Gamboola||AU|1|||YCKN:203
YGAN||Gan Gan||AU|1|||YLEV:63
YGAR||MacLeod|Gnaraloo Station|AU|1|||YCAR:122
YGAS||Gatton|Gatton Airpark|AU|1|||YBWW:46
YGAW|||Gawler|AU|1|||YPAD:42
YGAY|GAH|Gayndah||AU|1|||YBUD:106
YGBI|GBL||South Goulburn Is|AU|1|||YMGD:103
YGBO||Mallacoota|Gabo Island|AU|1|||YMER:73
YGBW|||Gunbower|AU|1|||YBDG:86
YGCR|||Gloucester|AU|1|||YWLM:84
YGDA|||Goodooga|AU|1|||YLRD:71
YGDH|GUH||Gunnedah|AU|2|||YSTW:58
YGDI|GOO||Goondiwindi|AU|1|||YMOR:118
YGDN|GDD|Gordon Downs||AU|1|||YHOO:219
YGDO|||Gundaroo|AU|1|||YSCB:29
YGDR|||The Garden|AU|1|||YBAS:80
YGDS|GGD||Gregory Downs|AU|1|||YDMG:88
YGDV|||Galdeville|AU|1|||YRMD:87
YGDW|||Granite Downs|AU|1|||YCBP:257
YGEL|GET|Moonyoonooka|Geraldton|AU|3
YGEN||Byfield|The Glen|AU|1|||YBRK:64
YGFN|GFN|Grafton|Clarence Valley Regional|AU|2|||YCFS:63
YGGE|||Golden Grove|AU|1|||YKAR:57
YGGG||Gulgong|Gulgong Aero Park|AU|1|||YSDU:93
YGGI|||Goolgowi|AU|1|||YGTH:43
YGGL|||Glen Garland|AU|1|||YCOE:124
YGGO|||Goonoo Goonoo|AU|1|||YSTW:26
YGGS|||Gregory Springs|AU|1|||YHUG:124
YGHS||MacLeod|Gnaraloo Homestead|AU|1|||YCAR:119
YGIA|GBW|Ginbata||AU|1|||YCHK:48
YGIB|GBV|Gibb|Gibb River|AU|1|||YFTZ:218
YGID|||Gidgee|AU|1|||YWLU:108
YGIF|||Gifford Creek Station|AU|1|||YPBO:184
YGIG|||RAAF Gingin|AU|1|||YPPH:54
YGIL|||Gilgandra|AU|1|||YSDU:58
YGIR||Exmouth Gulf|Giralia|AU|1|||YPLM:57
YGKL|GKL|Great Keppel Island|Great Keppel Is|AU|1|||YBRK:52
YGLA|GLT|Gladstone||AU|3
YGLB|GUL||Goulburn|AU|2|||YSCB:73
YGLD||Glendambo||AU|1|||YOLD:119
YGLE|GLG||Glengyle|AU|1|||YBIE:53
YGLI|GLI|Glen Innes||AU|2|||YARM:95
YGLN||Collie|Glencoe|AU|1|||YCNM:73
YGLO|GLM||Glenormiston|AU|1|||YBOU:110
YGLP||Nicholson|Gallipolli|AU|1|||YDMG:167
YGLS||Warakurna|Giles|AU|1|||YAYE:270
YGLY|||Glenayle Homestead|AU|1|||YWLU:236
YGMD|||Goomadeer|AU|1|||YMGD:62
YGMP|||Grampians|AU|1|||YMTG:153
YGMT||Greenmount|Greenmount ALA|AU|1|||YBWW:26
YGNA|||Granada|AU|1|||YCCY:65
YGNE|||Gnarwarre Airstrip|AU|1|||YMAV:34
YGNF|GFE|Grenfell||AU|1|||YPKS:97
YGNO|||Goonoo Feedlot Airstrip|AU|1|||YEML:42
YGNR||Glenore||AU|1|||YNTN:88
YGNV|GVP||Greenvale|AU|1|||YPAM:167
YGNW|||Gnowangerup|AU|1|||YABA:109
YGOM|||Goomalling|AU|1|||YPPH:109
YGON|GPD|Mount Gordon Mine|Mount Gordon|AU|1|||YBMA:100
YGPI|||Giles Point|AU|1|||YNWN:68
YGPR|||Gunpowder|AU|1|||YBMA:108
YGPT|GPN|Pirlangimpi|Garden Point|AU|2|||YSNK:24
YGRL|||Great Lakes Vi|AU|1|||YHOT:106
YGRM|GYZ|Cosmo Newbery|Gruyere|AU|2
YGRS||Laverton|Granny Smith|AU|1||YMNW|YLTN:17
YGRU|||Glen Ruth|AU|1|||YBCS:139
YGSC|GSC|Gascoyne Junction||AU|1|||YCAR:156
YGSD||Muchea|Greenside Airstrip|AU|1|||YPPH:46
YGSN|||Mount Gibson Airstrip|AU|1|||YKAR:82
YGTC||Anmatjere|Gemtree Caravan Park Airstrip|AU|1|||YBAS:99
YGTE|GTE|Groote Eylandt||AU|3
YGTH|GFF|Griffith||AU|3
YGTN|GTT|Georgetown||AU|1|||YNTN:269
YGTO|GEE|George Town||AU|1|||YDPO:36
YGUL|||Gullewa|AU|1|||YKAR:73
YGUW|||Gunnawarra|AU|1|||YBCS:134
YGVE|||Glendevie|AU|1|||YMHB:61
YGWA||Goolwa||AU|1|||YPAD:62
YGWD|||Galway Downs|AU|1|||YWDH:25
YGYM|GYP||Gympie|AU|1|||YBSU:51
YHAA|||Haasts Bluff|AU|1|||YAYE:212
YHAB|||Hideaway Bay|AU|1|||YBPN:45
YHAE|||Harden|AU|1|||YSWG:108
YHAG|||Haig|AU|1
YHAL||Wallaroo|Hall|AU|1|||YSCB:23
YHAW|HWK|Hawker|Wilpena Pound|AU|1|||YPAG:101
YHAY|HXX||Hay|AU|2|||YGTH:118
YHBA|HVB|Hervey Bay||AU|3
YHBK||Holbrook||AU|1|||YMAY:54
YHBR|HUB||Humbert River|AU|1|||YKKG:106
YHBY|HRY|Ghan|Henbury|AU|1|||YBAS:110
YHCS|||Herbertvale Cattleyard|AU|1|||YDMG:139
YHCT|||Heathcote Emergency|AU|1|||YSTW:59
YHDD|||Hodgson Downs|AU|1|||YMHU:255
YHDY|HIP||Headingly|AU|1|||YBMA:145
YHEC|||Heck Field|AU|1|||YBCG:47
YHEG|||Hells Gate|AU|1|||YDMG:74
YHEW||Mulara|Hedlow|AU|1|||YBRK:22
YHGR|||Hugh River|AU|1|||YBAS:74
YHGS|||Hughes Siding|AU|1
YHHY|HIG|Highbury||AU|1|||YKOW:182
YHID|HID|Horn|Horn Island|AU|3
YHIL|HLL|Hillside||AU|1|||YCHK:74
YHKT|||Huckitta|AU|1|||YBAS:184
YHLC|HCQ||Halls Creek|AU|2|||YFTZ:223
YHLG|||Hillgrove|AU|1|||YBTL:111
YHLM||Darkan|Hillman Farm|AU|1|||YBLN:140
YHLN|||Helen Springs Airstrip|AU|1|||YTNK:137
YHLS|||Hillston|AU|1|||YGTH:98
YHMB|HMG|Hermannsburg||AU|1|Hermannsburg (Ntaria)||YBAS:112
YHML|HLT||Hamilton|AU|2|||YPOD:91
YHMT|||Hamilton|AU|1|||YCBP:260
YHOA|||Howard Island|AU|1|||YELD:24
YHON||Honeymoon Uranium Mine|Honeymoon|AU|1|||YBHI:81
YHOO|HOK|Lajamanu|Hooker Creek|AU|2
YHOT|MHU|Mount Hotham||AU|3
YHOV||Hodgeson River||AU|1|||YMHU:235
YHOY|||Hollins Bay|AU|1|||YBRK:131
YHPE|||Hopetoun|AU|1|||YESP:156
YHPN|HTU||Hopetoun|AU|2|||YMIA:167
YHPV|HPE|Hope Vale||AU|1|||YCKN:19
YHRD||Hungerford||AU|1|||YTGM:129
YHRG|||Haddon Rig|AU|1|||YCNM:71
YHSB|||Horseshoe Bend|AU|1|||YBAS:161
YHSL|||Horseshoe Lights|AU|1|||YMEK:140
YHSM|HSM||Horsham|AU|2|||YMTG:172
YHTA|||Hiltaba|AU|1|||YCDU:131
YHTL|HAT|Shelburne|Heathlands|AU|1|||YNPE:89
YHTN|||Herberton|AU|1|||YBCS:72
YHTR||Hunter Island||AU|1|||YWYY:98
YHTS|||Harts Range|AU|1|||YBAS:138
YHUG|HGD|Hughenden||AU|2
YHVH|||Harvest Home|AU|1|||YBTL:160
YHYD|||Hyden|AU|1|||YPPH:278
YHYL||Hoyleton|Hoyleton Airbase|AU|1|||YPAD:102
YIBO|IBM|Japal Camp|Iron Bridge Mine|AU|1|||YPPD:104
YIDK|IDK|Indulkana||AU|1|||YCBP:268
YIDR|||Idracowra|AU|1|||YBAS:141
YIFF||Iffley Homestead|Iffley HS Airstrip|AU|1|||YMRB:42
YIFL|IFL||Innisfail|AU|1|||YBCS:81
YIFY|IFF||Iffley|AU|1|||YNTN:136
YIGM|IGH||Ingham|AU|1|||YPAM:47
YIGR|||Ingomar|AU|1|||YCBP:67
YIKL|||Baikal|AU|1|||YBAS:258
YIKM|IKP|Inkerman||AU|1|||YKOW:89
YILA||Milawa||AU|1|Brown Brothers||YMAY:64
YILF|||Ilfracombe|AU|1|||YLRE:26
YILW||Inglewood||AU|1|||YBWW:118
YIMA|||Imanpa|AU|1|||YAYE:160
YIMB||Kimba||AU|1|||YWHA:98
YIMP|||Impadna|AU|1|||YBAS:153
YIMT||Innamincka Township||AU|1|||YBDV:248
YING||Rewan|Ingelara|AU|1|||YEML:160
YINJ|INJ|Injune||AU|1|||YROM:80
YINN|INM||Innamincka|AU|1|||YBDV:243
YINO|||Inverell North|AU|1|||YARM:94
YINV|||Inverleigh|AU|1|||YNTN:67
YINW|IVW|Inverway||AU|1|||YHOO:119
YISD|||Isis Downs|AU|1|||YBCK:85
YISF|ISI||Isisford|AU|1|||YLRE:93
YISV|||Innesvale|AU|1|||YKKG:233
YITT|||Mitta Mitta|AU|1|||YHOT:59
YIVE||Inverloch||AU|1|||YMMB:90
YIVL|IVR|Inverell||AU|2|||YARM:84
YIVO||Ivanhoe||AU|1|||YCBA:204
YJAB|JAB||Jabiru|AU|1|||YMGD:160
YJAC|||Jacinth Ambrosia|AU|1|||YCDU:199
YJAK|||Jackson|AU|1|||YTGM:143
YJAM|||Jameson|AU|1
YJBO||Boisdale|JDandBoo|AU|1|||YHOT:97
YJBY||Jervis Bay Territory|Jervis Bay|AU|1|||YMRY:97
YJCO||Jericho||AU|1|||YMHB:54
YJDA|JUN|Jundah||AU|1|||YWDH:75
YJEM|||Jemalong|AU|1|||YPKS:91
YJER|||Jerilderie|AU|1|||YNAR:104
YJEY|||Jeedamya|AU|1|||YLEO:59
YJGP|||Jerramungup|AU|1|||YABA:152
YJIG|||Jiggalong Mission|AU|1|||YNWN:100
YJIN||Jindabyne||AU|1|||YCOM:36
YJLC|JCK||Julia Creek|AU|2
YJNK|||Jinka|AU|1|||YBAS:210
YJNY|||Jonroy|AU|1|||YCKN:144
YJRO|||Jericho|AU|1|||YBAR:85
YJST||Jamestown|Hubert Wilkins Airstrip|AU|1|||YWHA:104
YJUK|||Tjukurla|AU|1|||YAYE:243
YJUN|||Jundee|AU|1|||YWLU:42
YJUR|JUR|Jurien Bay||AU|1||YJNB|YGEL:171
YJVM|||Jervois Mine|AU|1|||YBAS:275
YJVS|||Jervois|AU|1|||YBAS:247
YJWB|||Jowalbinna|AU|1|||YCKN:103
YKAE|||Kalannie|AU|1|||YKAR:134
YKAJ|||Kajabbi|AU|1|||YCCY:86
YKAL|UBU|Kalumburu||AU|1|||YPKU:278
YKAN|||Kanandah|AU|1
YKAP||Kapunda||AU|1|||YPAD:85
YKAR|KQR|Karara||AU|2
YKAT|||Katoomba|AU|1|||YBTH:69
YKAY|||Kayrunnera|AU|1|||YBHI:178
YKBA|KYB|Ken's Bore||AU|1|||YPKA:173
YKBG|||Koolyanobbing Range|AU|1|||YPKG:185
YKBL|KDB|Kambalda West|Kambalda|AU|1|||YPKG:46
YKBN|||Kooralbyn|AU|1|||YBCG:65
YKBR|KAX|Kalbarri||AU|2
YKBS|KBD|Kimberley Downs||AU|1|||YFTZ:155
YKBY|KBY||Streaky Bay|AU|1|||YCDU:96
YKCA|KBJ|Petermann|Kings Canyon|AU|1|||YAYE:115
YKCK||Killiecrankie||AU|1|||YFLI:29
YKCS|KCS|Petermann|Kings Creek|AU|1|||YAYE:120
YKDD|OOD|Koodaideri Mine||AU|1|||YCHK:60
YKDI|||Kadina|AU|1|||YWHA:102
YKDL|||Kondoolka|AU|1|||YCDU:109
YKDM|||Kidman Springs|AU|1|||YKKG:147
YKDN|||Kondinin|AU|1|||YPPH:224
YKEB|||Kellerberrin|AU|1|||YPPH:169
YKEL|||Kelvin Station|AU|1|||YARM:14
YKEN|||Kenmore Park|AU|1|||YAYE:196
YKEP|||Lake Keepit|AU|1|||YSTW:37
YKER|KRA||Kerang|AU|2|||YBDG:115
YKFC|||Kingfisher Camp|AU|1|||YDMG:57
YKGA||Kingoonya||AU|1|||YPMH:135
YKHA|||Khancoban|AU|1|||YCOM:78
YKHG|||Katherine Gorge|AU|1|||YPDN:273
YKIA|||Kiana Station|AU|1|||YMHU:89
YKIC|||Kiwirrkurra Airstrip|AU|1
YKID|||Kidston|AU|1|||YHUG:216
YKIG|||Kingston|AU|1|||YMTG:130
YKII|KNS||King Island|AU|3
YKIL|||Kildurk|AU|1|||YPKU:121
YKIR|KBB|Kirkimbie|Kirkimbie Station|AU|1|||YHOO:163
YKIU|||Kaiuroo|AU|1|||YBRK:111
YKKG|KFG||Kalkgurung|AU|2
YKKH|||Kokatha|AU|1|||YCDU:172
YKKN|||Kin Kin Retreat Airstrip|AU|1|||YBLN:115
YKLA|KOH|Maramie|Koolatah|AU|1|||YKOW:86
YKLB|KKP|Koolburra||AU|1|||YCKN:132
YKLC|KCI|Koolan Island|Koolan Central|AU|1|||YBRM:258
YKLE|||Killarney|AU|1|||YKKG:165
YKLG|||Kalinga|AU|1|||YCKN:145
YKLL|||Kallala|AU|1|||YBMA:136
YKLN|||Killarney|AU|1|||YCKN:180
YKLR|||Kalamurina|AU|1|||YBDV:229
YKMB|KRB||Karumba|AU|2
YKML|KML||Kamileroi|AU|1|||YCCY:151
YKMP|KPS||Kempsey|AU|2|||YPMQ:41
YKNG|KNI||Katanning|AU|1|||YABA:139
YKNM|||Koonmarra|AU|1|||YMEK:84
YKNP|||Kununoppin|AU|1|||YPPH:205
YKNT|||Kintore|AU|1|||YAYE:268
YKNV||Kaniva||AU|1|||YMTG:162
YKOA||Koarlo||AU|1|||YMOR:118
YKOG|||Koongarra|AU|1|||YMIA:197
YKOJ|||Kojonup|AU|1|||YABA:145
YKOK|||Kookynie|AU|1|||YLEO:55
YKOL|||Kolendo|AU|1|||YPAG:134
YKOW|KWM|Kowanyama||AU|3
YKPR|KPP|Kalpower|Kalpowar|AU|1|||YCKN:120
YKRV|||Kendall River|AU|1|||YAUR:62
YKRY|KGY||Kingaroy|AU|2|||YBWW:109
YKSC|KGC||Kingscote|AU|3
YKTA|||Kotta|AU|1|||YBDG:65
YKTH||Keith||AU|1|||YMTG:187
YKTN||Kyneton||AU|1|||YBDG:55
YKUB|KUG|Kubin Island||AU|2
YKUR|KRD|Kurundi Station|Kurundi|AU|1|||YTNK:110
YKUW|||Kurweeton|AU|1|||YMAV:115
YKUY|||Kurray|AU|1|||YSGE:19
YKWA|||Karlawinda Mine|AU|1|||YNWN:53
YKWG|||Kangaroo Well|AU|1|||YCDU:186
YKWR||Koo Wee Rup||AU|1|Aardel Port||YMMB:40
YKYB||Private Airfield in the Shire of Campaspe|Kyabram|AU|1|||YBDG:73
YKYN||Kynuna||AU|1|||YJLC:106
YLAE|||La Belle Downs Airstrip|AU|1|||YPDN:88
YLAG||Dunalley|Lagoon Bay|AU|1|||YMHB:36
YLAH|LWH||Lawn Hill|AU|1|||YDMG:75
YLAK||Lakeside|Lakeside Airpark|AU|1|||YBPN:22
YLAM|||Lambina|AU|1|||YCBP:245
YLAN|||Langawirra|AU|1|||YBHI:88
YLAO|||Lameroo|AU|1|||YMIA:189
YLAW|||Lawlers|AU|1|||YLST:32
YLBA||Carmichael Coal Mine|Labona|AU|1|||YMRB:177
YLBD||Dampier Peninsula|Lombadina|AU|1|||YBRM:176
YLBG|||Mount Liebig|AU|1|||YAYE:218
YLBO|||Lake Bolac|AU|1|||YPOD:142
YLCG|||Lake Cargelligo|AU|1|||YGTH:111
YLCS||Locksley|Locksley Field|AU|1|||YBDG:91
YLDB||Lady Barron||AU|1|||YFLI:24
YLDO|||Landor Station|AU|1|||YPBO:231
YLEA||Leeman||AU|1|||YGEL:133
YLEC|LGH||Leigh Creek|AU|2|||YOLD:149
YLED|||Lethbridge Airpark|AU|1|||YMAV:35
YLEE|||Leeton|AU|1|||YNAR:23
YLEG||Leongatha South|Leongatha|AU|1|||YMMB:88
YLEO|LNO|Leonora||AU|3
YLET|||Lakes Entrance|AU|1|||YHOT:105
YLEV|LEL||Lake Evella|AU|2
YLFD|LFP|Lakefield||AU|1|||YCKN:120
YLGA|||Mulga Downs|AU|1|||YCHK:124
YLGB||Lagrange|La Grange Bay|AU|1|||YBRM:93
YLGC||Lake Grace||AU|1|||YABA:211
YLGD||Longford|Longdown|AU|1|||YMLT:17
YLGL|||Laglan|AU|1|||YMRB:153
YLGN|||Loongana|AU|1
YLGU||Baines|Legune|AU|1|||YPKU:101
YLHI|LDH|Lord Howe Island||AU|2
YLHL|||Long Hill|AU|1|||YDPO:19
YLHR|IRG|Lockhart River||AU|3
YLHS|LTP|Lyndhurst||AU|1|||YHUG:181
YLIL|||Lilydale|AU|1|||YMMB:39
YLIM|LIB|Limbunya||AU|1|||YKKG:101
YLIN|LDC|Lindeman Island||AU|1|||YBHM:14
YLIS|LSY|Lismore||AU|3
YLKD|||Lucky Downs|AU|1|||YPAM:168
YLKE|||Lakes Entrance|AU|1|||YHOT:105
YLKG|||Lake King|AU|1|||YESP:202
YLKN|LNH|Alpurrurulam|Lake Nash|AU|1|||YBMA:167
YLKS|||The Lakes|AU|1|||YPMQ:34
YLLA|||Mobella|AU|1|||YCBP:158
YLLC|||Lilla Creek|AU|1|||YBAS:195
YLLD|||Langlo Downs|AU|1|||YBCV:110
YLLE|BBL||Ballera|AU|1|||YTGM:207
YLLR|||Lake Leagur|AU|1|||YBDG:97
YLLT|||Lower Light|AU|1|||YPAD:49
YLLV|||Lily Vale|AU|1|||YCOE:100
YLMB|||Lambrook|AU|1|||YSTW:87
YLMQ|BEO|City of Lake Macquarie|Lake Macquarie|AU|1||YPEC|YWLM:35
YLMU||Mungo|Mungo Lodge|AU|1|||YMIA:100
YLND|LKD|Lakeland Downs|Lakeland|AU|1|||YCKN:57
YLNR|||Landor Races|AU|1|||YPBO:211
YLOC|||Lochinvar|AU|1|||YCHK:227
YLOD||Longwood East|Longwood|AU|1|||YBDG:101
YLOH||Louth||AU|1|||YBKE:96
YLOK|LOC|Lock||AU|1|||YPLC:119
YLOR|LOA||Lorraine|AU|1|||YBKT:144
YLOU|||Louisa Downs|AU|1|||YFTZ:136
YLOV|LTV|Lotus Vale||AU|1|||YKMB:74
YLOX|||Loxton|AU|1|||YMIA:133
YLOY|||Longwarry|AU|1|||YMMB:61
YLRA|LUU||Laura|AU|1|||YCKN:79
YLRD|LHG||Lightning Ridge|AU|3
YLRE|LRE|Longreach||AU|3
YLRG|||Lorna Glen Homestead|AU|1|||YWLU:140
YLRN|||Lorraine Station|AU|1|||YWTN:48
YLRS|LUT|Laura Station|New Laura|AU|1|||YCKN:94
YLSK||Luskintyre||AU|1|||YWLM:41
YLSM|||Lismore|AU|1|||YMAV:99
YLSS|||Lansdowne|AU|1|||YBCK:109
YLST|LER||Leinster|AU|3
YLSY|||Mount Lindsay|AU|1|||YAYE:231
YLTN|LVO|Laverton||AU|2
YLTT|LYT|Lady Elliot Island|Lady Elliot Island Airstrip|AU|1|||YBUD:97
YLTV|TGN|Morwell|Latrobe Valley|AU|2|||YMMB:123
YLUC|||Lucy Creek|AU|1|||YBAS:284
YLUI|||Lucindale|AU|1|||YMTG:94
YLUL|||Mooleulooloo|AU|1|||YBHI:99
YLUW||Margaret River|Leeuwin Estate|AU|1|||YBLN:48
YLVB|||Lovely Banks|AU|1|||YMAV:12
YLVD|||Lake Everard|AU|1|||YCDU:132
YLVK||Townsville|Lavarack|AU|1|Military||YBTL:7
YLVY|||Lake Varley|AU|1|||YESP:241
YLWY|||Lake Way|AU|1|||YWLU:43
YLYD|||Lyndley|AU|1|||YBWW:99
YLYK||Lyndoch||AU|1|||YPAD:50
YLYN|||Lyndon|AU|1|||YPLM:195
YLZI|LZR||Lizard Island|AU|1|||YCKN:90
YMAA|UBB|Mabuiag Island||AU|2
YMAC|||Macumba|AU|1|||YCBP:217
YMAD|||Madura|AU|1
YMAE|MYI|Murray Island||AU|2
YMAG|||Manangatang|AU|1|||YMIA:115
YMAI||Manguri||AU|1|||YCBP:33
YMAK||Mabel Creek|Mabel Creek Station|AU|1|||YCBP:40
YMAP|||Mapuru Airstrip|AU|1|||YELD:30
YMAU|||Mount Augusta|AU|1|||YPBO:152
YMAV|AVV|Geelong/Melbourne|Melbourne Avalon|AU|4
YMAY|ABX|East Albury|Albury|AU|3
YMBA|MRG|Mareeba||AU|2|||YBCS:41
YMBD|||Murray Bridge|AU|1|||YPAD:65
YMBL|MBB||Marble Bar|AU|1|||YCHK:134
YMBT||Mount Beauty||AU|1|||YHOT:38
YMBU|||Maryborough|AU|1|||YBDG:64
YMBX||Mundrabilla||AU|1
YMBZ|||Mount Ebenezer|AU|1|||YAYE:168
YMCE|||Mount Clere Homestead|AU|1|||YMEK:194
YMCF||Jondaryan|McCaffrey Field|AU|1|||YBWW:36
YMCK|||Mckinley|AU|1|||YJLC:81
YMCL|||Mount Coolon|AU|1|||YMRB:107
YMCO|XMC||Mallacoota|AU|1|||YMER:78
YMCR|MFP||Manners Creek|AU|1|||YBOU:217
YMCS|||Macrossan|AU|1|||YBTL:90
YMCT|MLR||Millicent|AU|1|||YMTG:41
YMCU|||Mount Mcclure|AU|1|||YLST:47
YMDA|||Mundubbera|AU|1|||YBUD:127
YMDB||Mundabullangana||AU|1|||YPPD:61
YMDG|DGE|Mudgee||AU|2|||YBTH:94
YMDI|MQA|Eighty Mile Beach|Mandora|AU|1|||YPPD:242
YMDK|||Mount Riddock|AU|1|||YBAS:117
YMDN|||Merredin|AU|1|||YPPH:228
YMDR||Talandji|Minderoo Station|AU|1|||YPLM:103
YMDS|MNW||Macdonald Downs|AU|1|||YBAS:201
YMDT|||Mundrabilla Motel|AU|1
YMDV|||Mount Davies|AU|1|||YAYE:215
YMDW|||Maitland Downs|AU|1|||YCKN:101
YMDY|||Mount Bundey|AU|1|||YPDN:123
YMDZ|||Mardi Station|AU|1|||YPKA:101
YMEB||Mount Eba||AU|1|||YPMH:53
YMED||Menindee||AU|1|||YBHI:97
YMEI|||Mereenie|AU|1|||YAYE:147
YMEK|MKR||Meekatharra|AU|3
YMEL||Melton||AU|1|||YMML:25
YMEM||Memooloo||AU|1|||YEML:73
YMEN|MEB|Essendon Fields|Melbourne Essendon|AU|3
YMEO||Merton||AU|1|||YMML:110
YMEP|||Merapah|AU|1|||YCOE:76
YMER|MIM|Merimbula||AU|3
YMES|||RAAF Base East Sale|AU|2|||YHOT:118
YMEU|MLV|Merluna||AU|1|||YBWP:72
YMEW|||Mingenew|AU|1|||YGEL:89
YMEY|||Mullaley|AU|1|||YNBR:87
YMFD|||Mansfield|AU|1|||YHOT:108
YMGB|MGT|Milingimbi Island|Milingimbi|AU|2
YMGD|MNG|Maningrida||AU|3
YMGG|||Mulgathing|AU|1|||YCBP:150
YMGI|||Mungindi|AU|1|||YMOR:97
YMGN|GSN|Mount Gunson||AU|1|||YOLD:112
YMGO|||Murgoo|AU|1|||YMOG:163
YMGR|MGV||Margaret River|AU|1|Station||YFTZ:148
YMGS|||Mount Morgans|AU|1|||YLTN:43
YMGT|MQZ||Margaret River|AU|1|||YBLN:39
YMGV|MVU|Musgrave||AU|1|||YCOE:120
YMHB|HBA|Hobart||AU|4|Hobart (Cambridge)
YMHL|||Mount Holland|AU|1|||YPKG:218
YMHO|MHO|Wunaamin Miliwundi Ranges|Mount House|AU|1|||YFTZ:127
YMHT||Wunaamin Miliwundi Ranges|Mount Hart Station|AU|1|||YFTZ:166
YMHU|MCV|McArthur River Mine||AU|2
YMHW|||Mount Howitt|AU|1|||YWDH:128
YMIA|MQL|Mildura||AU|3
YMIB||Mintabie||AU|1|||YCBP:235
YMIG||Mittagong||AU|1|||YSSY:84
YMIJ|||Minjilang|AU|1|||YSNK:208
YMIK||Millers Creek|Millers Creek Airstrip|AU|1|||YPMH:60
YMIL|||Milgun|AU|1|||YMEK:171
YMIN|XML||Minlaton|AU|1|||YPAD:94
YMIP|MIH|Mitchell Plateau||AU|1
YMIR|MWY|Miranda Downs||AU|1|||YNTN:95
YMIS|||Millrose Homestead|AU|1|||YWLU:77
YMIT|MTQ||Mitchell|AU|1|||YROM:84
YMIV|||Mount Ive|AU|1|||YWHA:151
YMIX||Minilya|Middalya Homestead|AU|1|||YCAR:156
YMJE|||Mount James|AU|1|||YPBO:182
YMJM|MJP||Manjimup|AU|1|||YBLN:94
YMKA|||Mararanka Homestead|AU|1
YMKB|||Mukinbudin|AU|1|||YKAR:242
YMKT||Weddell|Emkaytee|AU|1|Unlic||YPDN:29
YMLA|||Malina|AU|1|||YPPD:83
YMLC|||Mole Creek|AU|1|||YDPO:41
YMLD|||Maitland|AU|1|||YPAD:98
YMLK|||Minnamoolka|AU|1|||YBCS:158
YMLL|||Millungera|AU|1|||YJLC:92
YMLN|||Monolon|AU|1|||YTGM:253
YMLR|||Muloorina|AU|1|||YOLD:170
YMLS|WLE||Miles|AU|1|||YROM:142
YMLT|LST|Launceston||AU|3|Launceston (Western Junction)
YMLX|||Milurie Homestead|AU|1|||YLST:110
YMMB|MBW|Melbourne|Melbourne Moorabbin|AU|3
YMMI|WUI|Murrin Murrin||AU|1|||YLTN:53
YMML|MEL|Melbourne||AU|4
YMMN||Millmerran||AU|1|||YBWW:61
YMMO|||Moama Airstrip|AU|1|||YBDG:84
YMMT|||Mount Margaret|AU|1|||YQLP:100
YMMU|MMM||Middlemount|AU|1|||YEML:101
YMNA|||Mount Allan|AU|1|||YBAS:242
YMNB|||Mount Barry|AU|1|||YCBP:94
YMND|MTL||Maitland|AU|1|||YWLM:34
YMNE|WME||Mount Keith|AU|2|||YLST:64
YMNF|||Manfred|AU|1|||YMEK:200
YMNG||Mangalore||AU|1|||YBDG:78
YMNK|ONR||Monkira|AU|1|||YBIE:120
YMNN|||Mount Denison|AU|1|||YBAS:264
YMNO|||Maneroo|AU|1|||YLRE:40
YMNP|||Murnpeowie|AU|1|||YOLD:232
YMNS|MSF||Mount Swan|AU|1|||YBAS:175
YMNT|||Mornington Station|AU|1|||YFTZ:113
YMNX|||Minura|AU|1|||YLEO:47
YMNY|OXY||Morney|AU|1|||YWDH:124
YMOD||Lake modeWarre|lake Modewarre Private airstrip|AU|1|||YMAV:41
YMOE|||Moonaree|AU|1|||YPAG:183
YMOG|MMG||Mount Magnet|AU|3
YMOM||Moulamein||AU|1|||YBDG:189
YMOO|OOR||Mooraberree|AU|1|||YWDH:170
YMOR|MRZ|Moree||AU|3
YMOT|MET|Moreton||AU|1|||YLHR:82
YMOU|||Moura|AU|1|||YTNG:60
YMPA|MIN||Minnipa|AU|1|||YCDU:156
YMPC||Point Cook|RAAF Williams, Point Cook Base|AU|1|||YMEN:26
YMPE|||Mount Cooper|AU|1|||YBTL:141
YMPH|||Mount Elephant|AU|1|||YMAV:114
YMPK|||Milton Park|AU|1|||YBAS:104
YMQA|MQE|Marqua||AU|1|||YBOU:272
YMRA|||Maralinga|AU|1|||YCDU:295
YMRB|MOV|Moranbah||AU|3
YMRE|RRE||Marree|AU|2|||YOLD:146
YMRG||Murgon||AU|1|||YBSU:121
YMRO||Moora||AU|1|||YPPH:140
YMRS|||Melrose|AU|1|||YLST:60
YMRT|||Mount Garnet|AU|1|||YBCS:112
YMRW|MWB||Morawa|AU|1|||YKAR:65
YMRY|MYA|Moruya||AU|3
YMSF|MTD||Mount Sanford Station|AU|1|||YKKG:57
YMSK|||Mount Skinner|AU|1|||YBAS:182
YMSO|||Mount Sandon|AU|1|||YSTW:64
YMSP|||Mount Surprise|AU|1|||YBCS:208
YMSS|||Murchison Shire|AU|1|||YKBR:190
YMST||Chichester National Park|Millstream Station Field|AU|1|||YPKA:106
YMTA|MIY||Mittebah|AU|1|||YDMG:208
YMTB|UTB||Muttaburra|AU|1|||YLRE:98
YMTC||Mount Clarence Station|Mount Clarence|AU|1|||YCBP:43
YMTG|MGB|Mount Gambier||AU|3
YMTI|ONG||Mornington Island|AU|2
YMTJ|||Montejinni Airstrip|AU|1|||YKKG:134
YMTO|MNQ||Monto|AU|1|||YTNG:69
YMTP|||Mount Hope|AU|1|||YPLC:72
YMTW|||Martins Well|AU|1|||YPAG:175
YMTX|||Mount Dare|AU|1|||YBAS:285
YMTZ||Gibb|Mount Elizabeth|AU|1|||YFTZ:207
YMUA|||Monduran|AU|1|||YBUD:41
YMUC|MUQ|Muccan Station||AU|1|||YPPD:153
YMUE|||Mount Borradale|AU|1|||YMGD:146
YMUG|MNE|Mungeranie||AU|1|||YBDV:245
YMUK|MVK|Mulka||AU|1|||YBDV:281
YMUL|||Murray Field|AU|1|||YPPH:64
YMUP|MUP||Mulga Park|AU|1|||YAYE:101
YMUR|||Murwillumbah|AU|1|||YBCG:21
YMUS||Mantuan Downs||AU|1|||YEML:133
YMUX|||Mileura|AU|1|||YMEK:124
YMVH|||Marvel Loch|AU|1|||YPKG:199
YMVM||Mangrove Mountain||AU|1|||YSSY:74
YMVN|||Morven|AU|1|||YBCV:86
YMVR|||Mount Vernon Station|AU|1|||YPBO:128
YMVY|MNV||Mount Valley|AU|1|||YRNG:225
YMWA|MXU||Mullewa|AU|1|||YGEL:87
YMWE|||Mount Wedge|AU|1|||YBAS:215
YMWM|||Mount William|AU|1|||YPOD:151
YMWO|||Mahanewo|AU|1|||YOLD:144
YMWT|MWT|Moolawatana Station|Moolawatana|AU|1|||YBHI:284
YMWX|MXD|Marion Downs||AU|1|||YBOU:56
YMYB|MBH|Maryborough||AU|1|||YHBA:27
YMYH|||Mallapunyah Springs|AU|1|||YMHU:67
YMYI|||Marymia|AU|1|||YWLU:176
YMYR|MYO||Myroodan Station|AU|1|||YFTZ:136
YMYT|RTY||Merty Merty|AU|1
YMYU|||Myrup fly in estate|AU|1|||YESP:17
YMYV|||Maryvale|AU|1|||YBAS:94
YMYW|||Murray Downs|AU|1|||YTNK:166
YMYY|||Mary Valley|AU|1|||YCOE:159
YMZI|||Menzies|AU|1|||YLEO:94
YNAA|NBH|Nambucca Heads||AU|1||YNHS|YCFS:41
YNAB|||Nabarlek|AU|1|||YMGD:104
YNAN|||Nanango|AU|1|||YBWW:99
YNAP|NMR||Nappa Merrie|AU|1|||YBDV:257
YNAR|NRA|Narrandera||AU|3
YNAU|||Nannup|AU|1|||YBLN:49
YNBO||Nebo|Nebo Airstrip|AU|1|||YMRB:75
YNBR|NAA|Narrabri||AU|3
YNCD|||Noccundra|AU|1|||YTGM:121
YNCS|||New Crown|AU|1|||YBAS:229
YNCW||Pamayu|Newcastle Waters|AU|1|||YTNK:267
YNDG|||Newdegate|AU|1|||YABA:233
YNDR|||Nundroo|AU|1|||YCDU:146
YNDS|||Natal Downs|AU|1|||YHUG:202
YNES|||Nelson Springs|AU|1|||YKKG:163
YNGB|||Nagambie|AU|1|||YBDG:71
YNGU|RPM|Roper River|Ngukurr|AU|2|||YGTE:202
YNGW|||Skydive Nagambie|AU|1|||YBDG:63
YNHL||Nhill||AU|1|||YMTG:177
YNHP||East Bowes|Northampton|AU|1|||YGEL:50
YNHV|||New Haven|AU|1|||YAYE:274
YNIC|NLS||Nicholson|AU|1|||YHOO:186
YNIG|||Nonning|AU|1|||YWHA:113
YNIN||Meningie||AU|1|||YPAD:112
YNKA|NKB||Noonkanbah|AU|1|||YFTZ:82
YNKR|||Nackeroo|AU|2|||YPKU:191
YNMN|NMP|Basalt|New Moon|AU|1|||YPAM:98
YNNG|||Nar Nar Goon Airstrip|AU|1|||YMMB:43
YNNT|||Nantarra|AU|1|||YPLM:148
YNOC||Noccundra|Nockatunga|AU|1|||YTGM:113
YNOF|||Norfolk|AU|1|||YDMG:163
YNON|||Noondoonia Homestead|AU|1|||YESP:232
YNOO|||Nooyeah Downs|AU|1|||YTGM:26
YNOR||Norwood||AU|1|||YGTH:158
YNOV|||Nova|AU|1|||YPKG:202
YNPA|||Nilpinna|AU|1|||YCBP:131
YNPB|NPP|Napperby||AU|1|||YBAS:184
YNPD|||Napier Downs|AU|1|||YFTZ:124
YNPE|ABM|Bamaga|Northern Peninsula|AU|2||YBAM
YNPU|||Nepabunna|AU|1|||YOLD:199
YNRB|||Narembeen|AU|1|||YPPH:231
YNRC|NAC||Naracoorte|AU|1|||YMTG:85
YNRG|NRG|Narrogin||AU|1|||YPPH:152
YNRL|||Naryilco|AU|1|||YTGM:196
YNRM|QRM||Narromine|AU|2|||YSDU:33
YNRN||Narayen||AU|1|||YTNG:135
YNRR|||Nyrripi|AU|1|||YAYE:286
YNRV|RVT||Ravensthorpe|AU|1|||YESP:150
YNSH|NSV||Noosa|AU|1|||YBSU:19
YNSM|NSM|Norseman||AU|1|||YPKG:159
YNTI|||Abrolhos North Island|AU|1|||YKBR:94
YNTM|||Northam|AU|1|||YPPH:76
YNTN|NTN|Normanton||AU|3
YNUB|NUR||Nullabor Motel|AU|1|||YCDU:276
YNUD||Nammuldi Mine|Nammuldi Mine Airstrip|AU|1|||YPBO:95
YNUE|||Numery|AU|1|||YBAS:153
YNUJ|||Nudjaburra|AU|1|||YDMG:94
YNUL|NLL||Nullagine|AU|1|||YCHK:75
YNUM|NUB||Numbulwar|AU|1|||YGTE:87
YNUT|UTD|Nutwood Downs||AU|1|||YMHU:219
YNVE|||Navarre|AU|1|||YBDG:112
YNVL|||Normanville|AU|1|||YBDG:120
YNWL|||North Well|AU|1|||YPMH:127
YNWN|ZNE|Newman||AU|3
YNWT|||Narwietooma|AU|1|||YBAS:145
YNYG|||Nyang|AU|1|||YPLM:131
YNYM|||Nymagee|AU|1|||YCBA:75
YNYN|NYN||Nyngan|AU|1|||YCNM:128
YNYP||Nyapari||AU|1|||YAYE:136
YOAD|||Old Andado|AU|1|||YBAS:233
YOAP||Dampier Peninsula|One Arm Point|AU|1|||YBRM:190
YOAS||The Oaks||AU|1|||YSSY:59
YOAY|||Oaky Creek|AU|1|||YEML:65
YOBN|OBA|Oban||AU|1|||YBMA:79
YOBR|||Old Bar Heritage|AU|1|||YPMQ:64
YODA|||Ooldea|AU|1|||YCDU:258
YODL|||Ourdel|AU|1|||YWDH:8
YOEN|OPI||Oenpelli|AU|1|||YMGD:137
YOIT||Tablederry|Orielton|AU|1|||YWTN:113
YOKE|||Oakvale|AU|1|||YBAR:157
YOKH||Oakden Hills||AU|1|||YPAG:113
YOKV|||Oak Valley|AU|1
YOLA|XCO|Colac Otway Shire|Colac|AU|1|||YMAV:74
YOLD|OLP|Olympic Dam||AU|2
YOLW|ONS||Onslow|AU|1|||YPLM:123
YOLY|||Oxley Station|AU|1|||YCNM:64
YOMI|||Omicron Station|AU|1|||YTGM:269
YOMO|||Omeo|AU|1|||YHOT:25
YOOD|ODD||Oodnadatta|AU|1|||YCBP:179
YOOK|||Cook|AU|1
YOOM|MOO|Moomba||AU|1|||YBDV:259
YOOO|||Mooloola Homestead|AU|1|||YKKG:143
YORA|||Moonerah|AU|1
YORB|RBS||Orbost|AU|1|||YHOT:140
YORC|OKB|Orchid Beach||AU|1|||YHBA:59
YORG|OAG|Orange||AU|2|||YBTH:48
YORL|||Orleans Farm|AU|1|||YESP:105
YORR|||Orroroo|AU|1|||YPAG:95
YORT|||Ooratippra|AU|1
YORV|ODR|Ord River||AU|1|||YPKU:175
YORW|||Orient Well|AU|1|||YLEO:38
YOSB|OSO||Osborne Mine|AU|1|||YBOU:114
YOSN||Raglan|Old Station|AU|1|||YGLA:42
YOTN|||Ootann|AU|1|||YBCS:133
YOUN|||Youanmi|AU|1|||YMOG:112
YOUY|OYN|Ouyen||AU|1|||YMIA:99
YPAC|||Pacific Haven|AU|1|||YHBA:35
YPAD|ADL|Adelaide||AU|4
YPAG|PUG||Port Augusta|AU|3
YPAM|PMK||Palm Island|AU|2
YPAS||Packsaddle||AU|1|||YBHI:200
YPAY|||Papunya|AU|1|||YBAS:213
YPBH|||Peterborough|AU|1|||YPOD:129
YPBO|PBO|Paraburdoo||AU|3
YPCC|CCK|Cocos Islands||CC|4|West Island Keeling Keeling
YPCE|||Pooncarie|AU|1|||YMIA:106
YPCH||Patchewollock||AU|1|||YMIA:127
YPCM||Pickertaramoor|Pickertaramoor Airstrip|AU|1|||YSNK:46
YPCS|||Pinnacles Homestead|AU|1|||YLST:48
YPDA|PDN|Kangaroo Island|Parndana|AU|1|||YKSC:25
YPDI|PDE||Pandie Pandie|AU|1|||YBDV:26
YPDN|DRW|Darwin|Darwin International Airport / RAAF Darwin|AU|4
YPDO|PRD|Pardoo||AU|1|||YPPD:103
YPDY|||Padthaway Station|AU|1|||YMTG:128
YPEA||Bullsbrook|RAAF Base Pearce|AU|2|||YPPH:31
YPED||Adelaide|RAAF Base Edinburgh|AU|2|||YPAD:28
YPEF||Sunbury||AU|1|Penfield||YMML:21
YPEN|||Penny|AU|1|||YMOG:125
YPFL|||Preston Field - Blair Howe|AU|1|||YBLN:79
YPFT|||Cooma/Polo Flat|AU|1|||YCOM:18
YPGH|||Pigeon Hole|AU|1|||YKKG:80
YPGV|GOV|Nhulunbuy|Gove|AU|3
YPHS||Anmatjere|Pine Hill Station|AU|1|||YBAS:180
YPHU||Bathurst Island|Port Hurd Airstrip|AU|1|||YSNK:58
YPIN|||Pinnacle|AU|1|||YCKN:177
YPIR|PPI||Port Pirie|AU|2|||YWHA:49
YPIX|||Pia|AU|1|||YMOG:185
YPIY|||Pingelly|AU|1|||YPPH:124
YPJI|||Perenjori|AU|1|||YKAR:46
YPJT|JAD|Perth|Perth Jandakot|AU|2|||YPPH:19
YPKA|KTA|Karratha||AU|3
YPKE|||Peake|AU|1|||YCBP:145
YPKG|KGI|Broadwood|Kalgoorlie Boulder|AU|3
YPKH|||Peak Hill|AU|1|||YPKS:45
YPKI|||Parakylia|AU|1|||YOLD:47
YPKL||Puckapunyal||AU|1|Military||YBDG:71
YPKS|PKE|Parkes||AU|3
YPKT|PKT|Wadeye|Port Keats|AU|2|||YPKU:191
YPKU|KNX|Kununurra|East Kimberley Regional|AU|3
YPLC|PLO|Port Lincoln||AU|3
YPLG|||Pilliga|AU|1|||YWLG:82
YPLI|||Palmers Island/Yamba|AU|1|||YLIS:68
YPLL||Peak Hill||AU|1|||YMEK:112
YPLM|LEA|Exmouth|Learmonth|AU|3
YPLU|||Plutonic|AU|1|||YWLU:165
YPMB|||Plumbago|AU|1|||YBHI:151
YPME|||Palmer|AU|1|||YPDN:47
YPMH|PXH|Mount Eba|Prominent Hill|AU|2
YPMP|EDR|Pormpuraaw||AU|2
YPMQ|PQQ|Port Macquarie||AU|3
YPNA|||Pinnarendi Airstrip|AU|1|||YBCS:158
YPNC|||Pine Creek|AU|1|||YPDN:188
YPNG|PEY|Penong||AU|1|||YCDU:71
YPNI|||Prenti Downs|AU|1|||YGRM:195
YPNN|||Pinnaroo|AU|1|||YMIA:155
YPNW|||Pannawonica|AU|1|||YPKA:112
YPOD|PTJ||Portland|AU|3
YPOK|MBF||Porepunkah|AU|1|||YHOT:54
YPOP||Kookynie|Porphyry|AU|1|||YLTN:130
YPPD|PHE|Port Hedland||AU|4
YPPF||Adelaide|Adelaide Parafield|AU|1|||YPAD:19
YPPH|PER|Perth||AU|4
YPRA|||Prairie|AU|1|||YBDG:51
YPRE|||Premer Betoota|AU|1|||YSTW:100
YPSH|PEA|Ironstone|Penneshaw|AU|1|||YKSC:40
YPSI||Passage Island||AU|1|||YFLI:54
YPTB|||Peterborough|AU|1|||YPAG:120
YPTJ||Patjarr||AU|1
YPTN|KTR||Tindal|AU|2|||YPDN:285
YPUA||Nganmarriyanga|Palumpa|AU|1|||YPKU:202
YPUG|||Pungalina|AU|1|||YMHU:146
YPUN|||Punmu|AU|1
YPVD|||Plevna Downs|AU|1|||YWDH:140
YPWH||Pittsworth||AU|1|||YBWW:25
YPWR|UMR|Woomera||AU|1|||YOLD:74
YPXM|XCH|Flying Fish Cove|Christmas Island|CX|3
YPYA|||Palmyra Airstrip|AU|1|||YBMK:12
YPYD|||Pyramid Hill|AU|1|||YBDG:78
YPYF|||Paynes Find|AU|1|||YKAR:95
YQBE|||Quambone Royona|AU|1|||YCNM:52
YQBK|||Quambatook|AU|1|||YBDG:122
YQDG|||Quairading|AU|1|||YPPH:137
YQDI|UIR||Quirindi|AU|1|||YSTW:56
YQLP|ULP||Quilpie|AU|3
YQNS|UEE||Queenstown|AU|1|||YWYY:121
YQON||Quondong||AU|1|||YBHI:161
YQRN|||Quorn|AU|1|||YPAG:42
YQUA||Tarcoola|Quarry2|AU|1|||YPMH:115
YQUE|||Questa Park|AU|1|||YBHI:239
YRAG|||Raglan|AU|1|||YBDG:115
YRAM|||Raymore Homestead|AU|1|||YWDH:89
YRAT|||Abrolhos Rat Island|AU|1|||YGEL:90
YRAV|||Ravensthorpe|AU|1|||YESP:174
YRAW|||Rawlinna|AU|1
YRAY|RSE|Sydney|Rose Bay Seaplane Base|AU|1|||YSSY:12
YRBB|||Rainbow Beach|AU|1|||YHBA:62
YRBE||Robe||AU|1|||YMTG:107
YRBM|||Redbank Mine|AU|1|||YDMG:140
YRBN||Carrington Falls|Robertson Airstrip|AU|1|||YSSY:92
YRBR|RRV||Robinson River|AU|1|||YMHU:97
YRBT|||Rabbit Flat|AU|1|||YHOO:215
YRBW|||Rainbow|AU|1|||YMIA:187
YRDA|||Yardea|AU|1|||YCDU:170
YRDM|||Redmont|AU|1|||YCHK:77
YRDS||Richmond|Richmond Downs|AU|1|||YRMD:24
YRDY|||Reedys|AU|1|||YMEK:63
YRED||Redcliffe||AU|1|||YBBN:20
YREN|RMK||Renmark|AU|2|||YMIA:130
YRHL|||Red Hill Station|AU|1|||YPKA:158
YRID||Clarkefield|Riddell|AU|1|||YMML:24
YRKE||Rokewood|Kuruc-A-Ruc South|AU|1|||YMAV:68
YRKS|||Rocklands|AU|1|||YBMA:170
YRLE|||Rocklea|AU|1|||YPBO:44
YRLH||Riversleigh||AU|1|||YDMG:121
YRLL|||Rolleston|AU|1|||YEML:109
YRLO||Pallamana|Rollo's|AU|1|||YPAD:60
YRMD|RCM||Richmond|AU|2
YRNG|RAM||Ramingining|AU|2
YRNW|||Ringwood|AU|1|||YBAS:108
YROB|ROH||Robinhood|AU|1|||YRMD:216
YROE|RBU|Roebourne||AU|1|||YPKA:40
YROI|RBC|Robinvale||AU|1|||YMIA:78
YROK|||Rocky River|AU|1|||YKSC:76
YROM|RMA|Roma||AU|3
YROT||Rothsay|Rothsay Mine|AU|1|||YKAR:21
YROV|||Ross River|AU|1|||YBAS:67
YRRB|RPB|Roper Bar||AU|1|||YGTE:225
YRRG|||Rhodes Ridge|AU|1|||YNWN:57
YRRR|||Raymangirr|AU|1|||YLEV:25
YRSB|RSB||Roseberth|AU|1|||YBDV:29
YRSK|||Ringer Soak|AU|1|||YHOO:218
YRST||Dilston|Rostella|AU|1|||YMLT:27
YRSV|||Rosevale Resort|AU|1|||YBCV:88
YRSY||Romsey||AU|1|||YMML:32
YRTI|RTS||Rottnest Island|AU|1|||YPPH:41
YRTP|RTP|Yagoonya|Rutland Plains|AU|1|||YKOW:20
YRUD|||Rudal River|AU|1|||YNWN:258
YRVE|||Riveren|AU|1|||YHOO:66
YRVL|||Rose Vale|AU|1|||YSWG:45
YRWA|||Rawlinna Station|AU|1
YRWF|||Rowland Flat Airstrip|AU|1|||YPAD:57
YRWH|||Ravensworth|AU|1|||YGTH:166
YRXB|||Roxby Downs Station|AU|1|||YOLD:30
YRYH|RHL||Roy Hill Station|AU|1|||YCHK:44
YRYK|||Rawnsley Park|AU|1|||YPAG:127
YRYL||Rylstone||AU|1|||YBTH:78
YRYW||Raywood||AU|1|||YBDG:24
YSAH|||Sandhill|AU|1|||YCHK:50
YSAI|||Saipem|AU|1|||YAYE:188
YSAN|NDS|Sandstone||AU|1|||YLST:139
YSAR|||Mount Sarah|AU|1|||YCBP:228
YSAW|||Sawfish Camp|AU|1|||YMHU:186
YSBG|||Strathbogie|AU|1|||YMML:121
YSBK|BWU|Sydney|Sydney Bankstown|AU|2|||YSSY:17
YSBO|||Stanbroke|AU|1|||YBMA:103
YSCA|||Scotia Sanctuary|AU|1|||YBHI:137
YSCB|CBR|Canberra||AU|3
YSCD|WCD|Cundeelee|Carosue Dam|AU|1|||YPKG:107
YSCN|CDU|Cobbitty|Camden|AU|2|||YSSY:46
YSCO|NSO||Scone|AU|1|||YSTW:107
YSCR|SQC||Southern Cross|AU|1|||YPKG:207
YSDL|||Sudley|AU|1|||YBWP:48
YSDN|||Soudan Station|AU|1|||YBMA:267
YSDU|DBO|Dubbo|Dubbo City Regional|AU|3
YSEA|||Sedan|AU|1|||YPAD:84
YSEN|||Serpentine|AU|1|||YPPH:51
YSFG||Steinfeld|Stonefield Gliding|AU|1|||YPAD:98
YSFI||Eighty Mile Beach|Sandfire|AU|1|||YBRM:235
YSFY|||Sandfly|AU|1|||YMHB:30
YSGD|||Strathgordon|AU|1|||YPMP:89
YSGE|SGO||St George|AU|2
YSGR|||South Grafton|AU|1|||YCFS:70
YSGT|SIX|Singleton||AU|1|||YWLM:64
YSGW|ZGL||South Galway|AU|1|||YWDH:65
YSHG|SGP|Shay Gap||AU|1|||YPPD:158
YSHK|MJK|Denham|Shark Bay|AU|3
YSHL|WOL|Albion Park Rail|Shellharbour|AU|2||YWOL|YSSY:77
YSHN|||Shannon River|AU|1|||YABA:122
YSHR|WSY|Shute Harbour|Shute Harbour/Whitsunday|AU|1|||YBHM:22
YSHT|SHT||Shepparton|AU|2|||YBDG:101
YSHW||Luscombe|Holsworthy|AU|1|Military||YSSY:21
YSIA||Siam||AU|1|||YWHA:94
YSII|SBR|Saibai Island||AU|2
YSKR||Mapoon|Skardon River|AU|1|||YBWP:91
YSLE|||St Leonards|AU|1|||YMAV:24
YSLG|||Silent Grove|AU|1|||YFTZ:128
YSLK|||Sea Lake|AU|1|||YMIA:162
YSLN|||Strathleven|AU|1|||YKOW:180
YSLV|||Sylvania Homestead|AU|1|||YNWN:29
YSMB|GOS|Gosford|Somersby Airstrip|AU|1|||YSSY:65
YSMH||Shoal Water bay|Samuel Hill Airfield|AU|1|Danger Zone RAAF Shoal water bay||YBRK:73
YSMI|SIO||Smithton|AU|2|||YWYY:57
YSMP|SHU||Smith Point|AU|1|||YSNK:168
YSMR|STH|Strathmore||AU|1|||YNTN:159
YSMY|||Strathmay|AU|1|||YPMP:128
YSNC||Sinclair||AU|1|||YLST:57
YSNF|NLK|Burnt Pine|Norfolk Island|NF|3
YSNK|SNB|Milikapiti|Snake Bay|AU|3||YSNB
YSNT|||Snowtown|AU|1|||YWHA:114
YSNW|NOA|Nowra Hill|Naval Air Station Nowra - HMAS Albatross|AU|2|||YMRY:112
YSNY|||Sunnyside|AU|1|Walla Walla||YMAY:34
YSOL|SLJ|Karijini National Park|Solomon|AU|1|||YPBO:102
YSOW|||Southwell|AU|1|||YPMP:62
YSPE|SNH||Stanthorpe|AU|1|||YBWW:120
YSPF||Isisford|Springfield|AU|1|||YBCK:58
YSPI|||Springsure|AU|1|||YEML:63
YSPK|SCG||Spring Creek|AU|1|||YPAM:215
YSPT|SHQ||Southport|AU|1|||YBCG:30
YSPV|KSV||Springvale|AU|1|||YBOU:108
YSRD||Laverton|Sunrise Dam|AU|1|||YLTN:54
YSRI|XRH|Richmond|RAAF Base Richmond|AU|2|||YSSY:53
YSRN|SRN||Strahan|AU|1|||YWYY:134
YSRT|||Surat|AU|1|||YROM:75
YSSY|SYD|Sydney|Sydney Kingsford Smith|AU|4|Sydney (Mascot)
YSTA|||Saint Arnaud|AU|1|||YBDG:103
YSTB||Holroyd River|Strathburn|AU|1|||YCOE:86
YSTC||Stuart Creek||AU|1|||YOLD:87
YSTH|HLS||St Helens|AU|1|||YMLT:92
YSTI|STF|Stephens Island|Stephens Island Seaplane Base|AU|1|||YDNI:26
YSTO||Stonehenge||AU|1|||YWDH:134
YSTR|||Strathearn|AU|1|||YBHI:111
YSTT|||Santa Teresa|AU|1|||YBAS:60
YSTW|TMW|Tamworth||AU|3
YSUJ|||Supplejack Downs|AU|1|||YHOO:126
YSVH|||Silver Hills|AU|1|||YRMD:12
YSVN|||Strathaven|AU|1|||YCOE:128
YSVP|SSP|Silver Plains||AU|1|||YCOE:53
YSWA|||Swansea|AU|1|||YMHB:94
YSWE||Sweers Island|Sweers Island Resort|AU|1|||YMTI:68
YSWG|WGA|Forest Hill|Wagga Wagga|AU|3
YSWH|SWH||Swan Hill|AU|2|||YBDG:168
YSWI||Swan Island||AU|1|||YFLI:72
YSWK||South West Rocks||AU|1|||YPMQ:59
YSWL|SWC||Stawell|AU|2|||YBDG:146
YSWR||Swan Reach||AU|1|||YPAD:106
YSWS|WSI|Sydney|Western Sydney International|AU|3|Nancy-Bird Walton||YSSY:43
YSYN||Strathalbyn||AU|1|||YPAD:59
YTAA|XTR||Tara|AU|1|||YBWW:137
YTAB|TBL||Tableland Homestead|AU|1|||YFTZ:174
YTAD|||Tandou Lake|AU|1|||YBHI:93
YTAM|XTO||Taroom|AU|1|||YROM:139
YTAN|||Tanami Downs|AU|1|||YHOO:266
YTAR|TAQ|Tarcoola||AU|1|||YPMH:142
YTBB|||Tumby Bay|AU|1|||YPLC:33
YTBG|||Talbingo|AU|1|||YSCB:87
YTBR|TBK||Timber Creek|AU|1|||YPKU:187
YTCF|||Tracies Field|AU|1|||YCHK:249
YTCK|||Torrens Creek|AU|1|||YHUG:81
YTCY||De Rose Hill|Tarcoonyinna|AU|1|||YCBP:287
YTDM|||Todmorden|AU|1|||YCBP:213
YTDN|||Tooradin|AU|1|||YMMB:39
YTDR|TDR||Theodore|AU|1|||YTNG:73
YTEC|||Tenneco Station Three|AU|1|||YBHI:253
YTEE|TQP|Trepell||AU|1|||YCCY:136
YTEF|TEF||Telfer|AU|2|||YCHK:276
YTEM|TEM|Temora||AU|2|||YSWG:83
YTEN|||Tenneco Station Five|AU|1|||YPAG:152
YTFA||Truro Flat|Truro Flat Airpark|AU|1|||YPAD:99
YTFD||Tenterfield||AU|1|||YLIS:131
YTGA|TAN||Tangalooma|AU|1|||YBBN:37
YTGG|||Taggerty|AU|1|||YMEN:82
YTGI|||Trangie|AU|1|||YSDU:60
YTGM|XTG|Thargomindah||AU|3
YTGT|GTS|The Granites Gold Mine|The Granites|AU|1|||YHOO:248
YTGV|||The Grove|AU|1|||YSWG:79
YTHD|TDN|Drysdale River|Theda Station|AU|1|||YPKU:261
YTHI||Thistle Island||AU|1|||YPLC:54
YTHN||Leinster|Thunderbox|AU|1|||YLST:42
YTHR|||Three Rivers Homestead|AU|1|||YMEK:173
YTHS|||Three Springs|AU|1|||YKAR:87
YTHV|||Thevenard Island|AU|1|||YPLM:129
YTHY|TYG||Thylungra|AU|1|||YQLP:98
YTIB|TYB||Tibooburra|AU|2|||YTGM:236
YTII|||Trinidad|AU|1|||YQLP:117
YTIN|||Tintinara|AU|1|||YPAD:173
YTIT|||Ti Tree|AU|1|||YBAS:193
YTJI||Gibson Desert South|Tjirrkarli|AU|1|||YGRM:278
YTJU|||Tjuntjuntjarra|AU|1
YTKS|||Toorak Research Station|AU|1|||YJLC:42
YTKY|TKY|Turkey Creek||AU|1|||YPKU:150
YTLG|||Taralga Grathawa|AU|1|||YBTH:99
YTLL|||Tullamore|AU|1|||YPKS:83
YTLP||Tilpa||AU|1|||YCBA:147
YTLT|||Tarlton Downs|AU|1
YTMB|||Tambo|AU|1|||YBCK:98
YTML||Shark Bay|Tamala|AU|1|||YSHK:85
YTMN|||Tanami|AU|1|||YHOO:200
YTMO|PHQ|Phosphate Hill|The Monument|AU|1|||YBOU:123
YTMP|TPR|Tom Price||AU|1|||YPBO:49
YTMS|||Tambar Springs|AU|1|||YSTW:99
YTMU|TUM|Tumut||AU|2|||YSWG:71
YTMY|TYP|Tobermorey||AU|1|||YBOU:213
YTNB|TXR|Tanbar Station|Tanbar|AU|1|||YWDH:89
YTNE|||Tenneco Station One|AU|1
YTNG|THG|Biloela|Thangool|AU|3
YTNK|TCA|Tennant Creek||AU|3
YTNN|||Tenneco Station Four|AU|1|||YPAG:215
YTNR|||Tanumbirini|AU|1|||YMHU:153
YTNS|||Toliness|AU|1|||YBCK:118
YTOA|||Toolachie|AU|1|||YTGM:298
YTOB|||Toomba|AU|1|||YBTL:145
YTOC|TCW||Tocumwal|AU|1|||YMAY:125
YTOG|||Togo Station|AU|1|||YNBR:38
YTOK|||Torres Park Homestead|AU|1|||YBCV:170
YTOS|||Tenneco Station Two|AU|1
YTOT|||Tottenham|AU|1|||YSDU:113
YTPA||Tipperary||AU|1|||YPDN:147
YTPE|||Tempe Downs|AU|1|||YBAS:163
YTPK|||Turtle Park Airstrip|AU|1|||YBMK:22
YTQY||Torquay||AU|1|||YMAV:30
YTRA||Tropicana Gold Mine|Tropicana|AU|1|||YGRM:147
YTRB|||Torrumbarry|AU|1|||YBDG:77
YTRC||Longreach|Tarcombe|AU|1|||YLRE:115
YTRE|TRO|Taree||AU|2|||YPMQ:60
YTRK|||Turee Creek|AU|1|||YPBO:102
YTST|TTX|Anjo Peninsula|Truscott-Mungalalu|AU|1
YTTE||Aurukun|Ti Tree|AU|1|||YAUR:70
YTTI|||Troughton Is|AU|1
YTUA|||Triabunna|AU|1|||YMHB:48
YTUC|||Tuckabiana|AU|1|||YMOG:77
YTUG|||Trugananni|AU|1|||YTNG:138
YTUN||Tunbridge||AU|1|||YMLT:64
YTUY|||Tully|AU|1|||YPAM:114
YTVA|||Talavera|AU|1|||YRMD:175
YTWB|TWB|Toowoomba||AU|1|||YBWW:13
YTWE|||Trelawney|AU|1|||YBAR:165
YTWN|||Tooraweenah|AU|1|||YCNM:71
YTYA||Tyabb||AU|1|||YMMB:33
YTYH|||Tyagarah|AU|1|||YBNA:27
YTYN|||Tieyon|AU|1|||YBAS:268
YUCH||Ucharonidge Station|Ucharonidge|AU|1|||YTNK:218
YUDA|UDA|Undara||AU|1|||YBCS:189
YUDG|||Urandangi|AU|1|||YBMA:156
YUDL|||Undilla|AU|1|||YBMA:146
YUMB|||Umbeara|AU|1|||YBAS:217
YUMU|||Umuwa|AU|1|||YAYE:180
YUNY|CZY||Cluny|AU|1|||YBIE:25
YUPG|||Urapunga|AU|1|||YGTE:220
YUPH||Upper Horton|Upper Horton Wyl|AU|1|||YNBR:60
YUSL|USL|Useless Loop||AU|1|||YSHK:34
YUTP|||Utopia|AU|1|||YBAS:215
YUTS|||Utopia Station|AU|1|||YBAS:188
YVAF||Epping Forest|Valley Field|AU|1|||YMLT:30
YVAL||Sheffield|The Vale|AU|1|||YDPO:32
YVIV||Mount Vivian||AU|1|||YPMH:98
YVLG|||Valley of Lagoons|AU|1|||YPAM:156
YVNS|||Vaughan Springs|AU|1
YVRD|VCD|Victoria River|Victoria River Downs|AU|1|||YKKG:116
YVRS|VNR||Vanrook Station|AU|1|||YNTN:123
YVSH|||Vashon Head|AU|1|||YSNK:149
YVVA|||Victoria Valley|AU|1|||YPOD:115
YVVL|||Violet Vale|AU|1|||YCOE:120
YWAB|||Waldburg Homestead|AU|1|||YPBO:180
YWAC|WAU|Wauchope||AU|1|||YTNK:112
YWAG|||Wanaaring|AU|1|||YBKE:176
YWAL|WLA|Eighty Mile Beach|Wallal Downs|AU|1|||YPPD:221
YWAT|||Wattle Hills|AU|1|||YLHR:33
YWAV|WAV||Wave Hill|AU|1|||YKKG:33
YWAX||Wanarn||AU|1
YWBH|||Wallabadah|AU|1|||YSTW:56
YWBI|||Warrabri|AU|1|||YTNK:153
YWBL|WMB||Warrnambool|AU|1|||YPOD:85
YWBN||Wedderburn||AU|1|||YSSY:43
YWBR||Warburton||AU|1
YWBS|SYU|Sue Islet|Warraber Island|AU|2
YWCA|WIO||Wilcannia|AU|1|||YBHI:188
YWCH|WLC||Walcha|AU|1|||YARM:54
YWCK|WAZ||Warwick|AU|1|||YBWW:67
YWCM|||Wilson's Camp|AU|1|||YHOO:252
YWDA|WND|Laverton|Windarra|AU|1|||YLTN:23
YWDG|WRN|Windarling Mine|Windarling|AU|1|||YPKG:216
YWDH|WNR|Windorah||AU|3
YWDJ|||Windjana Grove|AU|1|||YFTZ:108
YWDL|WON|Wondoola||AU|1|||YNTN:101
YWDS||Woodside|Woodside Airstrip|AU|1|||YPAD:33
YWDT|||Wyandotte|AU|1|||YPAM:183
YWDV|MFL|Wando Vale|Mount Full Stop|AU|1|||YHUG:145
YWEC|||Wellclose|AU|1|||YQLP:119
YWEE|||Wooleen Homestead|AU|1|||YKBR:199
YWEL|||Wellington|AU|1|||YSDU:48
YWEO|||Wertaloona|AU|1|||YOLD:238
YWER|||Wernadinga|AU|1|||YBKT:61
YWEX|||Well 33|AU|1
YWFD|||Western Field|AU|1|||YFTZ:123
YWGA|GYB|Wodgina|Port Hedland/Wodgina|AU|1|||YPPD:73
YWGI|||Wedge Island Airstrip|AU|1|||YPLC:81
YWGM||York|White Gum Air Park|AU|1|||YPPH:92
YWGN|||Wagin|AU|1|||YABA:184
YWGT|WGT|Laceby|Wangaratta|AU|2|||YMAY:70
YWGW|||Wongawol|AU|1|||YWLU:182
YWHA|WYA|Whyalla||AU|3
YWHC||White Cliffs||AU|1|||YBHI:198
YWHG||Wahring|Wahring Field|AU|1|||YBDG:82
YWHI||Witchelina||AU|1|||YOLD:124
YWHL||Creswell|Walhallow|AU|1|||YMHU:155
YWIB||Mount Willoughby||AU|1|||YCBP:133
YWIE|||Wirralie Gold Mine|AU|1|||YMRB:133
YWIL|||Wilandra|AU|1|||YBHI:137
YWIO||Wilton||AU|1|||YSSY:56
YWIR||Wirraminna||AU|1|||YOLD:101
YWIS|||Williamson|AU|1|||YBRK:105
YWJS||Wee Jasper||AU|1|||YSCB:50
YWKB|WKB||Warracknabeal|AU|2|||YBDG:177
YWKD||Woodycupaldiya||AU|1|||YPDN:188
YWKI|||Waikerie|AU|1|||YPAD:162
YWKM||Wyalkatchem||AU|1|||YPPH:157
YWKS||Preston Heath|Wilkins Runway|AQ|1
YWKW||Warkworth||AU|1|||YWLM:81
YWLA|||Willowra|AU|1|||YTNK:244
YWLB|||Welbourn Hill|AU|1|||YCBP:199
YWLG|WGE||Walgett|AU|3
YWLH|||Wallara Ranch|AU|1|||YAYE:148
YWLM|NTL|Newcastle||AU|4|Williamtown
YWLN|||Wooltana|AU|1|||YOLD:245
YWLP||Wilsons Promontory|Wilsons Promontory Airport|AU|1|Yanakie Airport||YMMB:149
YWLU|WUN||Wiluna|AU|3
YWMA|||Wonnaminta Stat|AU|1|||YBHI:171
YWMC||William Creek||AU|1|||YPMH:120
YWMG|||Weilmoringle|AU|1|||YLRD:105
YWML|||Westmoreland|AU|1|||YDMG:93
YWMM|||Wollomombi|AU|1|||YARM:45
YWMO|||West Musgrave|AU|1
YWMP|WPK|Wrotham Park||AU|1|||YCKN:185
YWMY|||Williambury|AU|1|||YCAR:188
YWNA|||Wilgena|AU|1|||YPMH:140
YWND|WDI||Wondai|AU|1|||YBSU:127
YWNI||Aurukun|Wathanin|AU|1|||YAUR:43
YWNL||Wingellina||AU|1|||YAYE:226
YWNO|||Wonganoo|AU|1|||YLST:101
YWNS|||Wandsworth|AU|1|||YWDH:110
YWOD||Woodbury||AU|1|||YMLT:71
YWOH|||Wongan Hills|AU|1|||YPPH:138
YWOM|||Woolomin|AU|1|||YSTW:38
YWON|||Wonthaggi|AU|1|||YMMB:71
YWOR|WLL||Wollogorang|AU|1|||YDMG:124
YWOV|||Woodvale|AU|1|||YBDG:18
YWOX|||Woorlba|AU|1|||YESP:248
YWPA|||Wirrealpa|AU|1|||YPAG:193
YWPE||North Walpole|Walpole|AU|1|||YABA:101
YWPL|||Winning Pool North|AU|1|||YPLM:106
YWRA|||Wooroona|AU|1|||YBMA:139
YWRC|||Wave Rock|AU|1|||YPPH:282
YWRE|||Wirralie|AU|1|||YBAR:163
YWRL|||Warialda|AU|1|||YMOR:67
YWRN|||Warren|AU|2|||YSDU:91
YWRR||Lyndon|Warroora Homestead|AU|1|||YPLM:137
YWRT|||Waratah|AU|1|||YWYY:52
YWRV|||Walker River|AU|1|||YGTE:87
YWSD||Broughams Gate|Westward Downs|AU|1|||YBHI:144
YWSG|||Watts Bridge|AU|1|||YBBN:72
YWSI|||Wirrida Siding|AU|1|||YCBP:62
YWSL|SXE|Sale|West Sale|AU|2|||YHOT:120
YWSN|||Woodstock Station|AU|1|||YRMD:154
YWSX|||Westonia|AU|1|||YPPH:266
YWTL|WLO||Waterloo|AU|1|||YPKU:115
YWTN|WIN||Winton|AU|3
YWTO||Wentworth||AU|1|||YMIA:24
YWTV|||Watson River|AU|1|||YAUR:58
YWUD|WUD||Wudinna|AU|1|||YPLC:178
YWVA||Warnervale||AU|1|||YWLM:62
YWVL|||Woodville|AU|1|||YARM:18
YWWA|WEW||Wee Waa|AU|1|||YNBR:41
YWWG|WRW||Warrawagine|AU|1|||YCHK:200
YWWH||Wentford Homestead||AU|1|||YMRB:37
YWWI|WWI|Woodie Woodie||AU|1|||YCHK:178
YWWL|WWY|West Wyalong||AU|2|||YNAR:105
YWYA|||Wyandra|AU|1|||YCMU:92
YWYB|||Wynbring|AU|1|||YCDU:176
YWYF|||Wycheproof|AU|1|||YBDG:123
YWYM|WYN||Wyndham|AU|1|||YPKU:66
YWYY|BWT|Burnie|Wynyard|AU|3
YXBT||Ballarat|Ballarat Health Service Helipad|AU|1|||YMAV:76
YYAA|||Yandama|AU|1|||YBHI:260
YYAC|||Yacamunda|AU|1|||YMRB:126
YYAG|||Yagga Yagga|AU|1
YYAK|||Yalkulka|AU|1|||YBCS:46
YYAL|YLG|Yalgoo||AU|1|||YKAR:96
YYBE|||Yarrabee Mine|AU|1|||YEML:92
YYDE|||Yandee|AU|1|||YPPD:113
YYDM||Leonora|Yundamindera|AU|1|||YLTN:68
YYEA|||Yeaburn|AU|1|||YMML:70
YYER|||Yerilla|AU|1|||YLEO:82
YYGG|||Yagga Yagga|AU|1
YYKI|OKR|Yorke Island||AU|2
YYLD|||Yalda Downs Homestead|AU|1|||YBHI:241
YYLG|||Yallalong Homestead|AU|1|||YKBR:128
YYLR|KYF||Yeelirrie|AU|1|||YWLU:73
YYMI|XMY|Yam Island||AU|2
YYND|YUE||Yuendumu|AU|1|||YBAS:277
YYNG|NGA||Young|AU|2|||YSWG:124
YYNR|||Yanrey|AU|1|||YPLM:79
YYOO|||Yalymboo|AU|1|||YPAG:112
YYOR|ORR||Yorketown|AU|1|||YKSC:79
YYRK|||York|AU|1|||YPPH:79
YYRM|||Yarram|AU|1|||YMMB:158
YYRN||Cosmo Newbery|Yamarna|AU|1|||YGRM:19
YYRW|||Yarlarweelor|AU|1|||YMEK:140
YYTA|KYI|Yalata Mission||AU|1|||YCDU:193
YYUM|||Yuinmery|AU|1|||YMOG:125
YYUN|||Yunta|AU|1|||YPAG:172
YYWA|||Yowah|AU|1|||YTGM:80
YYWG|||Yarrawonga|AU|1|||YMAY:84
YYYA||Yandeyarra Station|Mugarinya|AU|1|||YPPD:104
YZAN|||Zanthus|AU|1|||YPKG:202
YZCE||Churchable|Churchable Airstrip|AU|1|||YBWW:59
YZHN|||Zeehan|AU|1|||YWYY:104
ZBAA|PEK|Beijing|Beijing Capital|CN|4
ZBAD|PKX|Beijing|Beijing Daxing|CN|4
ZBAL|AXF|Bayanhot|Alxa Left Banner Bayanhot|CN|3
ZBAR|RHT|Badanjilin|Alxa Right Banner Badanjilin|CN|2
ZBBB||Beijing|Beijing Xijiao|CN|2|||ZBAA:32
ZBCD|CDE|Chengde|Chengde Puning|CN|3
ZBCF|CIF|Chifeng|Chifeng Yulong|CN|3
ZBCZ|CIH|Changzhi|Changzhi Wangcun|CN|2
ZBDH|BPE|Qinhuangdao|Qinhuangdao Beidaihe|CN|3|Qinhuangdao (Changli)
ZBDS|DSN|Ordos|Ordos Ejin Horo|CN|4
ZBDT|DAT|Datong|Datong Yungang|CN|4
ZBEN|EJN|Ejin Banner|Ejin Banner Taolai|CN|1
ZBER|ERL|Erenhot|Erenhot Saiwusu|CN|3
ZBES|YIE|Arxan|Arxan Yi'ershi|CN|3
ZBHD|HDG|Handan||CN|3
ZBHH|HET|Hohhot|Hohhot Baita|CN|4
ZBHZ|HUO|Holingol|Holingol Huolinhe|CN|3
ZBLA|HLD|Hailar|Hulunbuir Hailar|CN|4
ZBLF|LFQ|Linfen|Linfen Yaodu|CN|3|Linfen (Yaodu)
ZBLL|LLV|Lüliang|Lüliang Dawu|CN|3
ZBLX||Beijing|Liangxiangzhen Air Base|CN|2|||ZBAD:38
ZBMV||Bayannur|Dengkou General Aviation|CN|1|||ZBUH:59
ZBMZ|NZH|Manzhouli|Manzhouli Xijiao|CN|3
ZBNJ||Beijing|Beijing Nanjiao|CN|2|||ZBAD:4
ZBNY|NAY|Beijing|Beijing Nanyuan|CN|1|||ZBAD:31
ZBOW|BAV|Baotou|Baotou Donghe|CN|4
ZBSG|SZH|Shuozhou|Shuozhou Zirun|CN|3
ZBSH||Qinhuangdao|Qinhuangdao Shanhaiguan|CN|1|Qinhuangdao (Shanhaiguan)||ZBDH:66
ZBSJ|SJW|Shijiazhuang|Shijiazhuang Zhengding|CN|4
ZBSN|TVS|Tangshan|Tangshan Sannühe|CN|2|Tangshan (Fengrun)
ZBTG||Tanggu|Tianjin Tanggu|CN|1|||ZBTJ:37
ZBTJ|TSN|Tianjin|Tianjin Binhai|CN|4
ZBTL|TGO|Tongliao||CN|3
ZBUC|UCB|Ulanqab|Ulanqab Jining|CN|3
ZBUH|WUA|Wuhai||CN|3
ZBUL|HLH|Ulanhot|Ulanhot Yilelite|CN|2
ZBUT||Ruad Zhongqi|Ruad Zhongqi Hailiutu|CN|2|Ruad Zhongqi (Urad Middle Banner)
ZBXH|XIL|Xilinhot||CN|3
ZBXJ||Beijing|[Duplicate] Beijing Xijiao|CN|2|||ZBAA:32
ZBXT|XNT|Xingtai|Xingtai Dalian|CN|1|||ZBHD:40
ZBXZ|WUT|Xinzhou|Xinzhou Wutaishan|CN|2
ZBYC|YCU|Yuncheng|Yuncheng Yanhu|CN|4|Yuncheng (Yanhu)
ZBYN|TYN|Taiyuan|Taiyuan Wusu|CN|4
ZBYZ|RLK|Bayannur|Bayannur Tianjitai|CN|3
ZBZJ|ZQZ|Zhangjiakou|Zhangjiakou Ningyuan|CN|3||ZZHA
ZBZL|NZL|Zhalantun|Zhalantun Genghis Khan|CN|3
ZGBH|BHY|Beihai|Beihai Fucheng|CN|3
ZGBS|AEB|Baise|Baise Bama|CN|3|Baise (Tianyang) Bose
ZGCD|CGD|Changde|Changde Taohuayuan|CN|3|Changde (Dingcheng)
ZGCJ|HJJ|Huaihua|Huaihua Zhijiang|CN|3
ZGCS||Changsha|Changsha Datuopu Airport / Changsha Air Base|CN|2|Changsha (Tianxin)||ZGHA:29
ZGCZ|HCZ|Chenzhou|Chenzhou Beihu|CN|3
ZGDY|DYG|Zhangjiajie|Zhangjiajie Hehua|CN|4|Zhangjiajie (Yongding)
ZGFS|FUO|Foshan|Foshan Shadi|CN|3|Foshan (Nanhai)
ZGGG|CAN|Guangzhou|Guangzhou Baiyun|CN|4|Guangzhou (Huadu)
ZGHA|CSX|Changsha|Changsha Huanghua|CN|4|Changsha (Changsha)
ZGHC|HCJ|Hechi|Hechi Jinchengjiang|CN|3|Hechi (Jinchengjiang)
ZGHY|HNY|Hengyang|Hengyang Nanyue|CN|2
ZGHZ|HUZ|Huizhou|Huizhou Pingtan|CN|3|Huizhou (Pingtan)
ZGKL|KWL|Guilin|Guilin Liangjiang|CN|4|Guilin (Lingui)
ZGLD||Yunfu|Luoding Sulong|CN|1|Yunfu (Luoding)||ZGWZ:93
ZGLG|LLF|Yongzhou|Yongzhou Lingling|CN|3
ZGMX|MXZ|Meizhou|Meizhou Meixian Changgangji|CN|2|Meizhou (Meixian)
ZGNN|NNG|Nanning|Nanning Wuxu|CN|4|Nanning (Jiangnan)
ZGOW|SWA|Jieyang|Jieyang Chaoshan|CN|4|Jieyang (Rongcheng)
ZGSD|ZUH|Zhuhai|Zhuhai Jinwan|CN|4|Zhuhai (Jinwan)
ZGSG|HSC|Shaoguan|Shaoguan Danxia|CN|3
ZGSY|WGN|Shaoyang|Shaoyang Wugang|CN|3|Shaoyang (Wugang)
ZGSZ|SZX|Shenzhen|Shenzhen Bao'an|CN|4
ZGWZ|WUZ|Tangbu|Wuzhou Xijiang|CN|3
ZGXN|XIN|Meizhou|Xingning Air Base|CN|1|Meizhou (Xingning)||ZGMX:37
ZGXX|DXJ|Xiangxi|Xiangxi Biancheng|CN|2
ZGYJ||Yangjiang|Yangjiang Heshan|CN|1|||ZGSD:131
ZGYL|YLX|Yulin|Yulin Fumian|CN|3
ZGYY|YYA|Yueyang|Yueyang Sanhe|CN|3|Yueyang (Yueyanglou)
ZGZH|LZH|Liuzhou|Liuzhou Bailian Airport / Bailian Air Base|CN|3|Liuzhou (Liujiang)
ZGZJ|ZHA|Zhanjiang|Zhanjiang Wuchuan|CN|4
ZHAY|AYN|Anyang|Anyang Yindu|CN|1|||ZHQQ:31
ZHCC|CGO|Zhengzhou|Zhengzhou Xinzheng|CN|4
ZHEC|EHU|Ezhou|Ezhou Huahu|CN|4
ZHES|ENH|Enshi|Enshi Xujiaping|CN|3|Enshi (Enshi)
ZHGH|LHK|Xiangyang|Guangzhou MR Air Base / Guanghua|CN|2|Xiangyang (Laohekou)||ZHXF:62
ZHHH|WUH|Wuhan|Wuhan Tianhe|CN|4|Wuhan (Huangpi)
ZHJZ|SHS|Jingzhou|Jingzhou Shashi|CN|3|Jingzhou (Shashi)
ZHLY|LYA|Luoyang|Luoyang Beijiao|CN|4|Luoyang (Laocheng)
ZHNY|NNY|Nanyang|Nanyang Jiangying|CN|2|Nanyang (Wancheng)
ZHQQ|HQQ|Anyang|Anyang Hongqiqu|CN|2
ZHSN|HPG|Shennongjia|Shennongjia Hongping|CN|3|Shennongjia (Hongping)
ZHSY|WDS|Shiyan|Shiyan Wudangshan|CN|3|Shiyan (Maojian)
ZHXF|XFN|Xiangyang|Xiangyang Liuji|CN|3|Xiangyang (Xiangzhou)
ZHXY|XAI|Xinyang|Xinyang Minggang|CN|3
ZHYC|YIH|Yichang|Yichang Sanxia|CN|3|Yichang (Xiaoting)
ZJHK|HAK|Haikou|Haikou Meilan|CN|4|Haikou (Meilan)|ZGHK
ZJQH|BAR|Qionghai|Qionghai Bo'ao|CN|3|Qionghai (Basuo)
ZJSY|SYX|Sanya|Sanya Phoenix|CN|4|Sanya (Tianya)
ZKHM|RGO|Hoemun-ri|Orang|KP|3|Chongjin
ZKHW||Hwangju|Hwangju Airbase|KP|2|||ZKPY:64
ZKPN||Sunchon|Pukchang Air Base|KP|2|||ZKPY:40
ZKPY|FNJ|Pyongyang|Pyongyang Sunan|KP|4
ZKSC||Sunchon|Sunchon Air Base|KP|2|||ZKPY:28
ZKSD|DSO|Sŏndŏng-ni|Sondok|KP|3
ZKSE|YJS|Samjiyŏn||KP|1|||ZYBS:69
ZKUJ|UJU|Uiju||KP|1|||ZYDD:23
ZKWS|WOS|Wonsan|Wonsan Kalma|KP|3
ZLAK|AKA|Ankang|Ankang Fuqiang|CN|2|Ankang (Hanbin)
ZLDH|DNH|Dunhuang|Dunhuang Mogao|CN|4
ZLDL|HXD|Delingha|Haixi Delingha|CN|3
ZLGL|GMQ|Golog|Golog Maqên|CN|3|Golog (Maqên)
ZLGM|GOQ|Golmud||CN|3
ZLGY|GYU|Guyuan|Guyuan Liupanshan|CN|3|Guyuan (Yuanzhou)
ZLHB|HBQ|Haibei|Haibei Qilian|CN|2|Haibei (Qilian)
ZLHN|HNG|Hainan|Hainanzhou Gonghe|CN|2|Hainan (Gonghe)||ZLXN:141
ZLHX|HTT|Mengnai|Huatugou|CN|3
ZLHZ|HZG|Hanzhong|Hanzhong Chenggu|CN|3|Hanzhong (Chenggu)
ZLIC|INC|Yinchuan|Yinchuan Hedong|CN|4
ZLJC|JIC|Jinchang|Jinchang Jinchuan|CN|3
ZLJQ|JGN|Jiayuguan||CN|4
ZLLL|LHW|Lanzhou|Lanzhou Zhongchuan|CN|4|Lanzhou (Yongdeng)
ZLLN|LNL|Longnan|Longnan Chengzhou|CN|3|Longnan (Cheng)
ZLPC||Weinan|Pucheng Neifu|CN|1|Weinan (Pucheng)||ZLXY:83
ZLQY|IQN|Qingyang|Qingyang Xifeng|CN|3|Qingyang (Xifeng)
ZLSN|SIA|Xi'an|Xi'an Xiguan|CN|2|Xi'an (Baqiao)||ZLXY:34
ZLTS|THQ|Tianshui|Tianshui Maijishan|CN|3|Tianshui (Maiji)|ZBEE
ZLXH|GXH|Gannan|Gannan Xiahe|CN|3|Gannan (Xiahe)
ZLXN|XNN|Xining|Xining Caojiabao|CN|4|Haidong
ZLXY|XIY|Xi'an|Xi'an Xianyang|CN|4
ZLYA|ENY|Yan'an|Yan'an Nanniwan|CN|3|Yan'an (Baota)
ZLYL|UYN|Yulin|Yulin Yuyang|CN|3
ZLYS|YUS|Yushu|Yushu Batang|CN|3|Yushu (Batang)
ZLZW|ZHY|Zhongwei|Zhongwei Shapotou|CN|3|Zhongwei (Shapotou)
ZLZY|YZY|Zhangye|Zhangye Ganzhou|CN|3|Zhangye (Ganzhou)
ZMAH|AVK|Arvaikheer||MN|3
ZMAT|LTI|Altai||MN|3
ZMAZ||Mazongshan||CN|1|||ZWHM:285
ZMBD||Binder||MN|1
ZMBH|BYN|Bayankhongor||MN|3
ZMBN|UGA|Bulgan||MN|3
ZMBR|UGT|Khankhongor|Bulagtai Resort|MN|1|||ZMDZ:26
ZMBS|HBU|Bulgan|Bulgan Sum|MN|1|||ZWFY:177
ZMBU|UUN||Baruun Urt|MN|2|||ZMCD:193
ZMCD|COQ||Choibalsan|MN|3
ZMCK|UBN|Ulaanbaatar|Ulaanbaatar Chinggis Khaan|MN|4|Ulaanbaatar (Sergelen)
ZMDA||Dadal||MN|1|||ZMCD:251
ZMDN|ULZ|Uliastai|Donoi|MN|2
ZMDZ|DLZ|Dalanzadgad||MN|3
ZMGT||Ovoot Tolgoi|Ovoot|MN|1|||ZMDZ:254
ZMHG|HTM|Hatgal|Khatgal|MN|1|||ZMMN:86
ZMHH|KHR||Kharkhorin|MN|1|||ZMAH:111
ZMHU|HJT|Khujirt||MN|1|||ZMAH:75
ZMKB||Khanbogd|Khanbumbat|MN|1||ZMOT|ZMDZ:207
ZMKD|HVD|Khovd||MN|3
ZMMG|MXW|Mandalgobi||MN|2
ZMMN|MXV|Mörön||MN|3
ZMSF|||Nalaikh/Sky Friends|MN|1|||ZMCK:48
ZMSH||Sainshand||MN|1|||ZBER:231
ZMTG|TSZ|Tsetserleg||MN|1|||ZMBH:156
ZMTL|TNZ|Tosontsengel||MN|1|||ZMMN:167
ZMTT||Tsogttsetsii|Umnugobi/Tavan Tolgoi|MN|1|||ZMDZ:99
ZMUB|ULN|Ulaanbaatar|Buyant-Ukhaa|MN|3|||ZMCK:22
ZMUG|ULO|Ulaangom||MN|3
ZMUH|UNR|Öndörkhaan||MN|1|||ZMCK:287
ZMUL|ULG|Ölgii|Ölgii Mongolei|MN|3
ZPBS|BSD|Baoshan|Baoshan Yunrui|CN|3|Baoshan (Longyang)
ZPCW|CWJ|Lincang|Cangyuan Washan|CN|3|Lincang (Cangyuan)
ZPDL|DLU|Dali|Dali Fengyi|CN|3|Dali (Xiaguan)
ZPDQ|DIG|Diqing|Diqing Shangri-La|CN|3|Diqing (Shangri-La)
ZPJH|JHG|Jinghong|Xishuangbanna Gasa|CN|4|Jinghong (Gasa)
ZPJM|JMJ|Pu'er|Lancang Jingmai|CN|3|Pu'er (Lancang)
ZPLC|LNJ|Lincang|Lincang Boshang|CN|3
ZPLJ|LJG|Lijiang|Lijiang Sanyi|CN|4
ZPMS|LUM|Dehong|Dehong Mangshi|CN|3|Dehong (Mangshi)
ZPNL|NLH|Ninglang|Ninglang Luguhu|CN|3
ZPPP|KMG|Kunming|Kunming Changshui|CN|4
ZPSM|SYM|Pu'er|Pu'er Simao|CN|2
ZPTC|TCZ|Baoshan|Tengchong Tuofeng|CN|3|Baoshan (Tengchong)|ZUTC
ZPWS|WNH|Wenshan|Wenshan Puzhehei|CN|2
ZPYM|YUA|Chuxiong|Yuanmou Air Base|CN|2|Chuxiong (Yuanmou)||ZUZH:90
ZPZT|ZAT|Zhaotong|Zhaotong Zhaoyang|CN|3
ZSAM|XMN|Xiamen|Xiamen Gaoqi|CN|4
ZSAQ|AQG|Anqing|Anqing Tianzhushan Airport / Anqing North Air Base|CN|3
ZSBA|BFY|Bengbu|Bengbu Tenghu|CN|3
ZSBB|BFU|Bengbu|Bengbu Renheji|CN|2|||ZSBA:43
ZSBO|BZJ|Bozhou|Bozhou Airport|CN|1|under construction||ZSFY:77
ZSCG|CZX|Changzhou|Changzhou Benniu|CN|3
ZSCN|KHN|Nanchang|Nanchang Changbei|CN|4
ZSDL|AZJ|Zhenjiang|Zhenjiang Dalu|CN|1|||ZSCG:36
ZSDY|DOY|Dongying|Dongying Shengli|CN|3|Dongying (Kenli)
ZSFD||Hefei|Feidong Bailong General|CN|1|||ZSOF:46
ZSFY|FUG|Yingzhou|Fuyang Xiguan|CN|3|Yingzhou, Fuyang
ZSFZ|FOC|Fuzhou|Fuzhou Changle|CN|4|Fuzhou (Changle)
ZSGS|JGS|Ji'an|Jinggangshan|CN|3
ZSGZ|KOW|Ganzhou|Ganzhou Huangjin|CN|2
ZSHC|HGH|Hangzhou|Hangzhou Xiaoshan|CN|4
ZSHZ|HZA|Heze|Heze Mudan|CN|3|Heze (Dingtao)
ZSJD|JDZ|Jingdezhen|Jingdezhen Luojia|CN|3
ZSJG|JNG|Jining|Jining Da'an|CN|3
ZSJH|JUH|Chizhou|Chizhou Jiuhuashan|CN|2
ZSJJ|JIU|Jiujiang|Jiujiang Lushan|CN|2
ZSJN|TNA|Jinan|Jinan Yaoqiang|CN|4|Jinan (Licheng)
ZSJU|JUZ|Quzhou||CN|3|Quzhou (Kezheng)
ZSJX|JNH|Xiuzhou|Jiaxing Nanhu|CN|3|Xiuzhou, Hangzhou
ZSLG|LYG|Lianyungang|Lianyungang Huaguoshan|CN|4
ZSLI|LIJ|Lishui||CN|1|Lishui (Liandu)|ZSLR|ZSYW:109
ZSLO|LCX|Longyan|Liancheng Guanzhishan|CN|3|Longyan (Liancheng)|ZBSZ
ZSLQ|HYN|Taizhou|Taizhou Luqiao|CN|3|Taizhou (Luqiao)
ZSLY|LYI|Linyi|Linyi Qiyang|CN|3|Linyi (Hedong)
ZSNB|NGB|Ningbo|Ningbo Lishe|CN|4
ZSNJ|NKG|Nanjing|Nanjing Lukou|CN|4
ZSNT|NTG|Nantong|Nantong Xingdong|CN|3|Nantong (Tongzhou)
ZSOF|HFE|Hefei|Hefei Xinqiao|CN|4
ZSPD|PVG|Shanghai|Shanghai Pudong|CN|4|Shanghai (Pudong)
ZSQD|TAO|Qingdao|Qingdao Jiaodong|CN|4|Qingdao (Jiaozhou)
ZSQZ|JJN|Quanzhou|Quanzhou Jinjiang|CN|4
ZSRG|RUG|Rugao|Rugao Air Base|CN|2|Rugao (Nantong)||ZSNT:50
ZSRJ|JRJ|Ganzhou|Ganzhou Ruijin|CN|1|||ZSLO:74
ZSRZ|RIZ|Rizhao|Rizhao Shanzihe|CN|3|Rizhao (Donggang)
ZSSH|HIA|Huai'an|Huai'an Lianshui|CN|4
ZSSM|SQJ|Sanming|Sanming Shaxian|CN|3|Sanming (Sha)
ZSSR|SQD|Shangrao|Shangrao Sanqingshan|CN|3|Shangrao (Hengfeng)
ZSSS|SHA|Shanghai|Shanghai Hongqiao|CN|4|Shanghai (Minhang)
ZSSZ|SZV|Suzhou|Suzhou Guangfu|CN|2|||ZSWX:26
ZSTX|TXN|Huangshan|Huangshan Tunxi|CN|4
ZSTZ||Anji|Anji Tianzihu General|CN|2|||ZSWA:94
ZSWA|WHA|Wuhu|Wuhu Xuanzhou|CN|3
ZSWF|WEF|Weifang|Weifang Nanyuan|CN|3|Weifang (Kuiwen)
ZSWH|WEH|Weihai|Weihai Dashuibo|CN|3
ZSWU|WHU|Wuhu|Wuhu Wanli Airport / Wuhu Air Base|CN|1|||ZSWA:40
ZSWX|WUX|Wuxi|Sunan Shuofang|CN|4
ZSWY|WUS|Wuyishan|Nanping Wuyishan|CN|3
ZSWZ|WNZ|Wenzhou|Wenzhou Longwan|CN|4|Wenzhou (Longwan)
ZSXZ|XUZ|Xuzhou|Xuzhou Guanyin|CN|3
ZSYA|YTY|Yangzhou|Yangzhou Taizhou|CN|3
ZSYC|YIC|Yichun|Yichun Mingyueshan|CN|3
ZSYH|YHJ|Nanchang|Nanchang Yaohu|CN|1|||ZSCN:27
ZSYN|YNZ|Yancheng|Yancheng Nanyang|CN|4|Yancheng (Tinghu)
ZSYT|YNT|Yantai|Yantai Penglai|CN|4
ZSYW|YIW|Yiwu/Jinhua|Yiwu|CN|4
ZSZS|HSN|Zhoushan|Zhoushan Putuoshan|CN|4
ZUAL|NGQ|Shiquanhe|Ngari Gunsa|CN|3
ZUAS|AVA|Anshun|Anshun Huangguoshu|CN|3|Anshun (Xixiu)
ZUBC|BCJ|Mianyang|Beichuan Yongchang|CN|1|||ZUMY:32
ZUBD|BPX|Bangda|Qamdo Bangda|CN|3
ZUBJ|BFJ|Bijie|Bijie Feixiong|CN|3
ZUBZ|BZX|Bazhong|Bazhong Enyang|CN|3
ZUCK|CKG|Chongqing|Chongqing Jiangbei|CN|4
ZUDA|DZH|Dazhou|Dazhou Jinya|CN|3|Dazhou (Dachuan)
ZUDC|DCY|Garzê|Daocheng Yading|CN|3|Garzê (Daocheng)
ZUDJ|DEJ|Tongren|Tongren Dejiang Airport|CN|2|Under Construction||ZUZY:96
ZUDR|DDR|Xigazê|Shigatse Tingri|CN|3|Xigazê (Dingri)
ZUDX|DAX|Dazhou|Dachuan|CN|2|Dazhou (Daxian)
ZUDZ|DZU|Dazu|Dazu Air Base|CN|1|||ZULZ:74
ZUGH|GHN|Deyang|Guanghan|CN|2|Deyang (Guanghan)||ZUUU:57
ZUGU|GYS|Guangyuan|Guangyuan Panlong|CN|3|Guangyuan (Lizhou)
ZUGY|KWE|Guiyang|Guiyang Longdongbao|CN|4|Guiyang (Nanming)
ZUGZ|GZG|Garzê|Garze Gesar|CN|2|Garzê (Garzê)
ZUHY|AHJ|Ngawa|Hongyuan|CN|2|Ngawa (Hongyuan)||ZUJZ:129
ZUJZ|JZH|Ngawa|Jiuzhai Huanglong|CN|3|Ngawa (Songpan)
ZUKD|KGT|Garzê|Kangding|CN|3|Garzê (Kangding)
ZUKJ|KJH|Kaili|Kaili Huangping|CN|3|Kaili (Huangping)
ZULA|LZG|Nanchong|Langzhong Gucheng|CN|3|Nanchong (Langzhong)
ZULB|LLB|Qiannan|Libo|CN|2|Qiannan (Libo)
ZULP|LIA|Liangping||CN|1|||ZUDA:53
ZULS|LXA|Lhasa|Lhasa Gonggar|CN|4|Shannan
ZULZ|LZO|Luzhou|Luzhou Yunlong|CN|3|Luzhou (Yunlong)
ZUMT|WMT|Zunyi|Zunyi Maotai|CN|3
ZUMY|MIG|Mianyang|Mianyang Nanjiao|CN|3|Mianyang (Fucheng)
ZUNC|NAO|Nanchong|Nanchong Gaoping|CN|2|Nanchong (Gaoping)
ZUNP|HZH|Liping||CN|3
ZUNZ|LZY|Nyingchi|Nyingchi Mainling|CN|3|Nyingchi (Mainling)
ZUPL|APJ|Burang Town|Ali Pulan|CN|2|||VNST:81
ZUPS|LPF|Liupanshui|Liupanshui Yuezhao|CN|3|Liupanshui (Zhongshan)
ZUQJ|JIQ|Qianjiang|Qianjiang Wulingshan|CN|3
ZURK|RKZ|Xigazê|Xigaze Peace Airport / Shigatse Air Base|CN|4|Xigazê (Samzhubzê)
ZUSH|LGZ|Shannan|Shannan Longzi|CN|2
ZUSN||Suining||CN|1|Suining (Chuanshan)||ZUNC:64
ZUTF|TFU|Chengdu|Chengdu Tianfu|CN|4|Chengdu (Jianyang)
ZUTR|TEN|Tongren|Tongren Fenghuang|CN|3|Tongren (Daxing)
ZUUU|CTU|Chengdu|Chengdu Shuangliu|CN|4|Chengdu (Shuangliu)
ZUWL|CQW|Wulong|Chongqing Xiannüshan|CN|3
ZUWS|WSK|Wushan|Chongqing Wushan|CN|2
ZUWX|WXN|Wanzhou|Wanzhou Wuqiao|CN|2
ZUXC|XIC|Liangshan|Xichang Qingshan|CN|3|Liangshan (Xichang)
ZUXJ||Chengdu|Chengdu Xinjin|CN|1|Chengdu (Xinjin)||ZUUU:18
ZUYB|YBP|Yibin|Yibin Wuliangye|CN|3|Yibin (Cuiping)
ZUYI|ACX|Xingyi|Xingyi Wanfenglin|CN|3
ZUZH|PZI|Panzhihua|Panzhihua Bao'anying|CN|3|Panzhihua (Renhe)
ZUZY|ZYI|Zunyi|Zunyi Xinzhou|CN|3
ZWAK|AKU|Aksu|Aksu Hongqipo|CN|3|Aksu (Onsu)
ZWAL|ACF|Aral|Aral Tarim|CN|2
ZWAT|AAT|Altay|Altay Xuedu|CN|3
ZWBL|BPL|Bole|Bole Alashankou|CN|3
ZWCM|IQM|Qiemo|Qiemo Yudu|CN|3
ZWFY|FYN|Fuyun|Fuyun Koktokay|CN|3
ZWHJ|HJB|Hejing|Hejing Bayinbuluke|CN|2
ZWHM|HMI|Hami||CN|3
ZWHZ|SHF|Shihezi|Shihezi Huayuan|CN|2
ZWKC|KCA|Kuqa|Kuqa Qiuci|CN|2
ZWKL|KRL|Korla|Korla Licheng|CN|3
ZWKM|KRY|Karamay||CN|2
ZWKN|KJI|Burqin|Burqin Kanas|CN|3
ZWLK|DHH|Barkol|Barkol Dahe|CN|2|||ZWHM:110
ZWML||Hoxud|Malan Air Base|CN|2|Hoxud, Bayingolin||ZWKL:107
ZWNL|NLT|Xinyuan|Xinyuan Nalati|CN|3
ZWQT|JBK|Qitai|Qitai Jiangbulake|CN|2
ZWRQ|RQA|Ruoqiang Town|Ruoqiang Loulan|CN|3
ZWSC|QSZ|Shache||CN|3
ZWSH|KHG|Kashgar|Kashgar Laining|CN|4
ZWSS|SXJ|Shanshan||CN|2|||ZWTL:94
ZWTC|TCG|Tacheng|Tacheng Qianquan|CN|2
ZWTK|HQL|Tashikuergan|Tashikuergan Hongqilafu|CN|3
ZWTL|TLQ|Turpan|Turpan Jiaohe|CN|3
ZWTN|HTN|Hotan||CN|3
ZWTS|TWC|Tumxuk|Tumxuk Tangwangcheng|CN|2
ZWWW|URC|Ürümqi|Ürümqi Tianshan|CN|4
ZWYN|YIN|Ili|Ili Yining|CN|3|Ili (Yining / Ghulja)
ZWYT|YTW|Hotan|Yutian Wanfang|CN|2|Hotan (Yutian)
ZWZS|ZFL|Zhaosu|Zhaosu Tianma|CN|2
ZYAS|AOG|Anshan|Anshan Teng'ao Airport / Anshan Air Base|CN|3
ZYBA|DBC|Baicheng|Baicheng Chang'an|CN|3
ZYBS|NBS|Baishan|Changbaishan|CN|3
ZYCC|CGQ|Changchun|Changchun Longjia|CN|4
ZYCH|CNI|Dalian|Changhai Dachangshandao|CN|2|Dalian (Changhai)
ZYCY|CHG|Shuangta|Chaoyang|CN|3|Shuangta, Chaoyang
ZYDD|DDG|Dandong|Dandong Langtou|CN|3|Dandong (Zhenxing)
ZYDQ|DQA|Daqing|Daqing Sartu|CN|2
ZYDU|DTU|Heihe|Wudalianchi Dedu|CN|3
ZYFK||Faku|Faku Caihu|CN|1|||ZYTX:84
ZYFX||Xihe|Fuxin|CN|1|Xihe, Fuxin||ZYCY:122
ZYFY|FYJ|Fuyuan|Fuyuan Dongji|CN|3
ZYGH||Haolibao|Genhe|CN|1|||ZYJD:197
ZYHB|HRB|Harbin|Harbin Taiping|CN|4
ZYHE|HEK|Heihe|Heihe Aihui|CN|3
ZYJD|JGD|Jiagedaqi|Daxing'anling Elunchun|CN|3
ZYJL|JIL|Jilin|Jilin Ertaizi|CN|1|||ZYCC:57
ZYJM|JMU|Jiamusi|Jiamusi Songjiang|CN|3
ZYJS|JSJ|Jiansanjiang|Jiansanjiang Shidi|CN|3
ZYJX|JXA|Jixi|Jixi Xingkaihu|CN|3
ZYJZ|JNZ|Jinzhou|Jinzhou Bay|CN|3|Jinzhou (Linghai)
ZYLD|LDS|Yichun|Yichun Lindu|CN|3
ZYLY||Liaoyang|Liaoyang Air Base|CN|1|||ZYTX:53
ZYMD|MDG|Mudanjiang|Mudanjiang Hailang|CN|3
ZYMH|OHE|Mohe|Mohe Gulian|CN|3
ZYNJ|NJJ|Heihe|Nenjiang Melgen|CN|1|||ZYDU:106
ZYQQ|NDG|Qiqihar|Qiqihar Sanjiazi|CN|4
ZYSD|HSF|Suifenhe|Suifenhe Dongning|CN|1|||ZYJX:97
ZYSQ|YSQ|Qian Gorlos Mongol Autonomous County|Songyuan Chaganhu|CN|3
ZYSY||Yuhong|Shenyang Yuhong Quansheng|CN|2|Yuhong, Shenyang||ZYTX:25
ZYTH||Tahe|Da Hinggan Ling Targen|CN|1|||ZYMH:173
ZYTL|DLC|Dalian|Dalian Zhoushuizi|CN|4|Dalian (Ganjingzi)
ZYTN|TNH|Tonghua|Tonghua Sanyuanpu|CN|3
ZYTX|SHE|Shenyang|Shenyang Taoxian|CN|4
ZYUH||Huludao|Jinxi Air Base|CN|1|||ZYJZ:39
ZYXC|XEN|Huludao|Xingcheng Air Base|CN|2|Huludao (Xingcheng)||ZYJZ:63
ZYYC||Yichun||CN|1|||ZYLD:15
ZYYJ|YNJ|Yanji|Yanji Chaoyangchuan|CN|3
ZYYK|YKH|Yingkou|Yingkou Lanqi|CN|3|Yingkou (Laobian)
ZYYY||Dadong|Shenyang Dongta|CN|2|Dadong, Shenyang||ZYTX:16
ZZHN||Xiangcheng|Zhangzhou Longxi|CN|1|Xiangcheng, Zhangzhou||ZSAM:48
|AAI|Arraias||BR|1|||SNBR:229
|ABP|Atkamba Mission|Atkamba|PG|1|||AYKI:22
|ACM|Arica||CO|1|||SKHZ:139
|ADV|El Daein||SD|1|||HSNN:146
|AEQ|Chifeng|Ar Horqin|CN|1|||ZBTL:169
|AFK|Ampara|Kondavattavana Tank Seaplane Base|LK|1|||VCCB:47
|AGG|Angoram||PG|1|||AYWK:69
|AGK|Kagua||PG|1|||AYMN:35
|AHD|Ardmore|Ardmore Downtown Executive|US|1|||KLAW:128
|AHF|Arapahoe|Arapahoe Municipal|US|1|||KMCK:60
|AHM|Ashland|Ashland Municipal Airport Sumner Parker Field|US|1|||KMFR:27
|AHY|Ambatolahy|Ambatolhy|MG|1|||FMMV:131
|AIC|Bigatyelang Island|Ailinglaplap Airok|MH|1|||JEJ:35
|AIM|Ailuk Island|Ailuk|MH|1|||LIK:86
|AJS|Mulegé|Punta Abreojos|MX|1|||SRL:150
|AKM|ZaKouma|Zakuoma|TD|1
|ALE|Alpine|Alpine Casparis Municipal|US|1|||KMAF:223
|ALZ|Lazy Bay|Alitak Seaplane Base|US|2
|AME|Alto Molocue||MZ|1|||FQNP:181
|AMK|Durango|Animas Air Park|US|1|||KDRO:12
|AML|Puerto Armuelles||PA|1|||MPDA:49
|ANL|Andulo||AO|1|||FNHU:181
|AOB||Annanberg|PG|1|||AYMH:109
|AOD|Abou-Deïa||TD|1
|AOM|Adam||OM|1|||OOMS:154
|AOS|Amook Bay|Amook Bay Seaplane Base|US|2
|APP||Asapa|PG|1|||AYGR:30
|APY|Alto Parnaíba||BR|1|||SBPJ:295
|AQY|Girdwood|Girdwood-Alyeska|US|1|||PAMR:47
|ARF|Acaricuara||CO|1|||SKMU:81
|ARO|Arboletes||CO|1|||SKMR:66
|ARP||Aragip|PG|1|||AYTU:92
|ASZ||Asirim|PG|1|||AYGT:29
|ATE|Antlers|Antlers Municipal|US|1|||KFSM:173
|ATT|Atmautluak||US|2
|ATX|Atbasar||KZ|1|||UACK:184
|AUE|Ras Abu Rudeis|Abu Rudeis|EG|1|||HESH:155
|AUL|Aur Atoll|Aur Island|MH|2
|AWR|Awar|Awar Airport|PG|1|unusable||AYWK:144
|AXB|Alexandria Bay|Maxson|US|1|||KART:37
|AYA|Ayapel||CO|1|||SKMR:94
|AYC|Ayacucho||CO|1|||SKCC:143
|AYI|Yari||CO|1|||SKHZ:133
|AYM|Abu Dhabi|Yas Island Seaplane Base|AE|1|||OMAA:5
|AYY|Pottuvil|Arugam Bay SPB|LK|1|||VCCB:95
|AZB||Amazon Bay|PG|1|||AYGN:109
|AZT|Zapatoca||CO|1|||SKBG:41
|BAC|Barranca De Upia||CO|1|||SKVV:85
|BAJ|Unea Island|Bali|PG|1|||AYHK:155
|BCC|Bear Creek|Bear Creek 3|US|1|||PPCT:65
|BCQ|Brak||LY|2|||HLLS:76
|BCS|Belle Chasse|Southern Seaplane|US|1|||KMSY:27
|BCW|Benguera Island||MZ|2|||FQVL:22
|BCZ|Bickerton Island|Milyakburra|AU|1|||YGTE:35
|BDF|Bradford|Rinkenberger Restricted Landing Area|US|1|||KPIA:63
|BDX|Broadus||US|1|||KGCC:125
|BDY|Bandon|Bandon State|US|1|||KOTH:39
|BFG|Bullfrog|Bullfrog Basin|US|1|||KPGA:95
|BGT|Bagdad||US|1|||KPRC:69
|BHC|Bhurban|Bhurban Heliport|PK|1|||OPMF:42
|BHL|Ensenada|Bahía de los Ángeles|MX|1|||MMGR:115
|BII|Bikini Atoll||MH|1|||RNP:150
|BIJ||Biliau|PG|1|||AYMD:73
|BIZ|Bimin||PG|1|||AYTB:87
|BJE|Baleela Base Camp|Baleela|SD|1|||HSOB:286
|BJQ|Bahja||OM|1|||OODQ:169
|BJT|Bentota|Bentota River Waterdrome|LK|2
|BKF|Katmai National Park|Lake Brooks Seaplane Base|US|2
|BKV|Bailingmiao|Bailing|CN|1|||ZBOW:125
|BLP|Bellavista|Huallaga|PE|1|||SPST:66
|BNF|Baranof|Baranof Warm Springs Float and Seaplane Base|US|1|||PASI:32
|BNH|Boston|Cape Air Seaplanes on Boston Harbor Seaplane Base|US|1|||KBOS:2
|BNV|Boana||PG|1|||AYNZ:19
|BOV|Boang Island|Boang|PG|1|||AYKY:82
|BQV|Gustavus|Bartlett Cove Seaplane Base|US|1|||PAGS:11
|BRH|Brahman Mission|Brahman Airstrip|PG|1|||AYGA:38
|BSQ|Bisbee|Bisbee Municipal|US|1|||KTUS:130
|BSV|Besakoa||MG|1|||FMNM:76
|BSW|Boswell Bay||US|1|||PACV:37
|BVM|Belmonte||BR|1|||SBTC:59
|BWJ||Bawan|PG|1|||AYNZ:26
|BXL|Nanuya Lailai Island|Blue Lagoon Seaplane Base|FJ|1|||NFSW:28
|BXS|Borrego Springs|Borrego Valley|US|1|||KPSP:66
|BXX|Borama||SO|1|||HAJJ:73
|BYA|Boundary||US|1|||CKX:40
|BYB|Dibba al Baya|Dibba|OM|1|||OMRK:31
|BYL|Beliyela|Bella Yella|LR|1|||GLRB:133
|BYV|Colombo|Beira Lake Seaplane Base|LK|1|||VCCC:12
|BYW|Blakely Island||US|2
|BZB|Bazaruto Island||MZ|2|||FQVL:56
|BZF|Redding|Benton Field|US|1|||KRDD:12
|BZM|Bemolanga||MG|1|||FMMU:121
|BZT|Brazoria|Eagle Air Park|US|1|||KHOU:79
|CBC||Cherrabun|AU|1|||YFTZ:82
|CBZ|Binzhou|Binzhou Dagao General Aviation|CN|1|||ZSDY:81
|CCG|Crane|Crane County|US|1|||KMAF:61
|CDL|Candle|Candle 2|US|1|||PABL:36
|CEX|Chena Hot Springs||US|1|||PACE:83
|CFM|Conklin||CA|1|Leismer||CYMM:107
|CFQ|Creston|Creston Valley Regional Airport - Art Sutcliffe Field|CA|1|||YZZ:81
|CGA|Craig|Craig Seaplane Base|US|2
|CGG|Casiguran||PH|1|||RPUY:88
|CHP|Circle Hot Springs||US|1|||PACE:13
|CHZ|Chiloquin|Chiloquin State|US|1|||KMFR:85
|CIL|Council||US|1|||PAWM:27
|CJD|Candilejas||CO|1|||SKSV:22
|CJH|Chilko Lake||CA|1|Tsylos Park Lodge||YAA:121
|CKE|Lakeport|Lampson Field|US|1|||KSTS:54
|CKR|Crane Island|Crane Island Airstrip|US|1|||KFHR:8
|CKU|Cordova|Cordova Municipal|US|1|||PACV:15
|CKX|Chicken||US|2
|CLG|Coalinga|New Coalinga Municipal|US|1|||KFAT:85
|CMP|Santana do Araguaia||BR|1|||SBPJ:242
|CMT|Cametá|New Cametá|BR|1|||SNVS:119
|CMZ|Caia||MZ|1|||FQQL:162
|CNE|Penrose|Fremont County|US|1|||KCOS:55
|CNT|Charata||AR|1|||SARE:214
|CNZ|Cangamba||AO|1|||FNME:254
|COA|Columbia||US|1|||KSCK:74
|COB|Coolibah||AU|1|||YKKG:210
|COP|Cooperstown|Cooperstown-Westville|US|1|||KALB:90
|CPG|Carmen de Patagones||AR|1|||SAVV:10
|CPI||Cape Orford|PG|1|||AYTK:128
|CPN|Cape Rodney||PG|1|||AYPY:151
|CPU|Cururupu||BR|1|||SBSL:110
|CQT|Caquetania||CO|1|||SKNA:50
|CRJ|Coorabie||AU|1|||YCDU:136
|CRO|Corcoran||US|1|||KFAT:76
|CRY|Carlton Hill||AU|1|||YPKU:36
|CSD|Cresswell Downs||AU|1|||YMHU:168
|CSE|Crested Butte|Crested Butte Airpark|US|1|||KGUC:35
|CSR|Casuarito||CO|1|||SKPC:81
|CTE|Cartí Islands|Cartí|PA|1|||MPTO:61
|CTK|Canton|Canton Municipal|US|1|||KFSD:34
|CTO|Calverton|Calverton Executive Airpark|US|1|||KISP:29
|CTP|Carutapera||BR|1|||SNSM:158
|CTQ|Santa Vitória do Palmar||BR|1|||SBPK:220
|CTW|Cottonwood||US|1|||KPRC:36
|CTX|Cortland|Cortland County Chase Field|US|1|||KITH:23
|CUI|Currillo||CO|1|||SKYP:84
|CUJ|Culion||PH|1|||RPVV:35
|CUS|Columbus||US|1|||KLRU:84
|CVI|Caleta Olivia||AR|1|||SAVC:66
|CVL||Cape Vogel|PG|1|||AYGN:79
|CWS|Center Island||US|2
|CWX|Willcox|Cochise County|US|1|||KTUS:99
|CXC|Chitina||US|1|||PAGK:83
|CYM|Chatham|Chatham Seaplane Base|US|2
|CZC|Copper Center|Copper Center 2|US|1|||PAGK:25
|CZN|Chisana||US|1|||KMYK:88
|CZO|Chistochina||US|1|||PAGK:61
|CZP|Cape Pole|Cape Pole Seaplane Base|US|1|||PAKW:62
|DAF||Daup|PG|1|||AYMD:55
|DAH|Dathina||YE|1|||OYAA:166
|DAO||Dabo|PG|1|||AYGR:66
|DAS|Great Bear Lake||CA|1|||CYCO:232
|DBK|Kalpitiya Island|Dutch Bay SPB|LK|1|||VCBI:122
|DBS|Dubois|Dubois Municipal|US|1|||KIDA:73
|DBU|Dambulla|Dambulu Oya Tank Seaplane Base|LK|1|||VCCT:97
|DDM||Dodoima|PG|1|||AYGR:89
|DDU|Dadu|Dadu West|PK|1|||OPNH:92
|DEQ|Huzhou|Deqing Moganshan|CN|1|||ZSHC:43
|DFA|Shangluo||CN|1|Shangluo (Danfeng)||ZHSY:138
|DGF|Douglas Lake||CA|1|||CYLW:61
|DGM|Colombo|Dandugama Seaplane Base|LK|1|||VCBI:8
|DHB|Deer Harbor|Deer Harbor SPB|US|2
|DHG|Dalnegorsk||RU|1|||UHWP:70
|DIW|Dickwella|Mawella Lagoon Seaplane Base|LK|1|||VCCK:46
|DJN|Delta Junction||US|1|||PAFA:133
|DNF|Martuba|Martuba Air Base|LY|1|||HLLQ:79
|DOA|Doany||MG|1|||FMNS:72
|DRC|Dirico||AO|1|||FYRU:111
|DRF|Kenai|Drift River|US|1|||PAEN:50
|DRU|Drummond||US|1|||KMSO:75
|DSG|Dilasag||PH|1|||RPUY:72
|DST||Dubai Seaplane Terminal|AE|1|||OMDB:10
|DTH|Death Valley|Furnace Creek|US|1|||KLAS:161
|DTR|Decatur|Decatur Shores|US|2
|DUF|Corolla|Pine Island|US|1|||KORF:81
|DUQ|Duncan||CA|1|||CYYJ:24
|DVD|Andavadoaka||MG|1|||FMST:154
|DVK|Diavik||CA|1|||CYWE:186
|DWO|Sri Jayawardenepura Kotte|Diyawanna Oya Seaplane Base|LK|2
|DWS|Hulunbuir|Morin Dawa Banner|CN|1|||ZYDU:125
|DYM|Diamantina Lakes||AU|1|||YBOU:158
|DZI|Codazzi|Las Flores|CO|1|||SKVP:38
|EAL|Mejato Island|Elenak|MH|1|||UJE:127
|EBN|Ebadon Island|Ebadon|MH|1|||UJE:124
|EBO|Ebon Atoll|Ebon|MH|1|||KIO:123
|ECA|East Tawas|Iosco County|US|1|||KAPN:86
|ECO|El Encanto||CO|1|||SKHZ:56
|EDA|Edna Bay|Edna Bay Seaplane Base|US|2
|EGP|Eagle Pass|Maverick County Memorial|US|1|||MMPG:26
|EJT|Enejit Island|Enejit|MH|2
|ELJ|Ruperto Polania|El Recreo|CO|1|||SKNA:43
|ELW|Ellamar|Ellamar Seaplane Base|US|1|||PAKA:3
|ELX|El Tigre||VE|1|||SVST:14
|ENJ|El Naranjo||GT|1|||MGGT:61
|EPG|Weeping Water|Browns|US|1|||KOMA:52
|ERT|Erdenet||MN|1|||ZMBN:51
|ESA|Esa'ala||PG|1|||AYGN:84
|ESO|Espanola|Ohkay Owingeh|US|1|||KSAF:46
|EUE|Eureka||US|1|||KEKO:137
|EUO|Paratebueno||CO|1|||SKVV:54
|EXI|Excursion Inlet|Excursion Inlet Seaplane Base|US|2
|EYR|Yerington|Yerington Municipal|US|1|||KRNO:76
|FAK|False Island|False Island Seaplane Base|US|1|||PASI:55
|FBS|Friday Harbor|Friday Harbor Seaplane Base|US|2
|FID|Fishers Island|Elizabeth Field|US|1|||KMTP:22
|FLH|Flotta Isle|Flotta Isle Airstrip|GB|1|||EGPA:20
|FMU|Florence|Florence Municipal|US|1|||KOTH:64
|FOA|Foula||GB|2
|FOB|Fort Bragg||US|1|||KSTS:137
|FOY|Foya||LR|1|||GLRB:236
|FSL|Fossil Downs Station|Fossil Downs|AU|1|||YFTZ:25
|FUB|Fulleborn||PG|1|||AYGT:35
|FWL|Farewell||US|1|||PAFS:61
|GAA|Guamal||CO|1|||SKCZ:117
|GAV|Gag Island||ID|1|||WASN:98
|GBM|Garbaharey||SO|1|||HKWJ:295
|GCA|Guacamayas||CO|1|||SKSV:25
|GCD|Electric City|Grand Coulee Dam|US|1|||KEAT:102
|GCT|Littlefield|Grand Canyon Bar Ten Airstrip|US|1|||KSGU:90
|GCV|Gravatai||BR|1|||SBPA:18
|GCW|Peach Springs|Grand Canyon West|US|1|||KBVU:94
|GDH|Golden Horn Lodge|Golden Horn Lodge Seaplane Base|US|1|||WKK:54
|GHE|Garachiné||PA|1|||MPPI:57
|GHK|Kennedy Lake|Gahcho Kue|CA|1|||CYLK:137
|GIM|Miele Mimbale||GA|1|||FOGO:176
|GLB|Globe|San Carlos Apache|US|1|||KIWA:92
|GMV|Oljato-Monument Valley|Monument Valley|US|1|||KPGA:111
|GNF|Quincy|Gansner Field|US|1|||KTRK:98
|GNU|Goodnews||US|2
|GOL|Gold Beach|Gold Beach Municipal|US|1|||KCEC:72
|GRA|Puerto Mosquito|Gamarra|CO|1|||SKEJ:131
|GRC|Grand Cess||LR|1|||DISP:173
|GRT|Gujrat||PK|1|||OPST:30
|GSL|Taltheilei Narrows||CA|1|||CYLK:48
|GTK|Sungai Tekai||MY|1|||WMKM:82
|GTP|Grants Pass||US|1|||KMFR:45
|GTY|Gettysburg|Gettysburg Regional|US|1|||KHGR:41
|GUE|Guriaso||PG|1|Keraso||AYVN:104
|GUO|Guriel||SO|1|||HCMN:103
|GVX|Sandviken|Gävle–Sandviken|SE|2|||ESSD:81
|GWV|Glendale|Glendale Fokker Field|US|1|||KPIT:75
|HAZ|Hatzfeldhaven||PG|1|||AYMD:110
|HBB|Hobbs|Industrial Airpark|US|1|||KHOB:9
|HBH|Entrance Island|Entrance Island Seaplane Base|US|1|||PAPG:74
|HBK|Holbrook|Holbrook Municipal|US|1|||KSOW:76
|HBT|Hambantota|Hambantota Seaplane Base|LK|2
|HCC|Hudson|Columbia County|US|1|||KALB:51
|HED|Herendeen Bay||US|1|||PAOU:28
|HEW|Jinhua|Dongyang Hengdian General|CN|1|Jinhua (Dongyang)||ZSYW:32
|HGZ|Hogatza|Hog River|US|1|||PAHL:61
|HIS|Hayman Island|Hayman Island Resort Seaplane Base|AU|2
|HKB|Healy Lake||US|1|||PFTO:113
|HLJ|Suihua|Zhaodong Beidahuang General|CN|1|||ZYHB:67
|HLM|Holland|Park Township|US|1|||KMKG:42
|HLV|Helenvale||AU|1|||YCKN:27
|HOO|Đăk R'Lấp|Nhon Co|VN|1|||VVDL:91
|HPV|Hanalei|Princeville|US|1|||PHLI:28
|HRC|Zhayrem|Sary Su|KZ|1|||UAKD:198
|HRR|Campiña|Herrera|CO|1|||SKNV:68
|HSJ|Zhengzhou|Zhengzhou Shangjie|CN|1|||ZHCC:63
|HUC|Humacao|Dr Hermenegildo Ortiz Quinones|PR|1|||TJRV:21
|HUD|Humboldt|Humboldt Municipal|US|1|||KFOD:21
|HWI|Hawk Inlet|Hawk Inlet Seaplane Base|US|1|||PAJN:27
|HYL|Hollis|Hollis Clark Bay Seaplane Base|US|2
|HZU|Chengdu|Chengdu Huaizhou|CN|2|Chengdu (Jintang)||ZUTF:41
|HZV|Hazyview||ZA|1|||FAKN:37
|IBI|Iboki||PG|1|||AYHK:135
|IBL|Bazaruto Island|Indigo Bay Lodge|MZ|2|||FQVL:37
|ICO|Carles|Sicogon Airstrip|PH|1|||RPVR:56
|ICS|Cascade||US|1|||KMYL:44
|ICY|Icy Bay||US|1|||PACY:48
|IMA|Iamalele||PG|1|Iamalele, Fergusson Island||AYGN:91
|IMG|Inhaminga||MZ|1|||FQBR:154
|IMI|Arno Atoll|Ine|MH|1|||PKMJ:43
|INE|Chinde||MZ|1|||FQQL:93
|INY|Inyati||ZA|1|||FASZ:29
|IOK|Iokea||PG|1|||AYKM:74
|IOP|Ioma||PG|1|||AYGR:71
|IRB|Iraan|Iraan Municipal|US|1|||KMAF:119
|IRU|Iranamadu|Iranamadu Seaplane Base|LK|1|||VCCJ:69
|ISD|Iscuandé|Santa Bárbara|CO|1|||SKGP:17
|ITN|Itabuna|Tertuliano Guedes de Pinho|BR|1|||SBIL:28
|IVI|Isla Viveros|Viveros Island|PA|1|||MPRA:18
|IVO|Chivolo||CO|1|||SKBQ:98
|JAT|Ailinglapalap Atoll|Jabot|MH|1|||JEJ:21
|JBT|Bethel|Bethel Seaplane Base|US|1|||PABE:5
|JCY|Stonewall|LBJ Ranch|US|1|||KSAT:81
|JDE|Hangzhou|Jiande Qiandaohu General|CN|2|||ZSJU:52
|JEJ|Ailinglapalap Atoll|Jeh|MH|2
|JHL|Albian Village|Fort MacKay/Albian|CA|1|||CYMM:65
|JLA|Cooper Landing|Quartz Creek|US|1|||PANC:79
|JOJ|Hope Bay|Doris Lake|CA|1|||CYCB:124
|JRN|Juruena||BR|1|||SBAT:266
|JSO|Sobral|Dr. Luciano de Arruda Coelho Regional|BR|2|||SBJE:80
|JVI|Manville|Central Jersey Regional|US|1|||KTTN:33
|KAE|Kake|Kake Seaplane Base|US|2
|KAF|Karato||PG|1|||AYIQ:47
|KAK|Kar||PG|1|||AYMN:16
|KBC|Birch Creek||US|2
|KBE|Bell Island|Bell Island Hot Springs Seaplane Base|US|1|||PAKT:64
|KBH|Kahama|Kahama Airstrip|TZ|1|||HTSY:94
|KBT|Kaben||MH|1|||WTE:91
|KBW|Chignik|Chignik Bay Seaplane Base|US|1|||PAJC:2
|KCL|Chignik Flats|Chignik Lagoon|US|1|||PAJC:10
|KCN|Chernofski Harbor|Chernofski Harbor Seaplane Base|US|1|||PADU:85
|KCQ|Chignik Lake||US|2
|KCR|Colorado Creek||US|1|||PPCT:64
|KDS|Kamaran Downs||AU|1|||YBIE:18
|KDW|Kandy|Victoria Reservoir Seaplane Base|LK|1|||VCBI:99
|KDZ|Kandy|Polgolla Reservoir Seaplane Base|LK|2
|KEB|Nanwalek||US|2
|KEH|Kenmore|Kenmore Air Harbor LLC Seaplane Base|US|2
|KEK|Ekwok||US|1|||PANW:12
|KEW|Keewaywin||CA|2
|KEZ|Colombo|Kelani-Peliyagoda Seaplane Base|LK|1|||VCCC:15
|KFM|Kirby Lake||CA|1|||CYBF:117
|KGN|Kasongo-Lunda||CD|1|||FNNG:220
|KGR|Ghan|Kulgera|AU|1|||YBAS:235
|KGZ|Glacier Creek||US|1|||KMYK:21
|KHO|Khoka Moya||ZA|1|||FASZ:44
|KHX|Kihihi|Savannah Airstrip|UG|3
|KIB|Ivanof Bay|Ivanof Bay Seaplane Base|US|1|||PAPE:20
|KIF|Kingfisher Lake||CA|2
|KIG|Koingnaas||ZA|1|||FYOG:196
|KIL|Kilwa||CD|1|||FZQA:270
|KIO|Kili Island|Kili|MH|2
|KKB|Kitoi Bay|Kitoi Bay Seaplane Base|US|2
|KKK|Kalakaket Creek|Kalakaket Creek AS|US|1|||PAGA:36
|KKL|Karluk Lake|Karluk Lake Seaplane Base|US|1|||PALB:19
|KKT|Kentland|Kentland Municipal|US|1|||KLAF:56
|KKU|Ekuk||US|1|||PFCL:3
|KLL|Levelock||US|1|||PANW:46
|KMY|Moser Bay|Moser Bay Seaplane Base|US|2
|KOD|Kotabangun-Borneo Island|Kotabangun|ID|1|||WALS:75
|KOY|Olga Bay|Olga Bay Seaplane Base|US|2
|KOZ|Ouzinkie||US|2
|KPB|Point Baker|Point Baker Seaplane Base|US|2
|KPL|Kapal||PG|1|||AYBM:66
|KPR|Port Williams|Port Williams Seaplane Base|US|2
|KPT|Jackpot|Jackpot Airport/Hayden Field|US|1|||KTWF:58
|KPY|Port Bailey|Port Bailey Seaplane Base|US|2
|KRV|Kimwarer|Kerio Valley|KE|1|||HKEL:48
|KSG|Kisenden|Kisengam Airport [CLOSED]|PG|1|||AYNZ:23
|KTB|Thorne Bay|Thorne Bay Seaplane Base|US|2
|KTC|Katiola||CI|1|||DIBK:44
|KTH|Tikchik|Tikchik Lodge Seaplane Base|US|1|||PAJZ:73
|KUP|Kupiano||PG|1|||AYPY:130
|KVE|Kitava Island|Kitava|PG|1|||AYKA:30
|KVU|Korolevu|Korolevu Seaplane Base|FJ|1|||NFFN:59
|KWD|Kavadja||CF|1
|KWP|West Point|West Point Village Seaplane Base|US|2
|KXA|Kasaan|Kasaan Seaplane Base|US|2
|KYO|Tampa|Tampa North Aero Park|US|1|||KTPA:31
|KZB|Zachar Bay|Zachar Bay Seaplane Base|US|2
|LAC|Pulau Layang-Layang|Layang-Layang|MY|1|Pulau Layang-Layang (Swallow Reef)||WBKL:278
|LBH|Sydney|Palm Beach Seaplane Base|AU|2
|LBK|Liboi||KE|1|||HKWJ:177
|LBM|Luabo||MZ|1|||FQQL:102
|LBN|Akorian|Lake Baringo|KE|1|Kampi Ya Samaki||HKEL:89
|LBP|Long Banga||MY|2
|LCP|Loncopue||AR|1|||SCPC:174
|LCS|Dehong|Longchuan Guangsong|CN|1|Dehong (Longchuan)||ZPMS:65
|LCT|Shijiazhuang|Shijiazhuang Luancheng|CN|1|||ZBSJ:42
|LDW|Lansdowne Station|Lansdowne|AU|1|||YFTZ:140
|LEO|Lekoni||GA|1|||FOON:95
|LEP|Leopoldina||BR|1|||SBZM:46
|LFH|Lanping Bai|Lanping Fenghua General|CN|1|||ZPLJ:70
|LGE|Lake Gregory|Mulan|AU|1
|LIK|Likiep Island|Likiep|MH|2
|LIV|Livengood|Livengood Camp|US|1|||MNT:49
|LIZ|Limestone|Loring|US|1|||KPQI:31
|LKC|Lekana||CG|1|||FOON:149
|LKE|Seattle|Kenmore Air Harbor Seaplane Base|US|2
|LKR|Las Khorey||SO|1|||HCMF:102
|LLH|La Lima|La Lima - Reginaldo Hammer|HN|1|||MHLM:3
|LLL|Lissadell Station|Lissadell|AU|1|||YPKU:99
|LMD|Los Menucos||AR|1|||SAZN:208
|LML|Lae Island||MH|1|||UJE:55
|LMX|Micay|Lopez de Micay|CO|1|||SKGP:79
|LMZ|Palma||MZ|1|||HTMT:56
|LNX|Smolensk|Smolensk North|RU|2|||UMOO:158
|LPS|Lopez|Lopez Island|US|2
|LRQ|Laurie River||CA|1|||CZFG:56
|LSG|Leshan||CN|3|Leshan (Wutongqiao)
|LTF|Leitre||PG|1|||AYVN:39
|LTW|California|St. Mary's County Regional|US|1|||KDCA:73
|LVD|Lime Village||US|1|||SRV:77
|LWA|Lebak|Lebak Rural|PH|1|||RPMC:57
|MAP|Mamai||PG|1|||AYGN:89
|MAV|Maloelap Island||MH|1|||AUL:62
|MBM|Mkambati||ZA|1|||FAMG:58
|MDJ|Madras|Madras Municipal|US|1|||KRDM:46
|MDV|Médouneu||GQ|1|Médouneu, Gabon||FGMY:80
|MEF|Melfi||TD|1
|MFB|Monfort||CO|1|||SKMU:87
|MFH|Mesquite||US|2|||KSGU:54
|MGI|Matagorda Island|National Wildlife Refuge|US|1|||KVCT:74
|MGP|Manga Mission|Manga|PG|1|||AYTK:74
|MHF|Morichal||CO|1|||SKMU:65
|MHN|Mullen|Hooker County|US|1|||KLBF:107
|MHS|Dunsmuir|Dunsmuir Muni-Mott|US|1|||KRDD:84
|MIF|Monahans|Roy Hurd Memorial|US|1|||KMAF:78
|MIJ|Mili Island||MH|2
|MIX|Mirití-Paraná|Miriti Parana|CO|1|||SKLP:163
|MIZ|Mainoru|Mainoru Airstrip|AU|1|||YRNG:208
|MJB|Mejit Atoll||MH|1|||WTE:115
|MJE|Majkin||MH|2
|MJJ|Moki||PG|1|||AYGA:44
|MJS|Maganja|Maganja da Costa|MZ|1|||FQQL:90
|MLK|Malta||US|1|||KGGW:98
|MMN|Stow|Minute Man Air Field|US|1|||KORH:36
|MND|Medina||CO|1|||SKVV:46
|MNP|Hermit Islands|Maron Island|PG|1|||AYWK:271
|MNT|Minto|Minto Al Wright|US|2
|MOS|Elim|Moses Point|US|1|||PFEL:13
|MOY|Monterrey||CO|1|||SKYP:73
|MPB|Miami|Miami Seaplane Base|US|1|||KMIA:11
|MPI|Mamitupu||PA|1|||MPRA:131
|MQR|Mosquera||CO|1|||SKGP:49
|MQV|Sayada|Mostaganem|DZ|1|||DAOO:76
|MRT|Moroak||AU|1
|MSB|Saint Martin|Marigot Seaplane Base|MF|1|||TNCM:4
|MSI|Masalembo Island|Masalembo|ID|1|||WAOO:241
|MTG|Vila Bela Da Santíssima Trindade||BR|1|||SBVH:256
|MTU|Montepuez||MZ|1|||FQPB:160
|MTX|Fairbanks|Metro Field|US|1|||PAFA:5
|MUM|Muli||MV|1|||VRNT:91
|MVM|Kayenta||US|1|||KPGA:111
|MWR|Motswari Private Game Reserve|Motswari|ZA|1|||FAPH:37
|MWU|Mussau Island|Mussau|PG|1|||AYKV:176
|MXC|Monticello||US|1|||KCEZ:94
|MYH|Marble Canyon||US|1|||KPGA:22
|MYS|Moyale||ET|1|||HKWJ:234
|MZD|Santiago de Méndez|Méndez|EC|1|||SEMC:53
|MZN|Minj||PG|1|||AYCH:34
|NAD|Macanal||CO|1|||SKPD:120
|NAF|Banaina-Borneo Island|Banaina|ID|1|||WAGD:30
|NDF|N'dalatando||AO|1|||FNMA:148
|NDK|Namorik Atoll|Namorik|MH|1|||KIO:111
|NIK|Niokolo-Koba National Park|Niokolo-Koba|SN|1|||GAKD:214
|NIN|Ninilchik||US|1|||PAHO:42
|NIR|Beeville|Chase Field Industrial|US|1|||KCRP:68
|NKA|Ntoum|Nkan Airstrip|GA|1|||FOOL:39
|NKI|Tuxekan Island|Naukati Bay Seaplane Base|US|2
|NKO|Ankokoambo||MG|1|||FMNQ:17
|NLE|Niles|Jerry Tyler Memorial|US|1|||KSBN:16
|NLN|Kneeland||US|1|||KACV:33
|NML|Fort McMurray|Fort McMurray / Mildred Lake|CA|1|||CYMM:50
|NND|Nangade||MZ|1|||HTMT:99
|NNK|Naknek||US|1|||PFWS:4
|NOI|Krymsk|Krymsk Air Base|RU|2|||URKG:42
|NPG|Nipa||PG|1|||AYMN:23
|NPH|Nephi|J. Randy McKnight Nephi Municipal|US|1|||KPVU:55
|NPU|San Pedro de Urabá|San Pedro|CO|1|||SKLC:65
|NRI|Afton|Grand Lake Regional|US|1|||KXNA:60
|NRY|Newry||AU|1|||YPKU:66
|NSB|Bimini|Bimini North Seaplane Base|BS|2
|NTC|Santa Carolina|Paradise Island|MZ|1|||FQVL:45
|NTJ|Manti|Manti-Ephraim|US|1|||KPVU:99
|NUA|Nuwara Eliya|Nuwara Eliya Waterdrome|LK|1|Lake Gregory||VCRI:84
|NUF|Hatton|Castlereagh Lake Seaplane Base|LK|1|||VCCC:77
|NUH|Nunchia||CO|1|||SKYP:42
|NVN|Beckwourth|Nervino|US|1|||KTRK:58
|NWH|Newport|Parlin Field|US|1|||KLEB:28
|NYS|New York|New York Skyports Inc Seaplane Base|US|2
|OCA|Key Largo|Ocean Reef Club|US|2|||KMIA:52
|ODC|Oakdale||US|1|||KSCK:41
|ODM|Accident|Garrett County|US|1|||KMGW:50
|OGM|Ustupu|Ogobsucum|PA|1|||MPRA:134
|OKG|Okoyo||CG|1|||FOON:183
|OLG|Mara|Olare Orok|KE|1|||HKMS:28
|OLH|Old Harbor||US|2
|OMY|Tbeng Meanchey|Preah Vinhear|KH|1|||VDSA:92
|ONH|Oneonta|Albert S Nader Regional|US|1|||KBGM:83
|ORI|Port Lions||US|2
|OSB|Osage Beach|Grand Glaize Osage Beach|US|1|||KTBN:63
|OTN|Oaktown|Ed-Air|US|1|||KEVV:91
|OTO|Wulan|Otog Banner Wulan|CN|1|||ZBUH:133
|OTQ|Otog Front Banner|Otog Front Banner Oljoq|CN|1|||ZLIC:89
|OTS|Anacortes||US|2
|OTT|Cotriguaçu|Andre Maggi|BR|1|||SBAT:271
|OUM|Oum Hadjer||TD|1
|OXO|Orientos||AU|1|||YTGM:224
|PAW|Pambwa Station|Pambwa Airstrip|PG|1|||AYMS:151
|PBT|Puerto Leda|Aeródromo de Puerto Leda|PY|1|||SBDB:158
|PCC|Puerto Rico||CO|1|||SKSV:52
|PCT|Princeton/Rocky Hill|Princeton|US|1|||KTTN:19
|PCU|Poplarville|Poplarville Pearl River County|US|1|||KGPT:59
|PCV|Mulegé|Punta Chivato|MX|1|||SRL:14
|PDB|Pedro Bay||US|2
|PDR|Presidente Dutra|Presidente José Sarney|BR|1|||SBTE:186
|PEB|Pebane||MZ|1|||FQQL:153
|PEC|Pelican|Pelican Seaplane Base|US|2
|PEP|Peppimenarti||AU|1|||YPDN:210
|PFA|Harbin|Harbin Pingfang|CN|1|||ZYHB:32
|PFM|Primrose||CA|1|||CYBF:123
|PGC|Petersburg|Grant County|US|1|||KSHD:84
|PGE||Yegepa|PG|1|||AYNZ:89
|PGM|Port Graham||US|2
|PGS|Peach Springs|Grand Canyon Caverns|US|1|||KGCN:110
|PLA|Planadas||CO|1|||SKNV:47
|PLY|Plymouth|Plymouth Municipal|US|1|||KSBN:38
|PNJ|Yantai|Penglai Shahekou|CN|1|||ZSYT:22
|PNU|Panguitch|Panguitch Municipal|US|1|||KCDC:64
|PPV|Port Protection|Port Protection Seaplane Base|US|2
|PPX|Nepesi|Param|PG|1|||AYGN:100
|PQS|Pilot Station||US|2
|PRE|Pore||CO|1|||SKYP:64
|PRW|Prentice||US|1|||KRHI:64
|PRZ|Prineville||US|1|||KRDM:20
|PSQ|Essington|Philadelphia Seaplane Base|US|1|||KPHL:5
|PTC|Port Alice|Port Alice Seaplane Base|US|1|||PAKW:41
|PUA|Puas Mission|Puas|PG|1|||AYKV:67
|PUL|Poulsbo|Port of Poulsbo Marina Moorage Seaplane Base|US|1|||KPAE:33
|PXL|Polacca||US|1|||KFLG:134
|PYL|Perry Island|Perry Island Seaplane Base|US|1|||PFCB:68
|PYN|Payán||CO|1|||SKCO:65
|PYS|Paradise|Paradise Skypark|US|1|||KRDD:106
|PYV|Yaviza||PA|1|||MPPI:83
|QRF|Bragado||AR|1|||SAEZ:181
|RAA|Rakanda||PG|1|||AYTK:16
|RAD|Tortola|Road Town Seaplane Base|VG|1|||TUPJ:9
|RAW|Arawa||PG|1|||AYIQ:20
|RBF|Big Bear|Big Bear City|US|1|||KSBD:40
|RBK|Murrieta|French Valley|US|1|||KCRQ:52
|RBZ|Shahrisabz|Shahrisabz Southwest|UZ|1|||UZSS:77
|RCE|Roche Harbor||US|2
|RDA|Rockhampton Downs||AU|1|||YTNK:131
|RDL|El Hassana|Bardawil|EG|2|||HEAR:96
|RDV|Red Devil||US|2
|REE|Lubbock|Reese Airpark|US|1|||KLBB:21
|REQ|Chagai|Reko Diq|PK|1|||OIZH:134
|RFK|Rolling Fork|Rollang Field|US|1|||KGLH:60
|RGR|Ranger|Ranger Municipal|US|1|||KMWL:69
|RJI|Rajouri||IN|1|||VISR:80
|RKY|Rokeby||AU|1|||YCOE:53
|RLA|Rolla|Rolla Downtown|US|1|||KTBN:36
|RLP|Rosella Plains||AU|1|||YBCS:220
|RLR|Isalo|Relais de la Reine|MG|1|||FMST:183
|RNP|Rongelap Island||MH|2
|ROF|Montague|Montague-Yreka Rohrer Field|US|1|||KMFR:77
|ROL|Roosevelt|Roosevelt Municipal|US|1|||KVEL:49
|RPV|Roper Valley||AU|1|||YMHU:276
|RRM|Marromeu||MZ|1|||FQQL:110
|RSJ|Rosario|Rosario Seaplane Base|US|2
|RSX|Rouses Point|Rouses Point Seaplane Base|US|1|||KPBG:39
|RTL|Okoboji|Spirit Lake Municipal|US|1|||KFOD:121
|RUU|Kawbenaberi|Ruti|PG|1|||AYWD:52
|RVC|River Cess|River Cess Airport and Heliport|LR|1|||GLRB:121
|RVR|Green River|Green River Municipal|US|1|||KCNY:47
|RXA|Ar Rawdah||YE|1|||OYRN:227
|SAM|Salamo||PG|1|||AYGN:87
|SBO|Salina|Salina Gunnison|US|1|||KPVU:133
|SCA|Santa Catalina||CO|1|||SKMR:53
|SEW|Siwa Oasis|Siwa Oasis North|EG|1|||HEMM:275
|SFK|Soure||BR|1|||SBBE:76
|SFV|Santa Fé do Sul||BR|1|||SBTG:94
|SGM|Mulegé|San Ignacio|MX|1|||SRL:86
|SGW|Saginaw Bay|Saginaw Seaplane Base|US|1|||PAPG:74
|SIC|Las Perlas|San José Island|PA|1|||MPRA:41
|SJF|Cruz Bay|Cruz Bay Seaplane Base|VI|1|||TIST:19
|SJH|San Juan Del César||CO|1|||SKVP:45
|SJR|San Juan De Uraba||CO|1|||SKMR:78
|SMP|Stockholm|Stockholm Landing Strip|PG|1|||AYTK:92
|SNQ|San Quintín|San Quintín Military Airstrip|MX|1|||MMML:243
|SOA|Sóc Trăng||VN|1|||VVCT:62
|SOH|Solita||CO|1|||SKSJ:110
|SOL|Solomon|Solomon State Field|US|1|||PAOM:48
|SOR|T2|Al Thaurah|SY|1
|SPB|Charlotte Amalie|Charlotte Amalie Harbor Seaplane Base|VI|2
|SPT|Sipitang||MY|1|||WBGW:30
|SQB|Piedras|Santa Ana|CO|1|||SKIB:12
|SQE|San Luis De Palenque||CO|1|||SKYP:76
|SQF|Solano||CO|1|||SKFL:105
|SQK|Sidi El Barrani||EG|1|||HEMM:129
|SQV|Sequim|Sequim Valley|US|1|||LPS:47
|SRL|Mulegé|Palo Verde|MX|2
|SRM|Sandringham Station|Sandringham|AU|1|||YBIE:50
|SRO|Santana Ramos||CO|1|||SKSV:54
|SRV|Stony River|Stony River 2|US|2
|SSB|Christiansted|Christiansted Harbor Seaplane Base|VI|2
|SSK|Sturt Creek||AU|1|||YHOO:275
|SSQ|La Sarre||CA|1|||CYUY:83
|SSS|Siassi||PG|1|||AYNZ:161
|SSW|Friday Harbor|Stuart Island Airpark|US|2
|STU|Santa Cruz||BZ|1|||MZCZ:13
|SUO|Sunriver||US|1|||KRDM:48
|SUR|Summer Beaver||CA|2
|SVV|San Salvador de Paul||VE|1|||SVCN:127
|SWB|Shaw River||AU|1|||YCHK:98
|SXP|Nunam Iqua||US|2
|SXY|Sidney|Sidney Municipal|US|1|||KBGM:48
|SYB|Seal Bay|Seal Bay Seaplane Base|US|2
|SYF|Gabriola Island|Silva Bay Seaplane Base|CA|2
|TBC|Tuba City||US|1|||KGCN:70
|TBV|Tabal Island|Tabal Airstrip|MH|1|||AUL:18
|TEH|Tetlin||US|1|||PFTO:32
|TGB|Rizal|Tagbita Airstrip|PH|1|||RPVP:192
|TGS|Chokwé||MZ|1|||FQXA:90
|THW|Trincomalee|Trincomalee Harbor Waterdrome|LK|1|||VCCT:5
|TIC|Arno Atoll|Tinak|MH|1|||PKMJ:71
|TIL|Cheadle||CA|1|||CYYC:28
|TJC|Ticantiquí||PA|1|||MPTO:105
|TKE|Tenakee Springs|Tenakee Seaplane Base|US|2
|TKI|Tokeen|Tokeen Seaplane Base|US|1|||PAKW:43
|TLF|Telida||US|1|||PAFS:69
|TNS|Tungsten||CA|1|Cantung||CYQH:207
|TOK|Torokina||PG|1|||AYIQ:74
|TOV|Tortola|Tortola West End Seaplane Base|VG|1|||TUPJ:4
|TPT|Tapeta||LR|1|||GLRB:167
|TRH|Trona||US|1|||KBFL:162
|TSD|Tshipise||ZA|1|||FAPP:155
|TSG|Tanacross||US|1|||PFTO:20
|TSI|Tsile Tsile||PG|1|||AYNZ:52
|TTW|Tissamaharama|Tissa Tank Waterdrome|LK|2
|TUJ|Tum||ET|1|||HAMT:78
|TUW|Coetupo|Tubualá|PA|1|||MPRA:149
|TUX|Tumbler Ridge||CA|1|||CYQU:132
|TWA|Twin Hills||US|2
|TWD|Port Townsend|Jefferson County|US|1|||KPAE:43
|TWE|Taylor||US|1|||PFKT:86
|TWH|Two Harbors|Two Harbors Amphibious Terminal|US|1|||KLGB:54
|TWP|Torwood||AU|1|||YBCS:219
|TYA|Tula|Klokovo Air Base|RU|1|||UUDD:132
|TYC|Taiyuan|Taiyuan Yaocheng|CN|1|||ZBYN:33
|TYE|Tyonek||US|1|||PAEN:57
|TZM|Tizimin|Aeródromo de Cupul|MX|1|||MMTL:122
|TZO|Ankisatra|Tsimiroro|MG|1|||FMMU:147
|UAC|San Luis Río Colorado||MX|1|||MMML:47
|UCC|Mercury|Yucca Airstrip|US|1|||KLAS:122
|UCE|Eunice||US|1|||KLFT:51
|UGB|Pilot Point|Ugashik Bay|US|1|||PAPN:20
|UGI|San Juan|San Juan /Uganik/ Seaplane Base|US|2
|UGS|Ugashik||US|1|||PAPN:12
|UIT|Jabor Jaluit Atoll|Jaluit|MH|2
|UJE|Ujae Atoll||MH|2
|UKN|Waukon|Waukon Municipal|US|1|||KLSE:69
|ULE|Sule||PG|1|||AYHK:113
|ULS|Mulatos||CO|1|||SKLC:92
|UMB|Kalumbila||ZM|2|||FLSW:100
|UNC|Unguía||CO|1|||SKLC:48
|USC|Union|Union County, Troy Shelton Field|US|1|||KGSP:58
|UTK|Utirik Island|Utirik|MH|2
|UUU|Manumu||PG|1|||AYPY:56
|UWA|Ware||US|1|||KORH:28
|UZM|Hope Bay||CA|1|||CYCB:122
|VAB|Yavarate||CO|1|||SKMU:135
|VCF|Valcheta||AR|1|||SAVN:94
|VEX|Tioga|Tioga Municipal|US|1|||KXWA:64
|VGS|General Villegas||AR|1|||SAZR:211
|VIV|Vivigani||PG|1|||AYGN:112
|VJQ|Gurue||MZ|1|||FWCL:217
|VLE|Grand Canyon|Valle|US|1|||KGCN:34
|VPG|Kikambala|Vipingo Estate|KE|1|||HKMO:34
|VRS|Versailles|Roy Otten Memorial|US|1|||KCOU:72
|VUU|Liwonde National Park|Mvuu Camp|MW|1|||FWCL:100
|WAD|Andriamena||MG|1|||FMNT:98
|WBB|Stebbins||US|2
|WBK|West Branch|West Branch Community|US|1|||KMBS:80
|WDA|Ain District|Al Ain Airport Ain District, Shabwah Governorate, Yemen|YE|1|||OYSN:158
|WDN|Eastsound|Waldron Airstrip|US|2
|WED|Wedau||PG|1|||AYGN:37
|WFB|Ketchikan|Ketchikan Harbor Seaplane Base|US|2
|WHD|Hyder|Hyder Seaplane Base|US|2
|WHL|Welshpool||AU|1|||YMMB:141
|WHN|Wuhan|Wuhan Hannan Municipal|CN|2|Wuhan (Hannan)||ZHHH:60
|WIB|Vernon|Wilbarger County|US|1|||KLAW:88
|WJA|Woja||MH|1|||JEJ:47
|WKK|Aleknagik|Aleknagik / New|US|3
|WLR|Loring|Loring Seaplane Base|US|1|||PAKT:28
|WMK|Meyers Chuck|Meyers Chuck Seaplane Base|US|1|||PAKW:54
|WNN|Wunnumin Lake||CA|2
|WPL|Powell River|Powell Lake Seaplane Base|CA|2
|WPO|Paonia|North Fork Valley|US|1|||KMTJ:42
|WRH|Orku|Wuerhe|CN|1|||ZWKM:82
|WSM|Wiseman||US|1|||PABT:82
|WSX|West Sound|Westsound/WSX Seaplane Base|US|2
|WTE|Wotje||MH|2
|WTL|Tuntutuliak||US|2
|WTO|Wotho Island||MH|2
|WTR|Whiteriver||US|1|||KSOW:51
|WWP|Whale Pass|Whale Pass Seaplane Float Harbor Facility|US|2
|WYB|Yes Bay|Yes Bay Lodge Seaplane Base|US|1|||PAKT:63
|WZQ|Urad Middle Banner||CN|1|||ZBYZ:89
|XAL|Álamos||MX|1|||MMCN:96
|XBB|Blubber Bay|Blubber Bay Seaplane Base|CA|1|||CYPW:10
|XBE|Bearskin Lake||CA|2
|XBR|Brockville|Brockville - Thousand Islands Regional Tackaberry|CA|1|||KOGS:23
|XCL|Cluff Lake||CA|1|||CYPY:102
|XES|Lake Geneva|Grand Geneva Resort|US|1|||KMKE:55
|XMA|Maramag||PH|1|||RPMD:97
|XMP|Macmillan Pass||CA|1|||CYVQ:286
|XQU|Qualicum Beach||CA|3
|XRQ|New Barag Right Banner|New Barag Right Banner Baogede|CN|1|||ZBMZ:114
|YAA|Anahim Lake||CA|3
|YAJ|Saturna Island|Lyall Harbour Seaplane Base|CA|2
|YAQ|Maple Bay|Maple Bay Seaplane Base|CA|2
|YAU|Kattiniq|Donaldson|CA|1|||CYKG:74
|YAV|Miners Bay|Mayne Island Seaplane Base|CA|2
|YAX|Angling Lake|Wapekeka|CA|2
|YBF|Bamfield|Bamfield Seaplane Base|CA|2
|YBH|Bull Harbour|Bull Harbour Water|CA|1|||CYZT:48
|YBI|Black Tickle||CA|2
|YBJ|Baie-Johan-Beetz|Baie-Johan-Beetz Water|CA|1|||CYGV:57
|YBO|Bob Quinn Lake||CA|1|||PAWG:140
|YBQ|Thetis Island|Telegraph Harbour Seaplane Base|CA|2
|YBS|Opapimiskan Lake||CA|1|||KIF:57
|YBW|Bedwell Harbour|Bedwell Harbour Seaplane Base|CA|2
|YCA|Courtenay|Courtenay Airpark|CA|1|||CYQQ:8
|YCF|Cortes Bay|Cortes Bay Water|CA|1|||CYBL:27
|YDC|Drayton Valley|Drayton Valley Industrial|CA|1|||CYEG:92
|YDJ|Hatchet Lake||CA|1|||CYNL:53
|YDU|Kasba Lake||CA|1|||CZWH:195
|YDW|Obre Lake|North of Sixty|CA|1|||CYSF:192
|YEB|Echo Bay|Bar River|CA|1|||CYAM:32
|YEH|Yinchuan|Yinchuan Yueyahu|CN|1|||ZLIC:32
|YFG|Fontanges||CA|1|||CYKL:282
|YFL|Fort Reliance|Fort Reliance Seaplane Base|CA|1|||CYLK:84
|YFX|St. Lewis||CA|2|Fox Harbour
|YGA|Chongqing|Yongchuan Da'an General|CN|1|||ZULZ:64
|YGE|Gorge Harbour|Gorge Harbour Seaplane Base|CA|1|||CYBL:24
|YGG|Salt Spring Island|Ganges Seaplane Base|CA|2
|YHA|Port Hope Simpson||CA|2
|YHC|Hecate Island|Hakai Passage Water|CA|1|||CBBC:58
|YHG|Charlottetown||CA|2
|YHH|Campbell River|Campbell River Seaplane Base|CA|2
|YHS|Sechelt|Sechelt-Gibsons|CA|1|||CYCD:46
|YIG|Stuart Island|Big Bay Seaplane Base|CA|2
|YJP|Hinton|Jasper-Hinton|CA|1|||CYZU:159
|YKE|Knee Lake||CA|1|||CYOH:31
|YKK|Kitkatla|Kitkatla Seaplane Base|CA|1|||CYPR:54
|YKT|Klemtu|Klemtu Water|CA|1|||CBBC:53
|YKU|Chisasibi||CA|2
|YLE|Whatì||CA|2
|YLP|Longue-Pointe-de-Mingan|Mingan|CA|1|||CYGV:38
|YLS|Lebel-sur-Quévillon|Lebel-sur-Quevillon|CA|1|||CYVO:122
|YMB|Merritt||CA|1|||CYKA:68
|YMF|Galiano Island|Montague Harbour Seaplane Base|CA|2
|YMP|Port McNeill||CA|2
|YMU|Mansons Landing|Mansons Landing Seaplane Base|CA|1|||CYBL:25
|YMV|Mary River||CA|1|||CYIO:159
|YNO|North Spirit Lake||CA|2
|YNP|Natuashish||CA|2
|YNX|Snap Lake Mine|Snap Lake|CA|1|||CYLK:131
|YOE|Donnelly||CA|1|||CYPE:62
|YOI|Éléonore Mine|Opinaca|CA|1|||CYHH:67
|YPB|Port Alberni|Alberni Valley Regional|CA|1|||XQU:39
|YPD|Parry Sound|Parry Sound Area Municipal|CA|1|||CYQA:52
|YPT|Sunshine Coast|Pender Harbour Seaplane Base|CA|1|||CYPW:41
|YQJ|Quadra Island|April Point Seaplane Base|CA|1|||CYBL:13
|YRC|Desolation Sound|Refuge Cove Seaplane Base|CA|1|||CYBL:36
|YRD|Kimsquit Valley|Dean River|CA|1|||CYBD:55
|YRG|Rigolet||CA|2
|YRN|Rivers Inlet|Rivers Inlet Seaplane Base|CA|1|||CBBC:83
|YRR|Big Bay|Stuart Island Airstrip|CA|1|||CYBL:52
|YSA|Sable Island||CA|1|||CYQY:248
|YSI|Frying Pan Island|Parry Sound/Frying Pan Island-Sans Souci Seaplane Base|CA|1|||CYQA:69
|YSO|Postville||CA|2
|YSX|Bella Bella|Bella Bella/Shearwater Seaplane Base|CA|1|||CBBC:6
|YTB|Hartley Bay|Hartley Bay Seaplane Base|CA|1|||CYPR:124
|YTG|Sullivan Bay|Sullivan Bay Seaplane Base|CA|2
|YTP|Tofino|Tofino Harbour Seaplane Base|CA|2
|YTT|Tisdale||CA|1|||CYPA:115
|YWM|Williams Harbour||CA|2
|YWQ|Chutes-des-Passes|Chute-Des-Passes/Lac Margane Seaplane Base|CA|1|||CYRJ:178
|YWR|White River|White River Seaplane Base|CA|1|||CYQN:203
|YWS|Whistler|Whistler/Green Lake Water|CA|2
|YZA|Cache Creek|Cache Creek-Ashcroft Regional|CA|2|||CYKA:62
|YZZ|Trail|Trail Regional|CA|2
|ZFW|Fairview||CA|1|||CYPE:63
|ZGN|Zhongshan|Zhongshan Ferry Port|CN|1|||ZGSZ:47
|ZGS|Le Golfe-du-Saint-Laurent|La Romaine|CA|2
|ZKG|Côte-Nord-du-Golfe-du-Saint-Laurent|Kégashka|CA|1|||CYNA:37
|ZKL|Zigong|Zigong Fengming|CN|1|Zigong (Gongjing)||ZUYB:58
|ZLT|La Tabatière||CA|2
|ZMD|Sena Madureira||BR|1|||SBRB:115
|ZNA|Nanaimo|Nanaimo Harbour Water|CA|2
|ZNC|Nyac||US|1|||PALT:51
|ZNU|Namu|Namu Water|CA|1|||CBBC:41
|ZOF|Ocean Falls|Ocean Falls Seaplane Base|CA|1|||CBBC:36
|ZQS|Queen Charlotte|Queen Charlotte City Seaplane Base|CA|1|||CYZP:17
|ZTB|Tête-à-la-Baleine||CA|2
|ZTS|Tahsis|Tahsis Seaplane Base|CA|1|||CYAL:76
|ZVG|Springvale||AU|1|||YFTZ:227
`;
