$(document).ready(()=>{
    var desc = document.getElementById("carolum-desc");
    
    var tw = new Typewriter(desc, {
        loop: true
    });
    
    var a = ["so much more", "user-friendly", "minimalistic", "lightweight", "open-source", "free", "secure", "extendable"],
        i;
    
    a.forEach((i)=>{
        tw.typeString(i).pauseFor(1250).deleteAll();
    });

    tw.start()
});