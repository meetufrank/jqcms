<?php
/**
 * Created by PhpStorm.
 * User: wangjiang
 * Date: 2018/9/21
 * Time: 14:34
 */
namespace app\home\controller;
use think\Controller;

class Index extends Controller
{
   public function index($id=0){
     
       
       //查询部门列表
       $bmlist=db('auth_group')->where(['type'=>2])->select();
       
       
       //查询部门信箱总数
       $order = "listorder desc,id desc";
       if($id==0&&empty(input('keyword'))){
           $id=$bmlist[0]['group_id'];
       }
       
        
        
        $pageSize =input('limit')?input('limit'):10;
        $order = "listorder desc,id desc"; 
        if(input('post.pagelist')){
            $num=input('post.pagelist');//post和get需要和前台提交的时候保持一致否则无效
        }
        if(input('keyword')){
           $map=[
           'deletetime'=>0,
           'id'=>input('keyword')
          ]; 
        }else{
            $map=[
           'deletetime'=>0,
           'department'=> $id
          ];
        }
         
        $count= Db('emailbox')->where($map)->count();//获取数据的总数量
        $emaillist = db('emailbox')
                ->where($map)
                ->order($order)
                ->paginate($pageSize,$count/*false*/,[//数字10为每页显示的总条数，true为去掉中间的页码部分，false为显示分页的页码
            'type'       => 'page\Page',//分页类名
            'var_page' => 'page',//分页变量
            'page'     => $num,//传入跳转值给当前页
           ]);
             
        //print_r($emaillist);exit;
        $page=$emaillist->render();
        
        $listarr=$emaillist->toArray();
        $emaillists=$listarr['data'];
        foreach ($emaillists as $k=>$v ){
               
                $listarr['data'][$k]['createtime'] = date('Y-m-d',$v['createtime']);
                if($v['is_reply']==1){
                  $listarr['data'][$k]['replyname']='已回复';
                }else{
                  $listarr['data'][$k]['replyname']='未回复'; 
                }
            }
        //print_r($emaillist);exit;
        
         $this->assign('page',$page);
         if($id==0&&!empty(input('keyword'))){
             
           $this->assign('selectid',$listarr['data'][0]['department']);
           $grouptitle=db('auth_group')->where(['group_id'=>$listarr['data'][0]['department']])->value('title');
           $this->assign('selectname',$grouptitle);
           }else{
               $this->assign('selectid',$id);
               $this->assign('selectname',$bmlist[0]['title']);
               
         }
         $this->assign('emaillist',$listarr);
         
         $this->assign('bmlist',$bmlist);  
      
       
      return $this -> fetch();
       
   }
   
  
}