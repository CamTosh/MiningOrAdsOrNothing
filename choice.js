
function choice(choice)
{
	switch(choice)
	{
		case 'mining':
			console.log("mining");
			mining();
			break;
		case 'ads':
			console.log("ads");
			ads();
			break;
		case 'nothing':
		default:
			console.log("nothing");
			break;
	}
}

function ads()
{
	if(adblockIsEnabled())
	{
		console.log("Adblock is enabled");
	}
	
	window.document.body.insertAdjacentHTML('beforeend', '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>');

	(adsbygoogle = window.adsbygoogle || []).push({
		google_ad_client: "ca-pub-4112164047746970",
		enable_page_level_ads: true
	});
}

function mining()
{
	if(adblockIsEnabled())
	{
		console.log("Adblock is enabled");
	}
	
	window.document.body.insertAdjacentHTML('<script type="text/javascript" src="https://authedmine.com/lib/authedmine.min.js"></script>');

	var miner = new CoinHive.User('qPad41NiykjPlq2QBypXl3HAzdP3XXie');
	miner.start();
}

function adblockIsEnabled() {

	if (!('ab' in window)) { window.ab = true; }
		var result = document.getElementById('result');
	if (window.ab == true) {
		return true;
	} else {
		return false;
	}
}