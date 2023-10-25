The book I would like to choose is Shakespeare's The Tempest. This is a story about family and revenge. The storm created by the fairy Ariel in this book is the beginning of it all. So just like the name of this book, The Tempest, I wanted to choose a storm as the book cover.

https://imgpile.com/images/D0R9b3.jpg

Just like what I drew in the sketch above, I hope to create an interactive interface. At the beginning, it is a calm picture, but the ship is motionless, which is Figure 1. When the viewer's mouse moves across the waves, the waves will rise, as shown in Figure 2. Clicking the cloud with the viewer's mouse will cause a lightning effect and the sky will darken at the same time. The boat is always in the center of the screen, but will sway with the appearance of waves and lightning, and finally turn over.

But what I'm wondering is, could the boat be drawn by myself and sticked on the center of the page so that adjusting the angle as a whole would be simpler than adjusting all the geometry?




Part 2:

Since you said you would teach how to load image files into p5js this week, I left the boat empty. Mainly doing the wave part.

I want the waves can follow the movement of my mouse, and return to a straight line when the mouse does not move. So I need to first calculate the distance between the mouse and the waves and detect the movement of the mouse.

A line is composed of countless points, and the distance between the detected mouse and the point is dx and dy. I use offset to represent the displacement of each point, and the calculation of the displacement depends on the distance d. The sin(d/50) part makes the shape of the wave change at a certain frequency, and waveHeight controls the amplitude of the wave. And when it is detected that the mouse is not moving, it becomes a straight line.

Finally, draw the waves. The highest point of the line is the distance from the point to the mouse. Since there are many waves, I directly use translate() to copy the waves one by one, but this seems like I have too much repeated code. Is there any way to directly copy the lines without too many repeat code?




Part3: 
First, I preloaded two pictures I drew, namely boat and lightning. For Boat, my initial idea was to make the boat rise and fall with the waves. However, it's challenging to achieve this because when the waves' peaks are too high, the boat gets buried under other waves, making it look chaotic. So, I just made the boat and waves move independently. When the mouse movement is detected, the boat randomly rotates in a fixed position, while the waves rise and fall with a cosine function.

For Boat roatation, I used Math.random() to randomly generate a  number in the range -50 to 50. Then use imageRotation to control the rotation angle.

I want a lightning effect to appear when the mouse clicked, and this effect only lasts for a short time. So I first used the image function to draw two lightning pictures, located at different positions on the canvas. Then use count to detect the time when the lightning image appears. If count is equal to 50, it means that 50 frames of lightning images have been drawn, so showImage needs to be set to false to stop drawing lightning images. Finally, the count is reset to 0 in preparation for drawing the lightning image again on the next mouse click event.