song_1="music.mp3";
song_2="music2.mp3";

song_played="";

leftWristX= 0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
 
scoreLeftWrist=0;
scoreRightWrist=0;


function preload(){
    song_1=loadSound("TQG.mp3");
   song_2=loadSound("Senorita.mp3");

}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded );
    poseNet.on('pose' , gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    fill('#FF0000');
    stroke('FF0000');
   
    song1_played = song_1.isPlaying();
    song2_played = song_2.isPlaying();
    if( scoreLeftWrist>0.2){
        song_1.play()
        circle(leftWristX , leftWristY , 20);
         

        if(song1_played == true){
            song_2.stop();
        }
        document.getElementById("speed").innerHTML="SONG NAME :- TQG ";
    }
    if(scoreRightWrist>0.2){
        song_2.play()
        circle(rightWristX , rightWristY , 20);
         

        if(song2_played == true){
            song_1.stop();
        }
        document.getElementById("speed").innerHTML="SONG NAME :- Senorita ";
    }
    }

    

function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
    }
    scoreLeftWrist = results[0].pose.keypoints[9].score ;
      scoreRightWrist=results[0].pose.keypoints[10].score;
      console.log("score of left wrist  ="+scoreLeftWrist);
      console.log("score of left wrist =" + scoreRightWrist);
    }


