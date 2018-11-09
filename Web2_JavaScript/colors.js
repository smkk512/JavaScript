var Body = 
{
    SetBackgroundColor : function (color)
    {
        document.querySelector('body').style.backgroundColor = color;
    },
    SetFontColor : function (color)
    {
        document.querySelector('body').style.color = color;
    }
};
var Link = 
{
    SetLinkColor : function (color)
    {
        var links = document.querySelectorAll('a'); 
        var i = 0;           
        while(i<links.length)
        {
            links[i].style.color = color;
            ++i;
        }
    }
};

function NightDayHandler(self)
{
    
    if(self.value === 'night')
    {
        Body.SetBackgroundColor('black');
        Body.SetFontColor('white');
        self.value = 'day';

        Link.SetLinkColor('powderblue');
    }
    else
    {
        Body.SetBackgroundColor('white');
        Body.SetFontColor('black');
        self.value = 'night';
        
        Link.SetLinkColor('blue');
    }
}
