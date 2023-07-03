<?php
require_once( 'core.php' );
require_api('session_api.php');
require_api( 'form_api.php' );
form_security_validate( 'bug_report' );
$data_arra=[];
$p_fields = ['category_id','reproducibility','severity','priority','platform',
        'os','os_build','handler_id','summary','description','steps_to_reproduce',
        'additional_info','view_state'];
foreach ($_POST as $key => $value) {
  if(in_array($key,$p_fields)){
    $data_array[$key]=$value;
  }
}
session_set('p_bug_form_data',null);
session_set('p_bug_form_data',$data_array);