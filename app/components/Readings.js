var React = require('react');
var ReadingsImg = require('./../images/readings.jpg');

function Readings () {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={ReadingsImg} alt="Upcoming and Past Readings" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h6 className="section-header">{'UPCOMING READINGS'}</h6>
            <p>{'To set up a reading or speaking engagement, email Tabia Yapp, '}<a href="mailto:t@beotis.com">{'t@beotis.com'}</a>{'.'}</p>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'MAY 24, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'FEATURED READING'}</h6>
                <p>{' with Peter Cole.'}<br/>{'Los Angeles, CA.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'JUL 25, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'BRYANT PARK READING SERIES'}</h6>
                <p>{'with Kazim Ali, John Andrews, Kazumi Chin, Michelle Lin.'}<br/>{'Bryant Park, NY.'}</p>
              </div>
            </div>
            <h6 className="section-header">{'PAST READINGS'}</h6>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'MAY 12, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'OPEN BOOKS READING'}</h6>
                <p>{'with Jennifer Cheng and Paige Lewis.'}<br/>{'Seattle, WA.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'APR 28-29, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'SLASH PINES WRITERS FESTIVAL'}</h6>
                <p>{'Tuscaloosa, Alabama.'}</p>
              </div>
            </div>
            <a href="https://poetsinpajamas.wordpress.com/about/" title="Poets in Pajamas April 23, 2017">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'APR 23, 2017'}</h6>
                </div>
                <div className="reading-info">
                  <h6 className="normal">{'POETS IN PAJAMAS'}</h6>
                  <p>{'Virtual Reading'}</p>
                </div>
              </div>
            </a>
            <a href="http://pulitzerarts.org/" title="Pulitzer Arts Foundation Reading April 21, 2017">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'APR 21, 2017'}</h6>
                </div>
                <div className="reading-info">
                  <h6 className="normal">{'PULITZER ARTS FOUNDATION READING'}</h6>
                  <p>{'with Anselm Berrigan.'}<br/>{'3716 Washington Boulevard, St. Louis, MO 63108.'}</p>
                </div>
              </div>
            </a>
            <a href="https://www.poetryproject.org/events/kaveh-akbar-tom-comitta/" title="St. Mark's Poetry Project Reading April 3, 2017">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'APR 3, 2017'}</h6>
                </div>
                <div className="reading-info">
                  <h6 className="normal">{'ST. MARK\'S POETRY PROJECT READING'}</h6>
                  <p>{'with Tom Comitta.'}<br/>{'131 E. 10th Street, New York, NY.'}</p>
                </div>
              </div>
            </a>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'APR 1, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'WASP QUEEN LAUNCH READING'}</h6>
                <p>{'with Claudia Cortese.'}<br/>{'LGBT Center in Chelsea, 208 W 13th St, New York, NY.'}</p>
              </div>
            </div>
            <a href="http://aaww.org/curation/workshop-mining-the-poetic-unconscious-with-kaveh-akbar/" title="Mining the Poetic Unconscious Workshop March 31, 2017">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'MAR 31, 2017'}</h6>
                </div>
                <div className="reading-info">
                  <h6 className="normal">{'MINING THE POETIC UNCONSCIOUS WORKSHOP'}</h6>
                  <p>{'Asian American Writers Workshop. AAWW,'}<br/>{'112 W 27th St #600, New York, NY.'}</p>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com/events/1268209929943058/" title="NYU Reading March 30, 2017">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'MAR 30, 2017'}</h6>
                </div>
                <div className="reading-info">
                  <h6 className="normal">{'NYU READING'}</h6>
                  <p>{'with Safia Elhillo.'}<br/>{'60 Washington Sq S, New York, NY 10012-1019.'}</p>
                </div>
              </div>
            </a>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'MAR 7, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'BLACK DOG READING'}</h6>
                <p>{'with Keegan Lester, Jayme Ringleb, Isabelle Shepherd, Paige Lewis.'}<br/>{'Black Dog on the Square, Tallahassee, FL.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'MAR 2, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'SPRING RUCKUS: A POETIC EMPOWERMENT'}</h6>
                <p>{'with Mahogany Browne, John Murillo, Nicole Sealey, David Tomas Martinez, Denise Frohman, and Sarah Gambito.'}<br/>{'Housingworks Bookstore, New York, NY.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'FEB 8-11, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6 className="normal">{'AWP READINGS, VARIOUS.'}</h6>
                <p>{'Washington DC.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'JAN 20, 2017'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'POETS FIGHT BACK'}</h6>
                <p>{'with Paige Lewis, Sandra Simonds, Jay Snodgrass, Michael Rothenberg.'}<br/>{'567 Industrial Dr, Tallahassee, FL'}</p>
              </div>
            </div>
            <a href="https://www.facebook.com/events/649291465230504/" title="A Tribute To Max Ritvo November 9, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'NOV 9 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'A TRIBUTE TO MAX RITVO'}</h6>
                  <p>{'with Jean Valentine, Timothy Donnelly, Sarah Ruhl, Dorothea Lasky, and Cynthia Zarin.'}<br/>{'National Arts Club, 15 Gramercy Park S, New York, NY.'}</p>
                </div>
              </div>
            </a>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'NOV 5 2016'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'A CELEBRATION OF MAX RITVO'}</h6>
                <p>{'with Jane Mead, Gabrielle Calvocoressi, Robyn Schiff, Justin Boening, Devon Walker-Figueroa, and Michael Bazzett.'}<br/>{'15 S. Dubuque St, Iowa City, IA.'}</p>
              </div>
            </div>
            <a href="http://kgbbar.com/bar" title="KGB Reading Series October 31, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'OCT 31 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'KGB READING SERIES'}</h6>
                  <p>{'with Rae Armantrout.'}<br/>{'KGB Bar, 85 E 4th St, New York, NY 10003.'}</p>
                </div>
              </div>
            </a>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'OCT 20-23 2016'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'DODGE POETRY FESTIVAL'}</h6>
                <p>{'Newark, New Jersey.'}</p>
              </div>
            </div>
            <a href="https://www.emilydickinsonmuseum.org/amherstpoetryfestival" title="Amherst Poetry Festival September 17, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'SEP 17 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'AMHERST POETRY FESTIVAL'}</h6>
                  <p>{'Amherst, MA.'}</p>
                </div>
              </div>
            </a>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'APR 2 2016'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'PRAIRIE SCHOONER ALL-STAR RECEPTION'}</h6>
                <p>{'with Rick Barot, Jericho Brown, Cynthia Cruz, Dorothea Lasky, Michael Martone, Safiya Sinclair, Sandra Simonds, Ursula Villarreal-Moura.'}<br/>{'R Bar, Los Angeles. CA.'}</p>
              </div>
            </div>
            <a href="https://www.facebook.com/events/473031246225429/" title="Bennington Review Launch Reading April 1, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'APR 1 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'BENNINGTON REVIEW LAUNCH READING'}</h6>
                  <p>{'with Natalie Diaz, Kwame Dawes, Matthew Dickman, Meghan O’Rourke, Ruth Madievsky, and Shann Ray.'}<br/>{'AWP, Los Angeles, CA.'}</p>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com/events/966833433385179/" title="The Offing/Muzzle/Vinyl Reading March 31, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'MAR 31 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'THE OFFING/MUZZLE/VINYL READING'}</h6>
                  <p>{'with Cam Awkward-Rich, Tiana Clark, Jayy Dodd, Natalie Eilbert, francine j. harris, Airea D. Matthews, Paula Mendoza, Gala Mukomolova, Christina Olivares, Jose Olivares, and Casey Rocheteau.'}<br/>{'Los Angeles, CA.'}</p>
                </div>
              </div>
            </a>
            <a href="http://www.mrhippresents.com/" title="Mr. Hip Presents January 31, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'JAN 31 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'MR. HIP PRESENTS'}</h6>
                  <p>with Donald Vincent, Kate Layte, Michael Medeiros, and Richard Hoffman.
                    <br/>{'UForge Art Gallery. Boston, MA.'}</p>
                </div>
              </div>
            </a>
            <a href="https://allevents.in/brooklyn/montes%7Cakbar%7Cstone%7Cdeloma%7Cfitzpatrick-reading-at-berls/1553093091675846" title="Berl's Brooklyn Poetry Shop Reading January 29, 2016">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'JAN 29 2016'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'BERL\'S BROOKLYN POETRY SHOP READING'}</h6>
                  <p>{'with Roberto Montes, Bianca Stone, and Jameson Fitzpatrick.'}<br/>{'Berl’s Brooklyn Poetry Book Shop. Brooklyn, NY.'}</p>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com/events/1639666036302172/" title="Series November 2015">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'NOV 2015'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'SERIES'}</h6>
                  <p>{'with Rachel Sahaidachny, Steve Henn, and Bree Jo’ann.'}<br/>{'PRINTtEXT, Indianapolis, IN.'}</p>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com/events/754010218061394/" title="Prelude 2 Launch Reading November 2015">
              <div className="reading d-flex flex-row">
                <div className="reading-date">
                  <h6>{'NOV 2015'}</h6>
                </div>
                <div className="reading-info">
                  <h6>{'PRELUDE 2 LAUNCH READING'}</h6>
                  <p>{'with Angel Nafis, Jason Koo, Shira Erlichman, Katy Lederer, Matt Longabucco, and Diana Hamilton.'}<br/>{'Baby’s All Right, Brooklyn, NY.'}</p>
                </div>
              </div>
            </a>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'NOV 2015'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'BERL\'S BROOKLYN POETRY SHOP READING'}</h6>
                <p>{'with Kathleen Ossip, Joshua Mehigan, Leah Umansky, and Paige Lewis.'}<br/>{'Berl’s Brooklyn Poetry Shop, Brooklyn, NY.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'JUL 2015'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'WAREHOUSE READING SERIES'}</h6>
                <p>{'with CJ Hauser.'}<br/>{'The Warehouse, Tallahassee, FL.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'JUN 2015'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'HIPTOWN HIPSHOW'}</h6>
                <p>{'with Oren Wagner, Sarah Miller, and Steve Henn.'}<br/>{'Oak and Alley, Warsaw, IN.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'FEB 2015'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'STUPIDER THAT CUPIDER READING'}</h6>
                <p>{'with Erin Livingston, Tony Brewer, and Steve Henn.'}<br/>{'Oak and Alley, Warsaw, IN.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'NOV 2014'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'SOFT RIVER READING SERIES'}</h6>
                <p>{'with Chris Forhan, Joel Felix, and Patrick Morrissey.'}<br/>{'PRINTtEXT, Indianapolis, IN.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'MAR 2014'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'SOFT RIVER READING SERIES'}</h6>
                <p>{'with Steve Henn, Edwin R. Perry, Chelsea Tadeyske, and Michael Stoneberg.'}<br/>{'PRINTtEXT, Indianapolis, IN.'}</p>
              </div>
            </div>
            <div className="reading d-flex flex-row">
              <div className="reading-date">
                <h6>{'APR 2013'}</h6>
              </div>
              <div className="reading-info">
                <h6>{'IGNITION POETRY SERIES'}</h6>
                <p>{'with Andrew Kreider, Sarah Miller, John Homan, Tony Brewer, and Steve Henn.'}<br/>{'Ignition Music, Goshen, IN.'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

module.exports = Readings;