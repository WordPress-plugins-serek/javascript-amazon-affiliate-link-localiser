var amazonAffiliateTags = {
        "US":"serek-eu-us-20",
        "CA":"serek-eu-ca-20",
        "DE":"serek-eu-de-21",
        "UK":"serek-eu-uk-21",
        "ES":"serek-eu-es-21",
        "IT":"serek-eu-it-21",
        "FR":"serek-eu-fr-21",
        "CN":"serek-eu-cn-23",
        "JP":"",
        "MX":"",
        "IN":"",
        "BR":""
};

var amazonAffiliateRegions = {
	"DE":"DE",      //Germany
	"AT":"DE",      //Austria
	"BE":"DE",      //Belgium
	"DK":"DE",      //Denmark
	"FI":"DE",      //Finland
	"NL":"DE",      //Netherlands
	"NO":"DE",      //Norway
	"PL":"DE",      //Poland
	"SE":"DE",      //Sweden
	"LI":"DE",      //Liechtenstein
	"LU":"DE",      //Luxembourg
	"ES":"ES",      //Spain
	"PT":"ES",      //Portugal
	"AD":"ES",      //Andorra
	"GB":"UK",      //United Kingdom
	"UK":"UK",      //United Kingdom (dummy, used since I use UK and not GB)
	"IE":"UK",      //Ireland
	"IM":"UK",      //Isle of Man
	"IT":"IT",      //Italy
	"VA":"IT",      //Holy See (Vatican City State)
	"FR":"FR",      //France
	"CA":"CA",      //Canada
	"US":"US",      //United States
	"CN":"CN",	//China
	"BR":"BR",	//Brazil
	"IN":"IN",	//India
	"MX":"MX",	//Mexico
	"DEFAULT":"US"	//If no match found above, use this country as default
};

var doNotLocaliseLinksThatMatchRegionAlready = true;

var amazonAffiliateTLDs = {
	"DE":"de",
	"UK":"co.uk",
	"ES":"es",
	"IT":"it",
	"FR":"fr",
	"CA":"ca",
	"US":"com",
	"CN":"cn",
	"JP":"co.jp",
	"MX":"com.mx",
	"IN":"in",
	"BR":"com.br"
};

function localiseLinks(){!function e(){var a=Number(new Date)+5e3;"function"==typeof getCookie&&""!=getCookie("geo_country_code")?localiseAmazonLinks(getCookie("geo_country_code")):Number(new Date)<a&&setTimeout(e,500)}()}function updateQueryStringParameter(e,a,n){var o=new RegExp("([?&])"+a+"=.*?(&|$)","i"),i=-1!==e.indexOf("?")?"&":"?";return e.match(o)?e.replace(o,"$1"+a+"="+n+"$2"):e+i+a+"="+n}function localiseAmazonLinks(e){if(e)for(var a=mapCountryCodesToAmazonRegion(e),n=mapRegionToTLD(a),o=document.querySelectorAll("a[href*='://www.amazon.']"),i=RegExp("([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})"),t=("doNotLocaliseLinksThatMatchRegionAlready"in window?doNotLocaliseLinksThatMatchRegionAlready:!1),r=0,f=o.length;f>r;r++){var l=o[r];l.setAttribute("rel","nofollow");var m=l.getAttribute("data-amazon-asin"),s=mapAmazonRegionToAffiliateTag(a);if(-1!=l.href.indexOf("&field-keywords=")||-1!=l.href.indexOf("?field-keywords=")){var g=l.href.split("://",2)[1].split("/",1)[0];l.href=l.href.replace("://"+g,"://www.amazon."+n),l.href=updateQueryStringParameter(l.href,"tag",s)}else if(m&&(amazonDataEntry=m.toUpperCase().match("\\["+a+"\\](\\s*\\[[a-zA-Z\\.]*\\])*\\s*(\\w*)\\s*($|\\[)"),amazonDataEntry))if(10==amazonDataEntry[2].length){if(t&&-1!=l.href.indexOf("://www.amazon."+n))continue;localiseASINTypeLink(amazonDataEntry[2],l,i,s,a)}else if(2==amazonDataEntry[2].length){var c=mapCountryCodesToAmazonRegion(amazonDataEntry[2]);if(t&&-1!=l.href.indexOf("://www.amazon."+mapRegionToTLD(c)))continue;var u=m.toUpperCase().match("\\["+c+"\\](\\s*\\[[a-zA-Z\\.]*\\])*\\s*(\\w{10})\\s*($|\\[)"),w=mapAmazonRegionToAffiliateTag(c);u&&10==u[2].length&&localiseASINTypeLink(u[2],l,i,w,c)}}}function localiseASINTypeLink(e,a,n,o,i){if(e&&a&&n&&o&&i){var t=a.href.match(n);if(t){var r=a.href.split("://",2)[1].split("/",1)[0];a.href=a.href.replace("://"+r,"://www.amazon."+mapRegionToTLD(i)),a.href=updateQueryStringParameter(a.href,"tag",o),a.href=a.href.split(t[4]).join(e)}}}function mapCountryCodesToAmazonRegion(e){return"amazonAffiliateRegions"in window?amazonAffiliateRegions[e]||amazonAffiliateRegions.DEFAULT:void 0}function mapAmazonRegionToAffiliateTag(e){if("amazonAffiliateTags"in window&&amazonAffiliateTags[e])return amazonAffiliateTags[e];var a="serek-eu-",n="-21";return["US","CA"].indexOf(e)>-1?n="-20":"CN"==e&&(n="-23"),a+e.toLowerCase()+n}function mapRegionToTLD(e){return"amazonAffiliateTLDs"in window?amazonAffiliateTLDs[e]:void 0}localiseLinks();
