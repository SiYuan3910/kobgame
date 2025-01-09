package com.kob;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

// 主要是下面这行注解
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BackendApplicationTests {
    @Test
    void contextLoads() {
    }
}