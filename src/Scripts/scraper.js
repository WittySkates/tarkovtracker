const axios = require('axios');
const cheerio = require('cheerio');

_set()

const getUrls = async () => {
	try {
		const { data } = await axios.get(
			'https://escapefromtarkov.fandom.com/wiki/Quests'
		);
        
		const $ = cheerio.load(data);
		const res = {};
        
        $('#firstHeading').each((_idx, el) => {
			const title = $(el).text()
			res.title.push(title)
		});
        
		return res;
	} 
    catch (error) {
		throw error;
	}
};


const getData = async () => {
	try {
		const { data } = await axios.get(
			'https://escapefromtarkov.fandom.com/wiki/Gunsmith_-_Part_2'
		);
		const $ = cheerio.load(data);
		const res = {title:[], requirements:[], objectives:[], prior:[]};

        $('#firstHeading').each((_idx, el) => {
			const title = $(el).text()
			res.title.push(title)
		});

		$('#Requirements').parent().next().each((_idx, el) => {
			const requirement = $(el).text()
			res.requirements.push(requirement)
		});

		$('#Objectives').parent().next().each((_idx, el) => {
			const objective = $(el).text()
			res.objectives.push(objective)
		});
        
		return res;
	} 
    catch (error) {
		throw error;
	}
};

getData().then((data) => console.log(data));

