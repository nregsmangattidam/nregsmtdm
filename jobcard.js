function jobCard() {
    let n = document.getElementById("ward").value;
    let m = document.getElementById("jobcard").value
    if (n<10) {
        window.location.href  = "https://mnregaweb2.nic.in/netnrega/state_html/jcr.aspx?reg_no=KL-02-006-004-00"+n+"%2f"+m+"&state_name=&district_name=&block_name=&panchayat_name=&village_code=1602006004017+++++&fin_year=&panchayat_code=1602006004&Digest=DXLDauVcnWvIAT6moKBidg";
    } else {
        window.location.href  = "https://mnregaweb2.nic.in/netnrega/state_html/jcr.aspx?reg_no=KL-02-006-004-0"+n+"%2f"+m+"&state_name=&district_name=&block_name=&panchayat_name=&village_code=1602006004017+++++&fin_year=&panchayat_code=1602006004&Digest=DXLDauVcnWvIAT6moKBidg";  
    }
    
}