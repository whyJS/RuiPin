/**
 * Created by huwei on 15-10-21.
 */

/**   公共工具   **/
var utils={
    /**  去前后空格  **/
    Trim:function(string){
        return string.replace(/(^\s*)|(\s*$)/g, "");
    },


    /**  规格化文本区域，超出省略显示，在title上显示全部文本  **/
    FormatTextfieldLength : function(ele, length){
        var text=this.Trim($(ele).html());
        if(text.length > length){
            $(ele).attr('title', text);
            text = text.substr(0, length-3);
            text += '...';
            $(ele).html(text);
            return true;
        }
        return false;
    },

    /* 绑定全选按钮 */
    CheckAllBottonBinding: function($checkAllBtn, $checkBtns){
        $checkAllBtn.click(function(){
            if($checkAllBtn.prop("checked"))
               $checkBtns.prop("checked", true) ;
            else
                $checkBtns.prop("checked", false) ;
        });

        $checkBtns.click(function(){
            var allCheck = true;
            $checkBtns.each(function(){
               if(!$(this).prop("checked")){
                   allCheck=false;
               }
            });
            if($checkAllBtn.prop("checked")!=allCheck){
                $checkAllBtn.prop("checked", allCheck);
            }
        })

    }
}
