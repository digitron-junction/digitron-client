syntax = "proto3";

package minter.minter;

option go_package = "minter/x/minter/types";

message Post {
	string creator = 1;
	string owner = 2;
	string image = 3;
	string createdAt = 4;
}