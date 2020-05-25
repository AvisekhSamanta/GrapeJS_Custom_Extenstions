const lib = {
    getHeight: function(parentHeight, minPx, maxPx, percentage){
        let height = parentHeight * (percentage / 100);
        if(height > maxPx){
            height = maxPx;
        } else if(height < minPx){
            height = minPx;
        }
    
        return Math.round(height);
    }
};

export default lib;