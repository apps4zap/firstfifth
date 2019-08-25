import sanityClient from '~/sanityClient'

const card = document.querySelector(".card");
const view = document.querySelector(".view");
const close = document.querySelector(".close");
const picture = document.querySelector(".picture");

function expand() {
  card.classList.remove("preview");
  card.classList.add("expanded");
}

view.addEventListener("click", event => {
  expand();
});

picture.addEventListener("click", event => {
  if (card.classList.contains("preview")) {
    expand();
  }
});

close.addEventListener("click", event => {
  card.classList.remove("expanded");
  card.classList.add("preview");
});

// Added a Codepen thumbnail influencer to make the preview more interesting (See: https://codepen.io/demaine/pen/xNvOzq)
if (location.pathname.match(/fullcpgrid/i)) {
  expand();
}


<div class="card preview">
  <div class="details">
    <header class="entry-header">
      <h2>HumbleBee</h2>
    </header>
    <div class="title">Nyal Evers</div>
    <div class="desc">This here is our hero. Should I say heroine.</div>
    <div class="actions">
      <div class="extra">
        <button class="action like">Bio</button>
        <button class="action trade">Music</button>
        <button class="close">Close</button>
      </div>
      <button class="action view">View</button>
    </div>
  </div>
  <div class="picture">
    <svg viewBox="0 0 100 100">
      <path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"></path>
      <path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"></path>
      <path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z"></path>
      <path d="m35.492 24.371c0.42187-0.35156 0.48047-0.98438 0.125-1.4062-0.35156-0.42188-0.98438-0.48438-1.4062-0.125-5.1602 4.3047-16.422 17.078-9.5312 42.562 0.21484 0.79688 0.85547 1.4062 1.6641 1.582 0.15625 0.035156 0.31641 0.050781 0.47266 0.050781 0.62891 0 1.2344-0.27344 1.6445-0.76562 0.82812-0.98828 2.0039-1.5391 2.793-1.8203 0.56641 1.6055 1.4766 3.3594 2.9727 4.9414 2.2852 2.4219 5.4336 3.9453 9.3867 4.5547-3.6055 4.5-3.8047 10.219-3.8086 10.484-0.011719 0.55078 0.42187 1.0078 0.97656 1.0234h0.023438c0.53906 0 0.98437-0.42969 1-0.97266 0-0.054688 0.17187-4.8711 2.9805-8.7773 0.63281 1.2852 1.7266 2.5 3.4141 2.5 1.7109 0 2.7578-1.2695 3.3398-2.6172 2.8867 3.9258 3.0586 8.8359 3.0586 8.8906 0.015625 0.54297 0.46094 0.97266 1 0.97266h0.023438c0.55078-0.015625 0.98828-0.47266 0.97656-1.0234-0.007812-0.26953-0.20703-6.0938-3.9141-10.613 7.0781-1.3086 10.406-5.4219 11.969-8.9766 1.0508 0.98828 2.75 2.1992 4.793 2.1992 0.078126 0 0.15625 0 0.23828-0.003906 0.47266-0.023438 1.5781-0.074219 3.4219-4.4219 1.1172-2.6406 2.1406-6.0117 2.8711-9.4922 4.8281-22.945-4.7852-30.457-9.1445-32.621-12.316-6.1172-22.195-3.6055-28.312-0.42188-0.48828 0.25391-0.67969 0.85938-0.42578 1.3477s0.85938 0.67969 1.3477 0.42578c5.7031-2.9688 14.934-5.3047 26.5 0.4375 7.1875 3.5703 9 11.586 9.2539 17.684 0.49609 11.93-4.2617 23.91-5.7344 25.062h-0.015626c-1.832 0-3.4102-1.5742-4.0352-2.2852 0.28906-0.99609 0.44531-1.8672 0.52734-2.5117 0.62891 0.16797 1.2812 0.27344 1.9727 0.27344 0.55469 0 1-0.44922 1-1 0-0.55078-0.44531-1-1-1-7.3203 0-10.703-13.941-10.734-14.082-0.097656-0.40625-0.4375-0.71094-0.85156-0.76172-0.43359-0.050781-0.82031 0.16406-1.0117 0.53906-1.8984 3.7188-1.4297 6.7539-0.67969 8.668-6.2383-2.2852-8.9766-8.6914-9.0078-8.7617-0.17969-0.43359-0.62891-0.68359-1.1016-0.60156-0.46094 0.082032-0.80469 0.47266-0.82422 0.94141-0.14062 3.3359 0.67188 5.75 1.5 7.3164-8.3125-2.4297-10.105-11.457-10.184-11.875-0.097656-0.51562-0.57422-0.86328-1.0898-0.8125-0.51953 0.054687-0.90625 0.50391-0.89062 1.0234 0.41406 13.465-1.8516 17.766-3.2383 19.133-0.66406 0.65625-1.1992 0.67188-1.2383 0.67188-0.53906-0.050781-1.0156 0.31641-1.0938 0.85156-0.078125 0.54688 0.29688 1.0547 0.84375 1.1328 0.03125 0.003906 0.11328 0.015625 0.23828 0.015625 0.36719 0 1.1016-0.09375 1.9414-0.66406 0.050781 0.38672 0.125 0.81641 0.21875 1.2656-1.0273 0.35156-2.6211 1.0781-3.7812 2.4648-0.015625 0.019532-0.054687 0.066406-0.15625 0.046875-0.039062-0.007812-0.13281-0.039062-0.16406-0.15234-2.1875-8.1094-5.7148-28.309 8.8867-40.496zm12.711 51.828c-1.0039 0-1.5898-1.207-1.8672-2.0117 0.48047 0.023438 0.95703 0.050781 1.4531 0.050781 0.74219 0 1.4453-0.035156 2.1289-0.082031-0.24219 0.83594-0.76172 2.043-1.7148 2.043zm-13.148-30.664c1.9531 3.6211 5.6367 7.9102 12.305 8.6992 0.43359 0.046875 0.83984-0.18359 1.0234-0.57422 0.18359-0.39062 0.089844-0.85938-0.22656-1.1523-0.074219-0.070312-1.2734-1.2227-1.9688-3.6367 2 2.6094 5.3359 5.6836 10.305 6.5664 0.42187 0.070312 0.83594-0.125 1.0469-0.49219 0.21094-0.36719 0.16406-0.82812-0.11719-1.1484-0.023437-0.027344-1.9414-2.2969-1.2891-5.8906 1.2227 3.5508 3.7461 9.2227 7.8945 11.551-0.03125 0.55859-0.14844 1.668-0.55078 3.0156-0.085937 0.13672-0.125 0.28516-0.13672 0.44531-1.3008 3.8906-5.0039 9.3281-15.547 9.3281-5.375 0-9.4414-1.418-12.086-4.2109-3.5664-3.7656-3.332-8.8477-3.332-8.8984v-0.011719c1.5898-2.7227 2.5-7.3203 2.6797-13.59z"></path>
    </svg>
  </div>
</div>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-size: calc(0.9vw + 0.9vh + 0.4vmin);
}

body {
  background: #f1e4f3;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  margin: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}

.card {
  height: 100%;
  position: relative;
  width: 100%;
}

.details {
  background: #f1e4f3;
  box-shadow: 0em 0em 2em rgba(0, 0, 0, 0.1);
  color: #43278c;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 100% 100%;
  width: 21em;
}

.preview .details {
  animation: fade 1s ease-in-out;
  animation-fill-mode: forwards;
}

.entry-header {
  display: inline-block;
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
  line-height: 1.5;
}

.entry-header h2 {
  background: #43278c;
  box-decoration-break: clone;
  box-shadow: 0.2em 0 0 #43278c, -0.2em 0 0 #43278c;
  color: #fff;
  display: inline;
  margin: 0 0.2em;
  position: relative;
  padding: 0 0 0 0.6em;
  text-decoration: none;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 1.2em;
  font-style: italic;
  padding-left: 2rem;
}

.preview .desc,
.preview .extra {
  display: none;
}

button {
  background: #f1e4f3;
  border: 2px solid #43278c;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  color: #43278c;
  cursor: pointer;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
  padding: 0.4rem 1.4rem;
  position: relative;
  text-transform: uppercase;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.2s;
  transition-property: color;
  vertical-align: middle;
}

button:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ff599b;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition-duration: 0.2s;
  transition-property: transform;
  transition-timing-function: ease-out;
}

button:hover,
button:focus,
button:active {
  color: #fff;
}

button:hover:before,
button:focus:before,
button:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.expanded button {
  margin: 1em 0;
  padding: 1em;
  width: 100%;
}

.card .desc {
  padding: 1rem 2rem;
  order: 99;
}
.card .actions {
  order: 100;
  padding: 1em 2em 1.5em;
}

.picture {
  height: 9em;
  left: 51%;
  overflow: hidden;
  position: absolute;
  top: 51%;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 14em;
}

.card svg {
  background: #fe7c73;
  fill: #333745;
  height: 24em;
  left: -3em;
  position: relative;
  top: -8.5em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 20em;
}

.card,
.card svg,
.card .picture {
  transition-duration: 2s;
}

.preview svg,
.preview .picture {
  cursor: pointer;
  transform-origin: 50% 50%;
  transform: scale(0.9);
}

.preview .picture:hover,
.preview .details:hover + .picture {
  transform: scale(1);
}

.preview svg:hover,
.preview .details:hover + .picture svg {
  transform: scale(0.8);
}

.expanded .picture {
  animation: expand 1s ease-in-out;
  animation-fill-mode: forwards;
  /*opacity: 0;*/
  height: 100%;
  left: 30%;
  top: 0;
  width: 70%;
}

.expanded svg {
  height: 170%;
  left: -25%;
  position: relative;
  top: -40%;
  transform: scale(1);
  transform-origin: 50% 50%;
  width: 170%;
}

.expanded .view {
  display: none;
  opacity: 0;
}

div.expanded {
  height: 100vh;
  position: absolute;
  transform: translate(0, 0);
  width: 100vw;
}

.expanded .details {
  animation: slide 0.8s ease-out;
  animation-fill-mode: forwards;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40%;
  z-index: 10;
}

.expanded .actions {
  padding-top: 0;
}

.expanded h2,
.expanded .title,
.expanded .desc,
.expanded .like,
.expanded .trade,
.expanded .close {
  animation: slide 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.expanded h2 {
  animation-delay: 0.2s;
}

.expanded .title {
  animation-delay: 0.4s;
}

.expanded .desc {
  animation-delay: 0.6s;
}

.expanded .like {
  animation-delay: 0.8s;
}

.expanded .trade {
  animation-delay: 1s;
}

.expanded .close {
  animation-delay: 1.2s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
</style>
