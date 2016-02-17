var React = require('react');
var SideBlock = React.createClass({
    render:function(){
        
        var panelStyle={
            background:'black',
            color:'white'
        }
        var titleStyle={
            margin:0,
            padding:0
        }
        
        if(this.props.color){
            panelStyle.background = this.props.color;
        }
        
        
        return (
            <div className="panel panel-default">
                <div style={panelStyle} className="panel-heading">
                    <span>{this.props.title}</span>
                    <h2 style={titleStyle}>{this.props.text}</h2>
                </div>
                <div className="panel-body">
                    <br/> 
                    <br/>
                    <br/>      
                </div>
            </div>
        );
    }
});


module.exports = SideBlock;