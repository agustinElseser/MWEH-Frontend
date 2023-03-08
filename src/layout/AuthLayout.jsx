import { Outlet, Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import SimpleSlider2 from "../../components/Slider2";
import MostrarProyectos from "../../components/ExplorarProyects";
import Fooder from "../../components/Fooder";
import { AppContext } from "../context/AppContext";
import Menu from "../../components/Menu";

const AuthLayout = () => {
  const explore = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const { state, exploreMain } = useContext(AppContext);

  useEffect(() => {
    exploreMain();
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Menu className="mobile-only" />
      <div>
        <div className="a1">
          <SimpleSlider2 />
        </div>

        <div className="container a2">
          <div className="iconos-con">
            <Outlet />
          </div>
          <div className="nav">
            <div className="logo">
              <p>WORLD'S MOST EXTRAORDINARY HOMES</p>
            </div>

            <div className="sections mobile-only desktop-only">
              <NavLink onClick={() => scrollToSection(explore)} to={""}>
                EXPLORE
              </NavLink>
              <NavLink onClick={() => scrollToSection(about)} to={""}>
                ABOUT
              </NavLink>

              <NavLink onClick={() => scrollToSection(contact)} to={""}>
                CONTACT
              </NavLink>

              {state.logged == false ? (
                <NavLink className="" to="/login">
                  LOGIN
                </NavLink>
              ) : (
                <NavLink className="" to="/admin">
                  PROFILE
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>

      <div ref={explore} className="a0">
        <MostrarProyectos />
      </div>

      <div ref={about} className="a0 ">
        <div className="text10">
          <br />
          <br />
          <hr />
          World's most extraordinary homes is a website developed by applying
          the technologies acquired in my training as a programmer, the result
          is a product that brings together my two passions. <br></br>The idea
          is to show housing projects around the world that have a unique
          architectural design, whether due to materiality, location or
          structure. Although the base projects have been my choice, it should
          be clarified that the images are not my own, but rather taken from
          third-party websites. <br></br>To add interaction with visitors, they
          can create a user and upload projects that they find interesting,
          adding these automatically to the app feed.
          <hr />
          <br />
          <br />
        </div>

        <p className="text11">
          <span className="italy">
            <b>
              " The magic of the true and the real The title of the talk,
              Atmospheres, emanates from the following: what is properly
              architectural quality?
            </b>
            <br></br>
            It is relatively easy for me to say: architectural quality is not,
            for me, to be included among the leaders of architecture, to be
            published, etc. For me, architectural reality can only be about
            whether a building moves me or not.<br></br> What moves me about
            this building? How can I project something like that? How can I
            project something similar to the space in this photograph? How can
            things be projected with such presence, beautiful and natural things
            that move me over and over again? <br></br>The concept to designate
            it is that of 'atmosphere'. We all know him very well: we see a
            person and we have a first impression of him. I have learned not to
            trust that first impression; you have to give it a try. Now I am a
            little older, I must say that I am left with the first impression
            again.<br></br> Something similar happens with architecture. I enter
            a building, I see a space and I perceive an atmosphere, and, in
            split seconds, I have a feeling of what it is. <br></br>The
            atmosphere speaks to an emotional sensitivity, a perception that
            works at an incredible speed and that we human beings have to
            survive. <br></br>Not in all situations do we want to think for a
            long time about whether we like it or not, about whether or not we
            should run away from there. There is something inside us that
            immediately tells us a lot of things; an immediate understanding, an
            immediate contact, an immediate rejection.
            <br></br>
            So you can see what I mean by this: “It's Holy Thursday 2003. Here I
            am, sitting in a square in the sun, a large arcade, long, high,
            beautiful under the sun. The square - in front of houses, church,
            monuments - like a panorama before my eyes. Behind me the wall of
            the cafe. The right density of people. A flower market. Sun. Eleven.
            The face in front of the square in shadow, of a calm bluish color.
            Wonderful noises: nearby conversations, footsteps in the square, on
            the stone, birds, the slight murmur of the crowd, no cars, no roar
            of engines, occasionally distant sounds of a construction site. I
            guess the start of the holidays has already slowed down people's
            steps. Two nuns cross the square gesticulating, walking briskly,
            their headdresses fluttering slightly, each carrying a plastic bag.
            The temperature: pleasantly cool, and warm. I am sitting under the
            arcade, on a pale green upholstered sofa, in the square, the bronze
            statue on its high pedestal in front of me with its back to me,
            looking, as I do, at the church with its two towers. The two towers
            of the church have a different top; they start being the same at the
            bottom and, as they go up, they start to differ. One of them is
            taller and has a gold crown around the end of the dome. Soon Blanca
            will come, diagonally across the square from the right. Now, what
            moved me there? Everything, the things, the people, the air, the
            noises, the colors, the material presences, the textures, and also
            the forms. Ways I can understand. Forms I can try to read. Forms
            that I find beautiful. And what else has moved me? My own state of
            mind, my feelings, my expectations when I was sitting there. That
            famous phrase that refers to Plato comes to mind: “Beauty is in the
            eyes of the beholder”. That is to say: everything is only within me.
            But then I do the experiment of taking the place in front of me, and
            I don't have the same feelings anymore. A simple experiment. The
            truth is that, by taking the place from me, my feelings disappear
            with it. I would never have had such feelings without that
            atmosphere of the square. Logical. There is an exchange between
            people and things. With this I have to deal as an architect. And I
            think: this is my passion. There is a magic of the real. I know very
            well the magic of thought. And the passion of beautiful thought. But
            I am referring to something that I often find more incredible: the
            magic of the true and the real. <br></br>Carrying out this task of
            creating architectural atmospheres also has an artisanal side. In my
            work there has to be a procedure, some interests, some instruments,
            some tools. I look at myself now and tell you what I have found
            along the way, which leads me in a direction when I try to generate
            that atmosphere in my works. These responses are highly personal; I
            don't have others. They are highly sensitive and individual; In
            fact, they are probably the product of my own personal
            sensitivities, which lead me to do things in a certain way."
          </span>
          <br></br>
          <br></br>
          <span>
            <b>
              “ATMOSFERAS. Entornos Arquitectónicos - Las cosas a mi alrededor”
            </b>
            <br></br> Arq. PETER ZUMTHOR - Born in Basel, he trained as a
            cabinetmaker and architect in Basel and New York. He is a professor
            at the Academia di Architettura, Universita della Svizzera Italiana,
            Mendrisio.
          </span>
        </p>
        <br />
        <br />
      </div>

      <div ref={contact}>
        <Fooder />
      </div>
    </>
  );
};

export default AuthLayout;
