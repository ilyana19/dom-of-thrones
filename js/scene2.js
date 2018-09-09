function scene2() {
  console.log('Executing scene 2!');

  // Setup Stage
  stage = document.querySelector('#stage');
  castle = document.querySelector('#castle');
  castleImgSrc = castle.getAttribute('src');
  stageImg = document.querySelector('#stage-img');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
  nedContainer = document.createElement("div");
  nedContainer.style.position = "absolute";
  nedContainer.style.width = "10%";
  nedContainer.style.height = "37%";
  nedContainer.style.top = "50%";
  nedContainer.style.left = "10%";
  // nedContainer.style.border = "2px solid red";
  // nedContainer.style.background = "yellow";

  ned = document.querySelector("#ned");
  ned.style.position = "absolute";
  ned.style.top = 0;
  ned.style.width = "70%";
  // ned.style.border = '2px solid blue';

  leather = document.querySelector("#leather-armour");
  leather.style.position = "absolute";
  leather.style.bottom = 0;
  // leather.style.border = '2px solid green';

  nedContainer.append(ned);
  nedContainer.append(leather);
  stage.append(nedContainer);

  // Character 2
  joffreyContainer = document.createElement("div");
  joffreyContainer.style.position = "absolute";
  joffreyContainer.style.width = "8%";
  joffreyContainer.style.height = "31%";
  joffreyContainer.style.top = "55%";
  joffreyContainer.style.left = "55%";

  joffrey = document.querySelector("#joffrey");
  joffrey.style.position = "absolute";
  joffrey.style.top = 0;
  joffrey.style.width = "75%";
  joffrey.style.left = "33%";

  kingWardrobe = document.querySelector("#king");
  kingWardrobe.style.position = "absolute";
  kingWardrobe.style.bottom = 0;

  joffreyContainer.append(joffrey);
  joffreyContainer.append(kingWardrobe);
  stage.append(joffreyContainer);

  // Setup Props

  // Prop 1
  sword = document.querySelector("#sword");
  sword.style.position = "absolute";
  sword.style.top = "74%";
  sword.style.left = "11%";
  sword.style.height = "5%";
  sword.style.transform = "rotateY(150deg)";
  stage.append(sword);

  // Prop 2

  // Action!

  frame(function() {
    sword.style.top = "74%";
    sword.style.left = "11%";
  });

  frame(function() {
    sword.style.top = "71%";
    sword.style.left = "21%";
  })

  frame(function() {
    sword.style.top = "68%";
    sword.style.left = "31%";
  })

  frame(function() {
    sword.style.top = "66%";
    sword.style.left = "40%";
  })

  frame(function() {
    sword.style.top = "64%";
    sword.style.left = "53%";
  });

  frame(function() {
    joffrey.style.top = "0";
    joffrey.style.left = "33%";
    joffrey.style.transform = 'rotateZ(220deg)';
  });

  frame(function() {
    joffrey.style.top = "17%";
    joffrey.style.left = "90%";
    joffrey.style.transform = 'rotateZ(140deg)';
  });

  frame(function() {
    joffrey.style.top = '35%';
    joffrey.style.left = '160%';
    joffrey.style.transform = 'rotateZ(260deg)';
  });

  frame(function() {
    joffrey.style.top = '55%';
    joffrey.style.left = '230%';
    joffrey.style.transform = 'rotateZ(180deg)';
  });

  frame(function() {
    joffrey.style.top = "75%";
    joffrey.style.left = "300%";
    joffrey.style.transform = 'rotateZ(100deg)';
  });
}
