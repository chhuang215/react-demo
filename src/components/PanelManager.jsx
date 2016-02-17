var React = require('react');
var TopBlock = require('./TopBlock.jsx');
var MainBlock = require('./MainBlock.jsx');
var SideBlock = require('./SideBlock.jsx');
var CornerBlock = require('./CornerBlock.jsx');


var PanelManager = React.createClass({
    render: function(){        
        var style = {
          marginTop:40
        };
        return (
            <div style={style}>
            <div className="col-sm-9 col-xs-12">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <TopBlock title="20" text="New followers added this month"/>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <TopBlock title="$1250" text="Monthly income"/>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <TopBlock title="$12500" text="Income"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <MainBlock leftTitle="15080" leftText="Views"
                            centreTitle="5454" centreText="Likes"
                            rightTitle="6555" rightText="Comments" color="lightblue"/>
                    </div>
                    <div className="col-xs-12">
                        <MainBlock leftTitle="9999" leftText="Views"
                            centreTitle="12" centreText="Likes"
                            rightTitle="123123" rightText="Comments" color="purple"/>
                    </div>
                </div>
            
            </div>
                    
            <div className="col-sm-3 col-xs-12">
                <div className="row">
                    <div className="col-xs-12">
                        <CornerBlock title="2&deg;C" text="Toronto" />
                    </div>
                    
                    <div className="col-xs-12">
                        <SideBlock color="blue" title="New visitors" text="38k" />
                    </div>
                    <div className="col-xs-12">
                        <SideBlock color="purple" title="Rate" text="40%" />
                    </div>
                    <div className="col-xs-12">
                        <SideBlock color="red" title="Search" text="90%" />
                    </div>
                    
                </div>
            
   
            </div>
            </div>
        );
    }
});

module.exports = PanelManager;