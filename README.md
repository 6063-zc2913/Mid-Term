The book I would like to choose is Shakespeare's The Tempest. This is a story about family and revenge. The storm created by the fairy Ariel in this book is the beginning of it all. So just like the name of this book, The Tempest, I wanted to choose a storm as the book cover.

https://imgpile.com/images/D0R9b3.jpg

Just like what I drew in the sketch above, I hope to create an interactive interface. At the beginning, it is a calm picture, but the ship is motionless, which is Figure 1. When the viewer's mouse moves across the waves, the waves will rise, as shown in Figure 2. Clicking the cloud with the viewer's mouse will cause a lightning effect and the sky will darken at the same time. The boat is always in the center of the screen, but will sway with the appearance of waves and lightning, and finally turn over.

But what I'm wondering is, could the boat be drawn by myself and sticked on the center of the page so that adjusting the angle as a whole would be simpler than adjusting all the geometry?




Part 2:

Since you said you would teach how to load image files into p5js this week, I left the boat empty. Mainly doing the wave part.

I want the waves can follow the movement of my mouse, and return to a straight line when the mouse does not move. So I need to first calculate the distance between the mouse and the waves and detect the movement of the mouse.

A line is composed of countless points, and the distance between the detected mouse and the point is dx and dy. I use offset to represent the displacement of each point, and the calculation of the displacement depends on the distance d. The sin(d/50) part makes the shape of the wave change at a certain frequency, and waveHeight controls the amplitude of the wave. And when it is detected that the mouse is not moving, it becomes a straight line.

Finally, draw the waves. The highest point of the line is the distance from the point to the mouse. Since there are many waves, I directly use translate() to copy the waves one by one, but this seems like I have too much repeated code. Is there any way to directly copy the lines without too many repeat code?