const t={btnStart:document.querySelector(".btn-start"),contStart:document.querySelector(".cont-start"),btnSocNet:document.querySelector(".btn__socNet"),btnLevelFirstPicture:"",btnMovieFirst:"",conSocNet:"",btnSocNetBack:""};function e(e){t.contStart.insertAdjacentHTML("beforeend","<form class='search-form'id='search-form'>\n        <input class='form__input' type='query' autocomplete='off' placeholder='What do you want...?'/>\n        <button type='submit'>Let's find out</button>\n        </form>"),t.btnLevelFirstPicture.classList.replace("btn__first","btn-hidden"),t.btnMovieFirst.classList.replace("btn-movie__first","btn-hidden")}function n(e){t.conSocNet.classList.replace("soc-network","soc-network__hidden"),t.btnStart.classList.replace("btn-hidden","btn-start"),t.btnSocNet.classList.replace("btn-hidden","btn__socNet"),t.btnSocNetBack.classList.replace("btn-SocNet__back","btn-SocNet__backHidden")}console.log(t.conSocNet),t.btnStart.textContent="Let`s go Guys!",t.btnSocNet.textContent="Wanna discover my Soc Net?",t.btnStart.addEventListener("click",(function(){t.contStart.insertAdjacentHTML("beforeend",'<div class="level-first">\n  <button id="btnLvlFirstPct" class="btn__first" type=\'submit\'>What picture are you looking for?</button>\n         <button class="btn-movie__first" type=\'submit\'>Let\'s watch some movie!</button>\n         </div>'),t.btnStart.classList.replace("btn-start","btn-hidden"),t.btnLevelFirstPicture=document.querySelector("#btnLvlFirstPct"),t.btnMovieFirst=document.querySelector(".btn-movie__first"),t.btnLevelFirstPicture.addEventListener("click",e)})),t.btnSocNet.addEventListener("click",(function(e){t.conSocNet=document.querySelector(".soc-network__hidden"),t.btnSocNetBack=document.querySelector(".btn-SocNet__backHidden"),t.conSocNet.classList.replace("soc-network__hidden","soc-network"),t.btnStart.classList.replace("btn-start","btn-hidden"),t.btnSocNet.classList.replace("btn__socNet","btn-hidden"),t.btnSocNetBack.classList.replace("btn-SocNet__backHidden","btn-SocNet__back"),t.btnSocNetBack.addEventListener("click",n)}));
//# sourceMappingURL=index.bf5ed53e.js.map
