import Image from "next/image";
import faces from "./faces.png";
import partifulogo from "./partfiul.png"
import fontsketchaf from "./font-sketch-af.png";
import fontsketchcy from "./fontsketchcy.png";
import partyguestsaf from "./party-guests-af.png";
import themesketchcy from "./themesketchcy.png";
import themesketchvl from "./themesketchvl.png";
import themesketchtj from "./themesketchtj.png";
import songsketchcy from "./songsketchcy.png";
import songsketchtj from "./songsketchtj.png";

function Link({ text, href }: { text: string, href: string }) {
  return <a className="text-dark-blue cursor:pointer hover:opacity-70 underline" target="_blank" href={href}>{text}</a>
}

export default function Handin() {
  return (
    <div className="c-column">
      <main className="l-column p-36 gap-36 max-w-[80vw]">
        <div className="row items-center justify-between">
          <div>
            <h1 className="text-32 font-bold"> A Partiful Exploration of the Event Customization Page </h1>
            <h2 className="text-14 mt-[4px]"> By: Alexis Fry, Claire Yang, Tiger Ji, Vivian Li </h2>
          </div>

          <Image src={partifulogo} className="rounded border border-black ml-16" width={69} alt="partiful logo"/>
        </div>

        <section className="l-column gap-14">
          <h2 className="text-20 font-bold"> Overview </h2>
          <p className="text-14">
            Partiful is one of the most popular event planning platforms targeted towards the Gen Z and Millennial demographic.
            Compared to competitors like Eventbrite and Facebook, Partiful is highly customizable, enabling users
            to truly capture the vibe of their party or event and delight their guests. 
          </p>

          <p className="text-14">
            Our group was tasked with designing new additions to Partiful&apos;s Event Customization Page,
            which is where users create and customize their events before inviting guests. In particular, our goal was to
            make the page customization experience even more &quot;Partiful&quot; — to prompt unexpected delight, irreverence, and FUN! 💃🕺
          </p>

          <p className="text-14 italic">
            Note: since Partiful has an established platform and design system, our aim was not a complete redesign. Instead, our goal was to introduce
            new, additional features on top of the existing interface and functionality that would enhance the user experience of event page customizations.
          </p>
        </section>

        <section className="l-column gap-14">
          <h2 className="text-20 font-bold"> Part I: Ideation & Sketching </h2>
          <p className="text-14">
            To kickstart the design process, we began by examining the existing features Partiful offers and brainstorming a laundry list of potential features
            to add to the Partifulines of the event customization page. Eventually, we arrived at the following set of ideas to start:
          </p>
          <div className="grid grid-cols-[auto_1fr]">
            <ul className="text-14 list-disc list-inside ml-24">
              <li> Incorporating music into the invite pages sent to guests </li>
              <li> Title font customization </li>
              <li> Animated or interactive cover images (e.g. by including guest faces in the image) </li>
              <li> Custom page theme generators, either through AI or a color/gradient selector </li>
              <li> Custom emojis/messages for RSVP-ing to events </li>
              <li> Ability to tag events (e.g. by rave, birthday, etc.) </li>
              <li> Custom layout options for invite pages, possibly creatable via a drag-and-drop interface </li>
            </ul>

            <div className="c-column m-12">
              <Image src={faces} className="rounded border border-black" width={230} alt="Image of face cutouts for cover image" />
              <p className="text-12 mt-8"> Maybe something like this could be partiful... 🧐 </p>
            </div>
          </div>

          <p className="text-14">
            Below are some sketches to demonstrate some example flows for some of these features:
          </p>

          <p className="text-14 font-bold underline">
            Font Customization
          </p>
          <div className="row gap-24">
            <Image src={fontsketchaf} className="rounded border border-black" width={500} alt="font sketch" />
            <Image src={fontsketchcy} className="rounded border border-black" width={500} alt="font sketch" />
          </div>

          <p className="text-14 font-bold underline">
            Theme Customization
          </p>
          <div className="row gap-24">
            <Image src={themesketchvl} className="rounded border border-black" width={500} alt="theme sketch" />
            <div className="l-column gap-12">
              <Image src={themesketchtj} className="rounded border border-black" width={400} alt="theme sketch" />
              <Image src={themesketchcy} className="rounded border border-black" width={400} alt="theme sketch" />
            </div>
          </div>

          <p className="text-14 font-bold underline">
            Music Customization
          </p>
          <div className="row gap-24">
            <Image src={songsketchcy} className="rounded border border-black" width={400} alt="song sketch" />
            <Image src={songsketchtj} className="rounded border border-black" width={700} alt="song sketch" />
          </div>

          <p className="text-14">
            In the end, we decided to adopt aspects from sketches X, Y, and Z for our final set of wireframes,
            which showcase our initial designs for the features for adding music, changing fonts, and customizing the page theme.
            The main design considerations for each feature we added are as follows:
          </p>

          <div className="grid grid-cols-3 gap-20 p-16">
            <div>
              <p className="text-14 font-bold underline">
                Music
              </p>
              <p className="text-14">
                We decided to go with adding music on top of the title, instead of on the side toolbar, as we believed that from the invitee’s perspective, the option to play and pause the music would be more intuitive to find when located above the title.
              </p>
            </div>

            <div>
              <p className="text-14 font-bold underline">
                Fonts
              </p>
              <p className="text-14">
                We narrowed down our design to either utilize the larger modal or the smaller side pop-up, and we eventually decided on using the smaller side pop-up since it would allow users to view the effect of changing the title font without having to constantly open/close a modal.
              </p>
            </div>

            <div>
              <p className="text-14 font-bold underline">
                Theme Customization
              </p>
              <p className="text-14">
                We decided on keeping both options for creating custom themes: using generative AI and a gradient/color selector, as we believed that the additional flexibility to allow users to craft their invitations to their liking would encourage them to use Partiful over other software lacking similar levels of theme customization.
              </p>
            </div>
          </div>

          <p className="text-14">
            We decided not to go with our cover image customization and other laundry list items, mostly either due to us perceiving the features as either more technically difficult to implement (for engineers) or simply less of a priority for Partiful as a business.
          </p>
        </section>

        <section className="l-column gap-14">
          <h2 className="text-20 font-bold"> Part II: Initial Wireframing & Critiques </h2>

          <p className="text-14"> Based off our initial ideation, discussion, and sketches, our first wireframes can be seen below (through an embedded Figma file): </p>
          <div className="row justify-center p-24">
            <iframe className="rounded border border-black" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEXqpM6BdrTVXCAXFY9El4c%2FPartiful-Event-Page-Initial-Wireframes%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DhUzUNXtwndzxZhmY-1" />
          </div>

          <p className="text-14">
            After recording an overview of our designs with Loom and sharing it with others through studio or email, we received the following critiques:
          </p>

          <div className="grid grid-cols-2 gap-20 p-16">
            <div>
              <p className="text-14 font-bold underline">
                From Partiful:
              </p>

              <ul className="text-14 list-disc list-inside">
                <li> 
                  They were slightly opposed to the complexity of the AI generation and vast range of
                  options for creating a custom color/gradient theme background, citing concerns of low contrast,
                  poor readability, and clutteredness of the theme customization UI
                </li>
                <li>
                  Instead, they preferred for us to incorporate the color customization into their existing themes,
                  e.g. by being able to add a hue to slightly modify the theme color
                </li>
                <li> 
                  They also suggested a slight pivot in our creative direction, preferring the “partifuliness” of the
                  custom cover images showcasing guest/host faces
                </li>
              </ul>
            </div>

            <div>
              <p className="text-14 font-bold underline">
                From CSCI 1300 studio:
              </p>
              <ul className="text-14 list-disc list-inside">
                For the most part, peer feedback was mostly positive — the main points of potential change/critique were:
                <li> 
                  Concern about whether adding a pulsing cover image animation along with the music would be too distracting
                </li>
                <li>
                  Potentially shortening the flow for picking a song, since the current modal to do so is multi-page
                </li>
                <li> 
                  Consider adding even more customization options, such as drag-and-drop builders for a more personalized template
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="l-column gap-14">
          <h2 className="text-20 font-bold"> Part III: Revisions & High-Fidelity Wireframing </h2>

          <p className="text-14"> After taking our previous round of feedback into account, we developed some more refined, <Link text="high-fidelity prototypes" href="https://www.figma.com/file/MLnCI2LS5FmgL1VJp4JFhV/Partiful-Event-Page?type=design&node-id=0-1&mode=design&t=CofY9JqEh5z9ly3W-0" /> for our proposed features, shown below: </p>

          <div className="row justify-center p-24">
            <iframe className="rounded border border-black" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMLnCI2LS5FmgL1VJp4JFhV%2FPartiful-Event-Page%3Ftype%3Ddesign%26node-id%3D1%253A2%26mode%3Ddesign%26t%3DUpikyBu5ie0ivu51-1" />
          </div>

          <p className="text-14">
            Our style guide covers Partiful&apos;s established design system as well as our component and icon additions. Any elements that we added to the interface were uniform with Partiful’s existing event page interface. All of the fonts, accent colors, and existing components as well as their interactive states did not change. 
          </p>

          <p className="text-14">
            Our main changes that we adopted from the critiques were:
          </p>

          <ul className="text-14 list-disc list-inside ml-24">
            <li> We agreed with the feedback on the theme customization and decided to scrap our original AI and gradient ideas, instead implementing a similar interface with a simple slider to adjust the hue for each individual theme </li>
            <li> We also decided to add the feature for interactive cover images (particularly, those with face cutouts) as it seemed particularly “Partiful” in inducing unexpected delight from guests </li>
            <li> We ended up rejecting the studio feedback suggestions for more custom layouts, as we believed that the increase in layout options was more likely to be overwhelming for users while providing little benefit in “Partiful” expressiveness. </li>
            <li> We also were fine with the multi-page modal of the song selection flow, as combining everything into a single page modal didn’t seem necessary and would possibly lead to information overload </li>
          </ul>

        </section>

        <section className="l-column gap-14">
          <h2 className="text-20 font-bold"> Part IV: Final Founder Feedback & Next Steps </h2>

          <p className="text-14">
            After our final rounds of revisions and high-fidelity wireframing, we met with designers, engineers, and founders 
            at Partiful to showcase our work. Overall, while received praise for our innovative designs which captured the &quot;Partiful&quot;
            spirit, we received a few points of feedback for each of our final flows:
          </p>

          <p className="text-14 underline">
            Flow 1: Theme Hue Customization
          </p>
          <p className="text-14">
            Problem: How to reset the theme to its original state is unclear from the current hue slider
          </p>
          <p className="text-14">
            Solution: To fix this potential pain point, we decided that clicking the selected theme again or making the hue bar sticky could be mechanisms to revert the theme to its default color
          </p>

          <p className="text-14 underline">
            Flow 2: Title Font Customization
          </p>
          <p className="text-14">
            Problem: The current font side pop up would likely not work with the small left margins on a mobile screen 
          </p>
          <p className="text-14">
            Solution: We agreed that making the font a pop up that goes right on top of the title font section and has a horizontal scroll could solve this responsiveness issue
          </p>

          <p className="text-14 underline">
            Flow 3: Music
          </p>
          <p className="text-14">
            Problem: The pop up for choosing an event theme song blocks the cover image, which makes the pulse animation difficult to preview unless the user fully exits the pop up + It is unclear that the song clip duration selector is a drop down
          </p>
          <p className="text-14">
            Solution: To fix this potential pain point, we decided that clicking the selected theme again or making the hue bar sticky could be mechanisms to revert the theme to its default color
          </p>

          <p className="text-14 underline">
            Flow 4: Partiful Your Guests
          </p>
          <p className="text-14">
            Problem: While the font cover image and back “Partiful your guests” image flip on click, that clickable interaction is hard to realize for the user 
          </p>
          <p className="text-14">
            Solution: We successfully proposed that the cover could automatically flip every 5 seconds, although that could become overboard with the pulsing, or that there could be some icon to indicate the cover is flippable  
          </p>


          <p className="text-14">
            If time permits, we would love to take this feedback into account and apply them to our Figma designs to 
            further improve upon our existing wireframes!
          </p>
        </section>

        <section className="l-column gap-14">
          <h2 className="text-20 font-bold"> Reflection </h2>
          <p className="text-14">
            Overall, we had a ton of fun with this project and loved the experience working with Partiful (whose product we all use)!
          </p>

          <p className="text-14">
            The most valuable part of the iterative design process was receiving really specific, thoughtful feedback from our points of contact.
            We saw how important good feedback is as it illuminated crucial blind spots for us to consider that enabled us to refine and ultimately build a better product.
            Although we know that Partiful is more focused on building out the robustness of user networking on the platform to get more users right now,
            we hope that some of our ideas are implemented at some point. Regardless, we want to give Partiful a huge shoutout for giving us this wonderful
            opportunity to work with them on this project for the past few weeks!
          </p>
        </section>

      </main>
    </div>
  )
}