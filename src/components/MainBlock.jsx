var React = require('react');
var MainBlock = React.createClass({
    render:function(){
        
        var panelStyle={
            minHeight:240
        }
        
        if(this.props.color){
            panelStyle.background = this.props.color;
        }
        
        return (
            <div className="panel panel-default">
                <div style={panelStyle} className="panel-body">
                    <br/>
                    <br/>
                    <br/> 
                    <br/>
                    <br/>       
                </div>
                <div className="panel-footer">
                    <div className="row">
                        <div className="col-xs-4 text-center">
                            <h4>{this.props.leftTitle}</h4>
                            <p>{this.props.leftText}</p>
                        </div>
                        <div className="col-xs-4 text-center">
                            <h4>{this.props.centreTitle}</h4>
                            <p>{this.props.centreText}</p>
                        </div>
                        <div className="col-xs-4 text-center">
                            <h4>{this.props.rightTitle}</h4>
                            <p>{this.props.rightText}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
});


module.exports = MainBlock;