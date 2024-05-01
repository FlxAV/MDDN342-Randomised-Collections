[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uYb6fuja)
## 2024 MDDN342 Assignment 2: Randomised Collections

**This is where you talk about your project!**

When I first started I initially wanted to do something around the "faces" of the moon. 

![Moon idea](image.png)

Hoever I very quickly realised that that wasn't a very feasable idea, so I instantly thought about the movie "Princess Mononoke" by Hayao Miyazaki and more specifically the little kodamas.

The Kodamas are small spirits of the forest with an interesting design. They all look similar but are all unique in a way. That was the perfect thing for this parametrised assignment. 

![Kodama Ref](image-1.png)

My first task was to create a circular smooth shape. I went through a couple itterations on making this blob, and settled on placing 10 points around the center point, then add some randomness to the position of each point by a small margin. I then used curveVertex to connect them all. That gave me a randomised blob shape that was ideal for the Kodama faces.

I was then suggested to have a more drastic variation between some of the head because currently they were "circular" shape. (the Base shape was a circle). So I made that before creating the head. There is a random chance that the base shape will be chosen between three options. The normal circle, a horizontal oval, and a vertical circle. With that, it made it so that there was more variety between two Kodama but overall they still all looked similar. In the image below the three different base shape are shown by a different colour.

![3 base shapes](image-2.png)

My next challenge was to implement the eyes. My problem was that even though the center of the head is centered around 0,0 because of the smooshing of the blob shape, sometimes the shape was a bit higher then usual or a bit more to the left or right etc... That meant that when I just added a circle for the eye at a fix point, sometimes, the eye would be hanging off the face. My solution was to seperate the 10 points used to creat the head into 3 groups. The top right group which will be used for the right eye, the top left group for the left eye, and the bottom group which was just an area I didnt want the eyes in.

Once those 10 points were seperated, I then select a random point from one of the groups. That is where the eye will be located, but I first need to center the eye a bit away from the edge before drawing it. 

Once that is done to both eyes, I now have two eyes that are always located withing the Kodama head, and the placement of the eye is randomised between four points each.

Next challenge was the mouth which I just based all the variables off of the eye located lowest on the face. That way when the eye is lower down the mouth will remain beneath the two eyes and still look somehwat face like.

Leaf Function : Garden by thomm238