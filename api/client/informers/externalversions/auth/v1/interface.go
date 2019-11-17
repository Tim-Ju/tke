/*
 * Copyright 2019 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Code generated by informer-gen. DO NOT EDIT.

package v1

import (
	internalinterfaces "tkestack.io/tke/api/client/informers/externalversions/internalinterfaces"
)

// Interface provides access to all the informers in this group version.
type Interface interface {
	// APIKeys returns a APIKeyInformer.
	APIKeys() APIKeyInformer
	// APISigningKeys returns a APISigningKeyInformer.
	APISigningKeys() APISigningKeyInformer
	// ConfigMaps returns a ConfigMapInformer.
	ConfigMaps() ConfigMapInformer
	// LocalIdentities returns a LocalIdentityInformer.
	LocalIdentities() LocalIdentityInformer
}

type version struct {
	factory          internalinterfaces.SharedInformerFactory
	namespace        string
	tweakListOptions internalinterfaces.TweakListOptionsFunc
}

// New returns a new Interface.
func New(f internalinterfaces.SharedInformerFactory, namespace string, tweakListOptions internalinterfaces.TweakListOptionsFunc) Interface {
	return &version{factory: f, namespace: namespace, tweakListOptions: tweakListOptions}
}

// APIKeys returns a APIKeyInformer.
func (v *version) APIKeys() APIKeyInformer {
	return &aPIKeyInformer{factory: v.factory, tweakListOptions: v.tweakListOptions}
}

// APISigningKeys returns a APISigningKeyInformer.
func (v *version) APISigningKeys() APISigningKeyInformer {
	return &aPISigningKeyInformer{factory: v.factory, tweakListOptions: v.tweakListOptions}
}

// ConfigMaps returns a ConfigMapInformer.
func (v *version) ConfigMaps() ConfigMapInformer {
	return &configMapInformer{factory: v.factory, tweakListOptions: v.tweakListOptions}
}

// LocalIdentities returns a LocalIdentityInformer.
func (v *version) LocalIdentities() LocalIdentityInformer {
	return &localIdentityInformer{factory: v.factory, tweakListOptions: v.tweakListOptions}
}
