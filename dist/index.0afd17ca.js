document.getElementById("form1").addEventListener("submit",function(u){u.preventDefault();let e=`<b>\u{411}\u{415}\u{421}\u{41F}\u{41B}\u{410}\u{422}\u{41D}\u{410}\u{42F} \u{41A}\u{41E}\u{41D}\u{421}\u{423}\u{41B}\u{42C}\u{422}\u{410}\u{426}\u{418}\u{42F}</b>
`;e+=`<b>\u{418}\u{43C}\u{44F}: </b> ${this.name.value}
<b>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: </b> ${this.tel.value}
<b>\u{41A}\u{43E}\u{43C}\u{43C}\u{435}\u{43D}\u{442}\u{430}\u{440}\u{438}\u{439}: </b> ${this.comment.value}
`,axios.post("https://api.telegram.org/bot6470796582:AAEzk1WSMbpsvtk_zU8M9E4AEclnoD5ovB8/sendMessage",{chat_id:"-1002084469289",parse_mode:"html",text:e}).then(u=>{this.name.value="",this.tel.value="",this.comment.value="",this.comment.value=`\u{2705} Thank you! Your message has been sent. We will call you back within 10 minutes.`}).catch(u=>{console.log(u)}).finally(()=>{console.log("Конец")})});
//# sourceMappingURL=index.0afd17ca.js.map
