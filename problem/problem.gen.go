// Package problem provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.15.0 DO NOT EDIT.
package problem

// ApiProblem A Problem Details object (RFC 9457).
//
// Additional properties specific to the problem type may be present.
type ApiProblem = Problem

// InputValidationIssue defines model for InputValidationIssue.
type InputValidationIssue = ApiProblem

// InputValidationProblem defines model for InputValidationProblem.
type InputValidationProblem = ApiProblem

// Problem A Problem Details object (RFC 9457).
//
// Additional properties specific to the problem type may be present.
type Problem struct {
	// Detail A human-readable explanation specific to this occurrence of the problem
	Detail *string `json:"detail,omitempty"`

	// Href An absolute URI that, when dereferenced, provides human-readable documentation for the problem type (e.g. using HTML).
	Href *string `json:"href,omitempty"`

	// Instance An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
	Instance *string `json:"instance,omitempty"`

	// Status The HTTP status code generated by the origin server for this occurrence of the problem.
	Status *int32 `json:"status,omitempty"`

	// Title A short summary of the problem type. Written in English and readable for engineers (usually not suited for non technical stakeholders and not localized).
	Title *string `json:"title,omitempty"`

	// Type An absolute URI that identifies the problem type
	Type *string `json:"type,omitempty"`
}

// InputValidationProblemResponse defines model for InputValidationProblemResponse.
type InputValidationProblemResponse = InputValidationProblem

// ProblemResponse A Problem Details object (RFC 9457).
//
// Additional properties specific to the problem type may be present.
type ProblemResponse = Problem
