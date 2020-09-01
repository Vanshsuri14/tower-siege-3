class Form {

  constructor() {
    // this.input = createInput("Name");

    this.button1 = createButton('Badminton');
    this.button2 = createButton('Cricket');
    this.button3 = createButton('Swimming');
    this.button4 = createButton('Basketball');

    this.back = createButton('BACK');

    this.greeting = createElement('h2');
    this.title = createElement('h2');    
  }
  hide(){
    // this.greeting.hide();
    // this.button.hide();
    // this.input.hide();
    this.title.hide();
    this.sports.hide();
    this.back.hide();
    console.log("end of hide");
    
  }

  display(){
    background("Yellow");
    this.title.html("SPORTS LEARNER");
    this.title.position(windowsWidth / 2 - 150, 0);

    this.showButtons();
    this.greeting.hide();

    this.button1.position(windowsWidth / 2 - 600, windowsHeight / 2 - 300);
    this.button2.position(windowsWidth / 2 + 400, windowsHeight / 2 - 300);
    this.button3.position(windowsWidth / 2 - 600, windowsHeight / 2 + 60);
    this.button4.position(windowsWidth / 2 + 400, windowsHeight / 2 + 60);

    this.back.position(displayWidth / 2.25, windowsHeight / 2 + 300);
    

    this.back.mousePressed(() => {
      background("yellow");
      this.display();
      console.log("displ");
    });

    this.button1.mousePressed(() => {
      this.hideButtons();
      background("green");
      this.badmintonContent();
      this.back.position(windowsWidth / 2, windowsHeight / 2 + 200);
      
    });

    this.button2.mousePressed(() => {
      this.cricketContent();
      background("red");
      this.back.position(windowsWidt / 2, windowsHeight / 2 + 250);

      this.hideButtons();
      // this.greeting.show();
      // this.greeting.html("Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 20-metre (22-yard) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at the wicket with the bat, while the bowling and fielding side tries to prevent this and dismiss each batter (so they are out). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side catching the ball after it is hit by the bat, but before it hits the ground. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match s statistical information.Forms of cricket range from Twenty20, with each team batting for a single innings of 20 overs, to Test matches played over five days. Traditionally cricketers play in all-white kit, but in limited overs cricket they wear club or team colours. In addition to the basic kit, some players wear protective gear to prevent injury caused by the ball, which is a hard, solid spheroid made of compressed leather with a slightly raised sewn seam enclosing a cork core layered with tightly wound string.The earliest reference to cricket is in South East England in the mid-16th century. It spread globally with the expansion of the British Empire, with the first international matches in the second half of the 19th century. The games governing body is the International Cricket Council (ICC), which has over 100 members, twelve of which are full members who play Test matches. The games rules, the Laws of Cricket, are maintained by Marylebone Cricket Club (MCC) in London. The sport is followed primarily in the Indian subcontinent, Australasia, the United Kingdom, southern Africa and the West Indies.[1] Womens cricket, which is organised and played separately, has also achieved international standard. The most successful side playing international cricket is Australia, which has won seven One Day International trophies, including five World Cups, more than any other country and has been the top-rated Test side more than any other country");
      // this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });

    this.button3.mousePressed(() => {
      this.swimmingContent();
      background("blue");
      this.back.position(windowsWidth / 2, windowsHeight / 2 + 400);
      this.hideButtons();
      // this.greeting.show();
      // this.greeting.html("swimining text ")
      // this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });


    this.button4.mousePressed(() => {
      this.basketballContent();
      background("orange");
      this.back.position(windowsWidt / 2, windowsHeight / 2 + 400);
      this.hideButtons();
      // this.greeting.show();
      // this.greeting.html("BasketBa text ")
      // this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
    });
 }

 hideButtons() {
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
}

showButtons() {
  this.button1.show();
  this.button2.show();
  this.button3.show();
  this.button4.show();
}

badmintonContent() {
  this.greeting.show();
  this.greeting.html("Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles (with one player per side) and doubles (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.  Each side may only strike the shuttlecock once before it passes over the net. Play ends once the shuttlecock has struck the floor or if a fault has been called by the umpire, service judge, or (in their absence) the opposing side.[1]  The shuttlecock is a feathered or (in informal matches) plastic projectile which flies differently from the balls used in many other sports. In particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly. Shuttlecocks also have a high top speed compared to the balls in other racquet sports. The flight of the shuttlecock gives the sport its distinctive nature.   The game developed in British India from the earlier game of battledore and shuttlecock. European play came to be dominated by Denmark but the game has become very popular in Asia, with recent competitions dominated by China. Since 1992, badminton has been a Summer Olympic sport with four events: men's singles, women's singles, men's doubles, and women's doubles,[2] with mixed doubles added four years later. At high levels of play, the sport demands excellent fitness: players require aerobic stamina, agility, strength, speed, and precision. It is also a technical sport, requiring good motor coordination and the development of sophisticated racquet movements ")
  this.greeting.position(windowsWidth/ 2 - 600, windowsHeight / 10);
} 

cricketContent(){
  this.greeting.show();
  this.greeting.html("Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 20-metre (22-yard) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at the wicket with the bat, while the bowling and fielding side tries to prevent this and dismiss each batter (so they are out). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side catching the ball after it is hit by the bat, but before it hits the ground. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match s statistical information.Forms of cricket range from Twenty20, with each team batting for a single innings of 20 overs, to Test matches played over five days. Traditionally cricketers play in all-white kit, but in limited overs cricket they wear club or team colours. In addition to the basic kit, some players wear protective gear to prevent injury caused by the ball, which is a hard, solid spheroid made of compressed leather with a slightly raised sewn seam enclosing a cork core layered with tightly wound string.The earliest reference to cricket is in South East England in the mid-16th century. It spread globally with the expansion of the British Empire, with the first international matches in the second half of the 19th century. The game's governing body is the International Cricket Council (ICC), which has over 100 members, twelve of which are full members who play Test matches. The game's rules, the Laws of Cricket, are maintained by Marylebone Cricket Club (MCC) in London. The sport is followed primarily in the Indian subcontinent, Australasia, the United Kingdom, southern Africa and the West Indies.[1] Women's cricket, which is organised and played separately, has also achieved international standard. The most successful side playing international cricket is Australia, which has won seven One Day International trophies, including five World Cups, more than any other country and has been the top-rated Test side more than any other country");
  this.greeting.position(windowsWidth / 2 - 600, windowsHeight / 15);
}

basketballContent(){
  this.greeting.show();
  this.greeting.html("Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one or more one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated.Players advance the ball by bouncing it while walking or running (dribbling) or by passing it to a teammate, both of which require considerable skill. On offense, players may use a variety of shots—the lay-up, the jump shot, or a dunk; on defense, they may steal the ball from a dribbler, intercept passes, or block shots; either offense or defense may collect a rebound, that is, a missed shot that bounces from rim or backboard. It is a violation to lift or drag one's pivot foot without dribbling the ball, to carry it, or to hold the ball with both hands then resume dribbling.the five players on each side fall into five playing positions. The tallest player is usually the center, the second tallest and strongest is the power forward, a slightly shorter but more agile player is the small forward, and the shortest players or the best ball handlers are the shooting guard and the point guard, who implements the coach's game plan by managing the execution of offensive and defensive plays (player positioning). Informally, players may play three-on-three, two-on-two, and one-on-one.Invented in 1891 by Canadian-American gym teacher James Naismith in Springfield, Massachusetts, United States, basketball has evolved to become one of the world's most popular and widely viewed sports.[1] The National Basketball Association (NBA) is the most significant professional basketball league in the world in terms of popularity, salaries, talent, and level of competition.[2][3] Outside North America, the top clubs from national leagues qualify to continental championships such as the EuroLeague and the Basketball Champions League Americas. The FIBA Basketball World Cup and Men's Olympic Basketball Tournament are the major international events of the sport and attract top national teams from around the world. Each continent hosts regional competitions for national teams, like EuroBasket and FIBA AmeriCup.The FIBA Women's Basketball World Cup and Women's Olympic Basketball Tournament feature top national teams from continental championships. The main North American league is the WNBA (NCAA Women's Division I Basketball Championship is also popular), whereas strongest European clubs participate in the EuroLeague Women.");
  this.greeting.position(windowsWidth / 2 - 600, windowsHeight / 20);

}

swimmingContent(){
  this.greeting.show();
  this.greeting.html("Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water (e.g., in a sea or lake). Competitive swimming is one of the most popular Olympic sports,[1] with varied distance events in butterfly, backstroke, breaststroke, freestyle, and individual medley. In addition to these individual events, four swimmers can take part in either a freestyle or medley relay. A medley relay consists of four swimmers who will each swim a different stroke, ordered as backstroke, breaststroke, butterfly and freestyle.[2]Swimming each stroke requires a set of specific techniques; in competition, there are distinct regulations concerning the acceptable form for each individual stroke.[3] There are also regulations on what types of swimsuits, caps, jewelry and injury tape that are allowed at competitions.[4] Although it is possible for competitive swimmers to incur several injuries from the sport, such as tendinitis in the shoulders or knees, there are also multiple health benefits associated with the sport.Competitive swimming became popular in the 19th century. The goal of high level competitive swimming is to break personal or world records while beating competitors in any given event. Swimming in competition should create the least resistance in order to obtain maximum speed. However, some professional swimmers who do not hold a national or world ranking are considered the best in regard to their technical skills. Typically, an athlete goes through a cycle of training in which the body is overloaded with work in the beginning and middle segments of the cycle, and then the workload is decreased in the final stage as the swimmer approaches competition.The practice of reducing exercise in the days just before an important competition is called tapering. Tapering is used to give the swimmer's body some rest without stopping exercise completely. A final stage is often referred to as shave and taper: the swimmer shaves off all exposed hair for the sake of reducing drag and having a sleeker and more hydrodynamic feel in the water.[10] Additionally, the shave and taper method refers to the removal of the top layer of dead skin, which exposes the newer and richer skin underneath. This also helps to shave off mere milliseconds on your time.[11]World record holder and Olympic gold medalist Michael Phelps in the 400 IM.Swimming is an event at the Summer Olympic Games, where male and female athletes compete in 16 of the recognized events each. Olympic events are held in a 50-meter pool, called a long course pool.There are forty officially recognized individual swimming events in the pool; however the International Olympic Committee only recognizes 32 of them. The international governing body for competitive swimming is the Fédération Internationale de Natation (International Swimming Federation), better known as FINA.")
  this.greeting.position(windowsWidth / 2 - 600, windowsHeight / 15);
}



 
}
