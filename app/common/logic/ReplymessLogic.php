<?php
namespace app\common\logic;
class ReplymessLogic extends Logic {
    
    
  /*
   * 查看部门信件详情（禁用的回复消息不显示，回复消息排序方式：id，order）
   */
    
   public function getMessContent($id){
       $content=[];
       //查询信件模块id
       $moduleid=db('module')->where(" name='emailbox'")->value('id');
       //查询信件模块type的设定值
       $typedata=db('field')->where(' moduleid='.$moduleid.' and field=\'type\'')->value('setup');
       $typedata=string2array($typedata);
       $typedata=getsetup($typedata);
       //print_r($typedata);exit;
       
       $emaildata=db('emailbox')
                ->alias('e')
                ->join(config('database.prefix').'auth_group a','e.department = a.group_id','left')
                ->field('e.*,a.title as departmentname')
                ->where('e.id='.$id)
                ->find();
       $emaildata['createtime'] = date('Y.m.d',$emaildata['createtime']);
       $emaildata['typename'] = $typedata[$emaildata['type']];
       $content['mess']=$emaildata;     //信件详情内容
       
       
       //查询该信件回复和追问消息
       $map=[
           'is_open'=>1,
           'p_id'=>$id
       ];
       $replydata=db('dreply')->where($map)->order('listorder asc,id asc')->select();
       $count=0;//第一次消息视为跟随信件的回复消息或者追问消息
       foreach ($replydata as $key => $value) {
           $value['createtime'] = date('Y.m.d',$value['createtime']);
           if($count==0){
               
               $content['reply']=$value;
           }else{
               $content['other'][]=$value;
           }
           $count++;
       }
       
       
       return $content;
   }

}
