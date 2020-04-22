# chrome_extention_send_url

<h3> What it do? </h3>
<ul>
  <li>When user click on extention icon, new popup UI is appeared with Send Url button</li>
  <li>When the click on that button then current tab url will be send to the url defined into app.js file's url</li>
</ul>

To create chrome extention you must need to write <b>manifest.json</b>
<h3> What is in manifest.json ? </h3>

<ul>
  <li><b>name</b> : name of the extention</li>
 <li><b>version</b> : version of the extention</li>
   <li><b>manifest_version</b> : manifest version provided by chrome that you are using</li>
   <li><b>background</b> : background processing you need to use</li>
   <li>
     <b>browser_action</b> : the process you want to do with that extention. like <b>default_icon</b> the extention icon, 
     <b>default_popup</b> the UI you want make for that extention which is html file.
  </li>
   <li>We san easily include our own css, images, js, etc externally in the html file define in default_popup like i have inculed app.js in popup.html</li>
</ul>
