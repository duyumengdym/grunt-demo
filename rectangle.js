$(function() {
    // get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /**解决浮点舍入误差 */
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    /*calc button click event */
    $btnCal.click(function(){
      // get value
      var w = Number($width.val()),
          h = Number($height.val());
      // calculate
      var p = 2 * roundFractional(w + h, 1),
          a = roundFractional(w * h, 2);
          ;   
      // output 
      $perimeter.val(p);
      $area.val(a);
    });
    
    
      
  });