import { Component } from '@angular/core';

import {Movie} from './movie';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent {

  movies:Movie[]=[
{name:"The Gray Man", genere:"action", available:"yes", imagesource:"../assets/images/AAAABdzOeOqPEk1M_DWfMF64utFLlsrEMLTsiViL_B4cVd1PuKFzMNbkkathcJBDLghK2pIeAanGHGL_X5pgpNZDnCQPlbK9mVM8UFdjutj-fHXxQASUlsEWhvy25GXqlXGZVz_3.jpg", rating:0, duration:"nnnnn",price:0 ,link:"https://www.netflix.com/in/title/81160697 " ,description:"When a shadowy CIA agent uncovers damning agency secrets, he’s hunted across the globe by a sociopathic rogue operative who’s put a bounty on his head. Starring:Ryan Gosling,Chris Evans,Ana de Armas"},
{name: "Nobody", genere: "action", available: "yes", imagesource: "../assets/images/AAAABWMCnjvNyMwaiQjjvqAPQHABA9BnWsf_JGWBSPTOXHJGKPidu7va-KrBcrkEmXpY6CIDexb_wFXaDaD67t2jAqVAjXgyLg1HrvQ.jpg ", rating: 4.5, duration: "2h 30m", price: 9.99,link:"https://www.netflix.com/in/title/81207977",description:"A thankless job, disrespectful kids and passionless marriage suffocate a middle-aged everyman — until a home invasion awakens his lethal inner badass. Starring:Bob Odenkirk,Connie Nielsen,Aleksei Serebryakov"},
{name: "Bloodshot", genere: "action", available: "yes", imagesource: "../assets/images/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_QL75_UY281_CR18,0,190,281_.jpg", rating: 3.8, duration: "1h 45m", price: 7.99, link:"https://www.netflix.com/in/title/81171201",description:"A dead soldier is resurrected with new biotechnology and embarks on a mission of revenge in this sci-fi action drama based on the comic book series. Starring:Vin Diesel,Eiza González,Guy Pearce"},
{name: "Nightcrawler", genere: "thriller", available: "yes", imagesource: "../assets/images/p10939779_p_v8_ac.jpg", rating: 4.2, duration: "2h 15m", price: 8.49,link:"https://www.netflix.com/gb/title/70295182",description:"A young opportunist finds success prowling the nighttime streets of LA to film disasters and death. But the darkness he captures begins to take hold. Starring:Jake Gyllenhaal,Rene Russo,Riz Ahmed"},
{name: "Shutter Island", genere: "thriller", available: "yes", imagesource: "../assets/images/70095139.jpg", rating: 4.7, duration: "2h 10m", price: 9.99, link:"https://www.netflix.com/in/title/70095139",description:"While investigating a missing patient at a psychiatric facility, a US marshal gets caught in a web of deception and starts to question his reality. Starring:Leonardo DiCaprio,Mark Ruffalo,Ben Kingsley "},
{name: "Se7en", genere: "thriller", available: "yes", imagesource: "../assets/images/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", rating: 3.5, duration: "2h 5m", price: 7.99, link:"https://www.netflix.com/tr-en/title/950149",description:"Two detectives — an eager rookie and a jaded veteran — search desperately for a serial killer whose horrific crimes represent the Seven Deadly Sins. Starring:Brad Pitt, Morgan Freeman, Gwyneth Paltrow "},
{name: "Taxi Driver", genere: "thriller", available: "yes", imagesource: "../assets/images/taxi-driver-poster.webp", rating: 4.0, duration: "1h 50m", price: 8.49, link:"https://www.netflix.com/ae-en/title/18907685", description:"Martin Scorsese’s classic thriller stars Robert De Niro as New York cab driver Travis Bickle, whose rage, paranoia and obsession simmer into violence. Starring:Robert De Niro, Jodie Foster, Cybill Shepherd"},
{name: "The Devil All The Time", genere: "thriller", available: "yes", imagesource: "../assets/images/the-devil-all-the-time-button-1599065967250.jpg", rating: 3.2, duration: "2h 20m", price: 7.99, link:"https://www.netflix.com/in/title/81028870", description:"Sinister characters converge around a young man devoted to protecting those he loves in a postwar backwoods town teeming with corruption and brutality. Starring:Tom Holland,Bill Skarsgård,Riley Keough"},
{name: "The Guilty", genere: "thriller", available: "yes", imagesource: "../assets/images/large_EN-US_THE_GUILTY_Main_Vertical_27x40_RGB_PRE.jpg", rating: 4.9, duration: "2h 30m", price: 9.99, link:"https://www.netflix.com/in/title/81345983",description:"Sinister characters converge around a young man devoted to protecting those he loves in a postwar backwoods town teeming with corruption and brutality. Starring:Tom Holland,Bill Skarsgård,Riley Keough"},
{name: "Dune", genere: "sciencefiction", available: "yes", imagesource: "../assets/images/large_dune-poster.jpeg", rating: 4.3, duration: "2h 25m", price: 8.4, link:"https://www.netflix.com/ca/title/81199139",description:"Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis."},
{name: "Oxygen", genere: "sciencefiction", available: "yes", imagesource: "../assets/images/OXYGEN_Vertical_RGB_FR.webp", rating: 3.7, duration: "2h 15m", price: 7.99, link:"https://www.netflix.com/in/title/81277610",description:"After waking up in a cryogenic unit, Liz fights to survive and remember who she is before her oxygen runs out. Starring:Mélanie Laurent,Mathieu Amalric,Malik Zidi"},
{name: "The Midnight Sky", genere: "sciencefiction", available: "yes", imagesource: "../assets/images/The_Midnight_Sky_poster.png", rating: 4.6, duration: "2h 40m", price: 9.99,link:"https://www.netflix.com/in/title/80244645",description:"In the aftermath of a global catastrophe, a lone scientist in the Arctic races to contact a crew of astronauts with a warning not to return to Earth. Starring:George Clooney,Felicity Jones,David Oyelowo"},
{name: "Don't Look Up", genere: "sciencefiction", available: " yes", imagesource: "../assets/images/poster-dont-look-up-2021-photo-credit-netflix-the-hollywood-archive-2HA09WF.jpg", rating: 3.9, duration: "2h 5m", price: 8.49, link:"https://www.netflix.com/in/title/81252357",description:"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh. Starring:Leonardo DiCaprio,Jennifer Lawrence,Meryl Streep"},
{name: "Projected Power", genere: "sciencefiction", available: "yes", imagesource: "../assets/images/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_QL75_UX190_CR0,0,190,281_.jpg", rating: 4.2, duration: "2h 10m", price: 7.99, link:"https://www.netflix.com/in/title/80204465",description:"An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers. Starring:Jamie Foxx,Joseph Gordon-Levitt,Dominique Fishback"},
{name: "Spider Head", genere: "sciencefiction", available: "yes", imagesource: "../assets/images/MV5BYzBhOWU4ODAtZDYzYi00NDU1LWIzZWUtNDZmMDgxODljZTVmXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_QL75_UX190_CR0,0,190,281_.jpg", rating: 4.8, duration: "2h 15m", price: 9.99, link:"https://www.netflix.com/in/title/80210767",description:"A prisoner in a state-of-the-art penitentiary begins to question the purpose of the emotion-controlling drugs he's testing for a pharmaceutical genius. Starring:Chris Hemsworth,Miles Teller,Jurnee Smollett"},
{name: "The Pale Blue Eye", genere: "horror", available: "yes", imagesource: "../assets/images/The-Pale-Blue-Eye-Christian-Bale-691x1024.jpg", rating: 3.6, duration: "1h 55m", price: 8.49, link:"https://www.netflix.com/in/title/81444818", description:"A retired detective recruits an astute West Point cadet named Edgar Allan Poe to help him solve a grisly murder mystery at the U.S. Military Academy. Starring:Christian Bale,Harry Melling,Gillian Anderson"},
{name: "Last Night in Soho", genere: "fantasy", available: "yes", imagesource: "../assets/images/p17668751_v_h9_af.jpg", rating: 4.1, duration: "2h 25m", price: 7.99, link:"https://www.netflix.com/in/title/81198948", description:"A fashion student dreams herself into the 1960s, where she meets a dazzling singer. But her ritzy, nightly reverie soon starts to rip apart at the seams. Starring:Thomasin McKenzie,Anya Taylor-Joy,Matt Smith"},
{name: "1922", genere: "horror", available: "yes", imagesource: "../assets/images/1922_poster.webp", rating: 3.5, duration: "2h 30m", price: 9.99, link:"https://www.netflix.com/in/title/80135164",description:"A farmer pens a confession admitting to his wife's murder, but her death is just the beginning of a macabre tale. Based on Stephen King's novella. Starring:Thomas Jane,Molly Parker,Dylan Schmid "},
{name: "Texas Chainsaw Massacre", genere: "horror", available: "yes", imagesource: "../assets/images/Texas_Chainsaw_Massacre-465511213-large.jpg", rating: 4.3, duration: "2h 20m", price: 8.49,link:"https://www.netflix.com/in/title/81483977",description:"In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin. Starring:Sarah Yarkin,Elsie Fisher,Mark Burnham"},
{name: "Constantine", genere: "fantasy", available: "yes", imagesource: "../assets/images/qYTerimWp1t1zSEKknn9mByhwbX.jpg", rating: 4.0, duration: "1h 50m", price: 7.99, link:"https://www.netflix.com/in/title/70019508",description:"A chain-smoking, world-weary demon hunter helps a cop investigate her sister's death, plunging them into a plot involving the forces of heaven and hell. Starring:Keanu Reeves,Rachel Weisz,Shia LaBeouf"},
{name: "Truth or Dare", genere: "fantasy", available: "yes", imagesource: "../assets/images/y8z4hoccu9ioqgohirmt.jpg", rating: 3.8, duration: "2h 40m", price: 9.99, link:"https://www.netflix.com/title/80218099",description:"Olivia, Lucas and a group of their college friends travel to Mexico for one last getaway before graduation. While there, a stranger convinces one of the students to play a seemingly harmless game of truth or dare with the others."},
{name: "Outside The Wire ", genere: "war", available: "yes", imagesource: "../assets/images/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg", rating: 4.2, duration: "2h 10m", price: 7.99, link:"https://www.netflix.com/in/title/81074110",description:"In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack. Starring:Anthony Mackie,Damson Idris,Emily Beecham"},
{name: "The King", genere: "war", available: "yes", imagesource: "../assets/images/MV5BMTc4MTU4YzEtODBiNC00NzA4LTg0NGItM2ZhZjZlNDFiNjJjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", rating: 4.8, duration: "2h 15m", price: 9.99, link:"https://www.netflix.com/in/title/80182016",description:"Wayward Prince Hal must turn from carouser to warrior king as he faces hostilities from inside and outside the castle walls in the battle for England. Starring:Timothée Chalamet,Joel Edgerton,Robert Pattinson"},
{name: "Sand Castle ", genere: "war", available: "yes", imagesource: "../assets/images/Sand_Castle-401145921-mmed.jpg", rating: 3.6, duration: "1h 55m", price: 8.49, link:"https://www.netflix.com/in/title/80118916", description:"After the invasion of Iraq in 2003, a reluctant soldier's platoon is dispatched on a dangerous mission to repair a hostile village's water system. Starring:Nicholas Hoult,Logan Marshall-Green,Henry Cavill"},
{name: "All Quiet On the Western Front ", genere: "war", available: "yes", imagesource: "../assets/images/AAAABXr1kA6H-bicm_NLHEAxN5_KsSgUS7qEVtgcwJnzOtULjlK8PosoKnxcL4PM8bFfc_HSENKrPAwrLGKgII6tAidJOaTVuzz56T8vw2LM7i274mu6IqPGIzlLrsLWynvZX5TVUw.jpg", rating: 4.1, duration: "2h 25m", price: 7.99, link:"https://www.netflix.com/in/title/81260280", description:"When 17-year-old Paul joins the Western Front in World War I, his initial excitement is soon shattered by the grim reality of life in the trenches. Starring:Felix Kammerer,Albrecht Schuch,Aaron Hilmer"},
{name: "War Machine", genere: "war", available: "yes", imagesource: "../assets/images/ab67616d0000b27330fe8fdb3f4718fdb3e4e62f.jpg", rating: 3.5, duration: "2h 30m", price: 9.99, link:"https://www.netflix.com/in/title/80068327",description:"When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy. Starring:Brad Pitt,Topher Grace,Emory Cohen"},
{name: "Jurrasic Park", genere: "adventure", available: "yes", imagesource: "../assets/images/AAAABVe3XeyaUyvvnnIAhVCtMXOoUgLvJBCexjG4wDrXBTfPRqtJwXB6OcIRZq3P-8gAHzlre39nEhFMu6HNhkRe_V5mANozTqZClr0R.jpg", rating: 4.3, duration: "2h 20m", price: 8.49,link:"https://www.netflix.com/in/title/60002360",description:"Science, sabotage and prehistoric DNA collide when cloned dinosaurs escape their enclosures at a top-secret theme park and begin preying on the guests. Starring:Sam Neill,Laura Dern,Jeff Goldblum"},
{name: "The Revenant ", genere: "adventure", available: "yes", imagesource: "../assets/images/p11598208_v_h9_ak.jpg", rating: 4.0, duration: "1h 50m", price: 7.99, link:"https://www.netflix.com/za/title/80064516",description:"In the 1820s, a fur trapper struggles for survival to exact retribution against a ruthless mercenary who left him to die along the Missouri River. Starring:Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson"},
{name: "A Man Called Otto ", genere: "drama", available: "yes", imagesource: "../assets/images/MV5BNzJmMjg3MDMtNTg0Yy00NjA4LWI2MGMtYmRlZjliNTc3ZjIyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg", rating: 3.8, duration: "2h 40m", price: 9.99, link:"https://www.netflix.com/in/title/81616256",description:"Enraged by the world and hardened by grief, a cranky retiree plots his own demise but is foiled when a lively young family bursts into his life. Starring:Tom Hanks,Mariana Treviño,Rachel Keller"},
{name: "The Glass Castle", genere: "drama", available: "yes", imagesource: "../assets/images/the-glass-castle-poster0.jpg", rating: 3.5, duration: "2h 30m", price: 9.99, link:"https://www.netflix.com/title/80176319",description:"The Glass Castle is a remarkable memoir of resilience and redemption, and a revelatory look into a family at once deeply dysfunctional and uniquely vibrant."},
{name: "Blame", genere: "anime", available: "yes", imagesource: "../assets/images/BLAME_KA_US.jpg", rating: 4.3, duration: "2h 20m", price: 8.49,link:"https://www.netflix.com/in/title/80115466",description:"Inside a vast, self-replicating city bent on eliminating all life, mysterious loner Killy emerges to guide a remnant of humanity desperate to survive. Starring:Takahiro Sakurai,Kana Hanazawa,Sora Amamiya"},
{name: "A Whisker Away", genere: "anime", available: "yes", imagesource: "../assets/images/large_whisker-away-poster.png", rating: 4.0, duration: "1h 50m", price: 7.99, link:"https://www.netflix.com/in/title/81281872",description:"A peculiar girl transforms into a cat to catch her crush's attention. But before she realizes it, the line between human and animal starts to blur.Starring:Mirai Shida,Natsuki Hanae,Hiroaki Ogi"},
{name: "A Silent Voice ", genere: "anime", available: "yes", imagesource: "../assets/images/A_Silent_Voice_Film_Poster.jpg", rating: 3.8, duration: "2h 40m", price: 9.99, link:"https://www.netflix.com/kr-en/title/80223226",description:"A former class bully reaches out to the Deaf girl he'd tormented in grade school. He feels unworthy of redemption but tries to make things right. Starring:Miyu Irino, Saori Hayami, Aoi YukiCreators:Yoshitoki Oima"},  
]

  getAllMovies():number
  {
     return this.movies.length;
  }

  getAllAction():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="action"
    }).length
  }

  getAllThriller():number
  {
    return this.movies.filter((movie)=>{

    return movie.genere==="thriller"
    }).length
  }
  
  getAllHorror():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="horror"
    }).length
  }

  getAllDrama():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="drama"
    }).length
  }

  getAllAdventure():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="adventure"
    }).length
  }
  getAllFantasy():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="fantasy"
    }).length
  }

  getAllAnime():any
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="anime"
    }).length
  }
  getAllScienceFiction():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="sciencefiction"
    }).length
  }

  getAllWar():number
  {
    return this.movies.filter((movie)=>{

      return movie.genere==="war"
    }).length
  }

  countRadio:string="all";

  getCount(data:string)
  {
    this.countRadio=data;
  }

movieSearch:string=" ";

getMovieSearched(searched:string)
{
   this.movieSearch= searched;
}


  

}
