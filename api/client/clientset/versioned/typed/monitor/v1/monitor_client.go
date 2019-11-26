/*
 * Tencent is pleased to support the open source community by making TKEStack
 * available.
 *
 * Copyright (C) 2012-2019 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at
 *
 * https://opensource.org/licenses/Apache-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OF ANY KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations under the License.
 */

// Code generated by client-gen. DO NOT EDIT.

package v1

import (
	rest "k8s.io/client-go/rest"
	"tkestack.io/tke/api/client/clientset/versioned/scheme"
	v1 "tkestack.io/tke/api/monitor/v1"
)

type MonitorV1Interface interface {
	RESTClient() rest.Interface
	ConfigMapsGetter
	MetricsGetter
}

// MonitorV1Client is used to interact with features provided by the monitor.tkestack.io group.
type MonitorV1Client struct {
	restClient rest.Interface
}

func (c *MonitorV1Client) ConfigMaps() ConfigMapInterface {
	return newConfigMaps(c)
}

func (c *MonitorV1Client) Metrics() MetricInterface {
	return newMetrics(c)
}

// NewForConfig creates a new MonitorV1Client for the given config.
func NewForConfig(c *rest.Config) (*MonitorV1Client, error) {
	config := *c
	if err := setConfigDefaults(&config); err != nil {
		return nil, err
	}
	client, err := rest.RESTClientFor(&config)
	if err != nil {
		return nil, err
	}
	return &MonitorV1Client{client}, nil
}

// NewForConfigOrDie creates a new MonitorV1Client for the given config and
// panics if there is an error in the config.
func NewForConfigOrDie(c *rest.Config) *MonitorV1Client {
	client, err := NewForConfig(c)
	if err != nil {
		panic(err)
	}
	return client
}

// New creates a new MonitorV1Client for the given RESTClient.
func New(c rest.Interface) *MonitorV1Client {
	return &MonitorV1Client{c}
}

func setConfigDefaults(config *rest.Config) error {
	gv := v1.SchemeGroupVersion
	config.GroupVersion = &gv
	config.APIPath = "/apis"
	config.NegotiatedSerializer = scheme.Codecs.WithoutConversion()

	if config.UserAgent == "" {
		config.UserAgent = rest.DefaultKubernetesUserAgent()
	}

	return nil
}

// RESTClient returns a RESTClient that is used to communicate
// with API server by this client implementation.
func (c *MonitorV1Client) RESTClient() rest.Interface {
	if c == nil {
		return nil
	}
	return c.restClient
}