const teamProfiles = [
 {"TeamName":"Southport Skylarks", "RealName":"Ste Griffiths", "Connection": "I know Andy since forever", "Supports":"Cardinals", "NflYear1":"2015", "FanYear1":"2019", "Fact":"Despite it's unlikely locale, the Skylarks attract the best of NFL talent thanks to Southport's subtropical Florida-like climate and what some have called 'exploitative' visa arrangements", "Other":"", "Code":"SKY", "Seasons":[2022,2023], "Rank":5, "Former":{"Code":"SKY", "Name":"Southport Skylarks"}},
{"TeamName":"Esquel Collies ", "RealName":"Helen Griffiths", "Connection": "Andy is my friend ", "Supports":"Arizona cardinals ", "NflYear1":"2015", "FanYear1":"2019", "Fact":"Rhumba and Mora are the real Esquel Collies. One year they killed 16 birds by grabbing them out of the sky. Now we're gonna crush it like they crush little birdie bones!", "Other":"", "Code":"ESQ", "Seasons":[2022], "Rank":7, "Former":{"Code":"ESQ", "Name":"Esquel Collies "}},
{"TeamName":"On it like a Charbonnet", "RealName":"Jonny Hubble", "Connection": "Trebz and Kendrew", "Supports":"Packers", "NflYear1":"2014", "FanYear1":"2018", "Fact":"Joe Burrow is the whole team it retires once he retires ", "Other":"", "Code":"OLC", "Seasons":[2022,2023], "Rank":13, "Former":{"Code":"BRR", "Name":"Burrow row row your boat"}},
{"TeamName":"Packers FC", "RealName":"Brandon Meadow", "Connection": "Andy Trebble invited me. Friends since primary school. ", "Supports":"Green Bay Packers", "NflYear1":"2014", "FanYear1":"2021", "Fact":"Packers FC were originally a Peckham-based association football club, but after growing tired of low pay and nil-nil draws, they chose to move the team to the desirable fish-packing district of New England and take up a more interesting sport. (Fact added by the editor)", "Other":"", "Code":"PFC", "Seasons":[2022], "Rank":14, "Former":{"Code":"PFC", "Name":"Packers FC"}},
{"TeamName":"The Brady Bunch", "RealName":"Bryn Joslin", "Connection": "Josh Kendrew is my brother in law and invited us to join", "Supports":"The Bucs (not because of Brady)", "NflYear1":"2020", "FanYear1":"2021", "Fact":"After doing abysmally for a couple of decades, Hugh Laurie and Tony Robinson bought out the team to see if they could finally take them to the playoffs and ultimately the Super Bowl.", "Other":"", "Code":"TBB", "Seasons":[2022,2023], "Rank":9, "Former":{"Code":"TBB", "Name":"The Brady Bunch"}},
{"TeamName":"Naperville Bearcats", "RealName":"Mike Wallbank", "Connection": "Invited by Andy. Known him for quite a while due to common hometown!", "Supports":"Bears", "NflYear1":"2014", "FanYear1":"2019", "Fact":"Naperville is the city I live in (~30 miles west of Chicago) and Bearcats is the name of the athletics teams at the University of Cincinnati, where I’m employed. It was a historic season for the Cincinnati Bearcats football team last season, the first non-power 5 conference team to make the playoffs, and I really got into college football for the first time and made it to a game, so I had to name my team after them!", "Other":"", "Code":"NAP", "Seasons":[2022,2023], "Rank":12, "Former":{"Code":"NAP", "Name":"Naperville Bearcats"}},
{"TeamName":"Bijan for men", "RealName":"Josh Kendrew", "Connection": "As with everyone, I know Trebs. ", "Supports":"San Francisco 49ers", "NflYear1":"2012", "FanYear1":"2018", "Fact":"They’ve been in the playoffs fewer times than the Detroit Lions", "Other":"", "Code":"BFM", "Seasons":[2022,2023], "Rank":11, "Former":{"Code":"MFB", "Name":"Mayfield Bakery"}},
{"TeamName":"TBC", "RealName":"Joshua James Langlois", "Connection": "I was poached from the former league of the Commish", "Supports":"Denver Broncos", "NflYear1":"2005", "FanYear1":"2016", "Fact":"They’ve yet to really find their true identity. Hopefully this season they’ll ‘find themselves’.", "Other":"Into NFL for almost 20 years and 6th season in fantasy. Listen to at least 3 hours of NFL podcasts a week. Still crap at fantasy. Game on!", "Code":"TBC", "Seasons":[2022,2023], "Rank":4, "Former":{"Code":"TBC", "Name":"TBC"}},
{"TeamName":"The Cheetahs", "RealName":"Naim El-harrati", "Connection": "Through Ste and our morning coffee ☺️", "Supports":"The Dolphins", "NflYear1":"2012", "FanYear1":"2020", "Fact":"A team full of misfits with a common goal, to win at all cost. Powered by good old American Chocolate Milk!", "Other":"", "Code":"CHE", "Seasons":[2022,2023], "Rank":6, "Former":{"Code":"CHE", "Name":"The Cheetahs"}},
{"TeamName":"Rubba Dub Chubb", "RealName":"Andrew Trebble", "Connection": "Friend of Trebz", "Supports":"Seattle Seahawks ", "NflYear1":"2015", "FanYear1":"2018", "Fact":"The Mahomey's as they are affectionately known, are based in the blossoming community of Liverpool... Huyton! Although Liverpool is strongly associated with Soccer, the good folks of Huyton have ventured further a field as they have drawn weary of the Klopp / Lampard style of play - gravitating to the free wheeling style of the Mahomey's. More recently small section of the fan base have become disgruntled by odd decisions made by the team owner "Andrew Trebble", specifically not drafting a QB in the first round of the draft (like other more popular owners) and ending up with seemingly no QB options for the upcoming season, this has led to the lesser known "Trebble Out" movement! ", "Other":"We offer fantastic benefits / dividends for all stakeholders for those looking to invest! ", "Code":"RDC", "Seasons":[2022,2023], "Rank":8, "Former":{"Code":"CRT", "Name":"Country Road Take Mahomes"}},
{"TeamName":"The category is ‘country love’", "RealName":"Grace Joslin", "Connection": "JK is my brother and roped us in to make him look better I presume", "Supports":"Green Bay packers", "NflYear1":"2016", "FanYear1":"2021", "Fact":"After being destroyed in the riff off by the bellas and dsm matthews and bakhtiari thought they’d take a punt at redeeming their losing category with an nfl team. This may prove as a further disgrace. ", "Other":"", "Code":"CCL", "Seasons":[2022,2023], "Rank":10, "Former":{"Code":"CCL", "Name":"The category is ‘country love’"}},
{"TeamName":"Lockett Down", "RealName":"Tom Baskerville", "Connection": "Trebz ", "Supports":"Seahawks", "NflYear1":"2017", "FanYear1":"2017", "Fact":"Coming off the back of a super bowl winning performance in the last fantasy league, a likely last place finish is on the cards", "Other":"", "Code":"LCD", "Seasons":[2022,2023], "Rank":1, "Former":{"Code":"LCD", "Name":"Lockett Down"}},
{"TeamName":"Beginners Luck", "RealName":"Joel Naisbitt", "Connection": "Mr Andrew Trebble", "Supports":"Minnesota Vikings", "NflYear1":"2020", "FanYear1":"2020", "Fact":"The BL mascot is a Emperor Penguin, which while unusual by itself, is even more odd due to the fact Beginners Luck are located in perpetually sunny South Florida.", "Other":"As a now second year franchise, there was consideration taken change the name. However, market research showed that there is now strong recognition with the now iconic ‘Beginners Luck’ logo so the name stays. ", "Code":"BGL", "Seasons":[2022,2023], "Rank":2, "Former":{"Code":"BGL", "Name":"Beginners Luck"}},
{"TeamName":"The Red Rifles", "RealName":"Tom Wiggins", "Connection": "I know trebs, but Ste invited me", "Supports":"Bears", "NflYear1":"2012", "FanYear1":"2013", "Fact":"Andy Dalton attempted to sue the Red Rifles for use of his likeness in their logo, but the judge threw the case out on the grounds that ‘having to use that face as your logo is punishment enough’", "Other":"", "Code":"RED", "Seasons":[2022,2023], "Rank":3, "Former":{"Code":"RED", "Name":"The Red Rifles"}},
{"TeamName":"Cannot touch my Williams", "RealName":"Tom Langlois", "Connection": "Brother of Josh. Brother in law of Tom B. Friend of Andy from Soul Survivor!", "Supports":"Miami Dolphins", "NflYear1":"2005", "FanYear1":"2014", "Fact":"Story behind name: Always try to come up with a pun related name including players on my squad. The backstory involves me sitting on the toilet late and night thinking the name would be funny. ", "Other":"", "Code":"CTW", "Seasons":[2023], "Rank":99, "Former":{"Code":"CTW", "Name":"Cannot touch my Williams"}},
{"TeamName":"Resident American", "RealName":"Ethan Langston", "Connection": "Became friends with Trebz when I spent a semester at university of Liverpool in 2016 and have stayed in touch with some of the frontline crew ever since I went there. Still in an FPL league with many of them! ", "Supports":"I guess the falcons because I live in atlanta but I cheer for my fantasy players over them, much bigger college football fan than nfl", "NflYear1":"2000", "FanYear1":"2007", "Fact":"Owned by an oil state and everyone hates them", "Other":"", "Code":"USA", "Seasons":[2023], "Rank":100, "Former":{"Code":"USA", "Name":"Resident American"}},
];

// Functions
const ordinate = n=>n+(n%10==1&&n%100!=11?'st':n%10==2&&n%100!=12?'nd':n%10==3&&n%100!=13?'rd':'th')

// Season constants
const season = 2023;

// Enrich profiles with calcs
teamProfiles.forEach((p) => p.FanSeason = `${ordinate(season - p.FanYear1)} season`);

// Split and sort to active and alumni profiles
const activeProfiles = teamProfiles.filter((x) =>
  x.Seasons.some((s) => s === season)
);

activeProfiles.sort((a, b) => a.Rank - b.Rank);

const alumniProfiles = teamProfiles.filter(
  (x) => x.Seasons.every((s) => s !== season)
);

alumniProfiles.sort((a, b) => a.Rank - b.Rank);

module.exports = {
  name: "The Pigskin Chronicle",
  season,
  activeProfiles,
  alumniProfiles,
  profiles: teamProfiles,
  infoBoxes: teamProfiles.map((p) => {
    return {
      team: p.TeamName,
      owner: p.RealName,
      code: p.Code.toLowerCase(),
    };
  }),
};
