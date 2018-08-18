/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Spartakingdom NetWorks";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/citizen.ogg"},
	{ogg: "songs/GTA 4 Loading Screen Theme HD.ogg"},
	{youtube: "BJIMJmevTk0"},
	{youtube: "PxnUR6VPOOw"},
	{youtube: "8jjoBC0C8mw"},
	{youtube: "7XwjcR8BWxE"},
	{youtube: "r-89ZmF2ius"},
	{youtube: "Qy11tnmwsSw"},
	{youtube: "t5x-xrh6AeI"},
	{youtube: "qajLZZCzc2A"},
	{youtube: "bXnNzXGJfJ8"},
	{youtube: "SnnWaRlziXE"},
	{youtube: "Y2cCDii53nI"},
	{youtube: "GjVqXOF-vYw"},
	{youtube: "oap_ALCqmWk"},
	{youtube: "MCiNEd5hf0Y"},
	{youtube: "VOwU7MCLads"},
	{youtube: "Jp4Ic2p2ehc"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Thanks for joining us!",
"Did you know we have a website call www.spartakingdom.eu",
"Join our discord invite code: hwuSCgv",
"We are really happy you are here",
"We hope you like our community",
"Enjoy the server"
];

/*Random message order?*/
var l_messagesRandom = false;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;