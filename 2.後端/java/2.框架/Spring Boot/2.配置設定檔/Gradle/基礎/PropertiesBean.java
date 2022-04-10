package com.pojo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:project.properties")
public class PropertiesBean {

    @Value("${site.name}")
    private String siteName;

    @Value("${host}")
    private String host;

    @Value("${api.timeout}")
    private int apiTimeout;

    public String getSiteName() {
        return siteName;
    }

    public void setSiteName(String siteName) {
        this.siteName = siteName;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public int getApiTimeout() {
        return apiTimeout;
    }

    public void setApiTimeout(int apiTimeout) {
        this.apiTimeout = apiTimeout;
    }

}
