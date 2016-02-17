var React = require('react');
var TopBlock = React.createClass({
    render:function(){
        
     
        var titleStyle = {
            color:'#363636'
        };
        
        var textStyle={
            color:'#787878'
        };
             
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <h2 style={titleStyle}>{this.props.title}</h2>
                    <p style={textStyle}>{this.props.text}</p>
                </div>
            </div>
        );
    }
});


module.exports = TopBlock;