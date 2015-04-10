/*
 * In my app, I have custom font, images, and icons.
 * Please download them so the contents will show up properly!
 * Please download the following:
 *   - the folder "fonts", under "Resources"
 *   - the folder "images", under "Resources"
 *   - two image files "briefcase.png" and "user.png", under "Resources"
 * I have also included screenshots of what the app should look like, 
 * under "screenshots", just in case of... whatever? :P
 * 
 * Social media is not included, so no need for any configuration. 
 * Thanks for reviewing my app!
 * 
 * I use iPhone 5s emulator. Results may look different in other devices' emulator.
 */

Titanium.UI.setBackgroundColor('#000');
// Create tab group 
var tabGroup = Titanium.UI.createTabGroup({
	activeTabIconTint: '#ffffff', tabsBackgroundColor:'#282828'});

// Navigation Setup
var win1 = Titanium.UI.createWindow({
	title:'Business Card', backgroundColor:'#ffffff'});
var tab1 = Titanium.UI.createTab({  
    icon:'user.png', title:'Profile', 
    window:win1 });

var view1 = Ti.UI.createView({
	backgroundImage: '/images/blur.jpg',
	width:'100%', height:'100%'});
win1.add(view1);


var win2 = Titanium.UI.createWindow({  
    title:'Resume', backgroundColor:'#fff'});
var tab2 = Titanium.UI.createTab({  
    icon:'briefcase.png', title:'Resume',
    window:win2 });
    
var view2 = Ti.UI.createView({
	backgroundImage: '/images/blur.jpg',
	width:'100%', height:'100%'});
win2.add(view2);

// Content Setup - Landing Page - Profile
var customFont = 'Mathilde'; 

var label1 = Titanium.UI.createLabel({
	color:'#FFFFFF', text:'Darien Huang',
	font:{fontSize:86,fontFamily: customFont},
	textAlign:'center', width:'auto', top:'35%'
});
var text1 = Titanium.UI.createLabel({
	color:'#FFFFFF',
	text:'University of Idaho\nInformation System\nGraduating May 2015',
	font:{fontSize:40,fontFamily: customFont},
	textAlign:'center', width:'auto', top:'50%'
});

// All images used in the app
var profileImg = Ti.UI.createImageView({
  	image:'/images/doge.png', top:'5%', width:'150'});
var tblImg = Ti.UI.createImageView({
  	image:'/images/tumblr.png', top:'78%', left:'15%'});
var fbImg = Ti.UI.createImageView({
  	image:'/images/facebook.png', top:tblImg.top, left:'34%'}); 	
var linkImg = Ti.UI.createImageView({
   	image:'/images/linkedin.png', top:tblImg.top, right:'34%'});
var gitImg = Ti.UI.createImageView({
  	image:'/images/github.png', top:tblImg.top, right:'15%'});
var phoneImg = Ti.UI.createImageView({
  	image:'/images/skype.png', top:'86%', left: '25%'});
var emailImg = Ti.UI.createImageView({
  	image:'/images/email.png', top:'86%', right: '25%'});  	

view1.add(profileImg);
view1.add(tblImg);
view1.add(fbImg);
view1.add(linkImg);
view1.add(gitImg);
view1.add(phoneImg);
view1.add(emailImg);

view1.add(label1);
view1.add(text1);

// Content Setup - Tab2 - Resume
var label2 = Titanium.UI.createLabel({
	color:'FFFFFF', font:{fontSize:20,fontFamily:'Ariel'},
	text:'Work Experience', textAlign:'left', top:'10%'
});
var text2 = Titanium.UI.createLabel({
	color:label2.color, font:{fontSize:16, fontFamily: 'Helvetica Neue'},
	text:'Old Navy\nSellebrity, Techspert, Fitologist\nMay 2014 to Current\nEmployee of the Month Oct 2014',
	textAlign:'left', top:'15%'
});
var label4 = Titanium.UI.createLabel({
	color:label2.color, font:label2.font,
	text:'Honors',
	textAlign:'left', top:'35%'
});
var text4 = Titanium.UI.createLabel({
	color:label2.color, font:text2.font,
	text:'Alpha Iota Mu (2015)\nGamma Beta Phi (2012 to 2013)',
	textAlign:'left', top:'40%'
});
var label3 = Titanium.UI.createLabel({
	color: label2.color, font:label2.font,
	text:'Languages',
	textAlign:'left', top:'50%'
});
var text3 = Titanium.UI.createLabel({
	color:label2.color, font:text2.font,
	text:'Fluent: Mandarin, English\nCompetent: Japanese, German',
	textAlign:'left', top:'55%'
});
var label5 = Titanium.UI.createLabel({
	color: label2.color, font:label2.font,
	text:'Skills',
	textAlign:'left', top:'65%'
});
var text5 = Titanium.UI.createLabel({
	color:label2.color, font:text2.font,
	text:'Social Media\nMicrosoft Office\nMac OS X\nWindows\nJavaScript\nHTML/CSS',
	textAlign:'left', top:'70%'
});

view2.add(label2);
view2.add(label3);
view2.add(label4);
view2.add(label5);
view2.add(text2);
view2.add(text3);
view2.add(text4);
view2.add(text5);


tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();

