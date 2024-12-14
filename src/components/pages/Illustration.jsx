import React, { useState } from "react";
import Section3 from "../sections/Section3";
import { motion, stagger, useScroll } from "framer-motion";
import Card from "../blocks/Card";
import thumb1 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Thumbnail.png";
import thumb1img1 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Comp 2 (1).gif";

import thumb1stry1 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/A.png";
import thumb1stry2 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/B.png";
import thumb1stry3 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/C.png";
import thumb1stry4 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/D.png";
import thumb1stry5 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/E.png";
import thumb1stry6 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/F.png";
import thumb1stry7 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/G.png";
import thumb1stry8 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/H.png";
import thumb1stry9 from "../media/chrachter/02_Office Intelligence-20240717T082557Z-001/02_Office Intelligence/Styleframes/I.png";
//thumb2
import thumb2 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/Thumbnail.png";
import thumb2img1 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/SHOT 01.png";
import thumb2img2 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/SHOT 07.png";
import thumb2img3 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/SHOT 15-16.gif";
import thumb2img4 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/SHOT 19.png";
import thumb2img5 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/SHOT 20.png";
import thumb2img6 from "../media/chrachter/03_Kaspersky-20240717T082559Z-001/03_Kaspersky/SHOT 22.png";
//thumb3
import thumb3 from "../media/chrachter/04_Demo Fest-20240717T082605Z-001/04_Demo Fest/Thumbnail.jpg";
import thumb3img1 from "../media/chrachter/04_Demo Fest-20240717T082605Z-001/04_Demo Fest/Ring A_loop.mp4";
import thumb3img2 from "../media/chrachter/04_Demo Fest-20240717T082605Z-001/04_Demo Fest/Ring E Loop.mp4";
import thumb3img3 from "../media/chrachter/04_Demo Fest-20240717T082605Z-001/04_Demo Fest/Ring F.m4v";
import thumb3img4 from "../media/chrachter/04_Demo Fest-20240717T082605Z-001/04_Demo Fest/Ring G_Loop.mp4";
//thumb4
import thumb4 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/Thumbnail.png";
import thumb4img1 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT01.png";
import thumb4img2 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT04.jpg";
import thumb4img3 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT05.jpg";
import thumb4img4 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT06.jpg";
import thumb4img5 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT07.jpg";
import thumb4img6 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT11.jpg";
import thumb4img7 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT12_B.jpg";
import thumb4img8 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT15.jpg";
import thumb4img9 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT16.jpg";
import thumb4img10 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT18_C.jpg";
import thumb4img11 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT21_C.jpg";
import thumb4img12 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT22.jpg";
import thumb4img13 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT25.jpg";
import thumb4img14 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT26.jpg";
import thumb4img15 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT27.jpg";
import thumb4img16 from "../media/chrachter/05_MoveOn-20240717T082608Z-001/05_MoveOn/SHOT29.png";
//thumb5
import thumb5 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/01_A for Amaretto Sour.png";
import thumb5img1 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/01_A for Amaretto Sour.png";
import thumb5img2 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/02_B for Bramble.png";
import thumb5img3 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/03_C for Cobras Fang.png";
import thumb5img4 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/04_D for Dragon Fruit Paloma.png";
import thumb5img5 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/05_E for Espresso Martini.png";
import thumb5img6 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/06_F for French 75.png";
import thumb5img7 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/07_G for Greyhound.png";
import thumb5img8 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/08_H for Hawaiian Ice Tea.png";
import thumb5img9 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/09_I for Irish Coffee.png";
import thumb5img10 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/10_J for Jack-O-Lantern.png";
import thumb5img11 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/11_K for Kiwi Jalapeno Margarita.png";
import thumb5img12 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/12_L for Long Island Iced Tea.png";
import thumb5img13 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/17_Q for Queen Bee.png";
import thumb5img14 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/18_R for Rosé Aperol Spritz.png";
import thumb5img15 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/19_S for Sex On The Beach.png";
import thumb5img16 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/20_T for Tequila Sunrise.png";
import thumb5img17 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/21_U for Ultimate Bloody Mary.png";
import thumb5img18 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/22_V for Valencia.png";
import thumb5img19 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/23_W for Whiskey Sour.png";
import thumb5img20 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/24_X for Xaviers White Cosmo.png";
import thumb5img21 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/25_Y for Yellow Bird.png";
import thumb5img22 from "../media/chrachter/01_36 Days of Type-20240717T082554Z-001/01_36 Days of Type/26_Z for Zombie.png";
//thumb6
import thumb6 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Thumbnail.png";
import thumb6img1 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 1 Rough.png";
import thumb6img2 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 1.png";
import thumb6img3 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 2 Rough.png";
import thumb6img4 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 2.png";
import thumb6img5 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 3 Rough.png";
import thumb6img6 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 3.png";
import thumb6img7 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 4 Rough.png";
import thumb6img8 from "../media/chrachter/06_Blue Tokai Illustrated Posters-20240717T082610Z-001/06_Blue Tokai Illustrated Posters/Sketch 4.png";
//thumb7
import thumb7 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Thumbnail.png";
import thumb7img1 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/1.png";
import thumb7img2 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/12.png";
import thumb7img3 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/13.png";
import thumb7img4 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/2.png";
import thumb7img5 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/15.png";
import thumb7img6 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/29.png";
import thumb7img7 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/7.png";
import thumb7img8 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Frames/9.png";
import thumb7stry1 from "../media/chrachter/07_Scroll Tales-20240802T101431Z-001/07_Scroll Tales/Storyboard/Board.gif";
//thumb8
import thumb8 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/Thumbnail.png";
import thumb8img1 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/CLIFFORD SKETCH.png";
import thumb8img2 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/CLIFFORD2.png";
import thumb8img3 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/HANSEL AND GRETEL SKETCH.png";
import thumb8img4 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/HANSEL AND GRETEL2.png";
import thumb8img5 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/HEIDI SKETCH.png";
import thumb8img9 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/HEIDI2.png";
import thumb8img6 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/JUNGLE BOOK 2.png";
import thumb8img7 from "../media/chrachter/08_Book Covers-20240717T082614Z-001/08_Book Covers/JUNGLE BOOK SKETCH.png";
//thumb9
import thumb9 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Thumbnail.png";
import thumb9img1 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Storyboard/scroll tales 2.gif";

import thumb9stry2 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/02.png";
import thumb9stry3 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/03.png";
import thumb9stry4 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/04.png";
import thumb9stry5 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/05.png";
import thumb9stry6 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/06.png";
import thumb9stry9 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/10.png";
import thumb9stry10 from "../media/chrachter/09_Scroll Tales 2-20240717T082615Z-001/09_Scroll Tales 2/Styleframes/7b.png";
//thumb10
import thumb10 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Thumbnail.png";
import thumb10img1 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Storyboard/Comp 1.gif";

import thumb10stry2 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/01A.png";
import thumb10stry3 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/02_V3.png";
import thumb10stry4 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/03A.png";
import thumb10stry5 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/07A.png";
import thumb10stry6 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/12.png";
import thumb10stry7 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/15_5.png";
import thumb10stry8 from "../media/chrachter/10_Catty and Ella-20240717T082618Z-001/10_Catty and Ella/Styleframes/MicDrop-Catty+Ella-Draft-02.mp4";
//thumb11
import thumb11 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/Thumbnail.png";
import thumb11img1 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/1_BriefingAndDiscovery_BG.png";
import thumb11img2 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/2_ScriptWriting_BG.png";
import thumb11img3 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/3_StyleFrames_BG.png";
import thumb11img4 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/4_Voiceover_BG.png";
import thumb11img5 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/5_Animation_BG.png";
import thumb11img6 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/6_AudioMix_BG.png";
import thumb11img7 from "../media/chrachter/11_Animation Pipeline Icons-20240717T082619Z-001/11_Animation Pipeline Icons/7_SignOff_BG.png";
//thumb12
import thumb12 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/Thumbnail.png";
import thumb12img1 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/1.png";
import thumb12img2 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/2.png";
import thumb12img3 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/3.png";
import thumb12img4 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/4.png";
import thumb12img5 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/5.png";
import thumb12img6 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/6.png";
import thumb12img7 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/7.png";
import thumb12img8 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/8.png";
import thumb12img9 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/9.png";
import thumb12img10 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/8 copy.png";
import thumb12img11 from "../media/chrachter/12_AirBnB Hospitality Icons-20240802T101540Z-001/12_AirBnB Hospitality Icons/9 copy.png";

function Illustration() {
  const Illustration = [
    {
      image: thumb1,
      data: [thumb1img1],
      newdata: [
        thumb1stry1,
        thumb1stry2,
        thumb1stry3,
        thumb1stry4,
        thumb1stry6,
        thumb1stry7,
        thumb1stry8,
        thumb1stry9,
        thumb1stry5,
      ],
      textheading: "Office Intelligence",
      paragraph:
        "Office Intelligence is an online training platform for young professionals to learn all about the soft skills they’d need to navigate through all sorts of different situations at work. We helped create all animations and illustrations that students come across as part of these online courses. This involved storyboarding, character design, icons, and illustrations that live on the Office Intelligence website.",
    },
    {
      image: thumb2,
      newdata: [
        thumb2img1,
        thumb2img2,
        thumb2img3,
        thumb2img4,
        thumb2img5,
        thumb2img6,
      ],
      textheading: "Kaspersky",
    },
    {
      image: thumb3,
      data: [thumb3img1, thumb3img2, thumb3img3, thumb3img4],
      textheading: "Demo Fest",
      paragraph:
        "A series of animated loops I created for Demo Festival - an initiative held in the Netherlands to help bring together animators and showcase the world’s best motion design on outdoor screens in the public space.",
    },
    {
      image: thumb4,
      data: [
        thumb4img1,
        thumb4img2,
        thumb4img3,
        thumb4img4,
        thumb4img5,
        thumb4img6,
        thumb4img7,
        thumb4img8,
        thumb4img9,
        thumb4img10,
        thumb4img11,
        thumb4img12,
        thumb4img13,
        thumb4img14,
        thumb4img15,
        thumb4img16,
      ],
      textheading: "MoveOn",
      paragraph:
        "MoveOn.org, an organization supporting progressive Democrats and opposing the MAGA agenda and Republicans, reached out to us to create a video. The goal was to remind voters of the stakes in the weeks leading up to the elections and to inspire people to unite and vote for progress on the critical issues facing the country today.",
    },
    {
      image: thumb5,
      data: [
        thumb5img1,
        thumb5img2,
        thumb5img3,
        thumb5img4,
        thumb5img5,
        thumb5img6,
        thumb5img7,
        thumb5img8,
        thumb5img9,
        thumb5img10,
        thumb5img11,
        thumb5img12,
        thumb5img13,
        thumb5img14,
        thumb5img15,
        thumb5img16,
        thumb5img17,
        thumb5img18,
        thumb5img19,
        thumb5img20,
        thumb5img21,
        thumb5img22,
      ],
      textheading: "36 Days of Cocktails",
      paragraph:
        "36 Days of Type is a creative challenge that brings together illustrators and artists to reimagine every letter and number of the Latin alphabet in their own unique style. We decided to shake things up (literally!) by blending this idea with our passion for cocktails. The result? A fun, refreshing series of cocktail recipe cards—one for each letter, served up daily for over a month!",
    },
    {
      image: thumb6,
      data: [
        thumb6img1,
        thumb6img2,
        thumb6img3,
        thumb6img4,
        thumb6img5,
        thumb6img6,
        thumb6img7,
        thumb6img8,
      ],
      textheading: "Blue Tokai  ",
      paragraph: "",
    },
    {
      image: thumb7,
      data: [thumb7stry1],
      newdata: [
        thumb7img1,
        thumb7img2,
        thumb7img3,
        thumb7img4,
        thumb7img5,
        thumb7img6,
        thumb7img7,
        thumb7img8,
      ],
      textheading: "Scroll Tales - The Creative Crew",
      paragraph:
        "Scroll Tales, is a collection of children's ebooks based on inclusive and diverse narratives that help inculcate a sense of empathy in the minds of young readers. Their very first ebook, 'The Creative Crew', addresses the issues of gender stereotypes for children. Here are a few sketches and frames from the story! You can scroll through the ebook here.",
    },
    {
      image: thumb8,
      data: [
        thumb8img1,
        thumb8img2,
        thumb8img3,
        thumb8img4,
        thumb8img5,
        thumb8img9,

        thumb8img7,
        thumb8img6,
      ],
      textheading: "Book Covers",
      paragraph:
        "Re-illustrated book covers for three of my favourite children's stories! ",
    },
    {
      image: thumb9,
      data: [thumb9img1],
      newdata: [
        thumb9stry2,
        thumb9stry3,
        thumb9stry4,
        thumb9stry5,
        thumb9stry6,
        thumb9stry9,
        thumb9stry10,
      ],
      textheading: "Together on Eid with Zara and Leo",
      paragraph:
        "Illustrated a children's ebook about celebrating Eid, featuring the story of Zara and her friend Leo as they, along with their families, experience the joy and traditions of Eid festivities. Scroll through to find early sketches and frames from the book!",
    },
    {
      image: thumb10,
      data: [thumb10img1],
      newdata: [
        thumb10stry2,
        thumb10stry3,
        thumb10stry4,
        thumb10stry5,
        thumb10stry6,
        thumb10stry7,
        thumb10stry8,
      ],
      textheading: "Catty and Ella",
      paragraph:
        "Meet Catty, a quirky caterpillar, and Ella, a clever elephant—two friends on a journey through life and mental health. Here are some early sketches and video stills of them tackling self-esteem challenges together.",
    },
    {
      image: thumb11,
      data: [
        thumb11img1,
        thumb11img2,
        thumb11img3,
        thumb11img4,
        thumb11img5,
        thumb11img6,
        thumb11img7,
      ],
      textheading: "7 Steps of Animation",
      paragraph:
        "Illustrated the seven steps involved in making an animation video from scratch! ",
    },
    {
      image: thumb12,
      newdata: [thumb12img1, thumb12img4, thumb12img7],
      data: [
        thumb12img2,
        thumb12img3,
        thumb12img5,
        thumb12img6,
        thumb12img8,
        thumb12img9,
        thumb12img10,
        thumb12img11,
      ],
      textheading: "Hospitality Icons for AirBnb Host",
      paragraph:
        "Here are a few fun icons I was commissioned to make for an AirBnb Host to use on their stationary around their accommodation. ",
    },
  ];

  return (
    <>
      <div className="col-12">
        <div className="container position-static">
          <div className="row m-0 py-5 my-5">
            <div className="col-6">
              <div className="display-3 fontitalic">Illustrations</div>
            </div>
            <motion.div className="row m-0 pt-4 position-relative">
              {Illustration.map((i, index) => {
                return <Card i={i} />;
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <Section3 />
    </>
  );
}

export default Illustration;
