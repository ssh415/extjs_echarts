Ext.application({
    name: 'demo',
    launch: function () {
        require.config({
            paths: {
                'echarts': 'echarts/echarts',
                'echarts-x': 'echarts/echarts-x'
            }
        });

        var options = {
            //太阳
            sun: {
                title: {
                    show: true,
                    text: '太阳'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/sun.jpg'
                    },
                    // flat: true,
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //地球
            earth: {
                title: {
                    show: true,
                    text: '地球'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/earth.jpg'
                    },
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            },
                            borderWidth: 1,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //火星
            mars: {
                title: {
                    show: true,
                    text: '火星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/huoxing.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //木星
            jupiter: {
                title: {
                    show: true,
                    text: '木星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/jupiter.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //土星
            saturn: {
                title: {
                    show: true,
                    text: '土星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/tuxing.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //金星
            venus: {
                title: {
                    show: true,
                    text: '金星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/jinxing.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //水星
            mercury: {
                title: {
                    show: true,
                    text: '水星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/shuixing.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //海王星
            neptune: {
                title: {
                    show: true,
                    text: '海王星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/haiwangxing.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //天王星
            uranus: {
                title: {
                    show: true,
                    text: '天王星'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/tianwangxing.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            },
            //月球
            moon: {
                title: {
                    show: true,
                    text: '月球'
                },
                series: [{
                    name: 'globe',
                    type: 'map3d',
                    background: 'asset/background.jpg',
                    // 底图配置
                    baseLayer: {
                        backgroundColor: '',
                        backgroundImage: 'asset/moon.jpg'
                    },
                    hoverable: false,
                    clickable: false,
                    selectedMode: false,
                    // 表层（比如云层）配置
                    // surfaceLayers: [{
                    //     type: 'texture',
                    //     image: 'asset/clouds.png'
                    // }],
                    // 地图绘制配置成只绘制轮廓线和标签
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 0,
                            borderColor: 'yellow',
                            areaStyle: {
                                color: 'rgba(0, 0, 0, 0)'
                            }
                        }
                    },
                    // Empty data
                    data: [{}]
                }]
            }
        };

        Ext.create('Ext.panel.Panel', {
            title: 'Extjs+Echarts 演示demo',
            width: '100%',
            height: 500,
            margin: 5,
            renderTo: Ext.getBody(),
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            text: '天体运行图',
                            handler: function () {
                                Ext.create('Ext.window.Window', {
                                    title: '天体运行图',
                                    autoShow: true,
                                    width: 1200,
                                    height: 800,
                                    layout: 'fit',
                                    constrain: true,
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                '->',
                                                {
                                                    text: '太阳',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.sun);
                                                    }
                                                },
                                                {
                                                    text: '地球',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.earth);
                                                    }
                                                },
                                                {
                                                    text: '火星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.mars);
                                                    }
                                                },
                                                {
                                                    text: '木星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.jupiter);
                                                    }
                                                },
                                                {
                                                    text: '土星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.saturn);
                                                    }
                                                },
                                                {
                                                    text: '金星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.venus);
                                                    }
                                                },
                                                {
                                                    text: '水星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.mercury);
                                                    }
                                                },
                                                {
                                                    text: '海王星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.neptune);
                                                    }
                                                },
                                                {
                                                    text: '天王星',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.uranus);
                                                    }
                                                },
                                                {
                                                    text: '月球',
                                                    handler: function () {
                                                        var con = this.up('window').items.getAt(0);
                                                        con.echart.setOption(options.moon);
                                                    }
                                                },
                                                '->'
                                            ]
                                        }
                                    ],
                                    items: [
                                        {
                                            xtype: 'container',
                                            listeners: {
                                                afterrender: function (con) {
                                                    require(
                                                        [
                                                            'echarts',
                                                            // 'echarts3',
                                                            'echarts-x/echarts-x',
                                                            'echarts-x/chart/map3d'
                                                        ],
                                                        function (echarts) {
                                                            con.setHtml('<div id="globe1" style="width: ' + con.getWidth() + 'px; height: 700px"></div>');
                                                            con.echart = echarts.init(document.getElementById("globe1"));

                                                            con.echart.setOption(options.earth);
                                                        }
                                                    );
                                                }
                                            }
                                        }
                                    ]
                                });
                            }
                        }
                    ]
                }
            ],
            defaults: {
                margin: 10
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: '操作说明',
                    items: [
                        {
                            xtype: 'displayfield',
                            value: '基于Echarts的map3d创建的太阳及行星自转图。'
                        }
                    ]
                }
            ]
        });
    }
});