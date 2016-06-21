var c =
    
{
    name: 'bob',
    type: function()
    
    
    {
       
        var that = this;
        that.name = "bob new";
        
        var setText = function(newName)
        {
            that.name = newName;
        }
        
        setText("bob new new");
        console.log(that);
    }
    
    
}

c.type();
