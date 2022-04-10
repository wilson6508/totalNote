package com.scheduler;

import com.pojo.PropertiesBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TestScheduler {

    @Autowired
    private PropertiesBean propertiesBean;

    // 此方法完成以後，過 5分鐘，再次執行。
    @Scheduled(fixedDelay = 5 * 60 * 1000)
    public void process() {

        System.out.println(propertiesBean.getSiteName());
        System.out.println(propertiesBean.getHost());
        System.out.println(propertiesBean.getApiTimeout());

    }

}
