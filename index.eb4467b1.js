const t={btnStart:document.querySelector(".btn-start"),contStart:document.querySelector(".cont-start"),btnLevelFirstPicture:""};function e(e){t.contStart.insertAdjacentHTML("beforeend","<form class='search-form'id='search-form'>\n        <input class='form__input' type='query' autocomplete='off' placeholder='What do you want...?'/>\n        <button type='submit'>Let's find out</button>\n        </form>"),console.log(e)}t.btnStart.textContent="Let`s go Guys!",t.btnStart.addEventListener("click",(function(){t.contStart.insertAdjacentHTML("beforeend",'<div class="level-first">\n  <button id="btnLvlFirstPct" class="btn__first" type=\'submit\'>What picture are you looking for?</button>\n         <button type=\'submit\'>Let\'s watch some movie!</button>\n         </div>'),t.btnStart.classList.replace("btn-start","btn-hidden"),t.btnLevelFirstPicture=document.querySelector("#btnLvlFirstPct"),console.log(t.btnLevelFirstPicture),t.btnLevelFirstPicture.addEventListener("click",e)}));
//# sourceMappingURL=index.eb4467b1.js.map
